import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = toggle ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [toggle]);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark/80 backdrop-blur-xl border-b border-white/[0.04]'
          : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center max-w-[1800px] mx-auto px-6 sm:px-16 py-5">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-1.5 group"
          onClick={() => { setActive(''); window.scrollTo(0, 0); }}
        >
          <span className="font-instrument text-text-primary text-[24px] sm:text-[28px] italic tracking-tight">
            R
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-lime group-hover:scale-150 transition-transform duration-300" />
        </Link>

        {/* Desktop links */}
        <ul className="list-none hidden md:flex items-center gap-8">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-lime' : 'text-text-muted'
              } hover:text-text-primary text-[12px] font-syne font-medium
                uppercase tracking-[4px] cursor-pointer nav-links transition-colors duration-300`}
              onClick={() => {
                setActive(nav.title);
                if (nav.path.startsWith('/#')) window.location.href = nav.path;
              }}
            >
              {nav.path.startsWith('/#') ? (
                <a href={nav.path}>{nav.title}</a>
              ) : (
                <Link to={nav.path}>{nav.title}</Link>
              )}
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="ml-4 px-5 py-2.5 bg-lime text-dark text-[11px] font-syne font-bold
                uppercase tracking-[3px] hover:bg-text-primary transition-colors duration-300 rounded-full"
            >
              Let's Talk
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            {toggle ? (
              <motion.div
                key="menu-open"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 bg-dark/[0.98] z-50 flex flex-col"
              >
                {/* Close */}
                <div className="flex justify-between items-center px-6 py-5">
                  <span className="font-instrument text-text-primary text-[24px] italic">
                    R<span className="text-lime">.</span>
                  </span>
                  <button onClick={() => setToggle(false)}>
                    <img src={close} alt="close" className="w-5 h-5 invert opacity-60" />
                  </button>
                </div>

                {/* Links */}
                <div className="flex-1 flex flex-col justify-center px-8">
                  {navLinks.map((nav, i) => (
                    <motion.div
                      key={nav.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="border-b border-white/[0.04] py-6"
                      onClick={() => {
                        setToggle(false);
                        setActive(nav.title);
                        if (nav.path.startsWith('/#')) window.location.href = nav.path;
                      }}
                    >
                      <div className="flex items-center justify-between">
                        {nav.path.startsWith('/#') ? (
                          <a href={nav.path} className="text-text-primary font-instrument text-[40px] xs:text-[48px] italic tracking-tight">
                            {nav.title}
                          </a>
                        ) : (
                          <Link to={nav.path} className="text-text-primary font-instrument text-[40px] xs:text-[48px] italic tracking-tight">
                            {nav.title}
                          </Link>
                        )}
                        <span className="text-text-dim text-[14px] font-syne">0{i + 1}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-8 pb-10 flex justify-between items-center text-text-dim text-[11px] uppercase tracking-[3px] font-syne">
                  <span>Lagos, NG</span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
                    Available
                  </span>
                </div>
              </motion.div>
            ) : (
              <button onClick={() => setToggle(true)} className="flex flex-col gap-[6px] group">
                <span className="w-7 h-[1.5px] bg-text-primary group-hover:bg-lime transition-colors" />
                <span className="w-5 h-[1.5px] bg-text-primary group-hover:bg-lime transition-colors ml-auto" />
              </button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
