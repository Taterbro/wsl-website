import type { Metadata } from "next";
import { getRealEstateUrbanInfrastructurePage } from "@/lib/cms/generated";

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

export default async function RealEstateUrbanInfrastructurePage() {
  const data = await getRealEstateUrbanInfrastructurePage();

  return (
    <main>
      <SectorHero data={data.sector_hero} />
      <CityZones data={data.city_zones} />
      <ProofStrip data={data.proof_strip} />
      <DistrictLifecycle data={data.district_lifecycle} />
      <RelatedSectors data={data.related_sectors} />
      <RelatedProjects data={data.related_projects} />
      <SectorConversion data={data.sector_conversion} />
    </main>
  );
}
