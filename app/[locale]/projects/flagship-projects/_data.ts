import type { ProjectStage } from "@/lib/projects";

export const STAGE_ORDER: ProjectStage[] = [
  "Concept",
  "Development",
  "Investment Ready",
  "Financing",
  "Construction",
  "Operational",
];

// PLACEHOLDER: SDG labels are standard UN names; project mappings must be approved.
export const SDG_LABELS: Record<number, string> = {
  2: "Zero Hunger",
  6: "Clean Water and Sanitation",
  8: "Decent Work and Economic Growth",
  9: "Industry, Innovation and Infrastructure",
  11: "Sustainable Cities and Communities",
  13: "Climate Action",
};
