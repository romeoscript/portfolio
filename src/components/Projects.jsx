import { useEffect, useRef, useState } from 'react';
import { projects } from '../constants';
import SectionLabel from './fx/SectionLabel';

const FEATURED_COUNT = 4;
const featured = projects.slice(0, FEATURED_COUNT);
const archive = projects.slice(FEATURED_COUNT);

const isPlaceholder = (url) => !url || url === 'https://github.com/';

const GRID_FILL = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
  backgroundSize: '48px 48px',
};

/** Screenshot when we have one; a neutral grid panel until then. */
const ProjectVisual = ({ project, className }) =>
  project.image ? (
    <img
      src={project.image}
      alt={project.name}
      loading="lazy"
      className={className}
    />
  ) : (
    <div className={`${className} bg-ink-2`} aria-hidden="true">
      <div className="absolute inset-0 opacity-[0.12]" style={GRID_FILL} />
    </div>
  );

const ProjectCard = ({ project, index }) => (
  <article className="group relative w-[82vw] sm:w-[60vw] lg:w-[46vw] shrink-0 hoverable">
    <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/[0.08]">
      <ProjectVisual
        project={project}
        className="absolute inset-0 w-full h-full object-cover object-top img-zoom-bw"
      />
      {/* Strong enough to keep the caption legible over light screenshots. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.88) 38%, rgba(0,0,0,0.45) 62%, rgba(0,0,0,0.1) 100%)',
        }}
      />

      <span className="absolute top-5 right-6 font-display font-bold text-[52px] leading-none text-white/15 select-none">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
        <h3 className="font-display font-bold text-bone text-[24px] sm:text-[32px] tracking-tighter leading-none">
          {project.name}
        </h3>
        <p className="text-ash text-[13px] sm:text-[15px] leading-[1.6] font-light mt-3 max-w-md">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.tags?.map((tag) => (
            <span
              key={tag.name}
              className="text-[9px] uppercase tracking-[0.2em] font-display text-ash px-3 py-1 rounded-full border border-white/15 bg-white/[0.04]"
            >
              {tag.name}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          {!isPlaceholder(project.demo) && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="hoverable px-5 py-2 rounded-full bg-white text-black text-[10px] uppercase tracking-[0.2em] font-display font-bold hover:bg-ash transition-colors"
            >
              Live site
            </a>
          )}
          {!isPlaceholder(project.repo) && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="hoverable px-5 py-2 rounded-full border border-white/20 text-bone text-[10px] uppercase tracking-[0.2em] font-display hover:bg-white hover:text-black transition-colors"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  </article>
);

const Projects = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setPinned(query.matches && !reduced.matches);

    sync();
    query.addEventListener('change', sync);
    reduced.addEventListener('change', sync);
    return () => {
      query.removeEventListener('change', sync);
      reduced.removeEventListener('change', sync);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!pinned || !section || !track) return undefined;

    let distance = 0;
    let ticking = false;

    const measure = () => {
      distance = Math.max(track.scrollWidth - window.innerWidth, 0);
      section.style.height = `${window.innerHeight + distance}px`;
      update();
    };

    const update = () => {
      const start = section.offsetTop;
      const travel = section.offsetHeight - window.innerHeight;
      const pct = travel > 0 ? (window.scrollY - start) / travel : 0;
      const clamped = Math.min(Math.max(pct, 0), 1);
      track.style.transform = `translate3d(-${distance * clamped}px, 0, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
      section.style.height = '';
      track.style.transform = '';
    };
  }, [pinned]);

  return (
    <>
      {/* ── PINNED PIPELINE ── */}
      <section
        id="work"
        ref={sectionRef}
        className="horizontal-section border-t border-white/[0.06]"
      >
        <SectionLabel index="02" title="Selected Work" />

        <div
          className={
            pinned
              ? 'sticky top-0 h-screen overflow-hidden flex items-center'
              : 'py-24 overflow-x-auto no-scrollbar'
          }
        >
          <div
            ref={trackRef}
            className={`horizontal-track gap-10 sm:gap-16 px-6 sm:px-12 items-center ${
              pinned ? '' : 'snap-x snap-mandatory'
            }`}
          >
            <div className="w-[78vw] sm:w-[52vw] lg:w-[30vw] shrink-0">
              <p className="text-[10px] uppercase tracking-[0.35em] text-smoke font-display mb-6">
                Work
              </p>
              <h2 className="font-display font-bold text-[14vw] lg:text-[6vw] leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-600">
                Selected
                <br />
                Projects
              </h2>
              <p className="text-ash text-[14px] sm:text-[16px] leading-[1.7] font-light mt-8 max-w-sm">
                Products shipped across fintech, social, logistics and AI.
                Different domains, same obsession with the details.
              </p>
              <p className="hidden lg:flex items-center gap-3 mt-10 text-[10px] uppercase tracking-[0.3em] text-smoke font-display">
                Keep scrolling
                <span className="w-12 h-px bg-white/25" />
              </p>
            </div>

            {featured.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ARCHIVE ── */}
      <section
        id="archive"
        className="relative py-28 sm:py-32 px-6 sm:px-12 border-t border-white/[0.06]"
      >
        <SectionLabel index="03" title="Archive" />

        {/* Full-bleed: the accordion reads best edge-to-edge, so no max-width cap. */}
        <div className="mb-12 flex flex-wrap justify-between items-end gap-4">
          <h3 className="font-display font-bold text-bone text-[10vw] sm:text-[52px] leading-none tracking-tighter">
            Archive
          </h3>
          <p className="text-smoke text-[11px] uppercase tracking-[0.25em] font-display">
            <span className="md:hidden">Tap to open</span>
            <span className="hidden md:inline">Hover to expand</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:h-[58vh]">
          {archive.map((project, i) => (
            <a
              key={project.id}
              href={isPlaceholder(project.demo) ? project.repo : project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="accordion-item group hoverable block border border-white/[0.08]"
            >
              <ProjectVisual
                project={project}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/25 transition-colors duration-700" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/70 to-transparent" />

              <span className="absolute top-5 left-5 font-display text-[11px] tracking-[0.2em] text-white/50">
                0{FEATURED_COUNT + i + 1}
              </span>

              {/* Collapsed state reads as a labelled tab rather than a dark sliver. */}
              <div className="hidden md:flex absolute inset-0 items-end justify-center pb-8 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <span className="[writing-mode:vertical-rl] rotate-180 font-display font-bold text-[17px] tracking-tight text-bone whitespace-nowrap">
                  {project.name}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 accordion-text">
                <h4 className="font-display font-bold text-[22px] text-bone tracking-tight whitespace-nowrap">
                  {project.name}
                </h4>
                <p className="text-ash text-[12px] font-light mt-1 max-w-sm">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
