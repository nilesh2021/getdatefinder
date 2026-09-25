"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/site";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { CloseIcon, MenuIcon } from "@/components/Icons";

export function Header() {
  const [open, setOpen] = useState(false);

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
    <header className="sticky top-0 z-40 border-b border-ink-200/70 bg-background/85 backdrop-blur-md">
      <Container>
        <nav aria-label="Primary" className="flex h-16 items-center justify-between gap-4 sm:h-20">
          <Logo onClick={close} />

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-100 hover:text-ink-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/#offers"
              className="hidden whitespace-nowrap rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-[opacity,box-shadow] hover:opacity-90 hover:shadow-md sm:inline-flex"
            >
              Explore Offers
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-700 transition-colors hover:bg-ink-100 lg:hidden"
            >
              {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </Container>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-ink-200 bg-background lg:hidden"
      >
        <Container className="py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-ink-800 transition-colors hover:bg-ink-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/#offers"
                onClick={close}
                className="flex items-center justify-center rounded-full bg-brand-gradient px-5 py-3 text-base font-semibold text-white shadow-sm"
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
