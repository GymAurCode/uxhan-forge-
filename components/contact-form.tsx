'use client';

import { useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { apps, contact, support } from '../data/site';

export function ContactForm({ selected }: { selected?: string }) {
  const [draft, setDraft] = useState('');
  const [product, setProduct] = useState(apps.some(app => app.id === selected) ? selected! : '');
  const email = product ? support : contact;
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = [String(form.get('message')).trim(), '', 'From: ' + String(form.get('name')).trim(), 'Reply to: ' + form.get('email'), product ? 'Product: ' + (apps.find(app => app.id === product)?.name ?? '') : ''].filter((line, index) => line || index === 1).join('\n');
    const uri = 'mailto:' + email + '?subject=' + encodeURIComponent(String(form.get('subject')).trim()) + '&body=' + encodeURIComponent(body);
    setDraft(uri);
    window.location.href = uri;
  }

  return <form className="panel glass contact-form" onSubmit={submit} onChange={() => setDraft('')}>
    <h2>Write a message</h2>
    <p id="email-instructions">This form prepares a draft in your email app. Send it from there.</p>
    <label>Name<input name="name" autoComplete="name" required pattern=".*\S.*" maxLength={100} /></label>
    <label>Email<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
    <label>Subject<input name="subject" required pattern=".*\S.*" maxLength={120} /></label>
    <label>Product <span className="optional">(optional)</span><select name="product" value={product} onChange={event => setProduct(event.target.value)}><option value="">Studio inquiry</option>{apps.map(app => <option value={app.id} key={app.id}>{app.name}</option>)}</select></label>
    <label>Message<textarea name="message" required minLength={3} maxLength={1200} rows={5} onChange={event => event.currentTarget.setCustomValidity(event.currentTarget.value && event.currentTarget.value.trim().length < 3 ? 'Enter at least three characters.' : '')} /></label>
    <button className="button primary" type="submit" aria-describedby="email-instructions">Open email draft <ArrowUpRight size={17} /></button>
    <div aria-live="polite">{draft && <p>Draft prepared. <a href={draft}>Open it again</a> or copy your message and email <a href={'mailto:' + email}>{email}</a>.</p>}</div>
  </form>;
}
