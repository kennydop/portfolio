export const PERSONAL = {
  name: "Patrick Offei Danso",
  title: "SOFTWARE ENGINEER",
  subtitle:
    "Code mage specializing in scalable architectures and AI constructs that obey production laws.",
  email: "dansooffeipatrick@gmail.com",
  phone: "+233 24 955 5935",
  location: "Accra, Ghana",
  coordinates: { lat: "5.5593° N", lng: "0.1974° W" },
  github: "https://github.com/kennydop",
  linkedin: "https://linkedin.com/in/kennydop",
  twitter: "https://x.com/kennydop_",
  instagram: "https://instagram.com/kennydop",
  medium: "https://medium.com/@kennydop",
  discord: "https://discord.com/users/kennydop",
  resumeUrl: "/Patrick_Offei_Danso_Resume.pdf",
  status: "BUILDING",
  load: "80%",
  uptime: "99.9%",
};

export const ABOUT = {
  id: "KD-153-14M90D",
  summary:
    "Software Engineer with 5 years of experience building scalable web applications, mobile apps, and interactive game experiences. Owns features end-to-end, writes maintainable code, and collaborates across design and product. Focused on performance, reliability, and clear technical design.",
  education: {
    degree: "BSc. Computer Science",
    institution: "University of Cape Coast",
  },
  languages: ["English", "Gua", "Twi"],
  focus: [
    "Full-Stack Development",
    "AI Integration",
    "Payment Integration",
    "Game Development",
    "IoT",
  ],
};

export interface TechUnit {
  id: string;
  label: string;
  items: string[];
}

export const TECH_STACK: TechUnit[] = [
  {
    id: "U01",
    label: "LANGUAGES",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Dart",
      "Java",
      "C#",
      "HTML/CSS",
    ],
  },
  {
    id: "U02",
    label: "FRONTEND",
    items: [
      "React.js",
      "Next.js",
      "Tailwind",
      "shadcn/ui",
      "Framer Motion",
      "Webpack",
      "Vite",
      "Redux",
      "Zustand",
      "TanStack Query",
      "Storybook",
      "Figma",
      "Responsive design",
      "SSR",
      "SSG",
      "ISR",
    ],
  },
  {
    id: "U03",
    label: "BACKEND",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "FastAPI",
      "Flask",
      "tRPC",
      "gRPC",
      "WebSockets",
      "Socket.io",
      "GraphQL",
      "REST",
      "Microservices",
      "Serverless",
      "Edge functions",
      "Message queues",
      "Event-driven",
      "TensorFlow",
      "OpenAI API",
      "LangChain",
      "API design",
      "Idempotency",
      "Rate limiting",
    ],
  },
  {
    id: "U04",
    label: "MOBILE, DESKTOP & GAME",
    items: [
      "Flutter",
      "React Native",
      "Expo",
      "Unity",
      "Godot",
      "JavaFX",
      "Procedural generation",
      "Game loops",
      "Physics engines",
      "Cross-platform",
    ],
  },
  {
    id: "U05",
    label: "DATABASES+",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "MySQL",
      "SQLite",
      "Elasticsearch",
      "Algolia",
      "Prisma",
      "Migrations",
      "Indexing",
      "Query optimization",
      "ACID",
      "CAP theorem",
      "Replication",
      "Sharding",
    ],
  },
  {
    id: "U06",
    label: "CLOUD & DEVOPS",
    items: [
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "Digital Ocean",
      "Vercel",
      "Netlify",
      "Cloudflare",
      "Cloudinary",
      "Firebase",
      "Supabase",
      "GitHub Actions",
      "Nginx",
      "Load balancing",
      "CDN",
      "SSL/TLS",
      "Secrets management",
    ],
  },
  {
    id: "U07",
    label: "TESTING",
    items: [
      "Jest",
      "Cypress",
      "Playwright",
      "React Testing Library",
      "Unit testing",
      "Integration testing",
      "E2E",
      "Snapshot testing",
      "Load testing",
      "Chaos engineering",
      "TDD",
      "BDD",
      "Test coverage",
    ],
  },
  // {
  //   id: "U08",
  //   label: "PRACTICES",
  //   items: [
  //     "AI integration",
  //     "Code review",
  //     "Unit testing",
  //     "CI/CD",
  //     "Maintainable code",
  //     "OOP & functional",
  //     "Debugging & profiling",
  //     "Performance optimization",
  //     "Technical design & RFCs",
  //     "Error handling & resilience",
  //     "Security-aware development",
  //     "Mentoring & pairing",
  //     "System design",
  //     "Incident response",
  //     "On-call",
  //     "Feature flags",
  //     "A/B testing",
  //     "Accessibility (a11y)",
  //     "i18n",
  //     "DDD",
  //     "CQRS",
  //     "Event sourcing",
  //     "Mob programming",
  //     "Tech lead",
  //     "Stakeholder communication",
  //     "Backlog grooming",
  //     "Sprint planning",
  //     "Documentation",
  //     "Runbooks",
  //   ],
  // },
];

/** Domain expertise and applied areas (from resume experience) */
export const DOMAINS: { id: string; label: string; items: string[] }[] = [
  {
    id: "D01",
    label: "DOMAINS",
    items: [
      "Payment systems (Stripe)",
      "AI/ML integration",
      "Streaming & CDN",
      "IoT & embedded",
      "Real-time systems",
      "Agile delivery",
      "Distributed systems",
      "API design & contracts",
      "Observability & debugging",
      "Refactoring at scale",
      "Fintech",
      "Healthtech",
      "Edtech",
      "E-commerce",
      "B2B SaaS",
      "Developer tools",
      "Platform engineering",
      "SRE",
      "MLOps",
      "Event-driven architecture",
      "High-throughput systems",
      "Low-latency systems",
      "Multi-tenant systems",
      "Zero-downtime deployments",
      "Disaster recovery",
      "Cost optimization",
    ],
  },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  // description: string;
  type: "work" | "education";
}

export const EXPERIENCE: Experience[] = [
  {
    company: "TopXperience",
    role: "Software Engineer",
    period: "Nov 2024 – Present",
    type: "work",
  },
  {
    company: "My Creativity Box",
    role: "Software Engineer",
    period: "Jan 2023 – Feb 2025",
    type: "work",
  },
  {
    company: "Ecentials",
    role: "Mobile Developer",
    period: "Jun 2022 – Feb 2024",
    type: "work",
  },
  {
    company: "Wi-flix",
    role: "Full-stack Developer",
    period: "Jan 2022 – Jan 2023",
    type: "work",
  },
  {
    company: "Bismuth Technologies",
    role: "Software Developer",
    period: "Apr 2021 – Dec 2021",
    type: "work",
  },
];

export interface Project {
  name: string;
  description: string;
  tags: string[];
  url?: string;
}

export const PROJECTS: Project[] = [
  {
    name: "MySapienta",
    description:
      "AI-powered school workspace platform powering 10+ schools and 5,000+ users with intelligent learning and administration tools.",
    tags: ["AI", "SaaS"],
    url: "https://mysapienta.com",
  },
  {
    name: "Loqie",
    description:
      "IoT-based smart locker and last-mile delivery system. Final year capstone project.",
    tags: ["IoT", "Hardware", "Full-Stack"],
    url: "https://www.youtube.com/watch?v=somY-xggXNs",
  },
  {
    name: "placeholder-avatars",
    description:
      "Unique personalized avatar generator creating distinct visual identities from any input string.",
    url: "https://github.com/kennydop/placeholder-avatars",
    tags: ["JavaScript", "Generator"],
  },
  {
    name: "Campus Online",
    description:
      "Social platform with 5,000+ daily active users built with Next.js and WebSockets for real-time interactions.",
    url: "https://campus-online.vercel.app",
    tags: ["Next.js", "WebSockets", "Social", "Real-time", "Chat"],
  },
  {
    name: "Earl",
    description:
      "Flutter mobile application serving 5,200+ students with campus-focused features and services.",
    tags: ["Flutter", "Mobile", "Dart", "Payment"],
    url: "https://earl-campus-companion.vercel.app",
  },
  {
    name: "Coro Dash",
    description:
      "Unity virus-themed game rated 4.8/5 with 100+ daily active users. Fast-paced arcade gameplay.",
    url: "https://youtu.be/m23z9OjXiIA?si=lyGlOmcFA_CJlrI1",
    tags: ["Unity", "C#", "Game"],
  },
  {
    name: "Mazer X",
    description:
      "Immersive maze game experience with procedural level generation and progressive difficulty.",
    url: "https://play.google.com/store/apps/details?id=com.trayl.mazerx",
    tags: ["Game", "Unity", "C#"],
  },
  {
    name: "StockMaster",
    description:
      "Desktop GUI inventory management system modeling database operations as core data structures. Demonstrates real-world behaviors by treating the underlying database as the structure itself.",
    url: "https://github.com/kennydop/stockmaster",
    tags: ["Java", "Data Structures", "CLI"],
  },
  {
    name: "gen-maze",
    description:
      "Unity 3D procedural maze generator using recursive backtracking and custom rendering.",
    url: "https://github.com/kennydop/gen-maze",
    tags: ["Unity", "C#", "Procedural"],
  },
];

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "/blog" },
];
