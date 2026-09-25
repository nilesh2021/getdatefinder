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
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-200 bg-surface shadow-card transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-card-hover focus-within:-translate-y-1 focus-within:shadow-card-hover"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={offer.image}
          alt={offer.imageAlt}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-brand-700 shadow-sm">
          {offer.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <OfferLogo offer={offer} size={40} />
          <h3
            id={headingId}
            className="truncate text-lg font-semibold tracking-tight text-ink-900"
          >
            {offer.name}
          </h3>
        </div>

        <p className="mt-4 text-sm leading-6 text-ink-600">{offer.description}</p>

        <ul className="mt-4 space-y-2" aria-label={`${offer.name} key features`}>
          {offer.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-700">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700">
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
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-5 py-3 text-sm font-semibold text-white shadow-sm transition-[opacity,box-shadow] duration-200 hover:opacity-90 hover:shadow-md"
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
