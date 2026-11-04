export interface GovernanceBody {
  key: string;
  name: string;
  tier: "board" | "committee" | "executive" | "assurance";
  remit: string;
  status: string;
  scope: string[];
}

// PLACEHOLDER — bodies, remits and statuses below describe the intended
// governance framework. Membership, titles, affiliations and committee
// mandates are published only once formally constituted, approved and current.
export const GOVERNANCE_BODIES: GovernanceBody[] = [
  {
    key: "board",
    name: "Board of Directors",
    tier: "board",
    remit: "Holds the group to its mandate: strategy, capital allocation between platforms, major commitments, risk appetite and the appointment of the Group CEO.",
    status: "Constituted — composition published once approved and current",
    scope: [
      "Group strategy and mandate",
      "Capital allocation across platforms",
      "Major investments and commitments",
      "Group risk appetite and disclosure policy",
      "Group CEO appointment and performance",
    ],
  },
  {
    key: "investment-committee",
    name: "Investment Committee",
    tier: "committee",
    remit: "Reviews and approves investment cases, structuring approaches and capital commitments within the mandate set by the Board.",
    status: "Published only as formally constituted",
    scope: [
      "Investment case review and approval",
      "Structuring and instrument selection",
      "Capital commitment thresholds",
      "Pipeline prioritisation discipline",
    ],
  },
  {
    key: "audit-risk-committee",
    name: "Audit & Risk Committee",
    tier: "committee",
    remit: "Oversees risk, internal control, external audit and the integrity of reporting across the group and its platforms.",
    status: "Published only as formally constituted",
    scope: [
      "Enterprise risk framework",
      "Internal control and audit plan",
      "Financial and non-financial reporting integrity",
      "Fraud, misconduct and whistleblower routes",
    ],
  },
  {
    key: "governance-committee",
    name: "Governance & Nominations Committee",
    tier: "committee",
    remit: "Directs board composition, succession, policy architecture and the governance framework the group operates under.",
    status: "Published only as formally constituted",
    scope: [
      "Board composition and skills matrix",
      "Succession and leadership pipeline",
      "Policy framework and review cycle",
      "Related-party and conflict controls",
    ],
  },
  {
    key: "executive",
    name: "Executive Leadership",
    tier: "executive",
    remit: "Runs the group day to day: origination, structuring, financing, delivery and operations across the platforms.",
    status: "Operating management — biographies published once confirmed",
    scope: [
      "Origination and project development",
      "Structuring and financing execution",
      "Delivery, operations and performance",
      "Commercial and partnership negotiations",
    ],
  },
  {
    key: "assurance",
    name: "Independent Assurance",
    tier: "assurance",
    remit: "External audit, independent assurance and specialist advisers appointed independently of management, with reporting lines into the Audit & Risk Committee.",
    status: "Providers named only with permission",
    scope: [
      "External financial audit",
      "Independent assurance of selected disclosures",
      "Specialist technical and ESG assurance",
      "Direct access to the Audit & Risk Committee",
    ],
  },
];

export const TIER_LABEL: Record<GovernanceBody["tier"], string> = {
  board: "Board",
  committee: "Committees",
  executive: "Executive",
  assurance: "Assurance",
};

// PLACEHOLDER — indicative delegation of authority, to be confirmed against the
// formally approved delegations of authority.
export const DECISION_RIGHTS: {
  title: string;
  note: string;
  items: string[];
}[] = [
  {
    title: "Reserved to the Board",
    note: "Decisions that shape the group, not the quarter.",
    items: [
      "Group strategy and mandate",
      "Allocation of capital between platforms",
      "Major investments, disposals and commitments",
      "Group risk appetite and disclosure policy",
      "Appointment and performance of the Group CEO",
    ],
  },
  {
    title: "Delegated to management",
    note: "Decisions taken inside an approved mandate.",
    items: [
      "Origination and project development within mandate",
      "Structuring and financing execution",
      "Delivery, operations and site performance",
      "Commercial and partnership negotiations",
      "Operational reporting to the Board",
    ],
  },
  {
    title: "Committee matters",
    note: "Matters examined in depth before decision.",
    items: [
      "Investment case approval and structuring",
      "Risk, control and audit plan review",
      "Board composition, succession and policy",
      "Related-party, conflict and conduct matters",
    ],
  },
];

// PLACEHOLDER — seat placeholders only. Names, titles, affiliations and
// portraits are published once formally approved and current.
export const SEATS: { seat: string; body: string; image: string; alt: string }[] =
  [
    {
      seat: "Board seat",
      body: "Board of Directors",
      image: "/placeholders/governance-seat-1.png",
      alt: "Placeholder portrait artwork for an unnamed board member",
    },
    {
      seat: "Independent seat",
      body: "Board of Directors",
      image: "/placeholders/governance-seat-2.png",
      alt: "Placeholder portrait artwork for an unnamed independent director",
    },
    {
      seat: "Committee chair",
      body: "Audit & Risk Committee",
      image: "/placeholders/governance-seat-3.png",
      alt: "Placeholder portrait artwork for an unnamed audit and risk committee chair",
    },
    {
      seat: "Committee chair",
      body: "Investment Committee",
      image: "/placeholders/governance-seat-4.png",
      alt: "Placeholder portrait artwork for an unnamed investment committee chair",
    },
    {
      seat: "Committee member",
      body: "Governance & Nominations Committee",
      image: "/placeholders/governance-seat-5.png",
      alt: "Placeholder portrait artwork for an unnamed governance committee member",
    },
    {
      seat: "Group executive seat",
      body: "Executive Leadership",
      image: "/placeholders/governance-seat-6.png",
      alt: "Placeholder portrait artwork for an unnamed group executive",
    },
  ];

// Approval matrix for material claims published on this website, per the
// internal trust and publishing governance standard.
export const CLAIM_MATRIX: { claim: string; approval: string }[] = [
  {
    claim: "Legal entity / jurisdiction",
    approval: "Corporate & legal verification",
  },
  {
    claim: "Partner or client logo",
    approval: "Written permission or contractual right",
  },
  {
    claim: "Investment amount / project value",
    approval: "Finance or project owner approval",
  },
  {
    claim: "Country presence",
    approval: "Evidence of presence, or clearly labelled as target or opportunity",
  },
  {
    claim: "Government relationship",
    approval: "Approved wording; no implied endorsement",
  },
  {
    claim: "UN / nonprofit status",
    approval: "Current supporting documentation",
  },
  {
    claim: "Impact metric",
    approval: "Methodology, reporting period and source",
  },
  {
    claim: "Executive title",
    approval: "HR and corporate confirmation",
  },
];

export const GOVERNANCE_ROLES: { role: string; copy: string; href: string }[] = [
  {
    role: "Institutional investors",
    copy: "Partners assessing governance, reporting standards and disclosure discipline before committing capital.",
    href: "/investments/investor-relations",
  },
  {
    role: "Banks & development institutions",
    copy: "Financiers who need to know who approves what, and how risk is escalated and recorded.",
    href: "/contact",
  },
  {
    role: "Auditors & assurance providers",
    copy: "Independent firms and advisers seeking a governed counterparty and a documented approval route.",
    href: "/contact",
  },
  {
    role: "Media & regulators",
    copy: "Journalists, regulators and public bodies requiring verified, on-record information.",
    href: "/insights/media",
  },
];
