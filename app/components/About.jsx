"use client"

import { useEffect, useRef, useState } from "react"
import { Search, TrendingUp, BookOpenCheck, ArrowUpRight } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Results-Focused SEO",
      description: "Creating strategies that move rankings & traffic",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Marketing Growth",
      description: "Solving real challenges with measurable impact",
    },
    {
      icon: <BookOpenCheck className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Always testing, improving & scaling campaigns",
    },
    {
      icon: <ArrowUpRight className="w-6 h-6" />,
      title: "Data-Backed Decisions",
      description: "Helping brands grow through smart analytics",
    },
  ]

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="space-y-6 text-left">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Marketing graduate skilled in{" "}
                  <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">SEO</span>,{" "}
                  <span className="font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded">Google Ads</span>,{" "}
                  <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">WordPress</span>,{" "}
                  <span className="font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded">GA4</span>, and
                  performance marketing.
                </p>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Known for <span className="font-semibold text-gray-800">fast learning</span>,{" "}
                  <span className="font-semibold text-gray-800">strategic thinking</span>, and{" "}
                  <span className="font-semibold text-gray-800">data-driven growth</span>. I’m passionate about helping
                  businesses rank better, generate leads, and get measurable results through search.
                </p>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Based in{" "}
                  <span className="font-semibold text-gray-800 bg-gray-100 px-2 py-1 rounded">Islamabad, Pakistan</span>,
                  I bring a balance of creativity and analytics to every campaign, focusing on results that actually
                  move the needle.
                </p>
              </div>

              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>

                  {/* Animated Code Elements */}
                  <div className="absolute top-8 left-8 text-blue-600 font-mono text-sm opacity-60">
                    {"<seo>"}
                  </div>
                  <div className="absolute bottom-8 right-8 text-purple-600 font-mono text-sm opacity-60">
                    {"</seo>"}
                  </div>

                  <div className="text-8xl font-bold text-gray-200 relative z-10">AWAIS</div>

                  {/* Floating Tech Icons */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center animate-pulse">
                    <Search className="w-6 h-6 text-blue-600" />
                  </div>
                  <div
                    className="absolute bottom-6 left-6 w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                  </div>
                  <div
                    className="absolute top-1/2 left-6 w-8 h-8 bg-blue-400/10 rounded-lg flex items-center justify-center animate-pulse"
                    style={{ animationDelay: "1s" }}
                  >
                    <ArrowUpRight className="w-4 h-4 text-blue-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-blue-600 group-hover:text-purple-600 transition-colors duration-300">
                        {highlight.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
