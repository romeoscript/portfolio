import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { textVariant } from '../utils/motion';

const TechPill = ({ name, icon }) => (
  <div className="flex items-center gap-4 px-6 py-4 mx-3 rounded-full border border-white/[0.06]
    bg-surface hover:border-lime/30 hover:bg-surface-2 transition-all duration-300 group cursor-default flex-shrink-0">
    <img src={icon} alt={name} className="w-8 h-8 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
    <span className="text-text-muted text-[14px] font-syne font-medium tracking-wide whitespace-nowrap
      group-hover:text-text-primary transition-colors duration-300">
      {name}
    </span>
  </div>
);

const Tech = () => {
  // Double the array for seamless loop
  const doubled = [...technologies, ...technologies];

  return (
    <>
      <motion.div variants={textVariant()} className="px-6 sm:px-16 max-w-7xl mx-auto mb-4">
        <p className="text-[11px] uppercase tracking-[5px] text-lime font-syne font-medium mb-3">
          Stack
        </p>
        <h2 className="font-instrument italic text-text-primary text-[40px] xs:text-[52px] sm:text-[64px] leading-[0.95] tracking-tight">
          Technologies
        </h2>
      </motion.div>

      {/* ── MARQUEE ROW 1 - left to right ── */}
      <div className="mt-12 overflow-hidden border-t border-b border-white/[0.04] py-6">
        <div className="marquee-track">
          {doubled.map((tech, i) => (
            <TechPill key={`r1-${i}`} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>

      {/* ── MARQUEE ROW 2 - right to left ── */}
      <div className="overflow-hidden border-b border-white/[0.04] py-6">
        <div
          className="marquee-track"
          style={{ animationDirection: 'reverse', animationDuration: '35s' }}
        >
          {[...doubled].reverse().map((tech, i) => (
            <TechPill key={`r2-${i}`} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>

      {/* Tech count */}
      <div className="px-6 sm:px-16 max-w-7xl mx-auto mt-8 flex items-center gap-3">
        <span className="font-instrument italic text-lime text-[32px]">{technologies.length}</span>
        <span className="text-text-dim text-[11px] uppercase tracking-[3px] font-syne">
          Technologies in my toolkit
        </span>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
