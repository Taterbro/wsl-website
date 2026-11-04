import type { Metadata } from "next";
import SectorHero from "./_components/sector-hero";
import CapabilityJourney from "./_components/capability-journey";
import ProofStrip from "./_components/proof-strip";
import RoleInPlatform from "./_components/role-in-platform";
import RelatedSectors from "./_components/related-sectors";
import RelatedProjects from "./_components/related-projects";
import SectorConversion from "./_components/sector-conversion";

export const metadata: Metadata = {
  title: "Agriculture & Food Systems — Our Businesses — Waterlight Group",
  description:
    "Field-to-market infrastructure that reduces loss and strengthens food security. Explore Waterlight Group's agriculture, processing, cold-chain and climate-smart capabilities.",
};

export default function AgricultureFoodSystemsPage() {
  return (
    <main>
      <SectorHero />
      <CapabilityJourney />
      <ProofStrip />
      <RoleInPlatform />
      <RelatedSectors />
      <RelatedProjects />
      <SectorConversion />
    </main>
  );
}
