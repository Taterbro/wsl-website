import type { Metadata } from "next";
import PartnershipsHero from "./_components/partnerships-hero";
import PartnerDirectory from "./_components/partner-directory";
import EngagementChecklist from "./_components/engagement-checklist";
import RelatedImpact from "./_components/related-impact";
import PartnershipsConversion from "./_components/partnerships-conversion";

export const metadata: Metadata = {
  title: "Development Partnerships — Impact — Waterlight Group",
  description:
    "The categories of institution Waterlight Group works with on development — multilateral, development finance, NGO, public sector and research — with no named partners, logos or implied agreements.",
};

export default function DevelopmentPartnershipsPage() {
  return (
    <main>
      <PartnershipsHero />
      <PartnerDirectory />
      <EngagementChecklist />
      <RelatedImpact />
      <PartnershipsConversion />
    </main>
  );
}
