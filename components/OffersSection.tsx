import { offers, toPublicOffer } from "@/lib/offers";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { OfferBrowser } from "@/components/OfferBrowser";

export function OffersSection() {
  const publicOffers = offers.map(toPublicOffer);

  return (
    <section
      id="offers"
      aria-labelledby="offers-heading"
      className="scroll-mt-24 py-16 sm:py-24"
    >
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="offers-heading"
            align="left"
            eyebrow="Featured offers"
            title={
              <>
                Dating offers you can{" "}
                <span className="text-accent-italic">explore today</span>
              </>
            }
          />
          <p className="max-w-sm text-sm leading-7 text-ink-500 lg:mb-1 lg:text-right">
            Every card below links to an external dating platform. Read the
            summary, compare the key features and visit the dating website that
            suits you.
          </p>
        </div>

        <OfferBrowser offers={publicOffers} />

        <p className="mt-10 text-center text-xs tracking-wide text-ink-500">
          Offer buttons open the external platform in a new tab. Availability may
          vary by country. Photos by photographers on Unsplash.
        </p>
      </Container>
    </section>
  );
}
