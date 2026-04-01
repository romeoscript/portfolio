import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import romeoImg from '../assets/personal/main.jpg';
import { FaGithub, FaEnvelope, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socials = [
  { href: 'https://github.com/romeoscript', icon: <FaGithub />, label: 'GitHub' },
  { href: 'mailto:romeobourne211@gmail.com', icon: <FaEnvelope />, label: 'Email' },
  { href: 'https://www.linkedin.com/in/ezeugwuromanus/', icon: <FaLinkedin />, label: 'LinkedIn' },
  { href: 'https://www.instagram.com/romeoscript1/', icon: <FaInstagram />, label: 'Instagram' },
  { href: 'https://www.x.com/romeoscript1/', icon: <FaXTwitter />, label: 'X' },
  { href: 'https://www.tiktok.com/@romeoscript5', icon: <FaTiktok />, label: 'TikTok' },
];

const SectionHeading = ({ children }) => (
  <h3 className="font-instrument italic text-text-primary text-[24px] sm:text-[32px] tracking-tight mb-5">
    {children}<span className="text-lime">.</span>
  </h3>
);

const BioPage = () => {
  return (
    <div className="mt-[6rem] sm:mt-[6rem]">
      {/* ── HEADER TWO-COLUMN ── */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
        {/* Photo */}
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] aspect-square max-w-[500px]">
            <img
              src={romeoImg}
              alt="Romanus Chukwuemeka Ezeugwu"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/500?text=Romeo';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
          </div>
        </div>

        {/* Info */}
        <div className="lg:col-span-7 space-y-5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-instrument italic text-text-primary text-[32px] xs:text-[40px] sm:text-[48px] md:text-[56px] leading-[1.05] tracking-tight"
          >
            Romanus Chukwuemeka Ezeugwu
          </motion.h2>

          <p className="text-lime text-[15px] sm:text-[17px] font-syne font-semibold tracking-wide">
            CEO & Senior Software Engineer (Frontend)
          </p>

          <div className="flex gap-3 pt-1">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={`${s.label} profile`}
                className="text-text-muted hover:text-lime transition-colors duration-300 text-lg"
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div className="h-[1px] bg-white/[0.04] my-2" />

          <p className="text-text-muted text-[15px] leading-[1.8] font-syne font-light">
            Romanus Chukwuemeka Ezeugwu, also known as Romeo or Romeoscript, is a Senior Software Engineer
            specializing in frontend development and CEO of Qubic Digital Services. Starting his journey by
            borrowing a cousin's phone to learn HTML, CSS, and JavaScript, he transformed constraints into
            creativity, building production-ready systems that serve thousands of users.
          </p>
        </div>
      </div>

      {/* ── FULL WIDTH CONTENT ── */}
      <div className="max-w-4xl space-y-12">
        {/* Expertise */}
        <div>
          <SectionHeading>Areas of Expertise</SectionHeading>
          <div className="flex flex-wrap gap-2">
            {['Frontend Development', 'React', 'TypeScript', 'JavaScript',
              'Web Technologies', 'User Interface Design', 'System Architecture',
              'Open Source', 'Mentoring', 'Product Development'].map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-lime/[0.06] border border-lime/10
                  text-lime/80 text-[13px] font-syne font-medium tracking-wide"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Facts */}
        <div>
          <SectionHeading>Quick Facts</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Also Known As', value: 'Romeo / Romeoscript' },
              { label: 'Role', value: 'CEO, Qubic Digital Services | LinkedTrust' },
              { label: 'Location', value: 'Nigeria / Expanding to UK' },
              { label: 'Specialization', value: 'Frontend Engineering' },
            ].map((fact, i) => (
              <div key={i} className="p-4 rounded-xl bg-surface border border-white/[0.04]">
                <p className="text-text-dim text-[11px] uppercase tracking-[3px] font-syne mb-1">{fact.label}</p>
                <p className="text-text-primary text-[15px] font-syne">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <SectionHeading>Key Achievements</SectionHeading>
          <div className="space-y-3">
            {[
              'Lead Frontend Engineer at Nanocodes, built TechVerve LMS',
              'HNG Internship 9 Finalist (300 out of 18,000 participants)',
              'GAIN Hackathon Finalist (Team GETO AI)',
              'Featured on FLOSS Weekly podcast (TWiT.tv)',
              'Speaker at Google Developer Groups',
              'Mentor at Solana Student Africa Hackathon',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 py-3 border-b border-white/[0.03]">
                <span className="text-lime text-[12px] font-syne font-bold mt-1">0{i + 1}</span>
                <p className="text-text-muted text-[15px] font-syne font-light">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative sections */}
        {[
          {
            title: 'Early Journey',
            text: `Romanus's journey into technology began with borrowed resources and determination. Without a laptop or smartphone, he constantly borrowed his cousin's phone to research and study coding. He taught himself HTML, CSS, and JavaScript using SoloLearn, studying until the battery died, then waiting for it to charge. This experience shaped his foundational approach: identify the blocker, find a solution, then execute.`,
          },
          {
            title: 'Professional Impact',
            text: `At Nanocodes, where he served as Lead Frontend Engineer, Romanus shaped both product and people. He led development of the company's flagship Learning Management System (TechVerve), serving hundreds of students, and built their online marketplace and blog, establishing the technical foundation that still powers their business today. Beyond engineering, he worked with marketing teams to shape acquisition funnels, setting up analytics, optimizing SEO, and defining experiences that turned visitors into active users.`,
          },
          {
            title: 'Mentorship & Community',
            text: `What defined Romanus's time at Nanocodes wasn't just the code he wrote; it was the developers he mentored. In 2022, he organized trips to GDG DevFest Enugu so students could meet real practitioners and see how the industry works. His impact extends beyond company walls—he contributes to open-source infrastructure and has established himself as a voice in the digital technology community.`,
          },
          {
            title: 'Recognition & Future Vision',
            text: `As CEO of Qubic Digital Services, Romanus is building digital infrastructure for businesses across Africa, helping SMEs establish their digital presence. He plans to expand Qubic's footprint into the UK market, focusing on privacy-first, user-centric platforms and scalable frontend systems. His vision includes bridging skill gaps by hosting workshops, collaborating with organizations that help underrepresented youths build open-source portfolios, and partnering with universities to explore privacy-preserving systems and decentralized architectures.`,
          },
        ].map((section, i) => (
          <div key={i}>
            <SectionHeading>{section.title}</SectionHeading>
            <p className="text-text-muted text-[15px] leading-[1.8] font-syne font-light">
              {section.text}
            </p>
          </div>
        ))}

        {/* Back link */}
        <div className="pt-8 border-t border-white/[0.04]">
          <a
            href="/"
            className="group inline-flex items-center gap-3 text-lime hover:text-text-primary
              text-[12px] uppercase tracking-[3px] font-syne font-medium transition-colors duration-300"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5m0 0l7 7m-7-7l7-7" />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(BioPage, 'bio');
