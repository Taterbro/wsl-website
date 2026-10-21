export const ADVISORY_INTRO = {
  office: "Advisory & Investment Committees",
  strap: "Formally constituted, non-executive challenge",
  // PLACEHOLDER — committee formation, mandates, membership and chairs are
  // indicative and published only once formally constituted, approved and
  // current. No names, titles or affiliations appear until confirmed by
  // HR/corporate and the relevant governance process.
  summary:
    "Advisory and investment committees bring outside expertise to the group's hardest decisions. They are formally constituted, non-executive bodies — appointed to challenge, test and advise, never to run the business. This page describes their mandates and how they are constituted, not who currently serves.",
} as const;

export interface CommitteeCharter {
  key: string;
  name: string;
  verdict: string;
  mandate: string;
  judge: string;
  composition: string;
  outputs: string[];
  status: string;
}

// PLACEHOLDER — both committee mandates describe the intended framework and
// must be reconciled with the approved charters before publication.
export const CHARTERS: CommitteeCharter[] = [
  {
    key: "advisory",
    name: "Advisory Committee",
    verdict: "Advise & challenge",
    mandate:
      "Advises on strategy, market entry, sector depth and the risks the group may be under-weighting, drawing on expertise outside the executive.",
    judge:
      "Judged on the quality and independence of the challenge it brings to the Board and executive.",
    composition:
      "Senior practitioners and specialists appointed for relevant expertise, standing and independence.",
    outputs: [
      "Strategic and market advice",
      "Sector and technical perspective",
      "Risk and challenge notes",
      "Introductions within mandate",
    ],
    status: "Constituted and published only as formally appointed",
  },
  {
    key: "investment",
    name: "Investment Committee",
    verdict: "Test & recommend",
    mandate:
      "Examines investment cases, structuring approaches and capital commitments, and recommends approval or rejection to the Board within its mandate.",
    judge:
      "Judged on the rigour of its review and the discipline it applies to commitment thresholds.",
    composition:
      "Directors and senior finance and structuring practitioners with relevant deal and sector experience.",
    outputs: [
      "Investment case review",
      "Structuring and instrument test",
      "Commitment threshold check",
      "Recommendation to the Board",
    ],
    status: "Constituted and published only as formally appointed",
  },
];

export interface Criterion {
  key: string;
  no: string;
  title: string;
  copy: string;
}

// PLACEHOLDER — constitution criteria are indicative and must be confirmed
// against the approved terms of reference and appointments policy.
export const CRITERIA: Criterion[] = [
  {
    key: "relevance",
    no: "01",
    title: "Relevant standing",
    copy: "Appointment requires demonstrable expertise and standing in a field the committee actually draws on.",
  },
  {
    key: "independence",
    no: "02",
    title: "Independence",
    copy: "Members must be free of executive role and material related-party interest in the matters they review.",
  },
  {
    key: "term",
    no: "03",
    title: "Fixed, renewable term",
    copy: "Appointments are time-limited and reviewed, so the committee renews rather than calcifies.",
  },
  {
    key: "duty",
    no: "04",
    title: "Duty of care",
    copy: "Members owe the group rigour, confidentiality and a duty to record the substance of the advice given.",
  },
];

export interface ChallengeItem {
  title: string;
  copy: string;
}

// PLACEHOLDER — reflects the group's stated governance intent and must be
// confirmed against the approved terms of reference.
export const CHALLENGE: ChallengeItem[] = [
  {
    title: "Advisory, not executive",
    copy: "Committees hold no executive authority. They inform and test decisions; they never take over management.",
  },
  {
    title: "Outside the executive",
    copy: "Members are drawn from outside the executive, so challenge does not depend on the goodwill of management.",
  },
  {
    title: "Recorded, not anecdotal",
    copy: "The substance of committee input is minuted and attributable, so advice can be traced to the decision it informed.",
  },
  {
    title: "Access to the Board",
    copy: "Committees report into the Board's process, and can escalate a concern regardless of management's view.",
  },
];

export interface FlowStep {
  no: string;
  stage: string;
  copy: string;
}

// PLACEHOLDER — the route from advice to decision is structural and must be
// confirmed against the approved governance framework.
export const FLOW: FlowStep[] = [
  {
    no: "01",
    stage: "Mandate",
    copy: "The Board sets what the committee advises on and what it must never decide.",
  },
  {
    no: "02",
    stage: "Deliberation",
    copy: "The committee examines the matter in depth, drawing on outside expertise and independent challenge.",
  },
  {
    no: "03",
    stage: "Record",
    copy: "Findings, dissent and recommendations are minuted and attributed.",
  },
  {
    no: "04",
    stage: "Escalation",
    copy: "Output reaches the Board or the relevant committee, with the reasoning intact.",
  },
  {
    no: "05",
    stage: "Decision",
    copy: "The Board retains the decision — the committee never approves on its own authority.",
  },
];

export const ADVISORY_ROLES: { role: string; copy: string; href: string }[] = [
  {
    role: "Senior advisers",
    copy: "Practitioners considering whether to serve on a formally constituted, non-executive committee.",
    href: "/careers",
  },
  {
    role: "Institutional investors",
    copy: "Assessing the independence and rigour of the group's challenge and investment review.",
    href: "/investments/investor-relations",
  },
  {
    role: "Governance counterparts",
    copy: "Reviewing committee mandates, terms of reference and how advice reaches decision.",
    href: "/about/governance",
  },
  {
    role: "Media & analysts",
    copy: "Requiring verified, on-record committee information once formally approved.",
    href: "/insights/media",
  },
];
