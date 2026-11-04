import type { Metadata } from "next";
import SectorHero from "./_components/sector-hero";
import CapabilityLine from "./_components/capability-line";
import ProofStrip from "./_components/proof-strip";
import Localisation from "./_components/localisation";
import RelatedSectors from "./_components/related-sectors";
import RelatedProjects from "./_components/related-projects";
import SectorConversion from "./_components/sector-conversion";

export const metadata: Metadata = {
  title: "Industrial Development — Our Businesses — Waterlight Group",
  description:
    "Manufacturing, processing and localisation that move value creation closer to demand. Explore Waterlight Group's industrial facilities, equipment and partnership capabilities.",
};

export default function IndustrialDevelopmentPage() {
  return (
    <main>
      <SectorHero />
      <CapabilityLine />
      <ProofStrip />
      <Localisation />
      <RelatedSectors />
      <RelatedProjects />
      <SectorConversion />
    </main>
  );
}
