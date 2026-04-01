import React, { useEffect, useRef, useState } from 'react';
import {
  About,
  Contact,
  Experience,
  Hero,
  Tech,
  Projects,
} from './index';

const HomePage = () => {
  const [mousePos, setMousePos] = useState({ x: -400, y: -400 });
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="relative z-0 bg-dark">
      {/* Cursor glow (desktop) */}
      <div
        ref={glowRef}
        className="cursor-glow hidden md:block"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* ── HERO ── */}
      <Hero />

      {/* ── ABOUT ── */}
      <div className="relative">
        <About />
      </div>

      {/* ── TECH MARQUEE ── full bleed */}
      <div className="relative py-20 sm:py-28">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-lime/10 to-transparent" />
        <Tech />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-lime/10 to-transparent" />
      </div>

      {/* ── PROJECTS BENTO ── */}
      <div className="relative bg-surface/30">
        <Projects />
      </div>

      {/* ── EXPERIENCE ── */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        <Experience />
      </div>

      {/* ── CONTACT ── */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-lime/10 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-lime/[0.02] rounded-full blur-[120px]" />
        <Contact />
      </div>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.04] py-16 px-6 sm:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Big name */}
          <div className="font-instrument italic text-text-primary/[0.03] text-[20vw] leading-[0.85] tracking-tight select-none -mb-8 overflow-hidden">
            Romeo
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 relative z-10">
            <div className="flex items-center gap-3">
              <span className="font-instrument italic text-text-primary text-[24px]">
                R<span className="text-lime">.</span>
              </span>
              <span className="text-text-dim text-[11px] uppercase tracking-[3px] font-syne">
                &copy; {new Date().getFullYear()}
              </span>
            </div>

            <div className="flex items-center gap-8">
              {['GitHub', 'LinkedIn', 'Twitter'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-text-dim text-[12px] uppercase tracking-[3px] font-syne
                    hover:text-lime transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>

            <p className="text-text-dim text-[11px] tracking-[2px] font-syne hidden md:block">
              Built with React + Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
