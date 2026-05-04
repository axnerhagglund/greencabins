import type { ReactNode } from "react";

export default function ScrollReveal({ children }: { children: ReactNode }) {
  return <div className="animate-fade-up">{children}</div>;
}
