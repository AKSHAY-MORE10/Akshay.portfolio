import { TestimonialsSection } from "./blocks/testimonials-with-marquee"

// Base testimonials (single set)
const baseTestimonials = [
  {
    author: {
      name: "Rohit Sharma",
      handle: "@rohitbuilds",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    text:
      "Akshay helped us automate internal workflows that were eating up hours every week.",
  },
  {
    author: {
      name: "Sneha Kulkarni",
      handle: "@sneha.designs",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    },
    text:
      "He understands both design intent and technical constraints really well.",
  },
  {
    author: {
      name: "Aman Verma",
      handle: "@amanverma",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    },
    text:
      "Fast delivery, clean execution, and solid communication throughout.",
  },
]

// 🔁 repeat testimonials for smooth marquee loop
const testimonials = Array.from({ length: 3 }, () => baseTestimonials).flat()

export function TestimonialsBlock() {
  return (
    <TestimonialsSection
      title="What people say"
      description="Feedback from clients, collaborators, and teams I’ve worked with"
      testimonials={testimonials}
    />
  )
}
