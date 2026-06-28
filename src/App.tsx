/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyClientsStick from './components/WhyClientsStick';
import Process from './components/Process';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0e0907] overflow-hidden text-[#f5f5f5]">
      {/* Premium Luxury Dynamic Cursor (Fine-pointing Desktop Screens) */}
      <CustomCursor />

      {/* Universal Grid Overlay & Noise Overlays */}
      <div className="fixed inset-0 dotted-grid opacity-[0.3] pointer-events-none z-0" />
      <div className="fixed inset-0 noise-overlay opacity-[0.4] pointer-events-none z-10" />

      {/* Floating Header Navigation */}
      <Navbar />

      {/* Sections Sequence */}
      <main className="relative z-10">
        <Hero />
        <WhyClientsStick />
        <Process />
        <Showcase />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      {/* Footer Area */}
      <Footer />
    </div>
  );
}
