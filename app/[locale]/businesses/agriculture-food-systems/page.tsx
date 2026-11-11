import type { Metadata } from "next";
import { getAgricultureFoodSystemsPage } from "@/lib/cms/generated";

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

export default async function AgricultureFoodSystemsPage() {
  const data = await getAgricultureFoodSystemsPage();

  return (
    <main>
      <SectorHero data={data.sector_hero} />
      <CapabilityJourney data={data.capability_journey} />
      <ProofStrip data={data.proof_strip} />
      <RoleInPlatform data={data.role_in_platform} />
      <RelatedSectors data={data.related_sectors} />
      <RelatedProjects data={data.related_projects} />
      <SectorConversion data={data.sector_conversion} />
    </main>
  );
}
