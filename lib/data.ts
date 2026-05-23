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
      "A research and decision-support platform for serious traders and market operators. Neural Edge organises financial inputs, market evidence, review trails and decision logic across FX, equity indices, commodities and monetary metals.",
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
      "The team a solo founder doesn't have. Neural OS fills the CEO, CMO, CFO and CTO gaps — acting proactively instead of waiting to be prompted. It learns the business in depth and runs the work between check-ins, built memory-first on Obsidian and a stack purpose-made for founders, not a chat wrapper.",
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
      "Self-directed research across economic releases, central bank policy, valuation context, positioning, technical conditions and post-outcome review. Focused on cross-asset themes, thesis invalidation and decision quality under uncertainty.",
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
      { name: "Codex" },
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
  { label: "Scaling Neural Edge", done: false },
  { label: "Cross-asset macro framework", done: false },
  { label: "Graduating July 2026", done: false },
  { label: "Bloomberg Market Concepts", done: true },
  { label: "PE & VC, Bocconi", done: true },
  { label: "Launched this site", done: true },
];

export const resume = {
  summary:
    "Final-year BSc Finance & Investments student graduating in July 2026, eager to start my career in international finance operations and financial analysis. I turn financial and operational information into clear checks, useful reporting and better-controlled decisions, bringing finance training, Excel, research, documentation and process-improvement habits.",
  experience: [
    {
      role: "Macro Research & Decision-Support Platform",
      org: "Neural Edge",
      period: "2026 — Present",
      bullets: [
        "Built a structured research and decision-support platform for organising financial inputs, market evidence, review trails and decision logic across FX, equity indices, commodities and monetary metals.",
        "Created workflows to capture source data, check assumptions, compare signals and turn scattered information into clearer reporting outputs.",
        "Used Excel-style controls, Python-assisted analysis and AI-supported review to improve consistency, reduce manual rework and make recurring checks easier to follow.",
        "Developed habits relevant to finance operations: careful data handling, documented reasoning, exception review, control awareness and clear escalation when information does not reconcile.",
      ],
    },
    {
      role: "Independent Macro Research & Trading",
      org: "Remote",
      period: "Jan 2020 — Present",
      bullets: [
        "Conduct self-directed financial research using economic releases, central bank policy, valuation context, positioning, technical conditions and post-outcome review.",
        "Track cross-asset themes across equities, FX, commodities and rates-sensitive markets, with attention to catalysts, downside scenarios and thesis invalidation.",
        "Maintain a disciplined process for logging assumptions, reviewing outcomes and reconciling views against new information.",
      ],
    },
    {
      role: "Tech Lead",
      org: "Hatch Dev Asia · Singapore",
      period: "Jun 2020 — Jan 2021",
      bullets: [
        "Delivered client-facing digital projects and coordinated junior developers across multiple workstreams.",
        "Managed requirements, timelines, quality checks and client expectations while supporting SEO and SEM execution for SME clients.",
        "Communicated project status and trade-offs clearly with clients, balancing commercial needs, data quality and delivery deadlines.",
      ],
    },
    {
      role: "Co-Founder & Tech Lead",
      org: "Orama Asia · Singapore",
      period: "Aug 2019 — Jun 2020",
      bullets: [
        "Co-founded an early-stage blockchain-based logistics venture focused on supply-chain transparency across Southeast Asia.",
        "Translated operational pain points into product concept, MVP scope and stakeholder narrative in an ambiguous environment.",
        "Built comfort with process documentation, operational controls, commercial prioritisation and explaining technical concepts to non-technical stakeholders.",
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
      title: "Finance operations",
      body: "Order-to-Cash awareness, accounts receivable and aging reports, credit and collection risk awareness, revenue-control mindset, audit documentation, SOX / internal-controls awareness, process improvement.",
    },
    {
      title: "Accounting & analysis",
      body: "Financial analysis, balance-sheet thinking, transaction review, variance explanation, structured research, evidence capture, attention to detail.",
    },
    {
      title: "Excel & tools",
      body: "Excel, pivot tables, VLOOKUP, XLOOKUP, formulas, Google Sheets, Python-assisted analysis, SQL fundamentals, dashboard thinking, ERP systems awareness.",
    },
    {
      title: "Communication & execution",
      body: "Stakeholder communication, client-facing delivery, documentation, ownership through ambiguity, deadline discipline, clear written communication.",
    },
  ],
};
