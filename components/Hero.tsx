import Image from "next/image";
import Link from "next/link";
import { offers } from "@/lib/offers";
import { Container } from "@/components/Container";
import { ArrowRightIcon, HeartIcon, ShieldIcon } from "@/components/Icons";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-10 pb-10 sm:pt-14 sm:pb-14"
    >
      {/* Ambient gradient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-brand-200/60 blur-3xl" />
        <div className="absolute top-20 -right-32 h-96 w-96 rounded-full bg-violet-200/60 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-brand-100 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3.5 py-1.5 text-sm font-medium text-brand-700 shadow-sm backdrop-blur">
              <HeartIcon className="h-4 w-4" strokeWidth={2.2} />
              {offers.length} dating platforms to explore
            </p>

            <h1
              id="hero-heading"
              className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl"
            >
              Discover online dating platforms{" "}
              <span className="text-brand-gradient">worth your time</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-ink-600">
              Browse hand-picked dating offers, compare what each dating website
              is about and jump straight to the platform where you can meet
              people online. No account needed here.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#offers"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-base font-semibold text-white shadow-md transition-[opacity,box-shadow,transform] hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg"
              >
                Explore Dating Offers
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-ink-300 bg-white px-7 py-3.5 text-base font-semibold text-ink-800 shadow-sm transition-colors hover:border-violet-400 hover:bg-violet-50"
              >
                See How It Works
              </Link>
            </div>

            <p className="mt-7 flex items-center gap-2 text-sm text-ink-500">
              <ShieldIcon className="h-4 w-4 text-violet-600" />
              18+ only. Offer links open external websites in a new tab.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-3 -z-10 rotate-2 rounded-[2.5rem] bg-brand-gradient opacity-80" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2.25rem] shadow-card-hover">
              <Image
                src="/images/hero-couple.jpg"
                alt="Adult couple sharing a close moment on an evening date"
                fill
                priority
                sizes="(min-width: 1024px) 540px, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900/80 to-transparent p-6 pt-24 text-white">
                <p className="text-sm font-medium text-white/80">Adult dating, 18+</p>
                <p className="mt-1 text-lg font-semibold">Real people. External platforms.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
