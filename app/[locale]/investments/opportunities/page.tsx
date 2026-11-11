import type { Metadata } from "next";
import { Suspense } from "react";
import {
  getOpportunitiesPage,
  type OpportunitiesOpportunitiesGrid,
} from "@/lib/cms/generated";
import {
  getProjects as getLegacyProjects,
  type Project as LegacyProject,
} from "@/lib/projects";
import OpportunitiesHero from "./_components/opportunities-hero";
import OpportunitiesGrid from "./_components/opportunities-grid";
import OpportunitiesCta from "./_components/opportunities-cta";

export const metadata: Metadata = {
  title: "Opportunities — Investments — Waterlight Group",
  description:
    "Approved summaries of selected Waterlight opportunities across priority sectors. Full details are gated and available on request following review.",
};

function toLegacyProject(
  project: OpportunitiesOpportunitiesGrid["projects"][number],
): LegacyProject {
  return {
    id: String(project.id),
    slug: project.slug,
    name: project.title || project.postTitle,
    summary: project.description,
    sectorSlug: project.sector,
    country: project.country,
    region: project.region,
    investmentSize: project.investment_size,
    stage: project.stage as LegacyProject["stage"],
    opportunityType: project.opportunity as LegacyProject["opportunityType"],
    impactArea: project.impact_area
      .split(",")
      .map((area) => area.trim())
      .filter(Boolean),
    access: project.access.toLowerCase() === "public" ? "public" : "gated",
    investmentStatus:
      project.investment_status as LegacyProject["investmentStatus"],
    flagship: false,
    placeholder: false,
    image: project.background?.url ?? "",
    alt: project.background?.alt || project.background_alt,
    problem: project.problem,
    solution: project.solution,
    technology: project.technology
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
    sdgs: project.sdgs
      .split(",")
      .map((value) => Number(value.trim()))
      .filter(
        (value) => Number.isInteger(value) && value >= 1 && value <= 17,
      ) as LegacyProject["sdgs"],
    media: project.background
      ? [
          {
            type: "image",
            src: project.background.url,
            alt: project.background.alt || project.background_alt,
          },
        ]
      : [],
  };
}

export default async function OpportunitiesPage() {
  const data = await getOpportunitiesPage();
  const cmsProjects = data.opportunities_grid.projects;
  const projects = cmsProjects.length
    ? cmsProjects.map(toLegacyProject)
    : getLegacyProjects();

  return (
    <main>
      <OpportunitiesHero data={data.opportunities_hero} />
      <Suspense fallback={<div className="py-16 text-center text-muted-foreground">Loading opportunities…</div>}>
        <OpportunitiesGrid data={data.opportunities_grid} projects={projects} />
      </Suspense>
      <OpportunitiesCta data={data.opportunities_cta} />
    </main>
  );
}
