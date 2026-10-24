import type { Metadata } from "next";
import Link from "next/link";
import {
  getFlagshipProjects,
  getProjects,
  getSectorName,
} from "@/lib/projects";
import FlagshipHeader from "./_components/flagship-header";
import FlagshipShowcase from "./_components/flagship-showcase";
import FlagshipDossier from "./_components/flagship-dossier";
import FlagshipRoutes from "./_components/flagship-routes";
import FlagshipCta from "./_components/flagship-cta";

export const metadata: Metadata = {
  title: "Flagship Projects — Projects — Waterlight Group",
  description:
    "Selected Waterlight flagship projects with defined infrastructure, a clear development path and a partner need. Public summaries only.",
};

export default function FlagshipProjectsPage() {
  const flagships = getFlagshipProjects();
  const projects = getProjects();
  const lead = flagships[0];
  const marketCount = new Set(projects.map((project) => project.country)).size;

  return (
    <main>
      <FlagshipHeader count={flagships.length} />

      {lead ? (
        <>
          <FlagshipShowcase flagships={flagships} />
          <FlagshipDossier
            project={lead}
            sectorName={getSectorName(lead.sectorSlug)}
          />
        </>
      ) : (
        <section className="bg-background py-[clamp(56px,8vw,104px)]">
          <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
            <div className="border border-border bg-card/40 p-10 text-center">
              <p className="font-sans text-[1.2rem] font-bold uppercase [font-stretch:112%]">
                No flagship projects are published yet
              </p>
              <p className="mx-auto mt-2 max-w-[52ch] text-[0.95rem] leading-[1.6] text-muted-foreground">
                Browse the full portfolio for approved project summaries.
              </p>
              <Link
                href="/projects/portfolio"
                className="mt-5 inline-flex rounded-[2px] border border-primary/40 px-4 py-2 font-sans text-[0.78rem] font-semibold tracking-[0.06em] text-primary uppercase transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                View portfolio
              </Link>
            </div>
          </div>
        </section>
      )}

      <FlagshipRoutes
        projectCount={projects.length}
        marketCount={marketCount}
      />
      <FlagshipCta project={lead} />
    </main>
  );
}
