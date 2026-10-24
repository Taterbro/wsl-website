import Link from "next/link";
import Reveal from "@/app/(home)/_components/reveal";
import { ENQUIRY_ROUTES } from "@/lib/enquiry-routes";

export default function AudienceSelector() {
  return (
    <section
      id="routes"
      aria-labelledby="routes-title"
      className="bg-background py-[clamp(72px,10vw,140px)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="grid gap-[clamp(20px,4vw,48px)] lg:grid-cols-[1fr_0.8fr] lg:items-end motion-reduce:translate-y-0 motion-reduce:transition-none">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase">
              <span aria-hidden="true" className="h-px w-[clamp(24px,4vw,56px)] bg-primary" />
              01 — The selector
            </p>
            <h2
              id="routes-title"
              className="max-w-[16ch] font-sans text-[clamp(2.1rem,5.4vw,4.4rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:116%]"
            >
              Who are you?
            </h2>
          </div>
          <p className="max-w-[48ch] text-[clamp(1rem,1.35vw,1.18rem)] leading-[1.65] text-muted-foreground lg:pb-2">
            Each route opens a form built around your role. A few qualifying
            questions now means a more useful first conversation later.
          </p>
        </Reveal>

        <ul className="mt-[clamp(32px,4.5vw,56px)] grid list-none grid-cols-3 gap-px border border-border bg-border p-0 max-[1080px]:grid-cols-2 max-[720px]:grid-cols-1">
          {ENQUIRY_ROUTES.map((route, index) => (
            <li key={route.slug} className="bg-background">
              <Link
                href={route.href}
                className="group flex h-full min-h-[clamp(210px,20vw,260px)] flex-col justify-between gap-8 p-[clamp(20px,2.4vw,30px)] transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-accent/[0.08] focus-visible:bg-accent/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary motion-reduce:transition-none"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-sans text-[0.7rem] font-extrabold tracking-[0.16em] text-primary [font-stretch:112%]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-[1.1rem] leading-none text-primary transition-transform duration-(--transition-normal) ease-(--ease-standard) group-hover:translate-x-1 motion-reduce:transition-none"
                  >
                    →
                  </span>
                </div>

                <div>
                  <h3 className="max-w-[18ch] font-sans text-[clamp(1.1rem,1.7vw,1.42rem)] leading-[1.12] font-extrabold tracking-[-0.005em] uppercase [font-stretch:112%]">
                    {route.selectorLabel}
                  </h3>
                  <p className="mt-3 max-w-[36ch] text-[0.9rem] leading-[1.55] text-muted-foreground">
                    {route.summary}
                  </p>
                </div>

                <p className="border-t border-border pt-3 text-[0.68rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                  {route.audience}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
