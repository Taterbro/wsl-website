import type { Metadata } from "next";
import { getLogisticsSupplyChainsPage } from "@/lib/cms/generated";

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

export default async function LogisticsSupplyChainsPage() {
  const data = await getLogisticsSupplyChainsPage();

  return (
    <main>
      <SectorHero data={data.sector_hero} />
      <CorridorMap data={data.corridor_map} />
      <ProofStrip data={data.proof_strip} />
      <CorridorStack data={data.corridor_stack} />
      <RelatedSectors data={data.related_sectors} />
      <RelatedProjects data={data.related_projects} />
      <SectorConversion data={data.sector_conversion} />
    </main>
  );
}
