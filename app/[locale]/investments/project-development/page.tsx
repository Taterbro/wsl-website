import type { Metadata } from "next";
import ProjectDevelopmentHero from "./_components/project-development-hero";
import DevelopmentProcess from "./_components/development-process";
import DevelopmentCapabilities from "./_components/development-capabilities";
import ProjectDevelopmentCta from "./_components/project-development-cta";

export const metadata: Metadata = {
  title: "Project Development — Investments — Waterlight Group",
  description:
    "Waterlight develops bankable infrastructure and industrial projects from origination through structuring, mobilisation and execution readiness across Africa and global markets.",
};

export default function ProjectDevelopmentPage() {
  return (
    <main>
      <ProjectDevelopmentHero />
      <DevelopmentProcess />
      <DevelopmentCapabilities />
      <ProjectDevelopmentCta />
    </main>
  );
}
