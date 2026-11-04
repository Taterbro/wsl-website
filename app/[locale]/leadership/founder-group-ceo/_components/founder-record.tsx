import Image from "next/image";
import Reveal from "../../../(home)/_components/reveal";
import { Eyebrow } from "./founder-shared";
import { RECORDS, WRITINGS } from "../_data/founder";

export default function FounderRecord() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        id="founder-record"
        aria-labelledby="founder-record-title"
        className="bg-muted py-[clamp(72px,10vw,140px)] text-foreground"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="grid grid-cols-[1.05fr_0.95fr] gap-[clamp(28px,5vw,72px)] max-[980px]:grid-cols-1">
            <div>
              <Eyebrow>03 — The record</Eyebrow>
              <h2
                id="founder-record-title"
                className="mt-[clamp(20px,2.8vw,30px)] max-w-[20ch] font-sans text-[clamp(1.8rem,4.4vw,3.4rem)] leading-[0.98] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Built in stages,
                <br />
                not in a moment.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[54ch] text-[1rem] leading-[1.6] text-muted-foreground">
                The group was not launched as a completed platform. It was built
                one capability at a time, each one funding the discipline for the
                next.
              </p>

              <ol className="mt-[clamp(26px,3.6vw,42px)] list-none border-l border-[rgba(9,29,42,0.2)] p-0">
                {RECORDS.map((item) => (
                  <li
                    key={item.year}
                    className="relative pl-[clamp(18px,2.6vw,30px)] pb-[clamp(20px,2.8vw,30px)] last:pb-0"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute top-[6px] -left-[5px] h-[9px] w-[9px] rounded-full border-[1.5px] border-primary bg-muted"
                    />
                    <span className="text-[0.7rem] font-semibold tracking-[0.14em] text-primary uppercase">
                      {item.year}
                    </span>
                    <h3 className="mt-1.5 font-sans text-[1.1rem] leading-[1.14] font-extrabold uppercase [font-stretch:114%]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[54ch] text-[0.92rem] leading-[1.55] text-muted-foreground">
                      {item.copy}
                    </p>
                  </li>
                ))}
              </ol>

              <p className="mt-[clamp(18px,2.4vw,26px)] text-[0.76rem] leading-[1.6] text-muted-foreground/80">
                PLACEHOLDER — chronology is structural only. Dates and milestones
                must be verified against the approved record before publication.
              </p>
            </div>

            <div className="flex flex-col gap-[clamp(18px,2.6vw,28px)]">
              <div className="relative overflow-hidden border border-[rgba(9,29,42,0.16)] bg-sidebar text-muted">
                <div className="relative h-[clamp(180px,22vw,260px)] w-full">
                  <Image
                    src="/placeholders/founder-signature-context.png"
                    alt="Placeholder artwork standing in for an approved photograph of the Founder and Group CEO at work"
                    fill
                    sizes="(max-width: 980px) 100vw, 44vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-sidebar via-sidebar/60 to-transparent" />
                </div>
                <div className="p-[clamp(18px,2.6vw,30px)]">
                  <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-accent uppercase">
                    In his own words
                  </p>
                  <p className="mt-3 font-sans text-[clamp(1.1rem,2vw,1.6rem)] leading-[1.14] font-extrabold uppercase [font-stretch:114%]">
                    A signature quote and written statement will appear here once
                    approved.
                  </p>
                  <p className="mt-3 text-[0.8rem] leading-[1.55] text-muted/60">
                    PLACEHOLDER — quote, speech or written piece pending approval
                    and sourcing.
                  </p>
                </div>
              </div>

              <div className="border border-[rgba(9,29,42,0.16)] bg-background p-[clamp(18px,2.6vw,30px)]">
                <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  Speeches, media &amp; perspectives
                </p>
                <ul className="mt-4 list-none p-0">
                  {WRITINGS.map((item) => (
                    <li key={item.href} className="border-t border-[rgba(9,29,42,0.16)]">
                      <a
                        href={item.href}
                        className="group flex items-start gap-[clamp(12px,1.6vw,20px)] py-[clamp(12px,1.8vw,18px)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                      >
                        <span className="w-[clamp(64px,9vw,92px)] flex-none pt-[3px] text-[0.68rem] font-semibold tracking-[0.1em] text-primary uppercase">
                          {item.kind}
                        </span>
                        <span className="flex-1 font-sans text-[0.98rem] leading-[1.2] font-bold transition-colors duration-(--transition-fast) ease-(--ease-standard) group-hover:text-primary [font-stretch:108%]">
                          {item.title}
                        </span>
                        <span
                          aria-hidden="true"
                          className="mt-0.5 text-primary transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                  <li className="border-t border-[rgba(9,29,42,0.16)]" />
                </ul>
                <p className="mt-3 text-[0.74rem] leading-[1.55] text-muted-foreground/80">
                  PLACEHOLDER — records must be approved and sourced, with dates
                  attached, before appearing here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
