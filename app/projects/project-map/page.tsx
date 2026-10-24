import type { Metadata } from "next";
import { getProjects } from "@/lib/projects";
import MapHeader from "./_components/map-header";
import ProjectMap from "./_components/project-map";
import MapIndex from "./_components/map-index";
import MapCta from "./_components/map-cta";

export const metadata: Metadata = {
  title: "Project Map — Projects — Waterlight Group",
  description:
    "A country-level view of approved Waterlight project markets and strategic target markets. Presence is never implied without verification.",
};

export default function ProjectMapPage() {
  const projects = getProjects();

  return (
    <main>
      <MapHeader />
      <ProjectMap projects={projects} />
      <MapIndex projects={projects} />
      <MapCta />
    </main>
  );
}
