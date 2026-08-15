import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
  { id: 'work', title: 'Work', path: '/#work' },
  { id: 'open-source', title: 'Open Source', path: '/#open-source' },
  { id: 'speaking', title: 'Speaking', path: '/speaking' },
  { id: 'career', title: 'Career', path: '/#career' },
  { id: 'bio', title: 'Bio', path: '/bio' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <nav className="fixed w-full z-50 px-6 sm:px-8 py-6 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="font-display font-bold text-lg sm:text-xl tracking-tighter hoverable pointer-events-auto"
        >
          ROMEO
        </Link>

        <div className="hidden md:flex gap-8 text-[13px] font-medium tracking-wide font-display pointer-events-auto">
          {LINKS.map((link) =>
            link.path.startsWith('/#') ? (
              <a
                key={link.id}
                href={link.path}
                className="hoverable opacity-60 hover:opacity-100 transition-opacity uppercase"
              >
                {link.title}
              </a>
            ) : (
              <Link
                key={link.id}
                to={link.path}
                className="hoverable opacity-60 hover:opacity-100 transition-opacity uppercase"
              >
                {link.title}
              </Link>
            )
          )}
        </div>

        <a
          href="/#contact"
          className="hidden md:inline-block hoverable border border-white/20 px-6 py-2 rounded-full text-[11px] uppercase tracking-[0.2em] font-display hover:bg-white hover:text-black transition-colors pointer-events-auto"
        >
          Let's talk
        </a>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="md:hidden border border-white/20 px-5 py-2 rounded-full text-[11px] uppercase tracking-[0.2em] font-display pointer-events-auto"
        >
          Menu
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        /* overflow-hidden matters: without it, content taller than the viewport
           renders past the box and stays visible while the panel is closed. */
        className={`fixed inset-0 z-[60] bg-black flex flex-col overflow-hidden md:hidden transition-transform duration-700 ease-in-out-expo ${
          open ? 'translate-y-0' : '-translate-y-full'
        }`}
        aria-hidden={!open}
      >
        <div className="flex justify-between items-center px-6 py-6">
          <span className="font-display font-bold text-lg tracking-tighter">ROMEO</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="border border-white/20 px-5 py-2 rounded-full text-[11px] uppercase tracking-[0.2em] font-display"
          >
            Close
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center px-6 overflow-y-auto no-scrollbar">
          {[...LINKS, { id: 'contact', title: 'Contact', path: '/#contact' }].map((link, i) => (
            <div key={link.id} className="border-b border-white/10 py-5 shrink-0">
              <div className="flex items-baseline justify-between">
                {link.path.startsWith('/#') ? (
                  <a
                    href={link.path}
                    onClick={() => setOpen(false)}
                    className="font-display font-bold text-[11vw] leading-none tracking-tighter uppercase"
                  >
                    {link.title}
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className="font-display font-bold text-[11vw] leading-none tracking-tighter uppercase"
                  >
                    {link.title}
                  </Link>
                )}
                <span className="text-smoke text-xs font-display">0{i + 1}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="px-6 pb-10 flex justify-between items-center text-smoke text-[10px] uppercase tracking-[0.2em] font-display">
          <span>Lagos, NG</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Available
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
