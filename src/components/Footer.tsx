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
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#1c120e] to-[#0e0907] p-1.5 border border-white/10 shadow-[0_0_20px_rgba(255,122,26,0.12)] hover:shadow-[0_0_25px_rgba(255,122,26,0.3)] transition-all duration-300 overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="footOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ff9f43" />
                      <stop offset="50%" stopColor="#ff7a1a" />
                      <stop offset="100%" stopColor="#d35400" />
                    </linearGradient>
                    <radialGradient id="footSparkleGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ffd700" stopOpacity="1" />
                      <stop offset="100%" stopColor="#ff7a1a" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="footStarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#ffd700" />
                    </linearGradient>
                  </defs>
                  <g transform="translate(10, 5)">
                    <path d="M 136,165 C 136,153 145,145 156,145 L 210,145 C 219,145 226,150 229,158 L 308,367 C 312,377 304,388 293,388 L 246,388 C 238,388 231,383 228,375 L 139,180 C 137,175 136,170 136,165 Z" fill="url(#footOrangeGrad)" />
                    <path d="M 252,145 L 348,145 C 358,145 364,155 360,163 L 310,252 C 305,260 293,260 288,252 L 248,163 C 244,155 250,145 252,145 Z" fill="url(#footOrangeGrad)" />
                    <path d="M 282,285 C 282,277 292,273 298,279 L 358,339 C 365,346 360,358 350,358 L 298,358 C 289,358 282,351 282,342 Z" fill="url(#footOrangeGrad)" />
                  </g>
                  <g transform="translate(356, 150)">
                    <circle cx="0" cy="0" r="55" fill="url(#footSparkleGlow)" opacity="0.9" />
                    <path d="M -75,0 Q 0,0 0,-75 Q 0,0 75,0 Q 0,0 0,75 Q 0,0 -75,0 Z" fill="url(#footStarGrad)" />
                    <circle cx="0" cy="0" r="7" fill="#ffffff" />
                  </g>
                </svg>
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
