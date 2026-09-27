"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/site";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { CloseIcon, MenuIcon } from "@/components/Icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape and lock scroll while it's open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-brand-400/15 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container>
        <nav aria-label="Primary" className="flex h-[4.25rem] items-center justify-between gap-4 sm:h-20">
          <Logo onClick={close} />

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="whitespace-nowrap rounded-full px-3.5 py-2 text-[0.78rem] font-medium tracking-[0.04em] text-ink-500 transition-colors hover:text-ink-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/#offers"
              className="btn-clay hidden whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold hover:btn-clay-hover sm:inline-flex"
            >
              Explore Offers
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-700 transition-colors hover:bg-white/5 lg:hidden"
            >
              {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </Container>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-brand-400/15 bg-background/95 backdrop-blur-xl lg:hidden"
      >
        <Container className="py-5">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  className="block rounded-xl px-4 py-3 text-base font-medium tracking-wide text-ink-800 transition-colors hover:bg-white/5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/#offers"
                onClick={close}
                className="btn-clay flex items-center justify-center rounded-full px-5 py-3 text-base font-semibold"
              >
                Explore Offers
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
}
