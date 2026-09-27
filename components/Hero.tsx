import Image from "next/image";
import Link from "next/link";
import { offers } from "@/lib/offers";
import { Container } from "@/components/Container";
import { ArrowRightIcon, HeartIcon, ShieldIcon } from "@/components/Icons";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative pt-10 pb-20 sm:pt-14 sm:pb-28 lg:pt-8 lg:pb-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-brand-400/25 to-transparent"
      />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.32em] text-brand-400">
              <span aria-hidden="true" className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-400/40 bg-brand-500/10">
                <HeartIcon className="h-3 w-3" strokeWidth={1.8} />
              </span>
              {offers.length} dating platforms to explore
            </p>

            <h1
              id="hero-heading"
              className="mt-7 font-display text-[2.85rem] font-medium leading-[0.98] text-ink-900 sm:text-6xl lg:text-[4.6rem]"
            >
              Discover online dating platforms{" "}
              <span className="text-accent-italic">worth your time</span>
            </h1>

            <p className="mt-8 max-w-md text-base leading-8 text-ink-600 sm:text-lg">
              Browse hand-picked dating offers, compare what each dating website
              is about and jump straight to the platform where you can meet
              people online. No account needed here.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/#offers"
                className="btn-clay inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-transform duration-300 hover:-translate-y-0.5 hover:btn-clay-hover"
              >
                Explore Dating Offers
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-brand-400/25 bg-white/[0.03] px-7 py-3.5 text-base font-medium text-ink-800 backdrop-blur-sm transition-colors hover:border-brand-400/60 hover:bg-white/[0.06] hover:text-ink-900"
              >
                See How It Works
              </Link>
            </div>

            <p className="mt-8 flex items-center gap-2.5 text-sm text-ink-500">
              <ShieldIcon className="h-4 w-4 text-brand-400" />
              18+ only. Offer links open external websites in a new tab.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[22rem] lg:mr-2 lg:max-w-none lg:justify-self-end">
            {/* Double gold arch ring */}
            <div
              aria-hidden="true"
              className="absolute -inset-2.5 -z-10 rounded-t-full rounded-b-[2.25rem] border border-brand-400/35"
            />
            <div
              aria-hidden="true"
              className="absolute -inset-5 -z-20 rounded-t-full rounded-b-[2.75rem] border border-brand-400/12"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2.25rem] shadow-card-hover">
              <Image
                src="/images/hero-couple.jpg"
                alt="Adult couple sharing a close moment on an evening date"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover scale-[1.04]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-ink-950/10"
              />
            </div>

            <div className="absolute inset-x-6 -bottom-5 rounded-2xl border border-brand-400/20 bg-ink-950/70 px-5 py-4 shadow-card backdrop-blur-xl sm:inset-x-8">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-brand-300">
                Adult dating, 18+
              </p>
              <p className="mt-1.5 font-display text-lg font-medium leading-snug text-ink-900">
                Real people. <span className="italic text-brand-300">External platforms.</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
