export type ServiceSlug =
  | "web-development"
  | "automation-systems"
  | "ai-machine-learning"
  | "ai-integrations"

export interface ServiceDetail {
  slug: ServiceSlug
  title: string
  eyebrow: string
  summary: string
  description: string
  image: string
  promise: string
  pricing: Array<{
    name: string
    price: string
    details: string
  }>
  deliverables: string[]
}

export const serviceDetails: Record<ServiceSlug, ServiceDetail> = {
  "web-development": {
    slug: "web-development",
    title: "Web Development",
    eyebrow: "Custom websites and product builds",
    summary: "Fast, responsive, conversion-focused web experiences built for modern teams.",
    description:
      "I build websites and web apps that feel polished, load quickly, and stay maintainable as the product grows.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80",
    promise: "From landing pages to product platforms, the work is designed to ship cleanly and scale cleanly.",
    pricing: [
      {
        name: "Landing Page",
        price: "from $450",
        details: "Single high-conversion page, responsive layout, and deployment-ready delivery.",
      },
      {
        name: "Business Website",
        price: "from $1,200",
        details: "Multi-section site with content structure, reusable components, and performance polish.",
      },
      {
        name: "Web App",
        price: "custom",
        details: "Product-grade build for dashboards, portals, or client-facing experiences.",
      },
    ],
    deliverables: [
      "Responsive UI across mobile, tablet, and desktop",
      "Clean component structure and maintainable code",
      "SEO-friendly content sections and metadata support",
      "Deployment handoff and launch checklist",
    ],
  },
  "automation-systems": {
    slug: "automation-systems",
    title: "Automation Systems",
    eyebrow: "Workflow design and process automation",
    summary: "Reduce manual effort with systems that move data, trigger actions, and keep teams aligned.",
    description:
      "I design automation workflows that remove repetitive work, reduce errors, and keep your operations moving faster.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80",
    promise: "Built to save time immediately and stay understandable when your process changes.",
    pricing: [
      {
        name: "Workflow Audit",
        price: "from $300",
        details: "Map current processes, identify bottlenecks, and define automation opportunities.",
      },
      {
        name: "Automation Build",
        price: "from $900",
        details: "End-to-end workflow setup using APIs, triggers, and repeatable logic.",
      },
      {
        name: "Ops Retainer",
        price: "custom",
        details: "Ongoing updates, monitoring, and improvements as your operations evolve.",
      },
    ],
    deliverables: [
      "Process map and implementation plan",
      "Automated notifications, routing, or task creation",
      "Error handling and fallback logic",
      "Documentation for future maintenance",
    ],
  },
  "ai-machine-learning": {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    eyebrow: "Applied AI systems",
    summary: "Build practical AI features that help users, support teams, or internal operations.",
    description:
      "I help teams turn AI ideas into usable product features and data-driven workflows that solve real problems.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80",
    promise: "Focused on practical outcomes, not AI theater.",
    pricing: [
      {
        name: "AI Discovery",
        price: "from $350",
        details: "Use-case review, feasibility check, and implementation options.",
      },
      {
        name: "Feature Prototype",
        price: "from $1,000",
        details: "Prototype of an AI-powered feature with a clear user workflow.",
      },
      {
        name: "Custom Build",
        price: "custom",
        details: "Production-ready integration with your app, data, and workflows.",
      },
    ],
    deliverables: [
      "Use-case definition and success criteria",
      "Prototype or integration plan",
      "Prompt, model, or workflow structure",
      "Handoff notes and iteration roadmap",
    ],
  },
  "ai-integrations": {
    slug: "ai-integrations",
    title: "AI Integrations",
    eyebrow: "Embedding AI into existing products",
    summary: "Add AI to your current tools, dashboards, and workflows without rebuilding everything.",
    description:
      "I integrate AI APIs and model-driven features into existing products so the experience feels native and useful.",
    image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=1600&q=80",
    promise: "The goal is useful integration, not just adding a chatbot widget.",
    pricing: [
      {
        name: "Integration Plan",
        price: "from $250",
        details: "Assessment of where AI fits into your current product and tech stack.",
      },
      {
        name: "Feature Integration",
        price: "from $850",
        details: "API wiring, UI integration, and testing for one AI-powered feature.",
      },
      {
        name: "System Integration",
        price: "custom",
        details: "Multiple product touchpoints, automation layers, and long-term support.",
      },
    ],
    deliverables: [
      "Integration architecture and rollout plan",
      "Frontend and backend implementation",
      "Testing guidance and fallback states",
      "Documentation for internal teams",
    ],
  },
}
