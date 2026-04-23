"use client";
import React from "react";
import Cabin from "./Cabin";
import { useContext } from "react";
import { Cabinscontext } from "./DataProvider";

function CabinsList() {
  const cabins = useContext(Cabinscontext);

  if (!cabins)
    return (
      <div style={{ minHeight: "40vh", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)" }}>
        No cabins found.
      </div>
    );

  return (
    <section style={{ background: "var(--bg)", padding: "6rem 2rem 8rem", maxWidth: "1280px", margin: "0 auto" }}>
      {/* Section header */}
      <div
        style={{
          marginBottom: "4rem",
          paddingBottom: "2.5rem",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <p style={{ color: "var(--ember)", fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase" }}>
          Our Retreats
        </p>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem,6vw,5rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              color: "var(--text)",
            }}
          >
            Available<br />
            <em style={{ color: "var(--text-mid)", fontStyle: "italic" }}>Cabins</em>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", maxWidth: "300px", lineHeight: 1.7, textAlign: "right" }}>
            Each cabin is handpicked for its character, location,
            and connection to the surrounding nature.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {cabins.map((cabin) => (
          <Cabin cabin={cabin} key={cabin.id} />
        ))}
      </div>
    </section>
  );
}

export default CabinsList;
