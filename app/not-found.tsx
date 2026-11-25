import Link from 'next/link';
import { Heading } from '../components/content';

export default function NotFound() {
  return <div className="wrap inner"><Heading eyebrow="404" title="Page not found">The page you were looking for may have moved.</Heading><div className="actions"><Link className="button primary" href="/">Back to home</Link><Link className="button glass" href="/apps">Explore our apps</Link></div></div>;
}
