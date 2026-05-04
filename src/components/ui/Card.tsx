import type { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "4px",
        padding: "1.5rem",
      }}
    >
      {children}
    </div>
  );
}
