import Link from "next/link";
import { cn } from "@/lib/utils";

interface MediaHeaderProps {
  coverageCount: number;
  resourceCount: number;
}

export default function MediaHeader({
  coverageCount,
  resourceCount,
}: MediaHeaderProps) {
  const pressDesk = [
    {
      label: "Coverage",
      value: `${coverageCount.toString().padStart(2, "0")} selected mentions`,
      href: "#coverage",
    },
    {
      label: "Resources",
      value: `${resourceCount.toString().padStart(2, "0")} press items`,
      href: "#resources",
    },
    {
      label: "Enquiries",
      value: "Media contact",
      href: "#media-contact",
    },
  ];

  return (
    <section
      aria-labelledby="media-title"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)] pt-[clamp(42px,5vw,72px)] pb-[clamp(30px,4vw,48px)]">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[0.72rem] font-medium tracking-[0.06em] text-muted-foreground uppercase">
            <li>
              <Link
                href="/"
                className="transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>Insights</li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-foreground">
              Media
            </li>
          </ol>
        </nav>

        <div className="mt-[clamp(24px,3.6vw,42px)]">
          <span aria-hidden="true" className="block h-1 w-16 bg-primary" />
          <p className="mt-5 font-sans text-[0.76rem] font-semibold tracking-[0.14em] text-primary/70 uppercase">
            Insights · Press room
          </p>
          <h1
            id="media-title"
            className="mt-3 font-sans text-[clamp(3.2rem,9.5vw,7.8rem)] leading-[0.84] font-extrabold tracking-[-0.015em] uppercase [font-stretch:120%]"
          >
            Media.
          </h1>
          <p className="mt-5 max-w-[58ch] text-[clamp(1rem,1.4vw,1.18rem)] leading-[1.6] text-muted-foreground">
            Selected coverage, press resources and contact for journalists.
            External links and downloadable assets are released only after
            approval.
          </p>
        </div>

        <div className="mt-[clamp(26px,4vw,44px)] grid grid-cols-1 border-y border-border sm:grid-cols-3">
          {pressDesk.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center justify-between gap-4 px-[clamp(14px,2vw,22px)] py-[clamp(14px,2vw,20px)] transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:bg-muted/60 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary",
                index > 0 && "border-t border-border sm:border-t-0 sm:border-l"
              )}
            >
              <span>
                <span className="block text-[0.56rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  {item.label}
                </span>
                <span className="mt-1 block font-sans text-[clamp(0.8rem,1.1vw,0.92rem)] font-bold tracking-[0.02em] uppercase [font-stretch:108%]">
                  {item.value}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="text-primary transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-y-0.5"
              >
                ↓
              </span>
            </a>
          ))}
        </div>

        <p className="mt-4 text-[0.6rem] leading-[1.5] text-muted-foreground/80">
          PLACEHOLDER — coverage, resource entries and contact details are
          illustrative until approved media content is supplied.
        </p>
      </div>
    </section>
  );
}
