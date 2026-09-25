import { steps } from "@/lib/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ExternalLinkIcon } from "@/components/Icons";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="scroll-mt-24 py-10 sm:py-12"
    >
      <Container>
        <SectionHeading
          id="how-heading"
          eyebrow="How it works"
          title="Three simple steps"
          description="From browsing to visiting a dating platform takes less than a minute."
        />

        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-3xl border border-ink-200 bg-white p-7 shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient text-base font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-600">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-10 flex max-w-2xl items-start gap-3 rounded-2xl border border-violet-200 bg-violet-50 p-5 text-sm leading-6 text-ink-700">
          <ExternalLinkIcon className="mt-0.5 h-5 w-5 shrink-0 text-violet-600" />
          <p>
            <strong className="font-semibold text-ink-900">Heads up:</strong> clicking
            any offer takes you to an external website that is owned and operated by
            a third party. Registration, pricing and support all happen on that
            platform, not here.
          </p>
        </div>
      </Container>
    </section>
  );
}
