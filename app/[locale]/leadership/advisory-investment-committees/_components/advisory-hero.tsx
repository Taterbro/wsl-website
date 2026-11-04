import Image from "next/image";
import { Btn, WRAP_CLASS } from "./advisory-shared";
import { ADVISORY_INTRO } from "../_data/advisory";

const CHIPS: string[] = ["Non-executive", "Formally constituted", "Independent of management", "Advise, never decide"];

export default function AdvisoryHero() {
  return (
    <section
      aria-labelledby="advisory-hero-title"
      className="relative isolate overflow-hidden bg-sidebar text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[26vw] -left-[20vw] h-[60vw] w-[60vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.15),transparent_62%)] blur-[80px]"
      />

      <div
        className={`${WRAP_CLASS} relative pt-[clamp(56px,8vw,104px)] pb-[clamp(48px,7vw,88px)]`}
      >
        <nav
          aria-label="Breadcrumb"
          className="mb-[clamp(20px,2.8vw,30px)] flex flex-wrap items-center gap-2 text-[0.7rem] font-semibold tracking-[0.14em] uppercase"
        >
          <a
            href="/leadership"
            className="text-muted/60 transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-accent"
          >
            Leadership
          </a>
          <span aria-hidden="true" className="text-muted/35">
            /
          </span>
          <span aria-current="page" className="text-accent">
            Advisory / Investment Committees
          </span>
        </nav>

        <p className="mb-[clamp(18px,2.6vw,26px)] flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.16em] text-accent uppercase">
          <span
            aria-hidden="true"
            className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
          />
          {ADVISORY_INTRO.strap}
        </p>

        <h1
          id="advisory-hero-title"
          className="max-w-[16ch] font-sans text-[clamp(2.4rem,7vw,6rem)] leading-[0.92] font-extrabold tracking-[-0.01em] uppercase [font-stretch:118%]"
        >
          Outside
          <br />
          expertise.
          <br />
          <span className="text-accent">Structured challenge.</span>
        </h1>

        <div className="mt-[clamp(28px,4vw,48px)] grid grid-cols-[1.1fr_0.9fr] items-end gap-[clamp(24px,4vw,64px)] max-[980px]:grid-cols-1">
          <div>
            <p className="max-w-[54ch] text-[clamp(1rem,1.3vw,1.14rem)] leading-[1.6] text-muted/85">
              {ADVISORY_INTRO.summary}
            </p>

            <ul className="mt-[clamp(22px,3vw,32px)] flex flex-wrap gap-2">
              {CHIPS.map((chip) => (
                <li
                  key={chip}
                  className="rounded-[2px] border border-accent/30 px-[12px] py-[7px] text-[0.68rem] font-semibold tracking-[0.08em] text-muted/80 uppercase"
                >
                  {chip}
                </li>
              ))}
            </ul>

            <div className="mt-[clamp(24px,3.4vw,36px)] flex flex-wrap items-center gap-3">
              <Btn href="#advisory-charters" variant="glow">
                Committee mandates
              </Btn>
              <Btn href="/about/governance" variant="ghost">
                Governance framework
              </Btn>
            </div>
          </div>

          <figure>
            <div className="relative aspect-[16/10] overflow-hidden border border-accent/20">
              <Image
                src="/placeholders/advisory-hero.png"
                alt="Placeholder artwork standing in for photography of an advisory committee convened around a table"
                fill
                preload
                sizes="(max-width: 980px) 100vw, 44vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[0.72rem] leading-[1.5] text-muted/55">
              PLACEHOLDER — approved photography slot. No committee member is
              identifiable. Replace with an image cleared for publication.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
