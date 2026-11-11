import type { Metadata } from "next";
import { getProjectDevelopmentPage } from "@/lib/cms/generated/pages/project-development";
import ProjectDevelopmentHero from "./_components/project-development-hero";
import DevelopmentProcess from "./_components/development-process";
import DevelopmentCapabilities from "./_components/development-capabilities";
import ProjectDevelopmentCta from "./_components/project-development-cta";

export const metadata: Metadata = {
  title: "Project Development — Investments — Waterlight Group",
  description:
    "Waterlight develops bankable infrastructure and industrial projects from origination through structuring, mobilisation and execution readiness across Africa and global markets.",
};

export default async function ProjectDevelopmentPage() {
  const data = await getProjectDevelopmentPage();

  return (
    <main>
      <ProjectDevelopmentHero data={data.project_development_hero} />
      <DevelopmentProcess data={data.development_process} />
      <DevelopmentCapabilities data={data.development_capabilities} />
      <ProjectDevelopmentCta data={data.project_development_cta} />
    </main>
  );
}
