import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function FinalCTA() {
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
    <section className="relative py-32 px-4 overflow-hidden bg-[#0e0907]">
      {/* Cinematic orange bottom bleed & soft bloom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85vw] h-[35vw] rounded-full ambient-glow-orange opacity-40 pointer-events-none z-0" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[45vw] h-[45vw] rounded-full ambient-glow-secondary opacity-20 pointer-events-none z-0" />

      <div className="w-full max-w-[1100px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[40px] glass-panel bg-gradient-to-b from-[#18110c]/90 to-[#1e1510]/90 border-white/8 p-10 sm:p-16 md:p-20 text-center relative overflow-hidden shadow-2xl flex flex-col items-center"
        >
          {/* Subtle grid pattern inside */}
          <div className="absolute inset-0 dotted-grid opacity-30 pointer-events-none" />

          {/* Central glowing icon */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff7a1a] to-[#ffb15c] p-[1.5px] shadow-[0_0_25px_rgba(255,122,26,0.35)] mb-8 flex items-center justify-center relative z-10"
          >
            <div className="w-full h-full rounded-full bg-[#18110c] flex items-center justify-center">
              <span className="text-white font-extrabold text-xl">▲</span>
            </div>
          </motion.div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white font-display mb-6 leading-[1.05] max-w-[800px] relative z-10">
            Ready to launch something that actually works?
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-[#a9a9a9] max-w-[540px] mb-10 leading-relaxed relative z-10">
            Let Velocity design the landing page your idea deserves. Clean, strategic, and ready to grow.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => handleScrollTo('plans')}
            className="glow-btn-orange relative inline-flex items-center justify-center gap-2.5 text-base font-bold font-display text-white px-9 py-5 rounded-full bg-gradient-to-r from-[#ff7a1a] via-[#ff8c3a] to-[#ffb15c] shadow-[0_8px_35px_rgba(255,122,26,0.35)] hover:shadow-[0_12px_45px_rgba(255,122,26,0.55)] hover:scale-[1.04] active:scale-[0.98] transition-all duration-300 cursor-pointer focus:outline-none z-10"
            id="final-cta-btn"
          >
            Get Started Now
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
