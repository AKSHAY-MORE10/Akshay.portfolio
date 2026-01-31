import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

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
    transition: { staggerChildren: 0.12 },
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
        className="container mx-auto max-w-7xl px-4 sm:px-6"
      >
        {/* CARD */}
        <div className="rounded-3xl border border-muted bg-muted/20">

          {/* TOP CONTENT */}
          <div className="grid gap-12 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-2 lg:px-14 lg:py-16">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-block rounded-full bg-muted px-5 py-2 text-xs font-medium tracking-wide text-foreground opacity-80">
                About me
              </span>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                My story
              </h2>

              <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
                I started my journey right after high school, driven by curiosity
                for how modern websites and digital products are built.
              </p>

              <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
                During college, I specialized in{" "}
                <span className="font-medium text-foreground">
                  Data Science
                </span>
                , where I discovered my interest in machine learning and AI.
              </p>

              <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
                Today, I work at the intersection of{" "}
                <span className="font-medium text-foreground">
                  web development, AI, and data
                </span>
                — building clean interfaces and smart systems.
              </p>

              {/* WHAT I DO */}
              <div className="space-y-2 pt-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  What I do
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                  <li>• Full-stack web development</li>
                  <li>• Machine learning & AI projects</li>
                  <li>• Data analysis & system design</li>
                  <li>• Creative problem-solving with code</li>
                </ul>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                <Button variant="outline" size="lg" className="rounded-full">
                  View Projects
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                  onClick={() =>
                    window.location.href =
                      "https://cal.com/akshay-more-hzl9du/business-growth-with-ai-1-1-discovery-call?duration=15&overlayCalendar=true"
                  }
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
              <div className="relative w-full max-w-md overflow-hidden rounded-3xl h-[260px] sm:h-[360px] md:h-[420px]">
                <img
                  src="https://raw.githubusercontent.com/designali-in/designali/2a5d38f658ab24084e3260cdba2259fdc44ae2cd/apps/www/public/placeholder.svg"
                  alt="About visual"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* PEOPLE SECTION */}
     <div className="border-t border-muted px-6 py-14 sm:px-10 sm:py-16 lg:px-14">
  <motion.h3
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-2xl font-semibold tracking-tight sm:text-3xl"
  >
    People I collaborate with
  </motion.h3>

  {/* MOBILE: horizontal scroll | DESKTOP: grid */}
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="
      mt-8
      flex gap-5 overflow-x-auto pb-4
      snap-x snap-mandatory
      sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pb-0
      lg:grid-cols-4 lg:gap-4
    "
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
        className="
          group relative overflow-hidden rounded-2xl
          min-w-[260px] sm:min-w-0
          snap-start
        "
      >
        <img
          src="https://raw.githubusercontent.com/designali-in/designali/2a5d38f658ab24084e3260cdba2259fdc44ae2cd/apps/www/public/placeholder.svg"
          alt={member.name}
          className="
            h-[260px] sm:h-[220px]
            w-full
            object-cover
            transition-transform
            duration-300
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
          <p className="font-medium leading-tight">
            {member.name}
          </p>
          <p className="text-xs opacity-90">
            {member.role}
          </p>
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
