export interface Experience {
  id: number;
  company: string;
  website: string | null;
  location: string;
  start: Date;
  end: Date | null;
  employmentType: "Full-time" | "Part-time" | "Contract";
  locationType: "On-site" | "Remote" | "Hybrid";
  color: "cyan" | "purple" | "green" | "pink" | "orange" | "blue" | "yellow";
  logo?: string;
}

export interface SkillCategory {
  titleKey: string;
  skills: Array<string>;
}

export interface Project {
  name: string;
  category: string;
  stack: Array<string>;
  color: "cyan" | "purple" | "green" | "pink" | "orange" | "blue" | "yellow";
}

export const projects: Array<Project> = [
  {
    name: "Roobah",
    category: "FinTech",
    stack: ["React", "TypeScript", "MobX-State-Tree", "Apollo GraphQL", "SCSS", "D3.js"],
    color: "cyan",
  },
  {
    name: "Gorgi",
    category: "FinTech",
    stack: ["React", "TypeScript", "MobX", "SCSS", "ApexCharts"],
    color: "purple",
  },
  {
    name: "Requireganizer",
    category: "DevTools",
    stack: [
      "React",
      "TypeScript",
      "Ant Design",
      "MobX-State-Tree",
      "Google Drive",
      "TinyMCE",
      "Emotion",
      "Jest",
      "React Testing Library",
    ],
    color: "green",
  },
  {
    name: "Luggo",
    category: "Logistics",
    stack: ["React", "JavaScript", "TypeScript", "Redux", "MobX", "Material UI", "Storybook"],
    color: "pink",
  },
  {
    name: "Lexian",
    category: "LegalTech",
    stack: ["React", "TypeScript", "Emotion", "MobX", "Babel", "Webpack", "Jest", "React Testing Library"],
    color: "orange",
  },
  {
    name: "Avicenna Research",
    category: "Research",
    stack: [
      "React",
      "TypeScript",
      "SCSS",
      "MUI",
      "Redux",
      "TanStack Query",
      "Zustand",
      "Docusaurus",
      "Next.js",
      "Tailwind CSS",
      "Playwright",
      "ANTLR",
      "Sentry",
    ],
    color: "blue",
  },
  {
    name: "Convi",
    category: "AI · SaaS",
    stack: [
      "Django",
      "PostgreSQL",
      "Shopify",
      "React",
      "Preact",
      "TypeScript",
      "SCSS",
      "Tailwind CSS",
      "TanStack Query",
      "Polaris",
    ],
    color: "yellow",
  },
];

export const experiences: Array<Experience> = [
  {
    id: 1,
    company: "Partnerz",
    website: "https://partnerz.io",
    location: "Dubai, UAE",
    start: new Date("2025-07-01"),
    end: null,
    employmentType: "Full-time",
    locationType: "Remote",
    color: "cyan",
    logo: "/logos/partnerz.png",
  },
  {
    id: 2,
    company: "Avicenna Research",
    website: "https://avicennaresearch.com",
    location: "Toronto, Canada",
    start: new Date("2023-05-01"),
    end: new Date("2025-07-01"),
    employmentType: "Full-time",
    locationType: "Remote",
    color: "purple",
    logo: "/logos/avicenna-research.png",
  },
  {
    id: 3,
    company: "Dorfak Systems",
    website: null,
    location: "Tehran, Iran",
    start: new Date("2024-10-01"),
    end: new Date("2025-03-01"),
    employmentType: "Contract",
    locationType: "Remote",
    color: "green",
    logo: "/logos/dorfak-systems.png",
  },
  {
    id: 4,
    company: "Dorfak Systems",
    website: null,
    location: "Tehran, Iran",
    start: new Date("2022-10-01"),
    end: new Date("2023-04-01"),
    employmentType: "Full-time",
    locationType: "Remote",
    color: "orange",
    logo: "/logos/dorfak-systems.png",
  },
  {
    id: 5,
    company: "Zardalu",
    website: "https://www.zardalu.dev",
    location: "Tehran, Iran",
    start: new Date("2020-11-01"),
    end: new Date("2022-09-01"),
    employmentType: "Full-time",
    locationType: "Hybrid",
    color: "pink",
    logo: "/logos/zardalu.png",
  },
  {
    id: 6,
    company: "Meybod University",
    website: "https://meybod.ac.ir",
    location: "Yazd, Iran",
    start: new Date("2021-04-01"),
    end: new Date("2021-09-01"),
    employmentType: "Contract",
    locationType: "Remote",
    color: "blue",
    logo: "/logos/meybod-university.png",
  },
  {
    id: 7,
    company: "QuizLab",
    website: null,
    location: "Hamedan, Iran",
    start: new Date("2019-02-01"),
    end: new Date("2020-07-01"),
    employmentType: "Part-time",
    locationType: "On-site",
    color: "yellow",
  },
];

export const skillCategories: Array<SkillCategory> = [
  {
    titleKey: "cat_languages",
    skills: ["TypeScript", "JavaScript", "Python", "Rust"],
  },
  {
    titleKey: "cat_frontend",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "SCSS",
      "MUI",
      "Ant Design",
      "Zustand",
      "TanStack Query",
      "Vite",
      "Webpack",
    ],
  },
  {
    titleKey: "cat_backend",
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "Django",
      "PostgreSQL",
      "SQL",
      "MongoDB",
      "Redis",
      "GraphQL",
      "Swagger",
      "Nginx",
    ],
  },
  {
    titleKey: "cat_testing",
    skills: ["Jest", "Vitest", "Storybook", "React Testing Library", "Cypress", "Playwright"],
  },
  {
    titleKey: "cat_architecture",
    skills: ["Micro-frontends", "Monorepo", "SOLID", "Design Patterns", "Clean Architecture", "TDD", "DDD"],
  },
  {
    titleKey: "cat_tools",
    skills: ["Git", "Docker", "GitHub Actions", "GitLab CI", "Sentry", "Linux", "Shopify"],
  },
];

export const socialLinks = {
  github: "https://github.com/jafari-dev",
  linkedin: "https://www.linkedin.com/in/jafari-dev/",
  email: "a99jafari@gmail.com",
  telegram: "https://t.me/AhmadJafari",
  phone: "+98 930 848 5060",
};
