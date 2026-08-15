import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ORIGIN = 'https://romeoscript.tech';

/**
 * Every route serves the same index.html, so without this each page would
 * inherit the homepage's canonical and be dropped from the index as a duplicate.
 */
const PAGES = {
  '/': {
    title:
      'Romanus Chukwuemeka Ezeugwu (Romeoscript) | AI & Software Engineer, CEO of Qubic Digital Services',
    description:
      'Romanus Chukwuemeka Ezeugwu (Romeoscript) is a Nigerian full-stack AI engineer, Senior Software Engineer on Core Platform at SerenDPT AI, and CEO of Qubic Digital Services. Winner of The Credence Awards 2025 for Innovation & Product Impact.',
  },
  '/bio': {
    title: 'Biography of Romanus Chukwuemeka Ezeugwu (Romeoscript)',
    description:
      'The long version: how Romanus Chukwuemeka Ezeugwu (Romeoscript) built a career across frontend and AI engineering, from leading product teams to shipping LLM and real-time inference systems in production, mentoring developers and contributing to open source.',
  },
  '/speaking': {
    title: 'Speaking & Talks by Romanus Chukwuemeka Ezeugwu (Romeoscript)',
    description:
      'Keynotes, workshops and podcast appearances by Romanus Chukwuemeka Ezeugwu (Romeoscript) on open source, AI engineering and breaking into tech, including TAKEOFF by OpenSourceNest backed by GitHub, GDG on Campus UNN, Solana Students Africa and FLOSS Weekly on TWiT.tv.',
    image: `${ORIGIN}/images/romanus-ezeugwu-takeoff-opensourcenest-talk-16x9.jpg`,
  },
};

/** `/about` renders the same page as `/bio`; point both at one canonical URL. */
const CANONICAL_ALIASES = { '/about': '/bio' };

const setMeta = (selector, attr, value) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

const usePageMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = CANONICAL_ALIASES[pathname] ?? pathname;
    const page = PAGES[path] ?? PAGES['/'];
    const url = `${ORIGIN}${path === '/' ? '/' : path}`;

    const image = page.image ?? `${ORIGIN}/images/romanus-ezeugwu-og.jpg`;

    document.title = page.title;
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[property="og:image"]', 'content', image);
    setMeta('meta[property="og:image:secure_url"]', 'content', image);
    setMeta('meta[name="twitter:image"]', 'content', image);
    setMeta('meta[name="title"]', 'content', page.title);
    setMeta('meta[name="description"]', 'content', page.description);
    setMeta('meta[property="og:title"]', 'content', page.title);
    setMeta('meta[property="og:description"]', 'content', page.description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[name="twitter:title"]', 'content', page.title);
    setMeta('meta[name="twitter:description"]', 'content', page.description);
    setMeta('meta[name="twitter:url"]', 'content', url);
  }, [pathname]);
};

export default usePageMeta;
