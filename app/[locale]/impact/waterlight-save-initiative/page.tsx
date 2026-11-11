import type { Metadata } from "next";
import InitiativeHero from "./_components/initiative-hero";
import SeparationStatement from "./_components/separation-statement";
import ProgrammeFocus from "./_components/programme-focus";
import AccountabilityLedger from "./_components/accountability-ledger";
import InitiativeOutbound from "./_components/initiative-outbound";
import { getWaterlightSaveInitiativePage } from "@/lib/cms/generated";

export const metadata: Metadata = {
  title: "Waterlight Save Initiative — Impact — Waterlight Group",
  description:
    "Waterlight Save Initiative is an independent nonprofit development organisation. A separate mandate, governance and programme agenda — never presented as a commercial subsidiary.",
};

export default async function WaterlightSaveInitiativePage() {
  const data = await getWaterlightSaveInitiativePage();
  return (
    <main>
      <InitiativeHero data={data.initiative_hero} />
      <SeparationStatement data={data.separation_statement} />
      <ProgrammeFocus data={data.programme_focus} />
      <AccountabilityLedger data={data.accountability_ledger} />
      <InitiativeOutbound data={data.initiative_outbound} />
    </main>
  );
}
