import type { Metadata } from "next";
import SectorHero from "./_components/sector-hero";
import CapabilitySystem from "./_components/capability-system";
import ProofStrip from "./_components/proof-strip";
import RoleInPlatform from "./_components/role-in-platform";
import RelatedSectors from "./_components/related-sectors";
import VisionConversion from "../../about/vision-mission/_components/vision-conversion";

export const metadata: Metadata = {
  title: "Water & Smart Infrastructure — Our Businesses — Waterlight Group",
  description:
    "Solar-powered, instrumented water systems built for reliable access. WSWIS integrates treatment, storage, distribution and AI monitoring across municipal, commercial and industrial needs.",
};

export default function WaterSmartInfrastructurePage() {
  return (
    <main>
      <SectorHero />
      <CapabilitySystem />
      <ProofStrip />
      <RoleInPlatform />
      <RelatedSectors />
      <VisionConversion />
    </main>
  );
}
