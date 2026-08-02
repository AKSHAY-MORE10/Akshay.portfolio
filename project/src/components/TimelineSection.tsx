import { Timeline } from "../components/ui/timeline";
// import screenshot1 from "../FONT/Screenshot 2026-01-31 111718.png";
import screenshot2 from "../FONT/Screenshot 2026-01-31 111733.png";
import screenshot3 from "../FONT/Screenshot 2026-01-31 111809.png";
import screenshot4 from "../FONT/Screenshot 2026-01-31 111933.png";
import screenshot5 from "../FONT/Screenshot 2026-01-31 112455.png";

export function TimelineSection() {
  const data = [
    {
      title: "2026",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-6">
            2026 has been focused on becoming a better engineer and preparing
            for the next stage of my career. I'm actively applying for AI and
            Full-Stack roles while continuously improving my technical skills
            through real-world projects and hands-on learning.
          </p>

          <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-8">
            Alongside job preparation, I'm building AI products, exploring
            agentic AI, RAG systems, and modern LLMs, contributing to
            open-source projects, and sharing my journey through content
            creation while continuously improving Brezix Studio.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src={screenshot5}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full object-contain opacity-70"
              alt="Timeline image 1"
            />
            <img
              src={screenshot2}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full object-contain opacity-70"
              alt="Timeline image 2"
            />
            <img
              src={screenshot3}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full object-contain opacity-70"
              alt="Timeline image 3"
            />
            <img
              src={screenshot4}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full object-contain opacity-70"
              alt="Timeline image 4"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
         <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-6">
        2025 was the year I started working professionally. I joined Brezix
        Studio as an AI Engineer and completed my Full Stack Engineering
        internship, where I worked on AI-powered applications, automation
        systems, and scalable web solutions for real clients.
      </p>

      <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-8">
        This year helped me gain practical experience in software development,
        client communication, system design, and delivering production-ready
        applications while strengthening my foundation in AI engineering and
        full-stack development.
      </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70"
            />
          </div>
        </div>
      ),
    },

    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-6">
        Transitioned from learning to building real-world software. Focused on
        full-stack development, backend engineering, databases, and modern web
        technologies while creating practical projects.
      </p>

      <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-8">
        Started exploring Artificial Intelligence, Machine Learning, APIs, cloud
        deployment, and automation while strengthening problem-solving and
        software development fundamentals.
      </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70"
            />
          </div>
        </div>
      ),
    },

    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-6">
            2023 marked the foundation phase of my journey. I focused heavily on
            learning core programming concepts and web development skills.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-8">
            I worked with HTML, CSS, JavaScript, and full-stack basics while
            building small projects that helped me understand how the web works.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70"
            />
          </div>
        </div>
      ),
    },

    {
      title: "2021 – 2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-6">
            During this period, my focus was mainly on academics and exploring
            different interests. College life helped shape my discipline and
            mindset.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-8">
            Alongside studies, I began learning new technical skills casually,
            laying the groundwork for my future in tech.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70"
            />
          </div>
        </div>
      ),
    },

    {
      title: "Early Stage",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-6">
            In my early years, I was primarily focused on education and personal
            growth. This phase built the discipline and curiosity that later
            pushed me toward technology.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-8">
            Looking back, this stage shaped how I approach learning and
            long-term goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <Timeline data={data} />
    </section>
  );
}
