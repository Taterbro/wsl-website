import type { BoardBoardHero } from "@/lib/cms/generated";

import { Btn, Eyebrow, WRAP_CLASS } from "./board-shared";
import {
  BOARD_INTRO,
  BOARD_STATS as FALLBACK_STATS,
} from "../_data/board";

const FALLBACK_HEADING = "The board that\nanswers for\nthe work.";

const FALLBACK_DESCRIPTION = BOARD_INTRO.summary;

const FALLBACK_IMAGE_ALT =
  "Placeholder artwork standing in for photography of the board of directors seated in session";

export default function BoardHero({ data }: { data: BoardBoardHero }) {
  const heading = data.heading || FALLBACK_HEADING;
  const headingLines = heading.split("\n");
  const stats = data.stats.length ? data.stats : FALLBACK_STATS;
  const imageAlt = data.image
    ? data.image.alt || data.image_alt || FALLBACK_IMAGE_ALT
    : "";

  return (
    <section
      aria-labelledby="board-hero-title"
      className="relative isolate overflow-hidden bg-sidebar text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[24vw] -right-[18vw] h-[58vw] w-[58vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.15),transparent_62%)] blur-[80px]"
      />

      <div
        className={`${WRAP_CLASS} relative grid grid-cols-[1.06fr_0.94fr] items-center gap-[clamp(30px,5vw,72px)] pt-[clamp(56px,8vw,108px)] pb-[clamp(48px,7vw,92px)] max-[980px]:grid-cols-1`}
      >
        <div>
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
              Board
            </span>
          </nav>

          <Eyebrow tone="dark">{BOARD_INTRO.strap}</Eyebrow>

          <h1
            id="board-hero-title"
            className="mt-[clamp(18px,2.6vw,26px)] font-sans text-[clamp(2.4rem,6.6vw,5.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:118%]"
          >
            {headingLines.length === 3 ? (
              <>
                {headingLines[0]}
                <br />
                {headingLines[1]}
                <br />
                <span className="text-accent">{headingLines[2]}</span>
              </>
            ) : (
              heading
            )}
          </h1>

          <p className="mt-[clamp(20px,2.8vw,30px)] max-w-[52ch] text-[clamp(1rem,1.3vw,1.14rem)] leading-[1.6] text-muted/85">
            {data.description || FALLBACK_DESCRIPTION}
          </p>

          <div className="mt-[clamp(24px,3.4vw,36px)] flex flex-wrap items-center gap-3">
            <Btn href="#board-roster" variant="glow">
              Meet the board
            </Btn>
            <Btn href="/about/governance" variant="ghost">
              Governance framework
            </Btn>
          </div>
        </div>

        <div>
          <figure>
            <div className="relative aspect-[16/10] overflow-hidden border border-accent/20">
              {data.image ? (
                <div
                  role={imageAlt ? "img" : undefined}
                  aria-label={imageAlt || undefined}
                  aria-hidden={imageAlt ? undefined : true}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${data.image.url})` }}
                />
              ) : null}
            </div>
            {data.image ? (
              <figcaption className="mt-3 text-[0.72rem] leading-[1.5] text-muted/55">
                PLACEHOLDER — approved photography slot. No director is
                identifiable. Replace with an image cleared for publication.
              </figcaption>
            ) : null}
          </figure>

          <dl className="mt-[clamp(16px,2.2vw,24px)] grid grid-cols-4 gap-px bg-accent/20 max-[680px]:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-sidebar px-[clamp(10px,1.5vw,18px)] py-[clamp(12px,1.6vw,18px)]"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-sans text-[clamp(0.82rem,1.3vw,1.05rem)] leading-[1.1] font-extrabold text-accent uppercase [font-stretch:114%]">
                    {stat.value}
                  </span>
                  <span className="mt-1.5 block text-[0.62rem] leading-[1.35] tracking-[0.1em] text-muted/65 uppercase">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
