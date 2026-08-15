import { services } from '../constants';
import { main } from '../assets';
import SectionLabel from './fx/SectionLabel';

const STATS = [
  { target: 7, suffix: '+', label: 'Years' },
  { target: 20, suffix: '+', label: 'Projects' },
  { target: 8, suffix: '+', label: 'Clients' },
];

const SERVICE_ICONS = {
  ai: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
    </>
  ),
  automation: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <path d="M10 6.5h4.5A2.5 2.5 0 0 1 17 9v5" />
      <path d="M14 17.5H9.5A2.5 2.5 0 0 1 7 15v-5" />
    </>
  ),
  frontend: (
    <>
      <rect x="3" y="4" width="18" height="15" rx="2" />
      <path d="M3 9h18M8 9v10" />
    </>
  ),
  backend: (
    <>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </>
  ),
  opensource: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v7M12 15v7" />
      <circle cx="5" cy="19" r="2.5" />
      <path d="M5 16.5V8a3 3 0 0 1 3-3h1" />
    </>
  ),
  prototyping: (
    <>
      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
      <path d="m2 17 10 5 10-5" />
      <path d="m2 12 10 5 10-5" />
    </>
  ),
};

const STATEMENT =
  'I build high-performance web applications end to end, and I keep pushing on what a browser can be made to do.';

const About = () => (
  <section id="about" className="relative py-28 sm:py-36 px-6 sm:px-12 border-t border-white/[0.06]">
    <SectionLabel index="01" title="Profile" />

    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-20 items-start">
      {/* Sticky column */}
      <div className="md:w-[38%] md:sticky md:top-[18vh]">
        <p className="text-[10px] uppercase tracking-[0.35em] text-smoke font-display mb-6">
          About
        </p>
        <h2 className="font-display font-bold text-bone text-[13vw] md:text-[5vw] leading-[0.88] tracking-tighter mb-8">
          Who
          <br />I am
        </h2>
        <p className="text-ash text-[15px] sm:text-[16px] leading-[1.8] font-light max-w-md">
          A full-stack and open-source engineer with deep footing on both sides of the
          stack. I ship production systems, and I contribute upstream to the tools I build
          with. If you're building something ambitious, let's talk.
        </p>

        <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/[0.08] pt-8">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-display font-bold text-bone text-[34px] sm:text-[44px] leading-none tracking-tighter">
                <span className="counter" data-target={stat.target}>
                  0
                </span>
                {stat.suffix}
              </div>
              <p className="text-smoke text-[10px] uppercase tracking-[0.25em] font-display mt-3">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling column */}
      <div className="md:w-[62%] flex flex-col gap-20 md:gap-28 md:pt-24 w-full">
        <div className="reveal-item fade-scale group relative aspect-[4/5] sm:aspect-[16/11] rounded-lg overflow-hidden hoverable">
          <img
            src={main}
            alt="Romeo Ezeugwu"
            className="absolute inset-0 w-full h-full object-cover object-top img-zoom-bw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 z-10">
            <h3 className="font-display font-bold text-[20px] text-bone tracking-tight">
              Romanus Chukwuemeka Ezeugwu
            </h3>
            <p className="text-[11px] uppercase tracking-[0.25em] text-ash font-display mt-1">
              Lagos, Nigeria
            </p>
          </div>
        </div>

        <p className="word-reveal text-[22px] sm:text-[34px] md:text-[40px] font-light leading-[1.35] text-ash tracking-tight">
          {STATEMENT.split(' ').map((word, i) => (
            <span key={`${word}-${i}`} style={{ transitionDelay: `${i * 0.04}s` }}>
              {word}&nbsp;
            </span>
          ))}
        </p>

        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-smoke font-display mb-8">
            What I do
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.08] border border-white/[0.08] rounded-lg overflow-hidden">
            {services.map((service, index) => (
              <div
                key={service.title}
                /* An odd count would leave a gap-coloured empty cell, so the
                   last card spans the row instead. */
                className={`reveal-item fade-up group bg-ink hover:bg-ink-3 transition-colors duration-500 p-7 flex items-start gap-5 hoverable ${
                  services.length % 2 === 1 && index === services.length - 1
                    ? 'sm:col-span-2'
                    : ''
                }`}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="w-6 h-6 text-ash opacity-60 group-hover:opacity-100 group-hover:text-bone transition-all duration-500 shrink-0 mt-0.5"
                >
                  {SERVICE_ICONS[service.id]}
                </svg>
                <div className="flex-1">
                  <h3 className="font-display font-medium text-bone text-[15px] tracking-tight">
                    {service.title}
                  </h3>
                </div>
                <span className="text-smoke text-[11px] font-display">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
