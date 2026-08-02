import { ArrowLeft, Mail } from "lucide-react"
import { serviceDetails, type ServiceDetail, type ServiceSlug } from "./serviceData"

interface ServicePageProps {
  service: ServiceSlug
  onNavigate: (path: string) => void
}

function ServicePricingCard({ name, price, details }: ServiceDetail["pricing"][number]) {
  return (
    <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">{name}</p>
      <div className="mt-4 text-3xl font-semibold text-foreground">{price}</div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{details}</p>
    </div>
  )
}

export function ServicePage({ service, onNavigate }: ServicePageProps) {
  const detail = serviceDetails[service]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <button
            type="button"
            onClick={() => onNavigate("/")}
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-sm font-medium text-foreground shadow-sm transition hover:border-primary/40 hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Back to portfolio
          </button>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                {detail.eyebrow}
              </span>
              <div className="space-y-4">
                <h1 className="font-bosch text-4xl tracking-tight text-foreground sm:text-5xl lg:text-7xl">
                  {detail.title}
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                  {detail.summary}
                </p>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {detail.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate("/")}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                >
                  <Mail className="size-4" />
                  Start a project
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate("/services")}
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-3 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary"
                >
                  View all services
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-background/80 shadow-lg">
              <img
                src={detail.image}
                alt={detail.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              What you get
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {detail.deliverables.map((item) => (
                <div key={item} className="rounded-3xl border border-border/60 bg-background/70 p-5">
                  <p className="text-sm leading-relaxed text-foreground">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {detail.promise}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Pricing
            </h2>
            <div className="mt-6 space-y-4">
              {detail.pricing.map((item) => (
                <ServicePricingCard key={item.name} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
