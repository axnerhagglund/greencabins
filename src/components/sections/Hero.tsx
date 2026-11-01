"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const slides = [
  "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1800&q=82",
  "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1800&q=82",
  "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1800&q=82",
  "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1800&q=82",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=82",
];

const INTERVAL_MS = 6000;
const FADE_MS = 1800;

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((p) => (p + 1) % slides.length),
      INTERVAL_MS
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slideshow — stacked layers, crossfade via opacity */}
      <div className="absolute inset-0">
        {slides.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${src})`,
              opacity: i === index ? 1 : 0,
              transform: "scale(1.04)",
              transition: `opacity ${FADE_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
              filter: "brightness(0.92)",
              willChange: "opacity",
            }}
          />
        ))}
      </div>

      {/* Top, left and bottom washes keep the header and copy legible on every slide */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in oklch, var(--forest-void) 72%, transparent) 0, color-mix(in oklch, var(--forest-void) 52%, transparent) 64px, transparent 180px), linear-gradient(to right, color-mix(in oklch, var(--forest-void) 60%, transparent) 0%, color-mix(in oklch, var(--forest-void) 50%, transparent) 40%, transparent 78%), linear-gradient(to bottom, transparent 28%, color-mix(in oklch, var(--forest-void) 55%, transparent) 62%, color-mix(in oklch, var(--forest-void) 80%, transparent) 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative h-full flex flex-col justify-end pb-20 px-8"
        style={{ maxWidth: "1280px", margin: "0 auto" }}
      >
        <h1
          className="animate-fade-up-d1 leading-none mb-6"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, min(9vw, 14vh), 7rem)",
            fontWeight: 300,
            color: "oklch(97% 0.01 82)",
            textShadow: "0 2px 24px rgba(0,0,0,0.5)",
          }}
        >
          Where the
          <br />
          <em style={{ color: "oklch(88% 0.025 118)" }}>forest calls.</em>
        </h1>

        <p
          className="animate-fade-up-d2 text-lg leading-relaxed mb-10"
          style={{ color: "oklch(95% 0.012 100)", maxWidth: "420px", textShadow: "0 1px 12px rgba(0,0,0,0.45)" }}
        >
          Handpicked cabin retreats in the Swedish wilderness.
          Silence, stars, and the sound of running water.
        </p>

        <div className="animate-fade-up-d3">
          <Button title="Explore Cabins" href="100vh" buttonType="primary" />
        </div>
      </div>

      {/* Slide indicator dots */}
      <div
        className="absolute bottom-8 left-8 flex items-center gap-2 z-10"
        aria-hidden="true"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}`}
            style={{
              width: i === index ? "28px" : "8px",
              height: "2px",
              background:
                i === index ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.4)",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "width 0.5s ease, background 0.4s ease",
            }}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div
        className="animate-fade-in absolute bottom-8 right-8"
        style={{ color: "rgba(247,244,239,0.72)" }}
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
                "linear-gradient(to bottom, rgba(247,244,239,0.72), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
