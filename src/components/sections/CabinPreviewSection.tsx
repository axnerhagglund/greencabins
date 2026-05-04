import Image from "next/image";
import Link from "next/link";
import { cabins } from "@/data/mockupdata/cabins";

const featuredCabins = cabins.slice(0, 3);

export default function CabinPreviewSection() {
  return (
    <section
      style={{
        background: "var(--bg)",
        padding: "7rem 2rem 8rem",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          className="home-cabin-heading"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "end",
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
              Cabins worth slowing for
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 5.8vw, 5.6rem)",
                fontWeight: 300,
                lineHeight: 1.04,
                color: "var(--text)",
              }}
            >
              Not many.
              <br />
              <em style={{ color: "var(--text-mid)" }}>Only the right ones.</em>
            </h2>
          </div>
          <div style={{ maxWidth: "420px", justifySelf: "end" }}>
            <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.85 }}>
              We keep the collection deliberately small so each place can be
              described from memory, not scraped from a listing form.
            </p>
            <Link
              href="/cabins"
              style={{
                display: "inline-block",
                marginTop: "2rem",
                color: "var(--ember)",
                textDecoration: "none",
                fontSize: "0.7rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              See all cabins
            </Link>
          </div>
        </div>

        <div
          className="home-cabin-preview"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          <article
            style={{
              background: "var(--bg-card)",
              minHeight: "620px",
              display: "grid",
              gridTemplateRows: "1fr auto",
            }}
          >
            <div style={{ position: "relative", minHeight: "420px", overflow: "hidden" }}>
              <Image
                src={featuredCabins[0].imageUrl}
                alt={`${featuredCabins[0].name} tucked into quiet forest.`}
                fill
                sizes="(max-width: 900px) 100vw, 60vw"
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, color-mix(in oklch, var(--forest-void) 58%, transparent), transparent 62%)",
                }}
              />
              <p
                style={{
                  position: "absolute",
                  left: "1.5rem",
                  bottom: "1.5rem",
                  color: "oklch(95% 0.012 82)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                }}
              >
                Good first weekend
              </p>
            </div>
            <div style={{ padding: "2.25rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "2rem",
                  alignItems: "baseline",
                  marginBottom: "1rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 4vw, 3.4rem)",
                    fontWeight: 300,
                    lineHeight: 1,
                  }}
                >
                  {featuredCabins[0].name}
                </h3>
                <p style={{ color: "var(--ember)", fontWeight: 600 }}>
                  {featuredCabins[0].pricePerNight.toLocaleString("sv")} kr
                </p>
              </div>
              <p style={{ color: "var(--text-mid)", lineHeight: 1.75, maxWidth: "58ch" }}>
                A cabin for people who want the first night to go quiet quickly:
                fire lit, water moving nearby, phones forgotten on the table.
              </p>
            </div>
          </article>

          <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: "1px" }}>
            {featuredCabins.slice(1).map((cabin) => (
              <Link
                href={`/cabins/${cabin.slug}`}
                key={cabin.id}
                style={{
                  position: "relative",
                  minHeight: "300px",
                  overflow: "hidden",
                  color: "oklch(95% 0.012 82)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "end",
                }}
              >
                <Image
                  src={cabin.imageUrl}
                  alt={`${cabin.name} in the Swedish landscape.`}
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, color-mix(in oklch, var(--forest-void) 72%, transparent), transparent 70%)",
                  }}
                />
                <div style={{ position: "relative", padding: "1.75rem", width: "100%" }}>
                  <p
                    style={{
                      color: "var(--ember-light)",
                      fontSize: "0.62rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      marginBottom: "0.7rem",
                    }}
                  >
                    {cabin.maxGuests} guests · {cabin.bedrooms} bedroom{cabin.bedrooms > 1 ? "s" : ""}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2.2rem",
                      fontWeight: 300,
                      lineHeight: 1.05,
                    }}
                  >
                    {cabin.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .home-cabin-heading,
          .home-cabin-preview {
            grid-template-columns: 1fr !important;
          }
          .home-cabin-heading > div:last-child {
            justify-self: start !important;
          }
        }
      `}</style>
    </section>
  );
}
