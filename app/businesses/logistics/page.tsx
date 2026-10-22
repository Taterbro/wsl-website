import type { Metadata } from "next";
import LogisticsHero from "./_components/logistics-hero";
import LogisticsCorridor from "./_components/logistics-corridor";
import LogisticsServices from "./_components/logistics-services";
import LogisticsCase from "./_components/logistics-case";
import LogisticsConversion from "./_components/logistics-conversion";

export const metadata: Metadata = {
  title: "Logistics — Waterlight Group",
  description:
    "Warehousing, distribution, transport infrastructure, cross-border trade and supply-chain technology from Waterlight Group — corridor planning, service lines and partnership routes.",
};

export default function LogisticsPage() {
  return (
    <main>
      <LogisticsHero />
      <LogisticsCorridor />
      <LogisticsServices />
      <LogisticsCase />
      <LogisticsConversion />
    </main>
  );
}
