import type { Metadata } from "next";
import InvestorsHero from "./_components/investors-hero";
import InvestorsIntro from "./_components/investors-intro";
import InvestorsFormSection from "./_components/investors-form-section";

export const metadata: Metadata = {
  title: "Investors — Partner With Us — Waterlight Group",
  description:
    "Investors and family offices: structured access to approved Waterlight opportunities across water, energy, industry, infrastructure and enabling technologies.",
};

export default function InvestorsPage() {
  return (
    <main>
      <InvestorsHero />
      <InvestorsIntro />
      <InvestorsFormSection />
    </main>
  );
}
