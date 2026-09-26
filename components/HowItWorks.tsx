import { steps } from "@/lib/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ExternalLinkIcon } from "@/components/Icons";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="scroll-mt-24 border-t border-white/5 py-14 sm:py-20"
    >
      <Container>
        <SectionHeading
          id="how-heading"
          align="left"
          eyebrow="How it works"
          title={
            <>
              Three <span className="text-accent-italic">simple</span> steps
            </>
          }
          description="From browsing to visiting a dating platform takes less than a minute."
        />

        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-white/8 bg-surface p-7 shadow-card transition-colors hover:border-brand-400/40"
            >
              <span className="font-display text-5xl font-light leading-none text-brand-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-display text-xl font-medium tracking-tight text-ink-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-600">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-10 flex max-w-2xl items-start gap-3 rounded-2xl border border-brand-500/30 bg-brand-500/10 p-5 text-sm leading-6 text-ink-700">
          <ExternalLinkIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
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
