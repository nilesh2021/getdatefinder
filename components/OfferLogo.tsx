import Image from "next/image";
import type { Offer } from "@/lib/offers";

const gradients = [
  "from-brand-500 to-violet-600",
  "from-violet-500 to-brand-400",
  "from-brand-600 to-violet-500",
  "from-violet-600 to-brand-500",
  "from-brand-400 to-violet-500",
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
      className={`flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} font-bold text-white shadow-sm ${className}`}
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
