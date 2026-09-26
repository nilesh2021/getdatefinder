import Image from "next/image";
import Link from "next/link";
import { offers } from "@/lib/offers";
import { Container } from "@/components/Container";
import { ArrowRightIcon, HeartIcon, ShieldIcon } from "@/components/Icons";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-12 pb-14 sm:pt-16 sm:pb-20"
    >
      {/* Ambient clay glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-400">
              <HeartIcon className="h-3.5 w-3.5" strokeWidth={2.2} />
              {offers.length} dating platforms to explore
            </p>

            <h1
              id="hero-heading"
              className="mt-6 font-display text-[2.75rem] font-medium leading-[1.02] tracking-tight text-ink-900 sm:text-6xl lg:text-[4.25rem]"
            >
              Discover online dating platforms{" "}
              <span className="text-accent-italic">worth your time</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-ink-600 sm:text-lg sm:leading-8">
              Browse hand-picked dating offers, compare what each dating website
              is about and jump straight to the platform where you can meet
              people online. No account needed here.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#offers"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-base font-semibold text-ink-950 shadow-[0_12px_32px_-12px_rgb(217_130_95/0.6)] transition-[background-color,transform,box-shadow] hover:-translate-y-0.5 hover:bg-brand-400"
              >
                Explore Dating Offers
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-base font-semibold text-ink-900 transition-colors hover:border-brand-400/60 hover:bg-white/[0.06]"
              >
                See How It Works
              </Link>
            </div>

            <p className="mt-8 flex items-center gap-2 text-sm text-ink-500">
              <ShieldIcon className="h-4 w-4 text-brand-400" />
              18+ only. Offer links open external websites in a new tab.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            {/* Arched frame */}
            <div
              aria-hidden="true"
              className="absolute -inset-2 -z-10 rounded-t-full rounded-b-[2rem] border border-brand-400/30"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2rem] ring-1 ring-white/10 shadow-card-hover">
              <Image
                src="/images/hero-couple.jpg"
                alt="Adult couple sharing a close moment on an evening date"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/95 via-ink-950/60 to-transparent p-6 pt-28">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
                  Adult dating, 18+
                </p>
                <p className="mt-2 font-display text-xl font-medium text-ink-900">
                  Real people. <span className="italic text-brand-300">External platforms.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
