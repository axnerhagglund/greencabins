import type { SanityFaqItem } from "@/sanity/types";

export default function FaqAccordion({ items }: { items: SanityFaqItem[] }) {
  return (
    <div style={{ display: "grid", gap: "1rem" }}>
      {items.map((item) => (
        <details key={item._id} style={{ border: "1px solid var(--border)", padding: "1rem" }}>
          <summary style={{ cursor: "pointer", fontWeight: 600 }}>{item.question}</summary>
          <p style={{ color: "var(--text-mid)", lineHeight: 1.7, marginTop: "0.75rem" }}>
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
