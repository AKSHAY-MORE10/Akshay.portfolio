import { Timeline } from "../components/ui/timeline";
// import screenshot1 from "../FONT/Screenshot 2026-01-31 111718.png";
import screenshot2 from "../FONT/Screenshot 2026-01-31 111733.png";
import screenshot3 from "../FONT/Screenshot 2026-01-31 111809.png";
import screenshot4 from "../FONT/Screenshot 2026-01-31 111933.png";
import screenshot5 from "../FONT/Screenshot 2026-01-31 112455.png";

export function TimelineSection() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-6">
            In 2025, my primary focus shifted toward building and scaling my own
            automation and web development agency. This year is all about systems,
            execution, and long-term brand building.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-8">
            Alongside client work, I also started experimenting with content creation
            — sharing what I learn about development, automation, and building in public.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src={screenshot5} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full object-contain opacity-70" alt="Timeline image 1" />
            <img src={screenshot2} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full object-contain opacity-70" alt="Timeline image 2" />
            <img src={screenshot3} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full object-contain opacity-70" alt="Timeline image 3" />
            <img src={screenshot4} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full object-contain opacity-70" alt="Timeline image 4" />
          </div>
        </div>
      ),
    },

    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-6">
            2024 was about execution. I actively worked on getting clients, building
            real-world projects, and understanding how businesses actually operate.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-8">
            This phase taught me how to communicate with clients, scope projects,
            deliver results, and improve my technical confidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src="https://assets.aceternity.com/pro/hero-sections.png" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70" />
            <img src="https://assets.aceternity.com/features-section.png" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70" />
            <img src="https://assets.aceternity.com/pro/bento-grids.png" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70" />
            <img src="https://assets.aceternity.com/cards.png" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70" />
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
            I worked with HTML, CSS, JavaScript, and full-stack basics while building
            small projects that helped me understand how the web works.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src="https://assets.aceternity.com/templates/startup-1.webp" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70" />
            <img src="https://assets.aceternity.com/templates/startup-2.webp" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70" />
            <img src="https://assets.aceternity.com/templates/startup-3.webp" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70" />
            <img src="https://assets.aceternity.com/templates/startup-4.webp" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70" />
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
            different interests. College life helped shape my discipline and mindset.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-8">
            Alongside studies, I began learning new technical skills casually,
            laying the groundwork for my future in tech.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src="https://assets.aceternity.com/pro/hero-sections.png" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70" />
            <img src="https://assets.aceternity.com/features-section.png" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70" />
            <img src="https://assets.aceternity.com/pro/bento-grids.png" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70" />
            <img src="https://assets.aceternity.com/cards.png" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70" />
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
            growth. This phase built the discipline and curiosity that later pushed
            me toward technology.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-8">
            Looking back, this stage shaped how I approach learning and long-term goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src="https://assets.aceternity.com/templates/startup-1.webp" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70" />
            <img src="https://assets.aceternity.com/templates/startup-2.webp" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70" />
            <img src="https://assets.aceternity.com/templates/startup-3.webp" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70" />
            <img src="https://assets.aceternity.com/templates/startup-4.webp" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full opacity-70" />
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
