import type { Metadata } from "next";
import { legalPages, type LegalPageContent } from "@/lib/site";

/** Look up legal page content by slug; throws at build time if the slug is wrong. */
export function getLegalPage(slug: string): LegalPageContent {
  const page = legalPages[slug];
  if (!page) {
    throw new Error(`Unknown legal page slug: ${slug}`);
  }
  return page;
}

export function legalMetadata(slug: string): Metadata {
  const page = getLegalPage(slug);
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `/${page.slug}`,
      type: "article",
    },
  };
}
