import { notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs } from "@/sanity/queries";

export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((item) => ({ slug: item.slug }));
}

export default async function BloggPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article style={{ background: "var(--bg)", color: "var(--text)", minHeight: "70vh", padding: "8rem 2rem" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <p style={{ color: "var(--ember)", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>
          {post.category}
        </p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 300 }}>
          {post.title}
        </h1>
        <p style={{ color: "var(--text-muted)", marginTop: "1rem" }}>
          {new Date(post.publishedAt).toLocaleDateString("sv-SE")} · {post.author.name}
        </p>
        <p style={{ color: "var(--text-mid)", fontSize: "1.1rem", lineHeight: 1.8, marginTop: "2rem" }}>
          {post.content}
        </p>
      </div>
    </article>
  );
}
