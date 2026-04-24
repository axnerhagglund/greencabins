"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

const pillars = [
  {
    num: "01",
    label: "Handpicked",
    body: "Every cabin is personally visited before it ever reaches our site. If we wouldn't sleep there ourselves, it doesn't go on the page.",
  },
  {
    num: "02",
    label: "Nature-first",
    body: "No resorts. No conference wings. No buffet breakfasts. Just old forest, clean water, and a sky you can actually read stars from.",
  },
  {
    num: "03",
    label: "Honest pricing",
    body: "The price you see is the price you pay. No cleaning fee surprises, no service charges added at the last step of checkout.",
  },
  {
    num: "04",
    label: "Small & slow",
    body: "We grow by one or two cabins a year, never more. We'd rather know each place by heart than operate a catalogue we've never slept in.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "A cabin in Värmland",
    body: "Emil and Ida spend a week at a friend's off-grid cabin near the Klarälven river. They come back wondering why finding places like it online is so difficult.",
  },
  {
    year: "2020",
    title: "The first three",
    body: "They convince three cabin owners to list with them. The site is a single scrollable page built on a kitchen table in Göteborg.",
  },
  {
    year: "2022",
    title: "Five cabins, zero chains",
    body: "The catalogue passes five cabins — all independently owned, all visited in person at least twice. They turn down every investor that asks about scale.",
  },
  {
    year: "2024",
    title: "Still small, on purpose",
    body: "GreenCabins remains a two-person operation with a trusted network of hosts. The goal has not changed: make the silence easier to find.",
  },
];

const founders = [
  {
    name: "Elin Lindqvist",
    role: "Co-founder · Routes & Hosts",
    image: "/founder-elin.jpg",
    quote:
      "I grew up in Dalarna, forty minutes of gravel from the nearest shop. I forgot how much I needed that quiet until I moved to the city.",
  },
  {
    name: "Ida Bergström",
    role: "Co-founder · Design & Stays",
    image: "/founder-ida.jpg",
    quote:
      "A good cabin isn't about linen thread count — it's about what happens when you put your phone down and realize you don't miss it.",
  },
];

export default function AboutPage() {
  return (
    <main style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden" style={{ height: "82vh" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/04-night.jpg)", transform: "scale(1.04)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(7,12,6,0.55) 0%, rgba(7,12,6,0.15) 40%, rgba(7,12,6,0.35) 70%, var(--bg) 100%)",
          }}
        />

        <Link
          href="/"
          className="animate-fade-in"
          style={{
            position: "absolute",
            top: "5.5rem",
            left: "2rem",
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.85)",
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.65")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          ← Back home
        </Link>

        <div
          className="relative h-full flex flex-col justify-end pb-24 px-8"
          style={{ maxWidth: "1280px", margin: "0 auto" }}
        >
          <p
            className="animate-fade-up"
            style={{
              color: "var(--ember-light)",
              fontSize: "0.7rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            Our Story · Since 2019
          </p>

          <h1
            className="animate-fade-up-d1 leading-none"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 8.5vw, 7.5rem)",
              fontWeight: 300,
              color: "#ffffff",
              textShadow: "0 2px 24px rgba(0,0,0,0.45)",
              maxWidth: "14ch",
              lineHeight: 1.02,
            }}
          >
            Two people,
            <br />
            <em style={{ color: "rgba(255,255,255,0.78)" }}>five cabins,</em>
            <br />
            one forest.
          </h1>

          <p
            className="animate-fade-up-d2"
            style={{
              color: "rgba(247,244,239,0.82)",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              marginTop: "2rem",
              maxWidth: "460px",
            }}
          >
            GreenCabins is a small Swedish outfit for people who want to vanish
            into the woods without compromising on the place they sleep.
          </p>
        </div>
      </section>

      {/* ---------- NARRATIVE ---------- */}
      <section
        style={{
          borderBottom: "1px solid var(--border)",
          padding: "7rem 2rem 6rem",
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
          className="about-narrative"
        >
          <div>
            <p
              style={{
                color: "var(--ember)",
                fontSize: "0.7rem",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              The story
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 3.8vw, 3.4rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--text)",
              }}
            >
              Where do you go
              <br />
              <em style={{ color: "var(--text-mid)" }}>to actually</em>
              <br />
              disconnect?
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            <p
              style={{
                color: "var(--text)",
                fontSize: "1.15rem",
                lineHeight: 1.85,
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontStyle: "italic",
                maxWidth: "640px",
              }}
            >
              It started with a question we couldn&apos;t stop asking — the
              kind of question that only gets louder the longer you live in a
              city.
            </p>

            <p
              style={{
                color: "var(--text-mid)",
                fontSize: "1rem",
                lineHeight: 1.95,
                maxWidth: "640px",
              }}
            >
              We kept finding the same thing online: &quot;cabins&quot; that
              were really hotels with wooden walls, listings with eight-point
              fee breakdowns at checkout, photos that looked nothing like the
              place you arrived at. We wanted something different, so we built
              it the slow way.
            </p>

            <p
              style={{
                color: "var(--text-mid)",
                fontSize: "1rem",
                lineHeight: 1.95,
                maxWidth: "640px",
              }}
            >
              Each cabin on GreenCabins is independently owned, personally
              visited, and described in our own words. The photos are taken
              when we visit. The hosts have our phone numbers. It is not the
              biggest catalogue in Sweden and it is not trying to be.
            </p>

            <div
              style={{
                marginTop: "1.25rem",
                paddingTop: "1.75rem",
                borderTop: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                gap: "0.9rem",
              }}
            >
              <span
                style={{
                  width: "32px",
                  height: "1px",
                  background: "var(--ember)",
                }}
              />
              <span
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                Emil &amp; Ida · Göteborg
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PILLARS ---------- */}
      <section
        style={{
          background: "var(--bg-subtle)",
          borderBottom: "1px solid var(--border)",
          padding: "7rem 2rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "2rem",
              marginBottom: "4.5rem",
              paddingBottom: "2.5rem",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div>
              <p
                style={{
                  color: "var(--ember)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  marginBottom: "1.25rem",
                }}
              >
                What we stand for
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                  fontWeight: 300,
                  lineHeight: 1.05,
                  color: "var(--text)",
                }}
              >
                Four things, <em style={{ color: "var(--text-mid)" }}>nothing more.</em>
              </h2>
            </div>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.9rem",
                lineHeight: 1.75,
                maxWidth: "320px",
                textAlign: "right",
              }}
              className="pillar-desc"
            >
              Everything we do gets measured against this short list. It&apos;s
              the only brief we&apos;ve ever written.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1px",
              background: "var(--border)",
            }}
            className="pillar-grid"
          >
            {pillars.map(({ num, label, body }) => (
              <article
                key={num}
                style={{
                  background: "var(--bg-subtle)",
                  padding: "2.75rem 2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "var(--bg-card)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "var(--bg-subtle)")
                }
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2.2rem",
                      fontWeight: 300,
                      color: "var(--ember)",
                      lineHeight: 1,
                    }}
                  >
                    {num}
                  </span>
                  <span
                    style={{
                      flex: 1,
                      height: "1px",
                      background: "var(--border)",
                      marginLeft: "1rem",
                      marginRight: "1rem",
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
                    Value
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.6rem, 2.4vw, 2rem)",
                    fontWeight: 400,
                    color: "var(--text)",
                    lineHeight: 1.15,
                  }}
                >
                  {label}
                </h3>

                <p
                  style={{
                    color: "var(--text-mid)",
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                    maxWidth: "38ch",
                  }}
                >
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TIMELINE ---------- */}
      <section
        style={{
          padding: "7rem 2rem",
          borderBottom: "1px solid var(--border)",
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
          className="about-narrative"
        >
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
              A short timeline
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 3.8vw, 3.4rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--text)",
                marginBottom: "1.5rem",
              }}
            >
              Slow growth,
              <br />
              <em style={{ color: "var(--text-mid)" }}>on purpose.</em>
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.88rem",
                lineHeight: 1.75,
                maxWidth: "260px",
              }}
            >
              Five years, five cabins, zero shareholders. We like it this way.
            </p>
          </div>

          <div>
            {timeline.map(({ year, title, body }, i) => (
              <div
                key={year}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: "2.5rem",
                  padding: "2.25rem 0",
                  borderTop: i === 0 ? "1px solid var(--border)" : "none",
                  borderBottom: "1px solid var(--border)",
                }}
                className="timeline-row"
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: "var(--ember)",
                    lineHeight: 1,
                    letterSpacing: "0.02em",
                  }}
                >
                  {year}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                      fontWeight: 400,
                      color: "var(--text)",
                      marginBottom: "0.6rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-mid)",
                      fontSize: "0.95rem",
                      lineHeight: 1.85,
                      maxWidth: "56ch",
                    }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FOUNDERS ---------- */}
      <section
        style={{
          background: "var(--bg-subtle)",
          borderBottom: "1px solid var(--border)",
          padding: "7rem 2rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p
            style={{
              color: "var(--ember)",
              fontSize: "0.7rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: "3rem",
            }}
          >
            The Two Of Us
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "start",
            }}
            className="founders-grid"
          >
            {founders.map(({ name, role, quote, image }, i) => (
              <article
                key={name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.75rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4 / 5",
                    overflow: "hidden",
                    borderRadius: "2px",
                    background: "var(--forest-deep)",
                  }}
                >
                  <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width: 780px) 100vw, 560px"
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    style={{ objectPosition: "center 30%" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom, transparent 50%, rgba(7,12,6,0.55) 100%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1.5rem",
                      left: "1.5rem",
                      right: "1.5rem",
                      color: "#fff",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.65rem",
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        color: "var(--ember-light)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      0{i + 1} / 02
                    </p>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "2rem",
                        fontWeight: 400,
                        lineHeight: 1.1,
                      }}
                    >
                      {name}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        letterSpacing: "0.12em",
                        color: "rgba(255,255,255,0.75)",
                        marginTop: "0.35rem",
                      }}
                    >
                      {role}
                    </p>
                  </div>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "1.15rem",
                    lineHeight: 1.6,
                    color: "var(--text)",
                    paddingLeft: "1.25rem",
                    borderLeft: "1px solid var(--ember)",
                    maxWidth: "36ch",
                  }}
                >
                  &ldquo;{quote}&rdquo;
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CLOSING CTA ---------- */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "9rem 2rem",
          background: "var(--forest-void)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/08-night.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.35,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--forest-void) 0%, rgba(7,12,6,0.4) 50%, var(--forest-void) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: "880px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "var(--ember-light)",
              fontSize: "0.7rem",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}
          >
            Ready when you are
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.6rem, 6vw, 5rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "#ffffff",
              marginBottom: "2rem",
            }}
          >
            The cabins are out there —
            <br />
            <em style={{ color: "rgba(255,255,255,0.65)" }}>
              the forest is already waiting.
            </em>
          </h2>
          <p
            style={{
              color: "rgba(247,244,239,0.7)",
              fontSize: "1rem",
              lineHeight: 1.85,
              maxWidth: "520px",
              margin: "0 auto 3rem",
            }}
          >
            Browse the five cabins we currently care about, or write us an
            email. We answer every one ourselves.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/"
              style={{
                padding: "1rem 2.25rem",
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                background: "var(--ember)",
                color: "#fff",
                border: "1px solid var(--ember)",
                borderRadius: "2px",
                textDecoration: "none",
                fontWeight: 600,
                transition: "background 0.3s, color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--ember-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--ember)";
              }}
            >
              Browse Cabins
            </Link>
            <a
              href="mailto:hello@greencabins.se"
              style={{
                padding: "1rem 2.25rem",
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                background: "transparent",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.4)",
                borderRadius: "2px",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = "var(--text)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#fff";
              }}
            >
              Write to us
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          .pillar-desc { text-align: left !important; }
        }
        @media (max-width: 780px) {
          .about-narrative {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .pillar-grid {
            grid-template-columns: 1fr !important;
          }
          .founders-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .timeline-row {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </main>
  );
}
