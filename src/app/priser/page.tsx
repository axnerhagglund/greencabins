import { getAllPricingPackages } from "@/sanity/queries";

export const revalidate = 3600;

export default async function PriserPage() {
  const packages = await getAllPricingPackages();

  return (
    <section style={{ background: "var(--bg)", color: "var(--text)", minHeight: "70vh", padding: "8rem 2rem" }}>
      <div style={{ maxWidth: "980px", margin: "0 auto" }}>
        <p style={{ color: "var(--ember)", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>
          Priser
        </p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 300 }}>
          Under uppbyggnad
        </h1>
        {packages.length > 0 && (
          <div style={{ display: "grid", gap: "1rem", marginTop: "3rem" }}>
            {packages.map((item) => (
              <article key={item._id} style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 300 }}>
                  {item.title}
                </h2>
                <p style={{ color: "var(--ember)" }}>{item.price}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
