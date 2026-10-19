"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Brandmark from "../brand-mark";
import { NAV_LINKS, UTILITY_LINKS } from "./constants";

const burgerSpanClass =
  "my-[5px] block h-0.5 w-6 bg-current transition-transform transition-opacity duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none";

const navToggleClass =
  "relative inline-flex cursor-pointer items-center gap-1.5 border-0 bg-transparent py-1.5 text-left text-[0.82rem] font-medium tracking-[0.02em] text-inherit opacity-80 transition-opacity duration-(--transition-normal) ease-(--ease-standard) after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-(--transition-normal) after:ease-(--ease-standard) hover:opacity-100 hover:after:scale-x-100 max-[1199px]:w-full max-[1199px]:py-[15px] max-[1199px]:border-b max-[1199px]:border-b-white/10 max-[1199px]:text-[1rem] max-[1199px]:opacity-100 max-[1199px]:after:hidden";

const subLinkClass =
  "block py-2.5 text-[0.95rem] leading-snug text-popover-foreground opacity-80 transition-colors transition-opacity duration-(--transition-normal) ease-(--ease-standard) hover:text-accent hover:opacity-100 focus-visible:text-accent focus-visible:opacity-100 max-[1199px]:rounded-none max-[1199px]:border-b max-[1199px]:border-b-white/10 max-[1199px]:py-[13px] max-[1199px]:pl-5 max-[1199px]:text-[0.9rem] max-[1199px]:text-sidebar-foreground max-[1199px]:opacity-100";
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
            "ml-auto flex items-center gap-[clamp(12px,1.4vw,26px)] max-[1199px]:fixed max-[1199px]:inset-x-0 max-[1199px]:top-[78px] max-[1199px]:ml-0 max-[1199px]:flex-col max-[1199px]:items-stretch max-[1199px]:gap-0 max-[1199px]:bg-sidebar max-[1199px]:text-sidebar-foreground max-[1199px]:px-[clamp(20px,5vw,72px)] max-[1199px]:pt-[14px] max-[1199px]:pb-[26px] max-[1199px]:shadow-[0_20px_40px_rgba(0,0,0,0.4)] max-[1199px]:transition-transform max-[1199px]:duration-(--transition-slow) max-[1199px]:ease-(--ease-standard) max-[1199px]:motion-reduce:transition-none max-[1199px]:-translate-y-[120%] max-[1199px]:overflow-y-auto max-[1199px]:max-h-[calc(100dvh-78px)]",
            menuOpen && "max-[1199px]:translate-y-0"
          )}
        >
          {NAV_LINKS.map((link) => {
            const isOpen = openSubmenu === link.href;
            return (
              <div key={link.href}>
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
                    className="animate-nav-submenu absolute inset-x-0 top-full z-50 bg-popover text-popover-foreground shadow-[0_24px_40px_rgba(9,29,42,0.14)] max-[1199px]:static max-[1199px]:bg-transparent max-[1199px]:shadow-none"
                  >
                    <li className="overflow-hidden border-t border-border max-[1199px]:border-0">
                      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)] pt-10 pb-12 max-[1199px]:max-w-none max-[1199px]:p-0">
                        {/* Menu title + accent rule (desktop only; the toggle already shows the label on mobile) */}
                        <a
                          href={link.href}
                          className="mb-7 flex items-center gap-5 text-[1.05rem] font-semibold max-[1199px]:hidden"
                          onClick={() => {
                            setOpenSubmenu(null);
                            setMenuOpen(false);
                          }}
                        >
                          <span className="underline underline-offset-[6px]">
                            {link.label}
                          </span>
                          <span
                            aria-hidden="true"
                            className="h-px flex-1 bg-accent"
                          />
                        </a>

                        {/* Link columns */}
                        <div className="flex flex-wrap gap-x-[clamp(40px,5vw,88px)] gap-y-8 max-[1199px]:flex-col max-[1199px]:gap-y-0">
                          {link.columns.map((column, columnIndex) => (
                            <div
                              key={column.heading ?? columnIndex}
                              className="flex min-w-0 flex-col max-[1199px]:py-1"
                            >
                              {column.heading && (
                                <h3 className="mb-3.5 font-sans text-[0.72rem] font-bold tracking-[0.08em] text-accent uppercase [font-stretch:110%] max-[1199px]:mt-3 max-[1199px]:mb-1 max-[1199px]:text-[0.68rem]">
                                  {column.heading}
                                </h3>
                              )}
                              <div className="flex flex-col gap-0.5 max-[1199px]:gap-0">
                                {column.items.map((item) => (
                                  <a
                                    key={item.href}
                                    href={item.href}
                                    className={subLinkClass}
                                    onClick={() => {
                                      setOpenSubmenu(null);
                                      setMenuOpen(false);
                                    }}
                                  >
                                    {item.label}
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </li>
                  </ul>
                )}
              </div>
            );
          })}
          {UTILITY_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden text-[0.82rem] font-medium tracking-[0.02em] text-inherit opacity-60 transition-opacity duration-(--transition-normal) ease-(--ease-standard) hover:opacity-100 max-[1199px]:block max-[1199px]:border-b max-[1199px]:border-b-white/10 max-[1199px]:py-[15px] max-[1199px]:text-[1rem] max-[1199px]:opacity-100"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#partner"
            className="border border-current px-4 py-[9px] text-[0.76rem] font-semibold tracking-[0.05em] uppercase opacity-100 transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:border-accent hover:bg-accent hover:text-sidebar max-[1199px]:mt-4 max-[1199px]:block max-[1199px]:py-[15px] max-[1199px]:text-center"
            onClick={() => setMenuOpen(false)}
          >
            Partner With Us
          </a>
        </nav>
        <button
          type="button"
          className="ml-auto hidden border-0 bg-none p-2 text-inherit max-[1199px]:block"
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
