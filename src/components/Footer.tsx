import { motion } from 'motion/react';
import { ArrowUpRight, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="relative bg-[#0e0907] pt-24 pb-12 px-6 border-t border-white/5 overflow-hidden">
      {/* Delicate orange lighting bottom center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[200px] rounded-full ambient-glow-orange opacity-15 pointer-events-none z-0" />

      <div className="w-full max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          
          {/* Logo & Description */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff7a1a] to-[#ffb15c] p-1.5 shadow-[0_0_15px_rgba(255,122,26,0.3)] flex items-center justify-center text-white">
                <span className="font-extrabold text-sm">▲</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-white font-display">
                Velocity
              </span>
            </div>
            
            <p className="text-sm text-[#a9a9a9] max-w-sm leading-relaxed mt-2">
              Helping founders launch faster with high-converting landing pages. Let\'s build something great together.
            </p>

            <button
              onClick={() => handleScrollTo('plans')}
              className="glow-btn-orange relative inline-flex items-center justify-center gap-1.5 text-xs font-bold font-display text-white px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ff7a1a] to-[#ff8c3a] shadow-md mt-4 cursor-pointer focus:outline-none"
              id="footer-start-now"
            >
              Start Now
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Column 1: Menu */}
          <div className="col-span-6 md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-4">Menu</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
                { label: 'Work / Features', action: () => handleScrollTo('features') },
                { label: 'Pricing Plans', action: () => handleScrollTo('plans') },
                { label: 'FAQs Accordion', action: () => handleScrollTo('faq-item-faq-1') },
                { label: 'Contact Help', action: () => handleScrollTo('plans') }
              ].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={item.action}
                    className="text-sm text-[#a9a9a9] hover:text-[#ff7a1a] transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Explore Velocity */}
          <div className="col-span-6 md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-4">Explore Velocity</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Why Velocity', id: 'why-us' },
                { label: 'Process Steps', id: 'how-it-works' },
                { label: 'Testimonials', id: 'testimonials' },
              ].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleScrollTo(item.id)}
                    className="text-sm text-[#a9a9a9] hover:text-[#ff7a1a] transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Socials & Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#a9a9a9]">
            &copy; {currentYear} Velocity. All rights reserved. Designed with elite premium styling.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {[
              { icon: <Twitter className="w-4 h-4" />, url: 'https://twitter.com' },
              { icon: <Instagram className="w-4 h-4" />, url: 'https://instagram.com' },
              { icon: <Linkedin className="w-4 h-4" />, url: 'https://linkedin.com' },
              { icon: <Github className="w-4 h-4" />, url: 'https://github.com' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#18110c] border border-white/5 flex items-center justify-center text-[#a9a9a9] hover:text-[#ff7a1a] hover:border-[#ff7a1a]/30 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
