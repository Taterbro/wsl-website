import type { Metadata } from "next";
import AgricultureApplications from "./_components/agriculture-applications";
import AgricultureChain from "./_components/agriculture-chain";
import AgricultureConversion from "./_components/agriculture-conversion";
import AgricultureHero from "./_components/agriculture-hero";
import AgricultureOfferings from "./_components/agriculture-offerings";
import AgriculturePrinciples from "./_components/agriculture-principles";
import AgricultureThesis from "./_components/agriculture-thesis";

export const metadata: Metadata = {
  title: "Agriculture — Waterlight Group",
  description:
    "Irrigation, processing, cold chain and market infrastructure — built and financed as one connected food system.",
};

export default function AgriculturePage() {
  return (
    <main>
      <AgricultureHero />
      <AgricultureThesis />
      <AgricultureChain />
      <AgricultureOfferings />
      <AgricultureApplications />
      <AgriculturePrinciples />
      <AgricultureConversion />
    </main>
  );
}
