import Reveal from "../../../(home)/_components/reveal";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const ROLES: { number: string; title: string; copy: string; href: string }[] = [
  {
    number: "01",
    title: "Capital partners",
    copy: "Fund and co-own industrial assets with structured entry and exit paths.",
    href: "/investments/opportunities",
  },
  {
    number: "02",
    title: "Industrial operators",
    copy: "Bring technology, equipment and operating know-how into new markets.",
    href: "/innovation/technology-partnerships",
  },
  {
    number: "03",
    title: "Governments & zones",
    copy: "Structure industrial parks, localisation programmes and special zones.",
    href: "/contact",
  },
  {
    number: "04",
    title: "Project owners",
    copy: "Develop a facility, processing line or equipment venture with us.",
    href: "/projects/development-pipeline",
  },
];

export default function SectorConversion() {
  return (
    <section
      aria-labelledby="industrial-conversion-title"
      className="relative overflow-hidden bg-sidebar text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100,216,232,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(100,216,232,0.06) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />
      <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] py-[clamp(72px,10vw,140px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="grid gap-[clamp(30px,5vw,72px)] lg:grid-cols-[0.84fr_1.16fr]">
            <div>
              <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] text-accent uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
                />
                07 — Build with Waterlight
              </p>
              <h2
                id="industrial-conversion-title"
                className="mt-4 max-w-[14ch] font-sans text-[clamp(2rem,4.4vw,3.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Put the plant
                <br />
                on the map.
              </h2>
              <p className="mt-5 max-w-[46ch] text-[clamp(0.95rem,1.25vw,1.05rem)] leading-[1.6] text-muted/70">
                Bring a site, a technology or an offtake requirement. We will
                help shape the industrial model around it.
              </p>
              <div className="mt-[clamp(22px,3vw,32px)] flex flex-wrap gap-3">
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

            <ul className="border-t border-accent/20">
              {ROLES.map((role) => (
                <li key={role.number}>
                  <a
                    href={role.href}
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-[clamp(14px,2.4vw,28px)] border-b border-accent/15 py-[clamp(16px,2.2vw,24px)] transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-secondary/5"
                  >
                    <span
                      aria-hidden="true"
                      className="font-sans text-[0.62rem] font-semibold tracking-[0.14em] text-accent uppercase tabular-nums"
                    >
                      {role.number}
                    </span>
                    <span>
                      <span className="block font-sans text-[clamp(1rem,1.6vw,1.25rem)] leading-[1.2] font-extrabold tracking-[0.005em] uppercase [font-stretch:108%]">
                        {role.title}
                      </span>
                      <span className="mt-1 block max-w-[52ch] text-[0.8rem] leading-[1.5] text-muted/60">
                        {role.copy}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-muted/60 transition-colors duration-(--transition-normal) ease-(--ease-standard) group-hover:text-accent"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-[clamp(30px,4vw,48px)] border-t border-accent/15 pt-5 text-[0.62rem] leading-[1.5] text-muted/60">
            PLACEHOLDER — partner roles and outbound links are indicative and
            should be confirmed against the current investment and partnership
            offer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
