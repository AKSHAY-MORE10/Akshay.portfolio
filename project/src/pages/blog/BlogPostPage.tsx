import { motion } from "framer-motion";
import {
  ArrowLeft,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Copy,
  Link2,
  Share2,
  Tag,
} from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import {
  extractBlogHeadings,
  formatBlogDate,
  getAdjacentBlogPosts,
  getBlogPostBySlug,
  slugifyHeading,
  type BlogPost,
} from "@/content/blog";

interface BlogPostPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

function CodeBlock({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const [copied, setCopied] = useState(false);
  const code = String(children).replace(/\n$/, "");
  const language = className?.replace("language-", "") ?? "text";

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <div className="relative my-6 overflow-hidden rounded-2xl border border-border/60 bg-[#0f111a]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-xs text-zinc-400">
        <span>{language}</span>
        <button
          type="button"
          onClick={copyCode}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs transition hover:border-white/25 hover:text-white"
        >
          <Copy className="size-3.5" />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-7 text-zinc-100">
        <code className={className}>{children}</code>
      </pre>
    </div>
  );
}

function renderHeading(
  level: 1 | 2 | 3 | 4,
  children: ReactNode,
  className?: string,
) {
  const text = typeof children === "string" ? children : String(children);
  const id = slugifyHeading(text);
  const baseClass = "scroll-mt-28 font-semibold tracking-tight text-foreground";

  if (level === 1) {
    return (
      <h1
        id={id}
        className={`${baseClass} text-4xl sm:text-5xl lg:text-6xl ${className ?? ""}`.trim()}
      >
        {children}
      </h1>
    );
  }

  if (level === 2) {
    return (
      <h2
        id={id}
        className={`${baseClass} mt-12 text-2xl sm:text-3xl ${className ?? ""}`.trim()}
      >
        {children}
      </h2>
    );
  }

  if (level === 3) {
    return (
      <h3
        id={id}
        className={`${baseClass} mt-8 text-xl ${className ?? ""}`.trim()}
      >
        {children}
      </h3>
    );
  }

  return (
    <h4
      id={id}
      className={`${baseClass} mt-6 text-lg ${className ?? ""}`.trim()}
    >
      {children}
    </h4>
  );
}

function updateMetaTag(selector: string, attribute: string, value: string) {
  let element = document.head.querySelector(selector) as
    | HTMLMetaElement
    | HTMLLinkElement
    | HTMLScriptElement
    | null;

  if (!element) {
    const isScript = selector.includes("script");
    const isLink = selector.includes("link");
    const nameMatch = selector.match(/name="([^"]+)"/);
    const propertyMatch = selector.match(/property="([^"]+)"/);

    element = document.createElement(
      isScript ? "script" : isLink ? "link" : "meta",
    );

    if (isLink) {
      (element as HTMLLinkElement).rel = "canonical";
    } else if (nameMatch) {
      element.setAttribute("name", nameMatch[1]);
    } else if (propertyMatch) {
      element.setAttribute("property", propertyMatch[1]);
    }

    document.head.appendChild(element);
  }

  if (attribute === "content") {
    (element as HTMLMetaElement).content = value;
  } else if (attribute === "href") {
    (element as HTMLLinkElement).href = value;
  } else {
    element.setAttribute(attribute, value);
  }
}

function buildAbsoluteUrl(pathname: string) {
  return `${window.location.origin}${pathname}`;
}

function TableOfContents({
  headings,
}: {
  headings: ReturnType<typeof extractBlogHeadings>;
}) {
  if (headings.length === 0) return null;

  return (
    <aside className="hidden xl:block xl:sticky xl:top-28 xl:h-fit">
      <div className="rounded-3xl border border-border/60 bg-background/80 p-5 backdrop-blur">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          On this page
        </p>
        <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
          {headings.map((heading) => (
            <li key={heading.id} className={heading.depth > 2 ? "pl-3" : ""}>
              <a
                className="transition hover:text-foreground"
                href={`#${heading.id}`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="blog-markdown">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ children }) => renderHeading(1, children),
          h2: ({ children }) => renderHeading(2, children),
          h3: ({ children }) => renderHeading(3, children),
          h4: ({ children }) => renderHeading(4, children),

          p: ({ children }) => (
            <p className="my-5 leading-8 text-muted-foreground">{children}</p>
          ),

          a: ({ children, href }) => (
            <a
              href={href}
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center gap-1 border-b border-current pb-0.5 text-foreground transition hover:text-primary"
            >
              {children}
              {href?.startsWith("http") && <Link2 className="size-3.5" />}
            </a>
          ),

          ul: ({ children }) => (
            <ul className="my-5 list-disc space-y-2 pl-6 text-muted-foreground">
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol className="my-5 list-decimal space-y-2 pl-6 text-muted-foreground">
              {children}
            </ol>
          ),

          li: ({ children }) => <li className="leading-7">{children}</li>,

          blockquote: ({ children }) => (
            <blockquote className="my-6 border-l-2 border-foreground/20 pl-5 italic text-foreground/90">
              {children}
            </blockquote>
          ),

          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt ?? "Blog image"}
              loading="lazy"
              className="my-8 w-full rounded-3xl border border-border/60 object-cover"
            />
          ),

          code(props) {
            const { className, children } = props;

            // Block code
            if (className) {
              return <CodeBlock className={className}>{children}</CodeBlock>;
            }

            // Inline code
            return (
              <code className="rounded-md bg-muted px-1.5 py-0.5 text-[0.92em] text-foreground">
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

function ArticleMeta({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground sm:text-base">
      <span className="inline-flex items-center gap-2">
        <CalendarDays className="size-4" />
        {formatBlogDate(post.publishedDate)}
      </span>
      <span>{post.readingTime}</span>
      <span>{post.category}</span>
      <span>By {post.author}</span>
    </div>
  );
}

export function BlogPostPage({ slug, onNavigate }: BlogPostPageProps) {
  const post = getBlogPostBySlug(slug);
  const headings = useMemo(
    () => (post ? extractBlogHeadings(post.content) : []),
    [post],
  );
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!post) return;

    document.title = `${post.title} | Akshay More`;
    updateMetaTag('meta[name="description"]', "content", post.description);
    updateMetaTag('meta[property="og:title"]', "content", post.title);
    updateMetaTag(
      'meta[property="og:description"]',
      "content",
      post.description,
    );
    updateMetaTag('meta[property="og:type"]', "content", "article");
    updateMetaTag(
      'meta[name="twitter:card"]',
      "content",
      "summary_large_image",
    );
    updateMetaTag('meta[name="twitter:title"]', "content", post.title);
    updateMetaTag(
      'meta[name="twitter:description"]',
      "content",
      post.description,
    );
    updateMetaTag(
      'link[rel="canonical"]',
      "href",
      buildAbsoluteUrl(`/blog/${post.slug}`),
    );

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      author: {
        "@type": "Person",
        name: post.author,
      },
      datePublished: post.publishedDate,
      dateModified: post.publishedDate,
      mainEntityOfPage: buildAbsoluteUrl(`/blog/${post.slug}`),
      image: post.coverImage,
    };

    let script = document.getElementById(
      "blog-json-ld",
    ) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "blog-json-ld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);

    return () => {
      script?.remove();
    };
  }, [post]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;
      setProgress(nextProgress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) {
    return (
      <main className="min-h-screen bg-background px-4 py-12 text-foreground sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <button
            type="button"
            onClick={() => onNavigate("/blog")}
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-4 py-2 text-sm font-medium transition hover:border-primary/40 hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Back to writings
          </button>
          <h1 className="mt-10 text-4xl font-semibold tracking-tight">
            Article not found
          </h1>
        </div>
      </main>
    );
  }

  const { previous, next } = getAdjacentBlogPosts(post.slug);

  const shareArticle = async () => {
    const url = buildAbsoluteUrl(`/blog/${post.slug}`);
    if (navigator.share) {
      await navigator.share({ title: post.title, text: post.description, url });
      return;
    }

    await navigator.clipboard.writeText(url);
  };

  return (
    <motion.main
      key={post.slug}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen bg-background text-foreground"
    >
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-border/40">
        <div
          className="h-full bg-foreground transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto grid max-w-6xl gap-10 xl:grid-cols-[minmax(0,1fr)_280px]">
          <div>
            <button
              type="button"
              onClick={() => onNavigate("/blog")}
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary"
            >
              <ArrowLeft className="size-4" />
              Back to writings
            </button>

            <motion.article
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mt-10 max-w-3xl"
            >
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Article
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
                {post.title}
              </h1>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                  <Tag className="size-3.5" />
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                  <CalendarDays className="size-3.5" />
                  {formatBlogDate(post.publishedDate)}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                  {post.readingTime}
                </span>
              </div>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                {post.description}
              </p>

              <ArticleMeta post={post} />

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={shareArticle}
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-4 py-2 text-sm font-medium transition hover:border-primary/40 hover:text-primary"
                >
                  <Share2 className="size-4" />
                  Share
                </button>
              </div>

              <div className="mt-10 overflow-hidden rounded-3xl border border-border/60 bg-muted/20">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="h-[320px] w-full object-cover sm:h-[420px]"
                  loading="eager"
                />
              </div>

              <div className="mt-12 max-w-none">
                <MarkdownContent content={post.content} />
              </div>

              <div className="mt-16 grid gap-4 border-t border-border/60 pt-8 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() =>
                    previous && onNavigate(`/blog/${previous.slug}`)
                  }
                  disabled={!previous}
                  className="group flex min-h-24 flex-col justify-between rounded-3xl border border-border/60 p-5 text-left transition hover:border-foreground/20 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    <ChevronLeft className="size-4" />
                    Previous
                  </span>
                  {previous ? (
                    <span className="mt-3 text-base font-medium leading-7">
                      {previous.title}
                    </span>
                  ) : (
                    <span className="mt-3 text-base font-medium leading-7">
                      No previous article
                    </span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => next && onNavigate(`/blog/${next.slug}`)}
                  disabled={!next}
                  className="group flex min-h-24 flex-col justify-between rounded-3xl border border-border/60 p-5 text-left transition hover:border-foreground/20 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <span className="inline-flex items-center justify-end gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Next
                    <ChevronRight className="size-4" />
                  </span>
                  {next ? (
                    <span className="mt-3 text-base font-medium leading-7">
                      {next.title}
                    </span>
                  ) : (
                    <span className="mt-3 text-base font-medium leading-7">
                      No next article
                    </span>
                  )}
                </button>
              </div>
            </motion.article>
          </div>

          <TableOfContents headings={headings} />
        </div>
      </section>
    </motion.main>
  );
}
