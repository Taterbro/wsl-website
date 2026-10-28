// PLACEHOLDER — impact data is illustrative until verified metrics and
// supporting documentation are supplied. Nothing in this file is a published
// result. Metrics must carry a method, a reporting period and an owner before
// they leave this module.

export type ImpactMetricKind = "Expected" | "Achieved";

export interface ImpactMetric {
  id: string;
  label: string;
  value: number;
  unit: string;
  period: string;
  methodology: string;
  kind: ImpactMetricKind;
  approved: boolean;
  placeholder: boolean;
}

export interface StatusClaim {
  id: string;
  value: string;
  approved: boolean;
  source: string;
}

export interface SdgFocusArea {
  number: number;
  name: string;
  note: string;
}

export interface ImpactPillar {
  letter: string;
  label: string;
}

export interface IndependentInitiative {
  name: string;
  label: string;
  mandate: string;
  externalSite: string;
  externalSiteConfirmed: boolean;
}

// A separate organisation. Never present it as a commercial subsidiary, a
// group company or a fundraising channel on this site.
export const SAVE_INITIATIVE: IndependentInitiative = {
  name: "Waterlight Save Initiative",
  label: "Independent nonprofit organisation",
  mandate:
    "An independent nonprofit development organisation, with its own mandate, governance and programmes. It is presented separately and is never described as a commercial subsidiary of the group.",
  externalSite: "https://waterlight-save.example",
  externalSiteConfirmed: false,
};

export interface PartnerCategory {
  id: string;
  code: string;
  name: string;
  description: string;
  brings: string[];
  instruments: string[];
  engagement: string;
}

// Categories only. No partner names, logos or agreements are implied.
export const PARTNER_CATEGORIES: PartnerCategory[] = [
  {
    id: "multilateral",
    code: "P-01",
    name: "Multilateral institutions",
    description:
      "International institutions with mandates spanning development finance, climate and infrastructure.",
    brings: [
      "Concessional capital and guarantees",
      "Convening power across markets",
      "Programme design and standards",
    ],
    instruments: ["Blended finance", "Guarantees", "Co-financing"],
    engagement: "Programme design and co-investment",
  },
  {
    id: "development-finance",
    code: "P-02",
    name: "Development finance",
    description:
      "Bilateral and multilateral development finance institutions supporting private-sector development.",
    brings: [
      "Long-tenor debt and political risk cover",
      "Environmental and social standards",
      "Project preparation support",
    ],
    instruments: ["Senior debt", "Mezzanine", "Risk cover"],
    engagement: "Project-level co-lending and structuring",
  },
  {
    id: "ngo",
    code: "P-03",
    name: "Non-governmental organisations",
    description:
      "Independent nonprofits and civil-society organisations with community-level delivery experience.",
    brings: [
      "Local trust and delivery networks",
      "Community insight and participation",
      "Service-delivery experience",
    ],
    instruments: ["Grants", "Technical assistance", "Programme delivery"],
    engagement: "Community engagement and service delivery",
  },
  {
    id: "public-sector",
    code: "P-04",
    name: "Public sector",
    description:
      "National and sub-national governments, utilities and public agencies responsible for essential services.",
    brings: [
      "Mandate and regulatory authority",
      "Land, offtake and enabling environment",
      "Public-service delivery obligations",
    ],
    instruments: ["PPP", "Concession", "Offtake agreement"],
    engagement: "Project delivery and enabling environment",
  },
  {
    id: "research",
    code: "P-05",
    name: "Research institutions",
    description:
      "Universities, technical institutes and applied research bodies working on infrastructure, climate and skills.",
    brings: [
      "Evidence and technology validation",
      "Applied research and pilot design",
      "Technical skills and training",
    ],
    instruments: ["Research collaboration", "Pilots", "Skills programmes"],
    engagement: "Technology validation and capability building",
  },
];

// Status claims are omitted from the HTML unless approved === true. Wording
// must match current supporting documentation exactly. No third-party marks.
export const STATUS_CLAIMS: StatusClaim[] = [
  {
    id: "nonprofit-status",
    value: "Nonprofit status — wording pending documentation",
    approved: false,
    source: "Waterlight Save Initiative — to be confirmed",
  },
  {
    id: "ecosoc-status",
    value: "International recognition — wording pending documentation",
    approved: false,
    source: "Waterlight Save Initiative — to be confirmed",
  },
];

export function getApprovedStatusClaims(): StatusClaim[] {
  return STATUS_CLAIMS.filter((claim) => claim.approved === true);
}

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: "jobs",
    label: "Jobs supported",
    value: 1240,
    unit: "direct & indirect",
    period: "Reporting period to be confirmed",
    methodology: "Project-level HR and contractor records",
    kind: "Expected",
    approved: false,
    placeholder: true,
  },
  {
    id: "access",
    label: "People reached by service",
    value: 480000,
    unit: "people",
    period: "Reporting period to be confirmed",
    methodology: "Service coverage and connection data",
    kind: "Expected",
    approved: false,
    placeholder: true,
  },
  {
    id: "water",
    label: "Water capacity built",
    value: 85000,
    unit: "m³ / day",
    period: "Reporting period to be confirmed",
    methodology: "Installed capacity, independently verified",
    kind: "Expected",
    approved: false,
    placeholder: true,
  },
  {
    id: "energy",
    label: "Clean generation capacity",
    value: 40,
    unit: "MW",
    period: "Reporting period to be confirmed",
    methodology: "Commissioned capacity, metered output",
    kind: "Expected",
    approved: false,
    placeholder: true,
  },
];

export const SDG_FOCUS_AREAS: SdgFocusArea[] = [
  {
    number: 6,
    name: "Clean water & sanitation",
    note: "Water & smart infrastructure",
  },
  {
    number: 7,
    name: "Affordable & clean energy",
    note: "Renewable energy",
  },
  {
    number: 8,
    name: "Decent work & economic growth",
    note: "Industrial development",
  },
  {
    number: 9,
    name: "Industry, innovation & infrastructure",
    note: "Infrastructure & technology",
  },
  {
    number: 11,
    name: "Sustainable cities & communities",
    note: "Real estate & urban infrastructure",
  },
  {
    number: 12,
    name: "Responsible consumption & production",
    note: "Circular economy",
  },
  {
    number: 13,
    name: "Climate action",
    note: "Climate & ESG solutions",
  },
];

// PLACEHOLDER — framing line to be approved by the owner.
export const IHEAL_FRAMING =
  "A development and impact framework that informs how Waterlight approaches opportunities. Not every Waterlight company undertakes every activity.";

// Exact wording. Pillars are not sequential and are not mapped to sectors,
// subsidiaries or named companies.
export const IMPACT_PILLARS: ImpactPillar[] = [
  { letter: "I", label: "Innovation, Income & Infrastructure" },
  { letter: "H", label: "Healthcare & Hygiene" },
  { letter: "E", label: "Education & Empowerment" },
  { letter: "A", label: "Agriculture, Access to Food & Clean Water" },
  {
    letter: "L",
    label: "Living Standards, Leadership & Livelihood Opportunities",
  },
];
