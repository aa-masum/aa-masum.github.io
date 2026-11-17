export default function Instructing({ items }) {
  return (
    <div className="mx-auto max-w-6xl divide-y divide-rule">
      {items.map((c) => {
        const photos = (c.photos || []).slice(0, 4);
        const single = photos.length === 1;
        return (
          <article
            key={c.workshop}
            className={`grid items-center gap-10 py-8 ${photos.length ? 'md:grid-cols-[3fr_2fr]' : ''}`}
          >
            <div className="text-left">
              <h3 className="font-display text-3xl font-bold">{c.role}</h3>
              <p className="mt-3 text-xl font-semibold text-cobalt">{c.workshop}</p>
              {c.organizer && <p className="mt-2 text-lg">Organized by {c.organizer}</p>}
              {c.description && <p className="mt-5 text-lg leading-relaxed">{c.description}</p>}
            </div>

            {photos.length > 0 && (
              <div className={`grid gap-3 ${single ? 'grid-cols-1' : 'grid-cols-2'}`}>
                {photos.map((p) => (
                  <figure key={p.src}>
                    <img
                      src={p.src}
                      alt={p.caption || c.workshop}
                      className={
                        single
                          ? 'mx-auto h-auto w-full max-w-sm rounded-md'
                          : 'aspect-[4/3] w-full rounded-md object-cover'
                      }
                    />
                    {single && p.caption && <figcaption className="mt-2 text-center text-sm">{p.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}