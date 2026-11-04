import type { Metadata } from "next";
import FounderHero from "./_components/founder-hero";
import FounderStatement from "./_components/founder-statement";
import FounderPriorities from "./_components/founder-priorities";
import FounderRecord from "./_components/founder-record";
import FounderConversion from "./_components/founder-conversion";

export const metadata: Metadata = {
  title: "Founder & Group CEO — Waterlight Group",
  description:
    "The office of the Founder & Group CEO of Waterlight Group: the conviction behind the group, the remit of the role, standing priorities and the record to date.",
};

export default function FounderGroupCeoPage() {
  return (
    <main>
      <FounderHero />
      <FounderStatement />
      <FounderPriorities />
      <FounderRecord />
      <FounderConversion />
    </main>
  );
}
