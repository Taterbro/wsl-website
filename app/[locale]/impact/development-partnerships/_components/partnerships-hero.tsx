import Link from "next/link";
import { PARTNER_CATEGORIES } from "@/lib/impact";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border px-[clamp(18px,2.6vw,26px)] py-[clamp(11px,1.2vw,14px)] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

// PLACEHOLDER — scope descriptors, not a record of existing relationships.
const FACTS: { label: string; value: string }[] = [
  { label: "Categories", value: "05" },
  { label: "Named partners", value: "None shown" },
  { label: "Agreements", value: "None implied" },
];

export default function PartnershipsHero() {
  return (
    <section
      aria-labelledby="partnerships-hero-title"
      className="relative isolate overflow-hidden bg-background"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] pt-[clamp(94px,11vw,138px)] pb-[clamp(40px,5vw,64px)]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[0.7rem] font-semibold tracking-[0.14em] uppercase"
          >
            <Link
              href="/impact"
              className="text-foreground/60 transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary"
            >
              Impact
            </Link>
            <span aria-hidden="true" className="text-foreground/35">
              /
            </span>
            <span aria-current="page" className="text-foreground">
              Development Partnerships
            </span>
          </nav>

          <p className="flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.16em] text-foreground/60 uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-primary" />
            Impact 02 — Partner directory
          </p>
        </div>

        <div className="mt-[clamp(20px,3vw,38px)] grid gap-[clamp(26px,4vw,54px)] lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="relative flex flex-col justify-between">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-[clamp(8px,4vw,54px)] -left-[clamp(0px,2vw,28px)] hidden size-[clamp(190px,22vw,310px)] rounded-full border border-dashed border-primary/20 lg:block"
            />

            <div className="relative z-10">
              <p className="flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.16em] text-primary uppercase">
                <span aria-hidden="true" className="h-px w-8 bg-primary" />
                Development partnerships
              </p>

              <h1
                id="partnerships-hero-title"
                className="mt-[clamp(14px,2vw,22px)] max-w-[13ch] font-sans text-[clamp(2.3rem,7.6vw,3.8rem)] leading-[0.9] font-extrabold tracking-[-0.015em] uppercase [font-stretch:112%] lg:text-[clamp(3.8rem,5.4vw,5.6rem)] lg:[font-stretch:118%]"
              >
                Partnership,
                <br />
                <span className="text-primary">by category.</span>
              </h1>

              <p className="mt-[clamp(16px,2.2vw,26px)] max-w-[48ch] text-[clamp(1rem,1.3vw,1.14rem)] leading-[1.55] text-foreground/70">
                Development partnerships begin with a mandate, not a logo. These
                are the categories of institution Waterlight engages with — and
                the role each can play.
              </p>

              <div className="mt-[clamp(20px,2.8vw,30px)] flex flex-wrap gap-2.5">
                <Link
                  href="/partner-with-us"
                  className={`${BTN_BASE_CLASS} border-primary bg-primary text-background hover:-translate-y-px hover:bg-[#185a78] motion-reduce:transform-none`}
                >
                  Start a conversation
                </Link>
                <Link
                  href="/impact/sustainability"
                  className={`${BTN_BASE_CLASS} border-foreground/25 bg-transparent text-foreground hover:bg-sidebar hover:text-muted`}
                >
                  Sustainability approach
                </Link>
              </div>
            </div>

            <dl className="relative z-10 mt-[clamp(26px,3.4vw,38px)] grid grid-cols-3 gap-x-[clamp(12px,2vw,28px)] border-t border-foreground/15 pt-[clamp(16px,2.2vw,24px)]">
              {FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[0.56rem] font-semibold tracking-[0.14em] text-foreground/60 uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 font-sans text-[0.7rem] leading-[1.35] font-semibold tracking-[0.02em] text-foreground/85 uppercase [font-stretch:108%]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative overflow-hidden border border-foreground/15 bg-sidebar text-muted">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-[30%] -right-[24%] h-[80%] w-[80%] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.2),transparent_64%)] blur-[50px]"
            />

            <div className="relative p-[clamp(18px,2.6vw,30px)]">
              <div className="flex items-start justify-between gap-4 border-b border-accent/25 pb-4">
                <div>
                  <p className="text-[0.56rem] font-semibold tracking-[0.16em] text-accent uppercase">
                    Category index
                  </p>
                  <p className="mt-1.5 text-[0.66rem] leading-[1.5] text-muted/55">
                    Directory — no named partners
                  </p>
                </div>
                <p className="font-sans text-[clamp(2rem,4vw,3rem)] leading-[0.8] font-extrabold tracking-[-0.03em] text-accent tabular-nums [font-stretch:120%]">
                  05
                </p>
              </div>

              <ol className="mt-1 list-none p-0">
                {PARTNER_CATEGORIES.map((category) => (
                  <li
                    key={category.id}
                    className="grid grid-cols-[auto_1fr_auto] items-baseline gap-[clamp(10px,1.6vw,18px)] border-b border-accent/15 py-[clamp(11px,1.5vw,16px)]"
                  >
                    <span className="font-sans text-[0.58rem] font-extrabold tracking-[0.12em] text-accent/80 tabular-nums [font-stretch:112%]">
                      {category.code}
                    </span>
                    <span className="font-sans text-[0.78rem] leading-[1.25] font-bold uppercase [font-stretch:108%]">
                      {category.name}
                    </span>
                    <span className="text-right text-[0.52rem] leading-[1.3] text-muted/45">
                      {category.instruments[0]}
                    </span>
                  </li>
                ))}
              </ol>

              <p className="mt-4 text-[0.58rem] leading-[1.55] text-muted/55">
                Categories describe the kinds of institutions the group engages
                with. They are not a list of partners and do not imply any
                agreement.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-[clamp(12px,1.6vw,18px)] text-[0.6rem] leading-[1.5] tracking-[0.04em] text-foreground/60">
          PLACEHOLDER — category descriptions and index labels are illustrative
          until approved partnership content is supplied. No partner names,
          logos or agreements are shown.
        </p>
      </div>
    </section>
  );
}
