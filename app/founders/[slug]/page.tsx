import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Heading } from '../../../components/content';
import {
  StructuredData,
  pageJsonLd,
  personJsonLd,
  pageMetadata,
} from '../../../components/seo';
import { founderById, founders, studioStatement } from '../../../data/founders';
import { domain } from '../../../data/site';

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return founders.map(founder => ({ slug: founder.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const founder = founderById((await params).slug);
  if (!founder) return { title: 'Founder not found | Uxhan Forge' } as unknown as Metadata;
  const path = `/founders/${founder.id}`;
  return pageMetadata({
    title: `${founder.name} | Co-Founder, Uxhan Forge`,
    description: `${founder.name} is a co-founder of Uxhan Forge, an independent software, mobile application, and game development studio.`,
    path,
  });
}

export default async function FounderPage({ params }: PageProps) {
  const founder = founderById((await params).slug);
  if (!founder) notFound();

  const path = `/founders/${founder.id}`;
  const pageUrl = `${domain}${path}`;
  const breadcrumbs = [
    { name: 'Home', item: `${domain}/` },
    { name: 'About', item: `${domain}/about` },
    { name: 'Our Co-Founders', item: `${domain}/about#founders` },
    { name: founder.name, item: pageUrl },
  ];

  return (
    <>
      <StructuredData data={[
        pageJsonLd({
          type: 'ProfilePage',
          id: `${pageUrl}#page`,
          url: pageUrl,
          name: `${founder.name} | Co-Founder`,
          description: `${founder.name} is a co-founder of Uxhan Forge.`,
          breadcrumbs,
        }),
        personJsonLd(founder),
      ]} />
      <div className="wrap inner">
        <Heading eyebrow="Our Co-Founders" title={founder.name} />
        <section className="editorial-section">
          <p>{studioStatement}</p>
          <p>
            {founder.name} is a co-founder of Uxhan Forge. Together with the other co-founder, they established an
            independent software, mobile application, and game development studio focused on thoughtful mobile apps
            and playful puzzle games.
          </p>
        </section>
        <div className="actions">
          <Link className="button glass" href="/about#founders">
            Back to Our Co-Founders <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </>
  );
}
