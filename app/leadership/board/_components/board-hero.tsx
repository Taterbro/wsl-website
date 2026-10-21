import Image from "next/image";
import { BTN_BASE_CLASS, WRAP_CLASS } from "./board-shared";
import { BOARD_INTRO } from "../_data/board";

const CTAS: { label: string; href: string; variant: "glow" | "ghost" }[] = [
  { label: "How the Board is built", href: "#board-composition", variant: "glow" },
  { label: "Governance", href: "/about/governance", variant: "ghost" },
];

const STATS: { value: string; label: string }[] = [
  { value: "Independent", label: "Seats protected" },
  { value: "Capped", label: "Director tenure" },
  { value: "3", label: "Board committees" },
  { value: "Annual", label: "Board evaluation" },
];

export default function BoardHero() {
  return (
    <section
      aria-labelledby="board-hero-title"
      className="relative isolate overflow-hidden bg-sidebar text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[24vw] -left-[18vw] h-[58vw] w-[58vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.16),transparent_62%)] blur-[80px]"
      />

      <div
        className={`${WRAP_CLASS} relative grid grid-cols-[0.92fr_1.08fr] items-center gap-[clamp(30px,5vw,72px)] pt-[clamp(56px,8vw,108px)] pb-[clamp(48px,7vw,92px)] max-[980px]:grid-cols-1`}
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

          <p className="mb-[clamp(18px,2.6vw,26px)] flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.16em] text-accent uppercase">
            <span
              aria-hidden="true"
              className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
            />
            {BOARD_INTRO.strap}
          </p>

          <h1
            id="board-hero-title"
            className="font-sans text-[clamp(2.4rem,6.4vw,5.4rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:118%]"
          >
            The Board
            <br />
            holds the
            <br />
            <span className="text-accent">mandate.</span>
          </h1>

          <p className="mt-[clamp(20px,2.8vw,30px)] max-w-[52ch] text-[clamp(1rem,1.3vw,1.14rem)] leading-[1.6] text-muted/85">
            {BOARD_INTRO.summary}
          </p>

          <div className="mt-[clamp(24px,3.4vw,36px)] flex flex-wrap items-center gap-3">
            {CTAS.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                className={
                  cta.variant === "glow"
                    ? `${BTN_BASE_CLASS} bg-accent text-sidebar hover:-translate-y-px hover:bg-[#7defd2] motion-reduce:transform-none`
                    : `${BTN_BASE_CLASS} border-current bg-transparent hover:bg-secondary hover:text-sidebar`
                }
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <figure>
            <div className="relative aspect-[16/10] overflow-hidden border border-accent/20">
              <Image
                src="/placeholders/board-hero.png"
                alt="Placeholder artwork standing in for photography of a boardroom prepared for a meeting"
                fill
                preload
                sizes="(max-width: 980px) 100vw, 52vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[0.72rem] leading-[1.5] text-muted/55">
              PLACEHOLDER — approved photography slot. No board member is
              identifiable. Replace with an image cleared for publication.
            </figcaption>
          </figure>

          <dl className="mt-[clamp(16px,2.2vw,24px)] grid grid-cols-4 gap-px bg-accent/20 max-[680px]:grid-cols-2">
            {STATS.map((stat) => (
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
