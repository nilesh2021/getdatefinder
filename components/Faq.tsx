import { faqs } from "@/lib/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ChevronDownIcon } from "@/components/Icons";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-24 py-14 sm:py-20"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
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

          <div className="divide-y divide-white/8 rounded-2xl border border-white/8 bg-surface">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-ink-900 transition-colors hover:text-brand-300 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-lg font-medium tracking-tight">
                    {faq.question}
                  </h3>
                  <ChevronDownIcon className="h-5 w-5 shrink-0 text-ink-500 transition-[transform,color] duration-200 group-open:rotate-180 group-open:text-brand-400" />
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
