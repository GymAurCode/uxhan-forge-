import Link from 'next/link';
import { apps } from '../data/site';
import { Brand } from './brand';

export function Footer() {
  return <footer className="wrap footer">
    <span className="footer-watermark" aria-hidden="true">UMX</span>
    <div><Brand /><p>Independent mobile app and game studio.</p></div>
    <div><strong>Apps</strong>{apps.map(app => <Link key={app.id} href={'/apps/' + app.id}>{app.name}</Link>)}</div>
    <div><strong>Studio</strong><Link href="/about">About</Link><Link href="/updates">Updates</Link><Link href="/contact">Contact</Link><Link href="/support">Support</Link></div>
    <div><strong>Legal</strong><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms">Terms</Link><Link href="/delete-account">Delete account</Link></div>
    <small>© {new Date().getUTCFullYear()} Uxhan Forge</small>
  </footer>;
}

