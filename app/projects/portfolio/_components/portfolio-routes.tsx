import Link from "next/link";

const ROUTES = [
  {
    index: "01",
    title: "Project Map",
    description: "Where the portfolio sits across operating and target markets.",
    href: "/projects/project-map",
  },
  {
    index: "02",
    title: "Flagship Projects",
    description: "The projects that define the platform's ambition.",
    href: "/projects/flagship-projects",
  },
  {
    index: "03",
    title: "Development Pipeline",
    description: "Concept through financing, shown as a staged board.",
    href: "/projects/development-pipeline",
  },
];

export default function PortfolioRoutes() {
  return (
    <section
      aria-labelledby="portfolio-routes-title"
      className="border-y border-border bg-secondary/40"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] py-[clamp(52px,7vw,88px)]">
        <div className="grid gap-[clamp(24px,5vw,64px)] lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-sans text-[0.76rem] font-semibold tracking-[0.14em] text-primary/70 uppercase">
              Other views
            </p>
            <h2
              id="portfolio-routes-title"
              className="mt-3 max-w-[16ch] font-sans text-[clamp(1.8rem,3.6vw,2.9rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%]"
            >
              See the portfolio differently
            </h2>
          </div>

          <ul className="divide-y divide-border border-y border-border">
            {ROUTES.map((route) => (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5 transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:gap-6"
                >
                  <span className="font-sans text-[0.7rem] font-semibold tracking-[0.1em] text-muted-foreground/70">
                    {route.index}
                  </span>
                  <span>
                    <span className="block font-sans text-[clamp(1.05rem,1.6vw,1.28rem)] font-bold uppercase [font-stretch:110%]">
                      {route.title}
                    </span>
                    <span className="mt-1 block text-[0.88rem] leading-[1.5] text-muted-foreground">
                      {route.description}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="font-sans text-[1.1rem] text-primary/50 transition-transform duration-(--transition-normal) ease-(--ease-standard) group-hover:translate-x-1 group-hover:text-primary"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
