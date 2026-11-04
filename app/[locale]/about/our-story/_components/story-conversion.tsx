const ROLES: { role: string; copy: string; href: string; cta: string }[] = [
  {
    role: "Investors",
    copy: "Capital, funds and family offices looking for structured, essential-need exposure.",
    href: "/investments",
    cta: "Investment opportunities",
  },
  {
    role: "Governments",
    copy: "Public agencies seeking public-private delivery for water, energy and urban infrastructure.",
    href: "/contact",
    cta: "Start a conversation",
  },
  {
    role: "Financial institutions",
    copy: "Banks, DFIs and financing partners covering project debt and structured credit.",
    href: "/contact",
    cta: "Discuss financing",
  },
  {
    role: "Technology partners",
    copy: "Technology owners seeking deployment, localisation and industrial partnerships.",
    href: "/innovation/technology-partnerships",
    cta: "Technology partnerships",
  },
  {
    role: "Project owners",
    copy: "Sponsors with a project that needs capital, structuring and delivery capability.",
    href: "/projects",
    cta: "View the portfolio",
  },
  {
    role: "Market entry",
    copy: "Companies and institutions entering an African market or corridor.",
    href: "/global-markets",
    cta: "Global markets",
  },
];

const CTAS: { label: string; href: string; variant: "glow" | "ghost" }[] = [
  { label: "Partner with us", href: "/contact", variant: "glow" },
  { label: "Careers", href: "/careers", variant: "ghost" },
];

export default function StoryConversion() {
  return (
    <section
      id="story-partner"
      aria-labelledby="story-conversion-title"
      className="relative overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[30vw] -right-[24vw] h-[70vw] w-[70vw] rounded-full bg-[radial-gradient(circle,rgba(95,227,198,0.2),transparent_62%)] blur-[70px]"
      />
      <div className="relative mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="grid grid-cols-[1fr_1fr] items-end gap-[clamp(28px,4vw,60px)] max-[1080px]:grid-cols-1">
          <div>
            <p className="mb-5 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
              Where we go next
            </p>
            <h2
              id="story-conversion-title"
              className="font-sans text-[clamp(2.1rem,5.6vw,4.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Build with
              <br />
              Waterlight.
            </h2>
          </div>
          <div>
            <p className="max-w-[54ch] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-normal text-muted/80">
              The story so far is only the beginning of it. If you are
              investing, entering a market, developing infrastructure or
              deploying technology, we would like to hear from you.
            </p>
            <div className="mt-[clamp(22px,3vw,32px)] flex flex-wrap items-center gap-3">
              {CTAS.map((cta) => (
                <a
                  key={cta.href}
                  href={cta.href}
                  className={
                    cta.variant === "glow"
                      ? "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent bg-accent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-sidebar uppercase transition duration-(--transition-normal) ease-(--ease-standard) hover:-translate-y-px hover:bg-[#7defd2]"
                      : "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-current bg-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard) hover:bg-secondary hover:text-sidebar"
                  }
                >
                  {cta.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[clamp(34px,5vw,58px)] grid grid-cols-3 gap-px border border-accent/20 bg-accent/20 max-[1080px]:grid-cols-2 max-[760px]:grid-cols-1">
          {ROLES.map((role) => (
            <article
              key={role.role}
              className="flex flex-col gap-3 bg-sidebar-accent p-[clamp(20px,2.6vw,32px)] transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-primary"
            >
              <h3 className="font-sans text-[1.05rem] font-extrabold uppercase [font-stretch:114%]">
                {role.role}
              </h3>
              <p className="flex-1 text-[0.9rem] leading-[1.55] text-muted/75">
                {role.copy}
              </p>
              <a
                href={role.href}
                className="text-[0.76rem] font-semibold tracking-[0.06em] text-accent uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-muted"
              >
                {role.cta}
                <span aria-hidden="true" className="ml-1.5">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>

        <p className="mt-5 max-w-[78ch] text-[0.74rem] leading-[1.5] text-muted/55">
          Confidential investment material is never published on this website.
          Approved summaries are shown here, with full documentation released
          only through an authenticated process.
        </p>
      </div>
    </section>
  );
}
