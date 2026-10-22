import Reveal from "../../../(home)/_components/reveal";
import { APPLICATIONS } from "../_data/energy";

export default function EnergyApplications() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="energy-applications-title"
        className="bg-background py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
            <span
              aria-hidden="true"
              className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
            />
            06 — Where the load is
          </p>
          <h2
            id="energy-applications-title"
            className="max-w-[18ch] font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.95] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
          >
            Loads with
            <br />
            different priorities.
          </h2>
          <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[54ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.65] text-muted-foreground">
            A hospital, a factory and a municipal pump set do not buy the same
            energy outcome. The system is configured around what the operator
            cannot afford to lose.
          </p>

          <div className="mt-[clamp(28px,4vw,46px)]">
            <div
              aria-hidden="true"
              className="hidden grid-cols-[1.1fr_1.5fr_auto] gap-x-[clamp(18px,3vw,46px)] border-b border-[rgba(9,29,42,0.18)] pb-3 text-[0.62rem] font-semibold tracking-[0.14em] text-muted-foreground/70 uppercase md:grid"
            >
              <span>Sector</span>
              <span>Load driver</span>
              <span>Priority</span>
            </div>

            <ul className="list-none p-0">
              {APPLICATIONS.map((application) => (
                <li
                  key={application.sector}
                  className="border-b border-[rgba(9,29,42,0.18)]"
                >
                  <div className="grid grid-cols-1 items-start gap-2 py-[clamp(15px,2.2vw,22px)] transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-muted/70 md:grid-cols-[1.1fr_1.5fr_auto] md:gap-x-[clamp(18px,3vw,46px)] md:gap-y-0">
                    <h3 className="font-sans text-[clamp(1rem,1.5vw,1.22rem)] leading-[1.2] font-extrabold uppercase [font-stretch:112%]">
                      {application.sector}
                    </h3>
                    <p className="max-w-[52ch] text-[0.9rem] leading-[1.55] text-muted-foreground">
                      {application.driver}
                    </p>
                    <span className="justify-self-start border border-primary/30 px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.06em] text-primary uppercase md:justify-self-end">
                      {application.priority}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-[clamp(26px,3.6vw,42px)] flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
            <p className="max-w-[64ch] text-[0.74rem] leading-[1.55] text-muted-foreground/80">
              PLACEHOLDER — load segments are illustrative and do not represent
              a published project portfolio.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Discuss your load
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
