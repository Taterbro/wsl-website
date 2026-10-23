import Reveal from "../../../(home)/_components/reveal";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const ROLES: { number: string; title: string; copy: string; href: string }[] = [
  {
    number: "01",
    title: "Capital partners",
    copy: "Fund and co-own housing, commercial and urban infrastructure assets.",
    href: "/investments/opportunities",
  },
  {
    number: "02",
    title: "Developers & landowners",
    copy: "Bring a site or a scheme into a structured development partnership.",
    href: "/projects/development-pipeline",
  },
  {
    number: "03",
    title: "Cities & municipalities",
    copy: "Plan and deliver districts with shared infrastructure and services.",
    href: "/contact",
  },
  {
    number: "04",
    title: "Delivery partners",
    copy: "Build, operate and maintain urban systems with us.",
    href: "/contact",
  },
];

export default function SectorConversion() {
  return (
    <section
      aria-labelledby="urban-conversion-title"
      className="relative overflow-hidden bg-sidebar text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100,216,232,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(100,216,232,0.06) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />
      <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] py-[clamp(72px,10vw,140px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="mx-auto max-w-[780px] text-center">
            <p className="flex items-center justify-center gap-2.5 text-[0.66rem] font-semibold tracking-[0.18em] text-accent uppercase">
              <span aria-hidden="true" className="h-px w-7 bg-accent" />
              07 — Build with Waterlight
              <span aria-hidden="true" className="h-px w-7 bg-accent" />
            </p>
            <h2
              id="urban-conversion-title"
              className="mt-4 font-sans text-[clamp(2.1rem,4.8vw,4rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Build the next
              <br />
              city block.
            </h2>
            <p className="mx-auto mt-5 max-w-[52ch] text-[clamp(0.95rem,1.25vw,1.05rem)] leading-[1.6] text-muted/70">
              Bring a site, a city brief or a capital requirement. We will help
              structure the district around it.
            </p>
            <div className="mt-[clamp(22px,3vw,32px)] flex flex-wrap justify-center gap-3">
              <a
                href="/contact"
                className={`${BTN_BASE_CLASS} bg-accent text-sidebar hover:-translate-y-px hover:bg-[#7defd2] motion-reduce:transform-none`}
              >
                Start a conversation
              </a>
              <a
                href="/investments/opportunities"
                className={`${BTN_BASE_CLASS} border-current bg-transparent hover:bg-secondary hover:text-sidebar`}
              >
                View opportunities
              </a>
            </div>
          </div>

          <ul className="mt-[clamp(34px,5vw,64px)] grid gap-px border border-accent/20 bg-accent/20 sm:grid-cols-2 lg:grid-cols-4">
            {ROLES.map((role) => (
              <li key={role.number} className="bg-sidebar">
                <a
                  href={role.href}
                  className="group flex h-full flex-col p-[clamp(18px,2.4vw,28px)] transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-secondary/5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      aria-hidden="true"
                      className="font-sans text-[0.6rem] font-semibold tracking-[0.14em] text-accent uppercase tabular-nums"
                    >
                      {role.number}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-muted/60 transition-colors duration-(--transition-normal) ease-(--ease-standard) group-hover:text-accent"
                    >
                      ↗
                    </span>
                  </div>
                  <h3 className="mt-5 font-sans text-[clamp(1rem,1.6vw,1.25rem)] leading-[1.15] font-extrabold tracking-[0.005em] uppercase [font-stretch:108%]">
                    {role.title}
                  </h3>
                  <p className="mt-2 text-[0.8rem] leading-[1.55] text-muted/65">
                    {role.copy}
                  </p>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-[clamp(28px,4vw,44px)] border-t border-accent/15 pt-5 text-center text-[0.6rem] leading-[1.5] text-muted/60">
            PLACEHOLDER — partner roles and outbound links are indicative and
            should be confirmed against the current investment and partnership
            offer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
