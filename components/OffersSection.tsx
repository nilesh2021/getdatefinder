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
      className="scroll-mt-24 py-10 sm:py-12"
    >
      <Container>
        <SectionHeading
          id="offers-heading"
          eyebrow="Featured offers"
          title="Dating offers you can explore today"
          description="Every card below links to an external dating platform. Read the summary, compare the key features and visit the dating website that suits you."
        />

        <OfferBrowser offers={publicOffers} />

        <p className="mt-6 text-center text-sm text-ink-500">
          Offer buttons open the external platform in a new tab. Availability may
          vary by country. Photos by photographers on Unsplash.
        </p>
      </Container>
    </section>
  );
}
