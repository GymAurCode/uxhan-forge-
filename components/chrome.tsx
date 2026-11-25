'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Moon, Sun, Sunset, X } from 'lucide-react';
import { useState, useSyncExternalStore } from 'react';
import { Brand } from './brand';

const nav = [['Home','/'],['Apps','/apps'],['About','/about'],['Updates','/updates'],['Contact','/contact']];
const modes = [['light', Sun], ['dark', Moon], ['dim', Sunset]] as const;
const subscribe = (listener: () => void) => {
  window.addEventListener('uxhan-theme', listener);
  return () => window.removeEventListener('uxhan-theme', listener);
};

function changeTheme(value: string) {
  document.documentElement.dataset.theme = value;
  try { localStorage.setItem('uxhan-theme', value); } catch {}
  window.dispatchEvent(new Event('uxhan-theme'));
}
function ThemePicker() {
  const theme = useSyncExternalStore(subscribe, () => document.documentElement.dataset.theme ?? 'light', () => 'light');

  return <fieldset className="theme-picker" data-mode={theme}>
    <legend className="sr-only">Color theme</legend>
    <svg className="filter-definitions" aria-hidden="true" width="0" height="0">
      <filter id="theme-refraction" primitiveUnits="objectBoundingBox">
        <feImage href="/brand/refraction.webp" width="100%" height="100%" preserveAspectRatio="none" result="map" />
        <feDisplacementMap in="SourceGraphic" in2="map" scale=".09" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
    <span className="theme-lens" aria-hidden="true" />
    {modes.map(([value, Icon]) => <label key={value} title={value}>
      <input className="sr-only" type="radio" name="theme" value={value} checked={theme === value} onChange={() => changeTheme(value)} />
      <span><Icon size={17} aria-hidden="true" /><span className="sr-only">{value} theme</span></span>
    </label>)}
  </fieldset>;
}

export function Header() {
  const path = usePathname();
  return <HeaderContent key={path} path={path} />;
}

function HeaderContent({ path }: { path: string }) {
  const [open, setOpen] = useState(false);
  return <header className="header wrap" onKeyDown={event => {
    if (event.key === 'Escape' && open) {
      setOpen(false);
      document.getElementById('menu-button')?.focus();
    }
  }}>
    <div className="nav-shell glass">
      <Brand />
      <button className="menu-button" id="menu-button" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      <nav aria-label="Main navigation" id="main-navigation" className={open ? 'mobile-open' : ''}>
        {nav.map(([label, url]) => <Link key={url} href={url} onClick={() => setOpen(false)} aria-current={url === path ? 'page' : undefined} data-active={url === path || (url !== '/' && path.startsWith(url + '/'))}>{label}</Link>)}
      </nav>
      <ThemePicker />
    </div>
  </header>;
}

