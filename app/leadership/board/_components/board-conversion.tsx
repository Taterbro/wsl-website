import Reveal from "../../../(home)/_components/reveal";
import { Btn } from "./board-shared";
import { BOARD_ROUTES } from "../_data/board";

export default function BoardConversion() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        id="board-partner"
        aria-labelledby="board-conversion-title"
        className="relative overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[24vw] -left-[18vw] h-[56vw] w-[56vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.14),transparent_64%)] blur-[80px]"
        />

        <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="flex flex-wrap items-end justify-between gap-[clamp(20px,3vw,44px)]">
            <div className="max-w-[56ch]">
              <p className="mb-6 flex items-center gap-3 text-[0.76rem] font-semibold tracking-[0.12em] text-accent uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
                />
                04 — Build with Waterlight
              </p>
              <h2
                id="board-conversion-title"
                className="font-sans text-[clamp(2rem,5.4vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Bring the board
                <br />
                a real problem.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[52ch] text-[clamp(1rem,1.3vw,1.14rem)] leading-[1.6] text-muted/80">
                Capital, partners and delivery are decided at Board level. Tell
                us where you want to build, and we will tell you honestly what
                it takes.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Btn href="/contact" variant="glow">
                Partner with us
              </Btn>
              <Btn href="/careers" variant="ghost">
                Careers
              </Btn>
            </div>
          </div>

          <ul className="mt-[clamp(34px,5vw,58px)] grid list-none grid-cols-1 gap-x-[clamp(24px,3vw,48px)] gap-y-[clamp(18px,2.4vw,28px)] p-0 sm:grid-cols-2 lg:grid-cols-4">
            {BOARD_ROUTES.map((route) => (
              <li key={route.role}>
                <a
                  href={route.href}
                  className="group flex h-full flex-col gap-2 border-l-2 border-accent/30 py-1 pl-[clamp(14px,1.6vw,20px)] transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  <span className="flex items-center gap-2 font-sans text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.2] font-extrabold uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) group-hover:text-accent [font-stretch:112%]">
                    {route.role}
                    <span
                      aria-hidden="true"
                      className="text-accent transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                  <span className="text-[0.88rem] leading-[1.55] text-muted/70">
                    {route.copy}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-[80ch] text-[0.74rem] leading-[1.55] text-muted/55">
            No confidential investment material is published on this website.
            Approved summaries are shown here, with full documentation released
            only through an authenticated process.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
