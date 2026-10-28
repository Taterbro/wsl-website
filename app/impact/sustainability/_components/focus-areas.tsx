import Reveal from "../../../(home)/_components/reveal";
import { SDG_FOCUS_AREAS } from "@/lib/impact";

export default function FocusAreas() {
  return (
    <section
      aria-labelledby="focus-title"
      className="relative overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[26vw] -left-[18vw] h-[60vw] w-[60vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.12),transparent_64%)] blur-[70px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="grid gap-[clamp(24px,4vw,52px)] lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] text-accent uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
                />
                05 — Areas of focus
              </p>
              <h2
                id="focus-title"
                className="mt-4 font-sans text-[clamp(2rem,4.8vw,4rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Seven areas
                <br />
                of focus.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[48ch] text-[clamp(0.98rem,1.3vw,1.14rem)] leading-[1.6] text-muted/70">
                The UN Sustainable Development Goals are used here as a
                reference language for the needs the group&apos;s sectors
                address. They are areas of focus — not a claim of contribution.
              </p>
            </div>

            <p className="max-w-[46ch] text-[0.72rem] leading-[1.6] text-muted/55 lg:justify-self-end lg:text-right">
              PLACEHOLDER — the mapping below is illustrative. No contribution,
              beneficiary count or verified outcome is claimed for any goal.
            </p>
          </div>

          <ul className="mt-[clamp(30px,4.5vw,54px)] grid list-none grid-cols-2 gap-px border border-accent/20 bg-accent/20 p-0 md:grid-cols-3 lg:grid-cols-4">
            {SDG_FOCUS_AREAS.map((area) => (
              <li
                key={area.number}
                className="group flex min-h-[clamp(150px,18vw,210px)] flex-col justify-between bg-sidebar p-[clamp(14px,2vw,24px)] transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-sidebar-accent"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-sans text-[clamp(2rem,4.6vw,3.8rem)] leading-[0.8] font-extrabold tracking-[-0.03em] text-accent/85 tabular-nums [font-stretch:120%]">
                    {String(area.number).padStart(2, "0")}
                  </span>
                  <span className="text-[0.5rem] font-semibold tracking-[0.14em] text-muted/35 uppercase">
                    Focus
                  </span>
                </div>
                <div className="mt-5 border-t border-accent/20 pt-3">
                  <h3 className="font-sans text-[clamp(0.8rem,1.15vw,0.98rem)] leading-[1.2] font-extrabold uppercase [font-stretch:108%]">
                    {area.name}
                  </h3>
                  <p className="mt-1.5 text-[0.6rem] leading-[1.4] text-muted/55">
                    {area.note}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-[clamp(20px,2.8vw,32px)] flex flex-col gap-3 border-t border-accent/20 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[66ch] text-[0.62rem] leading-[1.55] text-muted/55">
              Project-level goals are recorded against individual assets in the
              portfolio. They are not aggregated here without supporting
              evidence.
            </p>
            <a
              href="/projects/portfolio"
              className="inline-flex shrink-0 items-center gap-2 border-b border-accent pb-1 text-[0.66rem] font-semibold tracking-[0.08em] text-muted uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-accent"
            >
              View portfolio
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
