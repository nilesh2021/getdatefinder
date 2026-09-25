/**
 * Offer catalogue.
 *
 * Every offer promoted on the site lives in this single array. To add a new
 * offer, append an entry below - the homepage grid, sitemap and any future
 * listing pages read from `offers` directly.
 *
 * `url` must be the exact affiliate/tracking link supplied by the network.
 */
export type Offer = {
  /** URL-safe unique id (used as a React key and anchor). */
  id: string;
  /** Display name of the external dating platform. */
  name: string;
  /** Exact affiliate tracking URL. Never replace with a placeholder. */
  url: string;
  /** One or two sentence, non-explicit description. */
  description: string;
  /** Short bullet list of key benefits or features. */
  features: string[];
  /** Category label shown as a chip on the card. */
  category: string;
  /** Filter tags such as Gay, Trans, Casual. Do not include affiliate data. */
  tags: string[];
  /** Optional path/URL to a logo image. Falls back to a monogram badge. */
  logo?: string;
  /** Lifestyle photo shown on the offer card. */
  image: string;
  /** Alt text for the lifestyle photo. */
  imageAlt: string;
  /** Optional list of regions where the offer is known to be available. */
  regions?: string[];
};

export const offers: Offer[] = [
  {
    id: "realsexclub",
    name: "RealSexClub",
    url: "https://t.aslr1.com/358917/7964?aff_sub5=SF_006OG000004lmDN",
    description:
      "A casual adult dating platform for adults who want a direct, no-nonsense way to meet people online.",
    features: ["Casual dating focus", "Quick sign-up on the platform", "Mobile friendly"],
    category: "Casual dating",
    tags: ["Adult"],
    image: "/images/real-couple.jpg",
    imageAlt: "Two people forming a heart shape with their hands at sunset",
  },
  {
    id: "pridepair",
    name: "PridePair",
    url: "https://t.aslr1.com/358917/10379/0?po=6456&aff_sub5=SF_006OG000004lmDN",
    description:
      "An LGBTQ+ friendly dating website built around inclusive matching and welcoming communities.",
    features: ["LGBTQ+ inclusive", "Community oriented", "Profile based discovery"],
    category: "LGBTQ+ dating",
    tags: ["Adult"],
    image: "/images/real-portrait.jpg",
    imageAlt: "Portrait of a woman against a pink background",
  },
  {
    id: "naughtycharm",
    name: "NaughtyCharm",
    url: "https://t.aslr1.com/358917/10376/0?po=6456&aff_sub5=SF_006OG000004lmDN",
    description:
      "A flirty adult dating platform designed for playful conversations and relaxed connections.",
    features: ["Flirt focused messaging", "Relaxed atmosphere", "Browse nearby members"],
    category: "Flirt and chat",
    tags: ["Adult"],
    image: "/images/real-mature.jpg",
    imageAlt: "Portrait of a woman outdoors at sunset",
  },
  {
    id: "milffinder",
    name: "MilfFinder",
    url: "https://t.aslr1.com/358917/4999?aff_sub5=SF_006OG000004lmDN",
    description:
      "A dating platform aimed at adults looking to meet experienced, mature women online.",
    features: ["Mature dating niche", "Search by preference", "Simple interface"],
    category: "Mature dating",
    tags: ["Adult"],
    image: "/images/real-mature.jpg",
    imageAlt: "Portrait of a woman outdoors at sunset",
  },
  {
    id: "manfinder",
    name: "Manfinder",
    url: "https://t.aslr1.com/358917/6488?aff_sub5=SF_006OG000004lmDN",
    description:
      "A gay dating website for men who want to meet other men for dates, chats and connections.",
    features: ["Men seeking men", "Location based browsing", "Direct messaging"],
    category: "Gay dating",
    tags: ["Gay"],
    image: "/images/real-man.jpg",
    imageAlt: "Portrait of a man in a grey sweater",
  },
  {
    id: "litlatinz",
    name: "LitLatinz",
    url: "https://t.aslr1.com/358917/7410?aff_sub5=SF_006OG000004lmDN",
    description:
      "A dating platform focused on meeting Latin singles and people who love Latin culture.",
    features: ["Latin dating niche", "Cultural focus", "International reach"],
    category: "Latin dating",
    tags: ["Adult"],
    image: "/images/real-dance.jpg",
    imageAlt: "People dancing together in a city square at night",
  },
  {
    id: "grannyhunter",
    name: "Grannyhunter",
    url: "https://t.aslr1.com/358917/7570?aff_sub5=SF_006OG000004lmDN",
    description:
      "A senior-oriented adult dating platform for people interested in meeting older singles.",
    features: ["Senior dating niche", "Age focused search", "Easy to navigate"],
    category: "Senior dating",
    tags: ["Adult"],
    image: "/images/real-couple.jpg",
    imageAlt: "Two people forming a heart shape with their hands at sunset",
  },
  {
    id: "gaybloom",
    name: "GayBloom",
    url: "https://t.aslr1.com/358917/10378/0?po=6456&aff_sub5=SF_006OG000004lmDN",
    description:
      "A modern gay dating website with a fresh design and a focus on genuine conversations.",
    features: ["Modern design", "Conversation first", "Inclusive community"],
    category: "Gay dating",
    tags: ["Gay"],
    image: "/images/real-man-2.jpg",
    imageAlt: "Portrait of a man looking at the camera",
  },
  {
    id: "fuckfinder",
    name: "FuckFinder",
    url: "https://t.aslr1.com/358917/7346?aff_sub5=SF_006OG000004lmDN",
    description:
      "A straightforward adult dating platform for adults seeking casual, short-term connections.",
    features: ["Casual connections", "Fast browsing", "Discreet experience"],
    category: "Casual dating",
    tags: ["Adult"],
    image: "/images/real-men.jpg",
    imageAlt: "A smiling woman in a denim jacket standing against a blue wall",
  },
  {
    id: "fetishpartner",
    name: "FetishPartner",
    url: "https://t.aslr1.com/358917/5055?aff_sub5=SF_006OG000004lmDN",
    description:
      "An alternative lifestyle dating platform for open-minded adults with specific interests.",
    features: ["Alternative lifestyle niche", "Interest based matching", "Private profiles"],
    category: "Alternative dating",
    tags: ["Adult"],
    image: "/images/real-dance.jpg",
    imageAlt: "People dancing together in a city square at night",
  },
  {
    id: "dirtydating",
    name: "DirtyDating",
    url: "https://t.aslr1.com/358917/5421?aff_sub5=SF_006OG000004lmDN",
    description:
      "An adult dating website for adults who prefer a bold, casual approach to meeting people online.",
    features: ["Casual dating focus", "Bold, direct style", "Chat and browse"],
    category: "Casual dating",
    tags: ["Adult"],
    image: "/images/real-men.jpg",
    imageAlt: "A smiling woman in a denim jacket standing against a blue wall",
  },
  {
    id: "cheekycrush",
    name: "CheekyCrush",
    url: "https://t.aslr1.com/358917/10377/0?po=6456&aff_sub5=SF_006OG000004lmDN",
    description:
      "A light-hearted flirt and dating platform for adults looking for fun, playful matches.",
    features: ["Playful matching", "Light-hearted vibe", "Simple sign-up on the platform"],
    category: "Flirt and chat",
    tags: ["Adult"],
    image: "/images/real-portrait.jpg",
    imageAlt: "Portrait of a woman against a pink background",
  },
  {
    id: "transdate",
    name: "TransDate",
    url: "https://t.aslr1.com/358917/6497?aff_sub5=SF_006OG000004lmDN",
    description:
      "A trans-inclusive dating website welcoming transgender singles and the people who want to meet them.",
    features: ["Trans inclusive", "Respectful community", "Profile based discovery"],
    category: "Trans dating",
    tags: ["Trans"],
    image: "/images/real-portrait.jpg",
    imageAlt: "Portrait of a woman against a pink background",
  },
  {
    id: "sinparty",
    name: "SinParty",
    url: "https://t.camsk5.com/358917/10525/0?po=6533&aff_sub5=SF_006OG000004lmDN",
    description:
      "A brand-new freemium live cam platform for adults who want to watch live creators.",
    features: ["Free to join", "Live creators", "Private shows"],
    category: "Live cams",
    tags: ["CAM"],
    image: "/images/real-mature.jpg",
    imageAlt: "Portrait of a woman outdoors at sunset",
  },
];

/** Card data safe to send to the browser. Affiliate URLs are excluded. */
export type PublicOffer = Omit<Offer, "url">;

export function toPublicOffer(offer: Offer): PublicOffer {
  return {
    id: offer.id,
    name: offer.name,
    description: offer.description,
    features: offer.features,
    category: offer.category,
    tags: offer.tags,
    logo: offer.logo,
    image: offer.image,
    imageAlt: offer.imageAlt,
    regions: offer.regions,
  };
}

export function getOfferById(id: string): Offer | undefined {
  return offers.find((offer) => offer.id === id);
}
