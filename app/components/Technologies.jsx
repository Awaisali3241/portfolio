'use client'

import Image from 'next/image'

const technologies = [
  { src: "/tools/SEMrush-logo.webp", alt: "SEMrush" },
  { src: "/tools/search-console-logo.webp", alt: "Search Console" },
  { src: "/tools/screaming-frog-logo.webp", alt: "Screaming Frog" },
  { src: "/tools/Moz-logo.webp", alt: "Moz" },
  { src: "/tools/google-analytics-icon.webp", alt: "Google Analytics" },
  { src: "/tools/chatgpt-seeklogo.webp", alt: "ChatGPT" },
  { src: "/tools/answer-the-public.webp", alt: "AnswerThePublic" },
  { src: "/tools/Ahrefs-logo.webp", alt: "Ahrefs" },
]

export default function Technologies() {
  return (
    <section id="technologies" className="py-24 bg-white relative overflow-hidden">
      {/* Gradient Blurred Circles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-24 left-24 w-64 h-64 bg-blue-100/30 blur-3xl rounded-full" />
        <div className="absolute bottom-24 right-24 w-64 h-64 bg-purple-100/30 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Technologies I Work With</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Marquee Wrapper */}
        <div className="overflow-hidden">
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={index} className="flex-shrink-0 w-40 h-24 flex items-center justify-center">
                <Image
                  src={tech.src}
                  alt={tech.alt}
                  width={80}
                  height={80}
                  className="object-contain max-h-20"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
