import type { Metadata } from "next";
import EnergyHero from "./_components/energy-hero";
import EnergyDemand from "./_components/energy-demand";
import EnergyDispatch from "./_components/energy-dispatch";
import EnergyPortfolio from "./_components/energy-portfolio";
import EnergyDelivery from "./_components/energy-delivery";
import EnergyApplications from "./_components/energy-applications";
import EnergyConversion from "./_components/energy-conversion";

export const metadata: Metadata = {
  title: "Energy — Waterlight Group",
  description:
    "Solar, storage and hybrid energy infrastructure from Waterlight Group: generation, firming, distributed systems and long-term operations for industry, cities and critical facilities.",
};

export default function EnergyPage() {
  return (
    <main>
      <EnergyHero />
      <EnergyDemand />
      <EnergyDispatch />
      <EnergyPortfolio />
      <EnergyDelivery />
      <EnergyApplications />
      <EnergyConversion />
    </main>
  );
}
