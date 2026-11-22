function Media({ m, title }) {
  if (m.type === 'youtube') {
    return (
      <iframe
        className="aspect-video w-full rounded-lg"
        src={`https://www.youtube-nocookie.com/embed/${m.id}`}
        title={m.caption || title}
        loading="lazy"
        allowFullScreen
      />
    );
  }
  if (m.type === 'video') {
    return (
      <video
        className="mx-auto h-auto w-auto max-w-full rounded-lg bg-black"
        style={{ maxHeight: m.maxHeight || '32rem' }}
        src={m.src}
        poster={m.poster || undefined}
        preload="metadata"
        playsInline
        {...(m.autoplay ? { autoPlay: true, muted: true, loop: true } : { controls: true })}
      />
    );
  }
  return (
    <img
      src={m.src}
      alt={m.caption || title}
      className="mx-auto h-auto w-auto max-w-full rounded-lg border border-rule bg-white"
      style={{ maxHeight: m.maxHeight || '32rem' }}
    />
  );
}

function getMedia(p) {
  if (p.media) return p.media.slice(0, 2);
  if (p.youtube) return [{ type: 'youtube', id: p.youtube }];
  if (p.video) return [{ type: 'video', src: p.video }];
  return [];
}

export default function Projects({ items }) {
  return (
    <div className="w-full">
      {items.map((p) => {
        const media = getMedia(p);
        const paragraphs = [].concat(p.description || p.summary || []);
        return (
          <article key={p.title} className="border-t border-rule py-12 first:border-t-0 first:pt-0">
            <h3 className="font-display text-3xl font-bold">{p.title}</h3>

            <div className="mt-4 space-y-3 text-lg leading-relaxed">
              {paragraphs.map((t) => <p key={t}>{t}</p>)}
            </div>

            {p.tags?.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="rounded bg-signal/70 px-2 py-0.5 text-sm font-semibold">{t}</li>
                ))}
              </ul>
            )}

            {media.length > 0 && (
              <div className={`mt-6 grid items-start gap-6 ${media.length > 1 ? 'md:grid-cols-2' : ''}`}>
                {media.map((m, i) => (
                  <figure key={i}>
                    <Media m={m} title={p.title} />
                    {m.caption && <figcaption className="mt-2 text-center text-sm">{m.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            )}

            {p.href && (
              <a href={p.href} className="mt-6 inline-block font-semibold text-cobalt underline underline-offset-4">
                View on GitHub →
              </a>
            )}
          </article>
        );
      })}
    </div>
  );
}