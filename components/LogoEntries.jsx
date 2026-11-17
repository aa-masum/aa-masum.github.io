export default function LogoEntries({ items }) {
  return (
    <ul className="mx-auto max-w-5xl divide-y divide-rule">
      {items.map((i) => (
        <li
          key={i.title + i.place}
          className={`grid items-center gap-6 py-10 ${
            i.logo ? (i.photo ? 'md:grid-cols-[18rem_1fr]' : 'md:grid-cols-[12rem_1fr]') : ''
          }`}
        >
          {i.logo && (
            <div className={`flex items-center justify-center ${i.photo ? '' : 'h-36'}`}>
              <img
                src={i.logo}
                alt={i.place || i.title}
                className={
                  i.photo
                    ? 'max-h-64 w-auto max-w-full rounded-md border border-rule object-contain shadow-md'
                    : 'max-h-36 max-w-full object-contain mix-blend-multiply'
                }
              />
            </div>
          )}
          <div className="text-center">
            <h3 className="font-display text-2xl font-bold">{i.title}</h3>
            {i.when && <p className="mt-2 font-semibold text-cobalt">{i.when}</p>}
            {i.place && <p className="mt-2 text-lg">{i.place}</p>}
            {i.note && <p className="mt-2 leading-relaxed">{i.note}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}