import { useEffect, useState } from 'react';

const MARQUEE_TEXT =
  'FULLSTACK DEVELOPER · CEO · UI ENGINEER · CREATIVE TECHNOLOGIST · ';

const Hero = () => {
  const [ready, setReady] = useState(false);

  // Hold the type reveal until the preloader has cleared the viewport.
  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  const active = ready ? 'active' : '';

  return (
    <header
      id="index"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden"
    >
      {/* Parallax field */}
      <div className="absolute inset-0 z-0 pointer-events-none" data-parallax="0.25">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] max-w-[120vw] rounded-full bg-white/[0.035] blur-[140px]" />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-ink via-transparent to-transparent pointer-events-none" />

      {/* Top row */}
      <div className="relative z-10 flex justify-between items-center px-6 sm:px-12 pt-28 sm:pt-32">
        <p
          className={`text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-smoke font-display transition-opacity duration-700 ${
            ready ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Portfolio / {new Date().getFullYear()}
        </p>
        <div
          className={`flex items-center gap-2 transition-opacity duration-700 delay-100 ${
            ready ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-smoke font-display">
            Open to work
          </span>
        </div>
      </div>

      {/* Name */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-12 py-16">
        <h1 className="font-display font-bold leading-[0.82] tracking-tighter text-bone text-[19vw] md:text-[15vw]">
          <span className={`split-line ${active}`}>
            <span>ROMEO</span>
          </span>
          <span
            className={`split-line ${active}`}
            style={{ transitionDelay: '0.12s' }}
          >
            <span className="block text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.45)]">
              EZEUGWU
            </span>
          </span>
        </h1>

        <div
          className={`mt-10 h-px bg-gradient-to-r from-white/40 to-transparent origin-left transition-transform duration-[1400ms] ease-out-expo ${
            ready ? 'scale-x-100' : 'scale-x-0'
          }`}
          style={{ transitionDelay: '0.6s' }}
        />

        <div
          className={`mt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-8 transition-all duration-1000 ${
            ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.8s' }}
        >
          <p className="text-ash text-[15px] sm:text-[18px] leading-[1.7] max-w-xl font-light">
            Building digital products at the intersection of{' '}
            <span className="text-bone">engineering</span>,{' '}
            <span className="text-bone">design</span>, and{' '}
            <span className="text-bone">business strategy</span>.
          </p>

          <a
            href="#about"
            className="hoverable group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-smoke hover:text-bone transition-colors font-display shrink-0"
          >
            Scroll
            <svg
              className="w-4 h-4 rotate-90 group-hover:translate-y-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom ticker */}
      <div
        className={`relative z-10 border-t border-white/[0.06] py-4 overflow-hidden transition-opacity duration-1000 ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1s' }}
      >
        <div className="marquee-track">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-[10px] uppercase tracking-[0.4em] text-smoke font-display whitespace-nowrap px-4"
            >
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Hero;
