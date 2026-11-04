import Link from "next/link";

interface FlagshipRoutesProps {
  projectCount: number;
  marketCount: number;
}

export default function FlagshipRoutes({
  projectCount,
  marketCount,
}: FlagshipRoutesProps) {
  const routes = [
    {
      index: "01",
      title: "Full portfolio",
      count: projectCount,
      label: "projects",
      href: "/projects/portfolio",
      description: "Filter every approved project summary.",
    },
    {
      index: "02",
      title: "Project map",
      count: marketCount,
      label: "markets",
      href: "/projects/project-map",
      description: "See project markets against strategic targets.",
    },
    {
      index: "03",
      title: "Opportunities",
      count: projectCount,
      label: "summaries",
      href: "/investments/opportunities",
      description: "Review opportunities open to partners.",
    },
  ];

  return (
    <section
      aria-labelledby="flagship-routes-title"
      className="bg-background py-[clamp(56px,8vw,104px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-sans text-[0.76rem] font-semibold tracking-[0.14em] text-primary/70 uppercase">
              Continue exploring
            </p>
            <h2
              id="flagship-routes-title"
              className="mt-3 font-sans text-[clamp(1.9rem,4vw,3.2rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Across the portfolio
            </h2>
          </div>
        </div>

        <ul className="mt-8 grid gap-px border border-border bg-border md:grid-cols-3">
          {routes.map((route) => (
            <li key={route.href} className="bg-background">
              <Link
                href={route.href}
                className="group flex h-full flex-col p-[clamp(22px,3vw,32px)] transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-card/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-sans text-[0.66rem] font-semibold tracking-[0.1em] text-muted-foreground/60">
                    {route.index}
                  </span>
                  <span className="font-sans text-[2rem] leading-none font-extrabold text-primary">
                    {route.count.toString().padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-sans text-[1.15rem] font-bold uppercase [font-stretch:110%]">
                  {route.title}
                </h3>
                <p className="mt-2 text-[0.84rem] leading-[1.55] text-muted-foreground">
                  {route.description}
                </p>
                <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                  <span className="text-[0.64rem] tracking-[0.08em] text-muted-foreground uppercase">
                    {route.label}
                  </span>
                  <span
                    aria-hidden
                    className="font-sans text-[1rem] text-primary/50 transition-transform duration-(--transition-normal) ease-(--ease-standard) group-hover:translate-x-1 group-hover:text-primary"
                  >
                    →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
