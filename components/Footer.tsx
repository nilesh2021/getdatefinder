import Link from "next/link";
import { affiliateDisclosureShort, footerLinks, navLinks, siteConfig } from "@/lib/site";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-4 rounded-t-[2.25rem] bg-cream-50 text-cream-900 sm:mt-8 sm:rounded-t-[3.5rem]">
      <Container className="pt-16 pb-10 sm:pt-24">
        <p
          aria-hidden="true"
          className="font-display text-[2.85rem] font-medium uppercase leading-[0.86] tracking-[-0.04em] text-cream-900 sm:text-7xl lg:text-[8rem]"
        >
          {siteConfig.shortName}
          <span className="mx-2 font-light italic text-brand-600 sm:mx-4">&amp;</span>
          Offers
        </p>
        <div
          aria-hidden="true"
          className="mt-8 h-px w-full bg-gradient-to-r from-cream-300 via-brand-500/40 to-cream-300"
        />

        <div className="mt-12 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-cream-600">
              {siteConfig.name} highlights online dating platforms and adult
              dating offers so you can discover, compare and visit dating
              websites with confidence. We are not a dating service.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-cream-900">
              Explore
            </h2>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-600 transition-colors hover:text-brand-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h2 className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-cream-900">
              Legal
            </h2>
            <ul className="mt-5 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-600 transition-colors hover:text-brand-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 border-t border-cream-300 pt-8">
          <p className="text-xs leading-6 text-cream-600">
            <strong className="font-semibold text-cream-800">Affiliate disclosure:</strong>{" "}
            {affiliateDisclosureShort}{" "}
            <Link
              href="/affiliate-disclosure"
              className="underline underline-offset-2 hover:text-brand-700"
            >
              Read more
            </Link>
            .
          </p>
          <p className="mt-4 text-xs tracking-wide text-cream-600">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
