'use client'

import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react'

export function Footer() {
  return (
    <footer
  className="
    w-full
    border-t border-muted
    bg-muted/20
    px-5
    pt-10
    pb-[calc(6rem+env(safe-area-inset-bottom))]
    sm:px-6 sm:py-10
    md:py-12
    lg:py-14
  "
>
  <div className="mx-auto max-w-6xl">
    <div
      className="
        flex flex-col
        gap-10
        md:grid md:grid-cols-2 md:gap-8
        lg:grid-cols-4 lg:gap-12
      "
    >

      {/* Brand */}
      <div className="space-y-5">
        <h3 className="text-xl font-semibold tracking-tight">
          Akshay
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
          I'm Akshay — a Web Developer, automation builder, and AI explorer.
          Thanks for visiting my portfolio!
        </p>

        {/* Socials */}
        <div className="flex items-center gap-5 pt-1">
          <a
            href="https://www.linkedin.com/in/akshaymore10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>

          <a
            href="https://github.com/AKSHAY-MORE10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </a>

          <a
            href="mailto:akshaybapumore@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground pt-3">
          © {new Date().getFullYear()} Akshay More
        </p>
      </div>

      {/* General */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium tracking-wide">
          General
        </h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li><a href="#home" className="hover:text-foreground transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
          <li><a href="#projects" className="hover:text-foreground transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
        </ul>
      </div>

      {/* Specifics */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium tracking-wide">
          Specifics
        </h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li><a href="#toolbox" className="hover:text-foreground transition-colors">Toolbox</a></li>
          <li><a href="#events" className="hover:text-foreground transition-colors">Events & Hackathons</a></li>
          <li><a href="#community" className="hover:text-foreground transition-colors">Community Wall</a></li>
        </ul>
      </div>

      {/* Extra */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium tracking-wide">
          Extra
        </h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li><a href="#experience" className="hover:text-foreground transition-colors">Experiences</a></li>
          <li><a href="#skills" className="hover:text-foreground transition-colors">Skills</a></li>
          <li><a href="#links" className="hover:text-foreground transition-colors">Links</a></li>
        </ul>
      </div>

    </div>
  </div>
</footer>


  )
}
