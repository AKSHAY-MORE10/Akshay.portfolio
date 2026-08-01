import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "How I built my first AI Agent using LangChain",
    excerpt: "A deep dive into my experience building an autonomous agent that can research and summarize topics...",
    date: "Aug 15, 2026",
    category: "AI & ML",
    link: "#",
  },
  {
    title: "Scaling Automation for Small Businesses",
    excerpt: "Why n8n has become my go-to tool for workflow automation and how it beats Zapier in complex scenarios.",
    date: "Jul 28, 2026",
    category: "Automation",
    link: "#",
  },
  {
    title: "My Journey from Data Science to Full-Stack",
    excerpt: "Transitioning from purely data-focused roles into building end-to-end web applications with Next.js and React.",
    date: "Jun 10, 2026",
    category: "Career",
    link: "#",
  }
];

export function BlogSection() {
  return (
    <section id="blog" className="w-full py-16 md:py-24 lg:py-28 font-inter">
      <div className="container mx-auto max-w-7xl px-6 sm:px-10">
        
        {/* Header */}
        <div className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Thoughts & Learnings
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Writing about my experiences in web development, AI integrations, automation, and building products.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-muted bg-muted/20 px-5 py-2 text-sm font-medium transition-colors hover:bg-muted/40"
          >
            View all posts <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.a
              key={index}
              href={post.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col justify-between rounded-3xl border border-muted bg-muted/10 p-6 transition-all hover:bg-muted/20 hover:shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold leading-snug tracking-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                Read article <ArrowUpRight className="h-4 w-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
