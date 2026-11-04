import Image from "next/image";
import Reveal from "../../../(home)/_components/reveal";

// PLACEHOLDER — gate names, copy and evidence labels are illustrative until
// approved sustainability content is supplied.
interface Gate {
  no: string;
  name: string;
  copy: string;
  evidence: string;
  href: string;
  link: string;
}

const GATES: Gate[] = [
  {
    no: "01",
    name: "Screening",
    copy: "Environmental and social risk is assessed before capital is committed — including climate exposure, water stress, labour and community impact.",
    evidence: "Risk register · exclusion list",
    href: "/investments/strategy",
    link: "Investment strategy",
  },
  {
    no: "02",
    name: "Design",
    copy: "Resource intensity, resilience and lifecycle cost are modelled at design, not measured after the asset is built.",
    evidence: "Design standard · energy & water model",
    href: "/businesses/climate-esg-solutions",
    link: "Climate & ESG",
  },
  {
    no: "03",
    name: "Delivery",
    copy: "Contractors and partners are held to agreed safety, labour and environmental requirements through construction.",
    evidence: "Site audits · incident reporting",
    href: "/about/governance",
    link: "Governance",
  },
  {
    no: "04",
    name: "Operation",
    copy: "Operating assets are tracked against the assumptions they were financed on, with corrective action recorded.",
    evidence: "Operating KPIs · annual review",
    href: "/projects/portfolio",
    link: "Portfolio",
  },
];

export default function DecisionGates() {
  return (
    <section
      aria-labelledby="gates-title"
      className="bg-secondary py-[clamp(72px,10vw,140px)] text-foreground"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="flex flex-col gap-[clamp(18px,2.6vw,34px)] lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[52ch]">
              <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] text-primary uppercase">
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
                />
                04 — Decision gates
              </p>
              <h2
                id="gates-title"
                className="mt-4 font-sans text-[clamp(2rem,4.8vw,4rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                ESG is a gate,
                <br />
                not a paragraph.
              </h2>
            </div>

            <p className="max-w-[42ch] text-[0.78rem] leading-[1.6] text-foreground/65 lg:text-right">
              Four points where sustainability changes a decision. Each gate
              produces a record that can be reviewed — by us, by partners and by
              the institutions financing the asset.
            </p>
          </div>

          <ol className="mt-[clamp(30px,4.5vw,54px)] grid list-none gap-px border border-foreground/15 bg-foreground/15 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {GATES.map((gate) => (
              <li
                key={gate.no}
                className="group flex flex-col bg-secondary px-[clamp(16px,2.2vw,26px)] py-[clamp(20px,2.8vw,32px)] transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-muted"
              >
                <div className="flex items-center justify-between gap-3 border-b border-foreground/15 pb-3">
                  <span className="font-sans text-[0.72rem] font-extrabold tracking-[0.16em] text-chart-4 [font-stretch:112%]">
                    {gate.no}
                  </span>
                  <span className="text-[0.54rem] font-semibold tracking-[0.12em] text-foreground/45 uppercase">
                    Gate
                  </span>
                </div>
                <h3 className="mt-[clamp(16px,2vw,22px)] font-sans text-[clamp(1.2rem,1.8vw,1.5rem)] leading-[1.1] font-extrabold uppercase [font-stretch:112%]">
                  {gate.name}
                </h3>
                <p className="mt-3 flex-1 text-[0.82rem] leading-[1.55] text-foreground/70">
                  {gate.copy}
                </p>
                <p className="mt-4 border-t border-foreground/10 pt-3 text-[0.62rem] leading-[1.45] text-foreground/55">
                  <span className="block font-semibold tracking-[0.1em] uppercase">
                    Evidence
                  </span>
                  {gate.evidence}
                </p>
                <a
                  href={gate.href}
                  className="mt-4 inline-flex items-center gap-1.5 self-start border-b border-primary/45 pb-0.5 text-[0.62rem] font-semibold tracking-[0.08em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary"
                >
                  {gate.link}
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ol>

          <figure className="mt-[clamp(24px,3.6vw,42px)]">
            <div className="relative aspect-[21/9] min-h-[240px] overflow-hidden border border-foreground/15">
              <Image
                src="/placeholders/story-field-digital.png"
                alt="Placeholder image standing in for field measurement and sustainability reporting"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-r from-sidebar via-sidebar/55 to-sidebar/10"
              />
              <p className="absolute top-[clamp(16px,2.4vw,28px)] left-[clamp(16px,2.4vw,28px)] border border-accent/35 bg-sidebar/75 px-2.5 py-1.5 text-[0.54rem] font-semibold tracking-[0.14em] text-accent uppercase">
                Evidence over assertion
              </p>
              <blockquote className="absolute right-[clamp(16px,2.4vw,28px)] bottom-[clamp(16px,2.4vw,28px)] left-[clamp(16px,2.4vw,28px)] max-w-[34ch]">
                <p className="font-sans text-[clamp(1.1rem,2.4vw,1.9rem)] leading-[1.08] font-extrabold uppercase [font-stretch:112%]">
                  If it cannot be evidenced, it is not published.
                </p>
                <footer className="mt-2 text-[0.58rem] font-semibold tracking-[0.12em] text-muted/60 uppercase">
                  Reporting principle — wording pending approval
                </footer>
              </blockquote>
            </div>
            <figcaption className="mt-3 text-[0.6rem] leading-[1.5] text-foreground/55">
              PLACEHOLDER — imagery, gate evidence and the reporting principle
              are illustrative until approved sustainability content is
              supplied.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
