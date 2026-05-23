export const identity = {
  name: "Neith Lopes",
  role: "Finance & AI Operator",
  tagline: "Markets, systems and execution.",
  location: "Birmingham, UK · Singapore Citizen",
  bio: "I'm a finance-trained operator building at the intersection of markets, AI workflows and practical execution. This site is a home for my work, projects, writing and experiments.",
  about:
    "I'm a Singaporean final-year Finance & Investments student based in the UK, graduating in July 2026. My work sits between financial markets, AI-supported workflows and practical operating systems. I'm interested in how better tools, clearer research processes and tighter feedback loops can improve decisions in finance, trading, startups and operations.",
  email: "neithlopes@gmail.com",
  social: [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/neith-lopes-652656294",
    },
    { label: "Email", href: "mailto:neithlopes@gmail.com" },
  ],
};

export type WorkItem = {
  name: string;
  role: string;
  period: string;
  summary: string;
  featured: boolean;
  tags?: string[];
  logo?: string;
  logoFit?: "contain" | "cover";
  ticker?: string[];
  image?: string;
};

export const work: WorkItem[] = [
  {
    name: "Neural Edge",
    role: "Macro Research & Decision-Support",
    period: "2026 — Present",
    summary:
      "A decision-support platform for traders and market operators across global markets.",
    logo: "/work/neural-edge-logo.svg",
    logoFit: "contain" as const,
    ticker: ["FX", "equities", "commodities", "rates", "gold", "macro", "signals", "review"],
    featured: true,
  },
  {
    name: "Neural OS",
    role: "Operating System for Solo Founders",
    period: "2026 — Building",
    summary:
      "A proactive operating layer for solo founders — AI that runs the work, not waits.",
    logo: "/work/neural-os-logo.svg",
    logoFit: "contain" as const,
    ticker: ["CEO", "CMO", "CFO", "CTO", "Ops", "Growth", "Strategy", "Copy"],
    featured: true,
  },
  {
    name: "Independent Macro Research & Trading",
    role: "Self-directed",
    period: "2020 — Present",
    summary:
      "Self-directed cross-asset research, positioning and post-outcome review.",
    image: "/work/macro-journal.png",
    featured: true,
  },
  {
    name: "Hatch Dev Asia",
    role: "Tech Lead",
    period: "Jun 2020 — Jan 2021",
    summary:
      "Delivered client-facing digital projects for SME clients, coordinating junior developers across requirements, timelines, quality checks and SEO/SEM execution.",
    tags: [],
    featured: false,
  },
  {
    name: "Orama Asia",
    role: "Co-Founder & Tech Lead",
    period: "Aug 2019 — Jun 2020",
    summary:
      "Co-founded a blockchain-based logistics venture focused on supply-chain transparency across Southeast Asia. Worked across product scope, market research, stakeholder communication and cross-border information flows.",
    tags: [],
    featured: false,
  },
  {
    name: "Singapore National Service",
    role: "",
    period: "2021 — 2023",
    summary:
      "Completed full-time National Service before starting university in the UK.",
    tags: [],
    featured: false,
  },
];

export const education = [
  {
    school: "Birmingham City University",
    degree: "BSc (Hons) Finance & Investments",
    period: "2023 — 2026",
    summary:
      "CFA-accredited programme. Focus areas include equity and fixed income analysis, derivatives and risk management, portfolio management, alternative investments and entrepreneurial finance.",
  },
  {
    school: "Singapore Polytechnic",
    degree: "Diploma in Business Studies",
    period: "2019 — 2021",
    summary:
      "Studied business statistics, business intelligence, predictive analytics, business planning and entrepreneurship.",
  },
];

export const skills = [
  {
    title: "Markets & Finance",
    items: [
      "Cross-asset macro research",
      "Financial analysis",
      "Investment and portfolio thinking",
      "Risk, thesis invalidation and review",
      "Financial reporting discipline",
    ],
  },
  {
    title: "AI & Systems",
    items: [
      "AI-supported workflows",
      "Research systems",
      "Process automation",
      "Decision-support tooling",
      "Python-assisted analysis",
      "SQL fundamentals",
    ],
  },
  {
    title: "Execution",
    items: [
      "Product thinking",
      "Stakeholder communication",
      "Documentation",
      "Client-facing delivery",
      "Operating through ambiguity",
      "Building from zero to one",
    ],
  },
];

export const credentials = [
  "Bloomberg Market Concepts",
  "AmplifyME Financial Accelerator",
  "Private Equity & Venture Capital, Università Bocconi",
];

export type Tool = { name: string; logo?: string };
export type ToolkitGroup = { group: string; tools: Tool[] };

export const toolkit: ToolkitGroup[] = [
  {
    group: "AI & Agents",
    tools: [
      { name: "Claude", logo: "/stack/claude.svg" },
      { name: "Codex", logo: "/stack/codex.svg" },
      { name: "Factory AI", logo: "/stack/factory.svg" },
    ],
  },
  {
    group: "Knowledge & Comms",
    tools: [
      { name: "Obsidian", logo: "/stack/obsidian.svg" },
      { name: "Discord", logo: "/stack/discord.svg" },
    ],
  },
  {
    group: "Build",
    tools: [
      { name: "TypeScript", logo: "/stack/typescript.svg" },
      { name: "React", logo: "/stack/react.svg" },
      { name: "Next.js", logo: "/stack/nextjs.svg" },
      { name: "Tailwind CSS", logo: "/stack/tailwind.svg" },
    ],
  },
  {
    group: "Ship & Ops",
    tools: [
      { name: "GitHub", logo: "/stack/github.svg" },
      { name: "Linear", logo: "/stack/linear.svg" },
    ],
  },
];

export const workingOn = [
  { label: "Finding my next role", done: false },
  { label: "Scaling Neural Edge", done: false },
  { label: "Building Neural OS", done: false },
  { label: "Graduating July 2026", done: false },
  { label: "PE & VC, Bocconi", done: true },
  { label: "Launched this site", done: true },
];

export const resume = {
  summary:
    "Final-year BSc Finance & Investments student (graduating July 2026) who builds at the intersection of markets, AI engineering and products. I turn messy processes into structured systems — shipping full-stack and agentic software, running disciplined cross-asset research, and operating end-to-end as a solo founder. Strongest where business workflows, AI agents and practical software meet.",
  projects: [
    {
      role: "Founder & Product Builder",
      org: "Neural Edge",
      period: "2026 — Present",
      bullets: [
        "Built a full-stack multi-asset research & decision-support platform with React, TypeScript, Node, Express, PostgreSQL and Drizzle ORM.",
        "Designed AI-supported workflows: scoring, news context, macro/factor data pipelines, evidence trails and post-outcome analysis.",
        "Shipped with real engineering discipline — Vitest, Supertest and Playwright tests; GitHub, Linear, Doppler and Sentry tooling.",
      ],
    },
    {
      role: "Founder",
      org: "Neural OS",
      period: "2026 — Building",
      bullets: [
        "Building a proactive agentic operating layer for solo founders that fills the CEO, CMO, CFO and CTO gaps.",
        "Memory-first architecture on Obsidian with a custom orchestration layer over isolated coding/AI agents.",
      ],
    },
    {
      role: "Product Builder",
      org: "Simple Booking System",
      period: "2025 — Present",
      bullets: [
        "Booking-platform monorepo for service businesses: customer web app, business and customer mobile apps, and an Astro landing page.",
        "React, TypeScript, Expo/React Native, Convex and Better Auth, with role-separated public/customer/business boundaries.",
      ],
    },
    {
      role: "Product Builder",
      org: "Bingo Lingo",
      period: "2025 — Present",
      bullets: [
        "Language-learning app with CEFR progression, spaced repetition, grammar drills, graded stories and text-to-speech.",
        "Built across Slovak, Spanish and English paths with Next.js, React, TypeScript and Tailwind CSS.",
      ],
    },
  ],
  experience: [
    {
      role: "Independent Macro Research & Trading",
      org: "Remote",
      period: "2020 — Present",
      bullets: [
        "Self-directed cross-asset research across economic releases, central-bank policy, valuation, positioning and technicals.",
        "Disciplined process: logging assumptions, reviewing outcomes and reconciling views against new information.",
      ],
    },
    {
      role: "Tech Lead",
      org: "Hatch Dev Asia · Singapore",
      period: "Jun 2020 — Jan 2021",
      bullets: [
        "Delivered client-facing digital projects and coordinated junior developers across requirements, timelines and QA.",
        "Translated non-technical client requests into clear implementation steps, review points and handover notes.",
      ],
    },
    {
      role: "Co-Founder & Tech Lead",
      org: "Orama Asia · Singapore",
      period: "Aug 2019 — Jun 2020",
      bullets: [
        "Co-founded a blockchain-based logistics venture; worked technically with Hyperledger Fabric for supply-chain transparency.",
        "Mapped logistics workflows and adoption barriers into clearer system requirements and product priorities.",
      ],
    },
    {
      role: "Singapore National Service",
      org: "Singapore",
      period: "2021 — 2023",
      bullets: ["Completed full-time National Service before starting university in the UK."],
    },
  ],
  skillGroups: [
    {
      title: "Markets & Finance",
      body: "Cross-asset macro research, financial analysis, valuation and positioning, risk and thesis invalidation, decision quality under uncertainty.",
    },
    {
      title: "AI & Agents",
      body: "Agentic workflows (Hermes, Obsidian-backed memory, Discord), Claude, Codex and Factory AI, agent supervision, output verification, orchestration and human-in-the-loop review.",
    },
    {
      title: "Build",
      body: "React, TypeScript, Next.js, Vite, Tailwind, TanStack, Node.js, Express, PostgreSQL, Drizzle, Convex, Better Auth, Expo/React Native, Astro.",
    },
    {
      title: "Testing & delivery",
      body: "Vitest, Supertest, Playwright, Maestro, GitHub, Linear, Sentry, Doppler, Biome — plus process mapping, documentation and operating through ambiguity.",
    },
  ],
};
