"use client";
import React from "react";
import Link from "next/link";

const links = {
  Explore: [
    { label: "All Cabins", href: "/cabins" },
    { label: "Creek Cabin", href: "/cabins/creek-cabin" },
    { label: "Treetop Cabin", href: "/cabins/treetop-cabin" },
    { label: "Lakeside Cabin", href: "/cabins/lakeside-cabin" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--text)",
        color: "var(--bg)",
        borderTop: "1px solid rgba(247,244,239,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "5rem 2rem 3rem",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr",
            gap: "4rem",
            marginBottom: "4rem",
            paddingBottom: "4rem",
            borderBottom: "1px solid rgba(247,244,239,0.1)",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  letterSpacing: "0.06em",
                  color: "var(--bg)",
                }}
              >
                Green<span style={{ color: "var(--ember-light)" }}>Cabins</span>
              </span>
            </Link>
            <p
              style={{
                color: "rgba(247,244,239,0.45)",
                fontSize: "0.85rem",
                lineHeight: 1.75,
                maxWidth: "280px",
              }}
            >
              Handpicked cabin retreats in the Swedish wilderness. Silence,
              stars, and the sound of running water.
            </p>
            <a
              href="mailto:hello@greencabins.se"
              style={{
                color: "var(--ember-light)",
                fontSize: "0.8rem",
                letterSpacing: "0.06em",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              hello@greencabins.se
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p
                style={{
                  color: "rgba(247,244,239,0.35)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  marginBottom: "0.25rem",
                }}
              >
                {section}
              </p>
              {items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{
                    color: "rgba(247,244,239,0.6)",
                    fontSize: "0.85rem",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    letterSpacing: "0.02em",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--bg)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247,244,239,0.6)")}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              color: "rgba(247,244,239,0.25)",
              fontSize: "0.72rem",
              letterSpacing: "0.06em",
            }}
          >
            © {new Date().getFullYear()} GreenCabins. All rights reserved.
          </p>
          <p
            style={{
              color: "rgba(247,244,239,0.2)",
              fontSize: "0.7rem",
              letterSpacing: "0.08em",
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
            }}
          >
            Where the forest calls.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
