"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BUSINESS_SECTORS } from "@/lib/businesses";
import type {
  OpportunityType,
  Project,
  ProjectStage,
} from "@/lib/projects";
import ProjectCard from "../../_components/project-card";

const STAGES: ProjectStage[] = [
  "Concept",
  "Development",
  "Investment Ready",
  "Financing",
  "Construction",
  "Operational",
];

const OPPORTUNITY_TYPES: OpportunityType[] = [
  "Equity",
  "Debt",
  "JV",
  "Technology",
  "EPC",
  "PPP",
  "Strategic Partner",
];

const FILTER_KEYS = [
  "sector",
  "country",
  "stage",
  "type",
  "impact",
] as const;

type FilterKey = (typeof FILTER_KEYS)[number];

type FilterState = Record<FilterKey, string>;

const FILTER_LABELS: Record<FilterKey, string> = {
  sector: "Sector",
  country: "Country",
  stage: "Stage",
  type: "Opportunity type",
  impact: "Impact area",
};

interface PortfolioGridProps {
  projects: Project[];
}

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filters = useMemo(
    () => readFilters(new URLSearchParams(searchParams.toString())),
    [searchParams]
  );

  const countries = useMemo(
    () =>
      Array.from(new Set(projects.map((project) => project.country))).sort(),
    [projects]
  );

  const impacts = useMemo(
    () =>
      Array.from(
        new Set(projects.flatMap((project) => project.impactArea))
      ).sort(),
    [projects]
  );

  const sectorOptions = useMemo(
    () =>
      BUSINESS_SECTORS.filter((sector) =>
        projects.some((project) => project.sectorSlug === sector.slug)
      ),
    [projects]
  );

  const sectorNames = useMemo(
    () =>
      Object.fromEntries(
        BUSINESS_SECTORS.map((sector) => [sector.slug, sector.shortName])
      ),
    []
  );

  const activeCount = FILTER_KEYS.filter((key) => filters[key]).length;

  const filtered = useMemo(
    () =>
      projects.filter((project) => {
        if (filters.sector && project.sectorSlug !== filters.sector)
          return false;
        if (filters.country && project.country !== filters.country) return false;
        if (filters.stage && project.stage !== filters.stage) return false;
        if (filters.type && project.opportunityType !== filters.type)
          return false;
        if (filters.impact && !project.impactArea.includes(filters.impact))
          return false;
        return true;
      }),
    [projects, filters]
  );

  const setFilter = (key: FilterKey, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  };

  const clearAll = () => {
    router.replace(pathname, { scroll: false });
  };

  const resultKey = filtered.map((project) => project.slug).join("|");

  return (
    <section
      aria-labelledby="project-directory-title"
      className="bg-background py-[clamp(56px,8vw,100px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-sans text-[0.76rem] font-semibold tracking-[0.14em] text-primary/70 uppercase">
              Project directory
            </p>
            <h2
              id="project-directory-title"
              className="mt-3 font-sans text-[clamp(1.9rem,4vw,3.2rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Find a project
            </h2>
          </div>
          <p
            aria-live="polite"
            className="text-[0.9rem] text-muted-foreground"
          >
            <span className="font-semibold text-foreground">
              {filtered.length}
            </span>{" "}
            of {projects.length} projects
            {activeCount > 0
              ? ` · ${activeCount} filter${activeCount === 1 ? "" : "s"} active`
              : ""}
          </p>
        </div>

        <div
          id="project-filters"
          className="mt-8 scroll-mt-24 rounded-[2px] border border-border bg-card/40"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-[clamp(16px,2.5vw,24px)] py-4">
            <h3 className="font-sans text-[0.74rem] font-semibold tracking-[0.12em] text-primary uppercase">
              Filter the portfolio
            </h3>
            {activeCount > 0 ? (
              <button
                type="button"
                onClick={clearAll}
                className="rounded-[2px] border border-border bg-background px-3 py-1.5 font-sans text-[0.72rem] font-semibold tracking-[0.06em] text-foreground uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:border-primary/40 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Clear all
              </button>
            ) : null}
          </div>

          <div className="grid gap-4 p-[clamp(16px,2.5vw,24px)] sm:grid-cols-2 lg:grid-cols-5">
            <FilterSelect
              label={FILTER_LABELS.sector}
              value={filters.sector}
              onChange={(value) => setFilter("sector", value)}
              allLabel="All sectors"
              options={sectorOptions.map((sector) => ({
                value: sector.slug,
                label: sector.shortName,
              }))}
            />
            <FilterSelect
              label={FILTER_LABELS.country}
              value={filters.country}
              onChange={(value) => setFilter("country", value)}
              allLabel="All countries"
              options={countries.map((country) => ({
                value: country,
                label: country,
              }))}
            />
            <FilterSelect
              label={FILTER_LABELS.stage}
              value={filters.stage}
              onChange={(value) => setFilter("stage", value)}
              allLabel="All stages"
              options={STAGES.map((stage) => ({
                value: stage,
                label: stage,
              }))}
            />
            <FilterSelect
              label={FILTER_LABELS.type}
              value={filters.type}
              onChange={(value) => setFilter("type", value)}
              allLabel="All types"
              options={OPPORTUNITY_TYPES.map((type) => ({
                value: type,
                label: type,
              }))}
            />
            <FilterSelect
              label={FILTER_LABELS.impact}
              value={filters.impact}
              onChange={(value) => setFilter("impact", value)}
              allLabel="All areas"
              options={impacts.map((impact) => ({
                value: impact,
                label: impact,
              }))}
            />
          </div>

          {activeCount > 0 ? (
            <div className="flex flex-wrap items-center gap-2 border-t border-border px-[clamp(16px,2.5vw,24px)] py-3">
              <span className="text-[0.68rem] tracking-[0.08em] text-muted-foreground uppercase">
                Active
              </span>
              {FILTER_KEYS.filter((key) => filters[key]).map((key) => {
                const label =
                  key === "sector"
                    ? sectorNames[filters.sector] ?? filters.sector
                    : filters[key];
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setFilter(key, "")}
                    className="inline-flex items-center gap-1.5 rounded-[2px] border border-primary/25 bg-background px-2.5 py-1 text-[0.7rem] font-medium text-foreground transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:border-primary/50 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <span className="text-muted-foreground">
                      {FILTER_LABELS[key]}:
                    </span>
                    {label}
                    <span aria-hidden className="text-muted-foreground">
                      ×
                    </span>
                    <span className="sr-only">Remove filter</span>
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>

        <div
          key={resultKey}
          className="mt-8 grid animate-fade-in gap-4 motion-reduce:animate-none sm:grid-cols-2 xl:grid-cols-3"
        >
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              sectorName={sectorNames[project.sectorSlug] ?? project.sectorSlug}
            />
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-8 rounded-[2px] border border-border bg-card/40 p-10 text-center">
            <p className="font-sans text-[1.2rem] font-bold uppercase [font-stretch:112%]">
              No projects match these filters
            </p>
            <p className="mx-auto mt-2 max-w-[48ch] text-[0.95rem] leading-[1.6] text-muted-foreground">
              Adjust or clear the filters to see the full approved portfolio.
            </p>
            <button
              type="button"
              onClick={clearAll}
              className="mt-5 rounded-[2px] border border-primary/40 px-4 py-2 font-sans text-[0.78rem] font-semibold tracking-[0.06em] text-primary uppercase transition-all duration-(--transition-normal) ease-(--ease-standard) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Clear all filters
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}

interface FilterSelectProps {
  label: string;
  value: string;
  allLabel: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

function FilterSelect({
  label,
  value,
  allLabel,
  options,
  onChange,
}: FilterSelectProps) {
  return (
    <label className="flex min-w-0 flex-col gap-2">
      <span className="text-[0.7rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
        {label}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-[2px] border border-border bg-background px-3 py-2.5 text-[0.9rem] text-foreground transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:border-primary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <option value="">{allLabel}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function readFilters(params: URLSearchParams): FilterState {
  return {
    sector: params.get("sector") ?? "",
    country: params.get("country") ?? "",
    stage: params.get("stage") ?? "",
    type: params.get("type") ?? "",
    impact: params.get("impact") ?? "",
  };
}
