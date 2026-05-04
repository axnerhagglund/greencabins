type Props = {
  eyebrow?: string;
  title: string;
  body?: string;
};

export default function SectionHeader({ eyebrow, title, body }: Props) {
  return (
    <header style={{ maxWidth: "720px", marginBottom: "2.5rem" }}>
      {eyebrow && (
        <p
          style={{
            color: "var(--ember)",
            fontSize: "0.7rem",
            letterSpacing: "0.3em",
            marginBottom: "1rem",
            textTransform: "uppercase",
          }}
        >
          {eyebrow}
        </p>
      )}
      <h1
        style={{
          color: "var(--text)",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.5rem, 6vw, 5rem)",
          fontWeight: 300,
          lineHeight: 1.05,
        }}
      >
        {title}
      </h1>
      {body && <p style={{ color: "var(--text-mid)", lineHeight: 1.8, marginTop: "1.5rem" }}>{body}</p>}
    </header>
  );
}
