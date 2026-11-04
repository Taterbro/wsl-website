import Image from "next/image";
import { cn } from "@/lib/utils";

export const WRAP_CLASS =
  "mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,72px)]";

export const BTN_BASE_CLASS =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[2px] border border-transparent px-[26px] py-[15px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition duration-(--transition-normal) ease-(--ease-standard)";

export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[0.76rem] font-semibold tracking-[0.12em] uppercase",
        tone === "dark" ? "text-accent" : "text-primary",
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "h-px w-[clamp(24px,4vw,56px)]",
          tone === "dark" ? "bg-accent" : "bg-primary/45"
        )}
      />
      {children}
    </p>
  );
}

export function PortraitSlot({
  src,
  alt,
  sizes,
  tone = "light",
  label = "PLACEHOLDER — approved portrait slot. Published only with written consent.",
  className,
}: {
  src: string;
  alt: string;
  sizes: string;
  tone?: "light" | "dark";
  label?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div
        className={cn(
          "relative aspect-[4/5] overflow-hidden border",
          tone === "dark" ? "border-accent/20" : "border-[rgba(9,29,42,0.16)]"
        )}
      >
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
      <figcaption
        className={cn(
          "mt-3 text-[0.72rem] leading-[1.5]",
          tone === "dark" ? "text-muted/55" : "text-muted-foreground"
        )}
      >
        {label}
      </figcaption>
    </figure>
  );
}
