import type { Metadata } from "next";
import { Suspense } from "react";
import type { Project as CmsProject } from "@/lib/cms/generated";
import { getPortfolioPage } from "@/lib/cms/generated";
import {
  getProjects,
  type InvestmentStatus,
  type OpportunityType,
  type Project as LegacyProject,
  type ProjectStage,
  type Sdg,
} from "@/lib/projects";
import PortfolioHeader from "./_components/portfolio-header";
import PortfolioGrid from "./_components/portfolio-grid";
import PortfolioRoutes from "./_components/portfolio-routes";
import PortfolioCta from "./_components/portfolio-cta";

export const metadata: Metadata = {
  title: "Portfolio — Projects — Waterlight Group",
  description:
    "Explore selected Waterlight projects by sector, country, development stage and opportunity type. Approved summaries only; full detail is available on request.",
};

const PROJECT_STAGES: ProjectStage[] = [
  "Concept",
  "Development",
  "Investment Ready",
  "Financing",
  "Construction",
  "Operational",
];

const OPPORTUNITY_TYPES: OpportunityType[] = [
  "Equity",
  "Debt",
  "JV",
  "Technology",
  "EPC",
  "PPP",
  "Strategic Partner",
];

const INVESTMENT_STATUSES: InvestmentStatus[] = [
  "Open to enquiries",
  "Partners sought",
  "Not currently open",
];

function toProjectStage(value: string, fallback: ProjectStage): ProjectStage {
  return (
    PROJECT_STAGES.find(
      (stage) => stage.toLowerCase() === value.toLowerCase()
    ) ?? fallback
  );
}

function toOpportunityType(
  value: string,
  fallback: OpportunityType
): OpportunityType {
  return (
    OPPORTUNITY_TYPES.find(
      (type) => type.toLowerCase() === value.toLowerCase()
    ) ?? fallback
  );
}

function toInvestmentStatus(
  value: string,
  fallback: InvestmentStatus
): InvestmentStatus {
  return (
    INVESTMENT_STATUSES.find(
      (status) => status.toLowerCase() === value.toLowerCase()
    ) ?? fallback
  );
}

function toList(value: string): string[] {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function toSdgs(value: string): Sdg[] {
  return toList(value)
    .map(Number)
    .filter((sdg): sdg is Sdg => Number.isInteger(sdg) && sdg >= 1 && sdg <= 17);
}

function toPortfolioProject(
  item: CmsProject,
  index: number,
  legacyProjects: LegacyProject[]
): LegacyProject {
  const legacy =
    legacyProjects.find((project) => project.slug === item.slug) ??
    legacyProjects[index];

  return {
    id: legacy?.id ?? String(item.id),
    slug: item.slug || legacy?.slug || "",
    name: item.title || item.postTitle || legacy?.name || "",
    summary: item.description || legacy?.summary || "",
    sectorSlug: item.sector || legacy?.sectorSlug || "",
    country: item.country || legacy?.country || "",
    region: item.region || legacy?.region || "",
    investmentSize: item.investment_size || legacy?.investmentSize || "",
    stage: toProjectStage(item.stage, legacy?.stage ?? "Concept"),
    opportunityType: toOpportunityType(
      item.opportunity,
      legacy?.opportunityType ?? "Equity"
    ),
    impactArea: toList(item.impact_area),
    access: item.access === "gated" ? "gated" : "public",
    investmentStatus: toInvestmentStatus(
      item.investment_status,
      legacy?.investmentStatus ?? "Not currently open"
    ),
    flagship: legacy?.flagship ?? false,
    placeholder: legacy?.placeholder ?? true,
    image: item.background?.url || "",
    alt: item.background?.alt || item.background_alt || "",
    problem: item.problem || legacy?.problem || "",
    solution: item.solution || legacy?.solution || "",
    technology: toList(item.technology),
    sdgs: toSdgs(item.sdgs),
    media: legacy?.media ?? [],
  };
}

export default async function ProjectPortfolioPage() {
  const data = await getPortfolioPage();
  const legacyProjects = getProjects();
  const projects = data.portfolio_grid.projects.length
    ? data.portfolio_grid.projects.map((project, index) =>
        toPortfolioProject(project, index, legacyProjects)
      )
    : legacyProjects;

  return (
    <main>
      <PortfolioHeader data={data.portfolio_header} projects={projects} />
      <Suspense
        fallback={
          <div
            role="status"
            className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] py-[clamp(56px,8vw,100px)]"
          >
            <span className="sr-only">Loading portfolio…</span>
            <div className="h-24 animate-pulse rounded-[2px] bg-card motion-reduce:animate-none" />
          </div>
        }
      >
        <PortfolioGrid data={data.portfolio_grid} projects={projects} />
      </Suspense>
      <PortfolioRoutes data={data.portfolio_routes} />
      <PortfolioCta data={data.portfolio_cta} />
    </main>
  );
}
