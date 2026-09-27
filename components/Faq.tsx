import { faqs } from "@/lib/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ChevronDownIcon } from "@/components/Icons";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-24 py-16 sm:py-24"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
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
        </div>
      </Container>
    </section>
  );
}
