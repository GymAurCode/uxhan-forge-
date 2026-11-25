import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { LogoScene } from '../components/logo-scene';
import { ProductGrid } from '../components/content';
import { Closing, Faq, FocusAreas, Journey, LatestUpdates, Philosophy, ProductEditorial, SectionTitle, TaqwaSpotlight } from '../components/editorial';
import { apps } from '../data/site';
import { studioFaq } from '../data/editorial';

export const metadata = { alternates: { canonical: '/' } };

export default function Home() {
  return <>
    <section className="wrap hero">
      <div className="hero-copy">
        <p className="eyebrow studio-label">Independent mobile studio</p>
        <h1>Small ideas.<br /><em>Extraordinary<br className="hero-break" /> experiences.</em></h1>
        <p className="lead">We craft thoughtful apps and playful games that make everyday moments more meaningful.</p>
        <div className="actions"><Link className="button primary" href="/apps">Explore our apps <ArrowUpRight size={17} /></Link><Link className="button glass" href="/about">About the studio</Link></div>
      </div>
      <LogoScene />
    </section>
    <div className="wrap studio-content">
      <section className="editorial-section studio-introduction">
        <div><SectionTitle eyebrow="Meet the studio" title="Made for practice. Made for play." /><p>Uxhan Forge is an independent mobile app and game studio. We work on experiences that help people build a routine, enjoy a puzzle and make something of a spare moment.</p><Link className="text-link" href="/about">Our approach <ArrowUpRight size={17} /></Link></div>
        <div className="studio-note glass"><p className="eyebrow">Two sides of the same curiosity</p><h3>What makes an experience worth returning to?</h3><p>For a useful app, it can be the ease of recording a daily habit. For a game, it can be the satisfaction of seeing a difficult move come together.</p><p>Our portfolio explores both.</p></div>
      </section>
      <section className="editorial-section" aria-labelledby="work">
        <div className="section-heading"><div><p className="eyebrow">Made by Uxhan Forge</p><h2 id="work">Our apps</h2></div><Link className="text-link" href="/apps">Browse apps <ArrowUpRight size={17} /></Link></div>
        <ProductGrid />
      </section>
      <section className="editorial-section" aria-label="Taqwa Habit spotlight"><TaqwaSpotlight /></section>
      <section className="editorial-section"><SectionTitle eyebrow="Coming next" title="A different way to spend a moment." /><p className="section-note">Two puzzle concepts in development, each built around a clear interaction.</p><div className="upcoming-editorials"><ProductEditorial app={apps[1]} /><ProductEditorial app={apps[2]} reverse /></div></section>
      <section className="editorial-section"><SectionTitle eyebrow="What we create" title="Useful routines. Playful possibilities." /><FocusAreas /></section>
      <section className="editorial-section"><Philosophy /></section>
      <section className="editorial-section"><SectionTitle eyebrow="Behind the products" title="From a question to an experience." /><Journey /></section>
      <section className="editorial-section"><div className="section-heading"><SectionTitle eyebrow="From the studio" title="What’s new" /><Link className="text-link" href="/updates">All updates <ArrowUpRight size={17} /></Link></div><LatestUpdates /></section>
      <section className="editorial-section"><SectionTitle eyebrow="A few useful answers" title="Studio FAQ" /><Faq items={studioFaq} /></section>
      <div className="editorial-section"><Closing /></div>
    </div>
  </>;
}
