import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cabins } from "@/data/mockupdata/cabins";

export const metadata: Metadata = {
  title: "Cabins",
  description:
    "Browse GreenCabins' small collection of handpicked Swedish forest cabins for quiet weekends, slow mornings, and nights under dark skies.",
  alternates: { canonical: "/cabins" },
};

const featured = cabins[0];
const availableCount = cabins.filter((cabin) => cabin.available).length;
const averageRating =
  cabins.reduce((sum, cabin) => sum + cabin.rating, 0) / cabins.length;

const notes = [
  "Every place is visited before it appears here.",
  "No surprise cleaning fees at the end.",
  "Five cabins is the whole collection, not a preview.",
];

export default function CabinsPage() {
  return (
    <main style={{ background: "var(--bg)", color: "var(--text)" }}>
      <section
        className="cabins-hero"
        style={{
          minHeight: "92vh",
          display: "grid",
          gridTemplateColumns: "minmax(0, 0.92fr) minmax(340px, 1.08fr)",
          background: "var(--bg)",
        }}
      >
        <div
          style={{
            padding: "9rem 2rem 5rem",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <div style={{ maxWidth: "580px", margin: "0 auto" }}>
            <p
              className="animate-fade-up"
              style={{
                color: "var(--ember)",
                fontSize: "0.7rem",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              The full collection
            </p>
            <h1
              className="animate-fade-up-d1"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
                fontWeight: 300,
                lineHeight: 1,
                color: "var(--text)",
                marginBottom: "2rem",
              }}
            >
              Five cabins,
              <br />
              <em style={{ color: "var(--text-mid)" }}>chosen slowly.</em>
            </h1>
            <p
              className="animate-fade-up-d2"
              style={{
                color: "var(--text-mid)",
                fontSize: "1.02rem",
                lineHeight: 1.9,
                maxWidth: "45ch",
                marginBottom: "2.75rem",
              }}
            >
              This is not an inventory feed. It is the small set of places we
              know well enough to describe honestly, from the first coffee spot
              to the last turn on the gravel road.
            </p>
            <div
              className="animate-fade-up-d3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                borderTop: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {[
                { value: cabins.length, label: "Cabins" },
                { value: availableCount, label: "Open now" },
                { value: averageRating.toFixed(1), label: "Avg rating" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  style={{
                    padding: "1.35rem 1rem 1.35rem 0",
                    borderRight: label === "Avg rating" ? "none" : "1px solid var(--border)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2.1rem",
                      lineHeight: 1,
                      color: "var(--text)",
                    }}
                  >
                    {value}
                  </p>
                  <p
                    style={{
                      marginTop: "0.45rem",
                      color: "var(--text-muted)",
                      fontSize: "0.63rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ position: "relative", minHeight: "72vh", overflow: "hidden" }}>
          <Image
            src={featured.imageUrl}
            alt="A quiet wooden cabin surrounded by Swedish forest."
            fill
            sizes="(max-width: 900px) 100vw, 54vw"
            priority
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, color-mix(in oklch, var(--forest-void) 18%, transparent), color-mix(in oklch, var(--forest-void) 60%, transparent))",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "2rem",
              right: "2rem",
              bottom: "2rem",
              color: "oklch(96% 0.012 82)",
              maxWidth: "420px",
            }}
          >
            <p
              style={{
                color: "var(--ember-light)",
                fontSize: "0.65rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                marginBottom: "0.9rem",
              }}
            >
              Start here
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.6rem)",
                fontWeight: 300,
                lineHeight: 1.05,
                marginBottom: "1rem",
              }}
            >
              {featured.name}
            </h2>
            <p style={{ color: "rgba(247,244,239,0.76)", lineHeight: 1.75, fontSize: "0.92rem" }}>
              A gentle first choice for couples who want running water nearby,
              a warm room at night, and mornings that start without an alarm.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "6.5rem 2rem",
          background: "var(--bg-subtle)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          className="cabins-notes"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "0.8fr 1.2fr",
            gap: "5rem",
            alignItems: "start",
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
              How to choose
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.3rem, 4.8vw, 4.5rem)",
                fontWeight: 300,
                lineHeight: 1.05,
                color: "var(--text)",
              }}
            >
              Start with
              <br />
              the kind of quiet.
            </h2>
          </div>
          <div style={{ borderTop: "1px solid var(--border)" }}>
            {notes.map((note, index) => (
              <div
                key={note}
                style={{
                  display: "grid",
                  gridTemplateColumns: "76px 1fr",
                  gap: "2rem",
                  padding: "1.8rem 0",
                  borderBottom: "1px solid var(--border)",
                }}
                className="cabins-note-row"
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    fontStyle: "italic",
                    color: "var(--ember)",
                    lineHeight: 1,
                  }}
                >
                  0{index + 1}
                </span>
                <p style={{ color: "var(--text-mid)", fontSize: "1.05rem", lineHeight: 1.8 }}>
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "7rem 2rem 8rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            className="cabins-list-heading"
            style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "space-between",
              gap: "2rem",
              marginBottom: "4rem",
              paddingBottom: "2.25rem",
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
                Browse
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 5.4vw, 5rem)",
                  fontWeight: 300,
                  lineHeight: 1.05,
                }}
              >
                Pick the cabin
                <br />
                <em style={{ color: "var(--text-mid)" }}>that matches the weekend.</em>
              </h2>
            </div>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.9rem",
                lineHeight: 1.8,
                maxWidth: "320px",
                textAlign: "right",
              }}
              className="cabins-list-intro"
            >
              Compare by mood first, then by beds and price. The details page
              carries the practical bits when one feels right.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
            {cabins.map((cabin, index) => (
              <article
                key={cabin.id}
                className="catalogue-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: index % 2 === 0 ? "0.86fr 1.14fr" : "1.14fr 0.86fr",
                  minHeight: "430px",
                  background: "var(--bg-card)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    minHeight: "320px",
                    order: index % 2 === 0 ? 0 : 2,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={cabin.imageUrl}
                    alt={`${cabin.name} surrounded by quiet Swedish nature.`}
                    fill
                    sizes="(max-width: 820px) 100vw, 46vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, color-mix(in oklch, var(--forest-void) 52%, transparent), transparent 55%)",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      left: "1.5rem",
                      bottom: "1.5rem",
                      color: "oklch(96% 0.012 82)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                    }}
                  >
                    {cabin.available ? "Available" : "Ask for next opening"}
                  </span>
                </div>

                <div
                  style={{
                    padding: "3rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "2.5rem",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        gap: "1.5rem",
                        marginBottom: "1.4rem",
                      }}
                    >
                      <p
                        style={{
                          color: "var(--ember)",
                          fontSize: "0.68rem",
                          letterSpacing: "0.28em",
                          textTransform: "uppercase",
                        }}
                      >
                        0{index + 1} / 05
                      </p>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
                        {cabin.rating} rating
                      </p>
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(2.1rem, 4.2vw, 4rem)",
                        fontWeight: 300,
                        lineHeight: 1.05,
                        marginBottom: "1.35rem",
                      }}
                    >
                      {cabin.name}
                    </h3>
                    <p
                      style={{
                        color: "var(--text-mid)",
                        fontSize: "0.98rem",
                        lineHeight: 1.85,
                        maxWidth: "58ch",
                      }}
                    >
                      {cabin.description}
                    </p>
                  </div>

                  <div>
                    <div
                      className="catalogue-meta"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                        gap: "1px",
                        background: "var(--border)",
                        marginBottom: "1.5rem",
                      }}
                    >
                      {[
                        { label: "Night", value: `${cabin.pricePerNight.toLocaleString("sv")} kr` },
                        { label: "Guests", value: cabin.maxGuests },
                        { label: "Bedrooms", value: cabin.bedrooms },
                      ].map(({ label, value }) => (
                        <div key={label} style={{ background: "var(--bg-card)", padding: "1rem" }}>
                          <p
                            style={{
                              fontFamily: "var(--font-display)",
                              fontSize: "1.45rem",
                              color: "var(--text)",
                              lineHeight: 1,
                            }}
                          >
                            {value}
                          </p>
                          <p
                            style={{
                              marginTop: "0.45rem",
                              color: "var(--text-muted)",
                              fontSize: "0.62rem",
                              letterSpacing: "0.18em",
                              textTransform: "uppercase",
                            }}
                          >
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
                      <Link
                        href={`/cabins/${cabin.slug}`}
                        style={{
                          padding: "0.9rem 1.45rem",
                          border: "1px solid var(--ember)",
                          color: "var(--ember)",
                          textDecoration: "none",
                          fontSize: "0.68rem",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          borderRadius: "2px",
                        }}
                      >
                        View cabin
                      </Link>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>
                        {cabin.amenities.slice(0, 3).join(" · ")}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "7rem 2rem",
          background: "var(--forest-void)",
          color: "oklch(95% 0.014 82)",
        }}
      >
        <div
          className="cabins-cta"
          style={{
            maxWidth: "980px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "3rem",
            alignItems: "end",
          }}
        >
          <div>
            <p
              style={{
                color: "var(--ember-light)",
                fontSize: "0.7rem",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Need help choosing?
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 5vw, 4.8rem)",
                fontWeight: 300,
                lineHeight: 1.08,
                maxWidth: "11ch",
              }}
            >
              Tell us what you want to disappear from.
            </h2>
          </div>
          <Link
            href="/contact"
            style={{
              color: "oklch(96% 0.012 82)",
              border: "1px solid rgba(247,244,239,0.42)",
              padding: "1rem 1.6rem",
              textDecoration: "none",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              borderRadius: "2px",
              whiteSpace: "nowrap",
            }}
          >
            Write to us
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 920px) {
          .cabins-hero,
          .cabins-notes,
          .cabins-cta {
            grid-template-columns: 1fr !important;
          }
          .cabins-list-heading {
            align-items: start !important;
            flex-direction: column !important;
          }
          .cabins-list-intro {
            text-align: left !important;
          }
          .catalogue-row {
            grid-template-columns: 1fr !important;
          }
          .catalogue-row > div:first-child {
            order: 0 !important;
          }
        }
        @media (max-width: 640px) {
          .cabins-note-row,
          .catalogue-meta {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
