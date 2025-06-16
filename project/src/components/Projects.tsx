import React from 'react';
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Card = ({
  imageUrl,
  children,
  className,
  imageClassName,
  contentClassName,
}: {
  imageUrl: string;
  children: React.ReactNode;
  className?: string;
  imageClassName?: string;
  contentClassName?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<
    "top" | "right" | "bottom" | "left"
  >("left");

  const getDirection = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    element: HTMLElement
  ) => {
    const { width, height, left, top } = element.getBoundingClientRect();
    const x = e.clientX - left - (width / 2) * (width > height ? height / width : 1);
    const y = e.clientY - top - (height / 2) * (height > width ? width / height : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const dir = getDirection(e, ref.current);
    const dirMap = ["top", "right", "bottom", "left"];
    setDirection(dirMap[dir] as "top" | "right" | "bottom" | "left");
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      className={cn(
        "relative group/card overflow-hidden rounded-xl w-56 h-56 md:w-80 md:h-80 border border-muted",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="relative w-full h-full"
          initial="initial"
          whileHover={direction}
          exit="exit"
        >
          <motion.div className="group-hover/card:block hidden absolute inset-0 bg-black/40 z-10 transition duration-500" />
          <motion.div
            variants={imageVariants}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn("h-full w-full relative bg-gray-100 dark:bg-gray-900", imageClassName)}
          >
            {/* Replace with actual Image component and src if using Next.js Image */}
            <img
              alt="Card image"
              className={cn("h-full w-full object-cover scale-[1.15]", imageClassName)}
              src={imageUrl} // Use imageUrl prop
            />
          </motion.div>
          <motion.div
            variants={textVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn("absolute bottom-4 left-4 text-white z-40", contentClassName)}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

// Animation Variants
const imageVariants = {
  initial: { x: 0, y: 0 },
  exit: { x: 0, y: 0 },
  top: { y: 20 },
  bottom: { y: -20 },
  left: { x: 20 },
  right: { x: -20 },
};

const textVariants = {
  initial: { x: 0, y: 0, opacity: 0 },
  exit: { x: 0, y: 0, opacity: 0 },
  top: { y: -20, opacity: 1 },
  bottom: { y: 2, opacity: 1 },
  left: { x: -2, opacity: 1 },
  right: { x: 20, opacity: 1 },
};

export default function Page() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-30">
      <div className="container px-4 md:px-6 border border-muted rounded-3xl bg-muted/20 py-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
          <h2 className="text-3xl font-simebolt tracking-tighter sm:text-4xl md:text-6xl">My Projects</h2>
          <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here are some of the projects I have worked on.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-center justify-center gap-10 py-12 lg:grid-cols-3">
          {/* Project Card 1 */}
          <Card imageUrl="https://images.pexels.com/photos/12341218/pexels-photo-12341218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
            <div>
              <h3 className="text-xl font-bold">Project 1 Title</h3>
              <p className="text-sm text-neutral-300">Project 1 description.</p>
            </div>
          </Card>
          {/* Project Card 2 */}
          <Card imageUrl="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
            <div>
              <h3 className="text-xl font-bold">Project 2 Title</h3>
              <p className="text-sm text-neutral-300">Project 2 description.</p>
            </div>
          </Card>
          {/* Project Card 3 */}
          <Card imageUrl="https://images.pexels.com/photos/831243/pexels-photo-831243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
            <div>
              <h3 className="text-xl font-bold">Project 3 Title</h3>
              <p className="text-sm text-neutral-300">Project 3 description.</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
} 