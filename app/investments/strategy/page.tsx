import type { Metadata } from "next";
import StrategyHero from "./_components/strategy-hero";
import Lifecycle from "./_components/lifecycle";
import Principles from "./_components/principles";
import CorridorModule from "./_components/corridor-module";
import StrategyCta from "./_components/strategy-cta";

export const metadata: Metadata = {
  title: "Investment Strategy — Investments — Waterlight Group",
  description:
    "Waterlight's investment strategy: a full-lifecycle platform identifying, structuring, mobilizing, building and scaling bankable infrastructure and industrial opportunities across Africa and global markets.",
};

export default function InvestmentStrategyPage() {
  return (
    <main>
      <StrategyHero />
      <Lifecycle />
      <Principles />
      <CorridorModule />
      <StrategyCta />
    </main>
  );
}
