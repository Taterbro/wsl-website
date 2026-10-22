import type { Metadata } from "next";
import IndustryHero from "./_components/industry-hero";
import IndustryCapabilities from "./_components/industry-capabilities";
import IndustryScope from "./_components/industry-scope";
import IndustryPartnerships from "./_components/industry-partnerships";
import IndustryConversion from "./_components/industry-conversion";

export const metadata: Metadata = {
  title: "Industry — Waterlight Group",
  description:
    "Manufacturing, processing, technology localisation, industrial facilities and strategic production partnerships from Waterlight Group — capability lines, scope of work and partnership models.",
};

export default function IndustryPage() {
  return (
    <main>
      <IndustryHero />
      <IndustryCapabilities />
      <IndustryScope />
      <IndustryPartnerships />
      <IndustryConversion />
    </main>
  );
}
