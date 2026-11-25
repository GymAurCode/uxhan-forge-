import Link from 'next/link';
import type { Metadata } from 'next';
import { founders, type Founder } from '../data/founders';
import { domain, type Product } from '../data/site';

export const organizationId = `${domain}/#organization`;
export const websiteId = `${domain}/#website`;
export const imageUrl = `${domain}/brand/Logo.png`;

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': organizationId,
    name: 'Uxhan Forge',
    url: `${domain}/`,
    logo: imageUrl,
    image: imageUrl,
    description:
      'Uxhan Forge is an independent software, mobile application, and game development studio co-founded by Muhammad Umer Farooq and Muhammad Burhan Yousaf.',
    founder: founders.map(founder => ({
      '@type': 'Person',
      '@id': `${domain}/founders/${founder.id}#person`,
    })),
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,
    url: `${domain}/`,
    name: 'Uxhan Forge',
    description: 'Independent mobile apps and playful puzzle games from Uxhan Forge.',
    publisher: { '@id': organizationId },
  };
}

export type JsonLdPage = {
  type: 'WebPage' | 'AboutPage' | 'ProfilePage';
  id: string;
  url: string;
  name: string;
  description: string;
  breadcrumbs: { name: string; item: string }[];
};

export function pageJsonLd({ type, id, url, name, description, breadcrumbs }: JsonLdPage) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': id,
    url,
    name,
    description,
    isPartOf: { '@id': websiteId },
    publisher: { '@id': organizationId },
    breadcrumbList: {
      '@type': 'BreadcrumbList',
      '@id': `${id}#breadcrumb`,
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.item,
      })),
    },
  };
}

export function personJsonLd(founder: Founder) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${domain}/founders/${founder.id}#person`,
    name: founder.name,
    url: `${domain}/founders/${founder.id}`,
    jobTitle: founder.role,
    worksFor: { '@id': organizationId },
  };
}

export function applicationJsonLd(product: Product) {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${domain}/apps/${product.id}#application`,
    name: product.name,
    url: `${domain}/apps/${product.id}`,
    description: product.description,
    applicationCategory: product.category,
    creator: { '@id': organizationId },
  };
  if (product.store) {
    data['applicationStore'] = {
      '@type': 'Store',
      name: 'Google Play',
      url: product.store,
    };
  }
  if (product.id === 'taqwa-habit') {
    data['operatingSystem'] = 'Android';
  }
  return data;
}

export type StructuredDataProps = { data: Record<string, unknown>[] };

export function StructuredData({ data }: StructuredDataProps) {
  return data.map((item, index) => (
    <script
      key={(item['@id'] as string | undefined) ?? String(item.name ?? index)}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
    />
  ));
}

export type BreadcrumbItem = { name: string; href: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol>
        {items.map((item, index) => (
          <li key={item.name} style={{ display: 'inline-flex', alignItems: 'center' }}>
            {index > 0 && <span aria-hidden="true" style={{ margin: '0 6px', color: 'var(--muted)' }}>&rsaquo;</span>}
            <Link href={item.href} aria-current={index === items.length - 1 ? 'page' : undefined}>
              {item.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function pageMetadata({
  title,
  description,
  path,
  product,
}: {
  title: string;
  description: string;
  path: string;
  product?: Product;
}): Metadata {
  const url = `${domain}${path}`;
  const image = product ? `${domain}/brand/${product.id}.png` : imageUrl;
  const alt = product ? product.name : 'Uxhan Forge';
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [{ url: image, width: 540, height: 540, alt }],
    },
    twitter: { card: 'summary_large_image' },
    robots: { index: true, follow: true },
  };
}
