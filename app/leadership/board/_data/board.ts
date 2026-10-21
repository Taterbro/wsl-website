export const BOARD_INTRO = {
  office: "Board of Directors",
  strap: "Composition, remit and accountability",
  // PLACEHOLDER — board size, composition, chairs and members are indicative.
  // Membership, titles, affiliations and dates of appointment are published
  // only once formally constituted, approved and current.
  summary:
    "The Board holds the group to its mandate. This page describes how the Board is constituted, what it decides, how it is supported by committees, and how its own performance is assessed — not who currently sits on it.",
} as const;

export interface CompositionItem {
  key: string;
  label: string;
  value: string;
  copy: string;
}

// PLACEHOLDER — composition rules are indicative and must be confirmed against
// the approved board charter and delegation of authority.
export const COMPOSITION: CompositionItem[] = [
  {
    key: "size",
    label: "Board size",
    value: "Set range",
    copy: "A defined minimum and maximum so composition is deliberate rather than reactive.",
  },
  {
    key: "independence",
    label: "Independent seats",
    value: "Protected",
    copy: "A minimum number of independent directors, free of management and related-party interests.",
  },
  {
    key: "skills",
    label: "Skills matrix",
    value: "Maintained",
    copy: "Board composition is mapped against capital, infrastructure, risk, governance and sector skills.",
  },
  {
    key: "tenure",
    label: "Tenure limits",
    value: "Capped",
    copy: "Staggered terms and a tenure cap, so renewal happens by design rather than by drift.",
  },
];

// PLACEHOLDER — decision categories mirror the governance page's reserved
// matters and must be reconciled with the approved board charter.
export const BOARD_DECISIONS: { title: string; copy: string }[] = [
  {
    title: "Group strategy",
    copy: "Approves the group mandate and the strategy each platform is held to.",
  },
  {
    title: "Capital allocation",
    copy: "Decides how capital is distributed between platforms and commitments.",
  },
  {
    title: "Major commitments",
    copy: "Reserves investments, disposals and liabilities above a defined threshold.",
  },
  {
    title: "Risk & disclosure",
    copy: "Sets risk appetite and the policy for what the group discloses publicly.",
  },
  {
    title: "CEO appointment",
    copy: "Appoints the Group CEO and reviews performance against the mandate.",
  },
];

export interface CommitteeLink {
  key: string;
  name: string;
  chair: string;
  reports: string;
  copy: string;
  focus: string[];
}

// PLACEHOLDER — committee formation, chairs and reporting lines are indicative
// and published only as formally constituted.
export const COMMITTEES: CommitteeLink[] = [
  {
    key: "audit-risk",
    name: "Audit & Risk Committee",
    chair: "Independent chair",
    reports: "Reports to the Board",
    copy: "Oversees risk, internal control, external audit and the integrity of financial and non-financial reporting.",
    focus: [
      "Enterprise risk framework",
      "Internal control and audit plan",
      "Reporting integrity",
      "Whistleblower and misconduct routes",
    ],
  },
  {
    key: "investment",
    name: "Investment Committee",
    chair: "Board-appointed chair",
    reports: "Reports to the Board",
    copy: "Reviews investment cases, structuring approaches and capital commitments within the Board's mandate.",
    focus: [
      "Investment case approval",
      "Structuring and instruments",
      "Commitment thresholds",
      "Pipeline prioritisation",
    ],
  },
  {
    key: "governance-nominations",
    name: "Governance & Nominations Committee",
    chair: "Board-appointed chair",
    reports: "Reports to the Board",
    copy: "Directs board composition, succession, policy architecture and the governance framework the group operates under.",
    focus: [
      "Composition and skills matrix",
      "Succession and pipeline",
      "Policy framework",
      "Conflict and related-party controls",
    ],
  },
];

export interface CadenceItem {
  no: string;
  title: string;
  copy: string;
}

// PLACEHOLDER — cadence and evaluation process are indicative and must be
// confirmed against the approved board charter.
export const CADENCE: CadenceItem[] = [
  {
    no: "01",
    title: "Quarterly meetings",
    copy: "The Board meets on a fixed cycle, with committee sessions held ahead of each meeting.",
  },
  {
    no: "02",
    title: "Standing agenda",
    copy: "Performance, risk, capital, compliance and strategy each have a permanent place on the agenda.",
  },
  {
    no: "03",
    title: "Board papers",
    copy: "Papers are circulated in advance, with source, owner and approval status recorded for every material claim.",
  },
  {
    no: "04",
    title: "Annual evaluation",
    copy: "The Board and each committee review their own effectiveness and composition at least once a year.",
  },
];

export const BOARD_ROLES: { role: string; copy: string; href: string }[] = [
  {
    role: "Institutional investors",
    copy: "Assessing governance quality, board independence and the reliability of what the group publishes.",
    href: "/investments/investor-relations",
  },
  {
    role: "Financiers & development institutions",
    copy: "Needing to understand who approves what, and how risk is escalated to the Board.",
    href: "/contact",
  },
  {
    role: "Governance advisers & auditors",
    copy: "Reviewing composition, committee mandates and the group's evaluation process.",
    href: "/about/governance",
  },
  {
    role: "Media & regulators",
    copy: "Requiring verified, on-record board information once formally approved.",
    href: "/insights/media",
  },
];
