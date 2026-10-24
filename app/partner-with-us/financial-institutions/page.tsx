import type { Metadata } from "next";
import FinancialInstitutionsHero from "./_components/financial-institutions-hero";
import FinancialInstitutionsIntro from "./_components/financial-institutions-intro";
import FinancialInstitutionsFormSection from "./_components/financial-institutions-form-section";

export const metadata: Metadata = {
  title: "Financial Institutions — Partner With Us — Waterlight Group",
  description:
    "Banks, DFIs and financiers: project debt, structured credit and blended capital across water, energy, industry and infrastructure.",
};

export default function FinancialInstitutionsPage() {
  return (
    <main>
      <FinancialInstitutionsHero />
      <FinancialInstitutionsIntro />
      <FinancialInstitutionsFormSection />
    </main>
  );
}
