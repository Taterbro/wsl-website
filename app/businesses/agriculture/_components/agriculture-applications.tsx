import Image from "next/image";
import Reveal from "../../../(home)/_components/reveal";
import { APPLICATIONS } from "../_data/agriculture";

export default function AgricultureApplications() {
  return (
    <section
      aria-labelledby="agriculture-applications-title"
      className="relative overflow-hidden bg-sidebar pt-[clamp(72px,10vw,140px)] text-muted"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="grid grid-cols-[1.05fr_0.95fr] items-end gap-[clamp(26px,5vw,72px)] max-[900px]:grid-cols-1">
          <div>
            <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              05 — Where it matters
            </p>
            <h2
              id="agriculture-applications-title"
              className="font-sans text-[clamp(2.1rem,5.2vw,4.5rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              From farm gate
              <br />
              <span className="text-accent">to market shelf.</span>
            </h2>
          </div>
          <p className="max-w-[48ch] text-[clamp(1rem,1.3vw,1.14rem)] leading-[1.65] text-muted/80">
            Production clusters, processing parks and cold-chain corridors —
            each with a different bottleneck and a different entry point for
            capital.
          </p>
        </div>
      </div>

      <Reveal className="mt-[clamp(34px,4.8vw,58px)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
        <figure className="m-0">
          <div className="relative aspect-[16/13] w-full overflow-hidden border-y border-accent/20 sm:aspect-[16/9] lg:aspect-[21/9]">
            <Image
              src="/placeholders/group-sector-logistics.png"
              alt="Placeholder artwork standing in for photography of agricultural logistics and market infrastructure"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-sidebar via-sidebar/60 to-sidebar/10"
            />

            <div className="absolute inset-x-0 bottom-0">
              <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] pb-[clamp(20px,3vw,40px)]">
                <p className="mb-[clamp(12px,1.8vw,18px)] text-[0.62rem] font-semibold tracking-[0.16em] text-accent uppercase">
                  Where the chain is deployed
                </p>
                <ul className="grid list-none grid-cols-3 gap-x-[clamp(16px,3vw,44px)] gap-y-[clamp(12px,2vw,18px)] p-0 max-[760px]:grid-cols-2 max-[520px]:grid-cols-1">
                  {APPLICATIONS.map((application, index) => (
                    <li
                      key={application}
                      className="flex items-baseline gap-3 border-t border-accent/40 pt-2.5"
                    >
                      <span className="font-sans text-[0.6rem] font-extrabold tracking-[0.1em] text-accent [font-stretch:112%]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[clamp(0.74rem,0.95vw,0.9rem)] leading-[1.35] font-semibold uppercase">
                        {application}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <figcaption className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] pb-[clamp(20px,3vw,30px)] pt-3 text-[0.72rem] leading-[1.5] text-muted/55">
            PLACEHOLDER — approved photography slot. Application environments
            are illustrative, not a project list.
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
