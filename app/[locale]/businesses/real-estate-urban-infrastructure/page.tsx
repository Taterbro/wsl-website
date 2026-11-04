import type { Metadata } from "next";
import SectorHero from "./_components/sector-hero";
import CityZones from "./_components/city-zones";
import ProofStrip from "./_components/proof-strip";
import DistrictLifecycle from "./_components/district-lifecycle";
import RelatedSectors from "./_components/related-sectors";
import RelatedProjects from "./_components/related-projects";
import SectorConversion from "./_components/sector-conversion";

export const metadata: Metadata = {
  title: "Real Estate & Urban Infrastructure — Our Businesses — Waterlight Group",
  description:
    "Housing, commercial and urban systems designed for the next century of city growth. Explore Waterlight Group's real estate, smart-city and sustainable-building capabilities.",
};

export default function RealEstateUrbanInfrastructurePage() {
  return (
    <main>
      <SectorHero />
      <CityZones />
      <ProofStrip />
      <DistrictLifecycle />
      <RelatedSectors />
      <RelatedProjects />
      <SectorConversion />
    </main>
  );
}
