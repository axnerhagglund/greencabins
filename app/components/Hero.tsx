import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/08-night.jpg)",
          transform: "scale(1.04)",
        }}
      />

      {/* Gentle dark wash — just enough to anchor the text */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(7,12,6,0.08)" }}
      />
      {/* Bottom gradient only where text lives */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 55%, rgba(7,12,6,0.45) 75%, rgba(7,12,6,0.72) 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative h-full flex flex-col justify-end pb-20 px-8"
        style={{ maxWidth: "1280px", margin: "0 auto" }}
      >
        <p
          className="animate-fade-up text-xs uppercase tracking-widest mb-5"
          style={{ color: "var(--ember)", letterSpacing: "0.3em" }}
        >
          Swedish Forest Retreats
        </p>

        <h1
          className="animate-fade-up-d1 leading-none mb-6"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.5rem, 9vw, 8rem)",
            fontWeight: 300,
            color: "#ffffff",
            textShadow: "0 2px 24px rgba(0,0,0,0.5)",
          }}
        >
          Where the
          <br />
          <em style={{ color: "rgba(255,255,255,0.82)" }}>forest calls.</em>
        </h1>

        <p
          className="animate-fade-up-d2 text-lg leading-relaxed mb-10"
          style={{ color: "#A8B8A4", maxWidth: "420px" }}
        >
          Handpicked cabin retreats in the Swedish wilderness.
          Silence, stars, and the sound of running water.
        </p>

        <div className="animate-fade-up-d3">
          <Button title="Explore Cabins" href="100vh" buttonType="primary" />
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="animate-fade-in absolute bottom-8 right-8"
        style={{ color: "var(--muted)" }}
      >
        <div
          className="flex flex-col items-center gap-3"
          style={{ fontSize: "10px", letterSpacing: "0.3em" }}
        >
          <span className="uppercase tracking-widest text-xs">Scroll</span>
          <div
            style={{
              width: "1px",
              height: "48px",
              background:
                "linear-gradient(to bottom, var(--muted), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
