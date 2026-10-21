import Reveal from "../../../(home)/_components/reveal";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const ROLES: { role: string; copy: string; href: string; link: string }[] = [
  {
    role: "Investors",
    copy: "Capital, funds and family offices looking for structured, essential-need exposure.",
    href: "/investments",
    link: "Investment opportunities",
  },
  {
    role: "Governments",
    copy: "Public agencies seeking private-sector delivery for water, energy and urban infrastructure.",
    href: "/contact",
    link: "Start a conversation",
  },
  {
    role: "Financial institutions",
    copy: "Banks, DFIs and financing partners covering project debt and structured credit.",
    href: "/contact",
    link: "Discuss financing",
  },
  {
    role: "Technology partners",
    copy: "Technology owners seeking deployment, localisation and industrial partnerships.",
    href: "/innovation/technology-partnerships",
    link: "Technology partnerships",
  },
  {
    role: "Project owners",
    copy: "Sponsors with a project that needs capital, structuring and delivery capability.",
    href: "/projects",
    link: "View the portfolio",
  },
  {
    role: "Market entry",
    copy: "Companies and institutions entering an African market or corridor.",
    href: "/global-markets",
    link: "Global markets",
  },
];

const CTAS: { label: string; href: string; variant: "glow" | "ghost" }[] = [
  { label: "Partner with us", href: "/contact", variant: "glow" },
  { label: "Careers", href: "/careers", variant: "ghost" },
];

export default function VisionConversion() {
  return (
    <Reveal>
      <section
        id="vision-partner"
        aria-labelledby="vision-conversion-title"
        className="relative overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[24vw] -left-[18vw] h-[58vw] w-[58vw] rounded-full bg-[radial-gradient(circle,rgba(95,227,198,0.16),transparent_64%)] blur-[70px]"
        />

        <div className="relative mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="max-w-[58ch]">
            <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              05 — Build with Waterlight
            </p>
            <h2
              id="vision-conversion-title"
              className="font-sans text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Put the vision
              <br />
              to work.
            </h2>
            <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[54ch] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-normal text-muted/80">
              A vision is only tested by real capital, real partners and real
              delivery. Tell us where you want to build, and we will tell you
              honestly what it takes.
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

          <ul className="mt-[clamp(34px,5vw,58px)] grid list-none grid-cols-2 gap-x-[clamp(24px,4vw,64px)] p-0 max-[760px]:grid-cols-1">
            {ROLES.map((role, index) => (
              <li key={role.role} className="border-t border-accent/20">
                <a
                  href={role.href}
                  className="group flex items-start gap-[clamp(12px,1.6vw,20px)] py-[clamp(16px,2.2vw,26px)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  <span className="pt-[7px] font-sans text-[0.7rem] font-extrabold tracking-[0.16em] text-accent [font-stretch:112%]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span className="block font-sans text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.2] font-extrabold uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) group-hover:text-accent [font-stretch:112%]">
                      {role.role}
                    </span>
                    <span className="mt-2 block max-w-[38ch] text-[0.9rem] leading-[1.55] text-muted/70">
                      {role.copy}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-1 text-accent transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1"
                  >
                    →
                  </span>
                  <span className="sr-only">{role.link}</span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-[78ch] text-[0.74rem] leading-[1.55] text-muted/55">
            Confidential investment material is never published on this
            website. Approved summaries are shown here, with full documentation
            released only through an authenticated process.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
