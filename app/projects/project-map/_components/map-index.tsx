import Link from "next/link";
import type { Project } from "@/lib/projects";
import { STATUS_INFO, TARGET_MARKETS } from "../_data";

interface MapIndexProps {
  projects: Project[];
}

export default function MapIndex({ projects }: MapIndexProps) {
  const groups = new Map<string, Project[]>();
  for (const project of projects) {
    const list = groups.get(project.country) ?? [];
    list.push(project);
    groups.set(project.country, list);
  }

  const projectMarkets = Array.from(groups.entries())
    .map(([country, countryProjects]) => ({
      country,
      projects: countryProjects,
    }))
    .sort(
      (a, b) =>
        b.projects.length - a.projects.length ||
        a.country.localeCompare(b.country)
    );

  const stats = [
    { label: "Operations", value: 0 },
    { label: "Partnerships", value: 0 },
    { label: "Project markets", value: projectMarkets.length },
    { label: "Target markets", value: TARGET_MARKETS.length },
  ];

  return (
    <section
      aria-labelledby="map-index-title"
      className="bg-background py-[clamp(56px,8vw,104px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-sans text-[0.76rem] font-semibold tracking-[0.14em] text-primary/70 uppercase">
              Market register
            </p>
            <h2
              id="map-index-title"
              className="mt-3 font-sans text-[clamp(1.9rem,4vw,3.2rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Markets in view
            </h2>
          </div>
          <p className="max-w-[48ch] text-[0.9rem] leading-[1.6] text-muted-foreground">
            The text view of the map. Project markets are drawn from approved
            project records; target markets are strategic and carry no implied
            presence.
          </p>
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background px-5 py-4">
              <dt className="text-[0.66rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                {stat.label}
              </dt>
              <dd className="mt-2 font-sans text-[1.6rem] leading-none font-bold text-foreground">
                {stat.value.toString().padStart(2, "0")}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 overflow-x-auto border border-border">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <caption className="sr-only">
              Project and target markets plotted on the project map
            </caption>
            <thead>
              <tr className="border-b border-border bg-card/50">
                <th
                  scope="col"
                  className="px-5 py-3 text-[0.66rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase"
                >
                  Market
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 text-[0.66rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase"
                >
                  Layer
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 text-[0.66rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase"
                >
                  Projects
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 text-[0.66rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase"
                >
                  Detail
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 text-right text-[0.66rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {projectMarkets.map((market) => (
                <tr
                  key={market.country}
                  className="bg-background transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:bg-card/40"
                >
                  <th
                    scope="row"
                    className="px-5 py-4 font-sans text-[0.98rem] font-bold uppercase [font-stretch:108%]"
                  >
                    {market.country}
                  </th>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-2 text-[0.76rem] text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      {STATUS_INFO.project.label}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-[0.84rem] text-foreground">
                    {market.projects.length.toString().padStart(2, "0")}
                  </td>
                  <td className="max-w-[34ch] px-5 py-4 text-[0.82rem] leading-[1.5] text-muted-foreground">
                    {market.projects.map((project) => project.name).join(", ")}
                  </td>
                  <td className="px-5 py-4 text-right">
                    <Link
                      href={`/projects/portfolio?country=${encodeURIComponent(
                        market.country
                      )}`}
                      className="font-sans text-[0.7rem] font-semibold tracking-[0.06em] text-primary uppercase underline decoration-primary/25 underline-offset-4 transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:decoration-primary"
                    >
                      View projects
                    </Link>
                  </td>
                </tr>
              ))}

              {TARGET_MARKETS.map((market) => (
                <tr
                  key={market.id}
                  className="bg-background transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:bg-card/40"
                >
                  <th
                    scope="row"
                    className="px-5 py-4 font-sans text-[0.98rem] font-bold uppercase [font-stretch:108%]"
                  >
                    {market.name}
                  </th>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-2 text-[0.76rem] text-muted-foreground">
                      <span className="h-2 w-2 rounded-full border border-muted-foreground" />
                      {STATUS_INFO.target.label}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-[0.84rem] text-muted-foreground">
                    —
                  </td>
                  <td className="max-w-[34ch] px-5 py-4 text-[0.82rem] leading-[1.5] text-muted-foreground">
                    {market.note}
                  </td>
                  <td className="px-5 py-4 text-right">
                    <Link
                      href="/projects/portfolio"
                      className="font-sans text-[0.7rem] font-semibold tracking-[0.06em] text-primary uppercase underline decoration-primary/25 underline-offset-4 transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:decoration-primary"
                    >
                      Portfolio
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 max-w-[80ch] text-[0.78rem] leading-[1.55] text-muted-foreground/80">
          PLACEHOLDER: locations, target markets and project records are
          illustrative pending approval. A marker never represents an office,
          site or completed investment. See the{" "}
          <Link
            href="/legal/investment-disclaimer"
            className="underline decoration-border underline-offset-4 transition-colors hover:text-primary"
          >
            investment disclaimer
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
