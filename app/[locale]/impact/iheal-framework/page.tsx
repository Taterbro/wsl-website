import type { Metadata } from "next";
import { getIhealFrameworkPage } from "@/lib/cms/generated";

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

export default async function IhealFrameworkPage() {
  const data = await getIhealFrameworkPage();

  return (
    <main>
      <IhealHero data={data.iheal_hero} />
      <IhealPillars data={data.iheal_pillars} />
      <IhealBoundaries data={data.iheal_boundaries} />
      <RelatedCompany data={data.related_company} />
      <IhealClosing data={data.iheal_closing} />
    </main>
  );
}
