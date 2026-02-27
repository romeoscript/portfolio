import {
  frontend,
  backend,
  ux,
  prototyping,
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
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  serendptai,
  tru,
  noirotc,
  gettruckdispatch,
  getclip,
  otaku,
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

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
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

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Cooperation.org",
    icon: 'http://cooperation.org/cooperation.png',
    iconBg: "#333333",
    date: "March 2023 - Current",
  },
  {
    title: "Frontend Engineer",
    company_name: "Tru Social",
    icon: 'https://assets-global.website-files.com/5eb856c479f8869f7347f9b3/5efcc6e0cd5d204f3e9a745e_Tru_Logo.svg',
    iconBg: "#333333",
    date: "April 2023 - Current",
  },
  {
    title: "Lead frontend Engineer",
    company_name: "Nanocodes Programming Limited",
    icon: kelhel,
    iconBg: "#333333",
    date: "April 2022 - july 2023",
  },
  {
    title: "Frontend  Developer",
    company_name: "YieldVest",
    icon: dcc,
    iconBg: "#333333",
    date: "oct 2022 - Dec 2022",
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
    id: "project-6",
    name: "Truck Dispatch",
    description: "A comprehensive dispatch solution for modern trucking and logistics.",
    tags: [
      {
        name: "logistics",
        color: "blue-text-gradient",
      },
      {
        name: "dispatch",
        color: "green-text-gradient",
      },
      {
        name: "management",
        color: "pink-text-gradient",
      },
    ],
    image: gettruckdispatch,
    repo: "https://github.com/",
    demo: "https://www.gettruckdispatch.com/",
  },
  {
    id: "project-7",
    name: "Musica",
    description: "A music player ",
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
  {
    id: "project-8",
    name: " Watch 0",
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "TMDB api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    repo: "https://github.com/romeoscript/watchO",
    demo: "https://watchoscript.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
