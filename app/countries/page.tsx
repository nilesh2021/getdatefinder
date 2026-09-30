import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { CountriesByLetterList } from "@/components/country/CountriesByLetterList";
import { countryLandings } from "@/lib/country-landings";
import { siteConfig } from "@/lib/site";

const pageTitle = `Dating offers by country | ${siteConfig.name}`;
const pageDescription =
  "Browse free adult dating offer comparison pages by country. 18+ only. Compare platforms and open external dating sites in a new tab.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "/countries" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/countries",
    type: "website",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function CountriesPage() {
  const headingId = "countries-index-heading";

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:btn-clay focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1 py-16 sm:py-24">
        <Container>
          <nav aria-label="Breadcrumb" className="text-sm text-ink-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="font-medium text-brand-300 hover:text-brand-200">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-ink-400">/</li>
              <li className="font-medium text-ink-800">Countries</li>
            </ol>
          </nav>

          <div className="mt-8">
            <SectionHeading
              id={headingId}
              align="left"
              eyebrow="Regional pages"
              title={
                <>
                  Browse by{" "}
                  <span className="text-accent-italic">country</span>
                </>
              }
              description="Choose a country to compare free adult dating offers for your region. Each page lists three platforms you can open in a new tab."
            />
          </div>

          <div className="mt-10">
            <CountriesByLetterList landings={countryLandings} />
          </div>
        </Container>
      </main>
    </>
  );
}
