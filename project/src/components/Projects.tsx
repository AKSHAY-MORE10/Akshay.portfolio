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
  <section
  id="projects"
  className="relative w-full py-20 md:py-28 overflow-hidden"
>
  <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="mx-auto mb-16 max-w-4xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-primary" />
        Featured Work
      </span>

      <h2 className="mt-6 font-bosch text-4xl leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        Projects Built at the
        <br className="sm:hidden" />

        <span className="block bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
          Intersection of Product & AI
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
        A curated collection of AI-powered applications, full-stack products,
        and automation systems designed to solve real-world problems with a
        focus on performance, usability, and modern engineering.
      </p>
    </div>

    {/* Projects */}
    <div className="w-full">
      <FocusCards cards={cards} />
    </div>
  </div>
</section>
  );
}