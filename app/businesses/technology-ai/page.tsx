import type { Metadata } from "next";
import TechHero from "./_components/tech-hero";
import TechStack from "./_components/tech-stack";
import TechSectorRail from "./_components/tech-sector-rail";
import TechFlagship from "./_components/tech-flagship";
import TechConversion from "./_components/tech-conversion";

export const metadata: Metadata = {
  title: "Technology & AI — Waterlight Group",
  description:
    "AI, digital platforms, smart infrastructure, data systems, automation and fintech from Waterlight Group: the four-layer technology stack, where it deploys, and the flagship WSWIS platform.",
};

export default function TechnologyAiPage() {
  return (
    <main>
      <TechHero />
      <TechStack />
      <TechSectorRail />
      <TechFlagship />
      <TechConversion />
    </main>
  );
}
