"use client";
import useScreenSize from "./hooks/useScreenSize";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const screen = useScreenSize();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="flex flex-row justify-between items-center h-16 z-50 fixed w-full transition-all duration-500"
        style={{
          padding: "0 2rem",
          background: scrolled ? "rgba(247,244,239,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
        }}
      >
        <Link href="/">
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.25rem",
              fontWeight: 400,
              letterSpacing: "0.08em",
              color: scrolled ? "var(--text)" : "#ffffff",
            }}
          >
            Green<span style={{ color: "var(--ember)" }}>Cabins</span>
          </span>
        </Link>

        {(screen?.width ?? 0) >= 724 && (
          <nav className="flex items-center gap-8">
            {[
              { label: "Cabins", href: "/cabins" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                style={{
                  color: scrolled ? "var(--text-muted)" : "rgba(255,255,255,0.75)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = scrolled ? "var(--text)" : "#fff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = scrolled ? "var(--text-muted)" : "rgba(255,255,255,0.75)")
                }
              >
                {label}
              </Link>
            ))}
            <Link
              href="/cabins"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "0.55rem 1.4rem",
                border: `1px solid ${scrolled ? "var(--ember)" : "rgba(255,255,255,0.6)"}`,
                color: scrolled ? "var(--ember)" : "#fff",
                background: "transparent",
                cursor: "pointer",
                borderRadius: "2px",
                transition: "all 0.3s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--ember)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = "var(--ember)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = scrolled ? "var(--ember)" : "#fff";
                e.currentTarget.style.borderColor = scrolled ? "var(--ember)" : "rgba(255,255,255,0.6)";
              }}
            >
              Browse Cabins
            </Link>
          </nav>
        )}

        {(screen?.width ?? 0) < 724 && (
          <button
            onClick={() => setToggle((p) => !p)}
            style={{
              color: scrolled ? "var(--text)" : "#fff",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            {toggle ? "Close" : "Menu"}
          </button>
        )}
      </header>

      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="fixed inset-0 z-40"
          style={{ background: "rgba(28,26,23,0.4)", backdropFilter: "blur(4px)" }}
        />
      )}

      {toggle && (
        <nav
          className="fixed bottom-0 w-full z-50 flex flex-col gap-6 px-8 py-10"
          style={{
            background: "var(--bg)",
            borderTop: "1px solid var(--border)",
          }}
        >
          {[{ label: "Home", href: "/" }, { label: "Cabins", href: "/cabins" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }].map(
            ({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setToggle(false)}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: "var(--text)",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            )
          )}
        </nav>
      )}
    </>
  );
}

export default Header;
