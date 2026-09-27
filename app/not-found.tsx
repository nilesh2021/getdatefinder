import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="flex flex-1 items-center py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <p className="inline-flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.32em] text-brand-400">
              <span aria-hidden="true" className="h-px w-8 bg-brand-400/50" />
              404
              <span aria-hidden="true" className="h-px w-8 bg-brand-400/50" />
            </p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink-900 sm:text-5xl">
              That page <span className="text-accent-italic">does not exist</span>
            </h1>
            <p className="mt-5 text-lg leading-8 text-ink-600">
              The link may be out of date. Head back to the homepage to browse the
              latest dating offers.
            </p>
            <Link
              href="/#offers"
              className="btn-clay mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-transform duration-300 hover:-translate-y-0.5 hover:btn-clay-hover"
            >
              Explore Offers
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
