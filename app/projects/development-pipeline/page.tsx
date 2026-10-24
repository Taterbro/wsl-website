import type { Metadata } from "next";
import { getPipelineProjects } from "@/lib/projects";
import PipelineHeader from "./_components/pipeline-header";
import PipelineBoard from "./_components/pipeline-board";
import PipelineGeography from "./_components/pipeline-geography";
import PipelineCta from "./_components/pipeline-cta";

export const metadata: Metadata = {
  title: "Development Pipeline — Projects — Waterlight Group",
  description:
    "Waterlight projects in preparation, from concept through financing, shown as a staged development board. Public summaries only.",
};

export default function DevelopmentPipelinePage() {
  const projects = getPipelineProjects();

  return (
    <main>
      <PipelineHeader projects={projects} />
      <PipelineBoard projects={projects} />
      <PipelineGeography projects={projects} />
      <PipelineCta />
    </main>
  );
}
