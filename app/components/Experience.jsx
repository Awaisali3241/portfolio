"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin, Building, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

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

 const experiences = [
  {
    title: "SEO & Google Ads Expert",
    company: "DigiAura360",
    period: "Nov 2024 – Present",
    location: "Onsite",
    description:
      "Managing SEO strategies, Google Ads campaigns, and email marketing to drive brand visibility and conversions across digital channels.",
    achievements: [
      "Developed & executed full-funnel SEO strategies",
      "Optimized campaigns using GA4, Search Console, SEMrush",
      "Increased organic traffic and lead generation",
    ],
    color: "from-blue-500 to-purple-600",
    bgColor: "from-blue-50 to-purple-100",
  },
  {
    title: "On-Page SEO Specialist (Part-Time)",
    company: "Native Brains",
    period: "Apr 2025 – Present",
    location: "Remote",
    description:
      "Focused on optimizing website structure, content, and meta elements to improve search performance using GA4 insights and semantic principles.",
    achievements: [
      "Improved internal linking and content hierarchy",
      "Boosted page performance through Core Web Vitals",
      "Maintained on-page optimization documentation",
    ],
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100",
  },
  {
    title: "SEO Executive",
    company: "Disrupt.com (formerly Gaditek)",
    period: "Nov 2023 – Jan 2025",
    location: "Remote",
    description:
      "Executed data-driven SEO strategies to improve site visibility, search engine rankings, and user experience through semantic SEO best practices.",
    achievements: [
      "Performed keyword research and content audits",
      "Enhanced rankings using E-E-A-T and structured data",
      "Collaborated with dev/content teams on SEO implementation",
    ],
    color: "from-purple-500 to-blue-500",
    bgColor: "from-purple-50 to-blue-100",
  },
  {
    title: "Marketing Trainee",
    company: "Disrupt.com (formerly Gaditek)",
    period: "Sep 2023 – Dec 2023",
    location: "Remote",
    description:
      "Supported the SEO team by assisting in keyword research, on-page optimization, and content strategy to strengthen search engine presence.",
    achievements: [
      "Assisted in content audits & meta tag improvements",
      "Conducted competitive research",
      "Supported campaign strategy planning",
    ],
    color: "from-blue-600 to-purple-600",
    bgColor: "from-blue-50 to-purple-100",
  },
  {
    title: "SEO & Social Media Manager (Part-Time)",
    company: "Dream Valley Tours",
    period: "Apr 2022 – Jun 2023",
    location: "Onsite",
    description:
      "Created and managed engaging social content to support SEO and brand awareness, improving audience engagement and visibility.",
    achievements: [
      "Planned and executed content calendar",
      "Increased engagement on social channels",
      "Aligned messaging with SEO campaigns",
    ],
    color: "from-purple-500 to-purple-600",
    bgColor: "from-purple-50 to-purple-100",
  },
  
]


  return (
    <section ref={sectionRef} id="experience" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Experience</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
              <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                My professional journey in software development, working with amazing teams and building innovative
                solutions.
              </p>
            </div>

            <div className="relative">
              {/* Enhanced Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 hidden md:block rounded-full"></div>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-out ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="relative">
                      {/* Enhanced Timeline Dot */}
                      <div className="absolute left-6 w-6 h-6 bg-white rounded-full border-4 border-gradient-to-r shadow-lg hidden md:flex items-center justify-center z-10">
                        <div className={`w-3 h-3 bg-gradient-to-r ${exp.color} rounded-full`}></div>
                      </div>

                      <Card className="md:ml-20 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                        <div className={`bg-gradient-to-r ${exp.bgColor} p-6 relative overflow-hidden`}>
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full translate-y-12 -translate-x-12"></div>

                          <div className="relative z-10">
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                              <div className="flex-1">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                  {exp.title}
                                </h3>
                                <div className="flex items-center text-lg font-semibold text-purple-600 mb-3">
                                  <Building className="w-5 h-5 mr-2" />
                                  {exp.company}
                                </div>
                              </div>
                              <div className="flex flex-col lg:items-end space-y-2">
                                <div className="flex items-center text-gray-600 bg-white/50 px-3 py-1 rounded-full">
                                  <Calendar className="w-4 h-4 mr-2" />
                                  <span className="text-sm font-medium">{exp.period}</span>
                                </div>
                                <div className="flex items-center text-gray-600 bg-white/50 px-3 py-1 rounded-full">
                                  <MapPin className="w-4 h-4 mr-2" />
                                  <span className="text-sm">{exp.location}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <CardContent className="p-6">
                          <p className="text-gray-600 leading-relaxed mb-6 text-lg">{exp.description}</p>

                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                              <ChevronRight className="w-4 h-4 mr-1 text-blue-600" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} className="flex items-start text-gray-600">
                                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-sm">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
