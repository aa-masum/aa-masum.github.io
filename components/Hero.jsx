import Drone from './Drone';
import { site } from '../data/content';

const pill =
  'rounded-full border border-white/70 px-4 py-1.5 text-sm font-semibold hover:bg-signal hover:text-ink hover:border-signal';

export default function Hero() {
  const bg = site.heroBackground;
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1020] to-[#16294d] text-white">
      {bg ? (
        <>
          <img
            src={bg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: site.heroBackgroundPosition || '50% 30%' }}
          />
          <div className="absolute inset-0 bg-[#0a1020]/80" />
        </>
      ) : (
        <div className="grid-dark absolute inset-0" />
      )}

      <div className="relative mx-auto grid max-w-[90rem] items-center gap-8 px-6 py-12 md:min-h-[460px] md:grid-cols-[380px_1fr] lg:grid-cols-[420px_1fr] lg:px-16">
        {site.heroImage ? (
          <div className="order-2 -mb-12 flex h-72 items-end justify-center self-end md:order-1 md:h-[460px]">
            <img src={site.heroImage} alt={site.name} className="h-full w-auto object-contain object-bottom" />
          </div>
        ) : (
          <div className="order-2 mx-auto w-full max-w-xs rounded-3xl bg-paper p-8 shadow-2xl md:order-1 md:ml-0 md:mr-auto">
            <Drone />
          </div>
        )}

        <div className="order-1 text-center md:order-2">
          <h1 className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl">{site.name}</h1>
          <p className="mt-6 text-lg font-semibold sm:text-xl">{site.headline}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {site.links.map((l) => (
              <a key={l.label} href={l.href} className={pill}>{l.label}</a>
            ))}
            <a href={`mailto:${site.email}`} className={pill}>Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}