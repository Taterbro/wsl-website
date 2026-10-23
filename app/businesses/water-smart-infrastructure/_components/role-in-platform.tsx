import Link from "next/link";
import Reveal from "../../../(home)/_components/reveal";

const STEPS = [
  {
    no: "01",
    title: "Identify",
    copy: "Essential demand for water, energy and digital access in cities, institutions and industry.",
  },
  {
    no: "02",
    title: "Originate & structure",
    copy: "Shape bankable vehicles — equity, debt, JV, EPC or PPP — matched to the asset.",
  },
  {
    no: "03",
    title: "Mobilize & build",
    copy: "Bring partners and capital together to deliver to institutional standards.",
  },
  {
    no: "04",
    title: "Operate & scale",
    copy: "Instrumented assets feed monitoring, predictive maintenance and disciplined expansion.",
  },
];

export default function RoleInPlatform() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section aria-labelledby="role-title" className="bg-background py-[clamp(72px,10vw,140px)]">
        <div className="mx-auto grid w-full max-w-[1440px] gap-[clamp(30px,5vw,70px)] px-[clamp(20px,5vw,72px)] lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
              <span aria-hidden="true" className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45" />
              04 — Role in the platform
            </p>
            <h2
              id="role-title"
              className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              From need
              <br />
              to reliable
              <br />
              access.
            </h2>
            <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[48ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
              Water & Smart Infrastructure is the entry point for the group’s
              build-operate discipline: demand first, structure second, delivery
              to measurable uptime.
            </p>
            <div className="mt-[clamp(22px,3vw,34px)] flex flex-wrap items-center gap-3">
              <Link
                href="/investments/project-development"
                className="inline-flex items-center justify-center gap-[9px] rounded-[2px] bg-primary px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-primary-foreground uppercase transition duration-(--transition-normal) ease-(--ease-standard) hover:-translate-y-px hover:bg-[#174c6d] motion-reduce:transform-none"
              >
                Project development
              </Link>
              <Link
                href="/businesses"
                className="inline-flex items-center justify-center gap-[9px] rounded-[2px] border border-foreground/20 px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard) hover:bg-foreground hover:text-background motion-reduce:transform-none"
              >
                All businesses
              </Link>
            </div>
          </div>

          <div className="grid gap-px border border-accent/15 bg-accent/15 sm:grid-cols-2">
            {STEPS.map((step) => (
              <article
                key={step.no}
                className="flex h-full flex-col gap-3 bg-sidebar text-muted p-[clamp(18px,2.6vw,28px)]"
              >
                <span className="font-sans text-[1.6rem] font-extrabold text-accent [font-stretch:114%]">
                  {step.no}
                </span>
                <h3 className="font-sans text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.18] font-extrabold tracking-[0.02em] uppercase [font-stretch:112%]">
                  {step.title}
                </h3>
                <p className="max-w-[36ch] text-[0.9rem] leading-[1.6] text-muted/78">
                  {step.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
