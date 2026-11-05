export const FOUNDER = {
  name: "Dr. Engr. Prince Ero Ibhafidon",
  role: "Founder & Group Chief Executive",
  office: "Office of the Founder & Group Chief Executive",
  quote:
    "The value of life is determined by the problems you solve for others.",
} as const;

export const BIO: string[] = [
  "Dr. Engr. Prince Ero Ibhafidon is the Founder & Group Chief Executive of Waterlight Group, the African-founded enterprise platform building, investing in and scaling businesses, infrastructure and technologies.",
  "An engineer by training, he founded the group around a single conviction: durable institutions are built by solving essential problems — water, energy, food, industry and the systems that connect them. That conviction still sets the mandate of the office and the standard every platform is held to.",
];

export const FACTS: { label: string; value: string }[] = [
  { label: "Reports to", value: "Board of Directors" },
  { label: "Mandate", value: "Group strategy & capital" },
  { label: "Focus", value: "Build, invest, scale" },
  { label: "Reach", value: "African roots · global mandate" },
];

export const REMIT: { no: string; label: string; copy: string }[] = [
  {
    no: "01",
    label: "Group strategy",
    copy: "Sets the direction and holds every platform to it.",
  },
  {
    no: "02",
    label: "Capital & platforms",
    copy: "Decides where capital goes and which platforms are built or scaled.",
  },
  {
    no: "03",
    label: "Partnerships",
    copy: "Leads the relationships the group depends on across markets.",
  },
  {
    no: "04",
    label: "Culture & standards",
    copy: "Owns conduct, the operating standard and the group's public word.",
  },
];

export interface StructureLink {
  no: string;
  name: string;
  remit: string;
  copy: string;
  href: string;
  status: string;
}

export const STRUCTURES: StructureLink[] = [
  {
    no: "01",
    name: "Board",
    remit: "Oversight & capital approval",
    copy: "Sets the mandate, approves capital and holds the executive to account.",
    href: "/leadership/board",
    status: "Formally constituted",
  },
  {
    no: "02",
    name: "Advisory Council",
    remit: "Independent challenge",
    copy: "Brings outside expertise and independent challenge to strategy, markets and risk.",
    href: "/leadership/advisory-investment-committees",
    status: "Formally constituted",
  },
  {
    no: "03",
    name: "Investment Committee",
    remit: "Investment review",
    copy: "Tests investment cases, structuring routes and commitments before they reach decision.",
    href: "/leadership/advisory-investment-committees",
    status: "Formally constituted",
  },
  {
    no: "04",
    name: "Executive Management",
    remit: "Delivery & operations",
    copy: "Runs the platforms day to day inside a delegated mandate.",
    href: "/leadership/executive-leadership",
    status: "Formally constituted",
  },
];

export const RELATED: { label: string; copy: string; href: string }[] = [
  {
    label: "The Board",
    copy: "The body that holds the mandate the Founder executes.",
    href: "/leadership/board",
  },
  {
    label: "Executive Management",
    copy: "The team running the platforms day to day.",
    href: "/leadership/executive-leadership",
  },
  {
    label: "Governance",
    copy: "How decisions, oversight and claims are controlled.",
    href: "/about/governance",
  },
];
