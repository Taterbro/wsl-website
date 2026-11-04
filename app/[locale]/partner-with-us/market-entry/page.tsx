import type { Metadata } from "next";
import MarketEntryHero from "./_components/market-entry-hero";
import MarketEntryIntro from "./_components/market-entry-intro";
import MarketEntryFormSection from "./_components/market-entry-form-section";

export const metadata: Metadata = {
  title: "Market Entry — Partner With Us — Waterlight Group",
  description:
    "Enter Africa or the GCC with a partner that already operates on the ground. Build two-way corridors between markets and projects.",
};

export default function MarketEntryPage() {
  return (
    <main>
      <MarketEntryHero />
      <MarketEntryIntro />
      <MarketEntryFormSection />
    </main>
  );
}
