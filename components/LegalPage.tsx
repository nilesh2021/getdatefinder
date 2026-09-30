import Link from "next/link";
import type { LegalPageContent } from "@/lib/site";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { ArrowRightIcon } from "@/components/Icons";

type LegalPageProps = {
  content: LegalPageContent;
};

export function LegalPage({ content }: LegalPageProps) {
  return (
    <>
      <Header />
      <main id="main" className="flex-1 py-16 sm:py-20">
        <Container>
          <article className="mx-auto max-w-3xl">
            <p className="flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.32em] text-brand-400">
              <span aria-hidden="true" className="h-px w-8 bg-brand-400/50" />
              Legal
            </p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-ink-600">{content.intro}</p>

            <div className="mt-12 space-y-10">
              {content.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-display text-2xl font-medium tracking-tight text-ink-900">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-3 leading-7 text-ink-700">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>

            <Link
              href="/#offers"
              className="btn-clay mt-14 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5 hover:btn-clay-hover"
            >
              Back to dating offers
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </article>
        </Container>
      </main>
    </>
  );
}
