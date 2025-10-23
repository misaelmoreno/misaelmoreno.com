import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.misaelmoreno.com';
  const locales = ['es', 'en'];
  
  const routes = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: locale === 'es' ? 1 : 0.8,
  }));

  return routes;
}
