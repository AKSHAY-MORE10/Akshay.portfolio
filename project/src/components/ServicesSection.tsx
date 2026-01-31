import { motion } from "framer-motion"
import {
  Code,
  Zap,
  Sparkles,
  LineChart,
  MessageSquare,
  ArrowRight,
  Cpu,
  Brain,
} from "lucide-react"
import { Button } from "@/components/ui/button"

// Animations
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemFadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function ServicesSection() {
  const services = [
    {
      icon: <Code className="h-9 w-9" />,
      title: "Web Development",
      description:
        "Fast, responsive, and scalable websites built with modern frameworks and clean architecture.",
    },
    {
      icon: <Zap className="h-9 w-9" />,
      title: "Automation Systems",
      description:
        "Automation workflows that reduce manual effort and help businesses move faster.",
    },
    {
      icon: <Brain className="h-9 w-9" />,
      title: "AI & Machine Learning",
      description:
        "Applied AI & ML solutions — from intelligent features to data-driven systems that solve real problems.",
    },
    {
      icon: <Cpu className="h-9 w-9" />,
      title: "AI Integrations",
      description:
        "Integrating AI into products and workflows using APIs, models, and automation pipelines.",
    },
    {
      icon: <LineChart className="h-9 w-9" />,
      title: "Systems & Scalability",
      description:
        "Designing systems that scale reliably, with long-term performance and maintainability in mind.",
    },
    {
      icon: <MessageSquare className="h-9 w-9" />,
      title: "Content Creation",
      description:
        "Creating content around development, automation, AI, and building in public.",
    },
  ]

  return (
    <section
      id="services"
      className="relative w-full py-16 md:py-24 lg:py-28 font-inter"
    >
      {/* subtle animated background */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="container mx-auto max-w-7xl rounded-3xl border border-muted bg-muted/20 px-6 py-12 sm:px-10 sm:py-16"
      >
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            What I Do
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg font-normal">
            I work across web development, automation, and AI — building systems
            that are practical, scalable, and impact-driven.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemFadeIn}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative overflow-hidden rounded-3xl border bg-background/80 p-6 shadow-sm"
            >
              {/* hover glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/20 blur-2xl" />
              </div>

              <div className="relative space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {service.icon}
                </div>

                <h3 className="text-lg font-semibold tracking-tight">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground font-normal">
                  {service.description}
                </p>

                <div className="pt-2 flex items-center gap-2 text-sm font-medium text-primary">
                  <span>Explore</span>
                  <motion.span
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <Button size="lg" className="rounded-full font-medium">
            Let’s build something
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
