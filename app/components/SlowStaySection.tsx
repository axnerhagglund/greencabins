import Link from "next/link";

const moments = [
  {
    time: "Friday, 18:40",
    title: "Arrive before the dark.",
    body: "A lockbox, a swept path, firewood where it should be, and enough directions that the last ten minutes do not feel like a test.",
  },
  {
    time: "Saturday, 09:15",
    title: "Let the day stay undecided.",
    body: "Coffee outside if it is warm. Coffee by the stove if it is not. The cabin pages tell you what each place is good at, not what you should perform there.",
  },
  {
    time: "Sunday, 11:00",
    title: "Leave with the quiet still on you.",
    body: "Checkout is simple, hosts are local, and we are available if something practical needs solving before you go home.",
  },
];

export default function SlowStaySection() {
  return (
    <section
      style={{
        background: "var(--bg-subtle)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "7rem 2rem",
      }}
    >
      <div
        className="slow-stay-grid"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "0.85fr 1.15fr",
          gap: "5rem",
          alignItems: "start",
        }}
      >
        <div style={{ position: "sticky", top: "6rem" }}>
          <p
            style={{
              color: "var(--ember)",
              fontSize: "0.7rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            The stay
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 4.8vw, 4.5rem)",
              fontWeight: 300,
              lineHeight: 1.06,
              color: "var(--text)",
              marginBottom: "1.6rem",
            }}
          >
            A weekend
            <br />
            that refuses
            <br />
            <em style={{ color: "var(--text-mid)" }}>to rush.</em>
          </h2>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.8, maxWidth: "34ch" }}>
            The experience is small by design: simple arrival, local hosts, and
            enough practical detail to let the rest of the weekend go soft.
          </p>
          <Link
            href="/cabins"
            style={{
              display: "inline-block",
              marginTop: "2.25rem",
              color: "var(--ember)",
              textDecoration: "none",
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            Choose a cabin
          </Link>
        </div>

        <div style={{ borderTop: "1px solid var(--border)" }}>
          {moments.map((moment) => (
            <article
              key={moment.time}
              className="slow-stay-row"
              style={{
                display: "grid",
                gridTemplateColumns: "160px 1fr",
                gap: "2.5rem",
                padding: "2.25rem 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <p
                style={{
                  color: "var(--ember)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  paddingTop: "0.3rem",
                }}
              >
                {moment.time}
              </p>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    fontWeight: 400,
                    lineHeight: 1.16,
                    color: "var(--text)",
                    marginBottom: "0.8rem",
                  }}
                >
                  {moment.title}
                </h3>
                <p style={{ color: "var(--text-mid)", lineHeight: 1.85, maxWidth: "58ch" }}>
                  {moment.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 840px) {
          .slow-stay-grid,
          .slow-stay-row {
            grid-template-columns: 1fr !important;
          }
          .slow-stay-grid {
            gap: 3rem !important;
          }
          .slow-stay-grid > div:first-child {
            position: static !important;
          }
          .slow-stay-row {
            gap: 0.8rem !important;
          }
        }
      `}</style>
    </section>
  );
}
