'use client'

import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full border-t border-muted bg-muted/20 px-6 py-14">
      <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">
            Akshay
          </h3>
          <p className="text-sm text-muted-foreground max-w-xs">
            I’m Akshay — a Web Developer, automation builder, and AI explorer.
            Thanks for visiting my portfolio!
          </p>

          <p className="text-xs text-muted-foreground pt-4">
            © {new Date().getFullYear()} Akshay More
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://www.linkedin.com/in/akshaymore10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/AKSHAY-MORE10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:akshaybapumore@gmail.com"
              className="text-muted-foreground hover:text-foreground transition"
            >
              <MailIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* General */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium">General</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#home" className="hover:text-foreground">Home</a></li>
            <li><a href="#about" className="hover:text-foreground">About</a></li>
            <li><a href="#projects" className="hover:text-foreground">Projects</a></li>
            <li><a href="#blog" className="hover:text-foreground">Blog</a></li>
          </ul>
        </div>

        {/* Specifics */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Specifics</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#toolbox" className="hover:text-foreground">Toolbox</a></li>
            <li><a href="#events" className="hover:text-foreground">Events & Hackathons</a></li>
            <li><a href="#community" className="hover:text-foreground">Community Wall</a></li>
          </ul>
        </div>

        {/* Extra */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Extra</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#experience" className="hover:text-foreground">Experiences</a></li>
            <li><a href="#skills" className="hover:text-foreground">Skills</a></li>
            <li><a href="#links" className="hover:text-foreground">Links</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
