import type { PublicOffer } from "@/lib/offers";
import { Container } from "@/components/Container";
import { PromoCtaPair } from "@/components/PromoCtaPair";
import { toPromoCta } from "@/lib/promo";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

type FinalCtaProps = {
  featured?: PublicOffer | null;
};

export function FinalCta({ featured = null }: FinalCtaProps) {
  const promo = featured ? toPromoCta(featured) : null;

  return (
    <section aria-labelledby="final-cta-heading" className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2.25rem] border border-hairline bg-cta-glow px-6 py-16 text-center sm:px-12 sm:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-brand-500/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/50 to-transparent"
          />

          <p className="relative inline-flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.32em] text-brand-400">
            <span aria-hidden="true" className="h-px w-8 bg-brand-400/50" />
            Last chance to browse
            <span aria-hidden="true" className="h-px w-8 bg-brand-400/50" />
          </p>
          <h2
            id="final-cta-heading"
            className="relative mx-auto mt-6 max-w-2xl font-display text-4xl font-medium leading-[1.02] text-ink-900 sm:text-5xl lg:text-[3.4rem]"
          >
            {promo ? (
              <>
                Ready for <span className="text-accent-italic">{promo.name}</span>?
              </>
            ) : (
              <>
                Ready to explore the dating platforms{" "}
                <span className="text-accent-italic">available to you?</span>
              </>
            )}
          </h2>
          <p className="relative mx-auto mt-6 max-w-lg text-base leading-8 text-ink-600 sm:text-lg">
            {promo
              ? "Hit the button — you’ll land on the live site in a new tab. Or scroll up and compare every offer first."
              : "Compare the offers above and visit the dating website that fits what you are looking for."}
          </p>

          {promo ? (
            <PromoCtaPair promo={promo} className="relative mt-10 items-center justify-center" />
          ) : (
            <Link
              href="/#offers"
              className="btn-clay relative mt-10 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold transition-transform duration-300 hover:-translate-y-0.5 hover:btn-clay-hover"
            >
              Explore Offers
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
