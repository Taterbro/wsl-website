import Reveal from "../../../(home)/_components/reveal";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const CTAS: { label: string; href: string; variant: "glow" | "ghost" }[] = [
  { label: "Partner with us", href: "/contact", variant: "glow" },
  {
    label: "Technology partnerships",
    href: "/innovation/technology-partnerships",
    variant: "ghost",
  },
];

const ROLES: { role: string; copy: string; href: string }[] = [
  {
    role: "Investors",
    copy: "Capital for platforms, data infrastructure and digital operating models.",
    href: "/investments/opportunities",
  },
  {
    role: "Governments & utilities",
    copy: "Public operators modernising service delivery and asset visibility.",
    href: "/contact",
  },
  {
    role: "Technology partners",
    copy: "Owners seeking deployment, localisation and integration partners.",
    href: "/innovation/technology-partnerships",
  },
  {
    role: "Project owners",
    copy: "Asset owners whose operations need monitoring, automation or platforms.",
    href: "/projects",
  },
];

export default function SectorConversion() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="technology-conversion-title"
        className="relative overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[22vw] -left-[16vw] h-[52vw] w-[52vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.16),transparent_64%)] blur-[80px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[24vw] -right-[18vw] h-[50vw] w-[50vw] rounded-full bg-[radial-gradient(circle,rgba(214,162,74,0.1),transparent_64%)] blur-[80px]"
        />

        <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="flex flex-wrap items-end justify-between gap-[clamp(24px,4vw,64px)]">
            <div className="max-w-[58ch]">
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
                />
                07 — Build with Waterlight
              </p>
              <h2
                id="technology-conversion-title"
                className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Build the
                <br />
                systems layer.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[50ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted/80">
                Digital infrastructure needs operators, data owners and
                technology partners working from the same stack. Start with the
                asset or the platform you already hold.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
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

          <ul className="mt-[clamp(34px,5vw,58px)] grid list-none grid-cols-2 gap-px border border-accent/20 bg-accent/20 p-0 lg:grid-cols-4">
            {ROLES.map((role, index) => (
              <li key={role.role} className="bg-sidebar-accent/55">
                <a
                  href={role.href}
                  className="group flex h-full flex-col gap-3 p-[clamp(18px,2.4vw,28px)] transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-sidebar-accent focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
                >
                  <span className="font-sans text-[0.64rem] font-extrabold tracking-[0.16em] text-accent [font-stretch:112%]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.15] font-extrabold uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) group-hover:text-accent [font-stretch:114%]">
                    {role.role}
                  </span>
                  <span className="flex-1 text-[0.86rem] leading-[1.55] text-muted/70">
                    {role.copy}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-accent transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-[clamp(24px,3.4vw,38px)] max-w-[82ch] border-t border-accent/20 pt-[clamp(18px,2.4vw,26px)] text-[0.74rem] leading-[1.6] text-muted/55">
            Confidential investment material is never published on this website.
            Capabilities and project concepts shown are scope illustrations, not
            a delivery record or an offer.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
