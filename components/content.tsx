import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { CSSProperties } from 'react';
import { apps, play, type Product } from '../data/site';
import { releaseHistory } from '../data/releases';
import { storeUpdate } from '../data/taqwa-habit';

export function Heading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <header className="intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{children && <p className="lead">{children}</p>}</header>;
}

export function Status({ app }: { app: Product }) {
  return <span className="status" data-live={Boolean(app.store)}><i />{app.store ? 'Available on Google Play' : 'Coming soon'}</span>;
}

export function StoreLink() {
  return <a className="button primary" href={play}>Get it on Google Play <ArrowUpRight size={17} /></a>;
}

export function ProductGrid({ products = apps }: { products?: Product[] }) {
  return <div className="product-grid">{products.map(app => <article key={app.id} className="product-card glass" style={{ '--accent': app.color } as CSSProperties}>
    <Link className="card-art" href={'/apps/' + app.id} aria-label={'Explore ' + app.name}>
      <Image src={'/brand/' + app.id + '.png'} alt={app.name} fill sizes="(max-width: 550px) 80vw, (max-width: 800px) 45vw, 28vw" />
      <ArrowUpRight className="art-arrow" size={24} aria-hidden="true" />
    </Link>
    <div className="card-copy"><Status app={app} /><p className="eyebrow">{app.category}</p><h3>{app.name}</h3><p>{app.description}</p>
      <div className="card-links"><Link href={'/apps/' + app.id}>Explore app <ArrowUpRight size={15} /></Link>{app.store && <a href={app.store}>Google Play <ArrowUpRight size={15} /></a>}</div>
    </div>
  </article>)}</div>;
}

const categories = [
  ['features', 'New features'], ['improvements', 'Improvements'], ['fixes', 'Bug fixes'], ['knownIssues', 'Known issues'],
] as const;

export function Releases({ products }: { products: Product[] }) {
  const entries = products.flatMap(app => releaseHistory[app.id].map(release => ({ app, release })));
  entries.sort((a, b) => b.release.date.localeCompare(a.release.date));
  const includeStoreNote = products.some(app => app.id === 'taqwa-habit');
  return <div className="release-content">{entries.length ? <div className="timeline">{entries.map(({ app, release }) => <article className="panel glass" key={app.id + release.version + release.channel}>
    <p className="eyebrow">{app.name} · {release.channel} · {release.platform}</p>
    <p><strong>v{release.version}</strong> · <time dateTime={release.date}>{release.date}</time></p>
    <h2>{release.title}</h2><p>{release.summary}</p>
    {categories.map(([key, label]) => release[key]?.length ? <section key={key}><h3>{label}</h3><ul>{release[key].map(item => <li key={item}>{item}</li>)}</ul></section> : null)}
    {release.url && <a href={release.url}>Release details</a>}
  </article>)}</div> : <section className="panel glass"><h2>No versioned releases yet</h2><p>Verified version histories will appear here as they become available.</p></section>}
    {includeStoreNote && <article className="panel glass">
      <p className="eyebrow">Taqwa Habit · Google Play</p>
      <h2>Latest store update</h2>
      <p><time dateTime={storeUpdate.date}>{storeUpdate.displayDate}</time></p>
      <p>{storeUpdate.summary}</p>
      <p><a className="text-link" href={play}>View on Google Play <ArrowUpRight size={17} /></a></p>
    </article>}
  </div>;
}
