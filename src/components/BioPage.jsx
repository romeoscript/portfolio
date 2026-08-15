import { Link } from 'react-router-dom';
import { main } from '../assets';
import useScrollReveal from '../hooks/useScrollReveal';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/romeoscript' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ezeugwuromanus/' },
  { label: 'X', href: 'https://www.x.com/romeoscript1/' },
  { label: 'Instagram', href: 'https://www.instagram.com/romeoscript1/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@romeoscript5' },
  { label: 'Email', href: 'mailto:romeobourne211@gmail.com' },
];

const EXPERTISE = [
  'Frontend Engineering',
  'React',
  'TypeScript',
  'JavaScript',
  'Web Technologies',
  'Interface Design',
  'System Architecture',
  'Open Source',
  'Mentoring',
  'Product Development',
];

const FACTS = [
  { label: 'Also known as', value: 'Romeo / Romeoscript' },
  { label: 'Role', value: 'CEO, Qubic Digital Services | LinkedTrust' },
  { label: 'Based in', value: 'Nigeria — expanding to the UK' },
  { label: 'Specialization', value: 'Frontend Engineering' },
];

const ACHIEVEMENTS = [
  'Lead Frontend Engineer at Nanocodes — built TechVerve LMS',
  'HNG Internship 9 finalist — 300 of 18,000 participants',
  'GAIN Hackathon finalist with Team GETO AI',
  'Featured on the FLOSS Weekly podcast (TWiT.tv)',
  'Speaker at Google Developer Groups',
  'Mentor at Solana Student Africa Hackathon',
];

const CHAPTERS = [
  {
    title: 'Early journey',
    body: `My route into technology started with borrowed resources and stubbornness. No laptop, no smartphone — I borrowed my cousin's phone to research and study code. I taught myself HTML, CSS and JavaScript on SoloLearn, working until the battery died, then waiting for it to charge to keep going. That shaped how I still work: find the blocker, find the solution, execute.`,
  },
  {
    title: 'Professional impact',
    body: `As Lead Frontend Engineer at Nanocodes I shaped both the product and the people around it. I led development of the company's flagship learning management system, TechVerve, serving hundreds of students, and built their marketplace and blog — the technical foundation still running their business today. Beyond engineering, I worked with marketing to shape acquisition funnels: analytics, SEO, and the experiences that turned visitors into active users.`,
  },
  {
    title: 'Mentorship & community',
    body: `What defined my time at Nanocodes wasn't only the code — it was the developers I mentored. In 2022 I organised trips to GDG DevFest Enugu so students could meet real practitioners and see how the industry actually works. That work continues outside company walls, through open-source infrastructure and a voice in the wider technology community.`,
  },
  {
    title: "Recognition & what's next",
    body: `As CEO of Qubic Digital Services I'm building digital infrastructure for businesses across Africa, helping SMEs establish a real digital presence, with plans to expand into the UK market. The focus is privacy-first, user-centric platforms and scalable frontend systems — plus workshops that close skill gaps, collaborations that help underrepresented young people build open-source portfolios, and university partnerships exploring privacy-preserving and decentralised architectures.`,
  },
];

const STATS = [
  { target: 7, suffix: '+', label: 'Years' },
  { target: 20, suffix: '+', label: 'Projects' },
  { target: 8, suffix: '+', label: 'Clients' },
];

const INTRO =
  'Senior Software Engineer specialising in frontend, and CEO of Qubic Digital Services. I started out borrowing a phone to learn HTML, CSS and JavaScript — turning constraints into creativity, and eventually into production systems that serve thousands of people.';

const BioPage = () => {
  useScrollReveal();

  return (
    <main className="relative min-h-screen pt-32 sm:pt-40 pb-28 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-[10px] uppercase tracking-[0.35em] text-smoke font-display mb-5">
          Bio
        </p>
        <h1 className="font-display font-bold text-bone text-[16vw] sm:text-[7vw] leading-[0.88] tracking-tighter">
          The long
          <br />
          version
        </h1>

        <div className="flex flex-col md:flex-row gap-14 md:gap-20 items-start mt-16">
          {/* Portrait */}
          <div className="md:w-[42%] w-full md:sticky md:top-[16vh]">
            <div className="reveal-item fade-scale group relative aspect-[4/5] rounded-lg overflow-hidden hoverable">
              <img
                src={main}
                alt="Romanus Chukwuemeka Ezeugwu"
                className="absolute inset-0 w-full h-full object-cover object-top img-zoom-bw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 z-10">
                <h2 className="font-display font-bold text-[20px] text-bone tracking-tight">
                  Romanus Chukwuemeka Ezeugwu
                </h2>
                <p className="text-[11px] uppercase tracking-[0.25em] text-ash font-display mt-1">
                  CEO & Senior Software Engineer
                </p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/[0.08] pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display font-bold text-bone text-[30px] sm:text-[38px] leading-none tracking-tighter">
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

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/[0.08] pt-8">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="hoverable text-smoke hover:text-bone text-[10px] uppercase tracking-[0.3em] font-display transition-colors duration-300"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="md:w-[58%] w-full flex flex-col gap-20 md:gap-24">
            <p className="word-reveal text-[19px] sm:text-[26px] font-light leading-[1.45] text-ash tracking-tight">
              {INTRO.split(' ').map((word, i) => (
                <span key={`${word}-${i}`} style={{ transitionDelay: `${i * 0.02}s` }}>
                  {word}&nbsp;
                </span>
              ))}
            </p>

            {/* Expertise */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-smoke font-display mb-7">
                Areas of expertise
              </p>
              <div className="flex flex-wrap gap-2.5">
                {EXPERTISE.map((skill, i) => (
                  <span
                    key={skill}
                    className="reveal-item fade-up px-4 py-1.5 rounded-full border border-white/15 text-ash text-[11px] font-display tracking-wide"
                    style={{ transitionDelay: `${i * 0.03}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick facts */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-smoke font-display mb-7">
                Quick facts
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.08] border border-white/[0.08] rounded-lg overflow-hidden">
                {FACTS.map((fact, i) => (
                  <div
                    key={fact.label}
                    className="reveal-item fade-up bg-ink hover:bg-ink-3 transition-colors duration-500 p-7"
                    style={{ transitionDelay: `${i * 0.06}s` }}
                  >
                    <p className="text-smoke text-[10px] uppercase tracking-[0.25em] font-display mb-2">
                      {fact.label}
                    </p>
                    <p className="text-bone text-[15px] font-display font-medium tracking-tight">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-smoke font-display mb-2">
                Key achievements
              </p>
              <div>
                {ACHIEVEMENTS.map((item, i) => (
                  <div
                    key={item}
                    className="reveal-item fade-up flex items-baseline gap-6 py-5 border-b border-white/[0.08]"
                    style={{ transitionDelay: `${i * 0.05}s` }}
                  >
                    <span className="text-smoke text-[11px] font-display shrink-0">
                      0{i + 1}
                    </span>
                    <p className="text-ash text-[14px] sm:text-[15px] font-light leading-[1.7]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Narrative */}
            <div className="flex flex-col gap-16">
              {CHAPTERS.map((chapter, i) => (
                <div key={chapter.title} className="reveal-item fade-up">
                  <div className="flex items-baseline gap-5 mb-5">
                    <span className="text-smoke text-[11px] font-display shrink-0">
                      0{i + 1}
                    </span>
                    <h3 className="font-display font-bold text-bone text-[24px] sm:text-[32px] tracking-tighter">
                      {chapter.title}
                    </h3>
                  </div>
                  <p className="text-ash text-[15px] sm:text-[16px] leading-[1.85] font-light">
                    {chapter.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/Romanus_Ezeugwu_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hoverable inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-black font-display font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-ash transition-colors"
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
              </a>
              <a
                href="/#contact"
                className="hoverable px-7 py-3.5 rounded-full border border-white/20 text-bone text-[11px] uppercase tracking-[0.2em] font-display hover:bg-white hover:text-black transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>

        <Link
          to="/"
          className="hoverable inline-flex items-center gap-3 mt-24 text-[10px] uppercase tracking-[0.3em] text-smoke hover:text-bone transition-colors font-display"
        >
          <span className="w-10 h-px bg-white/25" />
          Back to home
        </Link>
      </div>
    </main>
  );
};

export default BioPage;
