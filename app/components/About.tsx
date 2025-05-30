"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Zap, Users, Target } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "GoLang, JavaScript, PostgreSQL",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Learning",
      description: "Quick adaptation to new technologies",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Creative solutions to complex challenges",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Automation Expert",
      description: "Workflow optimization and efficiency",
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
                  Computer Science graduate skilled in{" "}
                  <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">GoLang</span>,{" "}
                  <span className="font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded">JavaScript</span>,{" "}
                  <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">PostgreSQL</span>,{" "}
                  <span className="font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded">GHL CRM</span>, and
                  more.
                </p>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Known for <span className="font-semibold text-gray-800">fast learning</span>,{" "}
                  <span className="font-semibold text-gray-800">problem-solving</span>, and{" "}
                  <span className="font-semibold text-gray-800">automation</span>. I'm passionate about creating
                  efficient solutions that bridge the gap between complex backend systems and intuitive user
                  experiences.
                </p>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Based in{" "}
                  <span className="font-semibold text-gray-800 bg-gray-100 px-2 py-1 rounded">Islamabad, Pakistan</span>
                  , I bring a unique perspective to every project, combining technical expertise with creative
                  problem-solving to deliver exceptional results.
                </p>

                <div className="pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">What drives me:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      Creating clean, maintainable code
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      Solving complex technical challenges
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      Continuous learning and growth
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      Building user-centric solutions
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>

                  {/* Animated Code Elements */}
                  <div className="absolute top-8 left-8 text-blue-600 font-mono text-sm opacity-60">
                    {"<developer>"}
                  </div>
                  <div className="absolute bottom-8 right-8 text-purple-600 font-mono text-sm opacity-60">
                    {"</developer>"}
                  </div>

                  <div className="text-8xl font-bold text-gray-200 relative z-10">ZA</div>

                  {/* Floating Tech Icons */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center animate-pulse">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <div
                    className="absolute bottom-6 left-6 w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <Zap className="w-5 h-5 text-purple-600" />
                  </div>
                  <div
                    className="absolute top-1/2 left-6 w-8 h-8 bg-blue-400/10 rounded-lg flex items-center justify-center animate-pulse"
                    style={{ animationDelay: "1s" }}
                  >
                    <Target className="w-4 h-4 text-blue-500" />
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
