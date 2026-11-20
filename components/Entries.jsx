export default function Entries({ items }) {
  const hasLogo = items.some((i) => i.logo);
  return (
    <ul className="mx-auto max-w-4xl space-y-8">
      {items.map((i) => (
        <li
          key={i.title + i.when}
          className={`grid items-center gap-x-6 gap-y-2 ${
            hasLogo ? 'sm:grid-cols-[6rem_11rem_1fr]' : 'sm:grid-cols-[11rem_1fr]'
          }`}
        >
          {hasLogo && (
            <div className="flex h-24 w-24 items-center justify-center">
              {i.logo && (
                <img
                  src={i.logo}
                  alt={i.place || i.title}
                  className={
                    i.photo
                      ? 'max-h-24 max-w-full rounded-md object-contain'
                      : 'max-h-24 max-w-full object-contain mix-blend-multiply'
                  }
                />
              )}
            </div>
          )}
          <span className="font-semibold text-cobalt">{i.when}</span>
          <div>
            <p className="text-lg font-semibold">{i.title}</p>
            {i.place && <p>{i.place}</p>}
            {i.thesis && (
              <p className="mt-1 text-sm italic leading-relaxed">Thesis: {i.thesis}</p>
            )}
            {i.note && <p className="mt-1 text-sm leading-relaxed">{i.note}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}