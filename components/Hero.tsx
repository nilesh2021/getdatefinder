import Image from "next/image";
import Link from "next/link";
import type { PublicOffer } from "@/lib/offers";
import { Container } from "@/components/Container";
import { PromoCtaPair } from "@/components/PromoCtaPair";
import { toPromoCta } from "@/lib/promo";
import { ShieldIcon } from "@/components/Icons";

type HeroProps = {
  featured: PublicOffer | null;
};

export function Hero({ featured }: HeroProps) {
  const promo = featured ? toPromoCta(featured) : null;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pb-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-ad-panel" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow" />

      <Container>
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="relative z-10 max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-400/35 bg-brand-500/10 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-brand-300">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              Featured offer · 18+ only
            </p>

            <h1
              id="hero-heading"
              className="mt-6 font-display text-[2.65rem] font-medium leading-[0.95] text-ink-900 sm:text-5xl lg:text-[3.75rem]"
            >
              Meet people online{" "}
              <span className="text-accent-italic">tonight</span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-7 text-ink-600 sm:text-lg sm:leading-8">
              {featured
                ? `Jump straight to ${featured.name} or compare every dating offer below — one click, no signup on this site.`
                : "Browse hand-picked adult dating offers and visit the platform that fits you."}
            </p>

            {promo ? (
              <PromoCtaPair
                promo={promo}
                className="mt-8"
                primaryLabel={`Start on ${promo.name}`}
              />
            ) : (
              <Link
                href="/#offers"
                className="btn-clay-lg mt-8 inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-bold"
              >
                Explore offers
              </Link>
            )}

            <p className="mt-6 flex items-center gap-2.5 text-sm text-ink-500">
              <ShieldIcon className="h-4 w-4 shrink-0 text-brand-400" />
              External dating sites open in a new tab. You must be 18 or older.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none lg:justify-self-end">
            <div
              aria-hidden="true"
              className="absolute -inset-3 -z-10 rounded-[2rem] bg-brand-500/20 blur-2xl"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-brand-400/25 shadow-card-hover sm:aspect-[5/6]">
              <Image
                src="/images/hero-couple.jpg"
                alt="Adult couple sharing a close moment on an evening date"
                fill
                priority
                sizes="(min-width: 1024px) 520px, 90vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/25 to-transparent"
              />
              {featured ? (
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-brand-300">
                    Today&apos;s pick
                  </p>
                  <p className="mt-2 font-display text-2xl font-medium text-ink-900 sm:text-3xl">
                    {featured.name}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink-700">
                    {featured.description}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
