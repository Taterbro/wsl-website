export const TECH_INTRO = {
  office: "Technology & AI",
  strap: "01 — Our businesses",
  // PLACEHOLDER — platform names, layer definitions and deployment claims
  // describe the intended structure of the business and must be reconciled
  // with the approved technology strategy before publication.
  summary:
    "AI, digital platforms, smart infrastructure, data systems, automation and fintech — built as operating assets, not pilots.",
} as const;

export const HERO_FACTS: { label: string; value: string }[] = [
  { label: "Core build", value: "AI · Data · Platforms" },
  { label: "Anchor product", value: "WSWIS" },
  { label: "Model", value: "Build · Integrate · Operate" },
];

export interface StackLayer {
  no: string;
  name: string;
  title: string;
  copy: string;
  items: string[];
}

// PLACEHOLDER — the layer model describes the intended build order and must
// match the approved technology architecture.
export const STACK: StackLayer[] = [
  {
    no: "01",
    name: "Foundation",
    title: "Connectivity, compute and clean data to build on.",
    copy: "Sites, backhaul, secure hosting and data pipelines, designed so the layers above have something reliable to run on.",
    items: ["Connectivity & backhaul", "Data pipelines", "Secure hosting", "Device identity"],
  },
  {
    no: "02",
    name: "Platform",
    title: "Software that holds the operation together.",
    copy: "One operating layer for telemetry, controls, workflows and commercial systems — deployed once and reused across assets.",
    items: ["Telemetry & SCADA", "Digital twin", "Workflow & work orders", "Billing & payments"],
  },
  {
    no: "03",
    name: "Intelligence",
    title: "Models that run the assets, not sit beside them.",
    copy: "Forecasting, anomaly detection and predictive maintenance, wired into the decisions operators and financiers actually make.",
    items: ["Demand forecasting", "Anomaly detection", "Predictive maintenance", "Yield & efficiency models"],
  },
  {
    no: "04",
    name: "Delivery",
    title: "Deployment where people and assets meet.",
    copy: "Command centres, field operations and owner training — the point where technology becomes a service that keeps running.",
    items: ["Command & control rooms", "Field operations", "Owner training", "Managed service"],
  },
];

export interface SectorPanel {
  key: string;
  title: string;
  copy: string;
  href: string;
  image: string;
  alt: string;
}

// PLACEHOLDER — deployment sectors and their value propositions are
// indicative and must be confirmed against approved platform coverage.
export const DEPLOYMENT: SectorPanel[] = [
  {
    key: "water",
    title: "Water & Smart Infrastructure",
    copy: "WSWIS turns source, storage and distribution into live data a financier can underwrite.",
    href: "/businesses/water-smart-infrastructure",
    image: "/placeholders/group-sector-water.png",
    alt: "Placeholder artwork standing in for photography of a smart water infrastructure installation",
  },
  {
    key: "energy",
    title: "Energy & Utilities",
    copy: "Generation, storage and grid performance seen in one view, then optimised against demand.",
    href: "/businesses/energy",
    image: "/placeholders/group-sector-energy.png",
    alt: "Placeholder artwork standing in for photography of a utility-scale energy and storage installation",
  },
  {
    key: "agriculture",
    title: "Agriculture & Food Systems",
    copy: "Irrigation, yield and cold-chain data routed straight to the decisions that change output.",
    href: "/businesses/agriculture",
    image: "/placeholders/group-sector-agriculture.png",
    alt: "Placeholder artwork standing in for photography of instrumented agricultural production",
  },
  {
    key: "industry",
    title: "Industry & Manufacturing",
    copy: "Plant telemetry, quality and energy use converted into measurable operating gains.",
    href: "/businesses/industry",
    image: "/placeholders/group-sector-industry.png",
    alt: "Placeholder artwork standing in for photography of an instrumented industrial facility",
  },
  {
    key: "logistics",
    title: "Logistics & Supply Chains",
    copy: "Network visibility, routing and customs workflows that shorten the corridor end to end.",
    href: "/businesses/logistics",
    image: "/placeholders/group-sector-logistics.png",
    alt: "Placeholder artwork standing in for photography of a connected logistics and distribution corridor",
  },
  {
    key: "cities",
    title: "Cities & Real Estate",
    copy: "District systems that run utilities, mobility and services as one coordinated estate.",
    href: "/businesses/real-estate-urban-infrastructure",
    image: "/placeholders/group-sector-real-estate.png",
    alt: "Placeholder artwork standing in for photography of a digitally managed urban district",
  },
];

export const FLAGSHIP = {
  eyebrow: "04 — Flagship product",
  title: "WSWIS",
  strap: "Intelligent water infrastructure for a changing world",
  copy: "WSWIS is where the stack meets a hard operating problem. The same architecture — instrumented assets, one platform, predictive models — runs across municipal networks, industrial sites and institutions.",
  // PLACEHOLDER — the WSWIS stage sequence mirrors the published product
  // description and must match the current product literature.
  stages: [
    "Solar energy",
    "Source & treatment",
    "Smart storage",
    "Intelligent distribution",
    "Digital monitoring",
    "Predictive maintenance",
    "Reliable access",
  ],
  routes: [
    { label: "WSWIS product page", href: "/innovation/wswis" },
    { label: "Technology partnerships", href: "/innovation/technology-partnerships" },
    { label: "R&D / Innovation", href: "/innovation/rd-innovation" },
  ],
} as const;

export const TECH_ROUTES: { role: string; copy: string; href: string }[] = [
  {
    role: "Technology partners",
    copy: "Owners of AI, telemetry, sensor or platform technology seeking deployment and localisation at scale.",
    href: "/innovation/technology-partnerships",
  },
  {
    role: "Project owners",
    copy: "Sponsors with infrastructure that needs instrumentation, data and a digital operating layer.",
    href: "/projects",
  },
  {
    role: "Governments",
    copy: "Public agencies building smart-city, utility and digital public infrastructure.",
    href: "/contact",
  },
  {
    role: "Financial institutions",
    copy: "Banks, DFIs and lenders assessing the digital and data layer sitting behind an asset.",
    href: "/contact",
  },
];
