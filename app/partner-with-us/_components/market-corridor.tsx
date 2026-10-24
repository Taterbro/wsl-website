import Link from "next/link";
import Reveal from "@/app/(home)/_components/reveal";
import { CORRIDOR_ROUTES, MARKET_ENTRY_HREF } from "@/lib/enquiry-routes";

const DETAILS: Record<"africa" | "gcc", string[]> = {
  africa: ["Target country", "Sector", "Support required"],
  gcc: ["Target market", "Sector", "Local partnership"],
};

export default function MarketCorridor() {
  return (
    <section
      id="corridor"
      aria-labelledby="corridor-title"
      className="relative overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[20vw] -bottom-[26vw] h-[64vw] w-[64vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.14),transparent_64%)] blur-[70px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="grid gap-[clamp(20px,4vw,48px)] lg:grid-cols-[1fr_0.8fr] lg:items-end motion-reduce:translate-y-0 motion-reduce:transition-none">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
              <span aria-hidden="true" className="h-px w-[clamp(24px,4vw,56px)] bg-accent" />
              07 — Two-way corridor
            </p>
            <h2
              id="corridor-title"
              className="max-w-[15ch] font-sans text-[clamp(2.1rem,5.4vw,4.4rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Market entry,
              <br />
              both ways.
            </h2>
          </div>
          <p className="max-w-[46ch] text-[clamp(1rem,1.35vw,1.18rem)] leading-[1.65] text-muted/75 lg:pb-2">
            Entering an African market, or bringing African capability into the
            Gulf? Pick the direction and we will pick up from there.
          </p>
        </Reveal>

        <div className="mt-[clamp(32px,4.5vw,56px)] grid grid-cols-2 gap-px border border-accent/25 bg-accent/25 max-[840px]:grid-cols-1">
          {CORRIDOR_ROUTES.map((route) => (
            <Link
              key={route.market}
              href={route.href}
              className="group relative flex min-h-[clamp(260px,30vw,380px)] flex-col justify-between bg-sidebar p-[clamp(22px,3.4vw,40px)] transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-sidebar-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent motion-reduce:transition-none"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-[0.68rem] font-semibold tracking-[0.16em] text-accent uppercase">
                  {route.audience}
                </span>
                <span
                  aria-hidden="true"
                  className="text-[1.3rem] leading-none text-accent transition-transform duration-(--transition-normal) ease-(--ease-standard) group-hover:translate-x-1.5 motion-reduce:transition-none"
                >
                  →
                </span>
              </div>

              <div>
                <p className="font-sans text-[clamp(3rem,9vw,7.2rem)] leading-[0.82] font-extrabold tracking-[-0.02em] uppercase [font-stretch:118%]">
                  {route.selectorLabel}
                </p>
                <p className="mt-5 max-w-[40ch] text-[0.94rem] leading-[1.55] text-muted/72">
                  {route.summary}
                </p>
              </div>

              <ul className="mt-8 flex list-none flex-wrap gap-x-5 gap-y-2 p-0 text-[0.72rem] tracking-[0.04em] text-muted/55">
                {DETAILS[route.market].map((detail) => (
                  <li key={detail} className="flex items-center gap-2">
                    <span aria-hidden="true" className="h-1 w-1 bg-accent" />
                    {detail}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        <p className="mt-6 text-[0.8rem] leading-[1.55] text-muted/55">
          Not sure which direction fits?{" "}
          <Link
            href={MARKET_ENTRY_HREF}
            className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:decoration-accent"
          >
            Start with the market-entry route
          </Link>{" "}
          and we will help you place it.
        </p>
      </div>
    </section>
  );
}
