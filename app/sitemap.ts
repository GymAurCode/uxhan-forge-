import type { MetadataRoute } from 'next';
import { apps, domain } from '../data/site';
import { legalPages } from '../data/legal';
import { founders } from '../data/founders';

export default function sitemap(): MetadataRoute.Sitemap {
  const founderRoutes = founders.map(founder => '/founders/' + founder.id);
  return ['', '/apps', '/about', '/updates', '/contact', '/support', '/privacy-policy', '/terms', '/delete-account', ...founderRoutes, ...apps.flatMap(app => ['/apps/' + app.id, '/apps/' + app.id + '/updates', ...legalPages.map(page => '/apps/' + app.id + '/' + page)])].map(path => ({ url: domain + path }));
}
