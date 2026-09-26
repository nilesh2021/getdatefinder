import Link from "next/link";
import { affiliateDisclosureShort, footerLinks, navLinks, siteConfig } from "@/lib/site";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-6 rounded-t-[2rem] bg-cream-50 text-cream-900 sm:rounded-t-[3rem]">
      <Container className="pt-14 pb-10 sm:pt-20">
        {/* Oversized wordmark */}
        <p
          aria-hidden="true"
          className="font-display text-[3.25rem] font-medium uppercase leading-[0.9] tracking-[-0.02em] text-cream-900 sm:text-7xl lg:text-[7.5rem]"
        >
          {siteConfig.shortName}
          <span className="mx-3 italic text-brand-600 sm:mx-5">&amp;</span>
          Offers
        </p>

        <div className="mt-10 grid gap-10 border-t border-cream-300 pt-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-4 max-w-sm text-sm leading-6 text-cream-600">
              {siteConfig.name} highlights online dating platforms and adult
              dating offers so you can discover, compare and visit dating
              websites with confidence. We are not a dating service.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-900">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
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
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-900">
              Legal
            </h2>
            <ul className="mt-4 space-y-2.5">
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

        <div className="mt-12 border-t border-cream-300 pt-8">
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
          <p className="mt-4 text-xs text-cream-600">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
