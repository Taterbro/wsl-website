export const OFFICE = {
  role: "Founder & Group CEO",
  office: "Office of the Founder & Group CEO",
  // PLACEHOLDER — name, title details, biography and portrait must not be
  // published until confirmed by HR/corporate and formally approved.
  name: "Appointed leadership",
} as const;

export const STATEMENT =
  "The value of life is determined by the problems you solve for others.";

export interface MandateItem {
  no: string;
  label: string;
  copy: string;
}

// PLACEHOLDER — remit and priorities describe the intended role profile and
// must be confirmed against the approved role description before publication.
export const MANDATE: MandateItem[] = [
  {
    no: "01",
    label: "Group strategy",
    copy: "Sets the group’s direction and holds every platform to it.",
  },
  {
    no: "02",
    label: "Capital & platforms",
    copy: "Decides where capital goes and which platforms are built, scaled or exited.",
  },
  {
    no: "03",
    label: "Partnerships",
    copy: "Leads the relationships the group depends on across markets and sectors.",
  },
  {
    no: "04",
    label: "Culture & standards",
    copy: "Owns the operating standard, conduct and the group’s public word.",
  },
];

export interface Priority {
  no: string;
  title: string;
  copy: string;
}

// PLACEHOLDER — reflects the group’s published strategy themes, pending the
// Founder’s own approved wording.
export const PRIORITIES: Priority[] = [
  {
    no: "01",
    title: "Water as the first problem",
    copy: "African cities cannot grow without water they can finance, build and maintain. The group started there and still measures itself there.",
  },
  {
    no: "02",
    title: "Build, do not merely buy",
    copy: "Origination and delivery capability — not acquisition of finished assets — is the engine the group invests in.",
  },
  {
    no: "03",
    title: "African roots, global capital",
    copy: "Local understanding paired with international standards of structuring, governance and reporting.",
  },
  {
    no: "04",
    title: "Impact that is measured",
    copy: "Every platform is judged on the lives, livelihoods and services it changes — with evidence, not adjectives.",
  },
  {
    no: "05",
    title: "Institutions, not gestures",
    copy: "Systems that outlast a single founder, a single project or a single funding cycle.",
  },
];

export interface RecordItem {
  year: string;
  title: string;
  copy: string;
}

// PLACEHOLDER — chronology is structural only. Dates, milestones and roles are
// unverified and must be replaced with the approved record before publication.
export const RECORDS: RecordItem[] = [
  {
    year: "Year 1",
    title: "Conviction",
    copy: "An engineering-led response to a single problem: the water African cities could not finance or maintain.",
  },
  {
    year: "Year 2",
    title: "First platforms",
    copy: "The discipline is repeated across energy, agriculture and industrial development.",
  },
  {
    year: "Year 3",
    title: "Capital architecture",
    copy: "Structuring, joint ventures and technology partnerships formalised as an investment platform.",
  },
  {
    year: "Today",
    title: "One group",
    copy: "Eight sectors, four operating companies and a global-facing brand, held to one mandate.",
  },
];

// PLACEHOLDER — speech, media and appearance records must be approved and
// sourced before appearing here.
export const WRITINGS: { kind: string; title: string; href: string }[] = [
  {
    kind: "Speech",
    title: "On building for the problems that matter",
    href: "/insights/perspectives",
  },
  {
    kind: "Interview",
    title: "Africa is now — the case for patient infrastructure",
    href: "/insights/media",
  },
  {
    kind: "Perspective",
    title: "Why water is the first investment",
    href: "/insights/research",
  },
];

export const RELATED: { label: string; copy: string; href: string }[] = [
  {
    label: "Board",
    copy: "The body that holds the mandate the Founder executes.",
    href: "/leadership/board",
  },
  {
    label: "Executive Leadership",
    copy: "The team running the platforms day to day.",
    href: "/leadership/executive-leadership",
  },
  {
    label: "Governance",
    copy: "How decisions, oversight and claims are controlled.",
    href: "/about/governance",
  },
];
