"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BUSINESS_SECTORS } from "@/lib/businesses";
import type { Project } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";

const INVESTMENT_SIZES = ["$5-15M", "$10-25M", "$15-40M", "$20-45M", "$25-50M", "$30-60M", "$50M+"];
const STAGES = ["Concept", "Development", "Investment Ready", "Financing", "Construction", "Operational"];
const OPPORTUNITY_TYPES = ["Equity", "Debt", "JV", "Technology", "EPC", "PPP", "Strategic Partner"];
const IMPACT_AREAS = ["Water access", "Energy access", "Food security", "Resilience", "Industrial reliability", "Industrial development", "Energy resilience", "Loss reduction"];

const SECTOR_NAMES = Object.fromEntries(
  BUSINESS_SECTORS.map((sector) => [sector.slug, sector.shortName])
);

interface OpportunitiesGridProps {
  projects: Project[];
}

export default function OpportunitiesGrid({ projects }: OpportunitiesGridProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [sector, setSector] = useState(searchParams.get("sector") || "");
  const [country, setCountry] = useState(searchParams.get("country") || "");
  const [size, setSize] = useState(searchParams.get("size") || "");
  const [stage, setStage] = useState(searchParams.get("stage") || "");
  const [type, setType] = useState(searchParams.get("type") || "");
  const [impact, setImpact] = useState(searchParams.get("impact") || "");

  const countries = useMemo(() => Array.from(new Set(projects.map((p) => p.country))).sort(), [projects]);

  const activeCount = [sector, country, size, stage, type, impact].filter(Boolean).length;

  const updateUrl = (next: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(next).forEach(([k, v]) => {
      if (v) params.set(k, v);
      else params.delete(k);
    });
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const setFilter = (key: string, value: string, setter: (v: string) => void) => {
    setter(value);
    const map: Record<string, string> = { sector, country, size, stage, type, impact };
    map[key] = value;
    updateUrl(map);
  };

  const clearAll = () => {
    setSector("");
    setCountry("");
    setSize("");
    setStage("");
    setType("");
    setImpact("");
    router.replace(pathname, { scroll: false });
  };

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (sector && p.sectorSlug !== sector) return false;
      if (country && p.country !== country) return false;
      if (size && p.investmentSize !== size) return false;
      if (stage && p.stage !== stage) return false;
      if (type && p.opportunityType !== type) return false;
      if (impact && !p.impactArea.includes(impact)) return false;
      return true;
    });
  }, [projects, sector, country, size, stage, type, impact]);

  return (
    <section aria-labelledby="opportunities-grid-title" className="bg-background py-[clamp(56px,8vw,100px)]">
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 id="opportunities-grid-title" className="font-sans text-[clamp(1.8rem,4vw,3.2rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]">
              Available opportunities
            </h2>
            <p className="mt-2 text-[0.98rem] text-muted-foreground">
              {filtered.length} result{filtered.length === 1 ? "" : "s"}
              {activeCount > 0 ? ` • ${activeCount} filter${activeCount === 1 ? "" : "s"} active` : ""}
            </p>
          </div>
          {activeCount > 0 ? (
            <button
              type="button"
              onClick={clearAll}
              className="rounded-[2px] border border-border px-3 py-1.5 font-sans text-[0.78rem] font-semibold tracking-[0.06em] uppercase transition-colors hover:border-primary/40 hover:text-primary"
            >
              Clear all
            </button>
          ) : null}
        </div>

        <div className="mt-6 grid gap-3 rounded-[2px] border border-border bg-card/40 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <label className="flex flex-col gap-2 text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-muted-foreground">
            Sector
            <select
              value={sector}
              onChange={(e) => setFilter("sector", e.target.value, setSector)}
              className="rounded-[2px] border border-border bg-background px-3 py-2 text-[0.92rem] font-normal tracking-normal text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <option value="">All sectors</option>
              {BUSINESS_SECTORS.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.shortName}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-muted-foreground">
            Country
            <select
              value={country}
              onChange={(e) => setFilter("country", e.target.value, setCountry)}
              className="rounded-[2px] border border-border bg-background px-3 py-2 text-[0.92rem] font-normal tracking-normal text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <option value="">All countries</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-muted-foreground">
            Investment size
            <select
              value={size}
              onChange={(e) => setFilter("size", e.target.value, setSize)}
              className="rounded-[2px] border border-border bg-background px-3 py-2 text-[0.92rem] font-normal tracking-normal text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <option value="">Any size</option>
              {INVESTMENT_SIZES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-muted-foreground">
            Development stage
            <select
              value={stage}
              onChange={(e) => setFilter("stage", e.target.value, setStage)}
              className="rounded-[2px] border border-border bg-background px-3 py-2 text-[0.92rem] font-normal tracking-normal text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <option value="">All stages</option>
              {STAGES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-muted-foreground">
            Investment type
            <select
              value={type}
              onChange={(e) => setFilter("type", e.target.value, setType)}
              className="rounded-[2px] border border-border bg-background px-3 py-2 text-[0.92rem] font-normal tracking-normal text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <option value="">All types</option>
              {OPPORTUNITY_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-muted-foreground">
            Impact area
            <select
              value={impact}
              onChange={(e) => setFilter("impact", e.target.value, setImpact)}
              className="rounded-[2px] border border-border bg-background px-3 py-2 text-[0.92rem] font-normal tracking-normal text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <option value="">All areas</option>
              {IMPACT_AREAS.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-[2px] border border-border bg-card/40 transition-all duration-(--transition-normal) ease-(--ease-standard) hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_40px_80px_-60px_rgba(18,63,90,0.9)]"
            >
              <div className="relative h-[220px] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-(--transition-slower) ease-(--ease-standard) group-hover:scale-[1.02]"
                />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  <span className="rounded-[2px] border border-white/40 bg-sidebar/70 px-2.5 py-1 text-[0.74rem] font-semibold tracking-[0.08em] text-muted uppercase backdrop-blur-sm">
                    {project.stage}
                  </span>
                  <span className="rounded-[2px] border border-white/40 bg-sidebar/70 px-2.5 py-1 text-[0.74rem] font-semibold tracking-[0.08em] text-muted uppercase backdrop-blur-sm">
                    {project.opportunityType}
                  </span>
                </div>
                {project.access === "gated" ? (
                  <span className="absolute right-4 top-4 rounded-[2px] border border-white/40 bg-sidebar/80 px-2.5 py-1 text-[0.74rem] font-semibold tracking-[0.08em] text-accent uppercase backdrop-blur-sm">
                    Gated
                  </span>
                ) : null}
              </div>
              <div className="flex flex-1 flex-col gap-4 p-[clamp(20px,3vw,28px)]">
                <div>
                  <p className="text-[0.78rem] font-semibold tracking-[0.1em] text-primary/70 uppercase">
                    {SECTOR_NAMES[project.sectorSlug] ?? project.sectorSlug} • {project.country}, {project.region}
                  </p>
                  <h3 className="mt-2 font-sans text-[1.26rem] font-bold leading-[1.12] [font-stretch:112%]">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-[0.98rem] leading-[1.7] text-muted-foreground">
                    {project.summary}
                  </p>
                </div>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
                  <p className="text-[0.9rem] text-muted-foreground">
                    Investment size: <span className="text-foreground">{project.investmentSize}</span>
                  </p>
                  <Link
                    href={`/partner-with-us/investors?source=opportunities&project=${project.slug}`}
                    className="inline-flex items-center gap-2 rounded-[2px] border border-primary/40 px-3 py-1.5 font-sans text-[0.78rem] font-semibold tracking-[0.06em] uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Request access
                  </Link>
                </div>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-(--transition-slow) ease-(--ease-standard) group-hover:scale-x-100" />
            </article>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-[2px] border border-border bg-card/40 p-8 text-center">
            <p className="font-sans text-[1.2rem] font-bold uppercase [font-stretch:112%]">
              No opportunities match these filters
            </p>
            <p className="mt-2 text-[0.98rem] text-muted-foreground">
              Adjust filters or clear all to see available summaries.
            </p>
            <button
              type="button"
              onClick={clearAll}
              className="mt-4 rounded-[2px] border border-primary/40 px-4 py-2 font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              Clear all filters
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
