import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { CSSProperties } from 'react';
import { Heading, ProductGrid, Releases, Status, StoreLink } from './content';
import { TaqwaGallery } from './product-gallery';
import { Faq, SectionTitle } from './editorial';
import { LegalLinks } from './legal';
import { apps, type Product } from '../data/site';
import { productStories } from '../data/editorial';

export function ProductPage({ product }: { product: Product }) {
  const url = '/apps/' + product.id;
  const story = productStories[product.id];
  return <>
    <section className="product-hero glass" style={{ '--accent': product.color } as CSSProperties}>
      <div><Link href="/apps" className="eyebrow">← All apps</Link><Heading eyebrow={product.category} title={product.name}>{product.description}</Heading>
        <Status app={product} /><div className="actions">{product.store ? <StoreLink /> : <Link className="button primary" href={url + '/updates'}>Follow updates <ArrowUpRight size={17} /></Link>}<Link className="button glass" href={'/support#' + product.id}>Support</Link></div>
      </div>
      <div className="detail-art"><Image src={'/brand/' + product.id + '.png'} alt={product.name} fill sizes="(max-width: 540px) 55vw, 320px" priority /></div>
    </section>
    <section className="editorial-section product-introduction"><SectionTitle eyebrow="The idea" title={product.id === 'taqwa-habit' ? 'A daily routine with a clearer view.' : product.id === 'uxblox' ? 'Make room for your next move.' : 'Every connection changes the journey.'} /><div><p>{story.audience}</p><p>{product.overview}</p></div></section>
    <section className="editorial-section"><SectionTitle eyebrow="Core features" title={'Inside ' + product.name} /><div className="feature-grid">{product.features.map(([title, description]) => <article className="panel glass" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    <section className="editorial-section"><SectionTitle eyebrow={product.store ? 'A rhythm for daily use' : 'The puzzle concept'} title={product.store ? 'Record, review, return.' : product.id === 'uxblox' ? 'Read the spaces between the blocks.' : 'See the route, turn the track.'} /><p className="section-note">{story.concept}</p><ol className="how-it-works">{story.steps.map(([title, body]) => <li key={title}><h3>{title}</h3><p>{body}</p></li>)}</ol></section>
    <section className={'editorial-section artwork-story ' + product.id}>
      <figure className="glass"><Image src={'/brand/' + product.id + '.png'} alt={product.name + ' official product artwork'} width={240} height={240} sizes="(max-width: 540px) 180px, 240px" /><figcaption>Official {product.name} artwork</figcaption></figure>
      <div><SectionTitle eyebrow="Product highlights" title={product.store ? 'A home for your progress.' : product.id === 'uxblox' ? 'A small board. Plenty to consider.' : 'A railway taking shape.'} />{story.highlights.map(([title, body]) => <section className="highlight-text" key={title}><h3>{title}</h3><p>{body}</p></section>)}</div>
    </section>
    {product.store && <section className="editorial-section"><SectionTitle eyebrow="From the official Google Play listing" title="A closer look at Taqwa Habit" /><TaqwaGallery /></section>}
    <section className="editorial-section product-experience"><div><SectionTitle eyebrow="The experience" title={product.store ? 'Built around returning to your routine.' : 'An interaction you can settle into.'} /><p>{story.experience}</p></div><aside className="panel glass"><h3>Availability</h3><p>{product.category} · {product.store ? 'Android' : 'Upcoming mobile game'}</p><Status app={product} /><p>{product.store ? 'Download the released Android application from its official Google Play listing.' : 'Release dates and store availability will be shared when confirmed. You can follow the product’s update page.'}</p><div className="actions">{product.store ? <StoreLink /> : <Link className="text-link" href={url + '/updates'}>Product updates <ArrowUpRight size={17} /></Link>}</div></aside></section>
    <section className="editorial-section"><SectionTitle eyebrow="Release history" title="Updates and refinements" /><p className="section-note">Published changes belong here once their release details have been verified.</p><Releases products={[product]} /><p><Link className="text-link" href={url + '/updates'}>Open full version history <ArrowUpRight size={17} /></Link></p></section>
    <section className="editorial-section"><SectionTitle eyebrow="Before you explore" title={product.name + ' FAQ'} /><Faq items={story.faq} /></section>
    <section className="editorial-section support-strip"><div><h2>Help with {product.name}</h2><p>Find account and privacy information, or send the support team a question.</p><LegalLinks app={product} /></div><Link className="button glass" href={'/contact?app=' + product.id}>Contact product support <ArrowUpRight size={17} /></Link></section>
    <section className="editorial-section"><SectionTitle eyebrow="From the same studio" title="Explore another experience" /><ProductGrid products={apps.filter(app => app.id !== product.id)} /></section>
    <section className="editorial-section closing glass"><div><h2>{product.store ? 'Begin with one daily habit.' : 'Keep an eye on ' + product.name + '.'}</h2><p>{product.store ? 'Explore Taqwa Habit on Google Play.' : 'Follow its development through verified release updates.'}</p></div><div className="actions">{product.store ? <StoreLink /> : <Link className="button primary" href={url + '/updates'}>View product updates <ArrowUpRight size={17} /></Link>}</div></section>
  </>;
}
