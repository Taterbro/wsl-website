import Image from "next/image";
import Link from "next/link";
import Reveal from "../../../(home)/_components/reveal";

const STEPS = [
  {
    no: "01",
    title: "Identify",
    copy: "Locate production, processing or cold-chain gaps where infrastructure changes outcomes.",
  },
  {
    no: "02",
    title: "Originate & structure",
    copy: "Shape the vehicle — EPC, JV, PPP or O&M — around the asset and its offtake.",
  },
  {
    no: "03",
    title: "Mobilize & build",
    copy: "Bring capital, technology and operating partners together to deliver.",
  },
  {
    no: "04",
    title: "Operate & scale",
    copy: "Run to measurable uptime, lower post-harvest loss and disciplined expansion.",
  },
];

export default function RoleInPlatform() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="agriculture-role-title"
        className="bg-background py-[clamp(72px,10vw,140px)]"
      >
        <div className="mx-auto grid w-full max-w-[1440px] gap-[clamp(30px,5vw,70px)] px-[clamp(20px,5vw,72px)] lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
          <div className="relative min-h-[clamp(340px,46vw,640px)] overflow-hidden bg-sidebar">
            <Image
              src="/placeholders/industry-processing.png"
              alt="Agricultural processing infrastructure at work (placeholder image)"
              fill
              sizes="(max-width: 1024px) 100vw, 44vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-sidebar/85 via-sidebar/10 to-sidebar/35"
            />
            <div className="absolute inset-x-0 bottom-0 p-[clamp(16px,2.4vw,28px)] text-muted">
              <p className="text-[0.6rem] font-semibold tracking-[0.2em] text-accent uppercase">
                The chain
              </p>
              <p className="mt-2 font-sans text-[0.82rem] leading-[1.5] font-semibold tracking-[0.03em] uppercase [font-stretch:108%]">
                Farm → Processing → Cold chain → Distribution
              </p>
              <p className="mt-2 text-[0.62rem] leading-[1.5] text-muted/50">
                PLACEHOLDER — illustrative chain, not a delivery record.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-primary/45"
              />
              04 — Role in the platform
            </p>
            <h2
              id="agriculture-role-title"
              className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Infrastructure
              <br />
              behind the
              <br />
              harvest.
            </h2>
            <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[52ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted-foreground">
              Agriculture &amp; Food Systems is where the group connects
              production to processing, storage and market access — with delivery
              discipline applied to every link.
            </p>

            <ol className="mt-[clamp(26px,3.6vw,42px)] list-none border-t border-foreground/15 p-0">
              {STEPS.map((step) => (
                <li
                  key={step.no}
                  className="grid grid-cols-[2.2rem_1fr] gap-x-4 border-b border-foreground/15 py-[clamp(12px,1.6vw,18px)]"
                >
                  <span className="pt-[3px] font-sans text-[0.68rem] font-extrabold tracking-[0.14em] text-primary/55 [font-stretch:112%]">
                    {step.no}
                  </span>
                  <div>
                    <h3 className="font-sans text-[clamp(0.96rem,1.35vw,1.15rem)] leading-[1.2] font-extrabold tracking-[0.02em] uppercase [font-stretch:112%]">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 max-w-[48ch] text-[0.88rem] leading-[1.55] text-muted-foreground">
                      {step.copy}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-[clamp(22px,3vw,34px)] flex flex-wrap items-center gap-3">
              <Link
                href="/investments/project-development"
                className="inline-flex items-center justify-center gap-[9px] rounded-[2px] bg-primary px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-primary-foreground uppercase transition duration-(--transition-normal) ease-(--ease-standard) hover:-translate-y-px hover:bg-[#174c6d] motion-reduce:transform-none"
              >
                Project development
              </Link>
              <Link
                href="/businesses/logistics-supply-chains"
                className="inline-flex items-center justify-center gap-[9px] rounded-[2px] border border-foreground/20 px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard) hover:bg-foreground hover:text-background motion-reduce:transform-none"
              >
                Cold chain &amp; logistics
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
