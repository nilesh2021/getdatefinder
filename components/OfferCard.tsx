import Image from "next/image";
import type { PublicOffer } from "@/lib/offers";
import { OfferLogo } from "@/components/OfferLogo";
import { CheckIcon, ExternalLinkIcon } from "@/components/Icons";

type OfferCardProps = {
  offer: PublicOffer;
};

export function OfferCard({ offer }: OfferCardProps) {
  const headingId = `offer-${offer.id}-title`;

  return (
    <article
      aria-labelledby={headingId}
      className="group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-hairline bg-surface shadow-card transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1.5 hover:border-brand-400/40 hover:shadow-card-hover focus-within:-translate-y-1.5 focus-within:shadow-card-hover"
    >
      <div className="relative aspect-[5/4] overflow-hidden">
        <Image
          src={offer.image}
          alt={offer.imageAlt}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"
        />
        <span className="absolute top-3.5 left-3.5 rounded-full border border-white/15 bg-ink-950/55 px-3 py-1 text-[0.65rem] font-medium tracking-[0.16em] text-ink-900 uppercase backdrop-blur-md">
          {offer.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-5 pt-1 pb-5 sm:px-6 sm:pb-6">
        <div className="flex items-center gap-3">
          <OfferLogo offer={offer} size={36} />
          <h3
            id={headingId}
            className="truncate font-display text-[1.35rem] font-medium tracking-tight text-ink-900"
          >
            {offer.name}
          </h3>
        </div>

        <p className="mt-3.5 text-sm leading-6 text-ink-600">{offer.description}</p>

        <ul className="mt-4 space-y-2" aria-label={`${offer.name} key features`}>
          {offer.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-700">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand-400/30 text-brand-300">
                <CheckIcon className="h-3 w-3" />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <a
            href={`/go/${offer.id}`}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="btn-clay inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-300 hover:btn-clay-hover group-hover:-translate-y-px"
          >
            Visit Offer
            <ExternalLinkIcon className="h-4 w-4" />
            <span className="sr-only"> {offer.name} (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </article>
  );
}
