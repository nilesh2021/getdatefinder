import type { ReactNode } from "react";

import Link from "next/link";

import { listedOffers, toPublicOffer, type PublicOffer } from "@/lib/offers";

import { Container } from "@/components/Container";

import { SectionHeading } from "@/components/SectionHeading";

import { OfferBrowser } from "@/components/OfferBrowser";

import { OfferCard } from "@/components/OfferCard";



const defaultTitle = (

  <>

    Dating offers you can <span className="text-accent-italic">explore today</span>

  </>

);



const adTitle = (

  <>

    Pick your platform —{" "}

    <span className="text-accent-italic">start in one click</span>

  </>

);



const defaultIntro =

  "Every card below links to an external dating platform. Read the summary, compare the key features and visit the dating website that suits you.";



const defaultFootnote =

  "Offer buttons open the external platform in a new tab. Availability may vary by country. Photos by photographers on Unsplash.";



type OffersSectionProps = {

  /** When omitted, the homepage listed offers are used. */

  offers?: PublicOffer[];

  /** Category tabs. Country pages pass false so every card stays visible. */

  showFilters?: boolean;

  variant?: "editorial" | "ad";

  eyebrow?: string;

  title?: ReactNode;

  intro?: string;

  id?: string;

  headingId?: string;

  footnote?: string;

  /** First listed offer id for featured chip in ad variant. */

  featuredOfferId?: string | null;

  tone?: "default" | "bright" | "usa-light" | "usa-dark";

  className?: string;

};



export function OffersSection({

  offers,

  showFilters = true,

  variant = "editorial",

  eyebrow,

  title,

  intro,

  id = "offers",

  headingId = "offers-heading",

  footnote = defaultFootnote,

  featuredOfferId = null,

  tone = "default",

  className = "",

}: OffersSectionProps = {}) {

  const publicOffers = offers ?? listedOffers.map(toPublicOffer);

  const isAd = variant === "ad";

  const isBright = tone === "bright" || tone === "usa-light" || tone === "usa-dark";
  const headingTone =
    tone === "usa-dark" || tone === "usa-light" ? tone : tone === "bright" ? "bright" : "default";

  const resolvedEyebrow = eyebrow ?? (isAd ? "Limited spots · Compare & go" : "Featured offers");

  const resolvedTitle = title ?? (isAd ? adTitle : defaultTitle);

  const resolvedIntro = intro ?? (isAd ? defaultIntro : defaultIntro);

  const featuredId = featuredOfferId ?? publicOffers[0]?.id ?? null;



  return (

    <section

      id={id}

      aria-labelledby={headingId}

      className={`scroll-mt-24 py-16 sm:py-24 ${isBright ? "bg-usa-section-soft" : ""} ${className}`}

    >

      <Container>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <SectionHeading

            id={headingId}

            align="left"

            eyebrow={resolvedEyebrow}

            title={resolvedTitle}

            tone={headingTone}

          />

          <div
            className={`max-w-sm text-sm leading-7 lg:mb-1 lg:text-right ${
              tone === "usa-dark"
                ? "text-ink-500"
                : isBright
                  ? "text-neutral-800"
                  : "text-ink-500"
            }`}
          >

            {isAd && featuredId ? (

              <p>

                Want the fastest route?{" "}

                <Link

                  href={`/go/${featuredId}`}

                  className={`font-semibold underline underline-offset-2 ${
                    tone === "usa-dark"
                      ? "text-brand-300 hover:text-brand-200"
                      : isBright
                        ? "text-[#e65100] hover:text-[#bf360c]"
                        : "text-brand-300 hover:text-brand-200"
                  }`}

                >

                  Try {publicOffers.find((o) => o.id === featuredId)?.name ?? "our top pick"}

                </Link>{" "}

                first, then compare the rest.

              </p>

            ) : (

              <p>{resolvedIntro}</p>

            )}

          </div>

        </div>



        {showFilters ? (

          <OfferBrowser

            offers={publicOffers}

            variant={variant}

            featuredOfferId={featuredId}

          />

        ) : (

          <ul role="list" className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {publicOffers.map((offer, index) => (

              <li key={offer.id} className="flex">

                <OfferCard

                  offer={offer}

                  variant={variant}

                  featured={isAd && (offer.id === featuredId || index === 0)}

                  tone={tone}

                />

              </li>

            ))}

          </ul>

        )}



        <p
          className={`mt-10 text-center text-xs tracking-wide ${
            tone === "usa-dark"
              ? "text-ink-500"
              : isBright
                ? "text-neutral-700"
                : "text-ink-500"
          }`}
        >
          {footnote}
        </p>

      </Container>

    </section>

  );

}

