import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo, logotext } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [toggle]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
         
            <span
              className="sm:text-battleGray sm:text-[40px] 
                text-eerieBlack text-[20px] font-mova
                font-extrabold uppercase">
              Romeo
            </span>
          
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? 'text-french' : 'text-eerieBlack'
                } hover:text-taupe text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => {
                setActive(nav.title);
                if (nav.path.startsWith('/#')) {
                  // Handle hash links - navigate to home first, then scroll
                  window.location.href = nav.path;
                }
              }}>
              {nav.path.startsWith('/#') ? (
                <a href={nav.path}>{nav.title}</a>
              ) : (
                <Link to={nav.path}>{nav.title}</Link>
              )}
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <div
              className={`p-4 sm:p-6 bg-flashWhite opacity-[0.98] fixed 
                top-0 left-0 w-full h-screen z-10 overflow-y-auto`}>
              <div className="flex justify-end mb-4">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col gap-4 
                items-start justify-start mt-8 px-4">
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${active === nav.title ? 'text-french' : 'text-eerieBlack'
                      } text-[48px] xs:text-[56px] font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer leading-tight`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                      if (nav.path.startsWith('/#')) {
                        window.location.href = nav.path;
                      }
                    }}>
                    {nav.path.startsWith('/#') ? (
                      <a href={nav.path}>{nav.title}</a>
                    ) : (
                      <Link to={nav.path}>{nav.title}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
