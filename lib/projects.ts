// PLACEHOLDER — project summaries are illustrative until approved investment data is supplied.
// No confidential investment material; gated items must not expose details client-side.

import { getSector } from "@/lib/businesses";

export type ProjectStage =
  | "Concept"
  | "Development"
  | "Investment Ready"
  | "Financing"
  | "Under Construction"
  | "Operational";

export type OpportunityType = "Equity" | "Debt" | "JV" | "Technology" | "EPC" | "PPP";

export type ProjectAccess = "public" | "gated";

export interface Project {
  id: string;
  slug: string;
  name: string;
  summary: string;
  sectorSlug: string;
  country: string;
  region: string;
  investmentSize: string; // banded range, PLACEHOLDER
  stage: ProjectStage;
  opportunityType: OpportunityType;
  impactArea: string[]; // PLACEHOLDER
  access: ProjectAccess;
  placeholder: boolean;
  image: string;
  alt: string;
}

export const PROJECTS: Project[] = [
  {
    id: "proj-001",
    slug: "instrumented-water-platform",
    name: "Instrumented Water Platform (Placeholder)",
    summary:
      "Solar-powered, instrumented water systems to improve reliability in selected municipalities.",
    sectorSlug: "water-smart-infrastructure",
    country: "Kenya",
    region: "East Africa",
    investmentSize: "$10-25M",
    stage: "Development",
    opportunityType: "JV",
    impactArea: ["Water access", "Resilience"], // PLACEHOLDER
    access: "gated",
    placeholder: true,
    image: "/placeholders/project-water-platform.png",
    alt: "Instrumented water infrastructure at dusk (placeholder image)",
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
    investmentSize: "$15-40M",
    stage: "Investment Ready",
    opportunityType: "Equity",
    impactArea: ["Energy access", "Industrial reliability"], // PLACEHOLDER
    access: "gated",
    placeholder: true,
    image: "/placeholders/project-solar-cluster.png",
    alt: "Solar array and battery storage (placeholder image)",
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
    investmentSize: "$5-15M",
    stage: "Concept",
    opportunityType: "PPP",
    impactArea: ["Food security", "Loss reduction"], // PLACEHOLDER
    access: "gated",
    placeholder: true,
    image: "/placeholders/project-cold-chain.png",
    alt: "Refrigerated logistics facility (placeholder image)",
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getProjectsBySector(sectorSlug: string): Project[] {
  return PROJECTS.filter((project) => project.sectorSlug === sectorSlug);
}

export function getSectorName(sectorSlug: string): string {
  try {
    return getSector(sectorSlug).shortName;
  } catch {
    return sectorSlug;
  }
}
