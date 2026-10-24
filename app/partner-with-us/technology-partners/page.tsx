import type { Metadata } from "next";
import TechnologyPartnersHero from "./_components/technology-partners-hero";
import TechnologyPartnersIntro from "./_components/technology-partners-intro";
import TechnologyPartnersFormSection from "./_components/technology-partners-form-section";

export const metadata: Metadata = {
  title: "Technology Partners — Partner With Us — Waterlight Group",
  description:
    "Technology owners: deployment, localisation and industrial partnerships to scale proven solutions across Africa and connected corridors.",
};

export default function TechnologyPartnersPage() {
  return (
    <main>
      <TechnologyPartnersHero />
      <TechnologyPartnersIntro />
      <TechnologyPartnersFormSection />
    </main>
  );
}
