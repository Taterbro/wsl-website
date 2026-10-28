import Link from "next/link";
import Reveal from "../../../(home)/_components/reveal";

export default function MediaContact() {
  return (
    <section
      id="media-contact"
      aria-labelledby="media-contact-title"
      className="scroll-mt-24 border-t border-border bg-background py-[clamp(48px,6vw,84px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="grid gap-[clamp(20px,4vw,44px)] lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-[58ch]">
              <p className="flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.16em] text-primary uppercase">
                <span aria-hidden="true" className="h-px w-8 bg-primary" />
                Media contact
              </p>
              <h2
                id="media-contact-title"
                className="mt-3 font-sans text-[clamp(2rem,4.6vw,3.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
              >
                Media enquiries.
              </h2>
              <p className="mt-4 text-[clamp(0.94rem,1.2vw,1.04rem)] leading-[1.6] text-muted-foreground">
                For interviews, comment, imagery or resource requests, contact
                the group communications team.
              </p>
              <p className="mt-3 text-[0.6rem] leading-[1.5] text-muted-foreground/70">
                PLACEHOLDER — confirm the media contact route and response
                expectations before launch.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex w-fit items-center justify-center gap-[9px] rounded-[2px] border border-primary bg-primary px-[clamp(18px,2.6vw,26px)] py-[clamp(11px,1.2vw,14px)] font-sans text-[0.78rem] font-semibold tracking-[0.06em] text-primary-foreground uppercase transition duration-(--transition-normal) ease-(--ease-standard) hover:-translate-y-px hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transform-none"
              >
                Contact the group
                <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="/insights/news"
                className="inline-flex w-fit items-center justify-center gap-[9px] rounded-[2px] border border-foreground/25 px-[clamp(18px,2.6vw,26px)] py-[clamp(11px,1.2vw,14px)] font-sans text-[0.78rem] font-semibold tracking-[0.06em] text-foreground uppercase transition duration-(--transition-normal) ease-(--ease-standard) hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Newsroom
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
