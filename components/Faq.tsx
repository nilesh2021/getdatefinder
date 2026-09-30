import Link from "next/link";
import { faqs } from "@/lib/site";
import type { PromoCta } from "@/lib/promo";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { PromoCtaPair } from "@/components/PromoCtaPair";
import { ChevronDownIcon, ExternalLinkIcon } from "@/components/Icons";

type FaqProps = {
  promoCta?: PromoCta | null;
};

function FaqPromoCard({ promo }: { promo: PromoCta }) {
  return (
    <div className="rounded-[1.35rem] border border-brand-400/30 bg-ad-panel p-6 shadow-card sm:p-8">
      <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-brand-400">
        Don&apos;t wait
      </p>
      <h3 className="mt-3 font-display text-2xl font-medium text-ink-900">
        Start with {promo.name}
      </h3>
      <p className="mt-2 text-sm leading-7 text-ink-600">
        Featured pick for adults 18+. Opens the official platform in a new tab.
      </p>
      <a
        href={promo.href}
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className="btn-clay mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold hover:btn-clay-hover sm:w-auto sm:px-7"
      >
        Visit {promo.name}
        <ExternalLinkIcon className="h-4 w-4" />
      </a>
      <p className="mt-4 text-center text-xs text-ink-500 sm:text-left">
        <Link href="/#offers" className="underline underline-offset-2 hover:text-brand-300">
          Compare all offers
        </Link>
      </p>
    </div>
  );
}

export function Faq({ promoCta = null }: FaqProps) {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-24 py-16 sm:py-24"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
          <div className="flex flex-col gap-8">
            <SectionHeading
              id="faq-heading"
              align="left"
              eyebrow="FAQ"
              title={
                <>
                  Frequently asked <span className="text-accent-italic">questions</span>
                </>
              }
              description="Short answers about what this site is and how the dating offers work."
            />
            {promoCta ? <div className="hidden lg:block"><FaqPromoCard promo={promoCta} /></div> : null}
          </div>

          <div className="flex flex-col gap-8">
            {promoCta ? (
              <div className="lg:hidden">
                <FaqPromoCard promo={promoCta} />
              </div>
            ) : null}

            <div className="divide-y divide-brand-400/12 overflow-hidden rounded-[1.35rem] border border-hairline bg-surface shadow-card">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-ink-900 transition-colors hover:text-brand-300 [&::-webkit-details-marker]:hidden">
                    <h3 className="font-display text-lg font-medium tracking-tight">
                      {faq.question}
                    </h3>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-400/25 text-ink-500 transition-[transform,color,border-color] duration-300 group-open:rotate-180 group-open:border-brand-400/50 group-open:text-brand-400">
                      <ChevronDownIcon className="h-4 w-4" />
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-sm leading-7 text-ink-600">{faq.answer}</p>
                </details>
              ))}
            </div>

            {promoCta ? (
              <PromoCtaPair promo={promoCta} className="hidden sm:flex lg:hidden" />
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
