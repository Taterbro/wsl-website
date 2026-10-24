import type { ProjectStage } from "@/lib/projects";

export interface PipelineStageDefinition {
  stage: ProjectStage;
  description: string;
}

// PLACEHOLDER: stage descriptions reflect the intended development process and
// require sign-off from the project development team.
export const PIPELINE_STAGES: PipelineStageDefinition[] = [
  {
    stage: "Concept",
    description:
      "Opportunity defined; market, site and feasibility assessment underway.",
  },
  {
    stage: "Development",
    description:
      "Structuring, technical design and partner alignment in progress.",
  },
  {
    stage: "Investment Ready",
    description:
      "Approved summary and information pack prepared for review.",
  },
  {
    stage: "Financing",
    description:
      "Capital and partnership discussions underway before construction.",
  },
];
