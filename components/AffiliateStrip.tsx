import Link from "next/link";
import { affiliateDisclosureShort } from "@/lib/site";
import { Container } from "@/components/Container";

export function AffiliateStrip() {
  return (
    <div className="border-y border-brand-400/15 bg-surface/80 backdrop-blur-sm">
      <Container className="py-2.5 sm:py-3">
        <p className="text-center text-[0.65rem] leading-5 text-ink-500 sm:text-xs sm:leading-5">
          <span className="font-semibold uppercase tracking-[0.12em] text-brand-400">
            18+ only
          </span>
          <span className="mx-2 text-ink-400" aria-hidden="true">·</span>
          {affiliateDisclosureShort}{" "}
          <Link
            href="/affiliate-disclosure"
            className="underline underline-offset-2 transition-colors hover:text-brand-300"
          >
            Read more
          </Link>
        </p>
      </Container>
    </div>
  );
}
