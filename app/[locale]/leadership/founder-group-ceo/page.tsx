import type { Metadata } from "next";
import FounderHero from "./_components/founder-hero";
import FounderBio from "./_components/founder-bio";
import FounderStructure from "./_components/founder-structure";
import FounderNext from "./_components/founder-next";

export const metadata: Metadata = {
  title: "Founder & Group CEO — Waterlight Group",
  description:
    "Dr. Engr. Prince Ero Ibhafidon, Founder & Group Chief Executive of Waterlight Group: the conviction behind the group, a concise biography and the governance structures around the office.",
};

export default function FounderGroupCeoPage() {
  return (
    <main>
      <FounderHero />
      <FounderBio />
      <FounderStructure />
      <FounderNext />
    </main>
  );
}
