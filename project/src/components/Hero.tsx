import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  // No need to use theme for background/text color here
  return (
    <div id="home" className="min-h-[85vh] w-full px-4 sm:px-6 lg:px-8 pt-10  pb-32 flex items-center justify-start relative">
      {/* Hero section */}
      <div className="w-full max-w-1xl mx-auto text-left space-y-8 md:mt-20 md:ml-10 lg:ml-30">
        {/* Main Hero Text */}
        <h1 className="text-3xl text-gray-200 sm:text-4xl md:text-5xl lg:text-7xl font-light leading-tight">
  <span className="font-semibold italic">We build madness.</span><br />
 <span className="font-semibold italic">Half human, half caffeine — all genius.</span> <br />
  <span className="font-semibold italic">Slide into our inbox before reality <br /> collapses.</span>
</h1>


        {/* Sub Text */}
        <p className="text-sm sm:text-base md:text-lg max-w-md">
          I help teams build, scale, and release great products that feel {" "}
          <span className="bg-lime-200 text-black px-1 rounded">natural</span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <button className="border px-4 py-2 rounded-full transition whitespace-nowrap  text-sm sm:text-base md:text-sm">
            Blog
          </button>
          <button
            className="px-5 py-2 rounded-full transition whitespace-nowrap bg-gray-200 text-black hover:bg-white text-sm sm:text-base md:text-sm"
          >
            Get in touch
          </button>
        </div>

        {/* Author Info */}
        {/* <div className="mt-8 md:mt-10 py-8 md:py-8 space-y-1">
          <h2 className="font-medium text-sm sm:text-xl md:text-xl">Akshay More</h2>
          <p className="text-sm sm:text-base">
            Machine Learning Engineer @ <span className="italic">Google</span>
          </p> */}

          {/* Social Icons */}
          {/* <div className="flex space-x-5 py-2 text-sm sm:text-xl">
            <a
              href="https://github.com/AKSHAY-MORE10"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="hover:text-gray-400 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/akshaymore10?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="hover:text-blue-400 transition" />
            </a>
            <a
              href="https://www.instagram.com/tf.akshhh?igsh=cnkxeHF1OTFicHcz&utm_source=qr"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="hover:text-pink-400 transition" />
            </a>
            <a href="mailto:akshaybapumore@gmail.com">
              <FaEnvelope className="hover:text-red-400 transition" />
            </a>
          </div> */}

        </div>


      </div>

    // </div>
  );
}