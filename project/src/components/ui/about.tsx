import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import profileImage from "../../FONT/sixth.jpeg"

// ─── Animations ───
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
  }),
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

// ─── Animated Counter ───
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!started) return
    let frame: number
    const duration = 1600
    const start = performance.now()

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setCount(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [started, target])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true)
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

// ─── Floating Photo with Tilt ───
function TiltPhoto() {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 })

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative mx-auto w-full max-w-[380px] perspective-[1200px]"
    >
      {/* Glow ring behind photo */}
      <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-lime-400/20 via-emerald-400/10 to-teal-400/20 blur-2xl opacity-60 dark:opacity-40" />

      {/* Photo card */}
      <div className="relative overflow-hidden rounded-3xl border border-muted/50 bg-background/50 p-2 backdrop-blur-sm">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={profileImage}
            alt="Akshay More"
            className="h-[360px] sm:h-[420px] w-full object-cover object-top transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Status badge on photo */}
        <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime-500" />
          </span>
          <span className="text-xs font-medium text-white/90">Available for work</span>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Marquee Skills Ticker ───
const skills = [
  // Frontend
  "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vite", "Framer Motion",
  // Backend
  "Node.js", "Express.js", "FastAPI", "Flask", "REST APIs", "API Integration", "Webhooks", "JWT Authentication",
  // AI / ML
  "Python", "Machine Learning", "Deep Learning", "Data Science", "AI Agents", "LLM Integration", "Prompt Engineering", "RAG Pipelines", "LangChain", "LangGraph", "MCP", "OpenAI API", "Ollama", "Transformers", "TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision", "Neural Networks", "Face Recognition",
  // Databases
  "PostgreSQL", "MongoDB", "Supabase", "Firebase", "ChromaDB", "FAISS",
  // Data & Analytics
  "SQL", "Pandas", "NumPy", "Jupyter Notebook",
  // DevOps & Tools
  "Docker", "Git", "GitHub", "CI/CD", "Postman", "Vercel",
  // Automation
  "n8n", "Workflow Automation", "Automation",
  // Concepts
  "System Design", "Data Structures", "Algorithms", "Object-Oriented Programming",
];

function SkillsTicker() {
  const mid = Math.ceil(skills.length / 3);
  const row1 = skills.slice(0, mid);
  const row2 = skills.slice(mid);

  const renderRow = (row: string[], reverse: boolean, duration: number) => {
    return (
      <div className="flex w-max">
        <motion.div
          className="flex gap-4 pr-4"
          animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: duration,
          }}
        >
          {[...row, ...row].map((skill, i) => (
            <span
              key={i}
              className="inline-flex shrink-0 items-center rounded-full border border-muted bg-muted/30 px-4 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-foreground/20 hover:text-foreground"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden py-4 flex flex-col gap-4 w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

 {renderRow(row1, true, 100)}
{renderRow(row2, false, 110)}
    </div>
  )
}

// ─── Main About Section ───
export function AboutSection() {
  const stats = [
    { value: 10, suffix: "+", label: "Projects Shipped" },
    { value: 3, suffix: "+", label: "Years of Learning" },
    { value: 5, suffix: "+", label: "Happy Clients" },
    { value: 3, suffix: "", label: "Products Live" },
  ]

  return (
    <section id="about" className="w-full py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">

        {/* ─── Top: Photo + Bio ─── */}
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-center">

          {/* Photo — left col (2/5) */}
          <div className="lg:col-span-2">
            <TiltPhoto />
          </div>

          {/* Content — right col (3/5) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Badge */}
            <motion.span
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 rounded-full border border-muted bg-muted/30 px-5 py-2 text-xs font-medium tracking-wide text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
              About me
            </motion.span>

            {/* Headline */}
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl !leading-tight"
            >
              I build things at the{" "}
              <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                intersection
              </span>{" "}
              of code & intelligence.
            </motion.h2>

           {/* Bio */}
<motion.div variants={fadeUp} custom={2} className="space-y-4">
  <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
    I'm <span className="font-medium text-foreground">Akshay More</span>, an{" "}
    <span className="font-medium text-foreground">AI & Full-Stack Developer</span>{" "}
    specializing in AI-powered applications, modern web development, and workflow
    automation. I enjoy building scalable products that combine clean user
    experiences with intelligent systems.
  </p>

  <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
    My work includes AI agents, RAG pipelines, full-stack web applications,
    chatbots, and automation solutions using React, Next.js, TypeScript, Python,
    FastAPI, Node.js, and modern LLMs. I'm passionate about turning ideas into
    reliable, production-ready software that creates real value.
  </p>
</motion.div>

            {/* What I do — pills */}
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-2 pt-2">
              {[
                "Full-Stack Development",
                "AI & Machine Learning",
                "Automation Systems",
                "Data Analysis",
                "System Design",
                "Content Creation",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-muted bg-muted/20 px-4 py-1.5 text-xs font-medium text-foreground/80 transition-all hover:border-foreground/20 hover:bg-muted/40"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-3 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-transform hover:scale-105 active:scale-95"
              >
                View my work
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="https://cal.com/akshay-more-hzl9du/business-growth-with-ai-1-1-discovery-call?duration=15&overlayCalendar=true"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-muted px-6 py-2.5 text-sm font-medium text-foreground/80 transition-all hover:border-foreground/30 hover:text-foreground"
              >
                Let's talk
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* ─── Stats Bar ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              custom={i}
              className="group relative overflow-hidden rounded-2xl border border-muted bg-muted/10 p-6 text-center transition-colors hover:bg-muted/20"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-lime-500/10 blur-2xl" />
              </div>

              <div className="relative">
                <p className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ─── Skills Ticker ─── */}
        {/* <div className="mt-12">
          <SkillsTicker />
        </div> */}

        {/* ─── Collaborators ─── */}
        {/*
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="mt-16"
        >
          <motion.h3
            variants={fadeUp}
            custom={0}
            className="text-xl font-semibold tracking-tight sm:text-2xl"
          >
            People I collaborate with
          </motion.h3>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-5">
            {[
              { name: "Nitesh Khushwaha", role: "Softwere Developer" },
              { name: "Siddhant Gavali", role: "Lead Designer" },
              { name: "Ayush", role: "Senior Developer" },
              { name: "Casey Brown", role: "Project Manager" },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                custom={i + 1}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-muted bg-muted/10 p-5 transition-colors hover:bg-muted/20"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-lime-400/80 to-emerald-500/80 text-sm font-bold text-white">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <p className="font-medium text-sm leading-tight">{member.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        */}

      </div>
    </section>
  )
}
