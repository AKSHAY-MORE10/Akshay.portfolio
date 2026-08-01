import { InteractiveHoverLinks } from "@/components/ui/interactive-hover-links"

interface ServicesSectionProps {
  onNavigate?: (path: string) => void
}

export function ServicesSection({ onNavigate }: ServicesSectionProps) {
  const serviceLinks = [
    {
      title: "Web Development",
      description:
        "Fast, responsive, and scalable websites built with modern frameworks and clean architecture.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
      href: "/services/web-development",
    },
    {
      title: "Automation Systems",
      description:
        "Automation workflows that reduce manual effort and help businesses move faster.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
      href: "/services/automation-systems",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Applied AI & ML solutions — from intelligent features to data-driven systems that solve real problems.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
      href: "/services/ai-machine-learning",
    },
    {
      title: "AI Integrations",
      description:
        "Integrating AI into products and workflows using APIs, models, and automation pipelines.",
      image:
        "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=1200&q=80",
      href: "/services/ai-integrations",
    },
    // {
    //   title: "Systems & Scalability",
    //   description:
    //     "Designing systems that scale reliably, with long-term performance and maintainability in mind.",
    //   image:
    //     "https://images.unsplash.com/photo-1551281044-8b1d0f7f6d7a?w=1200&q=80",
    //   href: "#projects",
    // },
    // {
    //   title: "Content Creation",
    //   description:
    //     "Creating content around development, automation, AI, and building in public.",
    //   image:
    //     "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80",
    //   href: "#blog",
    // },
  ]

  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Services
          </span>

          <h2 className="mt-4 font-bosch text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Build Faster with{" "}
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Web, Automation, and AI
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I design and ship practical digital systems, from modern web apps to
            automation workflows and AI-powered experiences that scale with your
            growth.
          </p>
        </div>

        <InteractiveHoverLinks
          links={serviceLinks.map((service) => ({
            heading: service.title,
            subheading: service.description,
            imgSrc: service.image,
            href: service.href,
          }))}
          onLinkClick={onNavigate}
        />
      </div>
    </section>
  )
}
