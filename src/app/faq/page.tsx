import FaqPageClient from "@/components/ui/FaqPageClient";
import { getAllFaqItems } from "@/sanity/queries";

export const revalidate = 3600;

export default async function FaqPage() {
  const items = await getAllFaqItems();

  return (
    <section style={{ background: "var(--bg)", color: "var(--text)", minHeight: "70vh", padding: "8rem 2rem" }}>
      <div style={{ maxWidth: "980px", margin: "0 auto" }}>
        <p style={{ color: "var(--ember)", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>
          FAQ
        </p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 300 }}>
          Frågor och svar
        </h1>
        <div style={{ marginTop: "3rem" }}>
          <FaqPageClient items={items} />
        </div>
      </div>
    </section>
  );
}
