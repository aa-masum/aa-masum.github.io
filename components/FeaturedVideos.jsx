import Section from './Section';
import { featuredVideos } from '../data/content';

function Player({ v }) {
  if (v.youtube) {
    return (
      <iframe
        className="aspect-video w-full rounded-lg"
        src={`https://www.youtube-nocookie.com/embed/${v.youtube}`}
        title={v.title}
        loading="lazy"
        allowFullScreen
      />
    );
  }
  if (v.video) {
    return (
      <video
        className="aspect-video w-full rounded-lg bg-black object-cover"
        src={v.video}
        poster={v.poster || undefined}
        preload="metadata"
        playsInline
        {...(v.autoplay ? { autoPlay: true, muted: true, loop: true } : { controls: true })}
      />
    );
  }
  return null;
}

export default function FeaturedVideos() {
  if (!featuredVideos.length) return null;
  return (
    <Section id="videos" title="Featured Videos">
      <div className="grid gap-8 md:grid-cols-2">
        {featuredVideos.map((v) => (
          <figure key={v.title}>
            <Player v={v} />
            <figcaption className="mt-3">
              <p className="font-display text-xl font-bold">{v.title}</p>
              {v.caption && <p className="mt-1 leading-relaxed">{v.caption}</p>}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}