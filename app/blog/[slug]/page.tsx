import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getFirstImageFromContent, getPostBySlug } from "@/lib/blog";
import { baseUrl } from "@/lib/site";
import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";

const mdxComponents: MDXComponents = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className="text-2xl md:text-3xl font-bold tracking-tight text-carbon mt-12 mb-4"
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="text-xl md:text-2xl font-bold tracking-tight text-carbon mt-12 mb-4"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="text-lg md:text-xl font-semibold tracking-tight text-carbon mt-8 mb-3"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="text-base leading-[1.8] text-carbon/80 mb-5" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      className="text-safety-orange hover:underline transition-colors duration-200"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc pl-6 mb-5 space-y-2" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal pl-6 mb-5 space-y-2" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="text-base leading-[1.8] text-carbon/80 marker:text-safety-orange" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-carbon" {...props} />
  ),
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="italic" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="border-l-3 border-safety-orange/40 pl-5 my-6 text-mid-grey italic"
      {...props}
    />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => {
    const isInline = typeof props.children === "string";
    if (isInline) {
      return (
        <code
          className="font-mono text-[0.875em] bg-carbon/5 px-1.5 py-0.5 rounded"
          {...props}
        />
      );
    }
    return <code {...props} />;
  },
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="bg-terminal-dark text-white/85 font-mono text-sm leading-relaxed p-5 overflow-x-auto border border-carbon/10 my-6"
      {...props}
    />
  ),
  img: (props: ComponentPropsWithoutRef<"img">) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="max-w-full h-auto my-6" alt={props.alt ?? ""} {...props} />
  ),
  hr: () => <hr className="border-0 border-t border-carbon/10 my-10" />,
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${baseUrl}/blog/${slug}`;
  const rawImage = post.image ?? getFirstImageFromContent(post.content);
  const imageUrl = rawImage
    ? rawImage.startsWith("http")
      ? rawImage
      : `${baseUrl}${rawImage.startsWith("/") ? "" : "/"}${rawImage}`
    : undefined;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      ...(imageUrl && { images: [{ url: imageUrl }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      ...(imageUrl && { images: [imageUrl] }),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-canvas">
      <div className="pt-24 md:pt-32" />

      <article className="mx-auto max-w-3xl px-6 pb-24">
        {/* Back link */}
        <Link
          href="/blog"
          className="font-mono text-[10px] uppercase tracking-[0.25em] text-mid-grey transition-colors duration-300 hover:text-carbon inline-block mb-8"
        >
          &larr; BACK_TO_LOG
        </Link>

        {/* Post header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="font-mono text-[10px] tracking-widest text-carbon/30">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] tracking-widest text-carbon/40 uppercase border border-carbon/10 px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-carbon">
            {post.title}
          </h1>

          <p className="mt-4 text-base text-mid-grey leading-relaxed">
            {post.description}
          </p>

          <div className="mt-8 border-t border-carbon/10" />
        </header>

        {/* MDX content */}
        <div>
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
    </div>
  );
}
