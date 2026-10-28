import type { Metadata } from "next";
import InitiativeHero from "./_components/initiative-hero";
import SeparationStatement from "./_components/separation-statement";
import ProgrammeFocus from "./_components/programme-focus";
import AccountabilityLedger from "./_components/accountability-ledger";
import InitiativeOutbound from "./_components/initiative-outbound";

export const metadata: Metadata = {
  title: "Waterlight Save Initiative — Impact — Waterlight Group",
  description:
    "Waterlight Save Initiative is an independent nonprofit development organisation. A separate mandate, governance and programme agenda — never presented as a commercial subsidiary.",
};

export default function WaterlightSaveInitiativePage() {
  return (
    <main>
      <InitiativeHero />
      <SeparationStatement />
      <ProgrammeFocus />
      <AccountabilityLedger />
      <InitiativeOutbound />
    </main>
  );
}
