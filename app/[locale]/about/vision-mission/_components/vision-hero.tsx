import Image from "next/image";
import { cn } from "@/lib/utils";

const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

const HEADLINE: { word: string; accent?: boolean }[] = [
  { word: "Vision." },
  { word: "Mission." },
  { word: "Delivery.", accent: true },
];

const CTAS: { label: string; href: string; variant: "glow" | "ghost" }[] = [
  { label: "See how it is delivered", href: "#vision-delivery", variant: "glow" },
  { label: "Our story", href: "/about/our-story", variant: "ghost" },
];

const META: { label: string; value: string }[] = [
  { label: "Origin", value: "Africa" },
  { label: "Model", value: "Originate · Build · Operate" },
  { label: "Reach", value: "Five operating regions" },
];

export default function VisionHero() {
  return (
    <section
      aria-labelledby="vision-hero-title"
      className="relative isolate overflow-hidden bg-sidebar pt-[clamp(84px,9vw,124px)] text-muted"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image
          src="/placeholders/vision-hero.png"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-sidebar via-sidebar/92 to-sidebar/45" />
        <div className="absolute inset-0 bg-linear-to-t from-sidebar via-sidebar/60 to-sidebar/80" />
      </div>

      <div className="relative mx-auto flex min-h-[clamp(430px,62vh,640px)] max-w-[1440px] flex-col justify-end px-[clamp(20px,5vw,72px)] pt-[clamp(30px,5vw,60px)] pb-[clamp(30px,5vw,56px)]">
        <nav
          aria-label="Breadcrumb"
          className="mb-[clamp(22px,3vw,34px)] flex flex-wrap items-center gap-2 text-[0.72rem] font-semibold tracking-[0.14em] uppercase"
        >
          <a
            href="/about"
            className="text-muted/60 transition-colors duration-(--transition-fast) ease-(--ease-standard) hover:text-accent"
          >
            About
          </a>
          <span aria-hidden="true" className="text-muted/35">
            /
          </span>
          <span aria-current="page" className="text-accent">
            Vision &amp; Mission
          </span>
        </nav>

        <h1
          id="vision-hero-title"
          className="max-w-[14ch] font-sans text-[clamp(2.6rem,7.6vw,6.4rem)] leading-[0.92] font-extrabold tracking-[-0.01em] uppercase [font-stretch:120%]"
        >
          {HEADLINE.map((line) => (
            <span
              key={line.word}
              className={cn("block", line.accent && "text-accent")}
            >
              {line.word}
            </span>
          ))}
        </h1>

        <p className="mt-[clamp(20px,3vw,30px)] max-w-[54ch] text-[clamp(1rem,1.35vw,1.18rem)] leading-[1.55] text-muted/85">
          Where Waterlight Group is going, what it does to get there, and the
          discipline that keeps both honest.
        </p>

        <div className="mt-[clamp(26px,3.5vw,38px)] flex flex-wrap items-center gap-3">
          {CTAS.map((cta) => (
            <a
              key={cta.href}
              href={cta.href}
              className={
                cta.variant === "glow"
                  ? `${BTN_BASE_CLASS} bg-accent text-sidebar hover:-translate-y-px hover:bg-[#7defd2] motion-reduce:transform-none`
                  : `${BTN_BASE_CLASS} border-current bg-transparent hover:bg-secondary hover:text-sidebar`
              }
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>

      <div className="relative border-t border-accent/20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-3 gap-px bg-accent/20 max-[760px]:grid-cols-1">
          {META.map((item) => (
            <div
              key={item.label}
              className="bg-sidebar px-[clamp(18px,3.4vw,44px)] py-[clamp(15px,1.9vw,22px)]"
            >
              <span className="block text-[0.64rem] font-semibold tracking-[0.16em] text-muted/45 uppercase">
                {item.label}
              </span>
              <span className="mt-2 block font-sans text-[clamp(0.92rem,1.4vw,1.12rem)] leading-[1.2] font-bold uppercase [font-stretch:112%]">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
