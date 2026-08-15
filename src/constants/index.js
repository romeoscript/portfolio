import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  serendptai,
  tru,
  noirotc,
  getclip,
  otaku,
  swiftagents,
  interlinklabs,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    path: "/",
  },
  {
    id: "about",
    title: "About",
    path: "/bio",
  },
  {
    id: "projects",
    title: "Projects",
    path: "/#projects",
  },
  {
    id: "contact",
    title: "Contact Us",
    path: "/#contact",
  },
];

// `id` maps to an inline SVG in About.jsx — see SERVICE_ICONS there.
const services = [
  {
    id: "ai",
    title: "AI Engineer",
  },
  {
    id: "automation",
    title: "Automation",
  },
  {
    id: "frontend",
    title: "Frontend Developer",
  },
  {
    id: "backend",
    title: "Backend Developer",
  },
  {
    id: "opensource",
    title: "Open Source",
  },
  {
    id: "prototyping",
    title: "Software Prototyping",
  },
];

// All open-source figures captured 2026-08-14 from the GitHub API.
const openSourceStats = {
  mergedPrs: 302,
  externalRepos: 62,
};

// Merged pull requests into major upstream projects.
const openSourceContributions = [
  {
    repo: "remotion-dev/remotion",
    description: "Make videos programmatically with React.",
    stars: 56300,
    merged: 1,
    highlight: "Preserved web renderer options on retry in the studio.",
    url: "https://github.com/remotion-dev/remotion/pulls?q=is%3Apr+author%3Aromeoscript",
  },
  {
    repo: "Kilo-Org/kilocode",
    description: "All-in-one agentic engineering platform and open-source coding agent.",
    stars: 26900,
    merged: 2,
    highlight:
      "Bedrock connection retries, plus context-window overrides for MiniMax and Kimi models.",
    url: "https://github.com/Kilo-Org/kilocode/pulls?q=is%3Apr+author%3Aromeoscript",
  },
  {
    repo: "sigp/lighthouse",
    description: "Ethereum consensus client, written in Rust.",
    stars: 3470,
    merged: 2,
    highlight: "Implemented the proposer lookahead endpoint and inactivity-score EF tests.",
    url: "https://github.com/sigp/lighthouse/pulls?q=is%3Apr+author%3Aromeoscript",
  },
];

// Talks, workshops and podcast appearances — newest first.
const speaking = [
  {
    event: "TechBridge UK — Live Class & Q&A",
    topic:
      "Breaking into tech: portfolios, SQL, stakeholder communication, and what hiring managers actually look for.",
    role: "Instructor",
    date: "Jun 2026",
    year: "2026",
    location: "Virtual · Cohort 2.0",
    url: "https://techbridgeacademy.uk",
  },
  {
    event: "TAKEOFF — OpenSourceNest",
    topic: "Beyond Free: Unlocking Paid Opportunities in Open Source.",
    role: "Speaker",
    date: "Apr 2026",
    year: "2026",
    location: "The Block Hive, Nsukka · Backed by GitHub",
    url: "https://www.linkedin.com/company/opensourcenest/",
  },
  {
    event: "GDG on Campus UNN",
    topic: "The Bridge Between Learning and Earning: What You Should Be Doing Now.",
    role: "Speaker",
    date: "Jan 2026",
    year: "2026",
    location: "University of Nigeria, Nsukka",
    url: "https://x.com/GDG_UNN/status/2012605548542267709",
  },
  {
    event: "Solana Students Africa",
    topic: "Metadata + LLM Integration — instructor on the Build in Public track.",
    role: "Instructor",
    date: "Sep 2025",
    year: "2025",
    location: "Virtual · Solana Students Africa",
    url: "https://solanastudentsafrica.com",
  },
  {
    event: "GDG on Campus UNN",
    topic: "Landing Your First Internship: Students' Markup.",
    role: "Speaker",
    date: "Feb 2025",
    year: "2025",
    location: "Virtual",
    url: "https://gdg.community.dev/gdg-on-campus-university-of-nigeria-nsukka-nigeria/",
  },
  {
    event: "FLOSS Weekly 739 — TWiT.tv",
    topic:
      "Big AI questions nobody else is asking, with hosts Doc Searls and Katherine Druckman.",
    role: "Podcast Guest",
    date: "Jul 2023",
    year: "2023",
    location: "Podcast · with Golda Velez",
    url: "https://twit.tv/shows/floss-weekly/episodes/739",
  },
];

// The Credence Awards, Innovation & Product Impact category.
const award = {
  title: "The Credence Awards",
  category: "Innovation & Product Impact",
  date: "20 November 2025",
  body: "Nigeria's premier individual-focused digital technology award. Nominated by peers, then assessed by an independent judging panel on evidence quality, magnitude of impact, innovation, scalability and leadership.",
  certificate: "/credence-certificate.pdf",
  url: "https://www.thecredenceawards.com",
};

// Projects authored and maintained.
const openSourceProjects = [
  {
    repo: "agent-twitter-client",
    description: "A Twitter client for agents — no API key necessary.",
    language: "TypeScript",
    stars: 81,
    forks: 14,
    url: "https://github.com/romeoscript/agent-twitter-client",
  },
  {
    repo: "MCP_CLI",
    description:
      "Scaffolds a working MCP server in seconds, with tools, resources and dev commands built in. Think CRA, but for MCP servers.",
    language: "TypeScript",
    stars: 46,
    forks: 1,
    url: "https://github.com/romeoscript/MCP_CLI",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Rails",
    icon: rubyrails,
  },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

// Source of truth: Romanus_Ezeugwu_CV.pdf
const experiences = [
  {
    title: "Senior Software Engineer, Core Platform",
    company_name: "SerenDPT AI",
    short: "SD",
    location: "San Francisco, CA",
    date: "Jul 2023 - Present",
  },
  {
    title: "Full Stack Engineer",
    company_name: "LinkedTrust",
    short: "LT",
    location: "New York, NY",
    date: "May 2021 - Jun 2023",
  },
  {
    title: "Software Engineer",
    company_name: "Sprout Capital",
    short: "SC",
    location: "Washington, DC",
    date: "Mar 2020 - Apr 2021",
  },
  {
    title: "Full Stack Developer",
    company_name: "TRU",
    short: "TRU",
    location: "San Francisco, CA",
    date: "Jun 2019 - Feb 2020",
  },
  {
    title: "Software Engineer Intern",
    company_name: "NanoCodes",
    short: "NC",
    location: "",
    date: "Jan 2019 - May 2019",
  },
];

const projects = [
  {
    id: "project-1",
    name: "GetClip",
    description: "A fast and simple way to clip and share content from the web.",
    tags: [
      {
        name: "clip",
        color: "blue-text-gradient",
      },
      {
        name: "utility",
        color: "green-text-gradient",
      },
      {
        name: "web app",
        color: "pink-text-gradient",
      },
    ],
    image: getclip,
    repo: "https://github.com/",
    demo: "https://www.getclip.app/",
  },
  {
    id: "project-2",
    name: "Otaku",
    description: "A DeFi trading agent.",
    tags: [
      {
        name: "defi",
        color: "blue-text-gradient",
      },
      {
        name: "trading",
        color: "green-text-gradient",
      },
      {
        name: "agent",
        color: "pink-text-gradient",
      },
    ],
    image: otaku,
    repo: "https://github.com/",
    demo: "https://otaku.so/",
  },
  {
    id: "project-3",
    name: "Serendptai",
    description: "An AI-powered platform for serendipitous knowledge discovery.",
    tags: [
      {
        name: "ai",
        color: "blue-text-gradient",
      },
      {
        name: "platform",
        color: "green-text-gradient",
      },
      {
        name: "web",
        color: "pink-text-gradient",
      },
    ],
    image: serendptai,
    repo: "https://github.com/",
    demo: "https://serendptai.com/",
  },
  {
    id: "project-4",
    name: "Tru Social",
    description: "A dynamic social networking platform for engaging communities.",
    tags: [
      {
        name: "social",
        color: "blue-text-gradient",
      },
      {
        name: "network",
        color: "green-text-gradient",
      },
      {
        name: "web3",
        color: "pink-text-gradient",
      },
    ],
    image: tru,
    repo: "https://github.com/",
    demo: "https://www.tru.net/",
  },
  {
    id: "project-5",
    name: "SwiftAgents",
    description:
      "AI-powered customer engagement platform that automates support conversations across every channel.",
    tags: [
      {
        name: "ai",
        color: "blue-text-gradient",
      },
      {
        name: "agents",
        color: "green-text-gradient",
      },
      {
        name: "saas",
        color: "pink-text-gradient",
      },
    ],
    image: swiftagents,
    repo: "https://github.com/",
    demo: "https://swiftagents.org/",
  },
  {
    id: "project-6",
    name: "Interlink Labs",
    description:
      "Digital asset mining platform building a network of verified humans.",
    tags: [
      {
        name: "web3",
        color: "blue-text-gradient",
      },
      {
        name: "identity",
        color: "green-text-gradient",
      },
      {
        name: "mobile",
        color: "pink-text-gradient",
      },
    ],
    image: interlinklabs,
    repo: "https://github.com/",
    demo: "https://interlinklabs.ai/",
  },
  {
    id: "project-7",
    name: "Noir OTC",
    description: "A sleek and secure over-the-counter trading platform.",
    tags: [
      {
        name: "trading",
        color: "blue-text-gradient",
      },
      {
        name: "finance",
        color: "green-text-gradient",
      },
      {
        name: "crypto",
        color: "pink-text-gradient",
      },
    ],
    image: noirotc,
    repo: "https://github.com/",
    demo: "https://noirotc.com/",
  },
  {
    id: "project-8",
    name: "Musica",
    description: "A music player built on the Deezer API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Deezer-Api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: komikult,
    repo: "https://github.com/romeoscript/musica",
    demo: "https://mussicar.netlify.app",
  },
];

export {
  services,
  technologies,
  experiences,
  projects,
  openSourceStats,
  openSourceContributions,
  openSourceProjects,
  speaking,
  award,
};
