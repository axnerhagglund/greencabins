"use client";
import React, { useMemo } from "react";
import { useContext } from "react";
import { Cabinscontext } from "@/app/components/DataProvider";
import Image from "next/image";
import Link from "next/link";

function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const cabins = useContext(Cabinscontext);
  const cabin = useMemo(
    () => (cabins ? cabins.find((c) => c.slug === slug) : undefined),
    [cabins, slug],
  );
  if (!cabins) return null;
  if (!cabin) return null;

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)" }}>
      {/* Hero image */}
      <div style={{ position: "relative", height: "55vh", overflow: "hidden" }}>
        <Image src={cabin.imageUrl} alt={cabin.name} fill sizes="100vw" className="object-cover" priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(7,12,6,0.3) 0%, transparent 50%, var(--bg) 100%)" }} />
        <Link
          href="/"
          style={{ position: "absolute", top: "5.5rem", left: "2rem", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", textDecoration: "none", transition: "opacity 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          ← All Cabins
        </Link>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem 8rem", marginTop: "-2rem", position: "relative", zIndex: 10 }}>
        {/* Title */}
        <div style={{ marginBottom: "3rem", paddingBottom: "2.5rem", borderBottom: "1px solid var(--border)" }}>
          <p style={{ color: cabin.available ? "var(--ember)" : "var(--text-muted)", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem" }}>
            {cabin.available ? "Available Now" : "Currently Unavailable"}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem" }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem,8vw,6rem)", fontWeight: 300, lineHeight: 1.05, color: "var(--text)" }}>
              {cabin.name}
            </h1>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 400, color: "var(--ember)", lineHeight: 1 }}>
                {cabin.pricePerNight.toLocaleString("sv")}
                <span style={{ fontSize: "1rem", color: "var(--text-muted)", marginLeft: "0.35rem" }}>kr</span>
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.72rem", letterSpacing: "0.12em", marginTop: "0.25rem" }}>per night</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem", marginBottom: "3rem" }}>
          {[{ label: "Bedrooms", value: cabin.bedrooms }, { label: "Max Guests", value: cabin.maxGuests }, { label: "Rating", value: `★ ${cabin.rating}` }].map(({ label, value }) => (
            <div key={label} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", padding: "1.5rem", textAlign: "center", borderRadius: "4px" }}>
              <p style={{ color: "var(--ember)", fontSize: "1.5rem", fontFamily: "var(--font-display)", fontWeight: 400, marginBottom: "0.35rem" }}>{value}</p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <p style={{ color: "var(--text-mid)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "640px", marginBottom: "3rem" }}>{cabin.description}</p>

        {/* Amenities */}
        <div style={{ marginBottom: "3rem" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1rem" }}>Included Amenities</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {cabin.amenities.map((a) => (
              <span key={a} style={{ fontSize: "0.8rem", color: "var(--text-mid)", padding: "0.5rem 1rem", background: "var(--bg-subtle)", border: "1px solid var(--border)", borderRadius: "2px" }}>{a}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        {cabin.available ? (
          <button
            style={{ padding: "1rem 3.5rem", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", background: "var(--ember)", color: "#fff", border: "none", borderRadius: "2px", cursor: "pointer", fontWeight: 600, transition: "background 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--ember-light)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--ember)")}
          >
            Reserve This Cabin
          </button>
        ) : (
          <div style={{ display: "inline-block", padding: "1rem 2rem", border: "1px solid var(--border)", color: "var(--text-muted)", fontSize: "0.8rem", letterSpacing: "0.1em", borderRadius: "2px" }}>
            Currently unavailable — check back soon
          </div>
        )}
      </div>
    </main>
  );
}

export default Page;
