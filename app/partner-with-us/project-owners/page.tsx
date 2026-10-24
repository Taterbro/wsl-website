import type { Metadata } from "next";
import ProjectOwnersHero from "./_components/project-owners-hero";
import ProjectOwnersIntro from "./_components/project-owners-intro";
import ProjectOwnersFormSection from "./_components/project-owners-form-section";

export const metadata: Metadata = {
  title: "Project Owners — Partner With Us — Waterlight Group",
  description:
    "Project sponsors: capital, structuring and delivery capability for bankable projects across Africa and connected corridors.",
};

export default function ProjectOwnersPage() {
  return (
    <main>
      <ProjectOwnersHero />
      <ProjectOwnersIntro />
      <ProjectOwnersFormSection />
    </main>
  );
}
