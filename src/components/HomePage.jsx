import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import OpenSource from './OpenSource';
import Tech from './Tech';
import Experience from './Experience';
import Contact from './Contact';
import MaskBanner from './fx/MaskBanner';
import useScrollReveal from '../hooks/useScrollReveal';
import useParallax from '../hooks/useParallax';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/romeoscript' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ezeugwuromanus/' },
  { label: 'X', href: 'https://www.x.com/romeoscript1/' },
  { label: 'Instagram', href: 'https://www.instagram.com/romeoscript1/' },
];

const HomePage = () => {
  useScrollReveal();
  useParallax();

  return (
    <>
      <main className="main-content">
        <Hero />
        <About />
        <Projects />
        <OpenSource />
        <Tech />
        <Experience />
        <MaskBanner word="BUILD" />
        <Contact />
      </main>

      <footer className="footer-fixed bg-black text-white py-20 md:py-0 px-6 sm:px-12">
        <div className="max-w-7xl w-full mx-auto flex flex-col items-center text-center">
          <h2 className="font-display font-bold text-[17vw] leading-[0.8] tracking-tighter text-neutral-800 select-none">
            ROMEO
          </h2>

          <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hoverable text-neutral-500 hover:text-white text-[11px] uppercase tracking-[0.3em] font-display transition-colors duration-300"
              >
                {social.label}
              </a>
            ))}
          </div>

          <p className="mt-10 text-neutral-700 text-[10px] uppercase tracking-[0.3em] font-display">
            © {new Date().getFullYear()} Romanus Chukwuemeka Ezeugwu
          </p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
