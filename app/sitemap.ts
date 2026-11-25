import type { MetadataRoute } from 'next';
import { apps, domain } from '../data/site';
import { legalPages } from '../data/legal';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/apps', '/about', '/updates', '/contact', '/support', '/privacy-policy', '/terms', '/delete-account', ...apps.flatMap(app => ['/apps/' + app.id, '/apps/' + app.id + '/updates', ...legalPages.map(page => '/apps/' + app.id + '/' + page)])].map(path => ({ url: domain + path }));
}
