import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Great_Vibes, Poppins } from "next/font/google";
import { Container } from "@/components/Container";
import { ChevronDownIcon, HeartIcon, ShieldIcon } from "@/components/Icons";
import { getOfferById } from "@/lib/offers";
import { affiliateDisclosureShort, footerLinks, siteConfig } from "@/lib/site";
import { sexEmulatorKeywordLandings } from "@/lib/sex-emulator-keyword-landings";
import {
  dollImage,
  dollOptionGroups,
  gameCategories,
  heroImage,
  sexEmulatorFaqs,
  sexEmulatorFeatures,
  sexEmulatorOfferId,
  sexEmulatorPath,
  sexEmulatorSeo,
  sexEmulatorSteps,
} from "@/lib/sex-emulator";

const script = Great_Vibes({ variable: "--font-script", subsets: ["latin"], weight: "400" });
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "800", "900"],
});

const { title, description, keywords } = sexEmulatorSeo;
const ctaHref = `/go/${sexEmulatorOfferId}`;
const shareImage = {
  url: "/images/sex-emulator-hero.jpg",
  width: 1024,
  height: 576,
  alt: "Sex Emulator 3D virtual sex doll game characters",
};

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords,
  alternates: {
    canonical: sexEmulatorPath,
    languages: { "x-default": sexEmulatorPath },
  },
  openGraph: {
    title,
    description,
    url: sexEmulatorPath,
    type: "website",
    siteName: siteConfig.name,
    locale: "en_US",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
  other: { rating: "adult" },
};

const pageUrl = `${siteConfig.url}${sexEmulatorPath}`;

const jsonLd = [
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
    description:
      "A fully interactive 3D adult game where players create, customize, train and explore fantasies with their own virtual sex doll.",
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
    mainEntity: sexEmulatorFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
];

const scriptFont = "font-[family-name:var(--font-script)] font-normal normal-case tracking-normal";

const hotGlow =
  "bg-[#0a0508] bg-[radial-gradient(ellipse_60%_50%_at_15%_0%,rgb(255_31_109_/_0.28),transparent_65%),radial-gradient(ellipse_55%_45%_at_90%_100%,rgb(214_0_111_/_0.25),transparent_65%)]";

const wineGlow =
  "bg-[#12060b] bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgb(58_0_25_/_0.9),transparent_70%)]";

const hotCard =
  "rounded-3xl border border-[#ff1f6d]/25 bg-white/[0.03] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#ff1f6d]/70 hover:shadow-[0_20px_60px_-20px_rgb(255_31_109_/_0.7)]";

function Accent({ children }: { children: ReactNode }) {
  return (
    <span
      className={`${scriptFont} bg-gradient-to-r from-[#ff6b9e] via-[#ff1f6d] to-[#d6006f] bg-clip-text px-1 text-[1.4em] leading-none text-transparent`}
    >
      {children}
    </span>
  );
}

function Heading({
  id,
  eyebrow,
  title,
  description,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={`${scriptFont} text-3xl text-[#ff6b9e] sm:text-4xl`}>{eyebrow}</p>
      <h2
        id={id}
        className="mt-2 text-3xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/65 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

function PlayButton({ label = "Play with her now", size = "lg" }: { label?: string; size?: "lg" | "md" }) {
  const sizing = size === "lg" ? "px-12 py-4 text-xl sm:px-16 sm:py-5 sm:text-2xl" : "px-9 py-3.5 text-base";

  return (
    <span className="relative inline-flex">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2 animate-pulse rounded-full bg-[#ff1f6d]/50 blur-xl"
      />
      <a
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className={`relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff1f6d] to-[#d6006f] font-black uppercase tracking-wide text-white shadow-[0_18px_50px_-10px_rgb(255_31_109_/_0.8)] ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:from-[#ff3d82] hover:to-[#ff1f6d] active:translate-y-0 ${sizing}`}
      >
        <HeartIcon className="h-5 w-5 shrink-0" />
        {label}
        <span className="sr-only"> (opens Sex Emulator in a new tab)</span>
      </a>
    </span>
  );
}

export default function SexEmulatorPage() {
  const offer = getOfferById(sexEmulatorOfferId);

  if (!offer) {
    notFound();
  }

  return (
    <div
      className={`${script.variable} ${poppins.variable} flex flex-1 flex-col bg-[#0a0508] font-[family-name:var(--font-poppins)] text-white`}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main id="main" className="flex-1">
        <section
          aria-labelledby="hero-heading"
          className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-[#0a0508] py-24"
        >
          {heroImage ? (
            <Image
              src={heroImage}
              alt="Sex Emulator 3D virtual sex doll game characters"
              fill
              priority
              sizes="100vw"
              className="-z-20 object-cover object-top"
            />
          ) : null}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#3a0019]/55 via-[#0a0508]/35 to-[#0a0508]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgb(255_31_109_/_0.3),transparent_65%)] mix-blend-screen"
          />

          <span className="absolute top-5 right-5 inline-flex items-center gap-1.5 rounded-full border border-[#ff1f6d]/60 bg-black/60 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#ff6b9e] backdrop-blur">
            <ShieldIcon className="h-3.5 w-3.5" />
            18+ only
          </span>

          <Container>
            <div className="relative mx-auto max-w-4xl text-center">
              <p
                aria-hidden="true"
                className={`${scriptFont} pointer-events-none absolute inset-x-0 -top-16 -z-10 select-none text-[7rem] leading-none text-[#ff1f6d]/30 blur-[1px] sm:-top-24 sm:text-[12rem]`}
              >
                Naughty
              </p>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white/85 backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff1f6d]" />
                Free to start &middot; No download
              </p>
              <h1
                id="hero-heading"
                className="mt-6 text-4xl font-black uppercase leading-[0.95] tracking-tight text-white drop-shadow-[0_6px_30px_rgb(255_31_109_/_0.55)] sm:text-6xl lg:text-7xl"
              >
                Live out your dirtiest <Accent>fantasies</Accent>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                Sex Emulator is the fully interactive 3D sex simulator where you create, undress and train your own
                virtual sex doll, or play with premade pornstars who never say no.
              </p>
              <div className="mt-11">
                <PlayButton />
              </div>
              <p className="mt-7 text-sm text-white/55">18+ only. Free to start. Opens in a new tab.</p>
            </div>
          </Container>
        </section>

        <section aria-labelledby="intro-heading" className={`py-20 sm:py-28 ${hotGlow}`}>
          <Container>
            <Heading
              id="intro-heading"
              eyebrow="Tired of plain porn?"
              title={
                <>
                  The hottest <Accent>interactive</Accent> porn games
                </>
              }
            />
            <div className="mx-auto mt-10 max-w-3xl space-y-5 text-center text-base leading-8 text-white/70 sm:text-lg">
              <p>
                When porn videos and cams start to feel repetitive, Sex Emulator gives you something far naughtier. It
                is a hot, fully interactive adult game where you create, customize, train and explore every fantasy
                with your very own virtual sex doll.
              </p>
              <p>
                Pick her ethnicity, hair color and breast size, then teach her what you crave: sucking, spanking, anal
                and feet. Too impatient? Grab a premade sex doll, including famous pornstars and popular characters.
              </p>
              <p>
                Unlike regular porn, a 3D sex game has no limits. She never gets tired, every scene looks crisp and
                you direct every move. Play online from anywhere, on desktop or mobile, with no download required.
              </p>
            </div>
          </Container>
        </section>

        <section aria-labelledby="features-heading" className={`py-20 sm:py-28 ${wineGlow}`}>
          <Container>
            <Heading
              id="features-heading"
              eyebrow="Why you'll get hooked"
              title={
                <>
                  Why play <Accent>Sex Emulator</Accent>
                </>
              }
              description="Everything you want in a virtual sex doll game, right in your browser."
            />
            <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {sexEmulatorFeatures.map((feature) => (
                <li key={feature.title} className={`${hotCard} p-7`}>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#ff1f6d] to-[#d6006f] text-white shadow-[0_10px_30px_-8px_rgb(255_31_109_/_0.8)]">
                    <HeartIcon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold uppercase tracking-wide text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/65">{feature.description}</p>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section aria-labelledby="doll-heading" className={`py-20 sm:py-28 ${hotGlow}`}>
          <Container>
            <Heading
              id="doll-heading"
              eyebrow="Made just for you"
              title={
                <>
                  Build your perfect <Accent>sex doll</Accent>
                </>
              }
              description="Shape her body, train her skills, or start with a famous pornstar."
            />
            <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="group relative block -rotate-2 overflow-hidden rounded-3xl border-2 border-[#ff1f6d] shadow-[0_0_0_6px_rgb(255_31_109_/_0.15),0_30px_90px_-20px_rgb(255_31_109_/_0.8)] transition duration-500 hover:rotate-0"
              >
                <Image
                  src={dollImage.src}
                  alt={dollImage.alt}
                  width={dollImage.width}
                  height={dollImage.height}
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="sr-only">Customize your doll on Sex Emulator (opens in a new tab)</span>
              </a>

              <div className="space-y-4">
                {dollOptionGroups.map((group) => (
                  <div key={group.title} className={`${hotCard} p-6`}>
                    <h3 className="text-xl font-black uppercase tracking-wide text-white">
                      {group.title} <span className={`${scriptFont} text-2xl text-[#ff6b9e]`}>{group.tagline}</span>
                    </h3>
                    <p className="mt-1 text-sm text-white/65">{group.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {group.options.map((option) => (
                        <li
                          key={option}
                          className="rounded-full bg-[#ff1f6d]/15 px-3.5 py-1.5 text-sm font-semibold text-[#ff9fbf] ring-1 ring-[#ff1f6d]/40"
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="pt-3">
                  <PlayButton label="Undress your fantasy" size="md" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section aria-labelledby="how-heading" className={`py-20 sm:py-28 ${wineGlow}`}>
          <Container>
            <Heading
              id="how-heading"
              eyebrow="Quick and dirty"
              title={
                <>
                  Get naughty in <Accent>three steps</Accent>
                </>
              }
            />
            <ol className="mt-14 grid gap-5 md:grid-cols-3">
              {sexEmulatorSteps.map((step, index) => (
                <li key={step.title} className={`${hotCard} p-7`}>
                  <span className="bg-gradient-to-br from-[#ff6b9e] to-[#d6006f] bg-clip-text text-5xl font-black text-transparent">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold uppercase tracking-wide text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/65">{step.description}</p>
                </li>
              ))}
            </ol>
            <div className="mt-14 text-center">
              <PlayButton size="md" label="Get naughty free" />
            </div>
          </Container>
        </section>

        <section aria-labelledby="categories-heading" className={`py-20 sm:py-28 ${hotGlow}`}>
          <Container>
            <Heading
              id="categories-heading"
              eyebrow="Whatever turns you on"
              title={
                <>
                  More than a <Accent>sex simulator</Accent>
                </>
              }
              description="Sex Emulator covers the adult game styles players crave most."
            />
            <ul className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
              {gameCategories.map((category) => (
                <li key={category}>
                  <a
                    href={ctaHref}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="inline-flex rounded-full border border-[#ff1f6d]/50 bg-[#ff1f6d]/10 px-5 py-2.5 text-sm font-extrabold text-[#ff9fbf] transition hover:-translate-y-0.5 hover:bg-[#ff1f6d] hover:text-white hover:shadow-[0_12px_30px_-8px_rgb(255_31_109_/_0.9)]"
                  >
                    #{category.replace(/(^|\s+)(\w)/g, (_, _space, letter: string) => letter.toUpperCase())}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section aria-labelledby="faq-heading" className={`py-20 sm:py-28 ${wineGlow}`}>
          <Container>
            <Heading
              id="faq-heading"
              eyebrow="Curious?"
              title={
                <>
                  Sex Emulator <Accent>questions</Accent>
                </>
              }
            />
            <div className="mx-auto mt-12 max-w-3xl space-y-3">
              {sexEmulatorFaqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-[#ff1f6d]/25 bg-white/[0.03] px-6 py-5 transition open:border-[#ff1f6d]/70 open:bg-[#ff1f6d]/[0.06]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-white">
                    {faq.question}
                    <ChevronDownIcon className="h-5 w-5 shrink-0 text-[#ff6b9e] transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-white/65">{faq.answer}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>

        <section
          aria-labelledby="final-heading"
          className="relative isolate overflow-hidden bg-gradient-to-br from-[#d6006f] via-[#ff1f6d] to-[#3a0019] py-24 sm:py-32"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgb(0_0_0_/_0.1),rgb(10_5_8_/_0.6)_80%)]"
          />
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className={`${scriptFont} text-5xl text-white sm:text-7xl`}>She&apos;s waiting for you...</p>
              <h2
                id="final-heading"
                className="mt-4 text-2xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl"
              >
                Your virtual sex doll is ready to play
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/85">
                Create her, train her and live out your wildest fantasies in the best sex emulator online.
              </p>
              <div className="mt-10">
                <PlayButton />
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-[#ff1f6d]/20 bg-[#0a0508] py-10">
        <Container>
          <p className="max-w-3xl text-xs leading-6 text-[#c9a3b1]/70">{affiliateDisclosureShort}</p>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#c9a3b1]/70">
            <li>
              <Link href="/" className="hover:text-[#ff6b9e]">
                {siteConfig.name}
              </Link>
            </li>
            {sexEmulatorKeywordLandings.map((landing) => (
              <li key={landing.path}>
                <Link href={landing.path} className="hover:text-[#ff6b9e]">
                  {landing.footerLabel}
                </Link>
              </li>
            ))}
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[#ff6b9e]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </footer>
    </div>
  );
}
