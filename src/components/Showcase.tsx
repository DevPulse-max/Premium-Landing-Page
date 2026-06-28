import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck, Zap, Activity, Users, FileText } from 'lucide-react';

export default function Showcase() {
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
    <section id="features" className="relative py-28 px-4 overflow-hidden bg-[#0e0907]">
      {/* Background Lighting */}
      <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] rounded-full ambient-glow-orange opacity-15 pointer-events-none z-0" />
      <div className="absolute bottom-[25%] right-[10%] w-[35vw] h-[35vw] rounded-full ambient-glow-secondary opacity-15 pointer-events-none z-0" />

      <div className="w-full max-w-[1200px] mx-auto relative z-10 flex flex-col gap-32">
        
        {/* Split 1: Don't settle for template-looking pages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/8 bg-[#18110c]/80 backdrop-blur-md mb-6">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ff7a1a]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">Unique Strategy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display mb-6 leading-[1.1]">
                Don\'t settle for template-looking pages
              </h2>

              <p className="text-sm sm:text-base text-[#a9a9a9] mb-8 leading-relaxed">
                We design every page from scratch to match your brand, your offer, and your goals. So it doesn\'t just look good, it works. We analyze layout psychology and visitor intent to create a smooth runway straight to your checkout or signup.
              </p>

              <button
                onClick={() => handleScrollTo('plans')}
                className="glow-btn-orange relative inline-flex items-center justify-center gap-2 text-sm font-bold font-display text-white px-7 py-3.5 rounded-full bg-gradient-to-r from-[#ff7a1a] to-[#ff8c3a] shadow-lg hover:shadow-[0_8px_25px_rgba(255,122,26,0.3)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-250 cursor-pointer focus:outline-none"
                id="showcase-cta-1"
              >
                Start Now
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Right Mockup Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[540px] aspect-[4/3] rounded-[28px] glass-panel bg-[#18110c]/40 border-white/8 p-8 overflow-hidden group shadow-2xl"
            >
              {/* Internal glow reflections */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#ff7a1a]/10 blur-3xl pointer-events-none group-hover:bg-[#ff7a1a]/15 transition-all duration-700" />
              
              {/* Base dashboard layout mock */}
              <div className="w-full h-full rounded-2xl bg-[#0e0907]/85 border border-white/5 p-5 flex flex-col gap-4 relative z-10">
                {/* Mock header bar */}
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <div className="w-24 h-4 rounded-full bg-white/5" />
                  <div className="w-8 h-4 rounded-full bg-[#ff7a1a]/20 border border-[#ff7a1a]/30" />
                </div>

                {/* Grid contents */}
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white/3 border border-white/5 rounded-xl p-3 flex flex-col gap-1.5">
                      <div className="w-8 h-2 rounded bg-[#ff7a1a]/45" />
                      <div className="w-12 h-4 rounded bg-white/10" />
                    </div>
                  ))}
                </div>

                {/* Floating absolute responsive cards showing framer-quality hover effects */}
                <motion.div
                  className="absolute -bottom-4 right-8 w-[210px] bg-[#1e1510] border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-2 pointer-events-none"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#ff7a1a]/15 border border-[#ff7a1a]/30 flex items-center justify-center text-[#ff7a1a]">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-white tracking-wide">Instant Metrics</span>
                      <span className="text-[9px] text-[#a9a9a9]">Optimized on layout load</span>
                    </div>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden mt-1">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-[#ff7a1a] to-[#ffb15c]"
                      animate={{ width: ['0%', '100%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-12 left-4 w-[160px] bg-[#1e1510] border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-1.5 pointer-events-none"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono text-[#a9a9a9]">Conversion Rate</span>
                    <span className="text-[9px] text-emerald-400 font-bold">+14.2%</span>
                  </div>
                  <div className="text-lg font-bold text-white">4.82%</div>
                </motion.div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Split 2: We think deeply before we design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Graphic Column (Abstract interactive visual node system) */}
          <div className="lg:col-span-7 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[540px] aspect-[4/3] rounded-[28px] glass-panel bg-[#18110c]/40 border-white/8 p-8 overflow-hidden group shadow-2xl"
            >
              {/* Light glow reflections */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#ffb15c]/10 blur-3xl pointer-events-none group-hover:bg-[#ffb15c]/15 transition-all duration-700" />

              {/* Node System Overlay with custom absolute nodes */}
              <div className="w-full h-full rounded-2xl bg-[#0e0907]/85 border border-white/5 relative z-10 flex items-center justify-center">
                
                {/* SVG Connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300">
                  <path d="M 100,150 L 200,80" stroke="rgba(255,122,26,0.2)" strokeWidth="1.5" />
                  <path d="M 100,150 L 200,220" stroke="rgba(255,122,26,0.2)" strokeWidth="1.5" />
                  <path d="M 200,80 L 300,150" stroke="rgba(255,122,26,0.2)" strokeWidth="1.5" />
                  <path d="M 200,220 L 300,150" stroke="rgba(255,122,26,0.2)" strokeWidth="1.5" />
                  
                  {/* Animated flow dots */}
                  <motion.circle r="3" fill="#ff7a1a"
                    animate={{ cx: [100, 200], cy: [150, 80] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.circle r="3" fill="#ffb15c"
                    animate={{ cx: [200, 300], cy: [220, 150] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  />
                </svg>

                {/* Center / Surrounding Nodes */}
                <div className="absolute left-[65px] top-[125px] flex flex-col items-center gap-1">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-xl bg-[#1e1510] border border-white/10 shadow-lg flex items-center justify-center text-[#ff7a1a]"
                  >
                    <Users className="w-4 h-4" />
                  </motion.div>
                  <span className="text-[8px] text-[#a9a9a9] font-mono">Audience</span>
                </div>

                <div className="absolute left-[175px] top-[55px] flex flex-col items-center gap-1">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-xl bg-[#1e1510] border border-[#ff7a1a]/35 shadow-lg flex items-center justify-center text-white"
                  >
                    <Activity className="w-4 h-4" />
                  </motion.div>
                  <span className="text-[8px] text-[#a9a9a9] font-mono">Psychology</span>
                </div>

                <div className="absolute left-[175px] top-[195px] flex flex-col items-center gap-1">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-xl bg-[#1e1510] border border-white/10 shadow-lg flex items-center justify-center text-white"
                  >
                    <FileText className="w-4 h-4" />
                  </motion.div>
                  <span className="text-[8px] text-[#a9a9a9] font-mono">Content</span>
                </div>

                <div className="absolute right-[65px] top-[125px] flex flex-col items-center gap-1">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff7a1a] to-[#ffb15c] shadow-[0_0_15px_rgba(255,122,26,0.3)] flex items-center justify-center text-white font-extrabold text-sm"
                  >
                    ▲
                  </motion.div>
                  <span className="text-[8px] text-[#ff7a1a] font-mono font-bold uppercase tracking-wider">Velocity</span>
                </div>

              </div>
            </motion.div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/8 bg-[#18110c]/80 backdrop-blur-md mb-6">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ff7a1a]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">Elite Craft</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display mb-6 leading-[1.1]">
                We think deeply before we design
              </h2>

              <p className="text-sm sm:text-base text-[#a9a9a9] mb-8 leading-relaxed">
                Strategy comes before style. We use user flow thinking, positioning, and layout psychology to build what performs. By mapping every micro-interaction and transition, we guide visitors toward action with premium Framer-quality experiences that elevate your brand image.
              </p>

              <button
                onClick={() => handleScrollTo('plans')}
                className="glow-btn-orange relative inline-flex items-center justify-center gap-2 text-sm font-bold font-display text-white px-7 py-3.5 rounded-full bg-gradient-to-r from-[#ff7a1a] to-[#ff8c3a] shadow-lg hover:shadow-[0_8px_25px_rgba(255,122,26,0.3)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-250 cursor-pointer focus:outline-none"
                id="showcase-cta-2"
              >
                Start Now
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
