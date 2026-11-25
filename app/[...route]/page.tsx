import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Heading, Releases, Status } from '../../components/content';
import { ProductPage } from '../../components/product-page';
import { AboutContent, AppsContent, ContactGuidance, SupportGuidance, UpdateGuidance } from '../../components/studio-pages';
import { ContactForm } from '../../components/contact-form';
import { legalPages, type LegalPage } from '../../data/legal';
import { LegalContent, LegalLinks } from '../../components/legal';
import { apps, contact, support } from '../../data/site';

const regularPages: Record<string, [string, string]> = {
  apps: ['Our apps', 'Explore the mobile apps and puzzle games made by Uxhan Forge.'],
  about: ['About the studio', 'Uxhan Forge is an independent studio for thoughtful mobile apps and playful games.'],
  updates: ['Release updates', 'Explore public release notes for Uxhan Forge apps.'],
  contact: ['Contact', 'Get in touch with Uxhan Forge about the studio or its products.'],
  support: ['Support', 'Get help with a Uxhan Forge app or game.'],
  'privacy-policy': ['Privacy policy', 'Find the Taqwa Habit privacy policy and contact details.'],
  terms: ['Terms and conditions', 'Find the Taqwa Habit terms and contact details.'],
  'delete-account': ['Delete account', 'Contact support about deleting your Taqwa Habit account.'],
};

type PageProps = { params: Promise<{ route: string[] }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...Object.keys(regularPages).map(page => ({ route: [page] })),
    ...apps.flatMap(app => [{ route: ['apps', app.id] }, { route: ['apps', app.id, 'updates'] }, ...legalPages.map(page => ({ route: ['apps', app.id, page] }))]),
  ];
}

function resolve(route: string[]) {
  const key = route.join('/');
  const product = route[0] === 'apps' ? apps.find(app => app.id === route[1]) : undefined;
  if (product && route.length === 3 && legalPages.includes(route[2] as LegalPage)) {
    const legalPage = route[2] as LegalPage;
    const label = legalPage === 'privacy-policy' ? 'Privacy information' : legalPage === 'terms' ? 'Terms' : 'Account and data deletion';
    return { key, product, legalPage, title: product.name + ' — ' + label, description: label + ' and support for ' + product.name + ', developed by Uxhan Forge.' };
  }
  if (product && (route.length === 2 || (route.length === 3 && route[2] === 'updates'))) {
    return { key, product, title: route.length === 3 ? product.name + ' updates' : product.name, description: route.length === 3 ? 'Public release notes for ' + product.name + '.' : product.description };
  }
  const meta = Object.hasOwn(regularPages, key) ? regularPages[key] : undefined;
  if (!meta) notFound();
  return { key, title: meta[0], description: meta[1] };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { key, title, description, product } = await getPage(params);
  const url = '/' + key;
  return { title, description, alternates: { canonical: url }, openGraph: { title, description, url, images: ['/brand/' + (product?.id ?? 'Logo') + '.png'] } };
}

async function getPage(params: PageProps['params']) {
  return resolve((await params).route);
}

export default async function Page({ params, searchParams }: PageProps & { searchParams: Promise<{ app?: string | string[] }> }) {
  const { key, title, description, product, legalPage } = await getPage(params);
  if (legalPage) return <div className="wrap inner"><Heading eyebrow={product.name} title={title} /><LegalContent page={legalPage} product={product} /></div>;
  if (product && !key.endsWith('/updates')) return <div className="wrap inner product-page"><ProductPage product={product} /></div>;
  if (key === 'updates' || product) {
    return <div className="wrap inner"><Heading eyebrow="Release notes" title={title}>{description}</Heading>
      <nav className="actions filters" aria-label="Filter updates by app">
        <Link className="button glass" aria-current={!product ? 'page' : undefined} href="/updates">All apps</Link>
        {apps.map(app => <Link key={app.id} aria-current={app === product ? 'page' : undefined} className="button glass" href={'/apps/' + app.id + '/updates'}>{app.name}</Link>)}
      </nav>
      <UpdateGuidance productName={product?.name} />
      <Releases products={product ? [product] : apps} />
    </div>;
  }
  if (key === 'apps') return <div className="wrap inner"><Heading eyebrow="The portfolio" title={title}>{description}</Heading><AppsContent /></div>;
  if (key === 'about') return <div className="wrap inner"><Heading eyebrow="Independent by design" title={title}>We build mobile experiences for everyday practice and play.</Heading><AboutContent /></div>;
  if (key === 'contact') {
    const selected = (await searchParams).app;
    return <div className="wrap inner"><Heading eyebrow="Get in touch" title="Let’s talk.">{description}</Heading><div className="contact-layout">
      <div className="panel glass"><h2>Studio inquiries</h2><a href={'mailto:' + contact}>{contact}</a><h2>Product support</h2><a href={'mailto:' + support}>{support}</a><p><Link className="text-link" href="/support">Find product support <ArrowRight size={17} /></Link></p></div>
      <ContactForm selected={typeof selected === 'string' ? selected : undefined} />
    </div><ContactGuidance /></div>;
  }
  if (key === 'support') return <div className="wrap inner"><Heading eyebrow="Help center" title={title}>{description}</Heading>
    <div className="feature-grid">{apps.map(app => <section id={app.id} className="panel glass" key={app.id}><h2>{app.name}</h2><Status app={app} /><p>Include your device, app version and a short description of what happened when requesting help.</p><Link className="text-link" href={'/contact?app=' + app.id}>Contact support <ArrowRight size={17} /></Link><LegalLinks app={app} /></section>)}</div>
    <SupportGuidance />
    <div className="section-block actions"><a className="button primary" href={'mailto:' + support}>Email support <ArrowUpRight size={17} /></a><Link href="/privacy-policy" className="button glass">Privacy policy</Link><Link href="/delete-account" className="button glass">Delete account</Link></div>
  </div>;

  return <div className="wrap inner"><Heading eyebrow="Taqwa Habit" title={title}>{description}</Heading>
    <LegalContent page={key as LegalPage} />
  </div>;
}

