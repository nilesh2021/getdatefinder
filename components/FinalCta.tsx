import Link from "next/link";
import { Container } from "@/components/Container";
import { ArrowRightIcon } from "@/components/Icons";

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="py-10 sm:py-12">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-gradient px-6 py-10 text-center text-white shadow-lg sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/15 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-white/10 blur-2xl"
          />

          <h2
            id="final-cta-heading"
            className="relative mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Ready to explore the dating platforms available to you?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
            Compare the offers above and visit the dating website that fits what
            you are looking for.
          </p>
          <Link
            href="/#offers"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-brand-700 shadow-md transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-white"
          >
            Explore Offers
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
