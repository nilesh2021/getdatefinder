/**
 * Compact Sex Emulator SEO keyword landing pages.
 *
 * Location-neutral copy only. Honest to the product (3D doll game) — no AI chat claims.
 */
import type { Metadata } from "next";
import { sexEmulatorOfferId } from "@/lib/sex-emulator";
import { siteConfig } from "@/lib/site";

export { sexEmulatorOfferId };

export const keywordHeroImage = "/images/sex-emulator-hero.jpg";

export type KeywordFeature = { title: string; description: string };
export type KeywordFaq = { question: string; answer: string };

export type SexEmulatorKeywordLanding = {
  path: string;
  footerLabel: string;
  shareImageAlt: string;
  videoGameDescription: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    badge: string;
    h1Lead: string;
    h1Accent: string;
    h1Trail: string;
    sub: string;
    cta: string;
    finePrint: string;
  };
  featuresTitleLead: string;
  featuresTitleAccent: string;
  features: KeywordFeature[];
  faqTitleLead: string;
  faqTitleAccent: string;
  faqs: KeywordFaq[];
};

const shareImage = {
  url: keywordHeroImage,
  width: 1024,
  height: 576,
};

export const sexEmulatorKeywordLandings: SexEmulatorKeywordLanding[] = [
  {
    path: "/private-virtual-companion",
    footerLabel: "Private virtual companion",
    shareImageAlt: "Sex Emulator private virtual companion in a 3D adult game",
    videoGameDescription:
      "A fully interactive 3D adult game where players create, customize, train and keep a private virtual companion.",
    seo: {
      title: "Private Virtual Companion - Create Yours in Sex Emulator (18+)",
      description:
        "Create a private virtual companion in Sex Emulator: customize her look, train her skills, and play in your browser. Discreet, free to start, 18+ only.",
      keywords: [
        "private virtual companion",
        "virtual companion",
        "discreet virtual companion",
        "sex emulator",
        "3D sex simulator",
      ],
    },
    hero: {
      badge: "Discreet · No download",
      h1Lead: "Your private virtual",
      h1Accent: "companion",
      h1Trail: "is waiting",
      sub: "Create, customize and keep a private virtual companion in 3D. Play in the browser — nothing to install.",
      cta: "Meet her in private",
      finePrint: "18+ only. Free to start. Opens in a new tab.",
    },
    featuresTitleLead: "Why a private virtual",
    featuresTitleAccent: "companion",
    features: [
      {
        title: "Yours alone",
        description: "A private virtual companion you design. No livestream. No one else in the room.",
      },
      {
        title: "Looks you choose",
        description: "Set ethnicity, hair and body until she matches what you have been picturing.",
      },
      {
        title: "Trained in private",
        description: "Teach her what you like, or skip ahead with a premade pornstar companion.",
      },
      {
        title: "Browser only",
        description: "Desktop or phone. Close the tab and she is gone from the screen.",
      },
    ],
    faqTitleLead: "Private companion",
    faqTitleAccent: "questions",
    faqs: [
      {
        question: "What is a private virtual companion?",
        answer:
          "A 3D character you create and play with in Sex Emulator. Single-player adult game — not a live person and not a public chat room.",
      },
      {
        question: "Is this actually private?",
        answer:
          "It runs in your browser, so you can use a private window and close the tab when you are done. Sex Emulator is a third party — read their privacy policy before you sign up. 18+ only.",
      },
      {
        question: "Can I customize her?",
        answer:
          "Yes. Ethnicity, hair color, breast size, and skill preferences. Premade pornstars are also available.",
      },
      {
        question: "Is it free, and does it work on my phone?",
        answer:
          "You can start free in the browser on desktop, Android and iPhone. Extra content may require an upgrade on Sex Emulator.",
      },
    ],
  },
  {
    path: "/interactive-adult-experience",
    footerLabel: "Interactive adult experience",
    shareImageAlt: "Sex Emulator interactive adult experience in 3D",
    videoGameDescription:
      "A fully interactive 3D adult game where every scene reacts to your choices as you customize and play with your virtual partner.",
    seo: {
      title: "Interactive Adult Experience - Play in Sex Emulator (18+)",
      description:
        "An interactive adult experience in Sex Emulator: direct every move in 3D, customize your partner, and play free in the browser. 18+ only.",
      keywords: [
        "interactive adult experience",
        "interactive adult game",
        "interactive 3D sex game",
        "sex emulator",
        "adult simulator online",
      ],
    },
    hero: {
      badge: "You control every move",
      h1Lead: "The interactive adult",
      h1Accent: "experience",
      h1Trail: "you direct",
      sub: "Sex Emulator is a 3D game where scenes react to you — not another passive clip. Customize her, train her, play in the browser.",
      cta: "Start interacting",
      finePrint: "18+ only. Free to start. Opens in a new tab.",
    },
    featuresTitleLead: "What makes it",
    featuresTitleAccent: "interactive",
    features: [
      {
        title: "You call the shots",
        description: "Every action in the 3D scene responds to you. No fixed timeline like a video.",
      },
      {
        title: "Build your partner",
        description: "Shape looks and train skills — sucking, spanking, anal, feet — or pick a premade doll.",
      },
      {
        title: "Instant replay",
        description: "She does not get tired or bored. Switch moods and positions whenever you want.",
      },
      {
        title: "Play anywhere",
        description: "The interactive adult experience runs on desktop and mobile with no download.",
      },
    ],
    faqTitleLead: "Interactive",
    faqTitleAccent: "questions",
    faqs: [
      {
        question: "What is an interactive adult experience here?",
        answer:
          "Sex Emulator is a browser-based 3D sex simulator where you control what happens on screen. It is a game, not live video or AI chat.",
      },
      {
        question: "How is this different from porn videos?",
        answer:
          "Videos play the same every time. Here you customize the character and steer the scene in real time.",
      },
      {
        question: "Can I use premade characters?",
        answer: "Yes. Famous pornstars and popular character dolls are ready if you do not want to build from scratch.",
      },
      {
        question: "Is it free to try?",
        answer:
          "You can sign up and start for free. Some extras may require payment on the Sex Emulator site. 18+ only.",
      },
    ],
  },
  {
    path: "/virtual-romantic-companion",
    footerLabel: "Virtual romantic companion",
    shareImageAlt: "Sex Emulator virtual romantic companion in 3D",
    videoGameDescription:
      "A 3D adult game where players create a virtual romantic companion, customize her look, and explore intimate fantasies.",
    seo: {
      title: "Virtual Romantic Companion - Create Yours in Sex Emulator (18+)",
      description:
        "Meet your virtual romantic companion in Sex Emulator. Customize her look, train intimate skills, and play in your browser. Free to start, 18+.",
      keywords: [
        "virtual romantic companion",
        "romantic virtual companion",
        "virtual girlfriend game",
        "sex emulator",
        "3D companion game",
      ],
    },
    hero: {
      badge: "Flirty · Fully 3D",
      h1Lead: "Your virtual romantic",
      h1Accent: "companion",
      h1Trail: "awaits",
      sub: "Design a virtual romantic companion who looks and moves the way you want. Sweet, naughty, or both — all in Sex Emulator.",
      cta: "Meet her now",
      finePrint: "18+ only. Free to start. Opens in a new tab.",
    },
    featuresTitleLead: "Why a virtual romantic",
    featuresTitleAccent: "companion",
    features: [
      {
        title: "Made to flirt",
        description: "A companion you shape for chemistry — face, body and attitude tuned to your taste.",
      },
      {
        title: "Intimacy your way",
        description: "Train the moves you enjoy most, from tender teasing to explicit scenes.",
      },
      {
        title: "Always available",
        description: "No scheduling, no ghosting. She is in the game whenever you open the tab.",
      },
      {
        title: "No install",
        description: "Romantic fantasy in the browser on desktop or phone. Close the tab when you are done.",
      },
    ],
    faqTitleLead: "Romantic companion",
    faqTitleAccent: "questions",
    faqs: [
      {
        question: "Is this a dating app or AI girlfriend?",
        answer:
          "No. It is a single-player 3D adult game character you customize in Sex Emulator — not messaging with a real person or an AI chatbot.",
      },
      {
        question: "Can I customize my virtual romantic companion?",
        answer:
          "Yes. Ethnicity, hair, body type, and trained skills. Premade pornstar-style dolls are available too.",
      },
      {
        question: "Is Sex Emulator romantic or explicit?",
        answer:
          "You choose the tone through gameplay. The platform is 18+ adult content.",
      },
      {
        question: "Does it work on mobile?",
        answer: "Yes. Play in the mobile browser with no app download required.",
      },
    ],
  },
  {
    path: "/personalized-virtual-relationship",
    footerLabel: "Personalized virtual relationship",
    shareImageAlt: "Sex Emulator personalized virtual relationship in 3D",
    videoGameDescription:
      "A 3D adult game where players build a personalized virtual relationship by customizing and training their own companion.",
    seo: {
      title: "Personalized Virtual Relationship - Sex Emulator (18+)",
      description:
        "Build a personalized virtual relationship in Sex Emulator: customize her, train preferences, and play your way in the browser. 18+ only.",
      keywords: [
        "personalized virtual relationship",
        "virtual relationship game",
        "custom virtual partner",
        "sex emulator",
        "personalized sex simulator",
      ],
    },
    hero: {
      badge: "Built around you",
      h1Lead: "A personalized virtual",
      h1Accent: "relationship",
      h1Trail: "in 3D",
      sub: "Shape how she looks, what she learns, and how far you take each session — your rules in Sex Emulator.",
      cta: "Build your dynamic",
      finePrint: "18+ only. Free to start. Opens in a new tab.",
    },
    featuresTitleLead: "Your personalized virtual",
    featuresTitleAccent: "relationship",
    features: [
      {
        title: "Starts with you",
        description: "Pick her look and vibe so the relationship feels personal from the first scene.",
      },
      {
        title: "Train preferences",
        description: "Teach skills and kinks so play matches what you want over time.",
      },
      {
        title: "Your pace",
        description: "Slow burn or jump straight in with a premade partner — no pressure from other players.",
      },
      {
        title: "Just your screen",
        description: "Single-player in the browser. Nothing posts to a feed or social network.",
      },
    ],
    faqTitleLead: "Personalized",
    faqTitleAccent: "questions",
    faqs: [
      {
        question: "What does personalized virtual relationship mean?",
        answer:
          "You customize the 3D partner and train what she does in Sex Emulator. It is gameplay personalization, not a real-world relationship service.",
      },
      {
        question: "Can two people play together?",
        answer: "Sex Emulator is single-player. The relationship is between you and your in-game character.",
      },
      {
        question: "How deep is customization?",
        answer:
          "Body, hair, ethnicity, breast size, and skill training including common fetish categories. Premade dolls are optional.",
      },
      {
        question: "Is it free to start?",
        answer:
          "Free account and entry-level play. Paid upgrades may apply for extra content on Sex Emulator. 18+ only.",
      },
    ],
  },
  {
    path: "/realistic-virtual-experience",
    footerLabel: "Realistic virtual experience",
    shareImageAlt: "Sex Emulator realistic virtual experience in 3D",
    videoGameDescription:
      "A realistic 3D adult game where players enjoy a virtual experience with customizable, lifelike characters in the browser.",
    seo: {
      title: "Realistic Virtual Experience - Sex Emulator 3D (18+)",
      description:
        "A realistic virtual experience in Sex Emulator: crisp 3D characters, responsive scenes, and full customization in your browser. 18+ only.",
      keywords: [
        "realistic virtual experience",
        "realistic 3D sex game",
        "lifelike virtual partner",
        "sex emulator",
        "realistic adult simulator",
      ],
    },
    hero: {
      badge: "Sharp 3D visuals",
      h1Lead: "A realistic virtual",
      h1Accent: "experience",
      h1Trail: "in your browser",
      sub: "Sex Emulator delivers detailed 3D bodies and scenes you control — closer to presence than flat video, with no headset required.",
      cta: "See it in 3D",
      finePrint: "18+ only. Free to start. Opens in a new tab.",
    },
    featuresTitleLead: "Why it feels",
    featuresTitleAccent: "realistic",
    features: [
      {
        title: "3D depth",
        description: "Characters move in space with lighting and angles that video cannot match.",
      },
      {
        title: "Detail you sculpt",
        description: "Fine-tune face, skin tone, hair and body for a partner that looks deliberate, not random.",
      },
      {
        title: "Responsive scenes",
        description: "Actions play out in the moment instead of looping the same footage.",
      },
      {
        title: "VR optional",
        description: "Play in the browser on desktop or phone; VR modes may be available on Sex Emulator where supported.",
      },
    ],
    faqTitleLead: "Realistic",
    faqTitleAccent: "questions",
    faqs: [
      {
        question: "How realistic is Sex Emulator?",
        answer:
          "It is stylized 3D adult animation, not photoreal video of real people. Detail and interactivity are the draw.",
      },
      {
        question: "Do I need VR for a realistic virtual experience?",
        answer: "No. The game runs in a normal browser. VR may be optional on the platform depending on your device.",
      },
      {
        question: "Can I still customize the character?",
        answer: "Yes. Full creator tools plus premade pornstar dolls if you want to skip building.",
      },
      {
        question: "Is this live action?",
        answer: "No. Everything is rendered 3D game content operated by Sex Emulator. 18+ only.",
      },
    ],
  },
];

export function getKeywordLandingByPath(path: string): SexEmulatorKeywordLanding | undefined {
  return sexEmulatorKeywordLandings.find((landing) => landing.path === path);
}

export function requireKeywordLanding(path: string): SexEmulatorKeywordLanding {
  const landing = getKeywordLandingByPath(path);
  if (!landing) {
    throw new Error(`Missing keyword landing: ${path}`);
  }
  return landing;
}

export const sexEmulatorKeywordPaths = sexEmulatorKeywordLandings.map((landing) => landing.path);

/** @deprecated Import from sex-emulator-keyword-landings */
export const privateVirtualCompanionPath = "/private-virtual-companion";

export function buildKeywordLandingMetadata(landing: SexEmulatorKeywordLanding): Metadata {
  const { title, description, keywords } = landing.seo;

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: {
      canonical: landing.path,
      languages: { "x-default": landing.path },
    },
    openGraph: {
      title,
      description,
      url: landing.path,
      type: "website",
      siteName: siteConfig.name,
      locale: "en_US",
      images: [{ ...shareImage, alt: landing.shareImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ ...shareImage, alt: landing.shareImageAlt }],
    },
    other: { rating: "adult" },
  };
}

export function buildKeywordLandingJsonLd(landing: SexEmulatorKeywordLanding) {
  const { title, description } = landing.seo;
  const pageUrl = `${siteConfig.url}${landing.path}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description,
      url: pageUrl,
      inLanguage: "en",
      isFamilyFriendly: false,
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoGame",
      name: "Sex Emulator",
      alternateName: "SexEmulator",
      description: landing.videoGameDescription,
      genre: ["Adult simulation", "3D sex game"],
      gamePlatform: ["Web browser", "Desktop", "Mobile"],
      playMode: "SinglePlayer",
      url: pageUrl,
      image: `${siteConfig.url}${shareImage.url}`,
      areaServed: "Worldwide",
      isFamilyFriendly: false,
      audience: { "@type": "PeopleAudience", suggestedMinAge: 18 },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: landing.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];
}
