import Image from "next/image";
import Link from "next/link";
import { countryLandings, type CountryLanding } from "@/lib/country-landings";
import { CountriesByLetterList } from "@/components/country/CountriesByLetterList";
import type { PublicOffer } from "@/lib/offers";
import { Header } from "@/components/Header";
import { OffersSection } from "@/components/OffersSection";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ChevronDownIcon, ArrowRightIcon, ShieldIcon, CheckIcon } from "@/components/Icons";

const trustPoints = [
  "Free to browse — no signup here",
  "Three platforms side by side",
  "Opens in a new tab when you visit",
] as const;

type CountryLandingViewProps = {
  landing: CountryLanding;
  offers: PublicOffer[];
};

export function CountryLandingView({ landing, offers }: CountryLandingViewProps) {
  const primary = offers[0];
  const heroHeadingId = "country-hero-heading";
  const faqHeadingId = "country-faq-heading";
  const ctaHeadingId = "country-cta-heading";
  const otherCountriesHeadingId = "country-other-countries-heading";

  return (
    <div className="relative z-[2] min-h-full bg-usa-hero-mesh text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:btn-usa-base focus:btn-usa-primary focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <Header featured={primary ?? null} />
      <main id="main" className="flex-1">
        <section aria-labelledby={heroHeadingId} className="relative overflow-hidden pt-6 pb-4 sm:pt-10 sm:pb-8">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-ad-panel" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow" />
          <Container>
            <nav aria-label="Breadcrumb" className="relative text-sm text-ink-500">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="font-medium text-brand-300 hover:text-brand-200">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-ink-400">
                  /
                </li>
                <li className="font-medium text-ink-800">{landing.country}</li>
              </ol>
            </nav>

            <div className="relative mt-8 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
              <div className="max-w-xl">
                <p className="inline-flex items-center gap-2 rounded-full border border-brand-400/35 bg-brand-500/10 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-brand-300">
                  <span aria-hidden="true" className="h-2 w-2 animate-pulse rounded-full bg-brand-400" />
                  {landing.countryName} · 18+ only
                </p>
                <h1
                  id={heroHeadingId}
                  className="mt-6 font-display text-[2.65rem] font-medium leading-[0.98] text-ink-900 sm:text-5xl lg:text-[3.65rem]"
                >
                  Free adult dating offers{" "}
                  <span className="text-accent-italic">{landing.h1Accent}</span>
                </h1>
                <p className="mt-6 text-base leading-8 text-ink-600 sm:text-lg">{landing.intro}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#offers"
                    className="btn-usa-base btn-usa-primary px-7 py-3.5 text-base hover:-translate-y-0.5 hover:btn-usa-primary-hover active:translate-y-0"
                  >
                    Compare offers
                    <ArrowRightIcon className="h-4 w-4" aria-hidden />
                  </a>
                  {primary ? (
                    <a
                      href={`/go/${primary.id}`}
                      target="_blank"
                      rel="noopener noreferrer nofollow sponsored"
                      className="btn-usa-base btn-usa-secondary px-7 py-3.5 text-base hover:-translate-y-0.5 hover:btn-usa-secondary-hover active:translate-y-0"
                    >
                      Visit {primary.name}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : null}
                </div>

                <ul className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  {trustPoints.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-ink-600">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brand-400/30 bg-brand-500/15 text-brand-300">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 flex items-center gap-2.5 text-sm text-ink-500">
                  <ShieldIcon className="h-4 w-4 text-brand-400" />
                  Visit buttons open the dating platform in a new tab.
                </p>
              </div>

              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 rounded-[2.25rem] bg-brand-500/20 blur-2xl"
                />
                <div className="relative overflow-hidden rounded-[2rem] border border-hairline bg-surface p-2 shadow-card">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.65rem] sm:aspect-[5/6]">
                    <Image
                      src="/images/real-couple.jpg"
                      alt="Adult couple enjoying an evening together"
                      fill
                      priority
                      sizes="(min-width: 1024px) 480px, 90vw"
                      className="object-cover"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-surface via-surface/25 to-transparent"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-400">
                        {landing.heroCuratedFor}
                      </p>
                      <p className="mt-2 font-display text-2xl font-medium leading-tight text-ink-900">
                        Pick a platform.{" "}
                        <span className="text-accent-italic">Go in one click.</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-4 rounded-2xl border border-hairline bg-surface-raised px-4 py-3 shadow-card sm:left-6">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-brand-400">
                    Platforms listed
                  </p>
                  <p className="mt-0.5 font-display text-2xl font-medium text-ink-900">{offers.length}</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <OffersSection
          offers={offers}
          showFilters={false}
          variant="ad"
          tone="usa-dark"
          featuredOfferId={primary?.id ?? null}
          eyebrow={`${landing.country} · Compare & go`}
          title={
            <>
              Three platforms to{" "}
              <span className="text-accent-italic">compare today</span>
            </>
          }
          intro="Open a card to continue on that dating platform."
          footnote={landing.availabilityNote}
        />

        <section aria-labelledby={faqHeadingId} className="scroll-mt-24 bg-usa-faq-band py-16 sm:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
              <SectionHeading
                id={faqHeadingId}
                align="left"
                tone="usa-dark"
                eyebrow="FAQ"
                title={
                  <>
                    Questions about{" "}
                    <span className="text-accent-italic">{landing.faqTitleAccent}</span>
                  </>
                }
                description={landing.faqDescription}
              />
              <div className="grid gap-3">
                {landing.faqs.map((faq, index) => (
                  <details
                    key={faq.question}
                    className="group overflow-hidden rounded-2xl border border-hairline bg-surface shadow-card open:border-brand-400/30"
                    open={index === 0}
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-ink-900 transition-colors hover:text-brand-300 sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
                      <h3 className="font-display text-lg font-medium tracking-tight">{faq.question}</h3>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-400/25 bg-surface-raised text-ink-500 transition-[transform,color,border-color] duration-300 group-open:rotate-180 group-open:border-brand-400/50 group-open:text-brand-400">
                        <ChevronDownIcon className="h-4 w-4" />
                      </span>
                    </summary>
                    <p className="border-t border-brand-400/12 px-5 pb-5 text-sm leading-7 text-ink-600 sm:px-6 sm:pb-6">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section
          aria-labelledby={otherCountriesHeadingId}
          className="scroll-mt-24 border-t border-brand-400/12 py-16 sm:py-24"
        >
          <Container>
            <SectionHeading
              id={otherCountriesHeadingId}
              align="left"
              tone="usa-dark"
              eyebrow="Browse by region"
              title={
                <>
                  Other{" "}
                  <span className="text-accent-italic">countries</span>
                </>
              }
              description="Free adult dating offer pages in other locations."
            />
            <div className="mt-10">
              <CountriesByLetterList landings={countryLandings} excludeSlug={landing.slug} />
            </div>
          </Container>
        </section>

        {primary ? (
          <section aria-labelledby={ctaHeadingId} className="py-16 sm:py-24">
            <Container>
              <div className="relative overflow-hidden rounded-[2.25rem] border border-hairline bg-usa-cta-bright px-6 py-14 text-center shadow-card sm:px-12 sm:py-20">
                <p className="relative inline-flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.32em] text-brand-400">
                  <span aria-hidden="true" className="h-px w-8 bg-brand-400/50" />
                  Today&apos;s top pick
                  <span aria-hidden="true" className="h-px w-8 bg-brand-400/50" />
                </p>
                <h2
                  id={ctaHeadingId}
                  className="relative mx-auto mt-5 max-w-2xl font-display text-4xl font-medium leading-[1.02] text-ink-900 sm:text-5xl"
                >
                  Visit {primary.name}{" "}
                  <span className="text-accent-italic">{landing.ctaFromLabel}</span>
                </h2>
                <p className="relative mx-auto mt-5 max-w-lg text-base leading-8 text-ink-600 sm:text-lg">
                  Continue on {primary.name}, or scroll up to compare the other free adult dating offers before you
                  leave.
                </p>
                <a
                  href={`/go/${primary.id}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="btn-usa-base btn-usa-primary relative mt-9 px-8 py-3.5 text-base hover:-translate-y-0.5 hover:btn-usa-primary-hover active:translate-y-0"
                >
                  Visit {primary.name}
                  <ArrowRightIcon className="h-4 w-4" aria-hidden />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </Container>
          </section>
        ) : null}
      </main>
    </div>
  );
}
