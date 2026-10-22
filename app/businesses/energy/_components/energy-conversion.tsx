import Reveal from "../../../(home)/_components/reveal";
import { ROLE_ROUTES } from "../_data/energy";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sidebar";

const CTAS: { label: string; href: string; variant: "solid" | "ghost" }[] = [
  { label: "Partner with us", href: "/contact", variant: "solid" },
  {
    label: "Energy opportunities",
    href: "/investments/opportunities",
    variant: "ghost",
  },
];

export default function EnergyConversion() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        id="energy-partner"
        aria-labelledby="energy-conversion-title"
        className="relative overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[18vw] -bottom-[24vw] h-[58vw] w-[58vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.14),transparent_62%)] blur-[80px]"
        />

        <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="grid grid-cols-[0.92fr_1.08fr] border border-accent/25 max-[980px]:grid-cols-1">
            <div className="bg-accent p-[clamp(24px,4vw,48px)] text-sidebar">
              <p className="mb-[clamp(18px,2.6vw,26px)] flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.14em] uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(22px,3vw,40px)] bg-sidebar/40"
                />
                07 — Build with Waterlight
              </p>
              <h2
                id="energy-conversion-title"
                className="font-sans text-[clamp(2.1rem,5.4vw,4.4rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Bring us
                <br />
                the load.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[38ch] text-[clamp(0.98rem,1.3vw,1.1rem)] leading-[1.6] text-sidebar/80">
                A network under pressure, a site without reliable supply, a
                project that needs structuring — tell us where the power fails,
                and we will tell you what it takes to fix it.
              </p>
              <div className="mt-[clamp(22px,3vw,32px)] flex flex-wrap items-center gap-3">
                {CTAS.map((cta) => (
                  <a
                    key={cta.href}
                    href={cta.href}
                    className={
                      cta.variant === "solid"
                        ? `${BTN_BASE_CLASS} bg-sidebar text-muted hover:-translate-y-px hover:bg-[#0a2436] motion-reduce:transform-none`
                        : `${BTN_BASE_CLASS} border-sidebar/40 bg-transparent text-sidebar hover:bg-sidebar/10`
                    }
                  >
                    {cta.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-sidebar-accent/45 p-[clamp(24px,4vw,48px)]">
              <p className="text-[0.6rem] font-semibold tracking-[0.16em] text-accent uppercase">
                Start with your role
              </p>

              <ul className="mt-4 list-none p-0">
                {ROLE_ROUTES.map((role, index) => (
                  <li
                    key={role.role}
                    className="border-t border-accent/20 last:border-b"
                  >
                    <a
                      href={role.href}
                      className="group flex items-start gap-[clamp(12px,2vw,22px)] py-[clamp(14px,2vw,20px)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                    >
                      <span className="pt-[3px] font-sans text-[0.64rem] font-extrabold tracking-[0.16em] text-accent [font-stretch:112%]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">
                        <span className="block font-sans text-[clamp(0.96rem,1.4vw,1.1rem)] leading-[1.2] font-extrabold uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) group-hover:text-accent [font-stretch:112%]">
                          {role.role}
                        </span>
                        <span className="mt-1.5 block max-w-[40ch] text-[0.82rem] leading-[1.55] text-muted/60">
                          {role.copy}
                        </span>
                        <span className="mt-2 inline-block text-[0.64rem] font-semibold tracking-[0.06em] text-accent uppercase">
                          {role.link}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="pt-0.5 text-accent transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mt-5 max-w-[56ch] text-[0.72rem] leading-[1.55] text-muted/55">
                Confidential investment material is never published on this
                website. Approved summaries are shown here, with full
                documentation released only through an authenticated process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
