"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import type { PublicOffer } from "@/lib/offers";
import { OfferLogo } from "@/components/OfferLogo";
import { CheckIcon, ExternalLinkIcon } from "@/components/Icons";

const DISMISS_KEY = "offer-popup-dismissed";
const OPEN_DELAY_MS = 4000;

type OfferPopupProps = {
  offer: PublicOffer;
};

export function OfferPopup({ offer }: OfferPopupProps) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const titleId = useId();

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY) === "1") return;

    const timer = window.setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    previousFocus.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dismiss();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus.current?.focus();
    };
  }, [open]);

  function dismiss() {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setOpen(false);
  }

  if (!open) return null;

  const features = offer.features.slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        aria-label="Close featured offer"
        className="absolute inset-0 bg-ink-900/60"
        onClick={dismiss}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[min(90vh,640px)] w-full max-w-md flex-col overflow-hidden rounded-3xl bg-surface shadow-card-hover"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink-700 shadow-sm hover:text-ink-900"
        >
          <span aria-hidden="true" className="text-lg leading-none">
            ×
          </span>
        </button>

        <div className="relative aspect-[16/9] shrink-0 overflow-hidden">
          <Image
            src={offer.image}
            alt={offer.imageAlt}
            fill
            sizes="(min-width: 640px) 448px, 100vw"
            className="object-cover"
          />
          <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-brand-700 shadow-sm">
            {offer.category}
          </span>
        </div>

        <div className="overflow-y-auto p-5">
          <p className="text-xs font-semibold tracking-wide text-brand-700 uppercase">
            Featured offer
          </p>
          <div className="mt-2 flex items-center gap-3">
            <OfferLogo offer={offer} size={40} />
            <h2 id={titleId} className="truncate text-lg font-semibold tracking-tight text-ink-900">
              {offer.name}
            </h2>
          </div>
          <p className="mt-3 text-sm leading-6 text-ink-600">{offer.description}</p>
          <ul className="mt-4 space-y-2" aria-label={`${offer.name} key features`}>
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-700">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                  <CheckIcon className="h-3 w-3" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={`/go/${offer.id}`}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-5 py-3 text-sm font-semibold text-white shadow-sm transition-[opacity,box-shadow] duration-200 hover:opacity-90 hover:shadow-md"
          >
            Visit Offer
            <ExternalLinkIcon className="h-4 w-4" />
            <span className="sr-only"> {offer.name} (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
