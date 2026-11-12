import type { Metadata } from "next";
import type { Project as CmsProject } from "@/lib/cms/generated";
import { getDevelopmentPipelinePage } from "@/lib/cms/generated";
import {
  getPipelineProjects,
  type OpportunityType,
  type Project as LegacyProject,
  type ProjectStage,
} from "@/lib/projects";
import PipelineHeader from "./_components/pipeline-header";
import PipelineBoard from "./_components/pipeline-board";
import PipelineGeography from "./_components/pipeline-geography";
import PipelineCta from "./_components/pipeline-cta";

export const metadata: Metadata = {
  title: "Development Pipeline — Projects — Waterlight Group",
  description:
    "Waterlight projects in preparation, from concept through financing, shown as a staged development board. Public summaries only.",
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

function toPipelineProject(
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
    impactArea: legacy?.impactArea ?? [],
    access: legacy?.access ?? "public",
    investmentStatus: legacy?.investmentStatus ?? "Not currently open",
    flagship: legacy?.flagship ?? false,
    placeholder: legacy?.placeholder ?? true,
    image: legacy?.image ?? "",
    alt: item.background?.alt || item.background_alt || legacy?.alt || "",
    problem: item.problem || legacy?.problem || "",
    solution: item.solution || legacy?.solution || "",
    technology: legacy?.technology ?? [],
    sdgs: legacy?.sdgs ?? [],
    media: legacy?.media ?? [],
  };
}

export default async function DevelopmentPipelinePage() {
  const data = await getDevelopmentPipelinePage();
  const legacyProjects = getPipelineProjects();
  const projects = data.pipeline_board.projects.length
    ? data.pipeline_board.projects.map((project, index) =>
        toPipelineProject(project, index, legacyProjects)
      )
    : legacyProjects;

  return (
    <main>
      <PipelineHeader data={data.pipeline_header} projects={projects} />
      <PipelineBoard data={data.pipeline_board} projects={projects} />
      <PipelineGeography data={data.pipeline_geography} projects={projects} />
      <PipelineCta data={data.pipeline_cta} />
    </main>
  );
}
