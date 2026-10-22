import Reveal from "../../../(home)/_components/reveal";
import { SCOPE } from "../_data/industry";

export default function IndustryScope() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        id="industry-scope"
        aria-labelledby="industry-scope-title"
        className="relative overflow-hidden bg-sidebar py-[clamp(64px,8vw,120px)] text-muted"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/35 to-transparent"
        />

        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="flex flex-wrap items-end justify-between gap-[clamp(16px,3vw,40px)]">
            <div className="max-w-[46ch]">
              <p className="mb-5 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
                />
                03 — Scope of work
              </p>
              <h2
                id="industry-scope-title"
                className="font-sans text-[clamp(1.9rem,4.6vw,3.8rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                One team, from site
                <br />
                to output.
              </h2>
            </div>
            <p className="max-w-[40ch] text-[clamp(0.95rem,1.2vw,1.05rem)] leading-[1.6] text-muted/75">
              The industrial scope rarely divides cleanly. We hold it as one
              sequence, so the plant arrives ready to produce.
            </p>
          </div>

          <ul className="mt-[clamp(28px,4vw,52px)] grid list-none grid-cols-2 gap-px bg-accent/20 p-0 md:grid-cols-3 lg:grid-cols-6">
            {SCOPE.map((item, index) => (
              <li key={item} className="bg-sidebar px-[clamp(12px,1.6vw,20px)] py-[clamp(16px,2vw,24px)]">
                <span className="font-sans text-[0.62rem] font-extrabold tracking-[0.16em] text-accent [font-stretch:114%]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-3 block font-sans text-[clamp(0.85rem,1.1vw,0.98rem)] leading-[1.3] font-bold uppercase [font-stretch:110%]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Reveal>
  );
}
