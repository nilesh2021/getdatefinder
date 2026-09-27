import Image from "next/image";
import { features, type Feature } from "@/lib/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { BoltIcon, CompassIcon, GlobeIcon, ScaleIcon } from "@/components/Icons";

const icons: Record<Feature["icon"], typeof CompassIcon> = {
  compass: CompassIcon,
  scale: ScaleIcon,
  globe: GlobeIcon,
  bolt: BoltIcon,
};

/**
 * Bento layout, in order of `features`:
 *  0 - tall text tile (spans two rows)
 *  1 - photo tile
 *  2 - wide text tile (spans two columns)
 *  3 - photo tile
 */
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

export function Features() {
  return (
    <section aria-labelledby="features-heading" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          id="features-heading"
          align="left"
          eyebrow="Why explore here"
          title={
            <>
              Why explore these{" "}
              <span className="text-accent-italic">dating offers</span>
            </>
          }
          description="A quick, transparent way to see what online dating platforms are available before you spend time signing up anywhere."
        />

        <ul
          role="list"
          className="mt-12 grid gap-4 md:grid-flow-dense md:grid-cols-3 md:auto-rows-[15.5rem]"
        >
          {features.map((feature, index) => {
            const Icon = icons[feature.icon];
            const slot = layout[index] ?? { className: "" };
            const isTall = index === 0;

            return (
              <li
                key={feature.title}
                className={`group relative flex overflow-hidden rounded-[1.35rem] border border-hairline bg-surface shadow-card transition-[border-color,box-shadow] duration-500 hover:border-brand-400/40 hover:shadow-card-hover ${
                  slot.image ? "min-h-[16rem]" : ""
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
                  className={`relative flex flex-1 flex-col p-7 sm:p-8 ${
                    slot.image ? "justify-end" : isTall ? "justify-between" : "justify-center"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full border border-brand-400/40 text-brand-300 ${
                      slot.image ? "bg-ink-950/55 backdrop-blur-md" : "bg-brand-500/10"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className={isTall ? "" : "mt-6"}>
                    <h3 className="font-display text-xl font-medium tracking-tight text-ink-900 sm:text-[1.65rem]">
                      {feature.title}
                    </h3>
                    <p className="mt-2.5 max-w-md text-sm leading-7 text-ink-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
