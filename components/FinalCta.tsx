import Link from "next/link";
import { Container } from "@/components/Container";
import { ArrowRightIcon } from "@/components/Icons";

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="py-14 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-cta-glow px-6 py-14 text-center shadow-card sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/25 blur-3xl"
          />

          <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-brand-400">
            Ready when you are
          </p>
          <h2
            id="final-cta-heading"
            className="relative mx-auto mt-5 max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink-900 sm:text-5xl"
          >
            Ready to explore the dating platforms{" "}
            <span className="text-accent-italic">available to you?</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-base leading-7 text-ink-600 sm:text-lg">
            Compare the offers above and visit the dating website that fits what
            you are looking for.
          </p>
          <Link
            href="/#offers"
            className="relative mt-9 inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-base font-semibold text-ink-950 shadow-[0_12px_32px_-12px_rgb(217_130_95/0.7)] transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-brand-400"
          >
            Explore Offers
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
