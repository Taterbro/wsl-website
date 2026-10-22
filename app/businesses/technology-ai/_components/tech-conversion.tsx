import Reveal from "../../../(home)/_components/reveal";
import { TECH_ROUTES } from "../_data/technology";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

export default function TechConversion() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        id="tech-partner"
        aria-labelledby="tech-conversion-title"
        className="relative overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[24vw] -right-[18vw] h-[56vw] w-[56vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.14),transparent_64%)] blur-[80px]"
        />

        <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="flex flex-wrap items-end justify-between gap-[clamp(20px,3vw,44px)]">
            <div className="max-w-[56ch]">
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
                />
                05 — Build with Waterlight
              </p>
              <h2
                id="tech-conversion-title"
                className="font-sans text-[clamp(2rem,5.4vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Put the stack
                <br />
                to work.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[52ch] text-[clamp(1rem,1.3vw,1.14rem)] leading-[1.6] text-muted/80">
                Technology earns its place by changing an outcome. Tell us the
                asset, the market and the constraint — we will tell you what it
                takes to build.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/contact"
                className={`${BTN_BASE_CLASS} bg-accent text-sidebar hover:-translate-y-px hover:bg-[#7defd2] motion-reduce:transform-none`}
              >
                Partner with us
              </a>
              <a
                href="/innovation/technology-partnerships"
                className={`${BTN_BASE_CLASS} border-current bg-transparent hover:bg-secondary hover:text-sidebar`}
              >
                Technology partnerships
              </a>
            </div>
          </div>

          <ul className="mt-[clamp(34px,5vw,58px)] grid list-none grid-cols-1 gap-x-[clamp(24px,4vw,64px)] gap-y-[clamp(18px,2.4vw,28px)] p-0 md:grid-cols-2">
            {TECH_ROUTES.map((route, index) => (
              <li key={route.role} className="border-t border-accent/20 pt-[clamp(14px,1.8vw,20px)]">
                <a
                  href={route.href}
                  className="group flex items-start gap-[clamp(12px,1.6vw,20px)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  <span className="pt-[6px] font-sans text-[0.7rem] font-extrabold tracking-[0.16em] text-accent [font-stretch:112%]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span className="block font-sans text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.2] font-extrabold uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) group-hover:text-accent [font-stretch:112%]">
                      {route.role}
                    </span>
                    <span className="mt-2 block max-w-[44ch] text-[0.9rem] leading-[1.55] text-muted/70">
                      {route.copy}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-1 text-accent transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1"
                  >
                    →
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
