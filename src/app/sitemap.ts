import type { MetadataRoute } from "next";

const BASE_URL = "https://jafari.dev";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "fa"] as const;
  const lastModified = new Date();

  return [
    ...locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 1,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/`,
          fa: `${BASE_URL}/fa/`,
        },
      },
    })),
    {
      url: `${BASE_URL}/oop-expert-with-typescript/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];
}
