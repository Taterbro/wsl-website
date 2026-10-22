import { ROLE_ROUTES } from "../_data/agriculture";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

export default function AgricultureConversion() {
  return (
    <section
      aria-labelledby="agriculture-conversion-title"
      className="relative overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[52vw] w-[52vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(120,200,120,0.14),transparent_62%)] blur-[80px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="mx-auto max-w-[880px] text-center">
          <p className="mb-6 flex items-center justify-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
            <span
              aria-hidden="true"
              className="h-px w-[clamp(18px,3vw,40px)] bg-accent/55"
            />
            07 — Build with Waterlight
            <span
              aria-hidden="true"
              className="h-px w-[clamp(18px,3vw,40px)] bg-accent/55"
            />
          </p>
          <h2
            id="agriculture-conversion-title"
            className="font-sans text-[clamp(2.2rem,5.6vw,4.8rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
          >
            Grow with
            <br />
            <span className="text-accent">Waterlight.</span>
          </h2>
          <p className="mx-auto mt-[clamp(20px,3vw,30px)] max-w-[58ch] text-[clamp(1rem,1.3vw,1.14rem)] leading-[1.65] text-muted/80">
            Whether you produce, process, buy, finance or regulate food, the
            chain works better when its links are planned together.
          </p>
          <div className="mt-[clamp(26px,3.5vw,38px)] flex flex-wrap items-center justify-center gap-3">
            <a
              href="/contact"
              className={`${BTN_BASE_CLASS} bg-accent text-sidebar hover:-translate-y-px hover:bg-[#7defd2] motion-reduce:transform-none`}
            >
              Discuss a project
            </a>
            <a
              href="/projects/portfolio"
              className={`${BTN_BASE_CLASS} border-current bg-transparent hover:bg-secondary hover:text-sidebar`}
            >
              See the portfolio
            </a>
          </div>
        </div>

        <div className="mx-auto mt-[clamp(42px,5.5vw,70px)] max-w-[1100px]">
          <p className="text-center text-[0.62rem] font-semibold tracking-[0.16em] text-muted/45 uppercase">
            Choose the route that fits
          </p>
          <ul className="mt-4 grid list-none grid-cols-2 gap-x-[clamp(24px,5vw,64px)] p-0 max-[760px]:grid-cols-1">
            {ROLE_ROUTES.map((route) => (
              <li key={route.role} className="border-t border-accent/20">
                <a
                  href={route.href}
                  className="group flex items-start justify-between gap-4 py-[clamp(14px,2vw,20px)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  <span>
                    <span className="block font-sans text-[clamp(0.92rem,1.2vw,1.05rem)] leading-[1.2] font-bold uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) group-hover:text-accent [font-stretch:110%]">
                      {route.role}
                    </span>
                    <span className="mt-1.5 block max-w-[46ch] text-[0.82rem] leading-[1.5] text-muted/60">
                      {route.copy}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex-none text-accent transition-transform duration-(--transition-normal) ease-(--ease-standard) group-hover:translate-x-1 motion-reduce:transform-none"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-[clamp(30px,4vw,44px)] max-w-[760px] text-center text-[0.74rem] leading-[1.55] text-muted/55">
          PLACEHOLDER — role routes and destination links are indicative and
          should be confirmed against live site navigation.
        </p>
      </div>
    </section>
  );
}
