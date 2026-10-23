import type { Metadata } from "next";
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

export default function RenewableEnergyPage() {
  return (
    <main>
      <SectorHero />
      <CapabilityDeck />
      <ProofStrip />
      <EnergyCycle />
      <RelatedSectors />
      <RelatedProjects />
      <SectorConversion />
    </main>
  );
}
