import { faqs } from "@/lib/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ChevronDownIcon } from "@/components/Icons";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-24 bg-white py-10 sm:py-12"
    >
      <Container>
        <SectionHeading
          id="faq-heading"
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Short answers about what this site is and how the dating offers work."
        />

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-ink-200 rounded-3xl border border-ink-200 bg-background">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-ink-900 transition-colors hover:text-brand-700 [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-semibold">{faq.question}</h3>
                <ChevronDownIcon className="h-5 w-5 shrink-0 text-ink-500 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="px-6 pb-6 text-sm leading-7 text-ink-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
