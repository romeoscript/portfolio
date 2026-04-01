import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github, pineapple } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const BentoCard = ({ name, description, image, repo, demo, index, tags }) => {
  // Determine card size: first 2 are large, rest alternate medium/small
  const isLarge = index < 2;
  const isMedium = index >= 2 && index % 3 === 0;

  return (
    <motion.div
      variants={fadeIn('up', 'spring', 0.1 * index, 0.6)}
      className={`bento-card ${
        isLarge
          ? 'col-span-1 md:col-span-2 row-span-2 min-h-[400px] md:min-h-[500px]'
          : isMedium
          ? 'col-span-1 md:col-span-2 min-h-[300px] md:min-h-[350px]'
          : 'col-span-1 min-h-[300px] md:min-h-[350px]'
      }`}
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Always-visible number + name at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10
        bg-gradient-to-t from-black/80 via-black/30 to-transparent">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-lime/40 font-instrument italic text-[48px] sm:text-[64px] leading-none select-none block -mb-2">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="text-text-primary font-syne font-bold text-[18px] sm:text-[22px] tracking-wide">
              {name}
            </h3>
          </div>
        </div>
      </div>

      {/* Hover overlay with details */}
      <div className="bento-overlay z-20">
        <span className="font-instrument italic text-lime/30 text-[80px] leading-none absolute top-4 right-6 select-none">
          {String(index + 1).padStart(2, '0')}
        </span>

        <h3 className="text-text-primary font-syne font-bold text-[20px] sm:text-[24px] tracking-wide mb-2">
          {name}
        </h3>
        <p className="text-text-muted text-[14px] leading-[1.6] font-syne font-light mb-4 max-w-md">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tags?.map((tag) => (
            <span
              key={tag.name}
              className="text-[10px] text-lime/70 px-3 py-1 rounded-full
                bg-lime/[0.06] border border-lime/10
                uppercase tracking-[2px] font-syne font-medium"
            >
              {tag.name}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {repo && repo !== 'https://github.com/' && (
            <button
              onClick={() => window.open(repo, '_blank')}
              className="flex items-center gap-2 px-4 py-2 rounded-full
                bg-white/[0.06] border border-white/10
                hover:border-lime/30 transition-all duration-300 group/btn"
            >
              <img src={github} alt="github" className="w-4 h-4 invert opacity-50 group-hover/btn:opacity-100" />
              <span className="text-[11px] font-syne font-medium tracking-[2px] text-text-muted group-hover/btn:text-text-primary uppercase">
                Code
              </span>
            </button>
          )}
          {demo && demo !== 'https://github.com/' && (
            <button
              onClick={() => window.open(demo, '_blank')}
              className="flex items-center gap-2 px-4 py-2 rounded-full
                bg-lime/20 border border-lime/30
                hover:bg-lime hover:text-dark transition-all duration-300 group/btn"
            >
              <img src={pineapple} alt="demo" className="w-4 h-4 opacity-70 group-hover/btn:opacity-100" />
              <span className="text-[11px] font-syne font-medium tracking-[2px] text-lime group-hover/btn:text-dark uppercase">
                Live
              </span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="-mt-[2rem]">
      {/* ── HEADER ── */}
      <div className="flex items-end justify-between mb-4">
        <motion.div variants={textVariant()}>
          <p className="text-[11px] uppercase tracking-[5px] text-lime font-syne font-medium mb-3">
            Work
          </p>
          <h2 className="font-instrument italic text-text-primary text-[40px] xs:text-[52px] sm:text-[64px] md:text-[80px] leading-[0.95] tracking-tight">
            Selected projects
          </h2>
        </motion.div>
        <motion.span
          variants={fadeIn('', '', 0.2, 0.6)}
          className="hidden sm:block font-instrument italic text-[120px] md:text-[160px] leading-none text-white/[0.02] select-none -mb-4"
        >
          02
        </motion.span>
      </div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="text-text-muted text-[16px] sm:text-[17px] max-w-2xl leading-[1.8] font-syne font-light mb-12"
      >
        A curated selection of projects showcasing my ability to ship
        real products across different domains and tech stacks.
      </motion.p>

      {/* ── BENTO GRID ── */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto">
        {projects.map((project, index) => (
          <BentoCard key={project.id} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
