import Link from 'next/link';
import existingTerms from '../data/existing-terms.json';
import { ArrowUpRight } from 'lucide-react';
import { apps, contact, support, type Product } from '../data/site';
import { legalFacts, legalPages, type LegalPage } from '../data/legal';

const labels: Record<LegalPage, string> = {
  'privacy-policy': 'Privacy',
  terms: 'Terms',
  'delete-account': 'Delete account',
};

export function LegalLinks({ app }: { app: Product }) {
  return <nav aria-label={app.name + ' legal information'} className="legal-directory">
    {legalPages.map(page => <Link key={page} href={'/apps/' + app.id + '/' + page}>{labels[page]}</Link>)}
  </nav>;
}

function WebsitePrivacy() {
  return <section>
    <h2>Using this website</h2>
    <p>The website stores your selected color theme in localStorage. The contact form prepares an email draft in your email application. Sending the email shares the details you include with the selected studio or support inbox.</p>
    <p>The site requests fonts from Google Fonts. Page and asset requests also pass through the hosting provider, which can process request details such as network addresses and browser information. Hosting log settings and email retention are under review.</p>
    <p>The website source includes no analytics or advertising SDK. Browser and hosting services may have their own storage and logging practices.</p>
  </section>;
}

export function LegalContent({ page, product }: { page: LegalPage; product?: Product }) {
  const app = product ?? apps[0];
  const facts = legalFacts[app.id];
  const emailSubject = encodeURIComponent(app.name + (page === 'delete-account' ? ' account and data deletion request' : ' privacy question'));

  return <div className="panel glass legal">
    <p className="legal-meta">Uxhan Forge · {app.name} · Information reviewed November 19, 2026</p>
    <LegalLinks app={app} />
    {page === 'delete-account' ? <>
      <section>
        <h2>Request account or data deletion</h2>
        <p>To start a request for {app.name}, email product support. Include your username or account email and explain whether you want your account, associated data, or specific records removed. Send the email from your email app to submit the request.</p>
        <p>Support may ask you to verify ownership before acting. Please keep passwords and session credentials out of your email.</p>
        <a className="button primary" href={'mailto:' + support + '?subject=' + emailSubject}>Email a deletion request <ArrowUpRight size={17} /></a>
        <p>You can also write directly to <a href={'mailto:' + support}>{support}</a>.</p>
      </section>
      <section><h2>In the app</h2><ol>{facts.steps.map(step => <li key={step}>{step}</li>)}</ol></section>
      <section><h2>Data covered by deletion</h2>{facts.deletion.map(text => <p key={text}>{text}</p>)}
        <p>Support will confirm the scope of your request and explain any retention that applies. The support process and deployed deletion behavior are being reviewed.</p>
      </section>
    </> : page === 'terms' ? <>
      <section><h2>Terms information</h2><p>App-specific terms for {app.name} are being reviewed. For current conditions of use, account questions or a copy of applicable terms, contact <a href={'mailto:' + support}>{support}</a>.</p></section>
      <section><h2>Service and accounts</h2><p>Uxhan Forge develops {app.name}. Its current product features and availability are described on the <Link href={'/apps/' + app.id}>app page</Link>. Account and deletion information is available through the links above.</p></section>
      <section><h2>Third-party services</h2><p>The current project integrates {facts.providers.join(', ')}. Provider terms may apply when you use those services.</p></section>
      {app.id === 'taqwa-habit' && <section><h2>Existing published terms</h2>{existingTerms.map((block, index) => block.tag === 'h2' ? <h3 key={index}>{block.text}</h3> : <p key={index}>{block.text}</p>)}</section>}
    </> : <>
      <section><h2>{app.name} privacy information</h2><p>This page describes behavior found in the current application source. The complete privacy policy is under review while the released build, service settings, retention and audience details are confirmed.</p></section>
      {facts.data.map(section => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map(text => <p key={text}>{text}</p>)}</section>)}
      <section><h2>Retention, security and your choices</h2><p>Device data remains subject to your device’s storage controls. Server records and provider backups have separate retention settings. Contact support to ask about access, correction, deletion, consent or retention for your data.</p><p>Use account and privacy settings to control the available app options. Service settings, regional rights and children’s privacy disclosures are being reviewed before the complete policy is finalized.</p></section>
      <section><h2>Account and data deletion</h2><p><Link href={'/apps/' + app.id + '/delete-account'}>Start a deletion request or read the in-app steps.</Link></p></section>
      {!product && <WebsitePrivacy />}
    </>}
    <section><h2>Contact Uxhan Forge</h2><p>Privacy, account and product support — <a href={'mailto:' + support}>{support}</a>.</p><p>Studio inquiries — <a href={'mailto:' + contact}>{contact}</a>.</p></section>
    {!product && <section><h2>Other applications</h2>{apps.map(item => <div key={item.id}><h3>{item.name}</h3><LegalLinks app={item} /></div>)}</section>}
  </div>;
}
