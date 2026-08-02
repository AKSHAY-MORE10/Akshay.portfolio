import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { getBlogPosts, formatBlogDate } from "@/content/blog"

interface BlogSectionProps {
  onNavigate: (path: string) => void
}

export function BlogSection({ onNavigate }: BlogSectionProps) {
  const latestPosts = getBlogPosts().slice(0, 4)

  return (
    <section id="blog" className="w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Writings
            </p>
            <h2 className="font-bosch text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Latest writings
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/blog')}
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-transform duration-300 hover:-translate-x-0.5"
          >
            View all writings
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="size-4" />
            </span>
          </button>
        </div>

        <div className="divide-y divide-border/60 border-t border-border/60">
          {latestPosts.map((post, index) => (
            <motion.button
              key={post.slug}
              type="button"
              onClick={() => onNavigate(`/blog/${post.slug}`)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group flex w-full cursor-pointer flex-col gap-3 py-5 text-left transition-transform duration-300 hover:-translate-y-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-6"
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
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
