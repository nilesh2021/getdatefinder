/**
 * Country landing pages.
 *
 * Each entry is one SEO page such as /free-adult-dating-offers-in-usa.
 * Served by app/[slug]/page.tsx — add countries here only.
 * Offer ids must exist in the catalogue in lib/offers.ts.
 */
import { getOfferById, toPublicOffer, type PublicOffer } from "@/lib/offers";
import { siteConfig } from "@/lib/site";

export type CountryFaq = {
  question: string;
  answer: string;
};

export type CountryLanding = {
  slug: string;
  country: string;
  countryName: string;
  offerIds: readonly string[];
  title: string;
  description: string;
  intro: string;
  /** Italic segment in the hero H1, e.g. "in Australia". */
  h1Accent: string;
  /** Hero image caption line, e.g. "Curated for Australian adults". */
  heroCuratedFor: string;
  faqTitleAccent: string;
  faqDescription: string;
  availabilityNote: string;
  ctaFromLabel: string;
  faqs: CountryFaq[];
};

const defaultOfferIds = ["realsexclub", "naughtycharm", "dirtydating"] as const;

const sharedIntro =
  "Compare three platforms below and open the site you want in a new tab.";
const sharedFaqDescription = "Common questions before you visit an external platform.";
const sharedAvailabilityNote = "Visit Offer opens the external platform in a new tab.";

export const usaLanding: CountryLanding = {
  slug: "free-adult-dating-offers-in-usa",
  country: "USA",
  countryName: "United States",
  offerIds: defaultOfferIds,
  title: "Free Adult Dating Offers in USA",
  description: "Adult dating offer comparison for the United States. 18+ only.",
  intro: sharedIntro,
  h1Accent: "in the USA",
  heroCuratedFor: "Curated for US adults",
  faqTitleAccent: "US offers",
  faqDescription: sharedFaqDescription,
  availabilityNote: sharedAvailabilityNote,
  ctaFromLabel: "from the USA",
  faqs: [
    {
      question: "What free adult dating offers are listed for the United States?",
      answer:
        "This page lists free adult dating offers aimed at adults in the United States. You can read short summaries of three adult dating platforms, compare key features side by side, and choose which external dating site to open—without creating an account on this comparison page.",
    },
    {
      question: "How do I compare three adult dating platforms here?",
      answer:
        "Scroll to the offer cards to compare three adult dating platforms in one view. Each card shows the platform name, a brief description, and feature highlights so you can decide which adult dating offer fits you before you visit.",
    },
    {
      question: "What happens when I visit an external dating site?",
      answer:
        "Each Visit Offer button opens the external dating platform in a new tab. You leave this comparison site and continue on the third-party adult dating website you selected.",
    },
    {
      question: "Are these adult dating offers available in the USA?",
      answer:
        "Offers are listed for adults in the United States, but availability still depends on each platform. The external dating site confirms whether you can join from your state or location after you click visit.",
    },
    {
      question: "Is it free to browse these offers, and who can use them?",
      answer:
        "Browsing and comparing free adult dating offers on this page costs nothing. Any paid membership happens on the external platform. You must be 18 or older; listed sites are third-party adult dating services, not operated by this site.",
    },
  ],
};

export const australiaLanding: CountryLanding = {
  slug: "free-adult-dating-offers-in-australia",
  country: "Australia",
  countryName: "Australia",
  offerIds: defaultOfferIds,
  title: "Free Adult Dating Offers in Australia",
  description: "Adult dating offer comparison for Australia. 18+ only.",
  intro: sharedIntro,
  h1Accent: "in Australia",
  heroCuratedFor: "Curated for Australian adults",
  faqTitleAccent: "Australian offers",
  faqDescription: sharedFaqDescription,
  availabilityNote: sharedAvailabilityNote,
  ctaFromLabel: "from Australia",
  faqs: [
    {
      question: "What free adult dating offers can Australian adults compare here?",
      answer:
        "This page gathers free adult dating offers for adults in Australia. Compare three adult dating platforms side by side, read summaries and features, and visit the external dating site you prefer—no signup is required on this comparison page.",
    },
    {
      question: "How does comparing three dating platforms work?",
      answer:
        "Each offer card represents a separate adult dating platform. You can compare descriptions and feature tags across all three before you click Visit Offer to open your chosen dating website in a new tab.",
    },
    {
      question: "Will the dating site open on this page or externally?",
      answer:
        "Visit buttons open the external adult dating platform in a new tab. This site only helps you compare offers; messaging, profiles, and payments happen on the third-party dating site.",
    },
    {
      question: "Are adult dating offers available across Australia?",
      answer:
        "Listings target adults in Australia, but each platform sets its own coverage. After you visit, the external dating site will show whether you can register from your area.",
    },
    {
      question: "Is browsing free, and what is the age requirement?",
      answer:
        "Comparing free adult dating offers here is free. Paid plans apply only if you join on an external platform. You must be 18 or older to use these third-party adult dating services.",
    },
  ],
};

export const austriaLanding: CountryLanding = {
  slug: "free-adult-dating-offers-in-austria",
  country: "Austria",
  countryName: "Austria",
  offerIds: defaultOfferIds,
  title: "Free Adult Dating Offers in Austria",
  description: "Adult dating offer comparison for Austria. 18+ only.",
  intro: sharedIntro,
  h1Accent: "in Austria",
  heroCuratedFor: "Curated for Austrian adults",
  faqTitleAccent: "Austrian offers",
  faqDescription: sharedFaqDescription,
  availabilityNote: sharedAvailabilityNote,
  ctaFromLabel: "from Austria",
  faqs: [
    {
      question: "Which free adult dating offers are shown for Austria?",
      answer:
        "We list free adult dating offers intended for adults in Austria. You can compare three adult dating platforms on one page, review features, and open the external dating site that suits you without registering here.",
    },
    {
      question: "Can I compare adult dating platforms before I visit?",
      answer:
        "Yes. The offer section lets you compare three adult dating platforms side by side with short copy and feature chips, so you can pick a dating offer before leaving this comparison site.",
    },
    {
      question: "How do visit links to external dating sites work?",
      answer:
        "Visit Offer opens the chosen adult dating platform in a new browser tab. You continue on that external dating website; this page does not host profiles or chats.",
    },
    {
      question: "Is availability the same in every part of Austria?",
      answer:
        "Adult dating offers are listed for Austria, but platforms may limit access by region. Confirm eligibility on the external dating site after you click through from this comparison page.",
    },
    {
      question: "Do I pay to browse, and who are these offers for?",
      answer:
        "Browsing free adult dating offers on this page is free. Membership fees are set by external platforms. Only adults 18+ may use the linked third-party adult dating websites.",
    },
  ],
};

export const belgiumLanding: CountryLanding = {
  slug: "free-adult-dating-offers-in-belgium",
  country: "Belgium",
  countryName: "Belgium",
  offerIds: defaultOfferIds,
  title: "Free Adult Dating Offers in Belgium",
  description: "Adult dating offer comparison for Belgium. 18+ only.",
  intro: sharedIntro,
  h1Accent: "in Belgium",
  heroCuratedFor: "Curated for Belgian adults",
  faqTitleAccent: "Belgian offers",
  faqDescription: sharedFaqDescription,
  availabilityNote: sharedAvailabilityNote,
  ctaFromLabel: "from Belgium",
  faqs: [
    {
      question: "What free adult dating offers are listed for Belgium?",
      answer:
        "This comparison page lists free adult dating offers for adults in Belgium. Compare three adult dating platforms at a glance, then visit the external dating site you want—no account on this site.",
    },
    {
      question: "How can I compare three adult dating sites side by side?",
      answer:
        "Use the offer cards to compare three adult dating platforms: read each summary, check feature highlights, and decide which dating offer to open in a new tab.",
    },
    {
      question: "Where do I go after I click Visit Offer?",
      answer:
        "You are taken to the external adult dating platform in a new tab. That third-party dating site handles signup, matching, and any purchases—not this comparison page.",
    },
    {
      question: "Are these dating offers available throughout Belgium?",
      answer:
        "Offers are presented for adults in Belgium. Platform rules vary; the external dating website confirms whether you can join from your location when you visit.",
    },
    {
      question: "Is this page free to use, and is there an age limit?",
      answer:
        "Comparing adult dating offers here is free. External platforms may charge for premium access. You must be 18+; linked sites are independent adult dating services.",
    },
  ],
};

export const bulgariaLanding: CountryLanding = {
  slug: "free-adult-dating-offers-in-bulgaria",
  country: "Bulgaria",
  countryName: "Bulgaria",
  offerIds: defaultOfferIds,
  title: "Free Adult Dating Offers in Bulgaria",
  description: "Adult dating offer comparison for Bulgaria. 18+ only.",
  intro: sharedIntro,
  h1Accent: "in Bulgaria",
  heroCuratedFor: "Curated for Bulgarian adults",
  faqTitleAccent: "Bulgarian offers",
  faqDescription: sharedFaqDescription,
  availabilityNote: sharedAvailabilityNote,
  ctaFromLabel: "from Bulgaria",
  faqs: [
    {
      question: "What free adult dating offers can adults in Bulgaria compare?",
      answer:
        "Adults in Bulgaria can compare free adult dating offers from three platforms on this page. Read summaries, compare features, and open the external adult dating site you choose.",
    },
    {
      question: "How does this site help me compare dating platforms?",
      answer:
        "Each card is one adult dating platform. Compare descriptions and listed features across all three offers before you visit the external dating website in a new tab.",
    },
    {
      question: "Do visit buttons keep me on this comparison site?",
      answer:
        "No. Visit Offer opens the external adult dating platform in a new tab so you can continue on the dating site itself.",
    },
    {
      question: "Are adult dating offers guaranteed in Bulgaria?",
      answer:
        "Listings are for adults in Bulgaria, but platforms control regional access. Check availability on the external dating site after you click visit.",
    },
    {
      question: "Is browsing free, and what age do I need to be?",
      answer:
        "Free adult dating offer comparisons on this page cost nothing. Paid options exist only on external platforms. You must be 18 or older to use these third-party adult dating websites.",
    },
  ],
};

export const canadaLanding: CountryLanding = {
  slug: "free-adult-dating-offers-in-canada",
  country: "Canada",
  countryName: "Canada",
  offerIds: defaultOfferIds,
  title: "Free Adult Dating Offers in Canada",
  description: "Adult dating offer comparison for Canada. 18+ only.",
  intro: sharedIntro,
  h1Accent: "in Canada",
  heroCuratedFor: "Curated for Canadian adults",
  faqTitleAccent: "Canadian offers",
  faqDescription: sharedFaqDescription,
  availabilityNote: sharedAvailabilityNote,
  ctaFromLabel: "from Canada",
  faqs: [
    {
      question: "What free adult dating offers are listed for Canadian adults?",
      answer:
        "This page lists free adult dating offers for adults in Canada. Compare three adult dating platforms side by side, review features, and visit the external dating site that fits you—without signing up here.",
    },
    {
      question: "How do I compare three adult dating platforms on one page?",
      answer:
        "The offers section displays three adult dating platforms with summaries and feature tags. Compare them before you open your chosen dating website via Visit Offer.",
    },
    {
      question: "What happens when I visit an offer from Canada?",
      answer:
        "Visit Offer launches the external adult dating platform in a new tab. You leave this comparison site and continue on the third-party dating site you selected.",
    },
    {
      question: "Are these offers available in every province and territory?",
      answer:
        "Listings target adults in Canada, but each platform sets where it operates. The external dating site confirms whether you can join from your province or territory.",
    },
    {
      question: "Is it free to browse, and who can use these links?",
      answer:
        "Browsing free adult dating offers here is free; paid memberships are on external sites only. You must be 18+. Platforms are third-party adult dating services.",
    },
  ],
};

export const chileLanding: CountryLanding = {
  slug: "free-adult-dating-offers-in-chile",
  country: "Chile",
  countryName: "Chile",
  offerIds: defaultOfferIds,
  title: "Free Adult Dating Offers in Chile",
  description: "Adult dating offer comparison for Chile. 18+ only.",
  intro: sharedIntro,
  h1Accent: "in Chile",
  heroCuratedFor: "Curated for Chilean adults",
  faqTitleAccent: "Chilean offers",
  faqDescription: sharedFaqDescription,
  availabilityNote: sharedAvailabilityNote,
  ctaFromLabel: "from Chile",
  faqs: [
    {
      question: "What free adult dating offers are listed for Chile?",
      answer:
        "This page shows free adult dating offers for adults in Chile. Compare three adult dating platforms, read summaries and features, and visit the external dating site you pick—no registration on this comparison page.",
    },
    {
      question: "How can I compare adult dating platforms before visiting?",
      answer:
        "Offer cards let you compare three adult dating platforms side by side with descriptions and feature highlights, then open your chosen dating offer in a new tab.",
    },
    {
      question: "Does Visit Offer open the dating site in a new tab?",
      answer:
        "Yes. Visit Offer opens the external adult dating platform in a new tab. You continue on that third-party dating website, not on this comparison site.",
    },
    {
      question: "Are adult dating offers available everywhere in Chile?",
      answer:
        "Listings are intended for adults in Chile. Platform coverage varies; confirm on the external dating site when you visit from your location.",
    },
    {
      question: "Is comparing offers free, and what age is required?",
      answer:
        "Comparing free adult dating offers here is free. External platforms may charge for membership. You must be 18+ to use linked adult dating services.",
    },
  ],
};

export const croatiaLanding: CountryLanding = {
  slug: "free-adult-dating-offers-in-croatia",
  country: "Croatia",
  countryName: "Croatia",
  offerIds: defaultOfferIds,
  title: "Free Adult Dating Offers in Croatia",
  description: "Adult dating offer comparison for Croatia. 18+ only.",
  intro: sharedIntro,
  h1Accent: "in Croatia",
  heroCuratedFor: "Curated for Croatian adults",
  faqTitleAccent: "Croatian offers",
  faqDescription: sharedFaqDescription,
  availabilityNote: sharedAvailabilityNote,
  ctaFromLabel: "from Croatia",
  faqs: [
    {
      question: "Which free adult dating offers can adults in Croatia compare?",
      answer:
        "Adults in Croatia can compare free adult dating offers across three platforms on this page. Review summaries, compare features, and open the external adult dating site you prefer.",
    },
    {
      question: "How do I compare three dating platforms on this page?",
      answer:
        "Use the offers grid to compare three adult dating platforms: each card explains the platform and lists features so you can choose a dating offer before you visit externally.",
    },
    {
      question: "What happens after I click Visit Offer?",
      answer:
        "The external adult dating platform opens in a new tab. Signup, chat, and payments happen on that dating site—not on this free comparison page.",
    },
    {
      question: "Are these offers available in Croatia?",
      answer:
        "Offers are shown for adults in Croatia. Each platform decides regional availability; verify on the external dating website after you click visit.",
    },
    {
      question: "Is this comparison free, and who can use it?",
      answer:
        "Browsing adult dating offers here is free. Paid options are on external sites only. You must be 18 or older; platforms are third-party adult dating services.",
    },
  ],
};

export const cyprusLanding: CountryLanding = {
  slug: "free-adult-dating-offers-in-cyprus",
  country: "Cyprus",
  countryName: "Cyprus",
  offerIds: defaultOfferIds,
  title: "Free Adult Dating Offers in Cyprus",
  description: "Adult dating offer comparison for Cyprus. 18+ only.",
  intro: sharedIntro,
  h1Accent: "in Cyprus",
  heroCuratedFor: "Curated for Cypriot adults",
  faqTitleAccent: "Cypriot offers",
  faqDescription: sharedFaqDescription,
  availabilityNote: sharedAvailabilityNote,
  ctaFromLabel: "from Cyprus",
  faqs: [
    {
      question: "What free adult dating offers are listed for Cyprus?",
      answer:
        "This comparison lists free adult dating offers for adults in Cyprus. Compare three adult dating platforms side by side, then visit the external dating site you want without creating an account here.",
    },
    {
      question: "Can I compare adult dating sites before leaving this page?",
      answer:
        "Yes. Compare three adult dating platforms using summaries and feature tags on each card, then open your chosen dating website via Visit Offer.",
    },
    {
      question: "How do external visit links work?",
      answer:
        "Visit Offer opens the adult dating platform in a new tab. You leave this comparison site and continue on the third-party external dating site.",
    },
    {
      question: "Are adult dating offers available in Cyprus?",
      answer:
        "Listings aim at adults in Cyprus. Platforms confirm their own coverage when you open the visit link to the external dating site.",
    },
    {
      question: "Is browsing free, and is there an age requirement?",
      answer:
        "Free adult dating offer comparisons cost nothing on this page. Membership fees apply only on external platforms. You must be 18+.",
    },
  ],
};

export const czechRepublicLanding: CountryLanding = {
  slug: "free-adult-dating-offers-in-czech-republic",
  country: "Czech Republic",
  countryName: "Czech Republic",
  offerIds: defaultOfferIds,
  title: "Free Adult Dating Offers in Czech Republic",
  description: "Adult dating offer comparison for the Czech Republic. 18+ only.",
  intro: sharedIntro,
  h1Accent: "in the Czech Republic",
  heroCuratedFor: "Curated for Czech adults",
  faqTitleAccent: "Czech offers",
  faqDescription: sharedFaqDescription,
  availabilityNote: sharedAvailabilityNote,
  ctaFromLabel: "from the Czech Republic",
  faqs: [
    {
      question: "What free adult dating offers are listed for the Czech Republic?",
      answer:
        "We list free adult dating offers for adults in the Czech Republic. Compare three adult dating platforms on one page, review features, and visit the external dating site you choose.",
    },
    {
      question: "How do I compare three adult dating platforms here?",
      answer:
        "Each offer card represents one adult dating platform. Compare descriptions and features across all three before you open the external dating website in a new tab.",
    },
    {
      question: "Where does Visit Offer take me?",
      answer:
        "Visit Offer opens the selected adult dating platform in a new tab. You continue on that external dating site; this page only helps you compare offers.",
    },
    {
      question: "Are these dating offers available in the Czech Republic?",
      answer:
        "Offers are listed for the Czech Republic, but platforms set regional rules. Confirm availability on the external dating site after you click visit.",
    },
    {
      question: "Is it free to browse, and who may use these offers?",
      answer:
        "Comparing free adult dating offers on this site is free. External platforms handle paid plans. Adults 18+ only; linked sites are third-party adult dating services.",
    },
  ],
};

export const countryLandings: CountryLanding[] = [
  usaLanding,
  australiaLanding,
  austriaLanding,
  belgiumLanding,
  bulgariaLanding,
  canadaLanding,
  chileLanding,
  croatiaLanding,
  cyprusLanding,
  czechRepublicLanding,
];

export function getCountryLanding(slug: string): CountryLanding | undefined {
  return countryLandings.find((landing) => landing.slug === slug);
}

export function countryLandingSlugs(): string[] {
  return countryLandings.map((landing) => landing.slug);
}

export function getCountryOffers(landing: CountryLanding): PublicOffer[] {
  return landing.offerIds.map((id) => {
    const offer = getOfferById(id);
    if (!offer) {
      throw new Error(`Missing offer "${id}" for /${landing.slug}`);
    }
    return toPublicOffer(offer);
  });
}

/** Build JSON-LD blocks for a country landing page. */
export function buildCountryLandingJsonLd(landing: CountryLanding, offers: PublicOffer[]) {
  const pageUrl = `${siteConfig.url}/${landing.slug}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: landing.title,
      description: landing.description,
      url: pageUrl,
      isPartOf: {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      about: {
        "@type": "Place",
        name: landing.countryName,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: landing.title,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: landing.title,
      itemListElement: offers.map((offer, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: offer.name,
        description: offer.description,
        url: `${pageUrl}#offer-${offer.id}-title`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: landing.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];
}
