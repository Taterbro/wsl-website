// PLACEHOLDER — project data is illustrative until approved investment data is supplied.
// No confidential investment material. Restricted fields are stripped server-side
// by toPublic() and never leave this module. Pages must use getProjects() /
// getProject(slug); the raw records are intentionally not exported.
//
// This module is server-only. Client components may `import type` from here,
// but must receive project data as props from a server component.

import "server-only";

import { getSector } from "@/lib/businesses";

/* ------------------------------------------------------------------ */
/* Types                                                              */
/* ------------------------------------------------------------------ */

export type ProjectStage =
  | "Concept"
  | "Development"
  | "Investment Ready"
  | "Financing"
  | "Construction"
  | "Operational";

export type OpportunityType =
  | "Equity"
  | "Debt"
  | "JV"
  | "Technology"
  | "EPC"
  | "PPP"
  | "Strategic Partner";

export type ProjectAccess = "public" | "gated";

// PLACEHOLDER: values to be confirmed by the client.
export type InvestmentStatus =
  | "Open to enquiries"
  | "Partners sought"
  | "Not currently open";

export type Sdg =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17;

export interface ProjectMedia {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string; // video only
}

/** A value that may only be published once it has been approved (see design doc §18). */
export interface ApprovedField<T> {
  value: T;
  approved: boolean;
}

/** Internal record. Never exported or sent to the client as-is. */
interface ProjectRecord {
  id: string;
  slug: string;
  name: string;
  summary: string;
  sectorSlug: string; // must be a slug from lib/businesses.ts
  country: string;
  region: string;
  investmentSize: string; // banded range, PLACEHOLDER
  stage: ProjectStage;
  opportunityType: OpportunityType;
  impactArea: string[]; // PLACEHOLDER, to be confirmed by the client
  access: ProjectAccess;
  investmentStatus: InvestmentStatus;
  flagship: boolean;
  placeholder: boolean;
  image: string;
  alt: string;

  // Detail page fields (public)
  problem: string;
  solution: string;
  technology: string[];
  sdgs: Sdg[];
  media: ProjectMedia[];

  // Restricted: published only if access === "public" AND approved === true
  businessModel?: ApprovedField<string>;
  publicValue?: ApprovedField<string>; // public CAPEX range, needs finance/project owner approval
  partners?: ApprovedField<string[]>; // names/logos need written permission
  expectedImpact?: ApprovedField<string>; // "Expected", never verified unless methodology is supplied
}

type RestrictedKey =
  | "businessModel"
  | "publicValue"
  | "partners"
  | "expectedImpact";

/** The only project shape pages ever see. */
export type Project = Omit<ProjectRecord, RestrictedKey> & {
  businessModel?: string;
  publicValue?: string;
  partners?: string[];
  expectedImpact?: string;
};

/* ------------------------------------------------------------------ */
/* Reserved slugs and stage groups                                    */
/* ------------------------------------------------------------------ */

// These collide with /projects/<child> routes.
const RESERVED_SLUGS = [
  "portfolio",
  "project-map",
  "flagship-projects",
  "development-pipeline",
];

const PIPELINE_STAGES: ProjectStage[] = [
  "Concept",
  "Development",
  "Investment Ready",
  "Financing",
];

/* ------------------------------------------------------------------ */
/* Seed data (all PLACEHOLDER)                                        */
/* ------------------------------------------------------------------ */

const RECORDS: ProjectRecord[] = [
  {
    id: "proj-001",
    slug: "instrumented-water-platform",
    name: "Instrumented Water Platform (Placeholder)",
    summary:
      "Solar-powered, instrumented water systems to improve reliability in selected municipalities.",
    sectorSlug: "water-smart-infrastructure",
    country: "Kenya",
    region: "East Africa",
    investmentSize: "$10-25M", // PLACEHOLDER
    stage: "Development",
    opportunityType: "JV",
    impactArea: ["Water access", "Resilience"], // PLACEHOLDER
    access: "gated",
    investmentStatus: "Partners sought", // PLACEHOLDER
    flagship: true, // PLACEHOLDER
    placeholder: true,
    image: "/placeholders/group-sector-water.png",
    alt: "Instrumented water infrastructure at dusk (placeholder image)",
    problem:
      "Unreliable municipal water supply with limited visibility of losses.", // PLACEHOLDER
    solution:
      "Solar-powered treatment and distribution with AI-assisted monitoring.", // PLACEHOLDER
    technology: ["Solar power", "Smart metering", "Predictive maintenance"], // PLACEHOLDER
    sdgs: [6, 9, 11], // PLACEHOLDER
    media: [
      {
        type: "image",
        src: "/placeholders/group-sector-water.png",
        alt: "Instrumented water infrastructure at dusk (placeholder image)",
      },
    ],
    businessModel: { value: "PLACEHOLDER business model", approved: false },
    publicValue: { value: "PLACEHOLDER $10-25M", approved: false },
    partners: { value: ["Partner A (placeholder)"], approved: false },
    expectedImpact: { value: "PLACEHOLDER expected impact", approved: false },
  },
  {
    id: "proj-002",
    slug: "hybrid-solar-storage-cluster",
    name: "Hybrid Solar & Storage Cluster (Placeholder)",
    summary:
      "Distributed solar and storage to power industrial loads with improved reliability.",
    sectorSlug: "renewable-energy",
    country: "Ghana",
    region: "West Africa",
    investmentSize: "$15-40M", // PLACEHOLDER
    stage: "Investment Ready",
    opportunityType: "Equity",
    impactArea: ["Energy access", "Industrial reliability"], // PLACEHOLDER
    access: "gated",
    investmentStatus: "Open to enquiries", // PLACEHOLDER
    flagship: false,
    placeholder: true,
    image: "/placeholders/group-sector-energy.png",
    alt: "Solar array and battery storage (placeholder image)",
    problem:
      "Industrial users face unreliable grid supply and high backup costs.", // PLACEHOLDER
    solution: "Hybrid solar and storage sized to industrial load profiles.", // PLACEHOLDER
    technology: ["Solar PV", "Battery storage", "Energy management"], // PLACEHOLDER
    sdgs: [7, 9, 13], // PLACEHOLDER
    media: [
      {
        type: "image",
        src: "/placeholders/group-sector-energy.png",
        alt: "Solar array and battery storage (placeholder image)",
      },
    ],
    businessModel: { value: "PLACEHOLDER business model", approved: false },
    publicValue: { value: "PLACEHOLDER $15-40M", approved: false },
    partners: { value: ["Partner B (placeholder)"], approved: false },
    expectedImpact: { value: "PLACEHOLDER expected impact", approved: false },
  },
  {
    id: "proj-003",
    slug: "climate-smart-cold-chain",
    name: "Climate-Smart Cold Chain (Placeholder)",
    summary:
      "Modular cold storage to reduce post-harvest loss along selected corridors.",
    sectorSlug: "agriculture-food-systems",
    country: "Rwanda",
    region: "East Africa",
    investmentSize: "$5-15M", // PLACEHOLDER
    stage: "Concept",
    opportunityType: "PPP",
    impactArea: ["Food security", "Loss reduction"], // PLACEHOLDER
    access: "gated",
    investmentStatus: "Partners sought", // PLACEHOLDER
    flagship: false,
    placeholder: true,
    image: "/placeholders/group-sector-agriculture.png",
    alt: "Refrigerated logistics facility (placeholder image)",
    problem: "Significant post-harvest loss due to limited cold storage.", // PLACEHOLDER
    solution: "Modular, solar-assisted cold storage along selected corridors.", // PLACEHOLDER
    technology: ["Modular cold rooms", "Solar assist", "Cold-chain monitoring"], // PLACEHOLDER
    sdgs: [2, 12, 13], // PLACEHOLDER
    media: [
      {
        type: "image",
        src: "/placeholders/group-sector-agriculture.png",
        alt: "Refrigerated logistics facility (placeholder image)",
      },
    ],
    businessModel: { value: "PLACEHOLDER business model", approved: false },
    publicValue: { value: "PLACEHOLDER $5-15M", approved: false },
    partners: { value: ["Partner C (placeholder)"], approved: false },
    expectedImpact: { value: "PLACEHOLDER expected impact", approved: false },
  },
  {
    id: "proj-004",
    slug: "integrated-agro-industrial-zone",
    name: "Integrated Agro-Industrial Zone (Placeholder)",
    summary:
      "A shared processing, cold-chain and utilities zone designed to move value creation closer to production.",
    sectorSlug: "agriculture-food-systems",
    country: "Rwanda",
    region: "East Africa",
    investmentSize: "$20-45M", // PLACEHOLDER
    stage: "Development",
    opportunityType: "PPP",
    impactArea: ["Food security", "Industrial development"], // PLACEHOLDER
    access: "gated",
    investmentStatus: "Partners sought", // PLACEHOLDER
    flagship: true, // PLACEHOLDER
    placeholder: true,
    image: "/placeholders/group-sector-agriculture.png",
    alt: "Agricultural processing and cold-chain infrastructure (placeholder image)",
    problem:
      "Post-harvest losses and fragmented processing capacity limit value capture.", // PLACEHOLDER
    solution:
      "A shared agro-industrial zone combining processing, cold storage and common utilities.", // PLACEHOLDER
    technology: ["Food processing", "Cold-chain infrastructure", "Solar assist"], // PLACEHOLDER
    sdgs: [2, 8, 9], // PLACEHOLDER
    media: [
      {
        type: "image",
        src: "/placeholders/group-sector-agriculture.png",
        alt: "Agricultural processing and cold-chain infrastructure (placeholder image)",
      },
    ],
    businessModel: { value: "PLACEHOLDER business model", approved: false },
    publicValue: { value: "PLACEHOLDER $20-45M", approved: false },
    partners: { value: ["Partner D (placeholder)"], approved: false },
    expectedImpact: { value: "PLACEHOLDER expected impact", approved: false },
  },
  {
    id: "proj-005",
    slug: "industrial-resilience-park",
    name: "Industrial Resilience Park (Placeholder)",
    summary:
      "A serviced manufacturing park with hybrid power and shared industrial utilities.",
    sectorSlug: "industrial-development",
    country: "Ghana",
    region: "West Africa",
    investmentSize: "$30-60M", // PLACEHOLDER
    stage: "Investment Ready",
    opportunityType: "Strategic Partner",
    impactArea: ["Industrial development", "Energy resilience"], // PLACEHOLDER
    access: "gated",
    investmentStatus: "Open to enquiries", // PLACEHOLDER
    flagship: true, // PLACEHOLDER
    placeholder: true,
    image: "/placeholders/group-sector-industry.png",
    alt: "Industrial manufacturing facility (placeholder image)",
    problem:
      "Manufacturers face unreliable power and constrained serviced industrial land.", // PLACEHOLDER
    solution:
      "A serviced park combining hybrid solar-storage and shared industrial utilities.", // PLACEHOLDER
    technology: ["Solar PV", "Battery storage", "Shared utilities"], // PLACEHOLDER
    sdgs: [8, 9, 13], // PLACEHOLDER
    media: [
      {
        type: "image",
        src: "/placeholders/group-sector-industry.png",
        alt: "Industrial manufacturing facility (placeholder image)",
      },
    ],
    businessModel: { value: "PLACEHOLDER business model", approved: false },
    publicValue: { value: "PLACEHOLDER $30-60M", approved: false },
    partners: { value: ["Partner E (placeholder)"], approved: false },
    expectedImpact: { value: "PLACEHOLDER expected impact", approved: false },
  },
];

/* ------------------------------------------------------------------ */
/* Validation (runs once at module load)                              */
/* ------------------------------------------------------------------ */

function validateRecords(records: ProjectRecord[]): void {
  const seen = new Set<string>();
  for (const record of records) {
    if (RESERVED_SLUGS.includes(record.slug)) {
      throw new Error(
        `Project slug "${record.slug}" is reserved by a /projects route.`
      );
    }
    if (seen.has(record.slug)) {
      throw new Error(`Duplicate project slug "${record.slug}".`);
    }
    seen.add(record.slug);
    // Throws if the sector slug does not exist in lib/businesses.ts.
    getSector(record.sectorSlug);
  }
}

validateRecords(RECORDS);

/* ------------------------------------------------------------------ */
/* Sanitising: the only path from record to page                      */
/* ------------------------------------------------------------------ */

function approvedValue<T>(field?: ApprovedField<T>): T | undefined {
  return field?.approved ? field.value : undefined;
}

function toPublic(record: ProjectRecord): Project {
  const {
    businessModel: _businessModel,
    publicValue: _publicValue,
    partners: _partners,
    expectedImpact: _expectedImpact,
    ...rest
  } = record;

  // Gated projects never expose restricted fields, approved or not.
  const isPublic = record.access === "public";
  const businessModel = isPublic
    ? approvedValue(record.businessModel)
    : undefined;
  const publicValue = isPublic ? approvedValue(record.publicValue) : undefined;
  const partners = isPublic ? approvedValue(record.partners) : undefined;
  const expectedImpact = isPublic
    ? approvedValue(record.expectedImpact)
    : undefined;

  return {
    ...rest,
    ...(businessModel !== undefined && { businessModel }),
    ...(publicValue !== undefined && { publicValue }),
    ...(partners !== undefined && { partners }),
    ...(expectedImpact !== undefined && { expectedImpact }),
  };
}

const PUBLIC_PROJECTS: Project[] = RECORDS.map(toPublic);

/* ------------------------------------------------------------------ */
/* Accessors                                                          */
/* ------------------------------------------------------------------ */

export function getProjects(): Project[] {
  return PUBLIC_PROJECTS;
}

export function getProject(slug: string): Project | undefined {
  return PUBLIC_PROJECTS.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return PUBLIC_PROJECTS.map((project) => project.slug);
}

export function getProjectsBySector(sectorSlug: string): Project[] {
  return PUBLIC_PROJECTS.filter((project) => project.sectorSlug === sectorSlug);
}

export function getFlagshipProjects(): Project[] {
  return PUBLIC_PROJECTS.filter((project) => project.flagship);
}

/** Pre-operational stages only: Concept to Financing. */
export function getPipelineProjects(): Project[] {
  return PUBLIC_PROJECTS.filter((project) =>
    PIPELINE_STAGES.includes(project.stage)
  );
}

/** Same sector or same country, excluding the project itself. */
export function getRelatedProjects(slug: string, limit = 3): Project[] {
  const current = getProject(slug);
  if (!current) return [];
  return PUBLIC_PROJECTS.filter(
    (project) =>
      project.slug !== slug &&
      (project.sectorSlug === current.sectorSlug ||
        project.country === current.country)
  ).slice(0, limit);
}

export function getSectorName(sectorSlug: string): string {
  try {
    return getSector(sectorSlug).shortName;
  } catch {
    return sectorSlug;
  }
}
