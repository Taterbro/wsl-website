import Link from "next/link";

export default function NewsClosing() {
  return (
    <section
      aria-labelledby="news-closing-title"
      className="bg-sidebar py-[clamp(56px,7vw,96px)] text-muted"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <div className="grid gap-[clamp(22px,4vw,48px)] lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-[58ch]">
            <p className="flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.16em] text-accent uppercase">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Media
            </p>
            <h2
              id="news-closing-title"
              className="mt-3 font-sans text-[clamp(2rem,4.6vw,3.6rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Media enquiries.
            </h2>
            <p className="mt-4 text-[clamp(0.94rem,1.2vw,1.04rem)] leading-[1.6] text-muted/65">
              For press and media questions about the group, contact the
              communications team.
            </p>
            <p className="mt-3 text-[0.6rem] leading-[1.5] text-muted/40">
              PLACEHOLDER — confirm media contact details before launch.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-fit items-center justify-center gap-[9px] rounded-[2px] border border-accent bg-accent px-[clamp(18px,2.6vw,26px)] py-[clamp(11px,1.2vw,14px)] font-sans text-[0.78rem] font-semibold tracking-[0.06em] text-accent-foreground uppercase transition duration-(--transition-normal) ease-(--ease-standard) hover:-translate-y-px hover:bg-[#7de4f2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transform-none"
          >
            Contact the group
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
