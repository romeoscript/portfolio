import { motion } from 'framer-motion';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { download, downloadHover, resume } from '../assets';
import { fadeIn, textVariant } from '../utils/motion';

const ExperienceRow = ({ experience, index }) => {
  // Extract year from date string
  const year = experience.date.match(/\d{4}/)?.[0] || '';

  return (
    <motion.div
      variants={fadeIn('up', 'spring', 0.15 * index, 0.6)}
      className="exp-row group cursor-default"
    >
      <div className="grid grid-cols-12 items-center gap-4 px-4 sm:px-8 py-7 sm:py-9">
        {/* Number */}
        <div className="col-span-1 hidden sm:block">
          <span className="text-text-dim text-[13px] font-syne font-medium">
            0{index + 1}
          </span>
        </div>

        {/* Icon */}
        <div className="col-span-2 sm:col-span-1">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-surface-2 border border-white/[0.04] flex items-center justify-center
            group-hover:border-lime/20 transition-colors">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
            />
          </div>
        </div>

        {/* Title & Company */}
        <div className="col-span-6 sm:col-span-5">
          <h3 className="text-text-primary text-[16px] sm:text-[18px] font-syne font-bold tracking-wide">
            {experience.title}
          </h3>
          <p className="text-text-muted text-[13px] sm:text-[14px] font-syne mt-0.5">
            {experience.company_name}
          </p>
        </div>

        {/* Date */}
        <div className="col-span-4 sm:col-span-4 text-right sm:text-left">
          <span className="font-instrument italic text-text-dim text-[28px] sm:text-[36px] leading-none
            group-hover:text-lime/40 transition-colors duration-300">
            {year}
          </span>
          <p className="text-text-dim text-[11px] uppercase tracking-[2px] font-syne mt-1 hidden sm:block">
            {experience.date}
          </p>
        </div>

        {/* Arrow */}
        <div className="col-span-1 hidden sm:flex justify-end">
          <svg className="exp-arrow w-5 h-5 text-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      {/* ── HEADER ── */}
      <div className="flex items-end justify-between mb-16">
        <motion.div variants={textVariant()}>
          <p className="text-[11px] uppercase tracking-[5px] text-lime font-syne font-medium mb-3">
            Career
          </p>
          <h2 className="font-instrument italic text-text-primary text-[40px] xs:text-[52px] sm:text-[64px] md:text-[80px] leading-[0.95] tracking-tight">
            Experience
          </h2>
        </motion.div>
        <motion.span
          variants={fadeIn('', '', 0.2, 0.6)}
          className="hidden sm:block font-instrument italic text-[120px] md:text-[160px] leading-none text-white/[0.02] select-none -mb-4"
        >
          03
        </motion.span>
      </div>

      {/* ── EXPERIENCE ROWS ── */}
      <div className="border-t border-white/[0.06] rounded-2xl overflow-hidden">
        {experiences.map((exp, index) => (
          <ExperienceRow key={index} experience={exp} index={index} />
        ))}
      </div>

      {/* ── RESUME CTA ── */}
      <motion.div
        variants={fadeIn('up', 'spring', 0.6, 0.6)}
        className="mt-12 flex items-center gap-6"
      >
        <button
          className="group flex items-center gap-3 px-6 py-3.5 rounded-full
            bg-lime text-dark font-syne font-bold text-[13px] uppercase tracking-[2px]
            hover:bg-text-primary transition-colors duration-300"
          onClick={() => window.open('resume.pdf', '_blank')}
          onMouseOver={() => {
            document.querySelector('.download-btn')?.setAttribute('src', downloadHover);
          }}
          onMouseOut={() => {
            document.querySelector('.download-btn')?.setAttribute('src', download);
          }}
        >
          Download Resume
          <img
            src={download}
            alt="download"
            className="download-btn w-5 h-5 object-contain"
          />
        </button>
        <span className="text-text-dim text-[12px] font-syne tracking-wide hidden sm:block">
          PDF, updated 2024
        </span>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
