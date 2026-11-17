'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '../data/content';

const nav = [
  ['Home', '/'],
  ['Projects', '/projects'],
  ['Skills', '/skills'],
  ['Extracurricular', '/extracurricular'],
];

export default function Header() {
  const path = (usePathname() || '/').replace(/\/$/, '') || '/';
  return (
    <header className="sticky top-0 z-20 bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-3">
        <Link href="/" className="font-display text-xl font-bold">{site.name}</Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`border-b-4 pb-1 font-semibold ${path === href ? 'border-white' : 'border-transparent hover:border-signal'}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}