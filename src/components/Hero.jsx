import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const MARQUEE_TEXT = 'FULLSTACK DEVELOPER \u00B7 CEO \u00B7 UI ENGINEER \u00B7 CREATIVE TECHNOLOGIST \u00B7 ';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-line',
        { scaleX: 0 },
        { scaleX: 1, duration: 1.5, delay: 1.8, ease: 'power3.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-dark"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(200,255,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-lime/[0.03] rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />

      {/* ── TOP BAR ── */}
      <div className="relative z-10 flex justify-between items-center px-6 sm:px-16 pt-28 sm:pt-32">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[11px] sm:text-[13px] uppercase tracking-[5px] text-text-muted font-syne"
        >
          Portfolio / 2024
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
          <span className="text-[11px] sm:text-[13px] uppercase tracking-[5px] text-text-muted font-syne">
            Open to work
          </span>
        </motion.div>
      </div>

      {/* ── MAIN NAME ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-16 -mt-8">
        {/* First name */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-instrument text-text-primary font-normal
              text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw]
              leading-[0.85] tracking-[-0.04em]"
          >
            Romeo
          </motion.h1>
        </div>

        {/* Last name - offset right */}
        <div className="overflow-hidden sm:ml-[15vw] md:ml-[20vw]">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-instrument italic text-lime
              text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw]
              leading-[0.85] tracking-[-0.04em]"
          >
            Ezeugwu
          </motion.h1>
        </div>

        {/* Divider line */}
        <div
          className="hero-line mt-10 h-[1px] bg-gradient-to-r from-lime/40 via-lime/20 to-transparent origin-left"
        />

        {/* Subtitle row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <p className="text-text-muted text-[15px] sm:text-[17px] leading-[1.7] max-w-lg font-syne font-light">
            Building digital products that live at the intersection of
            <span className="text-text-primary"> engineering</span>,
            <span className="text-text-primary"> design</span>, and
            <span className="text-lime"> business strategy</span>.
          </p>

          <a
            href="#about"
            className="group inline-flex items-center gap-3 text-[12px] uppercase tracking-[4px] text-text-muted hover:text-lime transition-colors font-syne"
          >
            Scroll down
            <svg className="w-4 h-4 rotate-90 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* ── BOTTOM MARQUEE ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="relative z-10 border-t border-white/[0.04] py-4 overflow-hidden"
      >
        <div className="marquee-track">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-[11px] uppercase tracking-[6px] text-text-dim font-syne whitespace-nowrap px-4"
            >
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
