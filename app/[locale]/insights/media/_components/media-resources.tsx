import Reveal from "../../../(home)/_components/reveal";
import { MEDIA_RESOURCES } from "./media-data";

export default function MediaResources() {
  return (
    <section
      id="resources"
      aria-labelledby="media-resources-title"
      className="scroll-mt-24 bg-background py-[clamp(56px,7vw,100px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-sans text-[0.74rem] font-semibold tracking-[0.14em] text-primary/70 uppercase">
                Press resources
              </p>
              <h2
                id="media-resources-title"
                className="mt-2 font-sans text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Approved material.
              </h2>
            </div>
            <p className="max-w-[42ch] text-[0.86rem] leading-[1.55] text-muted-foreground">
              Available on request. Downloadable files and final asset packs
              are not published on this site yet.
            </p>
          </div>

          <div className="mt-[clamp(24px,3.4vw,40px)] grid gap-x-[clamp(20px,4vw,48px)] sm:grid-cols-2">
            {MEDIA_RESOURCES.map((resource) => (
              <div
                key={resource.id}
                className="border-t border-border py-[clamp(16px,2.2vw,24px)]"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-[0.56rem] font-semibold tracking-[0.14em] text-primary/60 uppercase">
                    {resource.code}
                  </p>
                  <a
                    href="#media-contact"
                    className="font-sans text-[0.62rem] font-semibold tracking-[0.08em] text-primary uppercase underline decoration-primary/30 underline-offset-4 transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:decoration-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    Request
                  </a>
                </div>
                <h3 className="mt-2 font-sans text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.2] font-bold tracking-[-0.005em] [font-stretch:106%]">
                  {resource.title}
                </h3>
                <p className="mt-2 max-w-[48ch] text-[0.82rem] leading-[1.55] text-muted-foreground">
                  {resource.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-[0.62rem] leading-[1.5] text-muted-foreground/80">
            PLACEHOLDER — resource descriptions are illustrative. Confirm asset
            availability, usage rights and approval status before release.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
