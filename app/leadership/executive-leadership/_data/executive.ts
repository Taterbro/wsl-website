export const EXEC_INTRO = {
  office: "Executive Leadership",
  strap: "How the group is run day to day",
  // PLACEHOLDER — biographies, names, titles and team sizes are indicative and
  // must be confirmed by HR and corporate before publication.
  summary:
    "The Board sets the mandate. The executive team executes it — originating projects, structuring capital, building platforms and running them. This page describes the functions that carry that work and how they answer to the Board, not who currently holds each seat.",
} as const;

export interface ExecFunction {
  key: string;
  no: string;
  title: string;
  copy: string;
  scope: string[];
}

// PLACEHOLDER — function structure describes the intended operating model and
// must be reconciled with the approved organisation chart.
export const EXEC_FUNCTIONS: ExecFunction[] = [
  {
    key: "strategy",
    no: "01",
    title: "Group Strategy & Portfolio",
    copy: "Translates the mandate into a platform strategy and holds each business to its plan.",
    scope: ["Platform strategy", "Capital allocation support", "Portfolio performance", "Board reporting"],
  },
  {
    key: "origination",
    no: "02",
    title: "Origination & Development",
    copy: "Finds, assesses and develops projects from concept to an investable, buildable position.",
    scope: ["Pipeline and feasibility", "Technical assessment", "Permits and approvals", "Development management"],
  },
  {
    key: "finance",
    no: "03",
    title: "Structuring & Finance",
    copy: "Shapes how projects are funded, structured and brought to close with partners and lenders.",
    scope: ["Capital structuring", "Financial close", "Investor relations", "Treasury and controls"],
  },
  {
    key: "delivery",
    no: "04",
    title: "Delivery & Operations",
    copy: "Builds and runs assets to standard, and owns site performance once they are live.",
    scope: ["Engineering and delivery", "Operations and maintenance", "HSE and quality", "Asset performance"],
  },
  {
    key: "technology",
    no: "05",
    title: "Technology & Digital",
    copy: "Builds the digital systems and data the platforms and the group run on.",
    scope: ["Platform systems", "Data and reporting", "Cybersecurity", "Digital infrastructure"],
  },
  {
    key: "people",
    no: "06",
    title: "People, Legal & Risk",
    copy: "Provides the function that keeps the group compliant, staffed and controlled as it scales.",
    scope: ["Legal and compliance", "Risk and internal control", "People and culture", "Policies and conduct"],
  },
];

// PLACEHOLDER — reporting lines and cadence are indicative and published only
// once confirmed against the approved governance and delegation frameworks.
export const EXEC_OPERATING: { stage: string; title: string; copy: string }[] = [
  {
    stage: "Mandate",
    title: "Set by the Board",
    copy: "Strategy, risk appetite and reserved decisions are fixed at Board level.",
  },
  {
    stage: "Execution",
    title: "Run by the executive",
    copy: "The executive team takes decisions inside an approved mandate and records them.",
  },
  {
    stage: "Reporting",
    title: "Reviewed on a fixed cycle",
    copy: "Performance, risk and capital return to the Board through standing papers and committees.",
  },
  {
    stage: "Accountability",
    title: "Held to outcome, not activity",
    copy: "Each function owns a defined set of outcomes with a named accountable lead once confirmed.",
  },
];

export interface Company {
  key: string;
  name: string;
  domain: string;
  leads: string[];
}

// PLACEHOLDER — company names and mandates mirror the group structure page;
// executive leads are unnamed until confirmed.
export const COMPANY_LEADS: Company[] = [
  {
    key: "investments",
    name: "Waterlight Africa Investments Ltd",
    domain: "Investment platform",
    leads: ["Portfolio strategy", "Capital formation", "Co-investment"],
  },
  {
    key: "water",
    name: "Waterlight Water & Infrastructure",
    domain: "Water & smart infrastructure",
    leads: ["Project delivery", "Operations", "Utility partnerships"],
  },
  {
    key: "energy",
    name: "Waterlight Energy",
    domain: "Power & energy",
    leads: ["Generation projects", "Grid and distribution", "Energy transition"],
  },
  {
    key: "technology",
    name: "Waterlight Technology",
    domain: "Technology & AI",
    leads: ["Platform systems", "Data infrastructure", "Digital services"],
  },
];

export interface AccountItem {
  title: string;
  copy: string;
}

// PLACEHOLDER — accountability principles describe intent and must be confirmed
// against the approved performance and conduct frameworks.
export const ACCOUNTABILITY: AccountItem[] = [
  {
    title: "One accountable lead per outcome",
    copy: "Every outcome has a single named owner inside the executive, with a documented remit and review date.",
  },
  {
    title: "Decisions inside an approved mandate",
    copy: "The executive acts within the authority the Board delegates, and escalates whatever sits outside it.",
  },
  {
    title: "Performance measured against the plan",
    copy: "Functions are assessed on delivery against the approved plan, with evidence rather than activity.",
  },
  {
    title: "Conduct governed like risk",
    copy: "Conflicts, related-party interests and conduct are managed through the same controls as financial risk.",
  },
];

export const EXEC_ROLES: { role: string; copy: string; href: string }[] = [
  {
    role: "Strategic partners",
    copy: "Organisations aligning with the team that originates, structures and delivers projects.",
    href: "/partner-with-us/project-owners",
  },
  {
    role: "Institutional investors",
    copy: "Assessing the operating team that will execute the strategy capital is committed to.",
    href: "/investments/investor-relations",
  },
  {
    role: "Talent & advisers",
    copy: "Senior professionals and advisers assessing the operating model they would join or support.",
    href: "/careers",
  },
  {
    role: "Media & analysts",
    copy: "Requiring verified, on-record information about how the group is run once approved.",
    href: "/insights/media",
  },
];
