"use client";

import { useMemo, useState } from "react";
import { faqCategories, type FaqCategory } from "@/data/faq";
import type { SanityFaqItem } from "@/sanity/types";

type Props = {
  items: SanityFaqItem[];
};

export default function FaqPageClient({ items }: Props) {
  const [category, setCategory] = useState<FaqCategory | "alla">("alla");
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return items.filter((item) => {
      const categoryMatches = category === "alla" || item.category === category;
      const queryMatches =
        normalizedQuery.length === 0 ||
        item.question.toLowerCase().includes(normalizedQuery) ||
        item.answer.toLowerCase().includes(normalizedQuery);

      return categoryMatches && queryMatches;
    });
  }, [category, items, query]);

  if (items.length === 0) {
    return <p style={{ color: "var(--text-muted)" }}>Under uppbyggnad</p>;
  }

  return (
    <div style={{ display: "grid", gap: "2rem" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
        {faqCategories.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setCategory(item.id)}
            style={{
              border: "1px solid var(--border)",
              background: item.id === category ? "var(--text)" : "var(--bg-card)",
              color: item.id === category ? "var(--bg)" : "var(--text)",
              borderRadius: "2px",
              cursor: "pointer",
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              padding: "0.7rem 1rem",
              textTransform: "uppercase",
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Sök fråga"
        style={{
          width: "100%",
          border: "1px solid var(--border)",
          background: "var(--bg-card)",
          color: "var(--text)",
          borderRadius: "2px",
          padding: "1rem",
        }}
      />

      <div style={{ display: "grid", gap: "1rem" }}>
        {filteredItems.map((item) => (
          <article
            key={item._id}
            style={{
              border: "1px solid var(--border)",
              background: "var(--bg-card)",
              borderRadius: "4px",
              padding: "1.5rem",
            }}
          >
            <h2
              style={{
                color: "var(--text)",
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                fontWeight: 400,
                marginBottom: "0.75rem",
              }}
            >
              {item.question}
            </h2>
            <p style={{ color: "var(--text-mid)", lineHeight: 1.7 }}>{item.answer}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
