import type { MetadataRoute } from "next";
import { countryLandings } from "@/lib/country-landings";
import { sexEmulatorKeywordPaths } from "@/lib/sex-emulator-keyword-landings";
import { sexEmulatorPath } from "@/lib/sex-emulator";
import { footerLinks, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/countries`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}${sexEmulatorPath}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...sexEmulatorKeywordPaths.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...countryLandings.map((landing) => ({
      url: `${siteConfig.url}/${landing.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...footerLinks.map((link) => ({
      url: `${siteConfig.url}${link.href}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
