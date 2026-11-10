import type { Metadata } from "next";

import { getGroupStructurePage } from "@/lib/cms/generated";

import StructureHero from "./_components/structure-hero";
import StructureDiagram from "./_components/structure-diagram";
import StructureCompanies from "./_components/structure-companies";
import StructureSectors from "./_components/structure-sectors";
import StructureConversion from "./_components/structure-conversion";

export const metadata: Metadata = {
  title: "Group Structure — Waterlight Group",
  description:
    "How the Waterlight Group is organised: the master brand, four operating companies with defined mandates, shared group functions and the route each sector takes through the group.",
};

export default async function GroupStructurePage() {
  const data = await getGroupStructurePage();

  return (
    <main>
      <StructureHero data={data.structure_hero} />
      <StructureDiagram data={data.structure_diagram} />
      <StructureCompanies data={data.structure_companies} />
      <StructureSectors data={data.structure_sectors} />
      <StructureConversion data={data.structure_conversion} />
    </main>
  );
}
