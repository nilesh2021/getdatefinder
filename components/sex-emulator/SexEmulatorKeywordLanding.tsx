import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Great_Vibes, Poppins } from "next/font/google";
import { Container } from "@/components/Container";
import { ChevronDownIcon, HeartIcon, ShieldIcon } from "@/components/Icons";
import { getOfferById } from "@/lib/offers";
import { affiliateDisclosureShort, footerLinks, siteConfig } from "@/lib/site";
import { sexEmulatorPath } from "@/lib/sex-emulator";
import {
  buildKeywordLandingJsonLd,
  keywordHeroImage,
  sexEmulatorKeywordLandings,
  sexEmulatorOfferId,
  type SexEmulatorKeywordLanding,
} from "@/lib/sex-emulator-keyword-landings";

const script = Great_Vibes({ variable: "--font-script", subsets: ["latin"], weight: "400" });
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "800", "900"],
});

const scriptFont = "font-[family-name:var(--font-script)] font-normal normal-case tracking-normal";

function Accent({ children }: { children: ReactNode }) {
  return (
    <span
      className={`${scriptFont} bg-gradient-to-r from-[#ff6b9e] via-[#ff1f6d] to-[#d6006f] bg-clip-text px-1 text-[1.4em] leading-none text-transparent`}
    >
      {children}
    </span>
  );
}

type SexEmulatorKeywordLandingProps = {
  landing: SexEmulatorKeywordLanding;
};

export function SexEmulatorKeywordLanding({ landing }: SexEmulatorKeywordLandingProps) {
  const offer = getOfferById(sexEmulatorOfferId);
  const ctaHref = `/go/${sexEmulatorOfferId}`;
  const jsonLd = buildKeywordLandingJsonLd(landing);

  const relatedLandings = sexEmulatorKeywordLandings.filter((item) => item.path !== landing.path);

  if (!offer) {
    notFound();
  }

  function PlayButton({ label = landing.hero.cta }: { label?: string }) {
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
          className="relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff1f6d] to-[#d6006f] px-10 py-3.5 text-base font-black uppercase tracking-wide text-white shadow-[0_18px_50px_-10px_rgb(255_31_109_/_0.8)] ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:from-[#ff3d82] hover:to-[#ff1f6d] active:translate-y-0 sm:px-12 sm:py-4 sm:text-lg"
        >
          <HeartIcon className="h-5 w-5 shrink-0" />
          {label}
          <span className="sr-only"> (opens Sex Emulator in a new tab)</span>
        </a>
      </span>
    );
  }

  return (
    <div
      className={`${script.variable} ${poppins.variable} flex flex-1 flex-col bg-[#0a0508] font-[family-name:var(--font-poppins)] text-white`}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main id="main" className="flex-1">
        <section
          aria-labelledby="hero-heading"
          className="relative isolate overflow-hidden bg-[#0a0508] py-16 sm:py-20"
        >
          <Image
            src={keywordHeroImage}
            alt={landing.shareImageAlt}
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-top"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#3a0019]/55 via-[#0a0508]/40 to-[#0a0508]"
          />

          <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-[#ff1f6d]/60 bg-black/60 px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-[#ff6b9e] backdrop-blur">
            <ShieldIcon className="h-3.5 w-3.5" />
            18+ only
          </span>

          <Container>
            <div className="relative mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ff1f6d]" />
                {landing.hero.badge}
              </p>
              <h1
                id="hero-heading"
                className="mt-4 text-3xl font-black uppercase leading-[0.95] tracking-tight text-white drop-shadow-[0_6px_30px_rgb(255_31_109_/_0.55)] sm:text-5xl"
              >
                {landing.hero.h1Lead} <Accent>{landing.hero.h1Accent}</Accent> {landing.hero.h1Trail}
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/80 sm:text-base">{landing.hero.sub}</p>
              <div className="mt-7">
                <PlayButton />
              </div>
              <p className="mt-4 text-xs text-white/55">{landing.hero.finePrint}</p>
            </div>
          </Container>
        </section>

        <section aria-labelledby="features-heading" className="bg-[#12060b] py-12 sm:py-16">
          <Container>
            <h2
              id="features-heading"
              className="text-center text-2xl font-black uppercase tracking-tight text-white sm:text-3xl"
            >
              {landing.featuresTitleLead} <Accent>{landing.featuresTitleAccent}</Accent>
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {landing.features.map((feature) => (
                <li
                  key={feature.title}
                  className="rounded-2xl border border-[#ff1f6d]/25 bg-white/[0.03] p-5"
                >
                  <h3 className="text-base font-extrabold uppercase tracking-wide text-white">{feature.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-white/65">{feature.description}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <PlayButton />
            </div>
          </Container>
        </section>

        <section aria-labelledby="faq-heading" className="py-12 sm:py-16">
          <Container>
            <h2
              id="faq-heading"
              className="text-center text-2xl font-black uppercase tracking-tight text-white sm:text-3xl"
            >
              {landing.faqTitleLead} <Accent>{landing.faqTitleAccent}</Accent>
            </h2>
            <div className="mx-auto mt-8 max-w-2xl space-y-2">
              {landing.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-[#ff1f6d]/25 bg-white/[0.03] px-5 py-4 transition open:border-[#ff1f6d]/70"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white">
                    {faq.question}
                    <ChevronDownIcon className="h-4 w-4 shrink-0 text-[#ff6b9e] transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-2 text-sm leading-6 text-white/65">{faq.answer}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-[#ff1f6d]/20 py-8">
        <Container>
          <p className="max-w-3xl text-xs leading-5 text-[#c9a3b1]/70">{affiliateDisclosureShort}</p>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#c9a3b1]/70">
            <li>
              <Link href="/" className="hover:text-[#ff6b9e]">
                {siteConfig.name}
              </Link>
            </li>
            <li>
              <Link href={sexEmulatorPath} className="hover:text-[#ff6b9e]">
                Sex Emulator
              </Link>
            </li>
            {relatedLandings.map((item) => (
              <li key={item.path}>
                <Link href={item.path} className="hover:text-[#ff6b9e]">
                  {item.footerLabel}
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
