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

export function Btn({
  href,
  children,
  variant = "glow",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "glow" | "ghost";
}) {
  return (
    <a
      href={href}
      className={cn(
        BTN_BASE_CLASS,
        variant === "glow" &&
          "bg-accent text-sidebar hover:-translate-y-px hover:bg-[#7defd2] motion-reduce:transform-none",
        variant === "ghost" &&
          "border-current bg-transparent hover:bg-secondary hover:text-sidebar"
      )}
    >
      {children}
    </a>
  );
}
