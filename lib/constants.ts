export const PERSONAL = {
  name: "Patrick Offei Danso",
  title: "SOFTWARE ENGINEER",
  subtitle:
    "Specialized in full-stack development, AI integrations, and interactive game experiences",
  email: "dansooffeipatrick@gmail.com",
  phone: "+233 24 955 5935",
  location: "Accra, Ghana",
  coordinates: { lat: "5.6037° N", lng: "0.1870° W" },
  github: "https://github.com/kennydop",
  linkedin: "https://linkedin.com/in/kennydop",
  twitter: "https://x.com/kennydop_",
  resumeUrl: "/Patrick_Offei_Danso_Resume.pdf",
  status: "BUILDING",
  load: "80%",
  uptime: "99.9%",
  established: "2021",
};

export const PLAYER_PROFILE = {
  id: "KD-2024-X",
  summary:
    "Software Engineer with 5 years of experience building scalable web applications, mobile apps, and interactive game experiences. Passionate about creating products that solve real problems and delight users.",
  education: {
    degree: "BSc. Computer Science",
    institution: "University of Cape Coast",
    // gpa: "3.6/4.0",
  },
  languages: ["English (Fluent)"],
  focus: ["Full-Stack Development", "AI Integration", "Game Development"],
};

export interface TechUnit {
  id: string;
  label: string;
  items: string[];
}

export const TECH_STACK: TechUnit[] = [
  {
    id: "U01",
    label: "FULL_STACK",
    items: [
      "TypeScript",
      "JavaScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Flask",
      "GraphQL",
      "REST",
    ],
  },
  {
    id: "U02",
    label: "MOBILE_GAME",
    items: ["Flutter", "React Native", "Unity", "Dart", "C#", "Java"],
  },
  {
    id: "U03",
    label: "CLOUD_INFRA",
    items: [
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "Firebase",
      "Supabase",
      "GitHub Actions",
    ],
  },
  {
    id: "U04",
    label: "DATA_STORE",
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  type: "work" | "education";
}

export const EXPERIENCE: Experience[] = [
  {
    company: "TOPXPERIENCE",
    role: "Software Engineer",
    period: "Nov 2024 – Present",
    description:
      "Building scalable web applications and AI-powered tools for enhanced user experiences.",
    type: "work",
  },
  {
    company: "MY_CREATIVITY_BOX",
    role: "Software Engineer",
    period: "Jan 2023 – Feb 2025",
    description:
      "Developed MySapienta, an AI school workspace powering 10+ schools and 5,000+ users.",
    type: "work",
  },
  {
    company: "WI-FLIX",
    role: "Full-stack Developer",
    period: "Jan 2022 – Jan 2023",
    description:
      "Built streaming platform features and content delivery infrastructure at scale.",
    type: "work",
  },
  {
    company: "BISMUTH_TECHNOLOGIES",
    role: "Software Developer",
    period: "Apr 2021 – Dec 2021",
    description:
      "Contributed to mobile and web solutions using Flutter, React, and cloud services.",
    type: "work",
  },
  {
    company: "UNIVERSITY_OF_CAPE_COAST",
    role: "BSc. Computer Science",
    period: "Jan 2021 – Aug 2024",
    description: "Built IoT-based smart locker system as capstone project.",
    type: "education",
  },
];

export interface Project {
  name: string;
  description: string;
  github?: string;
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    name: "MySapienta",
    description:
      "AI-powered school workspace platform powering 10+ schools and 5,000+ users with intelligent learning tools.",
    tags: ["Next.js", "AI", "SaaS"],
  },
  {
    name: "Campus Online",
    description:
      "Social platform with 5,000+ daily active users built with Next.js and WebSockets for real-time interactions.",
    tags: ["Next.js", "WebSockets", "Social"],
  },
  {
    name: "Earl",
    description:
      "Flutter mobile application serving 5,200+ students with campus-focused features and services.",
    tags: ["Flutter", "Mobile", "Dart"],
  },
  {
    name: "Coro Dash",
    description:
      "Unity virus-themed game rated 4.8/5 with 100+ daily active users. Fast-paced arcade gameplay.",
    github: "https://github.com/kennydop/coro-dash",
    tags: ["Unity", "C#", "Game"],
  },
  {
    name: "gen-maze",
    description:
      "Unity 3D procedural maze generator using recursive backtracking and custom rendering.",
    github: "https://github.com/kennydop/gen-maze",
    tags: ["Unity", "C#", "Procedural"],
  },
  {
    name: "Self-Driving Car & Neural Network Visualizer",
    description:
      "Neural network simulation for autonomous vehicle navigation with real-time visualization.",
    github: "https://github.com/kennydop/self-driving-car",
    tags: ["JavaScript", "Neural Net", "Simulation"],
  },
  {
    name: "placeholder-avatars",
    description:
      "Unique personalized avatar generator creating distinct visual identities from any input string.",
    github: "https://github.com/kennydop/placeholder-avatars",
    tags: ["JavaScript", "Generator", "NPM"],
  },
  {
    name: "Mazer X",
    description:
      "Immersive maze game experience with procedural level generation and progressive difficulty.",
    github: "https://github.com/kennydop/mazer-x",
    tags: ["Game", "Unity", "C#"],
  },
  {
    name: "StockMaster",
    description:
      "Inventory management system showcasing core data structures with efficient stock tracking.",
    github: "https://github.com/kennydop/stockmaster",
    tags: ["Java", "Data Structures", "CLI"],
  },
  {
    name: "Loqie",
    description:
      "IoT-based smart locker and last-mile delivery system. Final year capstone project.",
    tags: ["IoT", "Hardware", "Full-Stack"],
  },
];

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "/blog" },
];
