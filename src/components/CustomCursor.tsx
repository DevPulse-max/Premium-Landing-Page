import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'motion/react';

type CursorState =
  | 'default'
  | 'hover'
  | 'text'
  | 'link'
  | 'button'
  | 'click'
  | 'loading'
  | 'drag'
  | 'unavailable'
  | 'precision';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [state, setState] = useState<CursorState>('default');
  const [isMobile, setIsMobile] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleIdRef = useRef(0);

  // High performance spring tracking for the pointer tip
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Premium delayed lag springs for the trailing glow
  const glowX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 0.6 });
  const glowY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 0.6 });

  // Tight spring for the active cursor visual itself
  const cursorX = useSpring(mouseX, { damping: 20, stiffness: 350, mass: 0.2 });
  const cursorY = useSpring(mouseY, { damping: 20, stiffness: 350, mass: 0.2 });

  // Mobile Cursor touch values & springs
  const mTouchX = useMotionValue(-100);
  const mTouchY = useMotionValue(-100);
  const mobileCursorX = useSpring(mTouchX, { damping: 25, stiffness: 300, mass: 0.5 });
  const mobileCursorY = useSpring(mTouchY, { damping: 25, stiffness: 300, mass: 0.5 });

  const [mobileVisible, setMobileVisible] = useState(false);
  const [mobileState, setMobileState] = useState<'idle' | 'touch' | 'press' | 'drag' | 'loading'>('idle');
  const [touchTrail, setTouchTrail] = useState<{ x: number; y: number; opacity: number; scale: number; id: number }[]>([]);
  const touchIdRef = useRef(0);

  useEffect(() => {
    if (!isMobile) return;

    let fadeTimeout: any = null;
    let isDragging = false;

    const handleTouchStart = (e: TouchEvent) => {
      if (fadeTimeout) clearTimeout(fadeTimeout);
      setMobileVisible(true);
      isDragging = false;

      const touch = e.touches[0];
      mTouchX.set(touch.clientX);
      mTouchY.set(touch.clientY);

      // Clear trail initially
      setTouchTrail([]);

      // Detect target
      const target = e.target as HTMLElement | null;
      if (target && target.closest('button, a, [role="button"], .glow-btn-orange, .glass-panel, [id^="faq-item-"], [id^="pricing-card-"]')) {
        setMobileState('press');
      } else {
        setMobileState('idle');
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const curX = touch.clientX;
      const curY = touch.clientY;
      
      mTouchX.set(curX);
      mTouchY.set(curY);

      if (!isDragging) {
        isDragging = true;
        setMobileState('drag');
      }

      // Append trail point for the "DRAG" state 04 trail
      setTouchTrail((prev) => {
        const newPoint = {
          x: curX,
          y: curY,
          opacity: 0.6,
          scale: 0.8,
          id: touchIdRef.current++
        };
        // Keep last 4 trail points
        const updated = [...prev, newPoint].slice(-4);
        return updated.map((pt, idx, arr) => {
          const ratio = (idx + 1) / arr.length;
          return {
            ...pt,
            opacity: ratio * 0.5,
            scale: ratio * 0.7
          };
        });
      });
    };

    const handleTouchEnd = (e: TouchEvent) => {
      // On touch end, set back to idle first, and after a short delay, fade out
      setMobileState('idle');
      
      // If a button or premium CTA was touched, show a brief loading processing animation (State 05)
      const target = e.target as HTMLElement | null;
      if (target && target.closest('.glow-btn-orange, button[id*="cta"], button[id*="start"]')) {
        setMobileState('loading');
        fadeTimeout = setTimeout(() => {
          setMobileVisible(false);
        }, 1200);
      } else {
        fadeTimeout = setTimeout(() => {
          setMobileVisible(false);
        }, 800);
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      if (fadeTimeout) clearTimeout(fadeTimeout);
    };
  }, [isMobile, mTouchX, mTouchY]);

  useEffect(() => {
    // Check if pointer device is fine (desktop with mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(!e.matches);
    };

    handleMediaChange(mediaQuery);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange);
    } else {
      mediaQuery.addListener(handleMediaChange);
    }

    if (mediaQuery.matches) {
      document.documentElement.classList.add('custom-cursor-active');
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaChange);
      } else {
        mediaQuery.removeListener(handleMediaChange);
      }
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Detect hover target to dynamically update state
      const target = e.target as HTMLElement | null;
      if (!target) {
        setState('default');
        return;
      }

      // 1. Check Unavailable / Not Allowed
      const isUnavailable = target.closest('[disabled], .disabled, [aria-disabled="true"], .cursor-not-allowed');
      if (isUnavailable) {
        setState('unavailable');
        return;
      }

      // 2. Check Precision (Canvases, Recharts wrapper, or special ROI charts)
      const isPrecision = target.closest('[data-cursor="precision"], canvas, svg.recharts-surface, .showcase-node, .recharts-responsive-container, .recharts-wrapper');
      if (isPrecision) {
        setState('precision');
        return;
      }

      // 3. Check Drag targets (Sliders, draggable zones)
      const isDrag = target.closest('[draggable="true"], [data-cursor="drag"], .draggable, .slider, .carousel');
      if (isDrag) {
        setState('drag');
        return;
      }

      // 4. Check Navigation Scroll Links and general clean anchors
      const isLink = target.closest('a, [role="link"], button[id^="nav-link-"], button[id^="nav-mobile-link-"], .nav-link, [data-cursor="link"]');
      if (isLink) {
        setState('link');
        return;
      }

      // 5. Check Action Buttons & CTA Triggers
      const isButton = target.closest('button, [role="button"], .btn, .button, .glow-btn-orange, [data-cursor="button"]');
      if (isButton) {
        setState('button');
        return;
      }

      // 6. Check Text fields and standard readable document text layers
      const isTextField = target.closest('input[type="text"], input[type="email"], input[type="search"], input[type="tel"], input[type="url"], textarea, [contenteditable="true"]');
      if (isTextField) {
        setState('text');
        return;
      }

      const isText = target.closest('p, h1, h2, h3, h4, h5, h6, span, li, blockquote');
      if (isText) {
        // Only trigger text state if not inside an interactive button/link/card
        const parentInteractive = target.closest('button, a, .glass-panel, [role="button"]');
        if (!parentInteractive) {
          setState('text');
          return;
        }
      }

      // 7. Check General Luxury Panels with custom hover scale effects
      const isHoverCard = target.closest('[id^="faq-item-"], [id^="pricing-card-"], [id^="testimonial-card-"], .why-us-card, .process-card, [data-cursor="hover"]');
      if (isHoverCard) {
        setState('hover');
        return;
      }

      // Default state
      setState('default');
    };

    const handleMouseDown = (e: MouseEvent) => {
      // Trigger click ripple animation
      const id = rippleIdRef.current++;
      setRipples((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);

      // Temporarily change state to 'click' for clicking visual feedback
      setState('click');

      // Check if button or CTA was clicked to trigger an interactive loading state (State 07)
      const target = e.target as HTMLElement | null;
      if (target && target.closest('.glow-btn-orange, button[id*="cta"], button[id*="start"]')) {
        setTimeout(() => {
          setState('loading');
          setTimeout(() => {
            setState('default');
          }, 1000);
        }, 150);
      }
    };

    const handleMouseUp = () => {
      setState((prev) => {
        if (prev === 'click' || prev === 'loading') return prev;
        return 'default';
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isMobile, isVisible, mouseX, mouseY]);

  // Clean up completed ripples
  const handleRippleEnd = (id: number) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  };

  if (isMobile) {
    if (!mobileVisible) return null;
    return (
      <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
        {/* Trail Points for DRAG state (State 04) */}
        {mobileState === 'drag' && touchTrail.map((point) => (
          <div
            key={point.id}
            style={{
              left: point.x,
              top: point.y,
              transform: `translate(-50%, -50%) scale(${point.scale})`,
              opacity: point.opacity,
              background: 'radial-gradient(circle, #ffd700 0%, #ffa500 100%)',
              boxShadow: '0 0 8px rgba(255,215,0,0.6)',
            }}
            className="absolute w-3 h-3 rounded-full pointer-events-none transition-all duration-75"
          />
        ))}

        {/* Primary Golden Circle Mobile Cursor */}
        <motion.div
          style={{
            x: mobileCursorX,
            y: mobileCursorY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          className="absolute top-0 left-0 flex items-center justify-center pointer-events-none"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileState}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative flex items-center justify-center"
            >
              {/* Outer Ambient Glow Bloom */}
              <div 
                className="absolute rounded-full pointer-events-none blur-[12px] opacity-60"
                style={{
                  width: mobileState === 'touch' ? '64px' : mobileState === 'press' ? '50px' : '44px',
                  height: mobileState === 'touch' ? '64px' : mobileState === 'press' ? '50px' : '44px',
                  background: 'radial-gradient(circle, rgba(255,215,0,0.4) 0%, rgba(255,165,0,0) 70%)',
                }}
              />

              {/* Core Circle States */}
              {mobileState === 'loading' ? (
                /* STATE 05: LOADING (Rotating glowing golden dash ring) */
                <div className="relative w-11 h-11 flex items-center justify-center">
                  <svg className="animate-spin w-full h-full text-[#ffd700]" viewBox="0 0 24 24" fill="none">
                    <circle
                      className="opacity-20"
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="14 10"
                      className="opacity-90"
                    />
                  </svg>
                  {/* Inner golden glowing core */}
                  <div className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#ffd700] to-[#ffa500] shadow-[0_0_8px_#ffd700]" />
                </div>
              ) : (
                /* STATES 01, 02, 03, 04 */
                <motion.div
                  animate={{
                    width: mobileState === 'touch' ? 56 : mobileState === 'press' ? 36 : 44,
                    height: mobileState === 'touch' ? 56 : mobileState === 'press' ? 36 : 44,
                    borderColor: mobileState === 'press' ? '#ffa500' : '#ffd700',
                  }}
                  className="rounded-full border-[2px] flex items-center justify-center relative shadow-[0_0_12px_rgba(255,215,0,0.5),inset_0_0_6px_rgba(255,215,0,0.2)]"
                  style={{
                    borderColor: '#ffd700',
                  }}
                >
                  {/* Central Glowing Golden Dot */}
                  <motion.div
                    animate={{
                      scale: mobileState === 'press' ? 1.8 : mobileState === 'touch' ? 1.2 : 1,
                      background: mobileState === 'press' 
                        ? 'linear-gradient(135deg, #ffa500 0%, #ff8c00 100%)' 
                        : 'linear-gradient(135deg, #ffd700 0%, #ffa500 100%)',
                    }}
                    className="w-2.5 h-2.5 rounded-full shadow-[0_0_8px_#ffd700]"
                  />
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    );
  }

  if (!isVisible) return null;

  // Render cursor visual representation based on state with correct offsets
  const getCursorOffset = (state: CursorState) => {
    switch (state) {
      case 'text':
        return { x: -6, y: -12 }; // Centered over I-beam
      case 'link':
        return { x: -3, y: -1 };  // Tip of the index finger (aligned top-left-ish)
      case 'precision':
        return { x: -16, y: -16 }; // Exactly centered crosshair
      case 'unavailable':
        return { x: -12, y: -12 }; // Centered circle
      case 'loading':
        return { x: -14, y: -14 }; // Centered loader ring
      case 'click':
        return { x: -10, y: -10 }; // Click feedback centers
      default:
        return { x: -2, y: -2 };  // Arrow tip hotspot (standard pointer)
    }
  };

  const offset = getCursorOffset(state);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* 1. Trailing Ambient Glow (State-dependent) */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: state === 'precision' || state === 'text' ? -20 : -12,
          translateY: state === 'precision' || state === 'text' ? -20 : -12,
        }}
        className="absolute w-10 h-10 rounded-full mix-blend-screen pointer-events-none"
        animate={{
          scale: state === 'hover' ? 1.8 : state === 'button' ? 2.2 : state === 'click' ? 1.2 : 1,
          opacity: state === 'unavailable' ? 0.3 : 0.8,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <div 
          className="w-full h-full rounded-full blur-[10px]" 
          style={{
            background: 'radial-gradient(circle, rgba(255,138,61,0.55) 0%, rgba(255,138,61,0) 75%)'
          }}
        />
      </motion.div>

      {/* 2. Custom Click Ripples (State 06: Click Effect) */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ opacity: 0.8, scale: 0 }}
            animate={{ opacity: 0, scale: 2.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            onAnimationComplete={() => handleRippleEnd(ripple.id)}
            style={{
              left: ripple.x,
              top: ripple.y,
              x: '-50%',
              y: '-50%',
            }}
            className="absolute w-12 h-12 rounded-full border-2 border-[#ff8a3d]/60 mix-blend-screen pointer-events-none shadow-[0_0_15px_rgba(255,138,61,0.3)]"
          />
        ))}
      </AnimatePresence>

      {/* 3. Primary Custom Cursor Element */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: offset.x,
          translateY: offset.y,
        }}
        className="absolute top-0 left-0 transition-all duration-150 ease-out"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={state}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.15, ease: 'easeInOut' }}
            className="flex items-center justify-center pointer-events-none"
          >
            {/* STATE 01 & 02: DEFAULT & HOVER (Sleek Pointer) */}
            {(state === 'default' || state === 'hover') && (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                {/* Outermost sharp stroke */}
                <path
                  d="M4.5 4.5 L19.5 11.5 L12.5 13.5 L10.5 20.5 Z"
                  fill="#150e0a"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                {/* Dynamic Inner core glow during general hover */}
                {state === 'hover' && (
                  <path
                    d="M6 6.5 L16.5 11.5 L11.5 13 L10 17.5 Z"
                    fill="#ff8a3d"
                    opacity="0.8"
                  />
                )}
              </svg>
            )}

            {/* STATE 03: TEXT SELECT (I-beam cursor with orange glow) */}
            {state === 'text' && (
              <div className="relative flex items-center justify-center w-3 h-6 drop-shadow-[0_0_6px_rgba(255,138,61,0.7)]">
                <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
                  {/* Outer orange outline glow */}
                  <path
                    d="M2 3H10 M6 3V21 M2 21H10"
                    stroke="#ff8a3d"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                  {/* Sharp white I-beam core */}
                  <path
                    d="M2.5 3.5H9.5 M6 3.5V20.5 M2.5 20.5H9.5"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            )}

            {/* STATE 04: LINK HOVER (Finger pointing hand icon with tap-point indicator) */}
            {state === 'link' && (
              <div className="relative drop-shadow-[0_3px_10px_rgba(0,0,0,0.5)]">
                {/* Finger tip tap-indicator pulse */}
                <span className="absolute top-[2px] left-[11.5px] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#ff8a3d]/40 border border-[#ff8a3d] animate-ping pointer-events-none" />
                <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
                  {/* Custom pointing hand SVG path */}
                  <path
                    d="M10 5.5C10 4.67 10.67 4 11.5 4C12.33 4 13 4.67 13 5.5V13H14C14.83 13 15.5 12.33 15.5 11.5V10.5C15.5 9.67 16.17 9 17 9C17.83 9 18.5 9.67 18.5 10.5V12.5H19.5C20.33 12.5 21 13.17 21 14V18C21 21.87 17.87 25 14 25H9C5.13 25 2 21.87 2 18V15C2 14.17 2.67 13.5 3.5 13.5C4.33 13.5 5 14.17 5 15V16H6V8.5C6 7.67 6.67 7 7.5 7C8.33 7 9 7.67 9 8.5V13H10V5.5Z"
                    fill="#1e1510"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}

            {/* STATE 05: BUTTON HOVER (Sleek pointer inside circular ring) */}
            {state === 'button' && (
              <div className="relative flex items-center justify-center w-12 h-12">
                {/* Glowing Outer Ring */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="absolute inset-0 rounded-full border border-[#ff8a3d] shadow-[0_0_12px_rgba(255,138,61,0.55),inset_0_0_8px_rgba(255,138,61,0.25)]"
                />
                {/* Center Arrow pointer */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="absolute top-[14px] left-[14px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  <path
                    d="M4.5 4.5 L19.5 11.5 L12.5 13.5 L10.5 20.5 Z"
                    fill="#ff8a3d"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}

            {/* STATE 06: CLICK (Active click / shrink feedback) */}
            {state === 'click' && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                <path
                  d="M4.5 4.5 L19.5 11.5 L12.5 13.5 L10.5 20.5 Z"
                  fill="#ff8a3d"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            )}

            {/* STATE 07: LOADING / BUSY (Rotating glowing dash ring) */}
            {state === 'loading' && (
              <div className="relative w-7 h-7 flex items-center justify-center">
                <svg className="animate-spin w-full h-full text-[#ff8a3d]" viewBox="0 0 24 24" fill="none">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <path
                    className="opacity-90"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                {/* Tiny glowing dot in center */}
                <div className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ff8a3d]" />
              </div>
            )}

            {/* STATE 08: DRAG (Standard arrow with a small orange plus) */}
            {state === 'drag' && (
              <div className="relative">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                  <path
                    d="M4.5 4.5 L19.5 11.5 L12.5 13.5 L10.5 20.5 Z"
                    fill="#150e0a"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
                {/* Drag Indicator (Plus icon inside orange circular badge) */}
                <div className="absolute bottom-[-2px] right-[-2px] w-4.5 h-4.5 rounded-full bg-[#ff8a3d] border border-white flex items-center justify-center shadow-lg">
                  <span className="text-[11px] font-extrabold text-white leading-none">+</span>
                </div>
              </div>
            )}

            {/* STATE 09: UNAVAILABLE (Prohibited circle slash with orange outline) */}
            {state === 'unavailable' && (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_2px_8px_rgba(255,138,61,0.25)]">
                {/* Glow ring */}
                <circle cx="12" cy="12" r="9" stroke="#ff8a3d" strokeWidth="3" opacity="0.4" />
                {/* Core prohibited symbol */}
                <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.8" fill="#150e0a" />
                <line x1="6.3" y1="17.7" x2="17.7" y2="6.3" stroke="white" strokeWidth="1.8" />
              </svg>
            )}

            {/* STATE 10: PRECISION (Glowing crosshairs for precise interactions like charts) */}
            {state === 'precision' && (
              <div className="relative w-8 h-8 flex items-center justify-center">
                {/* Central soft glow bloom */}
                <div className="absolute w-4 h-4 rounded-full bg-[#ff8a3d]/25 blur-[2px]" />
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="drop-shadow-[0_0_5px_rgba(255,138,61,0.5)]">
                  {/* Glowing orange crosshair */}
                  <line x1="16" y1="4" x2="16" y2="28" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="4" y1="16" x2="28" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Central premium spot */}
                  <circle cx="16" cy="16" r="2.5" fill="#ff8a3d" stroke="white" strokeWidth="1" />
                </svg>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
