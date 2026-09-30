"use client";

import { useState } from "react";
import type { PublicOffer } from "@/lib/offers";
import { OfferCard } from "@/components/OfferCard";

const FILTERS = ["Adult", "Gay", "Trans", "CAM"] as const;

type Filter = (typeof FILTERS)[number];

type OfferBrowserProps = {
  offers: PublicOffer[];
  variant?: "editorial" | "ad";
  featuredOfferId?: string | null;
};

export function OfferBrowser({
  offers,
  variant = "editorial",
  featuredOfferId = null,
}: OfferBrowserProps) {
  const [filter, setFilter] = useState<Filter>("Adult");

  const visible = offers.filter((offer) => offer.tags.includes(filter));

  return (
    <>
      <div
        role="group"
        aria-label="Filter dating offers by type"
        className="mt-10 flex flex-wrap gap-2"
      >
        {FILTERS.map((item) => {
          const selected = item === filter;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(item)}
              className={`rounded-full px-4 py-1.5 text-[0.78rem] font-medium tracking-[0.14em] uppercase transition-all duration-300 ${
                selected
                  ? "btn-clay text-ink-950"
                  : "border border-brand-400/20 bg-white/[0.03] text-ink-600 hover:border-brand-400/45 hover:text-ink-900"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="mt-8 rounded-[1.35rem] border border-hairline bg-surface px-6 py-10 text-center text-sm text-ink-600">
          {`No ${filter} offers listed yet.`}
        </p>
      ) : (
        <ul role="list" className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((offer) => (
            <li key={offer.id} className="flex">
              <OfferCard
                offer={offer}
                variant={variant}
                featured={variant === "ad" && offer.id === featuredOfferId}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
