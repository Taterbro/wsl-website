import type { Metadata } from "next";
import SectorHero from "./_components/sector-hero";
import CorridorMap from "./_components/corridor-map";
import ProofStrip from "./_components/proof-strip";
import CorridorStack from "./_components/corridor-stack";
import RelatedSectors from "./_components/related-sectors";
import RelatedProjects from "./_components/related-projects";
import SectorConversion from "./_components/sector-conversion";

export const metadata: Metadata = {
  title:
    "Logistics & Supply Chains — Our Businesses — Waterlight Group",
  description:
    "Warehousing, distribution and cross-border trade corridors that connect production to demand. Explore Waterlight Group's logistics and supply-chain capabilities.",
};

export default function LogisticsSupplyChainsPage() {
  return (
    <main>
      <SectorHero />
      <CorridorMap />
      <ProofStrip />
      <CorridorStack />
      <RelatedSectors />
      <RelatedProjects />
      <SectorConversion />
    </main>
  );
}
