import type { Metadata } from "next";
import { getTechnologyDigitalInfrastructurePage } from "@/lib/cms/generated";

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

export default async function TechnologyDigitalInfrastructurePage() {
  const data = await getTechnologyDigitalInfrastructurePage();

  return (
    <main>
      <SectorHero data={data.sector_hero} />
      <CapabilityStack data={data.capability_stack} />
      <ProofStrip data={data.proof_strip} />
      <SystemsLayer data={data.systems_layer} />
      <RelatedSectors data={data.related_sectors} />
      <RelatedProjects data={data.related_projects} />
      <SectorConversion data={data.sector_conversion} />
    </main>
  );
}
