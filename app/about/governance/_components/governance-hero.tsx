import Image from "next/image";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const CTAS: { label: string; href: string; variant: "glow" | "ghost" }[] = [
  { label: "See how it is governed", href: "#governance-map", variant: "glow" },
  { label: "Group structure", href: "/about/group-structure", variant: "ghost" },
];

const PRINCIPLES: { label: string; value: string }[] = [
  { label: "Bodies", value: "Board · 3 committees · Executive" },
  { label: "Named only when approved", value: "Membership published on approval" },
  { label: "Every claim checked", value: "Owner, source, approval status" },
];

export default function GovernanceHero() {
  return (
    <section
      aria-labelledby="governance-hero-title"
      className="relative isolate overflow-hidden bg-sidebar text-muted"
    >
      <div aria-hidden="true" className="relative h-[clamp(280px,34vw,460px)] w-full">
        <Image
          src="/placeholders/governance-hero.png"
          alt="Placeholder artwork standing in for photography of a boardroom in an African corporate headquarters"
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-sidebar via-sidebar/55 to-sidebar/25" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="-mt-[clamp(120px,16vw,240px)] grid grid-cols-[1.15fr_0.85fr] items-start gap-[clamp(28px,4vw,64px)] max-[980px]:grid-cols-1">
          <div className="border border-accent/20 bg-sidebar px-[clamp(20px,3.4vw,48px)] pt-[clamp(24px,3.4vw,44px)] pb-[clamp(26px,3.6vw,46px)]">
            <nav
              aria-label="Breadcrumb"
              className="mb-[clamp(20px,2.8vw,30px)] flex flex-wrap items-center gap-2 text-[0.7rem] font-semibold tracking-[0.14em] uppercase"
            >
              <a
                href="/about"
                className="text-muted/60 transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-accent"
              >
                About
              </a>
              <span aria-hidden="true" className="text-muted/35">
                /
              </span>
              <span aria-current="page" className="text-accent">
                Governance
              </span>
            </nav>

            <p className="mb-[clamp(18px,2.6vw,26px)] flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.16em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              How the group is held to account
            </p>

            <h1
              id="governance-hero-title"
              className="font-sans text-[clamp(2.4rem,6.6vw,5.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:118%]"
            >
              Oversight that
              <br />
              survives
              <br />
              <span className="text-accent">contact with reality.</span>
            </h1>

            <p className="mt-[clamp(20px,2.8vw,30px)] max-w-[52ch] text-[clamp(1rem,1.3vw,1.14rem)] leading-[1.6] text-muted/85">
              A group that builds infrastructure is judged on what it can prove.
              This is who decides what, who checks the work, and how every
              published claim is signed off.
            </p>

            <div className="mt-[clamp(24px,3.4vw,36px)] flex flex-wrap items-center gap-3">
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

          <div className="self-end pb-[clamp(4px,1vw,12px)]">
            <dl className="grid list-none grid-cols-1 gap-px bg-accent/20 p-0">
              {PRINCIPLES.map((principle) => (
                <div
                  key={principle.label}
                  className="bg-sidebar px-[clamp(14px,2vw,22px)] py-[clamp(14px,1.8vw,20px)]"
                >
                  <dt className="text-[0.62rem] font-semibold tracking-[0.16em] text-muted/45 uppercase">
                    {principle.label}
                  </dt>
                  <dd className="mt-2 font-sans text-[clamp(0.88rem,1.3vw,1.05rem)] leading-[1.25] font-bold uppercase [font-stretch:112%]">
                    {principle.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-[0.72rem] leading-[1.5] text-muted/55">
              PLACEHOLDER — approved photography slot. Replace with an image
              cleared for publication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
