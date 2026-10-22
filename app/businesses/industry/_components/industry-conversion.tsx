import Reveal from "../../../(home)/_components/reveal";
import { INDUSTRY_ROUTES } from "../_data/industry";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

export default function IndustryConversion() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        id="industry-partner"
        aria-labelledby="industry-conversion-title"
        className="relative overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[26vw] -left-[14vw] h-[52vw] w-[52vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.13),transparent_64%)] blur-[90px]"
        />

        <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="grid grid-cols-[0.92fr_1.08fr] gap-[clamp(26px,4vw,64px)] max-[980px]:grid-cols-1">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
                />
                05 — Build with Waterlight
              </p>
              <h2
                id="industry-conversion-title"
                className="font-sans text-[clamp(2rem,5.4vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Bring us the
                <br />
                <span className="text-accent">hard part.</span>
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[48ch] text-[clamp(1rem,1.3vw,1.14rem)] leading-[1.6] text-muted/80">
                An industrial brief, a plant to localise, a market to enter.
                We will tell you what it takes to build and operate it.
              </p>

              <div className="mt-[clamp(24px,3.4vw,36px)] flex flex-wrap items-center gap-3">
                <a
                  href="/contact"
                  className={`${BTN_BASE_CLASS} bg-accent text-sidebar hover:-translate-y-px hover:bg-[#7defd2] motion-reduce:transform-none`}
                >
                  Start a conversation
                </a>
                <a
                  href="/investments/joint-ventures"
                  className={`${BTN_BASE_CLASS} border-current bg-transparent hover:bg-secondary hover:text-sidebar`}
                >
                  Joint ventures
                </a>
              </div>
            </div>

            <ul className="m-0 list-none border-t border-accent/20 p-0">
              {INDUSTRY_ROUTES.map((route, index) => (
                <li key={route.role} className="border-b border-accent/20">
                  <a
                    href={route.href}
                    className="group flex items-start gap-[clamp(12px,1.6vw,20px)] py-[clamp(16px,2.2vw,24px)] transition-colors duration-(--transition-fast) ease-(--ease-standard) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                  >
                    <span className="pt-[4px] font-sans text-[0.64rem] font-extrabold tracking-[0.16em] text-accent [font-stretch:114%]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">
                      <span className="block font-sans text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.2] font-extrabold uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) group-hover:text-accent [font-stretch:112%]">
                        {route.role}
                      </span>
                      <span className="mt-2 block max-w-[46ch] text-[0.92rem] leading-[1.55] text-muted/70">
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
          </div>
        </div>
      </section>
    </Reveal>
  );
}
