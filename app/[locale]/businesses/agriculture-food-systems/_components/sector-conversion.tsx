import Reveal from "../../../(home)/_components/reveal";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const CTAS: { label: string; href: string; variant: "glow" | "ghost" }[] = [
  { label: "Partner with us", href: "/contact", variant: "glow" },
  {
    label: "Project development",
    href: "/investments/project-development",
    variant: "ghost",
  },
];

const ROLES: { role: string; copy: string; href: string }[] = [
  {
    role: "Investors",
    copy: "Capital partners seeking structured exposure to agri-infrastructure, processing and cold chains.",
    href: "/investments/opportunities",
  },
  {
    role: "Project owners",
    copy: "Sponsors with land, production or offtake that need structuring and delivery capability.",
    href: "/projects",
  },
  {
    role: "Governments & institutions",
    copy: "Public agencies and institutions strengthening food security and market access.",
    href: "/contact",
  },
  {
    role: "Industry & communities",
    copy: "Processors, distributors and communities seeking reliable supply and lower loss.",
    href: "/contact",
  },
];

export default function SectorConversion() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="agriculture-conversion-title"
        className="relative overflow-hidden bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[22vw] -left-[16vw] h-[52vw] w-[52vw] rounded-full bg-[radial-gradient(circle,rgba(214,162,74,0.16),transparent_64%)] blur-[80px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[24vw] -right-[18vw] h-[50vw] w-[50vw] rounded-full bg-[radial-gradient(circle,rgba(100,216,232,0.12),transparent_64%)] blur-[80px]"
        />

        <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="grid grid-cols-[0.86fr_1.14fr] items-start gap-[clamp(30px,5vw,72px)] max-[980px]:grid-cols-1">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
                />
                07 — Build with Waterlight
              </p>
              <h2
                id="agriculture-conversion-title"
                className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Grow the
                <br />
                next chain.
              </h2>
              <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[48ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted/80">
                Food infrastructure needs the right site, offtake and operating
                partner. Tell us what you hold, and we will tell you honestly
                what it takes.
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

            <ul className="grid list-none grid-cols-2 gap-x-[clamp(20px,3.4vw,48px)] p-0 max-[760px]:grid-cols-1">
              {ROLES.map((role, index) => (
                <li key={role.role} className="border-t border-accent/20">
                  <a
                    href={role.href}
                    className="group flex items-start gap-[clamp(10px,1.4vw,16px)] py-[clamp(16px,2.2vw,24px)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                  >
                    <span className="pt-[6px] font-sans text-[0.66rem] font-extrabold tracking-[0.14em] text-accent [font-stretch:112%]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">
                      <span className="block font-sans text-[clamp(0.98rem,1.4vw,1.16rem)] leading-[1.18] font-extrabold uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) group-hover:text-accent [font-stretch:112%]">
                        {role.role}
                      </span>
                      <span className="mt-2 block max-w-[38ch] text-[0.86rem] leading-[1.55] text-muted/70">
                        {role.copy}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-1 text-accent transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-[clamp(34px,5vw,58px)] max-w-[82ch] border-t border-accent/20 pt-[clamp(20px,2.8vw,30px)] text-[0.74rem] leading-[1.6] text-muted/55">
            Confidential investment material is never published on this website.
            Capabilities and project concepts shown are scope illustrations, not
            a delivery record or an offer.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
