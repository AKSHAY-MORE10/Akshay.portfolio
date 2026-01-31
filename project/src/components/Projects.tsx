import React, { useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"

// ---------------- CARD ----------------

export const Card = ({
  imageUrl,
  children,
  className,
  imageClassName,
  contentClassName,
}: {
  imageUrl: string
  children: React.ReactNode
  className?: string
  imageClassName?: string
  contentClassName?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [direction, setDirection] = useState<
    "top" | "right" | "bottom" | "left"
  >("left")

  const getDirection = (
    e: React.MouseEvent<HTMLDivElement>,
    element: HTMLElement
  ) => {
    const { width, height, left, top } = element.getBoundingClientRect()
    const x = e.clientX - left - width / 2
    const y = e.clientY - top - height / 2
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4
    return ["top", "right", "bottom", "left"][d]
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    setDirection(getDirection(e, ref.current))
  }

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-muted bg-background shadow-sm",
        "h-[240px] sm:h-[280px] md:h-[320px]",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="relative h-full w-full"
          initial="initial"
          whileHover={direction}
          exit="exit"
        >
          {/* Overlay */}
          <div className="absolute inset-0 z-10 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100" />

          {/* Image */}
          <motion.div
            variants={imageVariants}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={imageUrl}
              alt="Project preview"
              className={cn(
                "h-full w-full object-cover scale-110 transition-transform duration-500 group-hover:scale-105",
                imageClassName
              )}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={textVariants}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={cn(
              "absolute bottom-4 left-4 right-4 z-20",
              "text-white",
              "opacity-100 sm:opacity-0 sm:group-hover:opacity-100",
              contentClassName
            )}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

// ---------------- ANIMATIONS ----------------

const imageVariants = {
  initial: { x: 0, y: 0 },
  top: { y: 16 },
  bottom: { y: -16 },
  left: { x: 16 },
  right: { x: -16 },
  exit: { x: 0, y: 0 },
}

const textVariants = {
  initial: { opacity: 0, y: 10 },
  top: { opacity: 1, y: -8 },
  bottom: { opacity: 1, y: 0 },
  left: { opacity: 1, x: -6 },
  right: { opacity: 1, x: 6 },
  exit: { opacity: 0 },
}

// ---------------- PROJECTS SECTION ----------------

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 md:py-10">
      <div className="container max-w-7xl rounded-3xl border border-muted bg-muted/20 px-6 py-12 md:px-10">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            A selection of projects where I explored web development, automation,
            and system design.
          </p>
        </div>

        {/* Grid */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card imageUrl="https://images.pexels.com/photos/12341218/pexels-photo-12341218.jpeg">
            <div>
              <h3 className="text-lg font-semibold">Automation Dashboard</h3>
              <p className="text-sm text-neutral-300">
                Workflow automation & internal tooling
              </p>
            </div>
          </Card>

          <Card imageUrl="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg">
            <div>
              <h3 className="text-lg font-semibold">AI Web Platform</h3>
              <p className="text-sm text-neutral-300">
                Smart features powered by AI APIs
              </p>
            </div>
          </Card>

          <Card imageUrl="https://images.pexels.com/photos/831243/pexels-photo-831243.jpeg">
            <div>
              <h3 className="text-lg font-semibold">SaaS Landing Page</h3>
              <p className="text-sm text-neutral-300">
                High-conversion marketing website
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
