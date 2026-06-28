import { motion } from 'motion/react';
import { testimonials } from '../data';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 px-4 overflow-hidden bg-[#0e0907]">
      {/* Background Lighting */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] rounded-full ambient-glow-orange opacity-15 pointer-events-none z-0" />

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
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff7a1a]">Testimonials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display mb-4"
          >
            What Founders Are Saying
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#a9a9a9] max-w-[550px] mx-auto leading-relaxed"
          >
            Startups trust Velocity because we don\'t just design pages we help founders turn clarity into conversions and land with impact.
          </motion.p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((t, idx) => {
            const isFeatured = t.isFeatured;
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`relative rounded-[28px] p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 ${
                  isFeatured 
                    ? 'glass-panel-highlight bg-[#1e1510] shadow-[0_15px_40px_rgba(255,122,26,0.12)]' 
                    : 'glass-panel bg-[#18110c]/70'
                }`}
                id={`testimonial-card-${t.id}`}
              >
                {/* Glowing blob background for highlighted card */}
                {isFeatured && (
                  <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-[#ff7a1a]/15 blur-2xl pointer-events-none" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <Quote className={`w-8 h-8 ${isFeatured ? 'text-[#ff7a1a]' : 'text-[#ff7a1a]/30'}`} />
                    {isFeatured && (
                      <span className="text-[9px] font-bold uppercase tracking-widest text-[#ffb15c] bg-[#ff7a1a]/10 border border-[#ff7a1a]/25 px-2.5 py-1 rounded-full">
                        Featured Review
                      </span>
                    )}
                  </div>

                  <p className="text-sm sm:text-base text-[#f5f5f5] leading-relaxed mb-8 italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                  <div className={`relative w-12 h-12 rounded-full overflow-hidden border ${isFeatured ? 'border-[#ff7a1a]' : 'border-white/10'}`}>
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-display">{t.name}</h4>
                    <p className="text-xs text-[#a9a9a9] mt-0.5">
                      {t.role} <span className="text-[#ff7a1a]/70 font-semibold">@ {t.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
