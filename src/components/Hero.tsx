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

  // 3D Tilt rotation mapping based on mouse coordinates for elite interactive depth
  const rotateX = useTransform(ySpring, [-30, 30], [8, -8]);
  const rotateY = useTransform(xSpring, [-30, 30], [-8, 8]);

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
            Premium
          </motion.span>
          <motion.span
            initial={{ opacity: 0, filter: 'blur(8px)', y: 30 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="block mt-2 bg-gradient-to-r from-white via-[#ff7a1a] to-[#ffb15c] bg-clip-text text-transparent"
          >
            Landing Page.
          </motion.span>
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-[#a9a9a9] max-w-[620px] mb-10 font-medium leading-relaxed"
        >
          We design ultimate, high-converting premium landing pages that help founders launch faster, look elite, and grow smarter.
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

      {/* Cinematic Live Performance & Conversion HUD (Awwwards-quality Interactive Browser) */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="w-full max-w-[1000px] mt-16 px-4 relative z-20 group"
      >
        {/* Soft moving ambient glow reflection */}
        <div className="absolute inset-0 -m-8 bg-gradient-to-r from-[#ff7a1a]/12 to-[#ffb15c]/8 rounded-[36px] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-1000 pointer-events-none" />
        
        {/* Glassmorphic Mock Browser Frame */}
        <div className="w-full rounded-[24px] border border-white/10 bg-[#18110c]/85 shadow-[0_35px_90px_rgba(0,0,0,0.85)] backdrop-blur-3xl overflow-hidden relative">
          
          {/* Top Window Navigation Bar */}
          <div className="flex items-center justify-between px-6 py-4.5 bg-[#110c09] border-b border-white/5">
            {/* Window Dots */}
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-sm shadow-[#ff5f56]/20" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-sm shadow-[#ffbd2e]/20" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-sm shadow-[#27c93f]/20" />
            </div>
            
            {/* URL Display */}
            <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#18110c] border border-white/5 w-1/2 justify-center text-xs text-[#a9a9a9] font-mono select-none">
              <span className="text-[#ff7a1a] opacity-80">https://</span>
              <span className="tracking-wide">velocity.agency/luxury-conversions</span>
            </div>
            
            {/* Server Secure Indicator */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#27c93f]/10 border border-[#27c93f]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f] animate-pulse" />
              <span className="text-[10px] font-bold text-[#27c93f] uppercase tracking-wider font-mono">Secure Connection</span>
            </div>
          </div>
          
          {/* Browser Inside Work Canvas */}
          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Box: Perfect Lighthouse Analytics */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <span className="text-[10px] font-bold text-[#ff7a1a] uppercase tracking-widest font-mono mb-2 block">TECHNICAL EXCELLENCE</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display leading-tight">Lighthouse Perfect Score</h3>
                <p className="text-xs text-[#a9a9a9] mt-2.5 leading-relaxed">
                  Every page we design delivers an ultra-fast loading speed. This completely avoids visitor bounce, elevates customer trust, and maximizes search engine index visibility on Google.
                </p>
              </div>
              
              {/* Lighthouse Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Performance', score: 100 },
                  { label: 'Accessibility', score: 100 },
                  { label: 'Best Practices', score: 100 },
                  { label: 'SEO', score: 100 },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-[#1e1510]/50 border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center relative hover:border-[#ff7a1a]/25 transition-all duration-300">
                    {/* Dial Ring */}
                    <div className="relative w-16 h-16 flex items-center justify-center mb-3">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="rgba(255,255,255,0.05)"
                          strokeWidth="3.5"
                          fill="transparent"
                        />
                        <motion.circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="#27c93f"
                          strokeWidth="3.5"
                          fill="transparent"
                          strokeDasharray={176}
                          initial={{ strokeDashoffset: 176 }}
                          whileInView={{ strokeDashoffset: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.7 + (idx * 0.12), ease: 'easeOut' }}
                        />
                      </svg>
                      <span className="absolute text-sm font-black font-display text-[#27c93f]">{stat.score}</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#a9a9a9] tracking-wider uppercase font-mono">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Box: conversion analytics comparison */}
            <div className="lg:col-span-7 flex flex-col gap-6 bg-[#110c09]/80 border border-white/5 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#ff7a1a]/5 blur-3xl pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#ff7a1a]/10 border border-[#ff7a1a]/25 flex items-center justify-center text-[#ff7a1a]">
                    <Sparkles className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-display">Awwwards-Level Experience</h4>
                    <p className="text-[10px] text-[#a9a9a9] font-mono">Bespoke luxury feel beats basic templates</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>+320% Avg ROI</span>
                </div>
              </div>
              
              {/* Chart Bars */}
              <div className="flex flex-col gap-5">
                {/* Velocity */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-[11px] font-semibold font-mono">
                    <span className="text-white flex items-center gap-1.5">
                      <span className="text-[#ff7a1a]">✦</span> Velocity Bespoke Experience
                    </span>
                    <span className="text-[#ff7a1a] font-bold">6.8% conversion rate</span>
                  </div>
                  <div className="w-full h-3.5 rounded-full bg-[#18110c] border border-white/5 overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-[#ff7a1a] via-[#ff8c3a] to-[#ffb15c] rounded-full shadow-[0_0_12px_rgba(255,122,26,0.65)]"
                      initial={{ width: '0%' }}
                      whileInView={{ width: '92%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.9, ease: 'easeOut' }}
                    />
                  </div>
                </div>
                
                {/* Standard */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-[11px] font-semibold font-mono text-[#a9a9a9]">
                    <span>Average Ready-Made Templates</span>
                    <span>1.8% conversion rate</span>
                  </div>
                  <div className="w-full h-3.5 rounded-full bg-[#18110c] border border-white/5 overflow-hidden">
                    <motion.div 
                      className="h-full bg-[#a9a9a9]/25 rounded-full"
                      initial={{ width: '0%' }}
                      whileInView={{ width: '26%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 1.1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Bottom Badges */}
              <div className="grid grid-cols-3 gap-3 pt-5 border-t border-white/5 mt-1">
                {[
                  { title: 'Honorable Mention', desc: 'Awwwards' },
                  { title: 'Enterprise Secure', desc: 'SSL Encrypted' },
                  { title: 'Conversion Audited', desc: 'Verified Results' }
                ].map((badge, idx) => (
                  <div key={idx} className="flex flex-col p-3 rounded-xl bg-[#18110c] border border-white/5 items-center text-center hover:border-white/10 transition-colors duration-200">
                    <span className="text-[10px] font-bold text-[#ff7a1a] uppercase tracking-wider font-display">{badge.title}</span>
                    <span className="text-[9px] text-[#a9a9a9] font-mono mt-1">{badge.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
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
