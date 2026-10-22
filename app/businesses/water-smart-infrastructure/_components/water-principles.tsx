import Reveal from "../../../(home)/_components/reveal";
import { PRINCIPLES } from "../_data/water";

const EXPLORE: { label: string; copy: string; href: string }[] = [
  {
    label: "WSWIS platform",
    copy: "The integrated water system behind every asset.",
    href: "/innovation/wswis",
  },
  {
    label: "Project portfolio",
    copy: "Where water infrastructure is being developed.",
    href: "/projects/portfolio",
  },
  {
    label: "Sustainability",
    copy: "How outcomes are measured and reported.",
    href: "/impact/sustainability",
  },
];

export default function WaterPrinciples() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="water-principles-title"
        className="bg-background py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="flex flex-wrap items-end justify-between gap-[clamp(20px,4vw,60px)]">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
                />
                06 — How we build
              </p>
              <h2
                id="water-principles-title"
                className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.95] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Built to be
                <br />
                maintained.
              </h2>
            </div>
            <p className="max-w-[40ch] pb-[clamp(2px,1vw,10px)] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.65] text-muted-foreground">
              The measure of a water asset is not how it performs on handover.
              It is how it performs in year ten, with the team and budget that
              actually exist.
            </p>
          </div>

          <div className="mt-[clamp(32px,4.6vw,56px)] grid grid-cols-3 gap-px border border-[rgba(9,29,42,0.16)] bg-[rgba(9,29,42,0.16)] max-[880px]:grid-cols-1">
            {PRINCIPLES.map((principle) => (
              <article
                key={principle.no}
                className="flex flex-col gap-3 bg-background p-[clamp(20px,3vw,32px)]"
              >
                <span className="font-sans text-[0.66rem] font-extrabold tracking-[0.16em] text-primary/60 [font-stretch:112%]">
                  {principle.no}
                </span>
                <h3 className="font-sans text-[clamp(1.02rem,1.5vw,1.2rem)] leading-[1.2] font-extrabold uppercase [font-stretch:112%]">
                  {principle.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.6] text-muted-foreground">
                  {principle.copy}
                </p>
              </article>
            ))}
          </div>

          <nav
            aria-label="Explore water and infrastructure"
            className="mt-[clamp(40px,5vw,64px)] border-t border-[rgba(9,29,42,0.16)] pt-[clamp(22px,3vw,32px)]"
          >
            <p className="text-[0.64rem] font-semibold tracking-[0.16em] text-muted-foreground/70 uppercase">
              Continue exploring
            </p>
            <ul className="mt-4 grid list-none grid-cols-3 gap-[clamp(16px,2.4vw,36px)] p-0 max-[760px]:grid-cols-1">
              {EXPLORE.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group flex items-start justify-between gap-4 border-t border-[rgba(9,29,42,0.16)] pt-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                  >
                    <span>
                      <span className="block font-sans text-[0.98rem] leading-[1.2] font-bold uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) group-hover:text-primary [font-stretch:112%]">
                        {item.label}
                      </span>
                      <span className="mt-1.5 block max-w-[30ch] text-[0.84rem] leading-[1.5] text-muted-foreground">
                        {item.copy}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="pt-0.5 text-primary transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </Reveal>
  );
}
