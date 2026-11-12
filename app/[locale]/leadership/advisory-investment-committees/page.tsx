import type { Metadata } from "next";
import { getAdvisoryInvestmentCommitteesPage } from "@/lib/cms/generated";
import AdvisoryHero from "./_components/advisory-hero";
import AdvisoryCharters from "./_components/advisory-charters";
import AdvisoryConstitution from "./_components/advisory-constitution";
import AdvisoryFlow from "./_components/advisory-flow";
import AdvisoryChallenge from "./_components/advisory-challenge";
import AdvisoryConversion from "./_components/advisory-conversion";

export const metadata: Metadata = {
  title: "Advisory / Investment Committees — Waterlight Group",
  description:
    "The advisory and investment committees of Waterlight Group: formally constituted, non-executive bodies appointed to challenge, test and advise — their mandates, constitution and how their advice reaches decision.",
};

export default async function AdvisoryInvestmentCommitteesPage() {
  const data = await getAdvisoryInvestmentCommitteesPage();

  return (
    <main>
      <AdvisoryHero data={data.advisory_hero} />
      <AdvisoryCharters data={data.advisory_charters} />
      <AdvisoryConstitution data={data.advisory_constitution} />
      <AdvisoryFlow data={data.advisory_flow} />
      <AdvisoryChallenge data={data.advisory_challenge} />
      <AdvisoryConversion data={data.advisory_conversion} />
    </main>
  );
}
