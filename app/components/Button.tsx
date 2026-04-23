"use client";
import React, { FormEvent } from "react";
import Link from "next/link";

type ButtonProps = {
  title: string;
  href: string;
  buttonType: "primary" | "secondary";
};

function Button({ title, href, buttonType }: ButtonProps) {
  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    if (href === "100vh") {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    } else if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  };

  return (
    <Link href={href}>
      <button
        style={{
          cursor: "pointer",
          fontSize: "0.75rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          transition: "all 0.3s ease",
          borderRadius: "2px",
          padding: buttonType === "primary" ? "0.85rem 2rem" : "0.7rem 1.5rem",
          border: buttonType === "primary" ? "1px solid rgba(255,255,255,0.7)" : "1px solid var(--border)",
          color: buttonType === "primary" ? "#fff" : "var(--text-mid)",
          background: "transparent",
        }}
        onClick={handleClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = buttonType === "primary" ? "#fff" : "var(--bg-subtle)";
          e.currentTarget.style.color = buttonType === "primary" ? "var(--text)" : "var(--text)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = buttonType === "primary" ? "#fff" : "var(--text-mid)";
        }}
      >
        {title}
      </button>
    </Link>
  );
}

export default Button;
