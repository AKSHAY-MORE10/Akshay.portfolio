import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
  id="home"
  className="
    min-h-[70vh]
    lg:min-h-[85vh]
    w-full
    flex items-center
    px-6 sm:px-10 lg:px-20
    py-16 sm:py-20
  "
>
  <div className="w-full max-w-7xl mx-auto">
    <div className="max-w-6xl space-y-6 sm:space-y-8">
      {/* Hero Heading */}
      <h1
        className="
          font-bosch tracking-tight
          leading-[1.15] sm:leading-[1.1]
          text-gray-800 dark:text-gray-200
        "
      >
        <span className="font-semibold block text-[2.35rem] sm:text-4xl md:text-5xl lg:text-8xl opacity-90">
          Scalable systems, built with care.
        </span>

        <span className="font-medium block text-[1.6rem] sm:text-2xl md:text-3xl lg:text-4xl opacity-70 mt-4 sm:mt-5">
          Web, automation, and machine learning - done right.
        </span>

        <span className="font-light block text-base sm:text-lg md:text-xl lg:text-4xl opacity-60 mt-4 sm:mt-1 tracking-normal">
          Built to grow with you.
        </span>
      </h1>

      {/* Sub Text */}
      <p
        className="text-sm sm:text-base md:text-lg max-w-xl
                   text-gray-600 dark:text-gray-400
                   leading-relaxed"
      >
        I help teams build, scale, and release great products that feel{" "}
        <span
          className="bg-lime-300/80 dark:bg-lime-200
                         text-gray-900 px-1 rounded"
        >
          natural
        </span>
        .
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 pt-2">
        <a
          href="#blog"
          className="border border-gray-300 dark:border-gray-500
                     text-gray-700 dark:text-gray-200
                     px-6 py-2.5 rounded-full text-sm
                     hover:border-gray-500 dark:hover:border-gray-300
                     transition"
        >
          Blog
        </a>

        <a
          href="https://cal.com/akshay-more-hzl9du/business-growth-with-ai-1-1-discovery-call?user=akshay-more-hzl9du&duration=15&overlayCalendar=true"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-200/80 dark:bg-gray-200
                     text-gray-900
                     px-7 py-2.5 rounded-full text-sm font-medium
                     hover:bg-gray-300/80 dark:hover:bg-gray-300/80 transition
                     inline-block"
        >
          Get in touch
        </a>
      </div>

      {/* Social Links */}
      <div
        className="flex gap-6 pt-2 text-lg
                   text-gray-600 dark:text-gray-400"
      >
        <a href="https://github.com/AKSHAY-MORE10" target="_blank" rel="noreferrer" className="hover:text-gray-800 dark:hover:text-gray-200 transition">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/akshaymore10" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/akshay.overfit/" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition">
          <FaInstagram />
        </a>
        <a href="mailto:akshaybapumore@gmail.com" className="hover:text-red-500 transition">
          <FaEnvelope />
        </a>
      </div>
    </div>
  </div>
</section>
  );
}
