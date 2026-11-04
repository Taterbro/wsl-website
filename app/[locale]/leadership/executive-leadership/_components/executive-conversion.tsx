import Reveal from "../../../(home)/_components/reveal";
import { Btn } from "./executive-shared";
import { EXEC_INTRO, EXEC_ROLES } from "../_data/executive";

export default function ExecutiveConversion() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        id="executive-contact"
        aria-labelledby="executive-conversion-title"
        className="relative overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[22vw] -left-[16vw] h-[52vw] w-[52vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.14),transparent_64%)] blur-[80px]"
        />

        <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="flex flex-wrap items-end justify-between gap-[clamp(20px,3vw,44px)]">
            <div className="max-w-[56ch]">
              <p className="mb-6 flex items-center gap-3 text-[0.76rem] font-semibold tracking-[0.12em] text-accent uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
                />
                05 — Work with the team
              </p>
              <h2
                id="executive-conversion-title"
                className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Bring a problem
                <br />
                to the people who
                <br />
                build.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[52ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted/80">
                If you need to reach the team that originates, structures and
                delivers, start here — the route is organised by who you are.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Btn href="/partner-with-us/project-owners" variant="glow">
                Build with Waterlight
              </Btn>
              <Btn href="/contact" variant="ghost">
                Contact the group
              </Btn>
            </div>
          </div>

          <div className="mt-[clamp(34px,5vw,58px)] grid grid-cols-4 gap-px bg-accent/20 max-[980px]:grid-cols-2 max-[560px]:grid-cols-1">
            {EXEC_ROLES.map((item) => (
              <a
                key={item.role}
                href={item.href}
                className="group flex flex-col gap-3 bg-sidebar-accent/50 p-[clamp(18px,2.6vw,30px)] transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-sidebar-accent focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
              >
                <span className="text-[0.66rem] font-semibold tracking-[0.14em] text-accent uppercase">
                  For
                </span>
                <span className="font-sans text-[clamp(1rem,1.6vw,1.3rem)] leading-[1.12] font-extrabold uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) group-hover:text-accent [font-stretch:114%]">
                  {item.role}
                </span>
                <span className="flex-1 text-[0.88rem] leading-[1.55] text-muted/70">
                  {item.copy}
                </span>
                <span
                  aria-hidden="true"
                  className="text-accent transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            ))}
          </div>

          <p className="mt-6 max-w-[78ch] text-[0.74rem] leading-[1.55] text-muted/55">
            {EXEC_INTRO.office}. Names, titles, biographies and appointments are
            published only once confirmed by HR/corporate and formally approved.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
