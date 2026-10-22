export interface HeroFact {
  label: string;
  value: string;
}

export interface Reality {
  no: string;
  title: string;
  copy: string;
}

export type ProfileKey = "industrial" | "municipal" | "commercial";

export interface DispatchProfile {
  key: ProfileKey;
  label: string;
  load: string;
  summary: string;
  priorities: string[];
  mix: {
    solar: number[];
    storage: number[];
    grid: number[];
    backup: number[];
  };
}

export interface Technology {
  no: string;
  title: string;
  copy: string;
  tag: string;
}

export interface DeliveryStep {
  no: string;
  title: string;
  copy: string;
}

export interface Application {
  sector: string;
  driver: string;
  priority: string;
}

export interface RoleRoute {
  role: string;
  copy: string;
  href: string;
  link: string;
}

// PLACEHOLDER — the facts describe positioning, not verified operating data.
export const HERO_FACTS: HeroFact[] = [
  { label: "Mix", value: "Solar · Storage" },
  { label: "Mode", value: "Grid · Off-grid" },
  { label: "Model", value: "Build · Own · Operate" },
];

// PLACEHOLDER — market observations, not published performance claims.
export const REALITIES: Reality[] = [
  {
    no: "01",
    title: "Loads compound",
    copy: "New industry, housing, digital capacity and cooling arrive before the network is extended to serve them.",
  },
  {
    no: "02",
    title: "Grids strain",
    copy: "Connection delays, voltage swings and outages turn into direct operating cost for the assets that depend on them.",
  },
  {
    no: "03",
    title: "Fuel exposes",
    copy: "Diesel and heavy fuel tie operating budgets to price shocks, logistics and emissions that lenders increasingly price.",
  },
];

// PLACEHOLDER — illustrative 24-hour dispatch profiles. Not project data.
// Values are shares of hourly load, in 2-hour buckets, and sum to 100.
export const DISPATCH_PROFILES: DispatchProfile[] = [
  {
    key: "industrial",
    label: "Industrial",
    load: "Continuous process load",
    summary:
      "A flat, high load with a daytime solar window. The hybrid system shaves grid demand through the day and keeps process load stable into the evening.",
    priorities: ["Process continuity", "Daytime solar", "Evening firming"],
    mix: {
      solar: [0, 0, 2, 18, 40, 55, 58, 50, 32, 8, 0, 0],
      storage: [8, 8, 6, 4, 6, 8, 10, 14, 18, 12, 10, 8],
      grid: [80, 80, 82, 68, 46, 30, 26, 30, 42, 68, 78, 80],
      backup: [12, 12, 10, 10, 8, 7, 6, 6, 8, 12, 12, 12],
    },
  },
  {
    key: "municipal",
    label: "Municipal",
    load: "Pumping, treatment & services",
    summary:
      "Demand peaks morning and evening. Storage and grid carry the shoulders while solar does the heavy lifting at midday.",
    priorities: ["Two daily peaks", "Pump resilience", "Outage cover"],
    mix: {
      solar: [0, 0, 2, 12, 30, 46, 52, 46, 30, 6, 0, 0],
      storage: [10, 10, 10, 12, 10, 8, 8, 10, 14, 18, 14, 10],
      grid: [78, 78, 76, 64, 50, 38, 32, 36, 45, 64, 74, 78],
      backup: [12, 12, 12, 12, 10, 8, 8, 8, 11, 12, 12, 12],
    },
  },
  {
    key: "commercial",
    label: "Commercial",
    load: "Cooling-led daytime load",
    summary:
      "Daytime cooling and occupancy create a sharp solar window. Storage covers the evening tail and backup protects critical circuits.",
    priorities: ["Daytime cooling", "Evening tail", "Critical circuits"],
    mix: {
      solar: [0, 0, 1, 8, 26, 44, 56, 54, 40, 12, 0, 0],
      storage: [6, 6, 6, 8, 10, 10, 8, 10, 14, 16, 10, 6],
      grid: [84, 84, 83, 74, 56, 39, 30, 30, 36, 60, 80, 84],
      backup: [10, 10, 10, 10, 8, 7, 6, 6, 10, 12, 10, 10],
    },
  },
];

// PLACEHOLDER — technology scope is indicative and confirmed per project.
export const TECHNOLOGIES: Technology[] = [
  {
    no: "01",
    title: "Hybrid solar + storage",
    copy: "Generation and storage co-designed as one dispatchable asset, sized to the load rather than the catalogue.",
    tag: "Flagship",
  },
  {
    no: "02",
    title: "Utility-scale solar",
    copy: "Ground-mounted PV for utilities, industrial zones and anchor offtakers.",
    tag: "Generation",
  },
  {
    no: "03",
    title: "Battery storage",
    copy: "Front-of-meter and behind-the-meter storage for peak shaving, firming and backup.",
    tag: "Storage",
  },
  {
    no: "04",
    title: "Distributed C&I",
    copy: "Rooftop, carport and ground-mount systems for commercial and industrial sites.",
    tag: "C&I",
  },
  {
    no: "05",
    title: "Off-grid & backup",
    copy: "Hybrid microgrids and backup for sites where the grid is absent or unreliable.",
    tag: "Resilience",
  },
];

// PLACEHOLDER — delivery process is indicative. Contract structures are
// confirmed per project through mandate and technical due diligence.
export const DELIVERY_STEPS: DeliveryStep[] = [
  {
    no: "01",
    title: "Load & site study",
    copy: "Demand profile, resource, grid capacity and physical constraints mapped before design.",
  },
  {
    no: "02",
    title: "Structure & finance",
    copy: "Ownership, offtake and capital structure matched to the asset and its risk.",
  },
  {
    no: "03",
    title: "Build & commission",
    copy: "EPC delivery, grid connection, testing and performance verification.",
  },
  {
    no: "04",
    title: "Operate & optimise",
    copy: "Monitoring, maintenance and dispatch optimisation across the asset life.",
  },
];

// PLACEHOLDER — the matrix describes illustrative load segments, not a
// published project list.
export const APPLICATIONS: Application[] = [
  {
    sector: "Industry & manufacturing",
    driver: "Continuous process, cooling and production load.",
    priority: "Reliability",
  },
  {
    sector: "Cities & municipalities",
    driver: "Pumping, treatment, lighting and public services.",
    priority: "Resilience",
  },
  {
    sector: "Digital infrastructure",
    driver: "High-availability compute and cooling demand.",
    priority: "Reliability",
  },
  {
    sector: "Healthcare",
    driver: "Clinical continuity and cold-chain power.",
    priority: "Continuity",
  },
  {
    sector: "Housing & mixed-use",
    driver: "Serviced districts and shared infrastructure.",
    priority: "Cost",
  },
  {
    sector: "Agriculture & agri-processing",
    driver: "Irrigation, cold storage and processing loads.",
    priority: "Productivity",
  },
];

export const ROLE_ROUTES: RoleRoute[] = [
  {
    role: "Investors & DFIs",
    copy: "Structured exposure to contracted energy assets and hybrid infrastructure.",
    href: "/investments/opportunities",
    link: "Investment opportunities",
  },
  {
    role: "Governments & utilities",
    copy: "Generation, storage and resilient supply for public networks and services.",
    href: "/contact",
    link: "Start a conversation",
  },
  {
    role: "Industrial offtakers",
    copy: "Firm power, cost control and decarbonisation for production sites.",
    href: "/contact",
    link: "Discuss your load",
  },
  {
    role: "Technology partners",
    copy: "Panels, inverters, storage and controls ready for deployment and localisation.",
    href: "/innovation/technology-partnerships",
    link: "Technology partnerships",
  },
  {
    role: "Project owners",
    copy: "A generation or storage project that needs capital, structuring and delivery.",
    href: "/contact",
    link: "Submit a project",
  },
];
