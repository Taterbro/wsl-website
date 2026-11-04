import type { Metadata } from "next";
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

export default function GovernancePage() {
  return (
    <main>
      <GovernanceHero />
      <GovernanceMap />
      <GovernanceRights />
      <GovernanceSeats />
      <GovernanceTrust />
    </main>
  );
}
