import { motion } from 'motion/react';
import { Layers, Zap, TrendingUp, Compass } from 'lucide-react';

export default function WhyClientsStick() {
  return (
    <section id="why-us" className="relative py-28 px-4 overflow-hidden bg-[#0e0907]">
      {/* Background Lighting */}
      <div className="absolute top-[30%] right-[10%] w-[35vw] h-[35vw] rounded-full ambient-glow-orange opacity-40 pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[5%] w-[40vw] h-[40vw] rounded-full ambient-glow-secondary opacity-30 pointer-events-none z-0" />

      <div className="w-full max-w-[1200px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-white/8 bg-[#18110c]/80 backdrop-blur-md mb-4"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff7a1a]">Why Us?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display mb-4"
          >
            Why Clients Stick With Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#a9a9a9] max-w-[550px] mx-auto leading-relaxed"
          >
            We combine clarity, trust, and high-performing design to deliver results that actually matter.
          </motion.p>
        </div>

        {/* 2x2 Premium Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Implementation & Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="glass-panel rounded-[28px] p-8 md:p-10 flex flex-col justify-between overflow-hidden group min-h-[380px] relative"
            id="why-card-tools"
          >
            {/* Corner Light bleed */}
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#ff7a1a]/10 group-hover:bg-[#ff7a1a]/20 blur-2xl transition-all duration-500" />

            <div className="mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#ff7a1a]/10 border border-[#ff7a1a]/20 flex items-center justify-center text-[#ff7a1a] mb-6 group-hover:scale-110 transition-transform duration-300">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display mb-3">
                Implementation and tools
              </h3>
              <p className="text-sm text-[#a9a9a9] leading-relaxed max-w-[320px]">
                Streamlined process with the right tools to build fast and smart.
              </p>
            </div>

            {/* Interactive Visual Widget */}
            <div className="relative h-[120px] rounded-2xl bg-[#0e0907]/60 border border-white/5 p-4 flex items-center justify-around overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff7a1a]/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {[
                { name: 'Figma', icon: '✦', color: 'from-[#ff7a1a]' },
                { name: 'React', icon: '⚛', color: 'from-blue-500' },
                { name: 'Tailwind', icon: '♒', color: 'from-teal-400' },
                { name: 'Motion', icon: '♒', color: 'from-purple-500' }
              ].map((tool, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="flex flex-col items-center gap-2 relative z-10"
                >
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-b ${tool.color} to-transparent p-[1px] shadow-lg`}>
                    <div className="w-full h-full rounded-full bg-[#18110c] flex items-center justify-center text-sm font-bold text-white">
                      {tool.icon}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#a9a9a9] tracking-wider">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: High-converting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="glass-panel rounded-[28px] p-8 md:p-10 flex flex-col justify-between overflow-hidden group min-h-[380px] relative"
            id="why-card-conversion"
          >
            {/* Corner Light bleed */}
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#ffb15c]/8 group-hover:bg-[#ffb15c]/15 blur-2xl transition-all duration-500" />

            <div className="mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#ff7a1a]/10 border border-[#ff7a1a]/20 flex items-center justify-center text-[#ff7a1a] mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display mb-3">
                High-converting
              </h3>
              <p className="text-sm text-[#a9a9a9] leading-relaxed max-w-[320px]">
                Clean designs that convert, built in Figma, powered by React.
              </p>
            </div>

            {/* Interactive Visual Widget: Conversion Button Animation */}
            <div className="relative h-[120px] rounded-2xl bg-[#0e0907]/60 border border-white/5 p-4 flex flex-col justify-center items-center overflow-hidden">
              <div className="absolute top-0 right-10 w-20 h-20 rounded-full bg-[#ff7a1a]/5 blur-xl group-hover:bg-[#ff7a1a]/15 transition-all duration-500" />
              
              <div className="w-full max-w-[220px] flex items-center justify-between px-4 py-2 bg-[#18110c] rounded-xl border border-white/8 mb-2">
                <span className="text-xs font-semibold text-white">Subscribe</span>
                <motion.div 
                  className="px-3 py-1 text-[10px] font-bold font-display text-white bg-gradient-to-r from-[#ff7a1a] to-[#ff8c3a] rounded-lg shadow-md flex items-center gap-1 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join List <span className="animate-pulse">⚡</span>
                </motion.div>
              </div>
              <div className="flex gap-2 justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[10px] font-mono text-emerald-400 tracking-wider">A/B tested layouts running</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Maximum Return on ROI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="glass-panel rounded-[28px] p-8 md:p-10 flex flex-col justify-between overflow-hidden group min-h-[380px] relative"
            id="why-card-roi"
          >
            {/* Corner Light bleed */}
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#ff8c3a]/10 group-hover:bg-[#ff8c3a]/20 blur-2xl transition-all duration-500" />

            <div className="mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#ff7a1a]/10 border border-[#ff7a1a]/20 flex items-center justify-center text-[#ff7a1a] mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display mb-3">
                Maximum Return on ROI
              </h3>
              <p className="text-sm text-[#a9a9a9] leading-relaxed max-w-[320px]">
                Real value, no fluff. Everything is done with purpose and profit in mind.
              </p>
            </div>

            {/* Interactive Visual Widget: SVG Interactive Chart */}
            <div className="relative h-[120px] rounded-2xl bg-[#0e0907]/60 border border-white/5 p-4 flex items-center justify-between overflow-hidden">
              <div className="flex flex-col">
                <span className="text-xs font-mono text-[#a9a9a9]">Return on ROI</span>
                <span className="text-2xl font-bold tracking-tight text-white font-display mt-1">120%</span>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1">▲ average increase</span>
              </div>
              <div className="w-[120px] h-[70px] flex items-end relative">
                {/* SVG Graph drawing on hover */}
                <svg className="w-full h-full" viewBox="0 0 100 50">
                  <defs>
                    <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ff7a1a" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#ff7a1a" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 45 C15 35, 30 40, 45 20 C60 10, 75 15, 100 5"
                    fill="none"
                    stroke="#ff7a1a"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="group-hover:stroke-[#ffb15c] transition-colors duration-300"
                  />
                  <path
                    d="M0 45 C15 35, 30 40, 45 20 C60 10, 75 15, 100 5 L100 50 L0 50 Z"
                    fill="url(#chartGlow)"
                  />
                  {/* Glowing Pulse Node */}
                  <circle cx="100" cy="5" r="3" fill="#ffb15c" />
                  <circle cx="100" cy="5" r="7" fill="none" stroke="#ffb15c" strokeWidth="1" className="animate-ping" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Clear steps and trust */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="glass-panel rounded-[28px] p-8 md:p-10 flex flex-col justify-between overflow-hidden group min-h-[380px] relative"
            id="why-card-trust"
          >
            {/* Corner Light bleed */}
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#ff7a1a]/8 group-hover:bg-[#ff7a1a]/15 blur-2xl transition-all duration-500" />

            <div className="mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#ff7a1a]/10 border border-[#ff7a1a]/20 flex items-center justify-center text-[#ff7a1a] mb-6 group-hover:scale-110 transition-transform duration-300">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display mb-3">
                Clear steps and trust
              </h3>
              <p className="text-sm text-[#a9a9a9] leading-relaxed max-w-[320px]">
                You\'ll always know what\'s next. Simple, honest communication.
              </p>
            </div>

            {/* Interactive Visual Widget: Progress Stepper */}
            <div className="relative h-[120px] rounded-2xl bg-[#0e0907]/60 border border-white/5 p-4 flex flex-col justify-center items-center overflow-hidden">
              <div className="flex items-center justify-between w-full max-w-[240px] relative">
                {/* Horizontal progress line background */}
                <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/10 -translate-y-1/2 z-0" />
                {/* Animated progress line */}
                <div className="absolute top-1/2 left-0 w-[66%] h-[2px] bg-[#ff7a1a] -translate-y-1/2 z-0 group-hover:w-full transition-all duration-1000" />
                
                {[
                  { step: '01', title: 'Define' },
                  { step: '02', title: 'Refine' },
                  { step: '03', title: 'Launch' }
                ].map((s, idx) => (
                  <div key={idx} className="flex flex-col items-center relative z-10">
                    <div className="w-7 h-7 rounded-full bg-[#18110c] border border-[#ff7a1a]/50 flex items-center justify-center text-[10px] font-bold text-white group-hover:border-[#ff7a1a] transition-colors duration-300">
                      {s.step}
                    </div>
                    <span className="text-[9px] font-mono text-[#a9a9a9] mt-1.5">{s.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
