"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { PublicOffer } from "@/lib/offers";
import { ExternalLinkIcon } from "@/components/Icons";

const SHOW_AFTER_PX = 300;

type StickyOfferBarProps = {
  offer: PublicOffer;
};

export function StickyOfferBar({ offer }: StickyOfferBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-400/20 bg-ink-950/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl sm:hidden"
      role="region"
      aria-label="Quick actions"
    >
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={`/go/${offer.id}`}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          className="btn-clay flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3.5 text-sm font-bold hover:btn-clay-hover"
        >
          Visit {offer.name}
          <ExternalLinkIcon className="h-4 w-4 shrink-0" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <Link
          href="/#offers"
          className="inline-flex shrink-0 items-center justify-center rounded-full border border-brand-400/30 px-4 py-3.5 text-sm font-semibold text-ink-800"
        >
          All offers
        </Link>
      </div>
    </div>
  );
}
