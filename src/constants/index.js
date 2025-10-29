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
    id: "project-2",
    name: "astro Car",
    description:
      "A car rental website is an online platform that allows users to rent cars for personal or business use.",
    tags: [
      {
        name: "Astro",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://user-images.githubusercontent.com/105128267/218077675-f50ac9ae-8d2c-4196-aed8-f4490e142960.png",
    repo: "https://github.com/romeoscript/car_sale",
    demo: "https://astro-car.netlify.app",
  },
  {
    id: "project-3",
    name: "GPT-3 landing page",
    description: "This is a single-page GPT_3 website  built with React",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://www.arshakir.com/uploads/projects/freebie-gpt-3-landing-page.webp',
    repo: "https://github.com/romeoscript/gpt3-landing-page",
    demo: "gpt3-landing-page-gamma.vercel.app",
  },
  {
    id: "project-4",
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
