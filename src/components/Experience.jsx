import { experiences } from '../constants';
import SectionLabel from './fx/SectionLabel';
import Magnetic from './fx/Magnetic';

const Experience = () => (
  <section
    id="career"
    className="relative py-28 sm:py-36 px-6 sm:px-12 border-t border-white/[0.06]"
  >
    <SectionLabel index="06" title="Career" />

    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-20 items-start">
      {/* Sticky column */}
      <div className="md:w-[35%] md:sticky md:top-[20vh]">
        <p className="text-[10px] uppercase tracking-[0.35em] text-smoke font-display mb-6">
          Career
        </p>
        <h2 className="font-display font-bold text-bone text-[13vw] md:text-[5vw] leading-[0.88] tracking-tighter mb-8">
          Where
          <br />
          I've built
        </h2>

        <svg width="110" height="110" viewBox="0 0 100 100" className="mb-8" aria-hidden="true">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1"
            fill="none"
            className="draw-path"
          />
          <path
            d="M30 50 L45 65 L72 33"
            stroke="#f0f0f0"
            strokeWidth="1.5"
            fill="none"
            className="draw-path"
            style={{ transitionDelay: '0.5s' }}
          />
        </svg>

        <p className="text-ash text-[15px] leading-[1.8] font-light max-w-sm mb-10">
          Seven years shipping production systems across AI platforms, telecom
          infrastructure, federal data pipelines and healthtech.
        </p>

        <Magnetic strength={0.25}>
          <button
            type="button"
            onClick={() => window.open('/Romanus_Ezeugwu_CV.pdf', '_blank')}
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-black font-display font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-ash transition-colors"
          >
            Download résumé
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
              />
            </svg>
          </button>
        </Magnetic>
      </div>

      {/* Rows */}
      <div className="md:w-[65%] w-full md:pt-6">
        <div className="border-t border-white/[0.08]">
          {experiences.map((experience, index) => {
            const year = experience.date.match(/\d{4}/)?.[0] || '';

            return (
              <div
                key={`${experience.company_name}-${index}`}
                className="reveal-item fade-up group border-b border-white/[0.08] hoverable"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-5 sm:gap-8 py-8 sm:py-10 px-2 sm:px-4 transition-colors duration-500 group-hover:bg-white/[0.03]">
                  <span className="hidden sm:block text-smoke text-[11px] font-display w-6 shrink-0">
                    0{index + 1}
                  </span>

                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg border border-white/10 flex items-center justify-center shrink-0 bg-ink-3 group-hover:border-white/30 transition-colors duration-500">
                    <span className="font-display font-bold text-[11px] tracking-tight text-ash group-hover:text-bone transition-colors duration-500">
                      {experience.short}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-bone text-[15px] sm:text-[19px] tracking-tight truncate">
                      {experience.title}
                    </h3>
                    <p className="text-ash text-[12px] sm:text-[14px] font-light mt-0.5 truncate">
                      {experience.company_name}
                      {experience.location && (
                        <span className="text-smoke"> · {experience.location}</span>
                      )}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="font-display font-bold text-[26px] sm:text-[34px] leading-none tracking-tighter text-white/15 group-hover:text-white/60 transition-colors duration-500">
                      {year}
                    </span>
                    <p className="hidden sm:block text-smoke text-[10px] uppercase tracking-[0.15em] font-display mt-1.5">
                      {experience.date}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
