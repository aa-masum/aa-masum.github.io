import './globals.css';
import { Bricolage_Grotesque, Public_Sans } from 'next/font/google';
import Header from '../components/Header';
import { site } from '../data/content';

const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display' });
const body = Public_Sans({ subsets: ['latin'], variable: '--font-body' });

export const metadata = {
  title: { default: `${site.name} | ${site.role}`, template: `%s | ${site.name}` },
  description: site.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <footer className="border-t border-rule px-6 py-8 text-center text-sm">
          <a href={`mailto:${site.email}`} className="font-semibold text-cobalt hover:underline">{site.email}</a>
          <p className="mt-2">© {new Date().getFullYear()} {site.name}</p>
        </footer>
      </body>
    </html>
  );
}