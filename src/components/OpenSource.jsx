import { openSourceStats, openSourceContributions, openSourceProjects } from '../constants';
import SectionLabel from './fx/SectionLabel';

const formatStars = (n) =>
  n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k` : String(n);

const StarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="w-3.5 h-3.5"
  >
    <path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5L2.6 9.8l6.5-.9L12 3Z" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    className="w-5 h-5 text-smoke opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-bone transition-all duration-500 shrink-0 mt-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 17L17 7M17 7H7M17 7v10"
    />
  </svg>
);

const RepoRow = ({ item, index, meta }) => (
  <a
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    className="reveal-item fade-up group block border-b border-white/[0.08] hoverable"
    style={{ transitionDelay: `${index * 0.08}s` }}
  >
    <div className="flex items-start gap-5 sm:gap-8 py-7 sm:py-9 px-2 sm:px-4 transition-colors duration-500 group-hover:bg-white/[0.03]">
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h4 className="font-display font-bold text-bone text-[16px] sm:text-[21px] tracking-tight break-all">
            {item.repo}
          </h4>
          <span className="flex items-center gap-1.5 text-ash text-[12px] font-display shrink-0">
            <StarIcon />
            {formatStars(item.stars)}
          </span>
        </div>

        <p className="text-ash text-[13px] sm:text-[15px] font-light leading-[1.6] mt-2 max-w-xl">
          {item.description}
        </p>

        {item.highlight && (
          <p className="text-smoke text-[12px] sm:text-[13px] font-light leading-[1.6] mt-3 max-w-xl border-l border-white/15 pl-4">
            {item.highlight}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 text-smoke text-[10px] font-display uppercase tracking-[0.2em]">
          {meta(item)}
        </div>
      </div>

      <ArrowIcon />
    </div>
  </a>
);

const OpenSource = () => (
  <section
    id="open-source"
    className="relative py-28 sm:py-36 px-6 sm:px-12 border-t border-white/[0.06]"
  >
    <SectionLabel index="04" title="Open Source" />

    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-10 mb-16">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-smoke font-display mb-5">
            Open Source
          </p>
          <h2 className="reveal-item fade-up font-display font-bold text-bone text-[12vw] sm:text-[56px] leading-none tracking-tighter">
            Built in public
          </h2>
        </div>

        <div className="flex gap-10 sm:gap-14">
          <div>
            <div className="font-display font-bold text-bone text-[34px] sm:text-[44px] leading-none tracking-tighter">
              <span className="counter" data-target={openSourceStats.mergedPrs}>
                0
              </span>
            </div>
            <p className="text-smoke text-[10px] uppercase tracking-[0.25em] font-display mt-3">
              Merged PRs
            </p>
          </div>
          <div>
            <div className="font-display font-bold text-bone text-[34px] sm:text-[44px] leading-none tracking-tighter">
              <span className="counter" data-target={openSourceStats.externalRepos}>
                0
              </span>
            </div>
            <p className="text-smoke text-[10px] uppercase tracking-[0.25em] font-display mt-3">
              Repositories
            </p>
          </div>
        </div>
      </div>

      {/* Upstream contributions */}
      <p className="text-[10px] uppercase tracking-[0.35em] text-smoke font-display mb-6">
        Contributions
      </p>
      <div className="border-t border-white/[0.08] mb-20">
        {openSourceContributions.map((item, index) => (
          <RepoRow
            key={item.repo}
            item={item}
            index={index}
            meta={(i) => (
              <span className="text-ash">
                {i.merged} merged {i.merged === 1 ? 'PR' : 'PRs'}
              </span>
            )}
          />
        ))}
      </div>

      {/* Authored projects */}
      <p className="text-[10px] uppercase tracking-[0.35em] text-smoke font-display mb-6">
        Maintained
      </p>
      <div className="border-t border-white/[0.08]">
        {openSourceProjects.map((item, index) => (
          <RepoRow
            key={item.repo}
            item={item}
            index={index}
            meta={(i) => (
              <>
                <span>{i.forks} forks</span>
                <span>{i.language}</span>
              </>
            )}
          />
        ))}
      </div>

      <a
        href="https://github.com/romeoscript"
        target="_blank"
        rel="noopener noreferrer"
        className="hoverable inline-flex items-center gap-3 mt-12 text-[10px] uppercase tracking-[0.3em] text-smoke hover:text-bone transition-colors font-display"
      >
        github.com/romeoscript
        <span className="w-10 h-px bg-white/25" />
      </a>
    </div>
  </section>
);

export default OpenSource;
