import type { Metadata } from "next";

import { getGovernancePage } from "@/lib/cms/generated";

import GovernanceHero from "./_components/governance-hero";
import GovernanceMap from "./_components/governance-map";
import GovernanceRights from "./_components/governance-rights";
import GovernanceSeats from "./_components/governance-seats";
import GovernanceTrust from "./_components/governance-trust";

export const metadata: Metadata = {
  title: "Governance — Waterlight Group",
  description:
    "How Waterlight Group is governed: the board, committees, executive oversight, decision rights, and a strict publishing-approval standard for every material claim.",
};

export default async function GovernancePage() {
  const data = await getGovernancePage();

  return (
    <main>
      <GovernanceHero data={data.governance_hero} />
      <GovernanceMap data={data.governance_map} />
      <GovernanceRights data={data.governance_rights} />
      <GovernanceSeats data={data.governance_seats} />
      <GovernanceTrust data={data.governance_trust} />
    </main>
  );
}
