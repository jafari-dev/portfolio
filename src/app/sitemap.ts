import type { MetadataRoute } from "next";

const BASE_URL = "https://jafari.dev";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "fa"] as const;

  return locales.map((locale) => ({
    url: `${BASE_URL}/${locale}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: {
      languages: {
        en: `${BASE_URL}/en/`,
        fa: `${BASE_URL}/fa/`,
      },
    },
  }));
}
