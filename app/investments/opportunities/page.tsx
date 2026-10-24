import type { Metadata } from "next";
import { Suspense } from "react";
import OpportunitiesHero from "./_components/opportunities-hero";
import OpportunitiesGrid from "./_components/opportunities-grid";
import OpportunitiesCta from "./_components/opportunities-cta";

export const metadata: Metadata = {
  title: "Opportunities — Investments — Waterlight Group",
  description:
    "Approved summaries of selected Waterlight opportunities across priority sectors. Full details are gated and available on request following review.",
};

export default function OpportunitiesPage() {
  return (
    <main>
      <OpportunitiesHero />
      <Suspense fallback={<div className="py-16 text-center text-muted-foreground">Loading opportunities…</div>}>
        <OpportunitiesGrid />
      </Suspense>
      <OpportunitiesCta />
    </main>
  );
}
