import type { Metadata } from "next";
import SustainabilityHero from "./_components/sustainability-hero";
import EsgFramework from "./_components/esg-framework";
import OutcomesLedger from "./_components/outcomes-ledger";
import DecisionGates from "./_components/decision-gates";
import FocusAreas from "./_components/focus-areas";
import ImpactBridge from "./_components/impact-bridge";
import SustainabilityConversion from "./_components/sustainability-conversion";

export const metadata: Metadata = {
  title: "Sustainability — Impact — Waterlight Group",
  description:
    "How Waterlight Group embeds environmental, social and governance decisions into investment and asset delivery — and why outcomes are published only when they are evidenced.",
};

export default function SustainabilityPage() {
  return (
    <main>
      <SustainabilityHero />
      <EsgFramework />
      <OutcomesLedger />
      <DecisionGates />
      <FocusAreas />
      <ImpactBridge />
      <SustainabilityConversion />
    </main>
  );
}
