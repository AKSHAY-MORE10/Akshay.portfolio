import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

// Animation variants - assuming these are needed
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-28 font-urbanist">
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container px-4 md:px-6 border border-muted rounded-3xl bg-muted/20"
      >
        <div className="grid gap-3 lg:grid-cols-2 lg:gap-3">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 p-6"
          >
            <div className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm font-sm">About me</div>
            <h2 className="text-3xl font-urbanist tracking-tighter sm:text-4xl md:text-4xl">My Story</h2>
            <p className="text-muted-foreground md:text-lg/relaxed">
              Started after high school, my journey in tech began with a love for cool websites and creative design. That spark led me into web development, but my deeper passion for AI and machine learning soon took over. With a Data Science specialization in college, I've been exploring how intelligent systems work and creating projects that bring tech ideas to life.
            </p>

            <p className="text-muted-foreground md:text-xl/relaxed">
              Our approach combines strategic thinking, creative excellence, and technical expertise to deliver
              solutions that not only look beautiful but also drive results.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="outline" size="lg" className="rounded-3xl">
                Our Process
              </Button>
              <Button variant="outline" size="lg" className="rounded-3xl">
                Join Our Team
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="relative h-[350px] w-full m-5 md:h-[450px] lg:h-[500px] overflow-hidden rounded-3xl">
              <img
                src="https://raw.githubusercontent.com/designali-in/designali/2a5d38f658ab24084e3260cdba2259fdc44ae2cd/apps/www/public/placeholder.svg?height=1080&width=1920"
                alt="Team Photo"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
        <div className="mt-4 px-6 pb-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold tracking-tighter sm:text-3xl"
          >
            Meet Our Team
          </motion.h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {[{ name: "Nitesh khushwaha", role: "Creative Director" }, { name: "Siddhant gavali", role: "Lead Designer" }, { name: "Ayush", role: "Senior Developer" }, { name: "Casey Brown", role: "Project Manager" },].map((member, index) => (
              <motion.div
                key={index}
                variants={itemFadeIn}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl"
              >
                <img
                  src="https://raw.githubusercontent.com/designali-in/designali/2a5d38f658ab24084e3260cdba2259fdc44ae2cd/apps/www/public/placeholder.svg?height=400&width=300"
                  alt={member.name}
                  width={300}
                  height={400}
                  className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                  <h4 className="font-bold">{member.name}</h4>
                  <p className="text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
} 