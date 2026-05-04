"use client";
import React from "react";

const values = [
  {
    label: "Handpicked",
    body: "Every cabin is personally visited and vetted. We list only what we'd stay in ourselves.",
  },
  {
    label: "Nature-first",
    body: "No resorts. No crowds. Just quiet forest, clean water, and open sky.",
  },
  {
    label: "Honest pricing",
    body: "The price you see is the price you pay. No hidden fees, no surprise charges at checkout.",
  },
];

const facts = [
  { value: "5", label: "Curated Cabins" },
  { value: "2019", label: "Founded" },
  { value: "4.7★", label: "Average Rating" },
];

export default function AboutSection() {
  return (
    <section
      style={{
        background: "var(--bg-subtle)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Main content */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "7rem 2rem 6rem",
        }}
      >
        {/* Label */}
        <p
          style={{
            color: "var(--ember)",
            fontSize: "0.7rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: "3.5rem",
          }}
        >
          About Us
        </p>

        {/* Two-column header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            marginBottom: "5rem",
            alignItems: "end",
          }}
          className="about-grid"
        >
          {/* Left — editorial heading */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                fontWeight: 300,
                lineHeight: 1.08,
                color: "var(--text)",
              }}
            >
              We believe the
              <br />
              best moments
              <br />
              <em style={{ color: "var(--text-mid)" }}>happen outside.</em>
            </h2>
          </div>

          {/* Right — body + values */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
              paddingBottom: "0.5rem",
            }}
          >
            <p
              style={{
                color: "var(--text-mid)",
                fontSize: "1rem",
                lineHeight: 1.8,
                maxWidth: "420px",
              }}
            >
              GreenCabins was started by two friends who kept asking the same
              question — where do you go when you need to actually disconnect?
              Not a hotel with a forest view. A real cabin, in real nature,
              with nothing between you and the silence.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0",
                borderTop: "1px solid var(--border)",
              }}
            >
              {values.map(({ label, body }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    padding: "1.25rem 0",
                    borderBottom: "1px solid var(--border)",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "var(--ember)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      flexShrink: 0,
                      paddingTop: "0.2rem",
                      width: "90px",
                    }}
                  >
                    {label}
                  </span>
                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.85rem",
                      lineHeight: 1.65,
                    }}
                  >
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Facts row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          {facts.map(({ value, label }) => (
            <div
              key={label}
              style={{
                background: "var(--bg-subtle)",
                padding: "2rem 2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                  fontWeight: 300,
                  color: "var(--text)",
                  lineHeight: 1,
                }}
              >
                {value}
              </p>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 720px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
