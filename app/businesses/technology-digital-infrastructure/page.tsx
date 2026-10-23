import type { Metadata } from "next";
import SectorHero from "./_components/sector-hero";
import CapabilityStack from "./_components/capability-stack";
import ProofStrip from "./_components/proof-strip";
import SystemsLayer from "./_components/systems-layer";
import RelatedSectors from "./_components/related-sectors";
import RelatedProjects from "./_components/related-projects";
import SectorConversion from "./_components/sector-conversion";

export const metadata: Metadata = {
  title:
    "Technology & Digital Infrastructure — Our Businesses — Waterlight Group",
  description:
    "AI, data and digital platforms that make physical infrastructure measurable and manageable. Explore Waterlight Group's technology, automation and digital transformation capabilities.",
};

export default function TechnologyDigitalInfrastructurePage() {
  return (
    <main>
      <SectorHero />
      <CapabilityStack />
      <ProofStrip />
      <SystemsLayer />
      <RelatedSectors />
      <RelatedProjects />
      <SectorConversion />
    </main>
  );
}
