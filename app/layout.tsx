import type { Metadata, Viewport } from 'next';
import { Header } from '../components/chrome';
import { Footer } from '../components/footer';
import { domain } from '../data/site';
import { organizationJsonLd, websiteJsonLd, StructuredData, imageUrl } from '../components/seo';
import './globals.css';
import { OrganicLiquidBackground } from '../components/organic-liquid-background';

export const metadata: Metadata = {
  metadataBase: new URL(domain),
  title: { default: 'Uxhan Forge | Independent App & Game Studio', template: '%s | Uxhan Forge' },
  description:
    'Independent mobile apps and playful puzzle games from Uxhan Forge, an independent software, mobile application, and game development studio co-founded by Muhammad Umer Farooq and Muhammad Burhan Yousaf.',
  icons: { icon: '/brand/Logo.png', apple: '/brand/Logo.png' },
  openGraph: { siteName: 'Uxhan Forge', images: [{ url: imageUrl, width: 540, height: 540 }] },
  twitter: { card: 'summary_large_image' },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

const initializeTheme = "try{var t=localStorage.getItem('uxhan-theme');document.documentElement.dataset.theme=/^(light|dark|dim)$/.test(t)?t:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}catch{};function uxhanVisibility(){document.documentElement.toggleAttribute('data-page-hidden',document.hidden)}document.addEventListener('visibilitychange',uxhanVisibility);uxhanVisibility();";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning>
    <head>
      <script dangerouslySetInnerHTML={{ __html: initializeTheme }} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </head>
    <body suppressHydrationWarning>
      <StructuredData data={[organizationJsonLd(), websiteJsonLd()]} />
      <OrganicLiquidBackground />
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1}>{children}</main>
      <Footer />
    </body>
  </html>;
}
