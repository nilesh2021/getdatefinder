import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { offers } from "@/lib/offers";

const pageTitle = "Free Adult Dating Offers in USA";
const pageDescription =
  "Handpicked free adult dating offers for adults across the United States. Compare four platforms and visit the one that fits.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "/free-adult-dating-offers-in-usa" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/free-adult-dating-offers-in-usa",
  },
};

const usaOfferIds = ["realsexclub", "pridepair", "naughtycharm", "milffinder"] as const;

const usaOffers = usaOfferIds.map((id) => {
  const offer = offers.find((item) => item.id === id);
  if (!offer) {
    throw new Error(`Missing USA offer: ${id}`);
  }
  return offer;
});

const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Miami",
  "Austin",
  "Nashville",
  "San Diego",
  "Seattle",
];

const dateKinds = [
  {
    eyebrow: "For every mood",
    title: "Every Kind of Date",
    body: "Casual chats, mature matches, and inclusive communities, gathered in one list.",
    image: "/images/real-dance.jpg",
    imageAlt: "People dancing together in a city square at night",
  },
  {
    eyebrow: "Coast to coast",
    title: "Coast-to-Coast Picks",
    body: "Offers chosen for adults meeting people online across the United States.",
    image: "/images/real-man.jpg",
    imageAlt: "Portrait of a man in a grey sweater",
  },
  {
    eyebrow: "Clear labels",
    title: "Honest Upfront Pricing",
    body: "Each card names the niche before you leave this page.",
    image: "/images/real-couple.jpg",
    imageAlt: "Two people forming a heart shape with their hands at sunset",
  },
  {
    eyebrow: "Updated list",
    title: "New Offers Weekly",
    body: "A short list of current adult dating platforms, ready when you are.",
    image: "/images/real-men.jpg",
    imageAlt: "A smiling woman in a denim jacket standing against a blue wall",
  },
];

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true" fill="none">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Pin() {
  return (
    <svg viewBox="0 0 16 16" className="size-3.5 text-[#c4a574]" aria-hidden="true" fill="none">
      <path
        d="M8 14s4.5-3.4 4.5-7A4.5 4.5 0 0 0 3.5 7c0 3.6 4.5 7 4.5 7Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="7" r="1.35" fill="currentColor" />
    </svg>
  );
}

export default function FreeAdultDatingOffersUsaPage() {
  const primary = usaOffers[0];

  return (
    <main className="relative z-10 min-h-full bg-[#0c0908] text-[#f4efe8]">
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-10 pb-12 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pt-16 lg:pb-16">
        <div>
          <p className="text-[11px] tracking-[0.28em] text-[#a89888] uppercase">
            Curated offers from across the USA
          </p>
          <h1 className="font-display mt-5 text-5xl leading-[0.95] text-[#f7f1ea] sm:text-6xl lg:text-7xl">
            Unforgettable dates,
            <br />
            all across{" "}
            <span className="text-accent-italic text-[#c4a574]">America</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-[#b7aa9e] sm:text-base">
            Free adult dating offers for adults in the United States. Compare four
            handpicked platforms, then visit the one that fits how you want to meet.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#offers"
              className="btn-clay inline-flex items-center gap-2 rounded-full px-5 py-4 text-sm font-medium"
            >
              Browse the Offers
              <Arrow />
            </a>
            <a
              href="#inside"
              className="inline-flex items-center rounded-full border border-[#c4a574]/35 px-5 py-4 text-sm text-[#f4efe8]"
            >
              See What&apos;s Inside
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[22rem]">
          <div className="overflow-hidden rounded-t-[11rem] rounded-b-[1.75rem] border border-[#c4a574]/25 bg-[#161210] shadow-[0_30px_80px_-40px_rgb(0_0_0/0.9)]">
            <Image
              src="/images/hero-couple.jpg"
              alt="A couple smiling together"
              width={720}
              height={900}
              priority
              className="aspect-[4/5] w-full object-cover object-[center_20%]"
            />
          </div>
          <div className="absolute bottom-5 left-1/2 w-[min(15.5rem,78%)] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#14110f]/88 px-4 py-3 text-center shadow-card backdrop-blur-md">
            <p className="text-[10px] tracking-[0.22em] text-[#c4a574] uppercase">Tonight&apos;s table</p>
            <p className="font-display mt-1 text-lg text-[#f7f1ea]">2 hrs · evening dinner</p>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-white/10 bg-[#100d0b] py-3">
        <div className="usa-marquee flex w-max gap-10 pr-10">
          {[...cities, ...cities].map((city, index) => (
            <span
              key={`${city}-${index}`}
              className="text-[11px] tracking-[0.32em] text-[#d8cfc6] uppercase"
            >
              {city}
            </span>
          ))}
        </div>
      </div>

      <section id="offers" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        <p className="text-[11px] tracking-[0.28em] text-[#c4a574] uppercase">This week&apos;s offers</p>
        <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-display max-w-md text-4xl leading-tight text-[#f7f1ea] sm:text-5xl">
            Handpicked dates, honest prices
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-[#b7aa9e]">
            Four adult dating platforms available to visitors in the USA. Open a card to
            continue on that site.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {usaOffers.map((offer) => (
            <Link
              key={offer.id}
              href={`/go/${offer.id}`}
              className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-[#c4a574]/25 bg-[#14110e]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.imageAlt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute top-4 left-4 rounded-full border border-[#c4a574]/70 bg-black/35 px-3.5 py-1 text-[10px] tracking-[0.22em] text-[#f4efe8] uppercase backdrop-blur-sm">
                  {offer.category}
                </span>
              </div>
              <div className="px-5 pt-4 pb-5 sm:px-6 sm:pt-5 sm:pb-6">
                <p className="flex items-center gap-1.5 text-[11px] tracking-[0.22em] text-[#c4b8a8] uppercase">
                  <Pin />
                  USA
                </p>
                <h3 className="font-display mt-2 text-[1.65rem] leading-tight text-white sm:text-[1.85rem]">
                  {offer.name}
                </h3>
                <p className="mt-3 flex items-baseline gap-1.5 text-sm text-[#c4b8a8]">
                  From
                  <span className="font-display text-accent-italic text-[1.75rem] leading-none text-[#c4a574]">
                    Free
                  </span>
                  to join
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="inside" className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:pb-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-24">
            <p className="text-[11px] tracking-[0.28em] text-[#c4a574] uppercase">Why people stay</p>
            <h2 className="font-display mt-3 max-w-md text-4xl leading-[1.05] text-[#f7f1ea] sm:text-5xl">
              Every kind of date,
              <br />
              one place
            </h2>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {dateKinds.map((feature) => (
              <article key={feature.title} className="flex gap-4 py-6 sm:gap-5 sm:py-7">
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  width={144}
                  height={144}
                  className="size-16 shrink-0 rounded-xl object-cover sm:size-[4.5rem]"
                />
                <div>
                  <p className="text-[11px] tracking-[0.22em] text-[#c4a574] uppercase">{feature.eyebrow}</p>
                  <h3 className="font-display mt-2 text-3xl text-white">{feature.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">{feature.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <div className="bg-cta-glow rounded-[2rem] border border-[#c4a574]/25 px-6 py-14 text-center sm:px-12">
          <p className="text-[11px] tracking-[0.28em] text-[#c4a574] uppercase">No sign-up required</p>
          <h2 className="font-display mx-auto mt-4 max-w-lg text-4xl leading-tight text-[#f7f1ea] sm:text-5xl">
            Your next great date is already listed
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#b7aa9e]">
            Scroll the offers above or open today&apos;s pick and continue on {primary.name}.
          </p>
          <Link
            href={`/go/${primary.id}`}
            className="btn-clay mt-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
          >
            Browse Today&apos;s Offers
            <Arrow />
          </Link>
        </div>
      </section>
    </main>
  );
}
