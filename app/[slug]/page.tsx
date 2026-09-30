import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryLandingView } from "@/components/country/CountryLandingView";
import {
  buildCountryLandingJsonLd,
  countryLandingSlugs,
  getCountryLanding,
  getCountryOffers,
} from "@/lib/country-landings";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return countryLandingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const landing = getCountryLanding(slug);

  if (!landing) {
    return {};
  }

  const pagePath = `/${landing.slug}`;

  return {
    title: { absolute: landing.title },
    description: landing.description,
    alternates: { canonical: pagePath },
    openGraph: {
      title: landing.title,
      description: landing.description,
      url: pagePath,
      type: "website",
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: landing.title,
      description: landing.description,
    },
  };
}

export default async function CountryLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const landing = getCountryLanding(slug);

  if (!landing) {
    notFound();
  }

  const offers = getCountryOffers(landing);
  const jsonLd = buildCountryLandingJsonLd(landing, offers);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CountryLandingView landing={landing} offers={offers} />
    </>
  );
}
