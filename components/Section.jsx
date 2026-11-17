export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-16 px-6 py-14">
      <h2 className="mb-12 border-y-4 border-rule py-5 text-center font-display text-4xl font-bold text-cobalt">{title}</h2>
      {children}
    </section>
  );
}
