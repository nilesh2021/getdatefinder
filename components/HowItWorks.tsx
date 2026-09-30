import { steps } from "@/lib/site";
import type { PromoCta } from "@/lib/promo";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { PromoCtaPair } from "@/components/PromoCtaPair";
import { ExternalLinkIcon } from "@/components/Icons";

type HowItWorksProps = {
  promoCta?: PromoCta | null;
};

export function HowItWorks({ promoCta = null }: HowItWorksProps) {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="scroll-mt-24 py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="how-heading"
          align="left"
          eyebrow="How it works"
          title={
            promoCta ? (
              <>
                Three steps to{" "}
                <span className="text-accent-italic">your offer</span>
              </>
            ) : (
              <>
                Three <span className="text-accent-italic">simple</span> steps
              </>
            )
          }
          description="From browsing to visiting a dating platform takes less than a minute."
        />

        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return (
              <li
                key={step.title}
                className="relative overflow-hidden rounded-[1.35rem] border border-hairline bg-surface p-7 shadow-card transition-[border-color,box-shadow] duration-500 hover:border-brand-400/40 hover:shadow-card-hover sm:p-8"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-6 -right-2 font-display text-[7.5rem] font-light leading-none text-brand-400/[0.07]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-4xl font-light leading-none text-brand-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-7 text-ink-600">{step.description}</p>
                {promoCta && isLast ? (
                  <a
                    href={promoCta.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 hover:text-brand-200"
                  >
                    Visit platform
                    <ExternalLinkIcon className="h-3.5 w-3.5" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : null}
              </li>
            );
          })}
        </ol>

        {promoCta ? (
          <div className="mt-10 rounded-[1.35rem] border border-hairline bg-ad-panel px-6 py-10 sm:py-12">
            <PromoCtaPair promo={promoCta} layout="row" className="justify-center" />
          </div>
        ) : (
          <div className="mx-auto mt-12 flex max-w-2xl items-start gap-3 rounded-[1.35rem] border border-brand-400/25 bg-brand-500/[0.08] px-6 py-5 text-sm leading-7 text-ink-700">
            <ExternalLinkIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
            <p>
              <strong className="font-semibold text-ink-900">Heads up:</strong> clicking
              any offer takes you to an external website that is owned and operated by
              a third party. Registration, pricing and support all happen on that
              platform, not here.
            </p>
          </div>
        )}

        {promoCta ? (
          <div className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-[1.35rem] border border-brand-400/25 bg-brand-500/[0.08] px-6 py-5 text-sm leading-7 text-ink-700">
            <ExternalLinkIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
            <p>
              <strong className="font-semibold text-ink-900">Heads up:</strong> clicking
              any offer takes you to an external website. Registration and support happen
              on that platform, not here.
            </p>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
