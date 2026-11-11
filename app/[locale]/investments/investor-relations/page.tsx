import type { Metadata } from "next";
import { getInvestorRelationsPage } from "@/lib/cms/generated/pages/investor-relations";
import InvestorRelationsHero from "./_components/investor-relations-hero";
import IrPrinciples from "./_components/ir-principles";
import IrInformation from "./_components/ir-information";
import InvestorRelationsCta from "./_components/investor-relations-cta";

export const metadata: Metadata = {
  title: "Investor Relations — Investments — Waterlight Group",
  description:
    "Waterlight Investor Relations: disciplined platform approach, enquiry-led access to approved opportunities, and a focus on bankable infrastructure and industrial projects across Africa and global markets.",
};

export default async function InvestorRelationsPage() {
  const data = await getInvestorRelationsPage();

  return (
    <main>
      <InvestorRelationsHero data={data.investor_relations_hero} />
      <IrPrinciples data={data.ir_principles} />
      <IrInformation data={data.ir_information} />
      <InvestorRelationsCta data={data.investor_relations_cta} />
    </main>
  );
}
