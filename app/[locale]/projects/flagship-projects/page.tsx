import type { Metadata } from "next";
import Link from "next/link";
import type { Project as CmsProject } from "@/lib/cms/generated";
import { getFlagshipProjectsPage } from "@/lib/cms/generated";
import {
  getFlagshipProjects,
  getProjects,
  getSectorName,
  type InvestmentStatus,
  type OpportunityType,
  type Project as LegacyProject,
  type ProjectStage,
  type Sdg,
} from "@/lib/projects";
import FlagshipHeader from "./_components/flagship-header";
import FlagshipShowcase from "./_components/flagship-showcase";
import FlagshipDossier from "./_components/flagship-dossier";
import FlagshipRoutes from "./_components/flagship-routes";
import FlagshipCta from "./_components/flagship-cta";

export const metadata: Metadata = {
  title: "Flagship Projects — Projects — Waterlight Group",
  description:
    "Selected Waterlight flagship projects with defined infrastructure, a clear development path and a partner need. Public summaries only.",
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

function toFlagshipProject(
  item: CmsProject,
  index: number,
  legacyFlagships: LegacyProject[]
): LegacyProject {
  const legacy =
    legacyFlagships.find((project) => project.slug === item.slug) ??
    legacyFlagships[index];

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
    flagship: legacy?.flagship ?? true,
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

export default async function FlagshipProjectsPage() {
  const data = await getFlagshipProjectsPage();
  const legacyFlagships = getFlagshipProjects();
  const projects = getProjects();
  const flagships = data.flagship_showcase.projects.length
    ? data.flagship_showcase.projects.map((project, index) =>
        toFlagshipProject(project, index, legacyFlagships)
      )
    : legacyFlagships;
  const lead = flagships[0];
  const marketCount = new Set(projects.map((project) => project.country)).size;

  return (
    <main>
      <FlagshipHeader data={data.flagship_header} count={flagships.length} />

      {lead ? (
        <>
          <FlagshipShowcase flagships={flagships} />
          <FlagshipDossier
            data={data.flagship_dossier}
            project={lead}
            sectorName={getSectorName(lead.sectorSlug)}
          />
        </>
      ) : (
        <section className="bg-background py-[clamp(56px,8vw,104px)]">
          <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
            <div className="border border-border bg-card/40 p-10 text-center">
              <p className="font-sans text-[1.2rem] font-bold uppercase [font-stretch:112%]">
                No flagship projects are published yet
              </p>
              <p className="mx-auto mt-2 max-w-[52ch] text-[0.95rem] leading-[1.6] text-muted-foreground">
                Browse the full portfolio for approved project summaries.
              </p>
              <Link
                href="/projects/portfolio"
                className="mt-5 inline-flex rounded-[2px] border border-primary/40 px-4 py-2 font-sans text-[0.78rem] font-semibold tracking-[0.06em] text-primary uppercase transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                View portfolio
              </Link>
            </div>
          </div>
        </section>
      )}

      <FlagshipRoutes
        projectCount={projects.length}
        marketCount={marketCount}
      />
      <FlagshipCta data={data.flagship_cta} project={lead} />
    </main>
  );
}
