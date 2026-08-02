import { FocusCards } from "./ui/focus-cards";

const cards = [
  {
    title: "CyberAscii Vision — AI-Powered ASCII Camera",
    src: "/cyberascii-vision.svg",
    link: "https://ascii-yourself-eight.vercel.app/",
  },
  {
    title: "SnapClass — AI Attendance System",
    src: "/snapclass.png",
    link: "https://snapclass-rose.vercel.app/",
  },
  {
    title: "IntervuAI — AI Interview Practice",
    src: "/intervuai.png",
    link: "https://intervu-ai-six.vercel.app/sign-in",
  },
  // {
  //   title: "Automation Dashboard",
  //   src: "https://images.pexels.com/photos/12341218/pexels-photo-12341218.jpeg",
  // },
  // {
  //   title: "AI Web Platform",
  //   src: "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg",
  // },
  // {
  //   title: "SaaS Landing Page",
  //   src: "https://images.pexels.com/photos/831243/pexels-photo-831243.jpeg",
  // },
  // {
  //   title: "Portfolio Website",
  //   src: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
  // },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 md:py-20">
      <div className="container max-w-7xl px-6 md:px-10">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Featured Work
          </span>

          <h2 className="mt-4 font-bosch text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Projects Built at the{" "}
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Intersection of Product and AI
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A curated selection of products where I blended web engineering,
            automation, and practical system design to solve real user problems.
          </p>
        </div>

        {/* Focus Cards */}
        <FocusCards cards={cards} />
      </div>
    </section>
  );
}
