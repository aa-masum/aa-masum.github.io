import { gallery } from '../data/content';

export default function Gallery() {
  if (!gallery.length) return null;
  return (
    <section id="motion" className="border-y border-rule bg-ink py-16 text-paper">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 font-display text-4xl font-bold tracking-tight">In motion</h2>
      </div>
      <div className="flex snap-x gap-4 overflow-x-auto px-6 pb-4">
        {gallery.map((g) => (
          <figure key={g.src} className="shrink-0 snap-start">
            {g.type === 'video' ? (
              <video src={g.src} autoPlay muted loop playsInline className="h-72 rounded-md object-cover" />
            ) : (
              <img src={g.src} alt={g.caption || ''} className="h-72 rounded-md object-cover" />
            )}
            {g.caption && <figcaption className="mt-2 text-sm">{g.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </section>
  );
}
