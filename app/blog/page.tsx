import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog — Patrick Offei Danso",
  description: "Thoughts on software engineering, prototyping, and building products.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-canvas">
      {/* Header spacer */}
      <div className="pt-24 md:pt-32" />

      <div className="mx-auto max-w-7xl px-6 pb-24">
        {/* Page header */}
        <div className="mb-16">
          <Link
            href="/"
            className="font-mono text-[10px] uppercase tracking-[0.25em] text-mid-grey transition-colors duration-300 hover:text-carbon inline-block mb-8"
          >
            &larr; BACK_TO_BASE
          </Link>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-carbon">
            BLOG
          </h1>
          <p className="mt-4 font-mono text-xs tracking-widest text-mid-grey uppercase">
            TRANSMISSION_LOG — {posts.length} ENTRIES
          </p>
        </div>

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group border border-carbon/10 p-6 md:p-8 transition-all duration-300 hover:border-safety-orange/30"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="font-mono text-[10px] tracking-widest text-carbon/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[10px] tracking-widest text-carbon/30">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>

              <h2 className="text-lg md:text-xl font-bold tracking-tight text-carbon group-hover:text-safety-orange transition-colors duration-300">
                {post.title}
              </h2>

              <p className="mt-3 text-sm text-mid-grey leading-relaxed">
                {post.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-widest text-carbon/40 uppercase border border-carbon/10 px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
