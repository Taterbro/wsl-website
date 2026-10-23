import type { Metadata } from "next";
import SectorHero from "./_components/sector-hero";
import CircularLoop from "./_components/circular-loop";
import ProofStrip from "./_components/proof-strip";
import AssetLifecycle from "./_components/asset-lifecycle";
import RelatedSectors from "./_components/related-sectors";
import RelatedProjects from "./_components/related-projects";
import SectorConversion from "./_components/sector-conversion";

export const metadata: Metadata = {
  title: "Climate & ESG Solutions — Our Businesses — Waterlight Group",
  description:
    "Resilience, resource efficiency and clean technologies embedded in every asset. Explore Waterlight Group's climate, circular-economy and sustainable-investment capabilities.",
};

export default function ClimateEsgSolutionsPage() {
  return (
    <main>
      <SectorHero />
      <CircularLoop />
      <ProofStrip />
      <AssetLifecycle />
      <RelatedSectors />
      <RelatedProjects />
      <SectorConversion />
    </main>
  );
}
