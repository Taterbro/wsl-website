export interface HeroFact {
  label: string;
  value: string;
}

export type ChainKey = "produce" | "process" | "store" | "move" | "market";

export interface ChainStage {
  key: ChainKey;
  no: string;
  label: string;
  summary: string;
  components: string[];
}

export interface Offering {
  no: string;
  title: string;
  copy: string;
  tag: string;
}

export interface Principle {
  no: string;
  title: string;
  copy: string;
  tag: string;
}

export interface RoleRoute {
  role: string;
  copy: string;
  href: string;
  link: string;
}

// PLACEHOLDER — the facts describe positioning, not verified operating data.
export const HERO_FACTS: HeroFact[] = [
  { label: "Chain", value: "Field to market" },
  { label: "Focus", value: "Processing · Cold chain" },
  { label: "Model", value: "Build · Own · Operate" },
];

export const CHAIN_STAGES: ChainStage[] = [
  {
    key: "produce",
    no: "01",
    label: "Produce",
    summary:
      "Production is designed against the land, water and market that can support it — not the other way around.",
    components: [
      "Solar irrigation",
      "Farmer aggregation",
      "Inputs & extension",
      "Yield planning",
    ],
  },
  {
    key: "process",
    no: "02",
    label: "Process",
    summary:
      "Processing moves value capture closer to the farm and turns raw produce into products that can travel.",
    components: [
      "Milling & extraction",
      "Food-grade lines",
      "Packaging",
      "Quality control",
    ],
  },
  {
    key: "store",
    no: "03",
    label: "Store",
    summary:
      "Cold chain and storage protect quality between harvest and demand, when the price and the need are highest.",
    components: [
      "Cold rooms",
      "Silos & warehousing",
      "Solar cooling",
      "Inventory visibility",
    ],
  },
  {
    key: "move",
    no: "04",
    label: "Move",
    summary:
      "Aggregation and transport connect production clusters to processors, cities and export corridors.",
    components: [
      "Collection centres",
      "Cold transport",
      "Corridor links",
      "Traceability",
    ],
  },
  {
    key: "market",
    no: "05",
    label: "Market",
    summary:
      "Offtake and market infrastructure turn production into predictable revenue for producers and buyers.",
    components: [
      "Offtake agreements",
      "Grading & market floors",
      "Aggregation platforms",
      "Export readiness",
    ],
  },
];

// PLACEHOLDER — offering scope is indicative and confirmed per project.
export const OFFERINGS: Offering[] = [
  {
    no: "01",
    title: "Irrigation & water",
    copy: "Solar pumping, drip systems and storage sized to the crop, season and site.",
    tag: "Production",
  },
  {
    no: "02",
    title: "Processing & value addition",
    copy: "Food-grade milling, extraction, packaging and quality control near the farm.",
    tag: "Processing",
  },
  {
    no: "03",
    title: "Cold chain & storage",
    copy: "Cold rooms, silos and aggregation hubs that protect quality after harvest.",
    tag: "Storage",
  },
  {
    no: "04",
    title: "Agri-tech & traceability",
    copy: "Yield, inventory and movement data that make the chain visible and financeable.",
    tag: "Digital",
  },
  {
    no: "05",
    title: "Market infrastructure",
    copy: "Collection, grading and offtake platforms that connect supply to demand.",
    tag: "Market",
  },
];

// PLACEHOLDER — illustrative application environments, not a project list.
export const APPLICATIONS: string[] = [
  "Smallholder & commercial farms",
  "Agri-processing parks",
  "Cold-chain corridors",
  "Urban food markets",
  "Institutional buyers",
  "Export value chains",
];

// PLACEHOLDER — delivery principles, not verified performance claims.
export const PRINCIPLES: Principle[] = [
  {
    no: "01",
    title: "Design for the harvest peak",
    copy: "Capacity is set by the weeks when everything arrives at once, not by the annual average.",
    tag: "Capacity",
  },
  {
    no: "02",
    title: "Protect quality before volume",
    copy: "Storage, handling and cold chain come before expansion, so growth does not become loss.",
    tag: "Quality",
  },
  {
    no: "03",
    title: "Contract the market early",
    copy: "Offtake and aggregation are structured alongside production, not after the first harvest.",
    tag: "Offtake",
  },
  {
    no: "04",
    title: "Measure what leaves the farm",
    copy: "Yield, loss and utilisation are tracked from the start, with a stated method and named owner.",
    tag: "Evidence",
  },
];

export const ROLE_ROUTES: RoleRoute[] = [
  {
    role: "Farmers & producers",
    copy: "Aggregation, irrigation, storage and offtake for production at scale.",
    href: "/contact",
    link: "Start a conversation",
  },
  {
    role: "Processors & offtakers",
    copy: "Processing capacity, cold chain and reliable raw-material supply.",
    href: "/contact",
    link: "Discuss requirements",
  },
  {
    role: "Investors & DFIs",
    copy: "Structured exposure to food-system infrastructure and recurring revenue.",
    href: "/investments/opportunities",
    link: "Investment opportunities",
  },
  {
    role: "Governments & development partners",
    copy: "Food-security infrastructure delivered through structured partnerships.",
    href: "/contact",
    link: "Partner on delivery",
  },
  {
    role: "Technology partners",
    copy: "Irrigation, cooling, processing and traceability technologies ready to deploy.",
    href: "/innovation/technology-partnerships",
    link: "Technology partnerships",
  },
  {
    role: "Project owners",
    copy: "An agri-infrastructure project that needs capital and delivery capability.",
    href: "/contact",
    link: "Submit a project",
  },
];
