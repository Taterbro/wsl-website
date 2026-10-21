import Image from "next/image";
import Reveal from "../../../(home)/_components/reveal";
import { ENTITIES, entityByKey } from "../_data/structure";

const COMPANIES = ENTITIES.filter(
  (entity) => entity.key !== "group" && !entity.independent
);

const SAVE = entityByKey("save-initiative");

export default function StructureCompanies() {
  return (
    <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
      <section
        aria-labelledby="group-companies-title"
        className="bg-sidebar py-[clamp(72px,10vw,140px)] text-muted"
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
          <div className="max-w-[56ch]">
            <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-accent uppercase">
              <span
                aria-hidden="true"
                className="h-px w-[clamp(24px,4vw,56px)] bg-accent"
              />
              03 — Operating companies
            </p>
            <h2
              id="group-companies-title"
              className="font-sans text-[clamp(2rem,5.2vw,4.3rem)] leading-[0.96] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Four companies.
              <br />
              Four mandates.
            </h2>
            <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[56ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-muted/80">
              Each company carries one clear responsibility. Nothing is built
              twice, and no mandate is stretched to cover something it was not
              formed to do.
            </p>
          </div>

          <ul className="mt-[clamp(30px,4.4vw,52px)] list-none p-0">
            {COMPANIES.map((company, index) => (
              <li key={company.key}>
                <a
                  href={company.href}
                  className="group grid grid-cols-[auto_1fr_auto] items-start gap-[clamp(14px,2.4vw,32px)] border-t border-accent/20 py-[clamp(18px,2.6vw,30px)] transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-sidebar-accent/50 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
                >
                  <span className="font-sans text-[0.8rem] font-extrabold tracking-[0.16em] text-accent [font-stretch:114%]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex flex-col gap-2.5">
                    <span className="text-[0.66rem] font-semibold tracking-[0.14em] text-muted/50 uppercase">
                      {company.role}
                    </span>
                    <span className="font-sans text-[clamp(1.25rem,3vw,2.3rem)] leading-[1.05] font-extrabold uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) group-hover:text-accent [font-stretch:114%]">
                      {company.name}
                    </span>
                    <span className="max-w-[64ch] text-[0.93rem] leading-[1.55] text-muted/70">
                      {company.mandate}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-1 text-accent transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-[clamp(26px,3.6vw,44px)] grid grid-cols-[0.7fr_1.3fr] items-center gap-[clamp(20px,3.4vw,48px)] border border-dashed border-chart-4/45 bg-sidebar-accent/40 p-[clamp(18px,2.6vw,30px)] max-[760px]:grid-cols-1">
            <div className="relative aspect-[4/3] overflow-hidden max-[760px]:aspect-[16/9]">
              <Image
                src="/placeholders/group-structure-save.png"
                alt="Placeholder artwork standing in for photography of community water and health programme work"
                fill
                sizes="(max-width: 760px) 100vw, 32vw"
                className="object-cover"
              />
            </div>
            <div>
              <span className="inline-flex items-center rounded-[2px] border border-chart-4/35 px-3 py-[7px] text-[0.66rem] font-semibold tracking-[0.12em] text-[#d6a24a] uppercase">
                Independent nonprofit
              </span>
              <h3 className="mt-4 font-sans text-[clamp(1.25rem,2.6vw,2rem)] leading-[1.05] font-extrabold uppercase [font-stretch:114%]">
                {SAVE.name}
              </h3>
              <p className="mt-3 max-w-[58ch] text-[0.93rem] leading-[1.6] text-muted/75">
                {SAVE.mandate}
              </p>
              <a
                href={SAVE.href}
                className="mt-5 inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                Visit the initiative
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
