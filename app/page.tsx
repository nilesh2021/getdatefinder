import type { Metadata } from "next";

import { faqs, siteConfig } from "@/lib/site";

import { Header } from "@/components/Header";

import { Hero } from "@/components/Hero";

import { AffiliateStrip } from "@/components/AffiliateStrip";

import { OffersSection } from "@/components/OffersSection";

import { Features } from "@/components/Features";

import { HowItWorks } from "@/components/HowItWorks";

import { CountriesByLetterList } from "@/components/country/CountriesByLetterList";

import { Container } from "@/components/Container";

import { SectionHeading } from "@/components/SectionHeading";

import { countryLandings } from "@/lib/country-landings";

import { Faq } from "@/components/Faq";

import { FinalCta } from "@/components/FinalCta";

import { StickyOfferBar } from "@/components/StickyOfferBar";

import { OfferPopup } from "@/components/OfferPopup";

import { offers, toPublicOffer } from "@/lib/offers";

import { toPromoCta } from "@/lib/promo";



const pageTitle = `${siteConfig.name} | Discover Online Dating Platforms & Offers`;

const pageDescription =

  "Explore curated adult dating offers and compare online dating platforms in one place. See key features, check availability and visit the dating websites where you can meet people online.";



export const metadata: Metadata = {

  title: { absolute: pageTitle },

  description: pageDescription,

  alternates: { canonical: "/" },

  openGraph: {

    title: pageTitle,

    description: pageDescription,

    url: "/",

    type: "website",

    siteName: siteConfig.name,

  },

  twitter: {

    card: "summary_large_image",

    title: pageTitle,

    description: pageDescription,

  },

};



const jsonLd = [

  {

    "@context": "https://schema.org",

    "@type": "WebSite",

    name: siteConfig.name,

    url: siteConfig.url,

    description: siteConfig.description,

  },

  {

    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: faqs.map((faq) => ({

      "@type": "Question",

      name: faq.question,

      acceptedAnswer: {

        "@type": "Answer",

        text: faq.answer,

      },

    })),

  },

];



export default function Home() {

  const featured = offers[0] ? toPublicOffer(offers[0]) : null;

  const promoCta = featured ? toPromoCta(featured) : null;



  return (

    <>

      <script

        type="application/ld+json"

        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}

      />

      <a

        href="#main"

        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:btn-clay focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"

      >

        Skip to content

      </a>

      <Header featured={featured} />

      <main id="main" className="flex-1 pb-20 sm:pb-0">

        <Hero featured={featured} />

        <AffiliateStrip />

        <OffersSection variant="ad" featuredOfferId={featured?.id ?? null} />

        <Features promoCta={promoCta} />

        <HowItWorks promoCta={promoCta} />

        <section aria-labelledby="countries-heading" className="scroll-mt-24 py-16 sm:py-24">
          <Container>
            <SectionHeading
              id="countries-heading"
              align="left"
              eyebrow="Regional pages"
              title={
                <>
                  Dating offers by{" "}
                  <span className="text-accent-italic">country</span>
                </>
              }
              description="Pick your country to compare free adult dating offers for your region. 18+ only."
            />
            <div className="mt-10">
              <CountriesByLetterList landings={countryLandings} />
            </div>
          </Container>
        </section>

        <Faq promoCta={promoCta} />

        <FinalCta featured={featured} />

      </main>

      {featured ? <StickyOfferBar offer={featured} /> : null}

      {featured ? <OfferPopup offer={featured} /> : null}

    </>

  );

}

