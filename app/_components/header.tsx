"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Businesses", href: "#businesses" },
  { label: "Investments", href: "#investments" },
  { label: "Projects", href: "#projects" },
  { label: "Innovation", href: "#innovation" },
  { label: "Impact", href: "#impact" },
  { label: "Insights", href: "#insights" },
];

function Brandmark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <circle
        cx="16"
        cy="16"
        r="14.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity={0.45}
      />
      <path
        d="M2 19c3.5-3.2 7-3.2 10.5 0s7 3.2 10.5 0 5-3 6-2.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="16" cy="12.5" r="3.4" className="fill-accent" />
    </svg>
  );
}

const burgerSpanClass =
  "my-[5px] block h-0.5 w-6 bg-current transition-transform transition-opacity duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none";

const navLinkClass =
  "relative py-1.5 text-[0.82rem] font-medium tracking-[0.02em] text-inherit opacity-80 transition-opacity duration-(--transition-normal) ease-(--ease-standard) after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-(--transition-normal) after:ease-(--ease-standard) hover:opacity-100 hover:after:scale-x-100 motion-reduce:transition-none max-[760px]:py-[15px] max-[760px]:border-b max-[760px]:border-b-white/10 max-[760px]:text-[1rem] max-[760px]:opacity-100 max-[760px]:after:hidden";

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="siteHead"
      className={cn(
        "fixed inset-x-0 top-0 z-[120] transition-colors transition-shadow duration-(--transition-slow) ease-(--ease-standard) motion-reduce:transition-none",
        solid
          ? "bg-[rgba(232,240,238,0.94)] text-foreground shadow-[0_1px_0_rgba(9,29,42,0.16)] backdrop-blur-[10px]"
          : "text-muted"
      )}
    >
      <div className="mx-auto flex h-[78px] max-w-[1440px] items-center gap-[clamp(16px,3vw,48px)] px-[clamp(20px,5vw,72px)]">
        <a
          href="#top"
          aria-label="Waterlight Group home"
          className="flex flex-none items-center gap-3"
        >
          <Brandmark className="h-[30px] w-[30px] flex-none" />
          <span className="font-sans text-[1.02rem] leading-none font-extrabold tracking-[0.06em] uppercase [font-stretch:120%]">
            Waterlight
            <span className="mt-1 block text-[0.56em] font-medium tracking-[0.42em] text-chart-4">
              Group
            </span>
          </span>
        </a>
        <nav
          id="nav"
          aria-label="Primary"
          className={cn(
            "ml-auto flex items-center gap-[clamp(14px,1.7vw,30px)] max-[760px]:fixed max-[760px]:inset-x-0 max-[760px]:top-[78px] max-[760px]:ml-0 max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-0 max-[760px]:bg-sidebar max-[760px]:px-[clamp(20px,5vw,72px)] max-[760px]:pt-[14px] max-[760px]:pb-[26px] max-[760px]:shadow-[0_20px_40px_rgba(0,0,0,0.4)] max-[760px]:transition-transform max-[760px]:duration-(--transition-slow) max-[760px]:ease-(--ease-standard) max-[760px]:motion-reduce:transition-none max-[760px]:-translate-y-[120%]",
            menuOpen && "max-[760px]:translate-y-0"
          )}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#partner"
            className="border border-current px-4 py-[9px] text-[0.76rem] font-semibold tracking-[0.05em] uppercase opacity-100 transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:border-accent hover:bg-accent hover:text-sidebar motion-reduce:transition-none max-[760px]:mt-4 max-[760px]:block max-[760px]:py-[15px] max-[760px]:text-center"
            onClick={() => setMenuOpen(false)}
          >
            Partner With Us
          </a>
        </nav>
        <button
          type="button"
          className="ml-auto hidden border-0 bg-none p-2 text-inherit max-[760px]:block"
          aria-expanded={menuOpen}
          aria-controls="nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={cn(
              burgerSpanClass,
              menuOpen && "translate-y-[7px] rotate-45"
            )}
          />
          <span className={cn(burgerSpanClass, menuOpen && "opacity-0")} />
          <span
            className={cn(
              burgerSpanClass,
              menuOpen && "-translate-y-[7px] -rotate-45"
            )}
          />
        </button>
      </div>
    </header>
  );
}
