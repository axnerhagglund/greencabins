import Link from "next/link";
import { getAllPosts } from "@/sanity/queries";

export const revalidate = 3600;

export default async function BloggPage() {
  const posts = await getAllPosts();

  return (
    <section style={{ background: "var(--bg)", color: "var(--text)", minHeight: "70vh", padding: "8rem 2rem" }}>
      <div style={{ maxWidth: "980px", margin: "0 auto" }}>
        <p style={{ color: "var(--ember)", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>
          Blogg
        </p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 300 }}>
          Under uppbyggnad
        </h1>
        {posts.length > 0 && (
          <div style={{ display: "grid", gap: "1rem", marginTop: "3rem" }}>
            {posts.map((post) => (
              <article key={post._id} style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
                <Link href={`/blogg/${post.slug.current}`} style={{ color: "inherit", textDecoration: "none" }}>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 300 }}>
                    {post.title}
                  </h2>
                </Link>
                <p style={{ color: "var(--text-mid)", lineHeight: 1.7 }}>{post.excerpt}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
