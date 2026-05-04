import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CabinType } from "@/data/mockupdata/cabins";

function Cabin({ cabin }: { cabin: CabinType }) {
  return (
    <article
      className="group"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "4px",
        overflow: "hidden",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(28,26,23,0.10)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
        <Image
          src={cabin.imageUrl}
          alt={cabin.name}
          fill
          sizes="(max-width: 720px) 100vw, 340px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {!cabin.available && (
          <span
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "0.3rem 0.7rem",
              background: "rgba(247,244,239,0.92)",
              color: "var(--text-muted)",
              border: "1px solid var(--border)",
              borderRadius: "2px",
            }}
          >
            Unavailable
          </span>
        )}
        <div
          style={{
            position: "absolute",
            bottom: "1rem",
            left: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            background: "rgba(247,244,239,0.88)",
            padding: "0.25rem 0.6rem",
            borderRadius: "2px",
          }}
        >
          <span style={{ color: "var(--ember)", fontSize: "0.8rem" }}>★</span>
          <span style={{ color: "var(--text)", fontSize: "0.8rem", fontWeight: 600 }}>{cabin.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.6rem" }}>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.6rem",
              fontWeight: 400,
              color: "var(--text)",
              lineHeight: 1.2,
            }}
          >
            {cabin.name}
          </h3>
          <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "1rem" }}>
            <p style={{ color: "var(--ember)", fontSize: "1.1rem", fontWeight: 600 }}>
              {cabin.pricePerNight.toLocaleString("sv")}
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.65rem", letterSpacing: "0.08em" }}>kr / natt</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "1rem", fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "1rem", letterSpacing: "0.04em" }}>
          <span>{cabin.bedrooms} sovrum</span>
          <span>·</span>
          <span>upp till {cabin.maxGuests} gäster</span>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
          {cabin.amenities.slice(0, 3).map((a) => (
            <span
              key={a}
              style={{
                fontSize: "0.65rem",
                color: "var(--text-mid)",
                padding: "0.3rem 0.65rem",
                background: "var(--bg-subtle)",
                border: "1px solid var(--border)",
                borderRadius: "2px",
                letterSpacing: "0.04em",
              }}
            >
              {a}
            </span>
          ))}
          {cabin.amenities.length > 3 && (
            <span style={{ fontSize: "0.65rem", color: "var(--text-muted)", padding: "0.3rem 0.5rem" }}>
              +{cabin.amenities.length - 3}
            </span>
          )}
        </div>

        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Link
            href={`/cabins/${cabin.slug}`}
            style={{
              flex: 1,
              textAlign: "center",
              padding: "0.7rem",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              border: "1px solid var(--border)",
              color: "var(--text-mid)",
              borderRadius: "2px",
              transition: "all 0.2s",
              display: "block",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--ember)";
              e.currentTarget.style.color = "var(--ember)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-mid)";
            }}
          >
            Details
          </Link>
          {cabin.available && (
            <button
              style={{
                flex: 1,
                padding: "0.7rem",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                background: "var(--ember)",
                color: "#fff",
                border: "none",
                borderRadius: "2px",
                cursor: "pointer",
                fontWeight: 600,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--ember-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--ember)")}
            >
              Book
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default Cabin;
