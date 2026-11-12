import type { Metadata } from "next";
import { getPartnerWithUsPage } from "@/lib/cms/generated";
import PartnerHero from "./_components/partner-hero";
import AudienceSelector from "./_components/audience-selector";
import MarketCorridor from "./_components/market-corridor";
import NextSteps from "./_components/next-steps";

export const metadata: Metadata = {
  title: "Partner With Us — Waterlight Group",
  description:
    "Build with Waterlight. Choose the route that matches you — investor, government, financial institution, technology partner, project owner, joint venture or market entry — and reach the team that owns it.",
};

export default async function PartnerWithUsPage() {
  const data = await getPartnerWithUsPage();

  return (
    <main>
      <PartnerHero data={data.partner_hero} />
      <AudienceSelector data={data.audience_selector} />
      <MarketCorridor data={data.market_corridor} />
      <NextSteps data={data.next_steps} />
    </main>
  );
}
