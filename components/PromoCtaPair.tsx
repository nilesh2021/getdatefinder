import Link from "next/link";
import type { PromoCta } from "@/lib/promo";
import { ArrowRightIcon, ExternalLinkIcon } from "@/components/Icons";

type PromoCtaPairProps = {
  promo: PromoCta;
  /** Stack buttons on small screens (default). */
  layout?: "stack" | "row";
  className?: string;
  primaryLabel?: string;
};

export function PromoCtaPair({
  promo,
  layout = "stack",
  className = "",
  primaryLabel,
}: PromoCtaPairProps) {
  const primary = primaryLabel ?? `Visit ${promo.name} now`;

  return (
    <div
      className={`flex flex-col gap-3 sm:gap-4 ${
        layout === "row" ? "sm:flex-row sm:items-center" : ""
      } ${className}`}
    >
      <a
        href={promo.href}
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className="btn-clay-lg animate-cta-glow inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold transition-transform duration-300 hover:-translate-y-0.5 hover:btn-clay-hover sm:text-lg"
      >
        {primary}
        <ExternalLinkIcon className="h-4 w-4 shrink-0" />
        <span className="sr-only"> {promo.name} (opens in a new tab)</span>
      </a>
      <Link
        href="/#offers"
        className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-400/35 bg-white/[0.04] px-7 py-3.5 text-base font-semibold text-ink-800 backdrop-blur-sm transition-colors hover:border-brand-400/60 hover:bg-white/[0.08] hover:text-ink-900 sm:py-4"
      >
        See all offers
        <ArrowRightIcon className="h-4 w-4" />
      </Link>
    </div>
  );
}
