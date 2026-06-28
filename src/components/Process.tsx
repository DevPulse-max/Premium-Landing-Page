import { motion } from 'motion/react';
import { Compass, PencilRuler, Rocket, ArrowRight } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      icon: <Compass className="w-6 h-6" />,
      title: 'Share Your Vision',
      description: 'Hop on a quick call or fill out our interactive brief. You provide the goals, and we lay out the strategic plan and copy structure.',
    },
    {
      num: '02',
      icon: <PencilRuler className="w-6 h-6" />,
      title: 'We Design It',
      description: 'You get a clean, conversion-focused custom layout tailored perfectly to your brand identity, complete with elite interactive motion components.',
    },
    {
      num: '03',
      icon: <Rocket className="w-6 h-6" />,
      title: 'Ready to Launch',
      description: 'We deliver everything fully functional, responsive, and optimized to convert visitors into paying customers. Ready for immediate scale.',
    }
  ];

  return (
    <section id="how-it-works" className="relative py-28 px-4 overflow-hidden bg-[#0e0907]">
      {/* Background radial lighting */}
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full ambient-glow-orange opacity-20 pointer-events-none z-0" />
      
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
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff7a1a]">Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display mb-4"
          >
            The Process Fast, Clear, Done
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#a9a9a9] max-w-[550px] mx-auto leading-relaxed"
          >
            No endless revisions. No messy handoffs. Just a process that works and delivers fast.
          </motion.p>
        </div>

        {/* 3 columns connected by a glowing line */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* SVG Connector lines for desktop screen size */}
          <div className="hidden md:block absolute top-[68px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-[#ff7a1a]/10 via-[#ff7a1a] to-[#ff7a1a]/10 z-0 pointer-events-none">
            {/* Animated glowing pulse running along the connector line */}
            <motion.div
              className="h-full w-24 bg-gradient-to-r from-transparent via-[#ffb15c] to-transparent"
              animate={{
                left: ['-20%', '120%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{ position: 'absolute' }}
            />
          </div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-panel rounded-[28px] p-8 md:p-10 flex flex-col items-start relative z-10 group"
              id={`process-step-${step.num}`}
            >
              {/* Stepper Badge */}
              <div className="absolute top-6 right-8 text-6xl font-black font-display text-white/5 group-hover:text-[#ff7a1a]/10 select-none transition-colors duration-300">
                {step.num}
              </div>

              {/* Icon Container with glowing orange reflexions */}
              <div className="w-14 h-14 rounded-2xl bg-[#18110c] border border-white/8 group-hover:border-[#ff7a1a]/40 group-hover:shadow-[0_0_20px_rgba(255,122,26,0.25)] flex items-center justify-center text-white group-hover:text-[#ff7a1a] mb-8 transition-all duration-300">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-white font-display mb-4 group-hover:text-[#ff7a1a] transition-colors duration-200">
                {step.title}
              </h3>

              <p className="text-sm text-[#a9a9a9] leading-relaxed">
                {step.description}
              </p>

              {/* Hover highlight circle */}
              <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-[#ff7a1a]/10 scale-0 group-hover:scale-100 flex items-center justify-center transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-[#ff7a1a]" />
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
