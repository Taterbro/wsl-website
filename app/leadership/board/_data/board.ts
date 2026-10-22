export const BOARD_INTRO = {
  office: "Board of Directors",
  strap: "The people accountable for what the group builds",
  // PLACEHOLDER — the roster below is illustrative dummy content. Names,
  // roles, seat types and committee memberships must be replaced with the
  // confirmed register of directors before publication.
  summary:
    "The Board sets the mandate, approves the capital and holds the executive to the plan. This is the full board of Waterlight Group — every member, the seat they hold and the work they carry.",
} as const;

export interface BoardMember {
  key: string;
  name: string;
  role: string;
  seat: string;
  focus: string;
  committees: string[];
  image: string;
  alt: string;
  social?: { label: string; href: string };
  placeholder: true;
}

// PLACEHOLDER — dummy roster. Every entry below is invented for layout and
// must be replaced with confirmed board members, roles and photograph rights.
export const BOARD_MEMBERS: BoardMember[] = [
  {
    key: "chair",
    name: "Kwame Mensah",
    role: "Chair of the Board",
    seat: "Chair",
    focus:
      "Leads the Board and holds the group's capital discipline and conduct to account.",
    committees: ["Remuneration & Nominations"],
    image: "/placeholders/board-portrait-1.png",
    alt: "Placeholder portrait artwork for Kwame Mensah, Chair of the Board",
    social: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/placeholder-wl-board-01",
    },
    placeholder: true,
  },
  {
    key: "deputy-chair",
    name: "Thandiwe Ndlovu",
    role: "Deputy Chair & Senior Independent Director",
    seat: "Independent",
    focus:
      "Independent challenge on strategy, senior appointments and executive conduct.",
    committees: ["Remuneration & Nominations"],
    image: "/placeholders/board-portrait-2.png",
    alt: "Placeholder portrait artwork for Thandiwe Ndlovu, Deputy Chair of the Board",
    placeholder: true,
  },
  {
    key: "founder",
    name: "Chidinma Adeyemi",
    role: "Founder & Group CEO",
    seat: "Executive",
    focus:
      "Sets the group's strategy and carries the Board's mandate into delivery.",
    committees: [],
    image: "/placeholders/board-portrait-3.png",
    alt: "Placeholder portrait artwork for Chidinma Adeyemi, Founder & Group CEO",
    social: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/placeholder-wl-board-03",
    },
    placeholder: true,
  },
  {
    key: "capital",
    name: "Ibrahim Al-Sayed",
    role: "Non-Executive Director",
    seat: "Independent",
    focus:
      "Cross-border capital, Gulf investment flows and joint-venture structuring.",
    committees: ["Investment & Capital"],
    image: "/placeholders/board-portrait-4.png",
    alt: "Placeholder portrait artwork for Ibrahim Al-Sayed, Non-Executive Director",
    social: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/placeholder-wl-board-04",
    },
    placeholder: true,
  },
  {
    key: "audit",
    name: "Elena Marchetti",
    role: "Non-Executive Director",
    seat: "Independent",
    focus:
      "Financial controls, audit discipline and the review of capital structure.",
    committees: ["Audit & Risk"],
    image: "/placeholders/board-portrait-5.png",
    alt: "Placeholder portrait artwork for Elena Marchetti, Non-Executive Director",
    social: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/placeholder-wl-board-05",
    },
    placeholder: true,
  },
  {
    key: "delivery",
    name: "Joseph Mwangi",
    role: "Non-Executive Director",
    seat: "Independent",
    focus:
      "Infrastructure engineering, delivery risk and performance of operating assets.",
    committees: ["Audit & Risk"],
    image: "/placeholders/board-portrait-6.png",
    alt: "Placeholder portrait artwork for Joseph Mwangi, Non-Executive Director",
    placeholder: true,
  },
  {
    key: "technology",
    name: "Fatima Bello",
    role: "Non-Executive Director",
    seat: "Independent",
    focus:
      "Technology, digital infrastructure and the industrial modernisation agenda.",
    committees: ["Investment & Capital"],
    image: "/placeholders/board-portrait-7.png",
    alt: "Placeholder portrait artwork for Fatima Bello, Non-Executive Director",
    social: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/placeholder-wl-board-07",
    },
    placeholder: true,
  },
  {
    key: "urban",
    name: "Lars Andersen",
    role: "Non-Executive Director",
    seat: "Independent",
    focus:
      "Urban development, real estate structures and long-hold asset strategy.",
    committees: [],
    image: "/placeholders/board-portrait-8.png",
    alt: "Placeholder portrait artwork for Lars Andersen, Non-Executive Director",
    social: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/placeholder-wl-board-08",
    },
    placeholder: true,
  },
  {
    key: "impact",
    name: "Grace Moyo",
    role: "Non-Executive Director",
    seat: "Independent",
    focus:
      "Sustainable infrastructure, climate resilience and development finance.",
    committees: ["Audit & Risk"],
    image: "/placeholders/board-portrait-9.png",
    alt: "Placeholder portrait artwork for Grace Moyo, Non-Executive Director",
    placeholder: true,
  },
];

export const BOARD_STATS: { value: string; label: string }[] = [
  { value: "9", label: "Board seats" },
  { value: "8", label: "Independent" },
  { value: "3", label: "Standing committees" },
  { value: "Quarterly", label: "Review cycle" },
];

export interface Committee {
  key: string;
  name: string;
  chair: string;
  remit: string;
  scope: string[];
}

// PLACEHOLDER — committee names, chairs and remits describe the intended
// structure and must be reconciled with the approved terms of reference.
export const BOARD_COMMITTEES: Committee[] = [
  {
    key: "audit",
    name: "Audit & Risk Committee",
    chair: "Elena Marchetti",
    remit:
      "Reviews financial reporting, internal control, risk appetite and the integrity of every published claim.",
    scope: ["Financial control", "Risk register", "External audit"],
  },
  {
    key: "investment",
    name: "Investment & Capital Committee",
    chair: "Ibrahim Al-Sayed",
    remit:
      "Tests investment cases, structuring routes and capital commitments before they reach the Board for decision.",
    scope: ["Investment cases", "Commitment thresholds", "Portfolio exits"],
  },
  {
    key: "remuneration",
    name: "Remuneration & Nominations Committee",
    chair: "Thandiwe Ndlovu",
    remit:
      "Sets the framework for senior appointments, performance and reward, and keeps Board composition open to renewal.",
    scope: ["Senior appointments", "Performance & reward", "Board renewal"],
  },
];

export interface StructureRow {
  label: string;
  value: string;
}

// PLACEHOLDER — the reporting structure below is indicative and must be
// confirmed against the approved governance framework.
export const BOARD_STRUCTURE: StructureRow[] = [
  { label: "Board", value: "Sets strategy, approves capital, holds the executive" },
  { label: "Committees", value: "Audit & Risk · Investment & Capital · Remuneration" },
  { label: "Executive", value: "Runs the group inside a delegated mandate" },
];

export const BOARD_ROUTES: { role: string; copy: string; href: string }[] = [
  {
    role: "Investors",
    copy: "Institutions and funds assessing the board that signs for capital allocation.",
    href: "/investments/investor-relations",
  },
  {
    role: "Governments",
    copy: "Public agencies checking who stands behind delivery and guarantees.",
    href: "/contact",
  },
  {
    role: "Financial institutions",
    copy: "Banks, DFIs and lenders assessing governance before they commit.",
    href: "/contact",
  },
  {
    role: "Technology partners",
    copy: "Technology owners seeking a board that understands deployment and scale.",
    href: "/innovation/technology-partnerships",
  },
];
