import Link from "next/link";
import Reveal from "../../../(home)/_components/reveal";

const LINKS: { label: string; href: string; note: string }[] = [
  {
    label: "Impact overview",
    href: "/impact",
    note: "The four Impact routes",
  },
  {
    label: "Sustainability",
    href: "/impact/sustainability",
    note: "Operating discipline",
  },
  {
    label: "Development Partnerships",
    href: "/impact/development-partnerships",
    note: "Partner categories",
  },
  {
    label: "Partner with us",
    href: "/partner-with-us",
    note: "Work with the group",
  },
];

export default function IhealClosing() {
  return (
    <section
      aria-labelledby="iheal-closing-title"
      className="bg-sidebar py-[clamp(64px,8vw,112px)] text-muted"
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <div className="max-w-[64ch]">
            <p className="flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.16em] text-accent uppercase">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Continue
            </p>
            <h2
              id="iheal-closing-title"
              className="mt-[clamp(12px,1.8vw,20px)] max-w-[12ch] font-sans text-[clamp(2rem,5vw,3rem)] leading-[0.94] font-extrabold tracking-[-0.01em] uppercase [font-stretch:114%] lg:text-[clamp(3rem,4.4vw,4.4rem)]"
            >
              Read it
              <br />
              in context.
            </h2>
            <p className="mt-[clamp(14px,2vw,22px)] max-w-[48ch] text-[clamp(0.9rem,1.15vw,1rem)] leading-[1.6] text-muted/65">
              The framework is one part of how the group approaches
              development. Explore the related Impact pages, or speak to us
              about a development partnership.
            </p>
          </div>

          <nav
            aria-label="Continue through Impact"
            className="mt-[clamp(28px,4vw,48px)]"
          >
            <ul className="grid list-none grid-cols-1 gap-px border-t border-muted/20 bg-muted/15 p-0 sm:grid-cols-2 lg:grid-cols-4">
              {LINKS.map((link) => (
                <li key={link.href} className="bg-sidebar">
                  <Link
                    href={link.href}
                    className="group flex h-full flex-col justify-between gap-6 px-[clamp(14px,2vw,22px)] py-[clamp(16px,2.4vw,24px)] transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:bg-sidebar-accent focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span className="font-sans text-[clamp(0.78rem,1.1vw,0.92rem)] font-bold tracking-[0.02em] uppercase [font-stretch:108%]">
                        {link.label}
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-accent transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </span>
                    <span className="text-[0.56rem] font-semibold tracking-[0.12em] text-muted/40 uppercase">
                      {link.note}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
