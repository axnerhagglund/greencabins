"use client";
import React from "react";
import Link from "next/link";

const channels = [
  {
    kind: "Email",
    value: "hello@greencabins.se",
    href: "mailto:hello@greencabins.se",
    note: "The fastest way — we answer every one ourselves, usually within a day.",
  },
  {
    kind: "Phone",
    value: "+46 31 555 01 24",
    href: "tel:+46315550124",
    note: "Weekdays 09 – 17 CET. Leave a message and we'll call back.",
  },
  {
    kind: "Post",
    value: "Stigbergstorget 4, 414 63 Göteborg, Sweden",
    href: "https://maps.google.com/?q=Stigbergstorget+4+Göteborg",
    note: "No drop-ins, please — but letters and postcards are always welcome.",
  },
];

export default function ContactPage() {
  return (
    <main
      style={{
        background: "var(--bg)",
        color: "var(--text)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top band — subtle dark strip for atmosphere */}
      <div
        style={{
          height: "7rem",
          background:
            "linear-gradient(to bottom, var(--forest-void) 0%, var(--forest-deep) 70%, var(--bg) 100%)",
        }}
      />

      <section
        style={{
          flex: 1,
          padding: "3rem 2rem 6rem",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* LEFT — editorial headline */}
          <div className="animate-fade-up">
            <p
              style={{
                color: "var(--ember)",
                fontSize: "0.7rem",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Contact · Three ways
            </p>

            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)",
                fontWeight: 300,
                lineHeight: 1.02,
                color: "var(--text)",
                marginBottom: "2rem",
              }}
            >
              Say
              <br />
              <em style={{ color: "var(--text-mid)" }}>hello.</em>
            </h1>

            <p
              style={{
                color: "var(--text-mid)",
                fontSize: "1rem",
                lineHeight: 1.85,
                maxWidth: "40ch",
              }}
            >
              Questions about a cabin, an unusual date range, or a place we
              should know about? Write, call, or send a letter — whichever
              feels right.
            </p>

            <div
              style={{
                marginTop: "2.75rem",
                display: "flex",
                alignItems: "center",
                gap: "0.9rem",
              }}
            >
              <span
                style={{
                  width: "36px",
                  height: "1px",
                  background: "var(--ember)",
                }}
              />
              <span
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                Replies by Emil &amp; Ida
              </span>
            </div>
          </div>

          {/* RIGHT — channels list */}
          <div
            className="animate-fade-up-d1"
            style={{
              borderTop: "1px solid var(--border)",
            }}
          >
            {channels.map(({ kind, value, href, note }, i) => (
              <a
                key={kind}
                href={href}
                target={kind === "Post" ? "_blank" : undefined}
                rel={kind === "Post" ? "noopener noreferrer" : undefined}
                style={{
                  display: "block",
                  padding: "1.75rem 0",
                  borderBottom: "1px solid var(--border)",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "padding 0.35s cubic-bezier(0.16,1,0.3,1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.paddingLeft = "0.75rem";
                  const v = e.currentTarget.querySelector<HTMLElement>(
                    "[data-value]"
                  );
                  if (v) v.style.color = "var(--ember)";
                  const arrow = e.currentTarget.querySelector<HTMLElement>(
                    "[data-arrow]"
                  );
                  if (arrow) {
                    arrow.style.transform = "translateX(4px)";
                    arrow.style.color = "var(--ember)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.paddingLeft = "0";
                  const v = e.currentTarget.querySelector<HTMLElement>(
                    "[data-value]"
                  );
                  if (v) v.style.color = "var(--text)";
                  const arrow = e.currentTarget.querySelector<HTMLElement>(
                    "[data-arrow]"
                  );
                  if (arrow) {
                    arrow.style.transform = "translateX(0)";
                    arrow.style.color = "var(--text-muted)";
                  }
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: "1.5rem",
                    marginBottom: "0.65rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.62rem",
                      letterSpacing: "0.32em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                    }}
                  >
                    0{i + 1} · {kind}
                  </span>
                  <span
                    data-arrow
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.9rem",
                      transition: "transform 0.3s ease, color 0.3s ease",
                      display: "inline-block",
                    }}
                  >
                    →
                  </span>
                </div>

                <p
                  data-value
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.35rem, 2.4vw, 1.85rem)",
                    fontWeight: 400,
                    color: "var(--text)",
                    lineHeight: 1.25,
                    marginBottom: "0.5rem",
                    transition: "color 0.3s ease",
                    wordBreak: "break-word",
                  }}
                >
                  {value}
                </p>

                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.85rem",
                    lineHeight: 1.7,
                    maxWidth: "42ch",
                  }}
                >
                  {note}
                </p>
              </a>
            ))}

            {/* Hours block */}
            <div
              style={{
                marginTop: "2rem",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "0.62rem",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: "0.6rem",
                  }}
                >
                  Hours
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "1.05rem",
                    color: "var(--text)",
                    lineHeight: 1.5,
                  }}
                >
                  Mon – Fri
                  <br />
                  09 – 17 CET
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.62rem",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: "0.6rem",
                  }}
                >
                  Response
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "1.05rem",
                    color: "var(--text)",
                    lineHeight: 1.5,
                  }}
                >
                  Within
                  <br />
                  24 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back home link */}
        <div
          style={{
            maxWidth: "1180px",
            margin: "5rem auto 0",
            paddingTop: "2.5rem",
            borderTop: "1px solid var(--border)",
          }}
        >
          <Link
            href="/"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--ember)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            ← Back to the forest
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 820px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </main>
  );
}
