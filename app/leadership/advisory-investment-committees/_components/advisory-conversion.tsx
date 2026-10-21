import Reveal from "../../../(home)/_components/reveal";
import { Btn } from "./advisory-shared";
import { ADVISORY_INTRO, ADVISORY_ROLES } from "../_data/advisory";

export default function AdvisoryConversion() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        id="advisory-contact"
        aria-labelledby="advisory-conversion-title"
        className="relative overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[20vw] -right-[16vw] h-[54vw] w-[54vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.14),transparent_64%)] blur-[80px]"
        />

        <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="flex flex-wrap items-end justify-between gap-[clamp(20px,3vw,44px)]">
            <div className="max-w-[56ch]">
              <p className="mb-6 flex items-center gap-3 text-[0.76rem] font-semibold tracking-[0.12em] text-accent uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
                />
                05 — Committee enquiries
              </p>
              <h2
                id="advisory-conversion-title"
                className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Engage the
                <br />
                people who
                <br />
                test the work.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[52ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted/80">
                Whether you would serve on a committee or need to understand how
                its advice reaches decision, the route starts here.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Btn href="/contact" variant="glow">
                Contact the group
              </Btn>
              <Btn href="/about/governance" variant="ghost">
                Governance framework
              </Btn>
            </div>
          </div>

          <div className="mt-[clamp(34px,5vw,58px)] grid grid-cols-4 gap-px bg-accent/20 max-[980px]:grid-cols-2 max-[560px]:grid-cols-1">
            {ADVISORY_ROLES.map((item) => (
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

          <div className="mt-6 flex flex-col gap-2">
            <p className="max-w-[78ch] text-[0.74rem] leading-[1.55] text-muted/55">
              {ADVISORY_INTRO.office}. Committee mandates, membership, chairs and
              appointments are published only once formally constituted and
              approved.
            </p>
            <p className="max-w-[78ch] text-[0.74rem] leading-[1.55] text-muted/55">
              No confidential investment material is published on public pages.
              Approved summaries are available with a request for access.
            </p>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
