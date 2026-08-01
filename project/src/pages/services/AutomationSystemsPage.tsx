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

type Plan = {
  name: string
  price: string
  bestFor: string[]
  includes: string[]
  button: string
  popular?: boolean
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "₹7,999",
    bestFor: ["Freelancers", "Small Businesses", "Coaches", "Creators"],
    includes: [
      "1 AI Automation Workflow",
      "n8n Workflow Setup",
      "Google Sheets Integration",
      "Gmail Automation",
      "Basic API Integration",
      "Deployment Assistance",
      "Documentation",
      "7 Days Support",
      "5 Days Delivery",
      "2 Revisions",
    ],
    button: "Get Started",
  },
  {
    name: "Growth",
    price: "₹14,999",
    bestFor: ["Startups", "Agencies", "E-commerce", "Growing Businesses"],
    includes: [
      "Everything in Starter",
      "Up to 5 Automation Workflows",
      "WhatsApp Automation",
      "Telegram Automation",
      "CRM Integration",
      "AI Integration (OpenAI/Gemini)",
      "Database Integration",
      "Dashboard Setup",
      "Priority Support",
      "10 Days Delivery",
      "4 Revisions",
    ],
    button: "Start Automating",
    popular: true,
  },
  {
    name: "Business",
    price: "₹24,999",
    bestFor: ["Medium Businesses", "Teams", "Companies"],
    includes: [
      "Unlimited Automation Workflows",
      "Custom AI Agent",
      "AI Chatbot",
      "Advanced API Integrations",
      "Custom Dashboard",
      "Authentication",
      "Cloud Deployment",
      "Staff Training",
      "30 Days Support",
      "Documentation",
      "15 Days Delivery",
    ],
    button: "Book Consultation",
  },
]

const comparisonRows = [
  ["Free consultation", true, true, true],
  ["Source code included", true, true, true],
  ["Deployment included", true, true, true],
  ["Scalable workflows", true, true, true],
  ["Documentation", true, true, true],
  ["Secure integrations", true, true, true],
  ["Fast delivery", true, true, true],
  ["Premium support", false, true, true],
  ["WhatsApp automation", false, true, true],
  ["AI chatbot / agent", false, false, true],
  ["Custom dashboard", false, true, true],
  ["Staff training", false, false, true],
] as const

const additionalServices = [
  ["Extra Workflow", "₹1,999"],
  ["AI Chatbot", "₹7,999"],
  ["WhatsApp Automation", "₹4,999"],
  ["Telegram Bot", "₹3,999"],
  ["CRM Integration", "₹4,999"],
  ["Google Workspace Automation", "₹2,999"],
  ["Email Automation", "₹2,499"],
  ["OpenAI Integration", "₹3,999"],
  ["Gemini Integration", "₹3,999"],
  ["Custom API Integration", "₹4,999"],
  ["Dashboard Development", "₹7,999"],
  ["Deployment", "₹2,999"],
  ["Monthly Maintenance", "₹1,999/month"],
  ["Workflow Optimization", "₹2,999"],
  ["Bug Fixes", "Starts ₹999"],
] as const

const faqs = [
  {
    question: "How long does setup take?",
    answer:
      "Starter usually takes 5 days, Growth around 10 days, and Business around 15 days depending on the number of integrations and approvals needed.",
  },
  {
    question: "Can you automate my existing business?",
    answer:
      "Yes. I can map your current process, identify repetitive work, and build automation around the tools you already use.",
  },
  {
    question: "Will I own the workflows?",
    answer:
      "Yes. You get the source code, workflow exports where applicable, and documentation so the systems remain yours.",
  },
  {
    question: "Can I request changes later?",
    answer:
      "Yes. Revisions are included in every package, and you can also hire me later for add-ons, optimizations, or maintenance.",
  },
  {
    question: "Do you provide maintenance?",
    answer:
      "Yes. Monthly maintenance is available as an add-on for workflow monitoring, bug fixes, and small improvements.",
  },
  {
    question: "Which AI models do you support?",
    answer:
      "I can work with OpenAI, Gemini, and other API-driven AI tools depending on the use case and your preferred stack.",
  },
]

function PlanCard({ plan, onNavigate }: { plan: Plan; onNavigate: (path: string) => void }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={[
        "relative overflow-hidden rounded-[2rem] border bg-white/65 p-[1px] shadow-[0_24px_100px_rgba(17,24,39,0.18)] backdrop-blur-xl dark:bg-white/5",
        plan.popular
          ? "border-transparent bg-gradient-to-br from-violet-500/45 via-indigo-500/25 to-cyan-500/35 shadow-[0_28px_110px_rgba(99,102,241,0.35)]"
          : "border-white/30",
        plan.popular ? "scale-[1.02] lg:-mt-4" : "",
      ].join(" ")}
    >
      <div
        className={[
          "h-full rounded-[1.85rem] p-6 sm:p-7",
          plan.popular
            ? "bg-slate-950/95 text-white"
            : "bg-white/80 text-slate-950 dark:bg-slate-950/75 dark:text-white",
        ].join(" ")}
      >
        {plan.popular ? (
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
            <Sparkles className="size-3.5" />
            Most Popular
          </span>
        ) : null}

        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-white/55">
              {plan.name}
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">{plan.price}</h3>
          </div>
        </div>

        <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-white/55">
          Best For
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {plan.bestFor.map((item) => (
            <span
              key={item}
              className={[
                "rounded-full px-3 py-1 text-xs font-medium",
                plan.popular
                  ? "bg-white/10 text-white"
                  : "bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-white/80",
              ].join(" ")}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-white/55">
            Includes
          </p>
          {plan.includes.map((feature) => (
            <div key={feature} className="flex items-start gap-3 text-sm leading-relaxed">
              <Check className={plan.popular ? "mt-0.5 size-4 text-cyan-300" : "mt-0.5 size-4 text-emerald-500"} />
              <span className={plan.popular ? "text-white/90" : "text-slate-600 dark:text-white/75"}>
                {feature}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <button
            type="button"
            onClick={() => onNavigate("/")}
            className={[
              "inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5",
              plan.popular
                ? "bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                : "bg-slate-950 text-white dark:bg-white dark:text-slate-950",
            ].join(" ")}
          >
            {plan.button}
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </motion.article>
  )
}

export function AutomationSystemsPage({ onNavigate }: ServiceRouteProps) {
  return (
    <main className="min-h-screen bg-transparent text-slate-950 dark:text-white">
      <section className="relative overflow-hidden px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <button
            type="button"
            onClick={() => onNavigate("/")}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/60 px-4 py-2 text-sm font-medium text-slate-900 shadow-lg shadow-slate-900/10 backdrop-blur transition hover:-translate-y-0.5 hover:border-violet-300 hover:text-violet-600 dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            <ArrowLeft className="size-4" />
            Back to portfolio
          </button>

          <div className="mt-8 max-w-4xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-violet-700 dark:text-violet-200">
              Premium AI Automation Agency
            </span>
            <h1 className="max-w-4xl font-bosch text-4xl tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-7xl">
              Automate your business. Save hours every week.
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              From simple workflows to powerful AI agents, we help Indian startups, local businesses, agencies, creators, and SMEs eliminate repetitive work and grow faster.
            </p>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:text-base">
              Built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion for a premium SaaS-style experience inspired by Linear, Vercel, and Stripe.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Free Consultation",
              "Source Code Included",
              "Deployment Included",
              "Scalable Workflows",
              "Documentation",
              "Secure Integrations",
              "Fast Delivery",
              "Premium Support",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/35 bg-white/60 px-4 py-4 text-sm font-medium text-slate-900 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white"
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
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-violet-600 dark:text-cyan-300">
                Pricing
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                Three beginner-friendly plans with premium positioning
              </h2>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/35 bg-white/60 shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <div className="border-b border-white/35 px-6 py-5 dark:border-white/10">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                Feature comparison
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/35 bg-slate-50/80 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                    <th className="px-6 py-4 font-medium">Feature</th>
                    <th className="px-6 py-4 font-medium">Starter</th>
                    <th className="px-6 py-4 font-medium">Growth</th>
                    <th className="px-6 py-4 font-medium">Business</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(([feature, starter, growth, business]) => (
                    <tr key={feature} className="border-b border-white/25 last:border-0 dark:border-white/10">
                      <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{feature}</td>
                      {[starter, growth, business].map((enabled, index) => (
                        <td key={`${feature}-${index}`} className="px-6 py-4">
                          {enabled ? <Check className="size-5 text-emerald-500" /> : <span className="text-slate-400 dark:text-slate-500">—</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/35 bg-white/60 shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <div className="border-b border-white/35 px-6 py-5 dark:border-white/10">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                Additional services
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/35 bg-slate-50/80 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                    <th className="px-6 py-4 font-medium">Service</th>
                    <th className="px-6 py-4 font-medium">Starting Price</th>
                  </tr>
                </thead>
                <tbody>
                  {additionalServices.map(([service, price]) => (
                    <tr key={service} className="border-b border-white/25 last:border-0 dark:border-white/10">
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
          <div className="rounded-[2rem] border border-white/35 bg-white/60 p-6 shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:p-8">
            <div className="flex items-center gap-3">
              <HelpCircle className="size-5 text-violet-600 dark:text-cyan-300" />
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
                  className="rounded-3xl border border-white/35 bg-white/70 p-5 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-white/5"
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
          <div className="relative overflow-hidden rounded-[2.25rem] border border-violet-500/20 bg-gradient-to-r from-slate-950 via-violet-950 to-cyan-950 p-[1px] shadow-[0_32px_120px_rgba(30,41,59,0.35)]">
            <div className="rounded-[2.2rem] bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-14">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/90">
                Final CTA
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-6xl">
                Automate your business. Save hours every week.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
                From simple workflows to powerful AI agents, we help businesses eliminate repetitive work and grow faster.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate("/")}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/25 transition hover:-translate-y-0.5"
                >
                  Book Free Consultation
                  <ArrowRight className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate("/")}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
