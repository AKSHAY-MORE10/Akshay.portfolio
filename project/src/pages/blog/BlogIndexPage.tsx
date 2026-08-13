import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import {
  formatBlogDate,
  getBlogPosts,
  getBlogSearchIndex,
  type BlogPost,
} from "@/content/blog";

interface BlogIndexPageProps {
  onNavigate: (path: string) => void;
}

const filters = [
  "All",
  "AI",
  "Web Development",
  "Automation",
  "Career",
  "Tutorials",
  "Projects",
];

function BlogRow({
  post,
  onNavigate,
}: {
  post: BlogPost;
  onNavigate: (path: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onNavigate(`/blog/${post.slug}`)}
      className="group flex w-full  cursor-pointer flex-col gap-3 border-b border-border/60 py-5 text-left transition-transform duration-300 hover:-translate-y-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
    >
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground sm:text-base">
          {formatBlogDate(post.publishedDate)}
        </p>
        <h3 className="relative inline-block text-lg font-medium leading-tight tracking-tight text-foreground sm:text-xl">
          <span className="relative">
            {post.title}
            <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-foreground transition-transform duration-300 group-hover:scale-x-100" />
          </span>
        </h3>
      </div>
      <p className="text-sm text-muted-foreground sm:text-base">
        {post.readingTime}
      </p>
    </button>
  );
}

export function BlogIndexPage({ onNavigate }: BlogIndexPageProps) {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const posts = getBlogPosts();

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesFilter =
        activeFilter === "All" || post.category === activeFilter;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        getBlogSearchIndex(post).includes(normalizedQuery);

      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, posts, query]);

  const featuredPost =
    filteredPosts.length > 0
      ? (filteredPosts.find((post) => post.featured) ?? filteredPosts[0])
      : undefined;
  const visiblePosts = featuredPost
    ? filteredPosts.filter((post) => post.slug !== featuredPost.slug)
    : filteredPosts;

  return (
    <motion.main
      key="blog-index"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen bg-background text-foreground"
    >
      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-6xl">
          <button
            type="button"
            onClick={() => onNavigate("/")}
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary"
          >
            <ArrowRight className="size-4 rotate-180" />
            Back to portfolio
          </button>

          <div className="mt-10 max-w-3xl space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Blog
            </p>
            <h1 className="font-bosch text-4xl tracking-tight text-foreground sm:text-5xl lg:text-7xl">
              Latest writings
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Notes on AI, web development, automation, and the systems behind a
              clean portfolio.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search title, category, tags, or content"
                className="h-12 w-full rounded-full border border-border/60 bg-background px-11 text-sm outline-none transition focus:border-foreground/40"
              />
            </label>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => {
                const isActive = filter === activeFilter;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      isActive
                        ? "border-foreground bg-foreground text-background"
                        : "border-border/60 bg-background text-foreground hover:border-foreground/40"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>

          {featuredPost ? (
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45 }}
              className="mt-12 border-b border-border/60 pb-10"
            >
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Featured article
              </p>
              <button
                type="button"
                onClick={() => onNavigate(`/blog/${featuredPost.slug}`)}
                className="group mt-4 block text-left"
              >
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  <span className="relative inline-block">
                    {featuredPost.title}
                    <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-foreground transition-transform duration-300 group-hover:scale-x-100" />
                  </span>
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {featuredPost.description}
                </p>
              </button>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span>{formatBlogDate(featuredPost.publishedDate)}</span>
                <span>{featuredPost.readingTime}</span>
                <span>{featuredPost.category}</span>
              </div>
              <button
                type="button"
                onClick={() => onNavigate(`/blog/${featuredPost.slug}`)}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-transform duration-300 hover:translate-x-0.5"
              >
                Continue Reading
                <ArrowRight className="size-4" />
              </button>
            </motion.article>
          ) : null}

          <div className="mt-10 divide-y divide-border/60 border-t border-border/60">
            {visiblePosts.length > 0 ? (
              visiblePosts.map((post) => (
                <BlogRow key={post.slug} post={post} onNavigate={onNavigate} />
              ))
            ) : (
              <div className="py-12 text-sm text-muted-foreground">
                No posts match your search.
              </div>
            )}
          </div>
        </div>
      </section>
    </motion.main>
  );
}
