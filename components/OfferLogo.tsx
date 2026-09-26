import Image from "next/image";
import type { Offer } from "@/lib/offers";

const gradients = [
  "from-brand-400 to-brand-700",
  "from-brand-300 to-brand-600",
  "from-brand-600 to-brand-800",
  "from-brand-500 to-ink-300",
  "from-brand-700 to-ink-200",
];

type OfferLogoProps = {
  offer: Pick<Offer, "name" | "logo">;
  size?: number;
  className?: string;
};

/** Gradient monogram badge; renders the real logo when one is supplied. */
export function OfferLogo({ offer, size = 56, className = "" }: OfferLogoProps) {
  if (offer.logo) {
    return (
      <Image
        src={offer.logo}
        alt={`${offer.name} logo`}
        width={size}
        height={size}
        className={`rounded-2xl object-contain ${className}`}
      />
    );
  }

  const gradient = gradients[hashName(offer.name) % gradients.length];
  const initial = offer.name.charAt(0).toUpperCase();

  return (
    <div
      role="img"
      aria-label={`${offer.name} logo placeholder`}
      style={{ width: size, height: size, fontSize: size * 0.42 }}
      className={`flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} font-display font-semibold text-ink-900 shadow-sm ring-1 ring-white/10 ${className}`}
    >
      {initial}
    </div>
  );
}

function hashName(name: string): number {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  return hash;
}
