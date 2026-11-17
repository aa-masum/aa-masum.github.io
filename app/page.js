import Link from 'next/link';
import Hero from '../components/Hero';
import About from '../components/About';
import Section from '../components/Section';
import Entries from '../components/Entries';
import { publications, education } from '../data/content';
import FeaturedVideos from '../components/FeaturedVideos';

const explore = [
  { href: '/projects', title: 'Projects', text: 'Robots, IoT systems and machine learning work.' },
  { href: '/skills', title: 'Skills', text: 'Programming, hardware, simulation and security tools.' },
  { href: '/extracurricular', title: 'Extracurricular', text: 'Leadership, training, workshops and certificates.' },
];

export default function Home() {
  return (
    <>
      <Hero />
      <About />

      <Section id="education" title="Education">
        <Entries items={education} />
      </Section>

      <Section id="publications" title="Publications">
        <ul className="mx-auto max-w-4xl divide-y divide-rule border-y border-rule">
          {publications.map((p) => (
            <li key={p.title} className="grid gap-1 py-5 sm:grid-cols-[5rem_1fr]">
              <span className="font-display text-xl font-bold text-cobalt">{p.year}</span>
              <div>
                {p.href ? (
                  <a href={p.href} className="text-lg font-semibold hover:underline">{p.title}</a>
                ) : (
                  <p className="text-lg font-semibold">{p.title}</p>
                )}
                <p className="text-sm">{p.authors}</p>
                <p className="text-sm italic">{p.venue} · {p.status}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <FeaturedVideos />

      <Section id="explore" title="Explore More">
        <div className="grid gap-6 md:grid-cols-3">
          {explore.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className="group block rounded-lg border-2 border-ink p-6 hover:bg-ink hover:text-paper"
            >
              <h3 className="font-display text-2xl font-bold">{e.title}</h3>
              <p className="mt-2 leading-relaxed">{e.text}</p>
              <span className="mt-4 inline-block font-semibold text-cobalt group-hover:text-signal">View →</span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}