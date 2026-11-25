import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { apps, type Product } from '../data/site';
import { focusAreas, journey, philosophy, productStories, type Question } from '../data/editorial';
import { releaseHistory } from '../data/releases';
import { storeUpdate } from '../data/taqwa-habit';
import { Status, StoreLink } from './content';

export function SectionTitle({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return <div className="editorial-heading">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2></div>;
}

export function Faq({ items }: { items: Question[] }) {
  return <div className="faq-list">{items.map(item => <details className="glass" key={item.question}>
    <summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p>
  </details>)}</div>;
}

export function FocusAreas() {
  return <div className="focus-grid">{focusAreas.map(([title, body]) => <article className="panel glass" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>;
}

export function Philosophy() {
  return <div className="philosophy-layout"><div><SectionTitle eyebrow="Our design philosophy" title="Care in the details you use." /><p>Good design earns its place in everyday use. These are the principles we use to think about an app’s usefulness and a game’s feel.</p></div>
    <dl className="principle-list">{philosophy.map(([title, body]) => <div key={title}><dt>{title}</dt><dd>{body}</dd></div>)}</dl>
  </div>;
}

export function Journey() {
  return <><p className="section-note">A general approach to moving an idea toward something people can use.</p><ol className="journey">{journey.map(([title, body]) => <li key={title}><h3>{title}</h3><p>{body}</p></li>)}</ol></>;
}

export function Closing({ title = 'Find your next everyday companion.' }: { title?: string }) {
  return <section className="closing glass"><div><p className="eyebrow">Uxhan Forge</p><h2>{title}</h2><p>Explore the portfolio or get in touch with the studio.</p></div><div className="actions"><Link className="button primary" href="/apps">Browse apps <ArrowUpRight size={17} /></Link><Link className="button glass" href="/contact">Contact studio</Link></div></section>;
}

export function ProductEditorial({ app, reverse = false }: { app: Product; reverse?: boolean }) {
  const story = productStories[app.id];
  return <article className={'product-editorial glass' + (reverse ? ' reverse' : '')}>
    <div className="editorial-art"><Image src={'/brand/' + app.id + '.png'} alt={app.name} width={240} height={240} sizes="(max-width: 540px) 160px, 240px" /></div>
    <div><Status app={app} /><p className="eyebrow">{app.category}</p><h3>{app.name}</h3><p>{story.concept}</p><ul className="plain-highlights">{story.highlights.map(([title]) => <li key={title}>{title}</li>)}</ul><Link className="text-link" href={'/apps/' + app.id}>Explore {app.name} <ArrowUpRight size={17} /></Link></div>
  </article>;
}

export function TaqwaSpotlight() {
  return <div className="spotlight glass"><div><p className="eyebrow">In focus · Taqwa Habit</p><h2>A little more intention in every day.</h2><p>{productStories['taqwa-habit'].audience}</p><div className="spotlight-features"><span>Daily prayers</span><span>Quran reading</span><span>Azkar and Tasbeeh</span><span>Personal progress</span></div><div className="actions"><StoreLink /><Link className="text-link" href="/apps/taqwa-habit">Meet the app <ArrowUpRight size={17} /></Link></div></div>
    <div className="spotlight-art"><Image src="/screenshots/taqwa-2.webp" width={347} height={718} sizes="190px" alt="Official Taqwa Habit prayer dashboard screenshot" /><p>Prayer, reading and remembrance in one place.</p></div>
  </div>;
}

export function LatestUpdates() {
  const releases = apps.flatMap(app => releaseHistory[app.id].map(release => ({ app, release }))).sort((a, b) => b.release.date.localeCompare(a.release.date)).slice(0, 3);
  return <div className="latest-updates">{releases.length ? releases.map(({ app, release }) => <article className="panel glass update-preview" key={app.id + release.version + release.channel}><Image src={'/brand/' + app.id + '.png'} width={52} height={52} alt="" /><div><p className="eyebrow">{app.name} · v{release.version}</p><h3>{release.title}</h3><time dateTime={release.date}>{release.date}</time><p>{release.summary}</p><Link className="text-link" href={'/apps/' + app.id + '/updates'}>View changelog <ArrowUpRight size={17} /></Link></div></article>) : <article className="panel glass update-preview"><Image src="/brand/taqwa-habit.png" width={52} height={52} alt="" /><div><p className="eyebrow">Taqwa Habit · Google Play note</p><h3>Arabic text corrections</h3><time dateTime={storeUpdate.date}>{storeUpdate.displayDate}</time><p>{storeUpdate.summary}</p><p className="section-note">Versioned release notes will appear once verified version details are available.</p><Link className="text-link" href="/updates">Browse updates <ArrowUpRight size={17} /></Link></div></article>}</div>;
}
