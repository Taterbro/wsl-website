import type { Metadata } from "next";
import { getRenewableEnergyPage } from "@/lib/cms/generated";

import SectorHero from "./_components/sector-hero";
import CapabilityDeck from "./_components/capability-deck";
import ProofStrip from "./_components/proof-strip";
import EnergyCycle from "./_components/energy-cycle";
import RelatedSectors from "./_components/related-sectors";
import RelatedProjects from "./_components/related-projects";
import SectorConversion from "./_components/sector-conversion";

export const metadata: Metadata = {
  title: "Renewable Energy — Our Businesses — Waterlight Group",
  description:
    "Solar, storage and hybrid systems that power industry, infrastructure and communities. Explore Waterlight Group's renewable energy capabilities and project routes.",
};

export default async function RenewableEnergyPage() {
  const data = await getRenewableEnergyPage();

  return (
    <main>
      <SectorHero data={data.sector_hero} />
      <CapabilityDeck data={data.capability_deck} />
      <ProofStrip data={data.proof_strip} />
      <EnergyCycle data={data.energy_cycle} />
      <RelatedSectors data={data.related_sectors} />
      <RelatedProjects data={data.related_projects} />
      <SectorConversion data={data.sector_conversion} />
    </main>
  );
}
