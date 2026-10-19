"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Brandmark from "../brand-mark";
import { NAV_LINKS } from "./constants";

const burgerSpanClass =
  "my-[5px] block h-0.5 w-6 bg-current transition-transform transition-opacity duration-(--transition-normal) ease-(--ease-standard) motion-reduce:transition-none";

const navToggleClass =
  "relative inline-flex cursor-pointer items-center gap-1.5 border-0 bg-transparent py-1.5 text-left text-[0.82rem] font-medium tracking-[0.02em] text-inherit opacity-80 transition-opacity duration-(--transition-normal) ease-(--ease-standard) after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-(--transition-normal) after:ease-(--ease-standard) hover:opacity-100 hover:after:scale-x-100 max-[760px]:w-full max-[760px]:py-[15px] max-[760px]:border-b max-[760px]:border-b-white/10 max-[760px]:text-[1rem] max-[760px]:opacity-100 max-[760px]:after:hidden";

const subLinkClass =
  "block py-2.5 text-[0.95rem] leading-snug text-popover-foreground opacity-80 transition-colors transition-opacity duration-(--transition-normal) ease-(--ease-standard) hover:text-accent hover:opacity-100 focus-visible:text-accent focus-visible:opacity-100 max-[760px]:rounded-none max-[760px]:border-b max-[760px]:border-b-white/10 max-[760px]:py-[13px] max-[760px]:pl-5 max-[760px]:text-[0.9rem] max-[760px]:text-sidebar-foreground max-[760px]:opacity-100";
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
                    className="animate-nav-submenu absolute inset-x-0 top-full z-50 grid bg-popover text-popover-foreground shadow-[0_24px_40px_rgba(9,29,42,0.14)] max-[760px]:static max-[760px]:bg-transparent max-[760px]:shadow-none"
                  >
                    <li className="overflow-hidden border-t border-border max-[760px]:border-0">
                      <div className="mx-auto max-w-[1440px] px-[clamp(20px,5vw,72px)] pt-10 pb-12 max-[760px]:max-w-none max-[760px]:p-0">
                        <div className="flex w-full max-w-[420px] flex-col max-[760px]:max-w-none">
                          {/* Menu title + accent rule (desktop only; the toggle already shows the label on mobile) */}
                          <a
                            href={link.href}
                            className="mb-5 flex items-center gap-5 text-[1.05rem] font-semibold max-[760px]:hidden"
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

                          {/* Vertical sub-links */}
                          <div className="flex flex-col gap-0.5 pl-4 max-[760px]:pl-0">
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
                        </div>
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
