import Image from "next/image";
import Reveal from "../../../(home)/_components/reveal";
import { APPLICATIONS } from "../_data/water";

export default function WaterApplications() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="water-applications-title"
        className="bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="grid grid-cols-[0.92fr_1.08fr] items-start gap-[clamp(30px,5vw,80px)] max-[980px]:grid-cols-1">
            <figure className="max-[980px]:order-2">
              <div className="relative aspect-[4/3] overflow-hidden border border-accent/20 lg:aspect-[4/5]">
                <Image
                  src="/placeholders/story-field-water.png"
                  alt="Placeholder artwork standing in for photography of a water facility serving a growing community"
                  fill
                  sizes="(max-width: 980px) 100vw, 44vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-sidebar/85 via-transparent to-transparent"
                />
                <p className="absolute inset-x-[clamp(16px,2.4vw,30px)] bottom-[clamp(16px,2.4vw,30px)] max-w-[22ch] font-sans text-[clamp(1rem,1.7vw,1.4rem)] leading-[1.15] font-extrabold uppercase [font-stretch:112%]">
                  Water is local.
                  <span className="mt-1 block text-accent">
                    The system is repeatable.
                  </span>
                </p>
              </div>
              <figcaption className="mt-3 text-[0.72rem] leading-[1.5] text-muted/55">
                PLACEHOLDER — approved photography slot. Replace with an image
                cleared for publication.
              </figcaption>
            </figure>

            <div className="max-[980px]:order-1">
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
                />
                05 — Where it is used
              </p>
              <h2
                id="water-applications-title"
                className="font-sans text-[clamp(2.1rem,5.2vw,4.4rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                One system.
                <br />
                <span className="text-accent">Many demands.</span>
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[50ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.65] text-muted/80">
                The same instrumented chain adapts to the demand, the climate
                and the operator — from a municipal network to a single
                industrial site.
              </p>

              <ul className="mt-[clamp(26px,3.6vw,42px)] grid list-none grid-cols-2 gap-x-[clamp(18px,3vw,42px)] p-0 max-[620px]:grid-cols-1">
                {APPLICATIONS.map((application) => (
                  <li
                    key={application.title}
                    className="border-t border-accent/20 py-[clamp(13px,1.8vw,18px)]"
                  >
                    <h3 className="font-sans text-[0.94rem] leading-[1.2] font-bold tracking-[0.03em] uppercase [font-stretch:112%]">
                      {application.title}
                    </h3>
                    <p className="mt-1.5 text-[0.85rem] leading-[1.55] text-muted/65">
                      {application.copy}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[54ch] text-[0.78rem] leading-[1.55] text-muted/55">
                Also applied in smart cities, commercial developments, mixed-use
                districts and community infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
