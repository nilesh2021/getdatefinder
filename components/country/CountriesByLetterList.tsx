import Link from "next/link";
import {
  countryFlagSrc,
  groupCountryLandingsByLetter,
  type CountryLanding,
} from "@/lib/country-landings";

type CountriesByLetterListProps = {
  landings: CountryLanding[];
  /** Omit the current country page from the list. */
  excludeSlug?: string;
};

export function CountriesByLetterList({ landings, excludeSlug }: CountriesByLetterListProps) {
  const filtered = excludeSlug ? landings.filter((l) => l.slug !== excludeSlug) : landings;
  const groups = groupCountryLandingsByLetter(filtered);

  if (groups.length === 0) {
    return null;
  }

  return (
    <ul className="list-countries-by-letter clearfix flex flex-wrap gap-x-6 gap-y-8">
      {groups.map((group) => (
        <li
          key={group.letter}
          data-offer-country-letter={group.letter.toLowerCase()}
          className="w-full min-w-[min(100%,270px)] max-w-[270px]"
        >
          <div className="letter mb-3 text-sm font-bold uppercase tracking-wide text-brand-400">
            {group.letter} ({group.count})
          </div>
          <ul className="list-countries space-y-2 pr-5">
            {group.items.map((landing) => (
              <li key={landing.slug}>
                <Link
                  href={`/${landing.slug}`}
                  className="flex items-center gap-2.5 text-sm text-ink-700 transition-colors hover:text-brand-300"
                >
                  <img
                    alt={landing.countryName}
                    height={24}
                    width={24}
                    src={countryFlagSrc(landing.isoCode)}
                    className="h-6 w-6 shrink-0 rounded-sm object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  {landing.countryName}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
