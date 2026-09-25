/**
 * Site-wide configuration and static content.
 * Change the brand name, tagline or copy here and it updates everywhere.
 */

function normalizeSiteUrl(value: string) {
  return value.replace(/\/+$/, "");
}

export const siteConfig = {
  name: "DateFinder Offers",
  shortName: "DateFinder",
  tagline: "Discover dating platforms worth exploring",
  description:
    "Browse a curated selection of online dating platforms and adult dating offers. Compare options, check availability and visit the dating websites that fit you.",
  url: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? "https://getdatefinder.com"),
  contactEmail: "hello@example.com",
};

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Dating Offers", href: "/#offers" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
];

export type Feature = { title: string; description: string; icon: "compass" | "scale" | "globe" | "bolt" };

export const features: Feature[] = [
  {
    title: "Discover dating platforms",
    description:
      "Find online dating platforms across casual, niche and community-focused categories in one place.",
    icon: "compass",
  },
  {
    title: "Compare different options",
    description:
      "Each offer is summarised with a short description and key features so you can compare before you click.",
    icon: "scale",
  },
  {
    title: "Country-specific availability",
    description:
      "Offer links route you to the version of the platform that is available in your region where supported.",
    icon: "globe",
  },
  {
    title: "Easy access",
    description:
      "No account is needed here. One click takes you straight to the external dating website.",
    icon: "bolt",
  },
];

export type Step = { title: string; description: string };

export const steps: Step[] = [
  {
    title: "Browse offers",
    description:
      "Scroll through the featured dating offers and read the short summary for each platform.",
  },
  {
    title: "Choose a platform",
    description:
      "Pick the dating website that matches what you are looking for, whether casual, niche or community based.",
  },
  {
    title: "Visit the platform",
    description:
      "Click the offer button. You will leave this site and land on the external dating platform in a new tab.",
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "What is this website?",
    answer:
      "DateFinder Offers is a promotional website that lists external online dating platforms. We highlight dating offers so you can discover and compare dating websites in one place.",
  },
  {
    question: "Are these dating platforms operated by this website?",
    answer:
      "No. Every platform listed here is owned and operated by a third party. We do not run, moderate or control any of the dating websites we link to.",
  },
  {
    question: "How do the offer links work?",
    answer:
      "Each 'Visit Offer' button is an affiliate link that opens the external dating platform in a new tab. If you join or purchase something there, we may earn a commission at no extra cost to you.",
  },
  {
    question: "Do I need to create an account here?",
    answer:
      "No. There is no registration or login on this site. Any account you create will be on the external dating platform you choose to visit.",
  },
  {
    question: "Are offers available in my country?",
    answer:
      "Availability varies by platform and region. Most links automatically direct you to the version available where you are, but some platforms may not operate in every country.",
  },
];

export type FooterLink = { label: string; href: string };

export const footerLinks: FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
];

export const affiliateDisclosureShort =
  "This site contains affiliate links. If you click an offer and sign up or make a purchase on the external platform, we may receive a commission at no additional cost to you. All platforms listed are operated by third parties. You must be 18 or older to use this site.";

export type LegalSection = { heading: string; paragraphs: string[] };

export type LegalPageContent = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: LegalSection[];
};

export const legalPages: Record<string, LegalPageContent> = {
  about: {
    slug: "about",
    title: "About",
    description: `Learn what ${siteConfig.name} is and how we help you discover online dating platforms.`,
    intro: `${siteConfig.name} is an independent promotional website that curates online dating platforms and adult dating offers so you can explore your options quickly.`,
    sections: [
      {
        heading: "What we do",
        paragraphs: [
          "We collect dating offers from external platforms and present them with a short, plain-language summary and a list of key features. Our goal is to make it easy to compare dating websites before you decide where to sign up.",
        ],
      },
      {
        heading: "What we do not do",
        paragraphs: [
          "We are not a dating platform. We do not host profiles, process registrations, or handle messaging. All of that happens on the external websites we link to, which are owned and operated by third parties.",
        ],
      },
      {
        heading: "Age requirement",
        paragraphs: [
          "The platforms we promote are intended for adults. You must be at least 18 years old (or the age of majority in your jurisdiction) to use this site and to visit the linked offers.",
        ],
      },
    ],
  },
  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description: `How ${siteConfig.name} handles information when you browse the site and click offer links.`,
    intro:
      "We keep data collection to a minimum. This page explains what information may be processed when you use the site.",
    sections: [
      {
        heading: "Information we collect",
        paragraphs: [
          "We do not ask you to create an account or submit personal details. Standard server logs may record technical information such as IP address, browser type and pages visited for security and performance purposes.",
        ],
      },
      {
        heading: "Affiliate links and third parties",
        paragraphs: [
          "When you click an offer link, you are redirected through an affiliate tracking network to the external dating platform. That network and the destination platform have their own privacy policies which govern any data they collect. We encourage you to read them.",
        ],
      },
      {
        heading: "Your choices",
        paragraphs: [
          "You can browse this site without providing any personal information. You can control cookies through your browser settings. See our Cookie Policy for more detail.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          `Questions about this policy can be sent to ${siteConfig.contactEmail}.`,
        ],
      },
    ],
  },
  terms: {
    slug: "terms",
    title: "Terms of Use",
    description: `The terms that apply when you use ${siteConfig.name}.`,
    intro:
      "By using this website you agree to the following terms. If you do not agree, please do not use the site.",
    sections: [
      {
        heading: "Nature of the service",
        paragraphs: [
          "This website provides information about, and links to, third-party online dating platforms. We do not operate those platforms and are not responsible for their content, services, pricing or conduct.",
        ],
      },
      {
        heading: "Eligibility",
        paragraphs: [
          "You must be 18 years of age or older, or the age of majority where you live, to use this site.",
        ],
      },
      {
        heading: "No guarantees",
        paragraphs: [
          "Offer details are provided for general information and may change without notice. Availability differs by country. We make no representations about the suitability, safety or results of any external platform.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "To the fullest extent permitted by law, we are not liable for any loss or damage arising from your use of this site or any external website reached through it.",
        ],
      },
    ],
  },
  "cookie-policy": {
    slug: "cookie-policy",
    title: "Cookie Policy",
    description: `How cookies are used on ${siteConfig.name} and on affiliate links.`,
    intro:
      "This site itself uses no tracking cookies for browsing. Cookies may be set by third parties when you follow an offer link.",
    sections: [
      {
        heading: "Cookies on this site",
        paragraphs: [
          "We do not set advertising or analytics cookies for simply viewing pages. Any strictly necessary cookies are used only to make the site function.",
        ],
      },
      {
        heading: "Affiliate tracking cookies",
        paragraphs: [
          "When you click an offer, the affiliate network and the destination dating platform may set cookies to attribute your visit. These are governed by their own cookie policies.",
        ],
      },
      {
        heading: "Managing cookies",
        paragraphs: [
          "You can block or delete cookies at any time in your browser settings. Doing so will not affect your ability to browse this site.",
        ],
      },
    ],
  },
  "affiliate-disclosure": {
    slug: "affiliate-disclosure",
    title: "Affiliate Disclosure",
    description: `How ${siteConfig.name} earns money and why it does not affect what you pay.`,
    intro:
      "Transparency matters to us. This page explains our relationship with the dating platforms listed on the site.",
    sections: [
      {
        heading: "How we earn",
        paragraphs: [
          "The offer buttons on this site are affiliate links. If you click one and then register or make a purchase on the external platform, we may receive a commission from that platform or its affiliate network.",
        ],
      },
      {
        heading: "No extra cost to you",
        paragraphs: [
          "Commissions are paid by the platform, not by you. Using our links does not change the price you pay or the service you receive.",
        ],
      },
      {
        heading: "Independence",
        paragraphs: [
          "We do not publish ratings, reviews or testimonials. Descriptions are short factual summaries intended to help you compare options. The presence of an offer is not an endorsement.",
        ],
      },
    ],
  },
};
