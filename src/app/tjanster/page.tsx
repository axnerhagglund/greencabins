import { getAllServices } from "@/sanity/queries";

export const revalidate = 3600;

export default async function TjansterPage() {
  const services = await getAllServices();

  return (
    <section style={{ background: "var(--bg)", color: "var(--text)", minHeight: "70vh", padding: "8rem 2rem" }}>
      <div style={{ maxWidth: "980px", margin: "0 auto" }}>
        <p style={{ color: "var(--ember)", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>
          Tjänster
        </p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 300 }}>
          Under uppbyggnad
        </h1>
        {services.length > 0 && (
          <div style={{ display: "grid", gap: "1rem", marginTop: "3rem" }}>
            {services.map((service) => (
              <article key={service._id} style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 300 }}>
                  {service.title}
                </h2>
                <p style={{ color: "var(--text-mid)", lineHeight: 1.7 }}>{service.shortDesc}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
