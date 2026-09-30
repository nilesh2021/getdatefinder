/**
 * Copy for the global /sex-emulator landing page.
 *
 * Keep every string location-neutral: this single page serves all countries,
 * so no country, city or currency references belong here.
 */
export const sexEmulatorOfferId = "sexemulator";

export const sexEmulatorPath = "/sex-emulator";

/** Hero artwork layered behind the overlay. Set to null for the plain grid background. */
export const heroImage: string | null = "/images/sex-emulator-hero.jpg";

export const dollImage = {
  src: "/images/sex-emulator-doll.jpg",
  alt: "Sex Emulator character creator customizing a 3D virtual sex doll's hair, skin tone and body",
  width: 1024,
  height: 768,
};

export const sexEmulatorSeo = {
  title: "Sex Emulator - Play the Best 3D Sex Simulator & Porn Games Online (18+)",
  description:
    "Play Sex Emulator online: create, customize and train your own virtual sex doll or pick a premade pornstar. The hottest 3D sex simulator, free to start. 18+.",
  keywords: [
    "sex emulator",
    "sexemulator",
    "sex emulator game",
    "sex emulator online",
    "sexemulator.com",
    "sexemulator free",
    "virtual sex doll",
    "virtual sex doll game",
    "sex doll simulator",
    "sex doll game online",
    "customizable sex doll game",
    "sex simulator",
    "3D sex game",
    "3D porn games",
    "porn games",
    "adult games",
    "interactive porn game",
    "virtual sex game",
    "pornstar sex simulator",
    "free sex game online",
    "porn game for mobile",
    "VR porn games",
  ],
};

export type SexEmulatorFeature = { title: string; description: string };

export const sexEmulatorFeatures: SexEmulatorFeature[] = [
  {
    title: "Create your dream girl",
    description:
      "Build a virtual sex doll from scratch and shape every curve of the partner you have always fantasized about.",
  },
  {
    title: "Make her irresistible",
    description:
      "Choose her ethnicity, hair color and breast size until she looks exactly the way that turns you on.",
  },
  {
    title: "Train her to please",
    description:
      "Teach her what you crave, from sucking and spanking to anal and feet, until she knows every desire.",
  },
  {
    title: "Pornstars on demand",
    description:
      "Can't wait? Pick a ready-made sex doll, including famous pornstars and popular characters, and get straight to it.",
  },
  {
    title: "No limits, no judgment",
    description:
      "A fully interactive 3D sex game where every scene reacts to you. Your fantasy, your rules, as filthy as you like.",
  },
  {
    title: "Play anywhere, discreetly",
    description:
      "Sex Emulator runs right in your browser on desktop and mobile. No download, nothing left behind.",
  },
];

export type DollOptionGroup = { title: string; tagline: string; description: string; options: string[] };

export const dollOptionGroups: DollOptionGroup[] = [
  {
    title: "Looks",
    tagline: "to die for",
    description: "Sculpt her body, face and style exactly to your taste.",
    options: ["Ethnicity", "Hair color", "Breast size"],
  },
  {
    title: "Skills",
    tagline: "that tease",
    description: "Train her in the naughty moves you enjoy most.",
    options: ["Sucking", "Spanking", "Anal", "Feet"],
  },
  {
    title: "Premade",
    tagline: "and ready",
    description: "Skip the foreplay and jump in with a ready-made doll.",
    options: ["Famous pornstars", "Popular characters"],
  },
];

export type HowToStep = { title: string; description: string };

export const sexEmulatorSteps: HowToStep[] = [
  {
    title: "Click to play",
    description: "Open Sex Emulator in a new tab from any device. She's only a click away.",
  },
  {
    title: "Create your free account",
    description: "Sign up in seconds. Age verification may be required depending on your location.",
  },
  {
    title: "Build her and play",
    description: "Create and train your own sex doll, or pick a premade pornstar and let the fun begin.",
  },
];

export const gameCategories = [
  "3D porn games",
  "Sex simulator",
  "Virtual sex doll",
  "Hentai games",
  "Cartoon porn games",
  "VR porn games",
  "Porn games for mobile",
  "Furry sex games",
];

export type SexEmulatorFaq = { question: string; answer: string };

export const sexEmulatorFaqs: SexEmulatorFaq[] = [
  {
    question: "What is Sex Emulator?",
    answer:
      "Sex Emulator (SexEmulator.com) is a hot, fully interactive adult game where players create, customize, train and explore fantasies with their own virtual sex doll in 3D.",
  },
  {
    question: "Can I customize my sex doll?",
    answer:
      "Yes. You can set her ethnicity, hair color and breast size, and choose skill preferences such as sucking, spanking, anal and feet.",
  },
  {
    question: "Can I play with famous pornstars?",
    answer:
      "Yes. Besides building your own doll, you can choose a premade sex doll, including famous pornstars and popular characters.",
  },
  {
    question: "Is Sex Emulator free?",
    answer:
      "You can create an account and start playing for free. Some extra content and features may require an upgrade on the Sex Emulator website.",
  },
  {
    question: "Is Sex Emulator available in my country?",
    answer:
      "Sex Emulator is available to adults worldwide. In some locations you must create an account and verify your age before you can see the content.",
  },
  {
    question: "Does Sex Emulator work on mobile?",
    answer:
      "Yes. The sex simulator runs in your browser on desktop, Android and iPhone, so there is nothing to download or install.",
  },
  {
    question: "Is it safe and private?",
    answer:
      "Sex Emulator is operated by a third party. Play discreetly in a private browser window and review the platform's privacy policy before signing up. You must be 18 or older.",
  },
];
