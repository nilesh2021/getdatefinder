import Link from "next/link";
import { affiliateDisclosureShort, footerLinks, navLinks, siteConfig } from "@/lib/site";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-200 bg-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-6 text-ink-600">
              {siteConfig.name} highlights online dating platforms and adult
              dating offers so you can discover, compare and visit dating
              websites with confidence. We are not a dating service.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-900">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-600 transition-colors hover:text-brand-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-900">
              Legal
            </h2>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-600 transition-colors hover:text-brand-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-ink-200 pt-8">
          <p className="text-xs leading-6 text-ink-500">
            <strong className="font-semibold text-ink-700">Affiliate disclosure:</strong>{" "}
            {affiliateDisclosureShort}{" "}
            <Link href="/affiliate-disclosure" className="underline underline-offset-2 hover:text-brand-700">
              Read more
            </Link>
            .
          </p>
          <p className="mt-4 text-xs text-ink-500">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
