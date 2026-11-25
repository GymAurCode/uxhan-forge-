import type { MetadataRoute } from 'next';
import { domain } from '../data/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: '*', allow: '/' },
    ],
    sitemap: domain + '/sitemap.xml',
  };
}
