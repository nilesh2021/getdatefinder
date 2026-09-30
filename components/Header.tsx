"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { PublicOffer } from "@/lib/offers";
import { navLinks } from "@/lib/site";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { CloseIcon, ExternalLinkIcon, MenuIcon } from "@/components/Icons";

type HeaderProps = {
  featured?: PublicOffer | null;
  /** Light page shell — frosted white bar and dark wordmark. */
  surface?: "default" | "bright";
};

export function Header({ featured = null, surface = "default" }: HeaderProps) {
  const isBright = surface === "bright";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const ctaHref = featured ? `/go/${featured.id}` : "/#offers";
  const ctaExternal = Boolean(featured);
  const ctaLabel = featured ? `Visit ${featured.name}` : "Explore Offers";

  const ctaClass = isBright
    ? "btn-usa-base btn-usa-primary gap-1.5 whitespace-nowrap px-4 py-2.5 text-sm hover:-translate-y-px hover:btn-usa-primary-hover active:translate-y-0 sm:px-5 sm:py-3"
    : "btn-clay inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-bold hover:btn-clay-hover sm:px-5 sm:py-3";

  const headerShell =
    isBright && (scrolled || open)
      ? "border-b border-brand-500/20 bg-white/80 backdrop-blur-xl shadow-[0_12px_40px_-28px_rgb(217_130_95_/_0.55)]"
      : isBright
        ? "border-b border-transparent bg-white/35 backdrop-blur-md"
        : scrolled || open
          ? "border-b border-brand-400/15 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent";

  const navLinkClass = isBright
    ? "whitespace-nowrap rounded-full px-3.5 py-2 text-[0.78rem] font-medium tracking-[0.04em] text-stone-600 transition-colors hover:bg-brand-500/10 hover:text-stone-900"
    : "whitespace-nowrap rounded-full px-3.5 py-2 text-[0.78rem] font-medium tracking-[0.04em] text-ink-500 transition-colors hover:text-ink-900";

  const menuBtnClass = isBright
    ? "inline-flex h-11 w-11 items-center justify-center rounded-full text-stone-700 transition-colors hover:bg-brand-500/10 lg:hidden"
    : "inline-flex h-11 w-11 items-center justify-center rounded-full text-ink-700 transition-colors hover:bg-white/5 lg:hidden";

  const mobileMenuClass = isBright
    ? "border-t border-brand-500/15 bg-white/95 backdrop-blur-xl lg:hidden"
    : "border-t border-brand-400/15 bg-background/95 backdrop-blur-xl lg:hidden";

  const mobileLinkClass = isBright
    ? "block rounded-xl px-4 py-3 text-base font-medium tracking-wide text-stone-800 transition-colors hover:bg-brand-500/10"
    : "block rounded-xl px-4 py-3 text-base font-medium tracking-wide text-ink-800 transition-colors hover:bg-white/5";

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300 ${headerShell}`}
    >
      <Container>
        <nav aria-label="Primary" className="flex h-[4.25rem] items-center justify-between gap-4 sm:h-20">
          <Logo onClick={close} tone={isBright ? "dark" : "light"} />

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={navLinkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {ctaExternal ? (
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className={`${ctaClass} hidden sm:inline-flex`}
              >
                {ctaLabel}
                <ExternalLinkIcon className="h-3.5 w-3.5" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <Link href={ctaHref} className={`${ctaClass} hidden sm:inline-flex`}>
                {ctaLabel}
              </Link>
            )}

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={menuBtnClass}
            >
              {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </Container>

      <div
        id="mobile-menu"
        hidden={!open}
        className={mobileMenuClass}
      >
        <Container className="py-5">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  className={mobileLinkClass}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              {ctaExternal ? (
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  onClick={close}
                  className={`${ctaClass} flex w-full gap-2`}
                >
                  {ctaLabel}
                  <ExternalLinkIcon className="h-4 w-4" />
                </a>
              ) : (
                <Link href={ctaHref} onClick={close} className={`${ctaClass} flex w-full`}>
                  {ctaLabel}
                </Link>
              )}
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
}
