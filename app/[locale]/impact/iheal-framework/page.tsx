import type { Metadata } from "next";
import IhealHero from "./_components/iheal-hero";
import IhealPillars from "./_components/iheal-pillars";
import IhealBoundaries from "./_components/iheal-boundaries";
import RelatedCompany from "./_components/related-company";
import IhealClosing from "./_components/iheal-closing";

export const metadata: Metadata = {
  title: "iHEAL Framework — Impact — Waterlight Group",
  description:
    "iHEAL is a development and impact framework built on five non-sequential pillars — a shared philosophy of sustainable development, not a service line or a description of any company's offer.",
};

export default function IhealFrameworkPage() {
  return (
    <main>
      <IhealHero />
      <IhealPillars />
      <IhealBoundaries />
      <RelatedCompany />
      <IhealClosing />
    </main>
  );
}
