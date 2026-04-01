import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <div>
      {/* ── HEADER ROW ── */}
      <div className="flex items-end justify-between mb-16">
        <motion.div variants={textVariant()}>
          <p className="text-[11px] uppercase tracking-[5px] text-lime font-syne font-medium mb-3">
            About
          </p>
          <h2 className="font-instrument italic text-text-primary text-[40px] xs:text-[52px] sm:text-[64px] md:text-[80px] leading-[0.95] tracking-tight">
            Who I am
          </h2>
        </motion.div>
        <motion.span
          variants={fadeIn('', '', 0.2, 0.6)}
          className="hidden sm:block font-instrument italic text-[120px] md:text-[160px] leading-none text-white/[0.02] select-none -mb-4"
        >
          01
        </motion.span>
      </div>

      {/* ── ASYMMETRIC TWO-COLUMN ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6">
        {/* Left: large descriptive text */}
        <motion.div
          variants={fadeIn('right', 'tween', 0.1, 0.8)}
          className="lg:col-span-7"
        >
          <p className="text-text-muted text-[18px] sm:text-[22px] leading-[1.7] font-syne font-light">
            I'm a <span className="text-text-primary">passionate full-stack developer</span> with
            deep understanding of both front-end and back-end. I specialize in building
            <span className="text-lime"> high-performance web applications</span> and am constantly
            pushing the boundaries of what's possible on the web.
          </p>
          <p className="text-text-muted text-[16px] sm:text-[17px] leading-[1.8] font-syne font-light mt-6">
            Currently seeking full-stack opportunities where I can contribute to meaningful
            products. If you're building something ambitious, let's talk.
          </p>

          {/* ── STATS ROW ── */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              { num: '3+', label: 'Years' },
              { num: '20+', label: 'Projects' },
              { num: '8+', label: 'Clients' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeIn('up', 'spring', 0.3 + i * 0.1, 0.6)}
                className="border-t border-white/[0.06] pt-5"
              >
                <span className="font-instrument italic text-lime text-[40px] sm:text-[56px] leading-none">
                  {stat.num}
                </span>
                <p className="text-text-dim text-[11px] uppercase tracking-[3px] font-syne mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: service cards stacked */}
        <motion.div
          variants={fadeIn('left', 'tween', 0.3, 0.8)}
          className="lg:col-span-5 lg:pl-8"
        >
          <p className="text-[11px] uppercase tracking-[4px] text-text-dim font-syne mb-6">
            What I Do
          </p>
          <div className="flex flex-col gap-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeIn('up', 'spring', 0.4 + index * 0.1, 0.6)}
                className="group flex items-center gap-5 p-5 rounded-2xl bg-surface border border-white/[0.04]
                  hover:border-lime/20 hover:bg-surface-2 transition-all duration-400 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-limeMuted flex items-center justify-center flex-shrink-0
                  group-hover:bg-lime/20 transition-colors duration-300">
                  <img src={service.icon} alt={service.title} className="w-6 h-6 object-contain opacity-70" />
                </div>
                <div className="flex-1">
                  <h3 className="text-text-primary text-[15px] font-syne font-semibold tracking-wide">
                    {service.title}
                  </h3>
                </div>
                <span className="text-text-dim text-[12px] font-instrument italic opacity-0 group-hover:opacity-100 transition-opacity">
                  0{index + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
