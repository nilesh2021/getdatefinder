import Image from "next/image";
import { features, type Feature } from "@/lib/site";
import type { PromoCta } from "@/lib/promo";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { PromoCtaPair } from "@/components/PromoCtaPair";
import { BoltIcon, CompassIcon, GlobeIcon, ScaleIcon } from "@/components/Icons";

const icons: Record<Feature["icon"], typeof CompassIcon> = {
  compass: CompassIcon,
  scale: ScaleIcon,
  globe: GlobeIcon,
  bolt: BoltIcon,
};

const layout: Array<{ className: string; image?: { src: string; alt: string } }> = [
  { className: "md:col-span-1 md:row-span-2" },
  {
    className: "md:col-span-1",
    image: {
      src: "/images/real-dance.jpg",
      alt: "Couple dancing together on a warm evening",
    },
  },
  { className: "md:col-span-2" },
  {
    className: "md:col-span-1",
    image: {
      src: "/images/real-men.jpg",
      alt: "Two men laughing together outdoors",
    },
  },
];

type FeaturesProps = {
  promoCta?: PromoCta | null;
};

export function Features({ promoCta = null }: FeaturesProps) {
  return (
    <section aria-labelledby="features-heading" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          id="features-heading"
          align="left"
          eyebrow={promoCta ? "Why act now" : "Why explore here"}
          title={
            promoCta ? (
              <>
                Real platforms.{" "}
                <span className="text-accent-italic">Real matches.</span>
              </>
            ) : (
              <>
                Why explore these{" "}
                <span className="text-accent-italic">dating offers</span>
              </>
            )
          }
          description={
            promoCta
              ? "Skip the research rabbit hole — we surface the offers worth a click."
              : "A quick, transparent way to see what online dating platforms are available before you spend time signing up anywhere."
          }
        />

        <ul
          role="list"
          className="mt-10 grid gap-4 md:grid-flow-dense md:grid-cols-3 md:auto-rows-[14.5rem]"
        >
          {features.map((feature, index) => {
            const Icon = icons[feature.icon];
            const slot = layout[index] ?? { className: "" };
            const isTall = index === 0;

            return (
              <li
                key={feature.title}
                className={`group relative flex overflow-hidden rounded-[1.35rem] border border-hairline bg-surface shadow-card transition-[border-color,box-shadow] duration-500 hover:border-brand-400/40 hover:shadow-card-hover ${
                  slot.image ? "min-h-[15rem]" : ""
                } ${slot.className}`}
              >
                {slot.image ? (
                  <>
                    <Image
                      src={slot.image.src}
                      alt={slot.image.alt}
                      fill
                      sizes="(min-width: 768px) 360px, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/45 to-ink-950/10"
                    />
                  </>
                ) : null}

                <div
                  className={`relative flex flex-1 flex-col p-6 sm:p-7 ${
                    slot.image ? "justify-end" : isTall ? "justify-between" : "justify-center"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full border border-brand-400/40 text-brand-300 ${
                      slot.image ? "bg-ink-950/55 backdrop-blur-md" : "bg-brand-500/10"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className={isTall ? "" : "mt-5"}>
                    <h3 className="font-display text-lg font-medium tracking-tight text-ink-900 sm:text-xl">
                      {feature.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-6 text-ink-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {promoCta ? (
          <div className="mt-12 rounded-[1.35rem] border border-brand-400/25 bg-ad-panel px-6 py-10 text-center sm:px-10 sm:py-12">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-brand-400">
              Ready to try?
            </p>
            <p className="mx-auto mt-3 max-w-lg font-display text-2xl font-medium text-ink-900 sm:text-3xl">
              Your next match is one click away
            </p>
            <PromoCtaPair promo={promoCta} layout="row" className="mt-8 justify-center" />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
