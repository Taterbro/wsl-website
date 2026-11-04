import Link from "next/link";
import Reveal from "../../../(home)/_components/reveal";
import { PARTNER_CATEGORIES } from "@/lib/impact";
import { cn } from "@/lib/utils";

export default function PartnerDirectory() {
  return (
    <section
      id="directory"
      aria-labelledby="directory-title"
      className="bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="flex flex-col gap-[clamp(18px,2.6vw,34px)] lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[52ch]">
              <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] text-accent uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
                />
                02 — The directory
              </p>
              <h2
                id="directory-title"
                className="mt-4 font-sans text-[clamp(2rem,4.8vw,4rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Five categories.
                <br />
                No implied agreements.
              </h2>
            </div>

            <p className="max-w-[42ch] text-[0.78rem] leading-[1.6] text-muted/60 lg:text-right">
              Start with the institution type. The engagement model follows.
              Nothing on this page identifies a specific partner.
            </p>
          </div>

          <ul className="mt-[clamp(30px,4.5vw,54px)] grid list-none grid-cols-1 gap-px border border-accent/20 bg-accent/20 p-0 md:grid-cols-2 lg:grid-cols-3">
            {PARTNER_CATEGORIES.map((category, index) => (
              <li
                key={category.id}
                className={cn(
                  "group flex flex-col bg-sidebar p-[clamp(18px,2.6vw,30px)] transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-sidebar-accent",
                  index === 0 && "lg:col-span-2"
                )}
              >
                <div className="flex items-start justify-between gap-4 border-b border-accent/20 pb-3">
                  <div>
                    <p className="font-sans text-[0.64rem] font-extrabold tracking-[0.16em] text-accent tabular-nums [font-stretch:112%]">
                      {category.code}
                    </p>
                    <h3 className="mt-2 max-w-[18ch] font-sans text-[clamp(1.15rem,1.8vw,1.55rem)] leading-[1.08] font-extrabold uppercase [font-stretch:112%]">
                      {category.name}
                    </h3>
                  </div>
                  <span className="mt-1 text-[0.52rem] font-semibold tracking-[0.12em] text-muted/35 uppercase">
                    Category
                  </span>
                </div>

                <div
                  className={cn(
                    "mt-4 flex flex-1 flex-col",
                    index === 0 && "lg:grid lg:grid-cols-2 lg:gap-x-8"
                  )}
                >
                  <div>
                    <p className="max-w-[40ch] text-[0.84rem] leading-[1.55] text-muted/65">
                      {category.description}
                    </p>

                    <div className="mt-[clamp(16px,2vw,22px)]">
                      <p className="text-[0.54rem] font-semibold tracking-[0.14em] text-muted/45 uppercase">
                        What they bring
                      </p>
                      <ul className="mt-2 list-none p-0">
                        {category.brings.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2.5 py-1 text-[0.76rem] leading-[1.45] text-muted/75"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[7px] h-1.5 w-1.5 flex-none rotate-45 bg-accent/70"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={cn(index === 0 && "lg:mt-0", "mt-5")}>
                    <p className="text-[0.54rem] font-semibold tracking-[0.14em] text-muted/45 uppercase">
                      Typical instruments
                    </p>
                    <ul className="mt-2 flex list-none flex-wrap gap-1.5 p-0">
                      {category.instruments.map((instrument) => (
                        <li
                          key={instrument}
                          className="border border-accent/30 px-2 py-1 text-[0.56rem] font-semibold tracking-[0.06em] text-accent uppercase"
                        >
                          {instrument}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 border-t border-accent/15 pt-3">
                      <p className="text-[0.54rem] font-semibold tracking-[0.14em] text-muted/45 uppercase">
                        Engagement
                      </p>
                      <p className="mt-1.5 text-[0.76rem] leading-[1.45] text-muted/70">
                        {category.engagement}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-[clamp(20px,2.8vw,32px)] flex flex-col gap-4 border-t border-accent/20 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[72ch] text-[0.62rem] leading-[1.55] text-muted/55">
              PLACEHOLDER — categories, instruments and engagement models are
              illustrative. No named partner, logo, mandate or existing
              agreement is represented here.
            </p>
            <Link
              href="/partner-with-us"
              className="inline-flex shrink-0 items-center gap-2 self-start border-b border-accent pb-1 text-[0.68rem] font-semibold tracking-[0.08em] text-muted uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-accent sm:self-auto"
            >
              Choose your route
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
