import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FaCalendar } from "react-icons/fa"

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-16 sm:py-20 lg:py-20 font-urbanist"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeIn}
        className="container mx-auto max-w-7xl"
      >
        {/* Card wrapper */}
        <div className="rounded-3xl border border-muted bg-muted/20">
          {/* TOP SECTION */}
          <div className="grid gap-10 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-2 lg:px-14 lg:py-16">
            
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-block rounded-full bg-muted px-5 py-3 text-xs font-medium tracking-wide opacity-80 text-foreground">
                About me
              </span>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                My story
              </h2>

              <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
                I started my journey right after high school, driven by curiosity for how
                modern websites and digital products are built. What began as an interest
                in frontend design slowly evolved into a deeper passion for technology
                itself.
              </p>

              <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
                During college, I specialized in <span className="font-medium text-foreground">
                Data Science</span>, where I discovered my interest in machine learning,
                artificial intelligence, and how intelligent systems actually work behind
                the scenes.
              </p>

              <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
                Today, I work at the intersection of <span className="font-medium text-foreground">
                web development, AI, and data</span> — building clean interfaces, scalable
                systems, and smart solutions that solve real-world problems.
              </p>

              {/* WHAT I DO */}
              <div className="space-y-2 pt-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  What I do
                </p>
                <ul className="space-y-1 text-muted-foreground text-sm sm:text-base">
                  <li>• Full-stack web development</li>
                  <li>• Machine learning & AI projects</li>
                  <li>• Data analysis & system design</li>
                  <li>• Creative problem-solving with code</li>
                </ul>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                >
                  View Projects
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                  onClick={() => {
                    window.location.href = "https://cal.com/akshay-more-hzl9du/business-growth-with-ai-1-1-discovery-call?user=akshay-more-hzl9du&duration=15&overlayCalendar=true"
                  }}
                >
                  Contact Me
                </Button>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-full overflow-hidden rounded-3xl h-[280px] sm:h-[360px] md:h-[420px] lg:h-[460px]">
                <img
                  src="https://raw.githubusercontent.com/designali-in/designali/2a5d38f658ab24084e3260cdba2259fdc44ae2cd/apps/www/public/placeholder.svg?height=1080&width=1920"
                  alt="About visual"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* TEAM SECTION */}
          <div className="border-t border-muted px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              People I collaborate with
            </motion.h3>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
            >
              {[
                { name: "Nitesh Khushwaha", role: "Creative Director" },
                { name: "Siddhant Gavali", role: "Lead Designer" },
                { name: "Ayush", role: "Senior Developer" },
                { name: "Casey Brown", role: "Project Manager" },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemFadeIn}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <img
                    src="https://raw.githubusercontent.com/designali-in/designali/2a5d38f658ab24084e3260cdba2259fdc44ae2cd/apps/www/public/placeholder.svg?height=400&width=300"
                    alt={member.name}
                    className="h-[220px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-3 text-white">
                    <p className="font-medium leading-tight">{member.name}</p>
                    <p className="text-xs opacity-90">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
