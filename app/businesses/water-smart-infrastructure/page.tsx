import type { Metadata } from "next";
import WaterHero from "./_components/water-hero";
import WaterThesis from "./_components/water-thesis";
import WaterSystem from "./_components/water-system";
import WaterCapabilities from "./_components/water-capabilities";
import WaterApplications from "./_components/water-applications";
import WaterPrinciples from "./_components/water-principles";
import WaterConversion from "./_components/water-conversion";

export const metadata: Metadata = {
  title: "Water & Smart Infrastructure — Waterlight Group",
  description:
    "Solar-powered, instrumented water infrastructure from Waterlight Group: source, treatment, storage, distribution, digital monitoring and predictive maintenance for cities, industry and communities.",
};

export default function WaterSmartInfrastructurePage() {
  return (
    <main>
      <WaterHero />
      <WaterThesis />
      <WaterSystem />
      <WaterCapabilities />
      <WaterApplications />
      <WaterPrinciples />
      <WaterConversion />
    </main>
  );
}
