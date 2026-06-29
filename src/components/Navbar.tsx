import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-[1200px] rounded-full transition-all duration-300 ${
          scrolled 
            ? 'scrolled-nav-glass' 
            : 'bg-transparent border-transparent'
        } py-3 px-6 lg:px-8`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
            id="nav-logo"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#1c120e] to-[#0e0907] p-1.5 border border-white/10 shadow-[0_0_20px_rgba(255,122,26,0.15)] group-hover:shadow-[0_0_30px_rgba(255,122,26,0.4)] group-hover:border-[#ff7a1a]/30 transition-all duration-300 overflow-hidden">
              <svg className="w-full h-full transform group-hover:scale-110 transition-transform duration-300" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="navOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff9f43" />
                    <stop offset="50%" stopColor="#ff7a1a" />
                    <stop offset="100%" stopColor="#d35400" />
                  </linearGradient>
                  <radialGradient id="navSparkleGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ffd700" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ff7a1a" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="navStarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#ffd700" />
                  </linearGradient>
                </defs>
                <g transform="translate(10, 5)">
                  <path d="M 136,165 C 136,153 145,145 156,145 L 210,145 C 219,145 226,150 229,158 L 308,367 C 312,377 304,388 293,388 L 246,388 C 238,388 231,383 228,375 L 139,180 C 137,175 136,170 136,165 Z" fill="url(#navOrangeGrad)" />
                  <path d="M 252,145 L 348,145 C 358,145 364,155 360,163 L 310,252 C 305,260 293,260 288,252 L 248,163 C 244,155 250,145 252,145 Z" fill="url(#navOrangeGrad)" />
                  <path d="M 282,285 C 282,277 292,273 298,279 L 358,339 C 365,346 360,358 350,358 L 298,358 C 289,358 282,351 282,342 Z" fill="url(#navOrangeGrad)" />
                </g>
                <g transform="translate(356, 150)">
                  <circle cx="0" cy="0" r="55" fill="url(#navSparkleGlow)" opacity="0.9" />
                  <path d="M -75,0 Q 0,0 0,-75 Q 0,0 75,0 Q 0,0 0,75 Q 0,0 -75,0 Z" fill="url(#navStarGrad)" />
                  <circle cx="0" cy="0" r="7" fill="#ffffff" />
                </g>
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-white font-display group-hover:text-[#ff7a1a] transition-colors duration-200">
              Velocity
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7">
            {[
              { label: 'Why Velocity', id: 'why-us' },
              { label: 'How It Works', id: 'how-it-works' },
              { label: 'Features', id: 'features' },
              { label: 'Testimonials', id: 'testimonials' },
              { label: 'Plans', id: 'plans' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className="relative text-sm font-medium font-display text-[#a9a9a9] hover:text-[#f5f5f5] transition-colors duration-300 cursor-pointer focus:outline-none py-1.5 group"
                id={`nav-link-${link.id}`}
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ffb15c] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out shadow-[0_0_8px_rgba(255,177,92,0.6)]" />
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button 
              onClick={() => handleScrollTo('features')}
              className="text-sm font-medium font-display text-white px-5 py-2 rounded-full border border-white/8 hover:bg-white/5 transition-all duration-200 cursor-pointer focus:outline-none"
              id="nav-btn-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => handleScrollTo('plans')}
              className="glow-btn-orange relative inline-flex items-center justify-center text-sm font-semibold font-display text-white px-5 py-2 rounded-full bg-gradient-to-r from-[#ff7a1a] to-[#ff8c3a] shadow-[0_4px_20px_rgba(255,122,26,0.25)] hover:shadow-[0_4px_25px_rgba(255,122,26,0.4)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-250 cursor-pointer focus:outline-none"
              id="nav-btn-start"
            >
              Start Now
              <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#a9a9a9] hover:text-[#f5f5f5] transition-colors cursor-pointer focus:outline-none z-50 relative"
            aria-label="Toggle Menu"
            id="nav-mobile-trigger"
          >
            <div className="flex flex-col gap-1.5 justify-center items-center w-6 h-6">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-6 h-[2px] bg-white rounded-full block origin-center"
              />
              <motion.span
                animate={isOpen ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-6 h-[2px] bg-white rounded-full block"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-6 h-[2px] bg-white rounded-full block origin-center"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Modern Slide-Over Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#0e0907]/60 backdrop-blur-md z-40 lg:hidden"
            />

            {/* Slide-over Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-40 w-full sm:w-[420px] bg-[#120b08]/85 backdrop-blur-xl border-l border-white/10 p-8 pt-28 shadow-[-10px_0_50px_rgba(0,0,0,0.8)] lg:hidden flex flex-col justify-between overflow-y-auto"
            >
              {/* Decorative glows inside the drawer */}
              <div className="absolute top-[20%] -right-20 w-[200px] h-[200px] rounded-full bg-[#ff7a1a]/10 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-[10%] -left-20 w-[150px] h-[150px] rounded-full bg-[#ffb15c]/5 blur-[60px] pointer-events-none" />

              <div className="flex flex-col gap-8 relative z-10">
                {/* Menu Header with navigation index/indicator */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-xs font-mono tracking-widest uppercase text-[#ff7a1a]">Navigation</span>
                  <span className="text-xs font-mono text-white/40">Velocity / Menus</span>
                </div>

                {/* Staggered Navigation Links */}
                <div className="flex flex-col gap-1">
                  {[
                    { label: 'Why Velocity', id: 'why-us', number: '01' },
                    { label: 'How It Works', id: 'how-it-works', number: '02' },
                    { label: 'Features', id: 'features', number: '03' },
                    { label: 'Testimonials', id: 'testimonials', number: '04' },
                    { label: 'Plans', id: 'plans', number: '05' }
                  ].map((link, idx) => (
                    <motion.button
                      key={link.id}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => handleScrollTo(link.id)}
                      className="group flex items-baseline gap-4 py-3 text-left focus:outline-none cursor-pointer"
                      id={`nav-mobile-link-${link.id}`}
                    >
                      <span className="text-xs font-mono text-[#ff7a1a]/60 group-hover:text-[#ff7a1a] transition-colors duration-300">
                        {link.number}
                      </span>
                      <span className="text-2xl font-bold font-display text-white group-hover:text-[#ff7a1a] group-hover:translate-x-1.5 transition-all duration-300">
                        {link.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Action Buttons & Contact info at bottom */}
              <div className="flex flex-col gap-6 mt-12 relative z-10">
                <div className="flex flex-col gap-3">
                  <motion.button
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => handleScrollTo('features')}
                    className="w-full text-center py-3.5 rounded-full border border-white/10 text-white font-medium font-display hover:bg-white/5 hover:border-white/20 transition-all cursor-pointer focus:outline-none"
                    id="nav-mobile-btn-projects"
                  >
                    Explore Projects
                  </motion.button>
                  
                  <motion.button
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    onClick={() => handleScrollTo('plans')}
                    className="glow-btn-orange w-full text-center py-3.5 rounded-full bg-gradient-to-r from-[#ff7a1a] to-[#ff8c3a] text-white font-semibold font-display shadow-lg shadow-[#ff7a1a]/25 cursor-pointer flex items-center justify-center gap-2 focus:outline-none"
                    id="nav-mobile-btn-start"
                  >
                    Start Now
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.button>
                </div>

                <div className="border-t border-white/5 pt-6 flex flex-col gap-1.5 text-xs text-white/40 font-mono">
                  <div className="flex justify-between items-center">
                    <span>Email us:</span>
                    <a href="mailto:onlinequranclassforkids@gmail.com" className="text-white hover:text-[#ff7a1a] transition-colors">
                      onlinequranclassforkids@gmail.com
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span>Based in:</span>
                    <span className="text-white">California, US</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
