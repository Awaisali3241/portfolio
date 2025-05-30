"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, Monitor, Smartphone, Play, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "PC WatchTower",
      description:
        "Desktop application built with Go featuring real-time system monitoring and database logging. Provides comprehensive insights into system performance with an intuitive interface and advanced analytics.",
      icon: <Monitor className="w-10 h-10" />,
      technologies: ["GoLang", "Database", "Real-time Monitoring", "Desktop App", "Analytics"],
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      features: ["Real-time monitoring", "Database logging", "Performance analytics", "System insights"],
      status: "Completed",
    },
    {
      title: "Text-to-Speech App",
      description:
        "Android application developed in Kotlin that converts text to speech with customizable voice settings and multiple language support for enhanced accessibility and user experience.",
      icon: <Smartphone className="w-10 h-10" />,
      technologies: ["Kotlin", "Android", "TTS", "Mobile Development", "Accessibility"],
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      features: ["Multi-language support", "Voice customization", "Accessibility focused", "Intuitive UI"],
      status: "Completed",
    },
  ]

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Featured Projects</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
              <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                A showcase of my recent work, demonstrating my skills in full-stack development, mobile apps, and
                problem-solving.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 mb-16">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 300}ms` }}
                >
                  <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 group overflow-hidden h-full bg-white">
                    {/* Enhanced Project Header */}
                    <div className={`bg-gradient-to-br ${project.bgGradient} p-8 relative overflow-hidden`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -translate-y-20 translate-x-20"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-16 -translate-x-16"></div>
                        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-6">
                          <div
                            className={`text-white bg-gradient-to-r ${project.gradient} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            {project.icon}
                          </div>
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium text-gray-700">{project.status}</span>
                          </div>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-3">{project.title}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
                      </div>
                    </div>

                    <CardContent className="p-8">
                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <Play className="w-5 h-5 mr-2 text-blue-600" />
                          Key Features
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {project.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-gray-600">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 flex-shrink-0"></div>
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-100 hover:to-purple-100 text-gray-700 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default shadow-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          className="flex-1 group-hover:border-blue-500 group-hover:text-blue-600 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 group-hover:border-purple-500 group-hover:text-purple-600 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Enhanced More Projects CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 rounded-3xl p-10 shadow-xl border border-gray-100">
                <div className="max-w-4xl mx-auto">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">More Projects Coming Soon</h4>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    I'm constantly working on new projects and exploring innovative solutions. Check back soon for more
                    exciting developments, or connect with me to discuss potential collaborations!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      variant="outline"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-8 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      View GitHub Profile
                    </Button>
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-8 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Let's Collaborate
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
