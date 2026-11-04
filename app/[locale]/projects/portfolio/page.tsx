import type { Metadata } from "next";
import { Suspense } from "react";
import { getProjects } from "@/lib/projects";
import PortfolioHeader from "./_components/portfolio-header";
import PortfolioGrid from "./_components/portfolio-grid";
import PortfolioRoutes from "./_components/portfolio-routes";
import PortfolioCta from "./_components/portfolio-cta";

export const metadata: Metadata = {
  title: "Portfolio — Projects — Waterlight Group",
  description:
    "Explore selected Waterlight projects by sector, country, development stage and opportunity type. Approved summaries only; full detail is available on request.",
};

export default function ProjectPortfolioPage() {
  const projects = getProjects();

  return (
    <main>
      <PortfolioHeader projects={projects} />
      <Suspense
        fallback={
          <div
            role="status"
            className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] py-[clamp(56px,8vw,100px)]"
          >
            <span className="sr-only">Loading portfolio…</span>
            <div className="h-24 animate-pulse rounded-[2px] bg-card motion-reduce:animate-none" />
          </div>
        }
      >
        <PortfolioGrid projects={projects} />
      </Suspense>
      <PortfolioRoutes />
      <PortfolioCta />
    </main>
  );
}
