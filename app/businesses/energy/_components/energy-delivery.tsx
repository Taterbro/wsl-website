import Reveal from "../../../(home)/_components/reveal";
import { DELIVERY_STEPS } from "../_data/energy";

export default function EnergyDelivery() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="energy-delivery-title"
        className="bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="flex flex-wrap items-end justify-between gap-x-[clamp(30px,6vw,90px)] gap-y-[clamp(20px,3vw,30px)]">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
                />
                05 — Delivery
              </p>
              <h2
                id="energy-delivery-title"
                className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.95] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                From load study
                <br />
                <span className="text-accent">to operating asset.</span>
              </h2>
            </div>
            <p className="max-w-[44ch] pb-[clamp(2px,1vw,10px)] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.65] text-muted/80">
              Delivery follows the same sequence whether the asset serves one
              factory or a public network — and operation is designed in from
              the first study, not added after commissioning.
            </p>
          </div>

          <ol className="mt-[clamp(32px,4.6vw,56px)] grid list-none grid-cols-4 gap-x-[clamp(22px,4vw,54px)] gap-y-[clamp(24px,3.4vw,34px)] p-0 max-[980px]:grid-cols-2 max-[620px]:grid-cols-1">
            {DELIVERY_STEPS.map((step) => (
              <li
                key={step.no}
                className="border-t border-accent/25 pt-[clamp(14px,2vw,20px)]"
              >
                <div className="flex items-center gap-3">
                  <span className="font-sans text-[0.66rem] font-extrabold tracking-[0.16em] text-accent [font-stretch:112%]">
                    {step.no}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px flex-1 bg-accent/20"
                  />
                </div>
                <h3 className="mt-3 font-sans text-[clamp(1.05rem,1.7vw,1.32rem)] leading-[1.15] font-extrabold uppercase [font-stretch:112%]">
                  {step.title}
                </h3>
                <p className="mt-2.5 max-w-[34ch] text-[0.9rem] leading-[1.6] text-muted/65">
                  {step.copy}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-[clamp(28px,4vw,46px)] flex flex-wrap items-end justify-between gap-x-8 gap-y-4 border-t border-accent/20 pt-[clamp(16px,2.2vw,24px)]">
            <p className="max-w-[78ch] text-[0.74rem] leading-[1.55] text-muted/55">
              PLACEHOLDER — delivery process and contract structures are
              indicative. Mandate, procurement route and terms are confirmed per
              project.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.06em] text-accent uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Talk to the delivery team
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
