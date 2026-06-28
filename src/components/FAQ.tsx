import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { faqs } from '../data';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative py-28 px-4 overflow-hidden bg-[#0e0907]">
      {/* Background Lighting */}
      <div className="absolute top-[40%] left-[20%] w-[35vw] h-[35vw] rounded-full ambient-glow-orange opacity-10 pointer-events-none z-0" />

      <div className="w-full max-w-[800px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-white/8 bg-[#18110c]/80 backdrop-blur-md mb-4"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff7a1a]">FAQs</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display mb-4">
            Questions? We\'ve got answers.
          </h2>

          <p className="text-sm sm:text-base text-[#a9a9a9] max-w-[500px] mx-auto leading-relaxed">
            We\'ve answered the most common ones below. If you still need help, just reach out—we\'re here for it.
          </p>
        </div>

        {/* FAQ Accordions Stack */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className={`rounded-[22px] overflow-hidden transition-all duration-300 glass-panel ${
                  isOpen 
                    ? 'bg-[#1e1510] border-[#ff7a1a]/30 shadow-[0_4px_25px_rgba(255,122,26,0.05)]' 
                    : 'bg-[#18110c]/60 border-white/5'
                }`}
                id={`faq-item-${faq.id}`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4 pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-[#ff7a1a]' : 'text-[#a9a9a9]'}`} />
                    <span className="text-sm sm:text-base font-bold font-display text-[#f5f5f5] leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen ? 'bg-[#ff7a1a]/15 text-[#ff7a1a] rotate-180' : 'bg-white/5 text-[#a9a9a9]'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Accordion Content Panels */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 sm:px-7 pb-7 text-sm text-[#a9a9a9] leading-relaxed border-t border-white/3 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
