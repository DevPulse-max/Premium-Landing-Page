import { motion } from 'motion/react';
import { pricingPlans } from '../data';
import { Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="plans" className="relative py-28 px-4 overflow-hidden bg-[#0e0907]">
      {/* Background Lighting */}
      <div className="absolute top-[30%] right-[15%] w-[45vw] h-[45vw] rounded-full ambient-glow-orange opacity-15 pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full ambient-glow-secondary opacity-15 pointer-events-none z-0" />

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
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff7a1a]">Pricing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display mb-4"
          >
            Straightforward pricing that fits
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#a9a9a9] max-w-[550px] mx-auto leading-relaxed"
          >
            Whether you\'re launching your first idea or scaling your startup, Velocity has a plan that fits your pace.
          </motion.p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-[1100px] mx-auto">
          {pricingPlans.map((plan, idx) => {
            const isPopular = plan.isPopular;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.015 }}
                className={`relative rounded-[28px] p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-all duration-300 ${
                  isPopular 
                    ? 'glass-panel-highlight bg-[#1e1510] shadow-[0_20px_50px_rgba(255,122,26,0.18)]' 
                    : 'glass-panel bg-[#18110c]/60'
                }`}
                id={`pricing-card-${plan.id}`}
              >
                {/* Popular Card Border / Backlight Effects */}
                {isPopular && (
                  <>
                    <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-[#ff7a1a]/15 blur-3xl pointer-events-none" />
                    {/* Glowing animated line top indicator */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#ff7a1a] via-[#ffb15c] to-[#ff7a1a]" />
                  </>
                )}

                <div>
                  {/* Badge & Plan Name */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-lg font-bold text-white font-display">{plan.name}</span>
                    {isPopular && (
                      <span className="text-[9px] font-bold uppercase tracking-widest text-white bg-gradient-to-r from-[#ff7a1a] to-[#ff8c3a] px-3 py-1 rounded-full shadow-[0_2px_10px_rgba(255,122,26,0.25)]">
                        Most Popular
                      </span>
                    )}
                  </div>

                  {/* Pricing Rate */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl sm:text-5xl font-black tracking-tight text-white font-display">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#a9a9a9] font-semibold uppercase tracking-wider">
                      {plan.period}
                    </span>
                  </div>

                  {/* Brief description */}
                  <p className="text-sm text-[#a9a9a9] leading-relaxed mb-8">
                    {plan.description}
                  </p>

                  <div className="w-full h-[1px] bg-white/5 mb-8" />

                  {/* Feature Checklist */}
                  <ul className="flex flex-col gap-4 mb-10">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isPopular 
                            ? 'bg-[#ff7a1a]/15 text-[#ff7a1a]' 
                            : 'bg-white/5 text-[#a9a9a9]'
                        }`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm text-[#f5f5f5] leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan CTA button */}
                <button
                  className="w-full py-4 rounded-full font-bold font-display text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 transform active:scale-[0.98] focus:outline-none gold-gradient-btn"
                  id={`pricing-cta-${plan.id}`}
                >
                  {plan.ctaText}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
