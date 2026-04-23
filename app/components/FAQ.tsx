"use client";
import React, { useState } from "react";

const faqs = [
  {
    q: "How do I book a cabin?",
    a: "Browse our available cabins and click Book on any listing. You'll be guided through a simple checkout — choose your dates, number of guests, and confirm. You'll receive a confirmation email within minutes.",
  },
  {
    q: "What's included in the price?",
    a: "The price per night includes the cabin, all listed amenities (wifi, sauna, kitchen etc.), and bedlinen. Firewood is included where a fireplace is listed. There are no hidden fees or cleaning charges added at checkout.",
  },
  {
    q: "Can I cancel or change my booking?",
    a: "Yes. Cancellations made more than 14 days before arrival are fully refunded. Within 14 days, 50% is refunded. Date changes are free of charge subject to availability — just reach out to us.",
  },
  {
    q: "Are the cabins suitable for winter stays?",
    a: "Most of our cabins are fully insulated and heated for year-round use. Each listing specifies whether it's available in winter. A snow-covered Swedish forest in January is honestly one of the best things we can offer.",
  },
  {
    q: "Is there mobile coverage at the cabins?",
    a: "Coverage varies by location — some cabins are intentionally remote. Each listing notes wifi availability. If you're looking to fully disconnect, the Forest Hideaway and Creek Cabin are the best choices.",
  },
  {
    q: "Can I bring my dog?",
    a: "Selected cabins are pet-friendly — it's noted on the listing page. We ask that pets are not left unattended inside the cabin and that you clean up after them on the property.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen((p) => !p)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.6rem 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          gap: "2rem",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            fontWeight: 400,
            color: open ? "var(--ember)" : "var(--text)",
            transition: "color 0.25s",
            lineHeight: 1.3,
          }}
        >
          {q}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: "28px",
            height: "28px",
            border: "1px solid var(--border)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: open ? "var(--ember)" : "var(--text-muted)",
            fontSize: "1rem",
            transition: "all 0.25s",
            background: open ? "var(--bg-subtle)" : "transparent",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>

      <div
        style={{
          maxHeight: open ? "300px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <p
          style={{
            color: "var(--text-mid)",
            fontSize: "0.92rem",
            lineHeight: 1.8,
            paddingBottom: "1.75rem",
            maxWidth: "640px",
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        padding: "7rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "5rem",
          alignItems: "start",
        }}
        className="faq-grid"
      >
        {/* Left — sticky label + heading */}
        <div style={{ position: "sticky", top: "6rem" }}>
          <p
            style={{
              color: "var(--ember)",
              fontSize: "0.7rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            FAQ
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "var(--text)",
              marginBottom: "1.5rem",
            }}
          >
            Questions
            <br />
            <em style={{ color: "var(--text-mid)" }}>& Answers</em>
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.85rem",
              lineHeight: 1.7,
              maxWidth: "220px",
            }}
          >
            Can't find what you're looking for? Drop us a line at{" "}
            <a
              href="mailto:hello@greencabins.se"
              style={{ color: "var(--ember)", textDecoration: "none" }}
            >
              hello@greencabins.se
            </a>
          </p>
        </div>

        {/* Right — accordion */}
        <div style={{ borderTop: "1px solid var(--border)" }}>
          {faqs.map((faq) => (
            <Item key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
