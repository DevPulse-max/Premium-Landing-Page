import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowUpRight, ArrowRight, Play, Sparkles } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized coordinates (-0.5 to 0.5)
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Framer Motion spring values for smooth mouse parallax
  const xSpring = useSpring(mousePosition.x * 30, { stiffness: 100, damping: 20 });
  const ySpring = useSpring(mousePosition.y * 30, { stiffness: 100, damping: 20 });

  // Floating background particles
  const particles = Array.from({ length: 15 });

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-4 overflow-hidden dotted-grid">
      {/* Cinematic Ambient Orange Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full ambient-glow-orange opacity-90 pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[25%] w-[40vw] h-[40vw] rounded-full ambient-glow-secondary opacity-40 pointer-events-none z-0" />
      
      {/* Bottom orange light bleeding up */}
      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-[#ff7a1a]/15 to-transparent blur-3xl pointer-events-none z-0" />

      {/* Background Noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none z-10 opacity-70" />

      {/* Floating Interactive Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#ff7a1a]/25 blur-[1px]"
            style={{
              width: Math.random() * 5 + 3,
              height: Math.random() * 5 + 3,
              top: `${Math.random() * 90 + 5}%`,
              left: `${Math.random() * 90 + 5}%`,
            }}
            animate={{
              y: [0, Math.random() * -30 - 15, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.15, 0.7, 0.15],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Parallax Container */}
      <motion.div
        style={{ x: xSpring, y: ySpring }}
        className="w-full max-w-[1200px] flex flex-col items-center justify-center text-center relative z-20"
      >
        {/* Floating Glowing Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff7a1a]/30 bg-[#18110c]/80 backdrop-blur-xl shadow-[0_4px_15px_rgba(255,122,26,0.1)] mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-[#ff7a1a] animate-ping" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#ffb15c] flex items-center gap-1.5 font-display">
            Onboarding New Founders This Week
            <ArrowRight className="w-3 h-3 text-[#ff7a1a]" />
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight text-white font-display mb-6 leading-[0.95] max-w-[950px]">
          <motion.span
            initial={{ opacity: 0, filter: 'blur(8px)', y: 30 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="block text-white"
          >
            Launch faster.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, filter: 'blur(8px)', y: 30 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="block mt-2 bg-gradient-to-r from-white via-[#ff7a1a] to-[#ffb15c] bg-clip-text text-transparent"
          >
            Convert better.
          </motion.span>
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-[#a9a9a9] max-w-[620px] mb-10 font-medium leading-relaxed"
        >
          We Design Landing Pages That Help Founders Launch Faster And Grow Smarter.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md px-4"
        >
          <button
            onClick={() => handleScrollTo('plans')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#ff7a1a] via-[#ff8c3a] to-[#ffb15c] text-white font-bold font-display text-base shadow-[0_8px_30px_rgba(255,122,26,0.3)] hover:shadow-[0_12px_40px_rgba(255,122,26,0.5)] transition-all duration-300 transform hover:scale-[1.04] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 group focus:outline-none"
            id="hero-primary-cta"
          >
            Get Started Now
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
          
          <button
            onClick={() => handleScrollTo('features')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#18110c]/80 backdrop-blur-md border border-white/8 text-white font-semibold font-display text-base hover:bg-white/5 transition-all duration-300 transform hover:scale-[1.04] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 focus:outline-none"
            id="hero-secondary-cta"
          >
            <Play className="w-4 h-4 fill-white" />
            See Features
          </button>
        </motion.div>
      </motion.div>

      {/* Client Logos / Trust Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1000px] mt-24 text-center relative z-20 px-4"
      >
        <p className="text-xs uppercase tracking-widest text-[#a9a9a9] font-bold mb-8">
          Trusted by 100+ Startups Worldwide
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center opacity-65 grayscale hover:opacity-100 transition-opacity duration-300">
          {[
            { name: 'ENHANCE', symbol: '✦' },
            { name: 'PromptPilot', symbol: '❈' },
            { name: 'Screen', symbol: '⧉' },
            { name: 'EverMist', symbol: '༄' },
            { name: 'Taskly', symbol: '✓' }
          ].map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center gap-2 text-[#f5f5f5] font-display font-bold text-sm tracking-wider select-none hover:text-[#ff7a1a] transition-colors duration-200"
            >
              <span className="text-[#ff7a1a] text-base">{logo.symbol}</span>
              {logo.name}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Giant ambient lighting divider below the client logos */}
      <div className="w-full max-w-[1200px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mt-16 z-20" />
    </section>
  );
}
