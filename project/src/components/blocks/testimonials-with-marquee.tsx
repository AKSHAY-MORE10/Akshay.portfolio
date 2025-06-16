import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "../ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials, 
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "px-4 py-16 sm:py-28 md:py-36 md:mb-12 ",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-4xl font-medium leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2> 
          <p className="text-lg max-w-[600px] font-medium text-muted-foreground sm:text-xl  ">
            {description}
          </p>
        </div>

        <div className="relative flex w-screen flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:140s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(10)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          {/* Remove background gradient overlays */}
          {/* <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" /> */}
          {/* <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" /> */}
        </div>
      </div>
    </section>
  )
} 