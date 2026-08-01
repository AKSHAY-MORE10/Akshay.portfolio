import { motion } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Check,
  HelpCircle,
  Sparkles,
} from "lucide-react"

interface ServiceRouteProps {
  onNavigate: (path: string) => void
}

type PricingCard = {
  name: string
  price: string
  audience: string[]
  includes: string[]
  delivery: string
  revisions: string
  popular?: boolean
}

const pricingCards: PricingCard[] = [
  {
    name: "Starter",
    price: "₹8,997",
    audience: ["Students", "Developers", "Freelancers", "Job seekers"],
    includes: [
      "Responsive Design",
      "4 Pages",
      "Modern UI",
      "Contact Form",
      "SEO Basics",
      "Fast Loading",
      "Social Links",
      "Free Deployment",
    ],
    delivery: "7 Days Delivery",
    revisions: "1 Revision",
  },
  {
    name: "Professional",
    price: "₹24,997",
    audience: ["Startups", "Businesses", "Agencies", "Personal Brands"],
    includes: [
      "Everything in Starter",
      "8 Pages",
      "Custom Design",
      "Animations",
      "CMS Integration",
      "Blog",
      "WhatsApp Integration",
      "Google Maps",
      "Advanced SEO",
      "Performance Optimization",
      "Analytics Setup",
      "Admin Panel (Basic)",
      "Priority Support",
    ],
    delivery: "14 Days Delivery",
    revisions: "3 Revisions",
    popular: true,
  },
  {
    name: "Premium",
    price: "₹49,997",
    audience: ["Growing Companies", "Large Businesses", "Brands"],
    includes: [
      "Unlimited Pages",
      "Premium UI/UX",
      "Custom Animations",
      "Advanced SEO",
      "Payment Gateway",
      "Booking System",
      "Admin Dashboard",
      "Authentication",
      "API Integrations",
      "Database",
      "Cloud Deployment",
      "Email Setup",
      "Performance Optimization",
      "Security Best Practices",
    ],
    delivery: "30 Days Support",
    revisions: "Unlimited Revisions During Development",
  },
]

const packageComparison = [
  ["Responsive layout", true, true, true],
  ["Source code included", true, true, true],
  ["Modern React/Next.js development", true, true, true],
  ["SEO friendly", true, true, true],
  ["Mobile optimized", true, true, true],
  ["Secure deployment", true, true, true],
  ["Fast performance", true, true, true],
  ["Free consultation", true, true, true],
  ["CMS integration", false, true, true],
  ["Blog setup", false, true, true],
  ["Payment gateway", false, false, true],
  ["Booking system", false, false, true],
  ["Admin dashboard", false, true, true],
] as const

const additionalServices = [
  ["Website Maintenance", "₹1,999/month"],
  ["Hosting Setup", "₹2,999"],
  ["Domain Setup", "₹999"],
  ["SEO Optimization", "₹4,999"],
  ["Speed Optimization", "₹3,999"],
  ["Bug Fixes", "Starts ₹999"],
  ["Content Upload", "₹2,999"],
  ["Extra Page", "₹999/page"],
  ["Blog Setup", "₹3,999"],
  ["Payment Gateway", "₹4,999"],
  ["WhatsApp Chat", "₹1,499"],
  ["Google Analytics", "₹1,499"],
  ["Google Search Console", "₹1,499"],
  ["Email Configuration", "₹999"],
  ["Website Migration", "₹4,999"],
] as const

const faqs = [
  {
    question: "How long does development take?",
    answer:
      "Starter projects usually take around 7 days, Professional sites around 14 days, and Premium builds around 30 days depending on scope and content readiness.",
  },
  {
    question: "Do I get source code?",
    answer:
      "Yes. Every package includes source code delivery so you fully own the website and can hand it over to your internal team later.",
  },
  {
    question: "Can I request revisions?",
    answer:
      "Yes. The Starter plan includes 1 revision, Professional includes 3 revisions, and Premium includes unlimited revisions during development.",
  },
  {
    question: "Do you provide hosting?",
    answer:
      "I can set up hosting, deployment, and domain configuration as an additional service. If you already have hosting, I can work with that too.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. I can redesign outdated websites into a modern premium experience while preserving your branding and content structure.",
  },
  {
    question: "Do you build custom web apps?",
    answer:
      "Yes. For more advanced requirements like dashboards, portals, SaaS products, and custom workflows, I can scope and build a tailored solution.",
  },
]

function PricingCardView({ card }: { card: PricingCard }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={[
        "relative overflow-hidden rounded-[2rem] border bg-white/65 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:bg-white/5",
        card.popular
          ? "border-transparent bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-cyan-500/20 p-[1px] shadow-[0_24px_90px_rgba(99,102,241,0.25)]"
          : "border-border/60",
        card.popular ? "scale-[1.02] lg:-mt-4" : "",
      ].join(" ")}
    >
      <div
        className={[
          "h-full rounded-[1.85rem] p-6",
          card.popular
            ? "bg-slate-950/95 text-white"
            : "bg-white/80 text-foreground dark:bg-slate-950/70 dark:text-white",
        ].join(" ")}
      >
        {card.popular ? (
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
            <Sparkles className="size-3.5" />
            Most Popular
          </span>
        ) : null}

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground/90 dark:text-white/55">
              {card.name}
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">{card.price}</h3>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground dark:text-white/70">
          Perfect for:
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {card.audience.map((item) => (
            <span
              key={item}
              className={[
                "rounded-full px-3 py-1 text-xs font-medium",
                card.popular
                  ? "bg-white/10 text-white"
                  : "bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-white/80",
              ].join(" ")}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          {card.includes.map((feature) => (
            <div key={feature} className="flex items-start gap-3 text-sm leading-relaxed">
              <Check className={card.popular ? "mt-0.5 size-4 text-cyan-300" : "mt-0.5 size-4 text-emerald-500"} />
              <span className={card.popular ? "text-white/90" : "text-muted-foreground dark:text-white/75"}>
                {feature}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-3 rounded-3xl border border-border/60 bg-white/60 p-4 text-sm text-foreground dark:border-white/10 dark:bg-white/5 dark:text-white">
          <div className="flex items-center justify-between gap-4">
            <span>Delivery</span>
            <span className="font-medium">{card.delivery}</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span>Revisions</span>
            <span className="font-medium">{card.revisions}</span>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export function WebDevelopmentPage({ onNavigate }: ServiceRouteProps) {
  return (
    <main className="min-h-screen bg-transparent text-foreground">
      <section className="relative overflow-hidden px-4 py-8 sm:px-6 lg:px-8 lg:py-12">

        <div className="mx-auto max-w-7xl">
          <button
            type="button"
            onClick={() => onNavigate("/")}
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-4 py-2 text-sm font-medium text-slate-900 shadow-lg shadow-slate-900/10 backdrop-blur transition hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            <ArrowLeft className="size-4" />
            Back to portfolio
          </button>

          <div className="mt-8 max-w-4xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-200">
              Premium Web Development Services
            </span>
            <h1 className="max-w-4xl font-bosch text-4xl tracking-tight text-slate-950 sm:text-5xl lg:text-7xl dark:text-white">
              Premium web development pricing for serious Indian brands in 2026.
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              Built for freelancers, startups, and growing companies that want modern React or Next.js websites with clean design, strong SEO, and realistic market pricing.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "100% Responsive",
              "Source Code Included",
              "Modern React/Next.js Development",
              "SEO Friendly",
              "Mobile Optimized",
              "Secure Deployment",
              "Fast Performance",
              "Free Consultation",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/40 bg-white/60 px-4 py-4 text-sm font-medium text-slate-900 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                <div className="flex items-center gap-2">
                  <BadgeCheck className="size-4 text-emerald-500" />
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-indigo-600 dark:text-cyan-300">
                Pricing
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                Three realistic packages for the Indian market
              </h2>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {pricingCards.map((card) => (
              <PricingCardView key={card.name} card={card} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/40 bg-white/60 shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <div className="border-b border-white/40 px-6 py-5 dark:border-white/10">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                Feature comparison
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/40 bg-slate-50/70 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                    <th className="px-6 py-4 font-medium">Feature</th>
                    <th className="px-6 py-4 font-medium">Starter</th>
                    <th className="px-6 py-4 font-medium">Professional</th>
                    <th className="px-6 py-4 font-medium">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {packageComparison.map(([feature, starter, professional, premium]) => (
                    <tr key={feature} className="border-b border-white/30 last:border-0 dark:border-white/10">
                      <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{feature}</td>
                      {[starter, professional, premium].map((value, index) => (
                        <td key={`${feature}-${index}`} className="px-6 py-4">
                          {value ? <Check className="size-5 text-emerald-500" /> : <span className="text-slate-400 dark:text-slate-500">—</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/40 bg-white/60 shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <div className="border-b border-white/40 px-6 py-5 dark:border-white/10">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                Additional services
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/40 bg-slate-50/70 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                    <th className="px-6 py-4 font-medium">Service</th>
                    <th className="px-6 py-4 font-medium">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {additionalServices.map(([service, price]) => (
                    <tr key={service} className="border-b border-white/30 last:border-0 dark:border-white/10">
                      <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{service}</td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-white/40 bg-white/60 p-6 shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:p-8">
            <div className="flex items-center gap-3">
              <HelpCircle className="size-5 text-indigo-600 dark:text-cyan-300" />
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                FAQ
              </h2>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {faqs.map((faq) => (
                <motion.div
                  key={faq.question}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="rounded-3xl border border-white/40 bg-white/70 p-5 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-white/5"
                >
                  <p className="font-medium text-slate-950 dark:text-white">{faq.question}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-indigo-500/20 bg-gradient-to-r from-slate-950 via-indigo-950 to-cyan-950 p-[1px] shadow-[0_32px_120px_rgba(30,41,59,0.35)]">
            <div className="rounded-[2.2rem] bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-14">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/90">
                Final CTA
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-6xl">
                Let&apos;s build something amazing together.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
                If you need a premium website that feels modern, converts better, and is priced realistically for the Indian market, I can help you plan and build it.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate("/")}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/25 transition hover:-translate-y-0.5"
                >
                  Book Free Consultation
                  <ArrowRight className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate("/")}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
