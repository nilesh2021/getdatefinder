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

export function Features() {
  return (
    <section
      aria-labelledby="features-heading"
      className="bg-white py-10 sm:py-12"
    >
      <Container>
        <SectionHeading
          id="features-heading"
          eyebrow="Why explore here"
          title="Why explore these dating offers"
          description="A quick, transparent way to see what online dating platforms are available before you spend time signing up anywhere."
        />

        <ul role="list" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = icons[feature.icon];
            return (
              <li
                key={feature.title}
                className="rounded-3xl border border-ink-200 bg-background p-6 transition-colors hover:border-violet-300"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-sm">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-600">{feature.description}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
