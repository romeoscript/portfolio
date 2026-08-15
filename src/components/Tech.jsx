import { technologies } from '../constants';
import SectionLabel from './fx/SectionLabel';

const Tech = () => {
  const names = technologies.map((t) => t.name.toUpperCase());
  const doubledNames = [...names, ...names];
  const doubledIcons = [...technologies, ...technologies];

  return (
    <section
      id="stack"
      className="relative py-24 sm:py-28 border-t border-b border-white/[0.06] overflow-hidden"
    >
      <SectionLabel index="05" title="Stack" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-14">
        <p className="text-[10px] uppercase tracking-[0.35em] text-smoke font-display mb-5">
          Stack
        </p>
        <h2 className="reveal-item fade-up font-display font-bold text-bone text-[12vw] sm:text-[56px] leading-none tracking-tighter">
          Technologies
        </h2>
      </div>

      {/* Kinetic type row */}
      <div className="marquee-container overflow-hidden hoverable py-2">
        {/* Trailing padding per item, not a track gap: a gap would offset the
            -50% loop point by half a gap and visibly jump each cycle. */}
        <div className="marquee-track">
          {doubledNames.map((name, i) => (
            <span
              key={`name-${i}`}
              className="marquee-item text-[13vw] sm:text-[5.5rem] leading-none tracking-tight pr-12 sm:pr-16"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Icon row, opposite direction */}
      <div className="overflow-hidden mt-12 border-t border-white/[0.06] pt-12">
        <div
          className="marquee-track"
          style={{ animationDirection: 'reverse', animationDuration: '40s' }}
        >
          {doubledIcons.map((tech, i) => (
            <div
              key={`icon-${i}`}
              className="group flex items-center gap-4 px-6 py-3.5 mx-2 rounded-full border border-white/[0.08] hover:border-white/30 transition-colors duration-500 shrink-0"
            >
              <img
                src={tech.icon}
                alt=""
                aria-hidden="true"
                className="w-6 h-6 object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
              <span className="text-ash text-[13px] font-display tracking-wide whitespace-nowrap group-hover:text-bone transition-colors duration-500">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-12 flex items-center gap-4">
        <span className="font-display font-bold text-bone text-[32px] leading-none tracking-tighter">
          <span className="counter" data-target={technologies.length}>
            0
          </span>
        </span>
        <span className="text-smoke text-[10px] uppercase tracking-[0.3em] font-display">
          Technologies in the toolkit
        </span>
      </div>
    </section>
  );
};

export default Tech;
