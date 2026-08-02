import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Check,
  HelpCircle,
  Sparkles,
} from "lucide-react";

interface ServiceRouteProps {
  onNavigate: (path: string) => void;
}

type PricingCard = {
  name: string;
  price: string;
  audience: string[];
  includes: string[];
  delivery: string;
  revisions: string;
  popular?: boolean;
};

const pricingCards: PricingCard[] = [
  {
    name: "Starter",
    price: "₹5,999",
    audience: [
      "Personal Portfolios",
      "Freelancers",
      "Students",
      "Local Businesses",
    ],
    includes: [
      "Up to 4 Pages",
      "Responsive Design",
      "Modern UI",
      "Contact Form",
      "Basic SEO Setup",
      "Google Maps Integration",
      "WhatsApp Chat",
      "Social Media Links",
      "Fast Loading",
      "Free Deployment (Vercel/Netlify)",
    ],
    delivery: "5-7 Days",
    revisions: "2 Revisions",
  },
  {
    name: "Professional",
    price: "₹11,999",
    audience: ["Startups", "Growing Businesses", "Agencies", "Personal Brands"],
    includes: [
      "Everything in Starter",
      "Up to 8 Pages",
      "Custom UI/UX Design",
      "Smooth Animations",
      "Blog Setup",
      "Advanced Contact Forms",
      "Google Analytics Setup",
      "Google Search Console",
      "Enhanced SEO",
      "Performance Optimization",
      "Speed Optimization",
      "Priority Support",
    ],
    delivery: "10-12 Days",
    revisions: "4 Revisions",
    popular: true,
  },
  {
    name: "Business",
    price: "₹19,999",
    audience: [
      "Established Businesses",
      "Companies",
      "E-commerce",
      "Growing Brands",
    ],
    includes: [
      "Everything in Professional",
      "Unlimited Pages",
      "CMS Integration",
      "Authentication",
      "Admin Dashboard",
      "Database Integration",
      "API Integrations",
      "Payment Gateway",
      "Booking System",
      "Email Configuration",
      "Advanced SEO",
      "Security Best Practices",
      "Premium Support",
    ],
    delivery: "15-20 Days",
    revisions: "Unlimited During Development",
  },
];

const packageComparison = [
  ["Responsive Design", true, true, true],
  ["Modern UI/UX", true, true, true],
  ["Mobile Optimized", true, true, true],
  ["Source Code Included", true, true, true],
  ["Basic SEO", true, true, true],
  ["Contact Form", true, true, true],
  ["Free Deployment", true, true, true],
  ["Performance Optimization", true, true, true],
  ["WhatsApp Integration", true, true, true],

  ["Up to 4 Pages", true, false, false],
  ["Up to 8 Pages", false, true, false],
  ["Unlimited Pages", false, false, true],

  ["Custom UI/UX Design", false, true, true],
  ["Smooth Animations", false, true, true],
  ["Blog Setup", false, true, true],
  ["Google Analytics", false, true, true],
  ["Google Search Console", false, true, true],
  ["Enhanced SEO", false, true, true],

  ["CMS Integration", false, false, true],
  ["Authentication", false, false, true],
  ["Admin Dashboard", false, false, true],
  ["Database Integration", false, false, true],
  ["API Integrations", false, false, true],
  ["Payment Gateway", false, false, true],
  ["Booking System", false, false, true],
] as const;

const additionalServices = [
  ["Website Maintenance", "₹999/month"],
  ["Hosting & Deployment", "₹999"],
  ["Domain Setup", "₹499"],
  ["Basic SEO Setup", "₹1,999"],
  ["Advanced SEO", "₹4,999"],
  ["Website Speed Optimization", "₹1,999"],
  ["Content Upload", "₹999"],
  ["Extra Page", "₹700/page"],
  ["Blog Setup", "₹2,499"],
  ["Payment Gateway Integration", "₹2,999"],
  ["WhatsApp Integration", "₹999"],
  ["Google Analytics Setup", "₹999"],
  ["Google Search Console", "₹999"],
  ["Business Email Setup", "₹999"],
  ["Website Migration", "₹2,999"],
  ["Custom Forms", "₹999"],
  ["Booking System", "₹3,999"],
  ["Admin Dashboard", "Starts ₹7,999"],
  ["API Integration", "Starts ₹2,999"],
  ["Database Integration", "Starts ₹2,999"],
] as const;

const faqs = [
  {
    question: "How long will it take to build my website?",
    answer:
      "Most websites are delivered within 5–20 business days, depending on the package and project requirements. A detailed timeline will be shared before development begins.",
  },
  {
    question: "Do I own the website and source code?",
    answer:
      "Yes. Once the project is completed and the final payment is made, you'll receive full ownership of the website along with the complete source code.",
  },
  {
    question: "Is SEO included in the packages?",
    answer:
      "Yes. Every package includes basic on-page SEO, including meta tags, page titles, image optimization, and performance improvements. Advanced SEO services are available as an add-on.",
  },
  {
    question: "Can I request changes after the website is completed?",
    answer:
      "Absolutely. Each package includes a specific number of revisions during development. Additional changes or new features can be added later at an affordable cost.",
  },
  {
    question: "Do you provide domain, hosting, and deployment?",
    answer:
      "Yes. I can help you purchase a domain, set up hosting, configure emails, and deploy your website. If you already have hosting, I'll deploy it there.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. Every website is fully responsive and optimized to provide a smooth experience across desktops, tablets, and smartphones.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. Whether you need a complete redesign or just a modern refresh, I can transform your existing website while keeping your branding and business goals intact.",
  },
  {
    question: "Do you build custom web applications?",
    answer:
      "Yes. Beyond business websites, I also build custom dashboards, admin panels, AI-powered applications, automation systems, SaaS platforms, and other tailored web solutions.",
  },
] as const;

function PricingCardView({ card }: { card: PricingCard }) {
  return (
    <motion.article
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={[
        "relative overflow-hidden rounded-[2rem] border backdrop-blur-2xl",
        card.popular
          ? "border-transparent bg-gradient-to-br from-violet-500/20 via-indigo-500/10 to-cyan-500/20 p-[1px] shadow-[0_25px_80px_rgba(79,70,229,0.25)]"
          : "border-border/50 bg-background/40 shadow-lg",
        card.popular ? "lg:-mt-4 scale-[1.02]" : "",
      ].join(" ")}
    >
      <div
        className={[
          "h-full rounded-[1.9rem] p-7",
          card.popular
            ? "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white"
            : "bg-background/70 backdrop-blur-xl text-foreground",
        ].join(" ")}
      >
        {/* Badge */}
        {card.popular && (
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold text-cyan-300">
            <Sparkles className="size-4" />
            Most Popular
          </span>
        )}

        {/* Title */}
        <div>
          <p
            className={[
              "text-xs font-semibold uppercase tracking-[0.25em]",
              card.popular
                ? "text-cyan-300"
                : "text-indigo-500 dark:text-cyan-300",
            ].join(" ")}
          >
            {card.name}
          </p>

          <h3 className="mt-3 text-5xl font-bold tracking-tight">
            {card.price}
          </h3>

          <p
            className={[
              "mt-2 text-sm",
              card.popular ? "text-white/70" : "text-muted-foreground",
            ].join(" ")}
          >
            Starting Price
          </p>
        </div>

        {/* Audience */}
        <div className="mt-8">
          <p
            className={[
              "text-xs font-semibold uppercase tracking-wider",
              card.popular
                ? "text-cyan-300"
                : "text-indigo-500 dark:text-cyan-300",
            ].join(" ")}
          >
            Best For
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {card.audience.map((item) => (
              <span
                key={item}
                className={[
                  "rounded-xl border px-3 py-2 text-xs font-medium",
                  card.popular
                    ? "border-cyan-500/20 bg-cyan-500/10 text-cyan-100"
                    : "border-border/40 bg-background/50 text-foreground",
                ].join(" ")}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="my-7 h-px bg-border/40" />

        {/* Features */}
        <div>
          <p
            className={[
              "mb-5 text-xs font-semibold uppercase tracking-wider",
              card.popular
                ? "text-cyan-300"
                : "text-indigo-500 dark:text-cyan-300",
            ].join(" ")}
          >
            What's Included
          </p>

          <div className="space-y-4">
            {card.includes.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <Check
                  className={[
                    "mt-0.5 size-5 rounded-full p-1",
                    card.popular
                      ? "bg-cyan-500/10 text-cyan-300"
                      : "bg-emerald-500/10 text-emerald-500",
                  ].join(" ")}
                />

                <span
                  className={[
                    "text-sm leading-relaxed",
                    card.popular ? "text-white/85" : "text-muted-foreground",
                  ].join(" ")}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery */}
        <div className="mt-8 rounded-2xl border border-border/40 bg-background/40 p-5 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <span
              className={
                card.popular ? "text-white/70" : "text-muted-foreground"
              }
            >
              Delivery
            </span>

            <span className="font-semibold">{card.delivery}</span>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span
              className={
                card.popular ? "text-white/70" : "text-muted-foreground"
              }
            >
              Revisions
            </span>

            <span className="font-semibold">{card.revisions}</span>
          </div>
        </div>

        {/* CTA */}
        <button
          className={[
            "mt-8 w-full rounded-xl py-3.5 text-sm font-semibold transition-all duration-300",
            card.popular
              ? "bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/25"
              : "border border-border bg-background/50 hover:bg-background/80",
          ].join(" ")}
        >
          Get Started
        </button>
      </div>
    </motion.article>
  );
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
              Web Development Services
            </span>
            <h1 className="max-w-4xl font-bosch text-4xl tracking-tight text-slate-950 sm:text-5xl lg:text-7xl dark:text-white">
              Professional Websites Built to Grow Your Business.
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              From portfolio websites to business websites and custom web
              applications, I build fast, responsive, SEO-friendly websites that
              help businesses establish a strong online presence and convert
              more visitors into customers.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Responsive Design",
              "Modern UI/UX",
              "SEO Optimized",
              "Fast Performance",
              "Mobile Friendly",
              "Source Code Included",
              "Free Deployment",
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
                Pricing Plans
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                Simple, Transparent Pricing Choose the package that best fits
                your business goals.
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
                Compare Plans
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
                  {packageComparison.map(
                    ([feature, starter, professional, premium]) => (
                      <tr
                        key={feature}
                        className="border-b border-white/30 last:border-0 dark:border-white/10"
                      >
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                          {feature}
                        </td>
                        {[starter, professional, premium].map(
                          (value, index) => (
                            <td
                              key={`${feature}-${index}`}
                              className="px-6 py-4"
                            >
                              {value ? (
                                <Check className="size-5 text-emerald-500" />
                              ) : (
                                <span className="text-slate-400 dark:text-slate-500">
                                  —
                                </span>
                              )}
                            </td>
                          ),
                        )}
                      </tr>
                    ),
                  )}
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
                    <tr
                      key={service}
                      className="border-b border-white/30 last:border-0 dark:border-white/10"
                    >
                      <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                        {service}
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                        {price}
                      </td>
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
                  <p className="font-medium text-slate-950 dark:text-white">
                    {faq.question}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {faq.answer}
                  </p>
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
                If you need a premium website that feels modern, converts
                better, and is priced realistically for the Indian market, I can
                help you plan and build it.
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
  );
}
