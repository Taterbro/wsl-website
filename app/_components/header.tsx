"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Brandmark from "./brand-mark";

interface NavLink {
  label: string;
  href: string;
  subLinks: { label: string; href: string }[];
}

const NAV_LINKS: NavLink[] = [
  {
    label: "Businesses",
    href: "#businesses",
    subLinks: [
      { label: "Financial Services", href: "#financial-services" },
      { label: "Consumer Brands", href: "#consumer-brands" },
      { label: "Industrial Solutions", href: "#industrial-solutions" },
      { label: "Healthcare", href: "#healthcare" },
    ],
  },
  {
    label: "Investments",
    href: "#investments",
    subLinks: [
      { label: "Venture Capital", href: "#venture-capital" },
      { label: "Growth Equity", href: "#growth-equity" },
      { label: "Real Estate", href: "#real-estate" },
    ],
  },
  {
    label: "Projects",
    href: "#projects",
    subLinks: [
      { label: "Active Initiatives", href: "#active-initiatives" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Partnerships", href: "#partnerships" },
    ],
  },
  {
    label: "Innovation",
    href: "#innovation",
    subLinks: [
      { label: "R&D Labs", href: "#rd-labs" },
      { label: "Emerging Technologies", href: "#emerging-tech" },
      { label: "Sustainability", href: "#sustainability" },
    ],
  },
  {
    label: "Impact",
    href: "#impact",
    subLinks: [
      { label: "Community Programs", href: "#community-programs" },
      { label: "ESG Report", href: "#esg-report" },
      { label: "Education", href: "#education" },
    ],
  },
  {
    label: "Insights",
    href: "#insights",
    subLinks: [
      { label: "Reports", href: "#reports" },
      { label: "Newsroom", href: "#newsroom" },
      { label: "Journal", href: "#journal" },
    ],
  },
];

const burgerSpanClass =
  "my-[5px] block h-0.5 w-6 bg-current transition-transform transition-opacity duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none";

const navToggleClass =
  "relative inline-flex cursor-pointer items-center gap-1.5 border-0 bg-transparent py-1.5 text-left text-[0.82rem] font-medium tracking-[0.02em] text-inherit opacity-80 transition-opacity duration-(--transition-normal) ease-(--ease-standard) after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-(--transition-normal) after:ease-(--ease-standard) hover:opacity-100 hover:after:scale-x-100 max-[760px]:w-full max-[760px]:py-[15px] max-[760px]:border-b max-[760px]:border-b-white/10 max-[760px]:text-[1rem] max-[760px]:opacity-100 max-[760px]:after:hidden";

const subLinkClass =
  "block rounded-[calc(var(--radius)*0.75)] px-3 py-[9px] text-[0.82rem] leading-snug text-popover-foreground opacity-85 transition-colors transition-opacity duration-(--transition-normal) ease-(--ease-standard) hover:bg-muted hover:opacity-100 focus-visible:bg-muted max-[760px]:rounded-none max-[760px]:border-b max-[760px]:border-b-white/10 max-[760px]:px-0 max-[760px]:py-[13px] max-[760px]:pl-5 max-[760px]:text-[0.9rem] max-[760px]:text-sidebar-foreground";

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!openSubmenu) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenSubmenu(null);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenSubmenu(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openSubmenu]);

  return (
    <header
      id="siteHead"
      className={cn(
        "fixed inset-x-0 top-0 z-120 transition-colors transition-shadow duration-(--transition-slow) ease-(--ease-standard)",
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
          ref={navRef}
          aria-label="Primary"
          className={cn(
            "ml-auto flex items-center gap-[clamp(14px,1.7vw,30px)] max-[760px]:fixed max-[760px]:inset-x-0 max-[760px]:top-[78px] max-[760px]:ml-0 max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-0 max-[760px]:bg-sidebar max-[760px]:text-sidebar-foreground max-[760px]:px-[clamp(20px,5vw,72px)] max-[760px]:pt-[14px] max-[760px]:pb-[26px] max-[760px]:shadow-[0_20px_40px_rgba(0,0,0,0.4)] max-[760px]:transition-transform max-[760px]:duration-(--transition-slow) max-[760px]:ease-(--ease-standard) max-[760px]:motion-reduce:transition-none max-[760px]:-translate-y-[120%] max-[760px]:overflow-y-auto max-[760px]:max-h-[calc(100dvh-78px)]",
            menuOpen && "max-[760px]:translate-y-0"
          )}
        >
          {NAV_LINKS.map((link) => {
            const isOpen = openSubmenu === link.href;
            return (
              <div key={link.href} className="relative">
                <button
                  type="button"
                  className={navToggleClass}
                  aria-expanded={isOpen}
                  aria-controls={`submenu-${link.href.slice(1)}`}
                  onClick={() => setOpenSubmenu(isOpen ? null : link.href)}
                >
                  {link.label}
                  <svg
                    viewBox="0 0 10 6"
                    aria-hidden="true"
                    className={cn(
                      "h-[5px] w-[9px] flex-none transition-transform duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none",
                      isOpen && "rotate-180"
                    )}
                  >
                    <path
                      d="M1 1l4 4 4-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <ul
                    id={`submenu-${link.href.slice(1)}`}
                    className="animate-nav-submenu absolute left-0 top-full z-50 grid min-w-[230px] pt-3 max-[760px]:static max-[760px]:min-w-0 max-[760px]:pt-0"
                  >
                    <li className="overflow-hidden">
                      <div className="rounded-[var(--radius-lg)] border border-border bg-popover p-1.5 shadow-[0_16px_40px_rgba(9,29,42,0.18)] max-[760px]:rounded-none max-[760px]:border-0 max-[760px]:bg-transparent max-[760px]:p-0 max-[760px]:shadow-none">
                        {link.subLinks.map((subLink) => (
                          <a
                            key={subLink.href}
                            href={subLink.href}
                            className={subLinkClass}
                            onClick={() => {
                              setOpenSubmenu(null);
                              setMenuOpen(false);
                            }}
                          >
                            {subLink.label}
                          </a>
                        ))}
                      </div>
                    </li>
                  </ul>
                )}
              </div>
            );
          })}
          <a
            href="#partner"
            className="border border-current px-4 py-[9px] text-[0.76rem] font-semibold tracking-[0.05em] uppercase opacity-100 transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:border-accent hover:bg-accent hover:text-sidebar max-[760px]:mt-4 max-[760px]:block max-[760px]:py-[15px] max-[760px]:text-center"
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
          onClick={() => {
            setMenuOpen((open) => !open);
            setOpenSubmenu(null);
          }}
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
