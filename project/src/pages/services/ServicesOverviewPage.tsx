import { ArrowLeft, ArrowRight } from "lucide-react"
import { serviceDetails } from "./serviceData"

interface ServicesOverviewPageProps {
  onNavigate: (path: string) => void
}

export function ServicesOverviewPage({ onNavigate }: ServicesOverviewPageProps) {
  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <button
          type="button"
          onClick={() => onNavigate("/")}
          className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/40 hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          Back to portfolio
        </button>

        <div className="mt-8 max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Services
          </span>
          <h1 className="font-bosch text-4xl tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            Choose the service that fits your next move.
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Each page breaks out a different service with example pricing, deliverables, and a short overview so clients can jump straight to the work they need.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {Object.values(serviceDetails).map((service) => (
            <article key={service.slug} className="overflow-hidden rounded-[2rem] border border-border/60 bg-background/80 shadow-sm">
              <img src={service.image} alt={service.title} className="h-64 w-full object-cover" />
              <div className="p-6">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">{service.eyebrow}</p>
                <h2 className="mt-3 text-2xl font-semibold text-foreground">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => onNavigate(`/services/${service.slug}`)}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                  >
                    Open page
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
