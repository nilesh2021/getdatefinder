import type { PublicOffer } from "@/lib/offers";

export type PromoCta = {
  name: string;
  href: string;
  id: string;
};

export function toPromoCta(offer: PublicOffer): PromoCta {
  return {
    id: offer.id,
    name: offer.name,
    href: `/go/${offer.id}`,
  };
}
