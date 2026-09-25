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
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              404
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
              That page does not exist
            </h1>
            <p className="mt-5 text-lg leading-8 text-ink-600">
              The link may be out of date. Head back to the homepage to browse the
              latest dating offers.
            </p>
            <Link
              href="/#offers"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-base font-semibold text-white shadow-md transition-opacity hover:opacity-90"
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
