import type { Metadata } from "next";
import UrbanHero from "./_components/urban-hero";
import DistrictPlan from "./_components/district-plan";
import UrbanProgramme from "./_components/urban-programme";
import UrbanScale from "./_components/urban-scale";
import UrbanConversion from "./_components/urban-conversion";

export const metadata: Metadata = {
  title: "Real Estate & Urban Infrastructure — Waterlight Group",
  description:
    "Affordable housing, commercial development, smart-city infrastructure and sustainable buildings from Waterlight Group — district masterplanning, delivery programmes and partnership routes.",
};

export default function RealEstateUrbanInfrastructurePage() {
  return (
    <main>
      <UrbanHero />
      <DistrictPlan />
      <UrbanProgramme />
      <UrbanScale />
      <UrbanConversion />
    </main>
  );
}
