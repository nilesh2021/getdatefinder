"use client";

import { useState } from "react";
import type { PublicOffer } from "@/lib/offers";
import { OfferCard } from "@/components/OfferCard";

const FILTERS = ["Adult", "Gay", "Trans", "CAM"] as const;

type Filter = (typeof FILTERS)[number];

type OfferBrowserProps = {
  offers: PublicOffer[];
};

export function OfferBrowser({ offers }: OfferBrowserProps) {
  const [filter, setFilter] = useState<Filter>("Adult");

  const visible = offers.filter((offer) => offer.tags.includes(filter));

  return (
    <>
      <div
        role="group"
        aria-label="Filter dating offers by type"
        className="mt-8 flex flex-wrap gap-2"
      >
        {FILTERS.map((item) => {
          const selected = item === filter;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(item)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                selected
                  ? "bg-brand-500 text-ink-950 shadow-sm"
                  : "bg-white/5 text-ink-700 ring-1 ring-white/10 hover:bg-white/10 hover:text-ink-900"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="mt-8 rounded-2xl border border-white/8 bg-surface px-6 py-8 text-center text-sm text-ink-600">
          {`No ${filter} offers listed yet.`}
        </p>
      ) : (
        <ul role="list" className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((offer) => (
            <li key={offer.id} className="flex">
              <OfferCard offer={offer} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
