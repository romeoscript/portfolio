import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { speaking, award } from '../constants';
import useScrollReveal from '../hooks/useScrollReveal';

const ALL = 'All';

const unique = (key) => [ALL, ...new Set(speaking.map((talk) => talk[key]))];

const FilterRow = ({ label, options, active, onChange }) => (
  <div className="flex flex-wrap items-center gap-3">
    <span className="text-smoke text-[10px] uppercase tracking-[0.3em] font-display w-12 shrink-0">
      {label}
    </span>
    {options.map((option) => (
      <button
        key={option}
        type="button"
        onClick={() => onChange(option)}
        className={`hoverable px-4 py-1.5 rounded-full border text-[11px] font-display tracking-wide transition-colors duration-300 ${
          active === option
            ? 'bg-white text-black border-white'
            : 'border-white/15 text-ash hover:border-white/40 hover:text-bone'
        }`}
      >
        {option}
      </button>
    ))}
  </div>
);

const SpeakingPage = () => {
  const [role, setRole] = useState(ALL);
  const [year, setYear] = useState(ALL);

  useScrollReveal();

  const roles = useMemo(() => unique('role'), []);
  const years = useMemo(() => unique('year'), []);

  const filtered = speaking.filter(
    (talk) => (role === ALL || talk.role === role) && (year === ALL || talk.year === year)
  );

  return (
    <main className="relative min-h-screen pt-32 sm:pt-40 pb-28 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-10 mb-14">
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.35em] text-smoke font-display mb-5">
              Speaking
            </p>
            <h1 className="font-display font-bold text-bone text-[16vw] sm:text-[7vw] leading-[0.88] tracking-tighter">
              On stage
            </h1>
            <p className="text-ash text-[15px] sm:text-[17px] leading-[1.7] font-light mt-7">
              I speak on open source, AI engineering and breaking into tech, from campus
              keynotes to international cohorts. Available for talks, workshops and panels.
            </p>

            <a
              href="/#contact"
              className="hoverable inline-flex items-center gap-3 mt-9 px-7 py-3.5 rounded-full bg-white text-black font-display font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-ash transition-colors"
            >
              Booking inquiry
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          <div>
            <div className="font-display font-bold text-bone text-[34px] sm:text-[44px] leading-none tracking-tighter">
              <span className="counter" data-target={speaking.length}>
                0
              </span>
            </div>
            <p className="text-smoke text-[10px] uppercase tracking-[0.25em] font-display mt-3">
              Engagements
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-4 py-7 border-y border-white/[0.08] mb-4">
          <FilterRow label="Role" options={roles} active={role} onChange={setRole} />
          <FilterRow label="Year" options={years} active={year} onChange={setYear} />
        </div>

        {/* Talks */}
        <div>
          {filtered.map((talk) => (
            <a
              key={`${talk.event}-${talk.date}`}
              href={talk.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-b border-white/[0.08] hoverable"
            >
              <div className="flex items-start gap-6 py-8 sm:py-9 px-2 sm:px-4 transition-colors duration-500 group-hover:bg-white/[0.03]">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h3 className="font-display font-bold text-bone text-[17px] sm:text-[22px] tracking-tight">
                      {talk.event}
                    </h3>
                    <span className="text-smoke text-[11px] uppercase tracking-[0.2em] font-display shrink-0">
                      {talk.date}
                    </span>
                  </div>

                  <p className="text-ash text-[13px] sm:text-[15px] font-light leading-[1.6] mt-2 max-w-2xl">
                    {talk.topic}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 mt-5">
                    <span className="px-3 py-1 rounded-full border border-white/20 bg-white/[0.05] text-bone text-[10px] uppercase tracking-[0.2em] font-display">
                      {talk.role}
                    </span>
                    <span className="text-smoke text-[11px] font-light">{talk.location}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}

          {filtered.length === 0 && (
            <p className="py-14 text-smoke text-[13px] font-light">
              Nothing matches that combination.
            </p>
          )}
        </div>

        {/* Recognition */}
        <p className="text-[10px] uppercase tracking-[0.35em] text-smoke font-display mt-20 mb-6">
          Recognition
        </p>
        <div className="reveal-item fade-up border border-white/[0.08] rounded-lg p-8 sm:p-10 bg-white/[0.02]">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="font-display font-bold text-bone text-[22px] sm:text-[30px] tracking-tighter">
                {award.title}
              </h3>
              <p className="text-ash text-[13px] uppercase tracking-[0.2em] font-display mt-3">
                {award.category}
              </p>
              <p className="text-ash text-[14px] sm:text-[15px] font-light leading-[1.7] mt-5">
                {award.body}
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-7">
                <a
                  href={award.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hoverable px-5 py-2 rounded-full bg-white text-black text-[10px] uppercase tracking-[0.2em] font-display font-bold hover:bg-ash transition-colors"
                >
                  View certificate
                </a>
                <a
                  href={award.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hoverable px-5 py-2 rounded-full border border-white/20 text-bone text-[10px] uppercase tracking-[0.2em] font-display hover:bg-white hover:text-black transition-colors"
                >
                  About the award
                </a>
              </div>
            </div>

            <span className="font-display font-bold text-[13px] uppercase tracking-[0.2em] text-smoke shrink-0">
              {award.date}
            </span>
          </div>
        </div>

        <Link
          to="/"
          className="hoverable inline-flex items-center gap-3 mt-20 text-[10px] uppercase tracking-[0.3em] text-smoke hover:text-bone transition-colors font-display"
        >
          <span className="w-10 h-px bg-white/25" />
          Back to home
        </Link>
      </div>
    </main>
  );
};

export default SpeakingPage;
