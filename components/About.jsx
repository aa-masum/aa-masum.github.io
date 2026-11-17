import Section from './Section';
import { site } from '../data/content';

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className={`grid items-start gap-x-10 gap-y-10 ${site.aboutImage ? 'md:grid-cols-[2fr_3fr]' : ''}`}>
        {site.aboutImage && (
          <div className="isolate mx-auto w-full max-w-sm border-b-4 border-rule bg-paper">
            <img
              src={site.aboutImage}
              alt={site.name}
              className="block w-full object-cover mix-blend-multiply"
            />
          </div>
        )}

        <div className="space-y-4 text-lg leading-relaxed">
          {site.about.map((t) => <p key={t}>{t}</p>)}
        </div>

        {site.interests?.length > 0 && (
          <div className="col-span-full">
            <h3 className="mb-3 font-display text-xl font-bold">Research interests</h3>
            <ul className="flex flex-wrap gap-2">
              {site.interests.map((t) => (
                <li key={t} className="rounded-full border-2 border-ink px-4 py-1.5 font-semibold">{t}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
}