export function Faq({
  items,
}: {
  items: Array<{ question: string; answer: string }>;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <article key={item.question} className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="font-semibold">{item.question}</h3>
          <p className="mt-2 text-white/70">{item.answer}</p>
        </article>
      ))}
    </div>
  );
}
