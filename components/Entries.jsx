export default function Entries({ items }) {
  return (
    <ul className="mx-auto max-w-4xl space-y-7">
      {items.map((i) => (
        <li key={i.title + i.when} className="grid gap-1 sm:grid-cols-[11rem_1fr]">
          <span className="font-semibold text-cobalt">{i.when}</span>
          <div>
            <p className="text-lg font-semibold">{i.title}</p>
            {i.place && <p>{i.place}</p>}
            {i.note && <p className="mt-1 text-sm leading-relaxed">{i.note}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}
