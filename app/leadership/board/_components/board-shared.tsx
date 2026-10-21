import Image from "next/image";

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
      className={`flex items-center gap-3 text-[0.76rem] font-semibold tracking-[0.12em] uppercase ${
        tone === "dark" ? "text-accent" : "text-primary"
      } ${className ?? ""}`}
    >
      <span
        aria-hidden="true"
        className={`h-px w-[clamp(24px,4vw,56px)] ${
          tone === "dark" ? "bg-accent" : "bg-primary/45"
        }`}
      />
      {children}
    </p>
  );
}

export function FigureBand({
  src,
  alt,
  label,
  className,
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="relative aspect-[16/9] overflow-hidden border border-[rgba(9,29,42,0.16)]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <figcaption className="mt-3 text-[0.72rem] leading-[1.5] text-muted-foreground">
        {label}
      </figcaption>
    </figure>
  );
}
