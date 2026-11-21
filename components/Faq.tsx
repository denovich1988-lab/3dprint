export default function Faq({ items, title = 'Questions and answers' }: { items: { q: string; a: string }[]; title?: string }) {
  return (
    <section className="section faq" aria-labelledby="faq-h">
      <h2 id="faq-h">{title}</h2>
      <div className="faq-list">
        {items.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
