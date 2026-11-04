import Reveal from "../../../(home)/_components/reveal";
import { BTN_BASE_CLASS } from "./founder-shared";
import { OFFICE, RELATED } from "../_data/founder";

export default function FounderConversion() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        id="founder-partner"
        aria-labelledby="founder-conversion-title"
        className="relative overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[22vw] -left-[16vw] h-[52vw] w-[52vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.14),transparent_64%)] blur-[80px]"
        />

        <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="max-w-[58ch]">
            <p className="mb-6 flex items-center gap-3 text-[0.76rem] font-semibold tracking-[0.12em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              04 — Build with Waterlight
            </p>
            <h2
              id="founder-conversion-title"
              className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Bring the problem.
              <br />
              We will help build it.
            </h2>
            <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[56ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted/80">
              If you have a project or a market that needs a partner with
              delivery capability and a longer horizon, the route starts here.
            </p>
            <div className="mt-[clamp(24px,3.4vw,36px)] flex flex-wrap items-center gap-3">
              <a
                href="/contact"
                className={`${BTN_BASE_CLASS} bg-accent text-sidebar hover:-translate-y-px hover:bg-[#7defd2] motion-reduce:transform-none`}
              >
                Start a conversation
              </a>
              <a
                href="/partner-with-us/market-entry"
                className={`${BTN_BASE_CLASS} border-current bg-transparent hover:bg-secondary hover:text-sidebar`}
              >
                Market entry
              </a>
            </div>
          </div>

          <div className="mt-[clamp(34px,5vw,58px)] grid grid-cols-3 gap-px bg-accent/20 max-[900px]:grid-cols-1">
            {RELATED.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex flex-col gap-3 bg-sidebar-accent/50 p-[clamp(18px,2.6vw,30px)] transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-sidebar-accent focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
              >
                <span className="text-[0.66rem] font-semibold tracking-[0.14em] text-accent uppercase">
                  Related
                </span>
                <span className="font-sans text-[clamp(1.15rem,2vw,1.5rem)] leading-[1.1] font-extrabold uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) group-hover:text-accent [font-stretch:114%]">
                  {item.label}
                </span>
                <span className="flex-1 text-[0.9rem] leading-[1.55] text-muted/70">
                  {item.copy}
                </span>
                <span
                  aria-hidden="true"
                  className="text-accent transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            ))}
          </div>

          <p className="mt-6 max-w-[78ch] text-[0.74rem] leading-[1.55] text-muted/55">
            {OFFICE.office}. Names, titles, biographies and portraits are
            published only once confirmed by HR/corporate and formally approved.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
