import type { Metadata } from "next";
import { getDevelopmentPartnershipsPage } from "@/lib/cms/generated";

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

export default async function DevelopmentPartnershipsPage() {
  const data = await getDevelopmentPartnershipsPage();

  return (
    <main>
      <PartnershipsHero data={data.partnerships_hero} />
      <PartnerDirectory data={data.partner_directory} />
      <EngagementChecklist data={data.engagement_checklist} />
      <RelatedImpact data={data.related_impact} />
      <PartnershipsConversion data={data.partnerships_conversion} />
    </main>
  );
}
