import Image from "next/image";
import type { PublicOffer } from "@/lib/offers";
import { OfferLogo } from "@/components/OfferLogo";
import { CheckIcon, ExternalLinkIcon } from "@/components/Icons";

type OfferCardProps = {
  offer: PublicOffer;
  variant?: "editorial" | "ad";
  featured?: boolean;
  tone?: "default" | "bright" | "usa-light" | "usa-dark";
};

export function OfferCard({
  offer,
  variant = "editorial",
  featured = false,
  tone = "default",
}: OfferCardProps) {
  const headingId = `offer-${offer.id}-title`;
  const isAd = variant === "ad";
  const isUsa = tone === "usa-dark" || tone === "usa-light" || tone === "bright";
  const isUsaDark = tone === "usa-dark";

  const cardShell = isUsaDark
    ? `group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-hairline bg-surface shadow-card transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1.5 hover:border-brand-400/40 hover:shadow-card-hover focus-within:-translate-y-1.5 focus-within:shadow-card-hover ${
        featured && isAd ? "ring-1 ring-brand-400/45" : ""
      }`
    : isUsa
    ? `group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-brand-500/20 bg-white shadow-usa-card transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1.5 hover:border-brand-500/45 hover:shadow-[0_28px_56px_-24px_rgb(217_130_95_/_0.55)] focus-within:-translate-y-1.5 ${
        featured && isAd ? "ring-2 ring-brand-400/50 ring-offset-2 ring-offset-[#fff4ec]" : ""
      }`
    : `group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-hairline bg-surface shadow-card transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1.5 hover:border-brand-400/40 hover:shadow-card-hover focus-within:-translate-y-1.5 focus-within:shadow-card-hover ${
        featured && isAd ? "ring-1 ring-brand-400/45" : ""
      }`;

  const imageOverlay = isUsaDark
    ? "absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"
    : isUsa
    ? "absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent"
    : "absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent";

  const titleClass = isUsaDark ? "text-ink-900" : isUsa ? "text-stone-900" : "text-ink-900";
  const descClass = isUsaDark ? "text-ink-600" : isUsa ? "text-stone-600" : "text-ink-600";
  const featureText = isUsaDark ? "text-ink-700" : isUsa ? "text-stone-700" : "text-ink-700";
  const featureChip = isUsaDark
    ? "rounded-full border border-brand-400/20 bg-brand-500/10 px-2.5 py-0.5 text-xs text-ink-700"
    : isUsa
    ? "rounded-full border border-brand-500/25 bg-brand-100/80 px-2.5 py-0.5 text-xs text-stone-800"
    : "rounded-full border border-brand-400/20 bg-brand-500/10 px-2.5 py-0.5 text-xs text-ink-700";

  return (
    <article aria-labelledby={headingId} className={cardShell}>
      <div className={`relative overflow-hidden ${isAd ? "aspect-[16/10]" : "aspect-[5/4]"}`}>
        <Image
          src={offer.image}
          alt={offer.imageAlt}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div aria-hidden="true" className={imageOverlay} />
        {featured && isAd ? (
          <span className="absolute top-3.5 left-3.5 rounded-full border border-white/60 bg-brand-500 px-3 py-1 text-[0.65rem] font-bold tracking-[0.14em] text-ink-950 uppercase shadow-sm">
            Top pick
          </span>
        ) : (
          <span
            className={`absolute top-3.5 left-3.5 rounded-full px-3 py-1 text-[0.65rem] font-medium tracking-[0.16em] uppercase backdrop-blur-md ${
              isUsa
                ? "border border-white/15 bg-ink-950/55 text-ink-900"
                : "border border-white/15 bg-ink-950/55 text-ink-900"
            }`}
          >
            {offer.category}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-5 pt-1 pb-5 sm:px-6 sm:pb-6">
        <div className="flex items-center gap-3">
          <OfferLogo offer={offer} size={36} />
          <h3
            id={headingId}
            className={`truncate font-display text-[1.35rem] font-medium tracking-tight ${titleClass}`}
          >
            {offer.name}
          </h3>
        </div>

        <p className={`mt-3 text-sm leading-6 ${descClass} ${isAd ? "line-clamp-2" : "mt-3.5"}`}>
          {offer.description}
        </p>

        {!isAd ? (
          <ul className="mt-4 space-y-2" aria-label={`${offer.name} key features`}>
            {offer.features.map((feature) => (
              <li key={feature} className={`flex items-start gap-2.5 text-sm ${featureText}`}>
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                    isUsaDark ? "border-brand-400/30 text-brand-300" : isUsa ? "border-brand-500/35 text-brand-600" : "border-brand-400/30 text-brand-300"
                  }`}
                >
                  <CheckIcon className="h-3 w-3" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        ) : (
          <ul className="mt-3 flex flex-wrap gap-2" aria-label={`${offer.name} key features`}>
            {offer.features.slice(0, 3).map((feature) => (
              <li key={feature} className={featureChip}>
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-5 sm:pt-6">
          <a
            href={`/go/${offer.id}`}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className={
              isUsa && isAd
                ? `btn-usa-base btn-usa-offer px-5 text-base transition-transform hover:-translate-y-0.5 hover:btn-usa-offer-hover group-hover:-translate-y-0.5 active:translate-y-0 ${
                    featured ? "btn-usa-offer-featured animate-usa-offer-pulse" : ""
                  }`
                : `inline-flex w-full items-center justify-center gap-2 rounded-full px-5 font-semibold transition-transform duration-300 hover:btn-clay-hover group-hover:-translate-y-px ${
                    isAd
                      ? "btn-clay-lg animate-cta-glow py-4 text-base"
                      : "btn-clay py-3 text-sm"
                  }`
            }
          >
            {isAd ? `Visit ${offer.name} now` : "Visit Offer"}
            <ExternalLinkIcon
              className={`h-4 w-4 shrink-0 ${isUsa && isAd ? "opacity-90" : ""}`}
            />
            <span className="sr-only"> {offer.name} (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </article>
  );
}
