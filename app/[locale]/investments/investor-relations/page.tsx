import type { Metadata } from "next";
import InvestorRelationsHero from "./_components/investor-relations-hero";
import IrPrinciples from "./_components/ir-principles";
import IrInformation from "./_components/ir-information";
import InvestorRelationsCta from "./_components/investor-relations-cta";

export const metadata: Metadata = {
  title: "Investor Relations — Investments — Waterlight Group",
  description:
    "Waterlight Investor Relations: disciplined platform approach, enquiry-led access to approved opportunities, and a focus on bankable infrastructure and industrial projects across Africa and global markets.",
};

export default function InvestorRelationsPage() {
  return (
    <main>
      <InvestorRelationsHero />
      <IrPrinciples />
      <IrInformation />
      <InvestorRelationsCta />
    </main>
  );
}
