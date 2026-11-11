import type { Metadata } from "next";
import { getStrategyPage } from "@/lib/cms/generated/pages/strategy";
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

export default async function InvestmentStrategyPage() {
  const data = await getStrategyPage();

  return (
    <main>
      <StrategyHero data={data.strategy_hero} />
      <Lifecycle data={data.lifecycle} />
      <Principles data={data.principles} />
      <CorridorModule data={data.corridor_module} />
      <StrategyCta data={data.strategy_cta} />
    </main>
  );
}
