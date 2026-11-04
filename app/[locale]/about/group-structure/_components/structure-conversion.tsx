import Reveal from "../../../(home)/_components/reveal";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const CTAS: { label: string; href: string; variant: "glow" | "ghost" }[] = [
  { label: "Partner with us", href: "/contact", variant: "glow" },
  { label: "Careers", href: "/careers", variant: "ghost" },
];

const ROLES: { role: string; copy: string; href: string }[] = [
  {
    role: "Investors",
    copy: "Capital, funds and family offices looking for structured exposure to essential-need assets.",
    href: "/investments/opportunities",
  },
  {
    role: "Governments & sponsors",
    copy: "Public agencies and project sponsors that need private-sector delivery for water, energy and urban infrastructure.",
    href: "/contact",
  },
  {
    role: "Financial institutions",
    copy: "Banks, DFIs and credit partners covering project debt and structured finance.",
    href: "/contact",
  },
  {
    role: "Technology partners",
    copy: "Technology owners looking for deployment, localisation and industrial partnerships.",
    href: "/innovation/technology-partnerships",
  },
];

export default function StructureConversion() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="group-conversion-title"
        className="relative overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[22vw] -left-[16vw] h-[52vw] w-[52vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.14),transparent_64%)] blur-[80px]"
        />

        <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="grid grid-cols-[0.86fr_1.14fr] items-start gap-[clamp(30px,5vw,72px)] max-[980px]:grid-cols-1">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
                />
                05 — Build with Waterlight
              </p>
              <h2
                id="group-conversion-title"
                className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Start with the
                <br />
                right entity.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[48ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted/80">
                Every mandate has a door. Tell us which one you need, and we
                will route you to the team that owns it.
              </p>
              <div className="mt-[clamp(22px,3vw,32px)] flex flex-wrap items-center gap-3">
                {CTAS.map((cta) => (
                  <a
                    key={cta.href}
                    href={cta.href}
                    className={
                      cta.variant === "glow"
                        ? `${BTN_BASE_CLASS} bg-accent text-sidebar hover:-translate-y-px hover:bg-[#7defd2] motion-reduce:transform-none`
                        : `${BTN_BASE_CLASS} border-current bg-transparent hover:bg-secondary hover:text-sidebar`
                    }
                  >
                    {cta.label}
                  </a>
                ))}
              </div>
            </div>

            <ul className="grid list-none grid-cols-2 gap-px self-stretch border border-accent/20 bg-accent/20 p-0 max-[760px]:grid-cols-1">
              {ROLES.map((role) => (
                <li key={role.role} className="bg-sidebar-accent/60">
                  <a
                    href={role.href}
                    className="group flex h-full flex-col gap-3 p-[clamp(18px,2.6vw,30px)] transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-sidebar-accent focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
                  >
                    <span className="font-sans text-[clamp(0.98rem,1.5vw,1.18rem)] leading-[1.15] font-extrabold uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) group-hover:text-accent [font-stretch:114%]">
                      {role.role}
                    </span>
                    <span className="flex-1 text-[0.88rem] leading-[1.55] text-muted/70">
                      {role.copy}
                    </span>
                    <span className="inline-flex items-center gap-2 text-[0.74rem] font-semibold tracking-[0.06em] text-accent uppercase">
                      Route me
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-[clamp(34px,5vw,58px)] grid grid-cols-[1.4fr_0.6fr] items-start gap-[clamp(18px,3vw,40px)] border-t border-accent/20 pt-[clamp(20px,2.8vw,30px)] max-[860px]:grid-cols-1">
            <p className="max-w-[80ch] text-[0.76rem] leading-[1.6] text-muted/60">
              Entity names, roles and mandates shown on this page describe how
              the group is organised on the public website. They do not state
              ownership, control or registered particulars, and they must be
              validated by counsel before publication.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 justify-self-start text-[0.78rem] font-semibold tracking-[0.06em] text-accent uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent max-[860px]:justify-self-auto"
            >
              Request corporate information
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
