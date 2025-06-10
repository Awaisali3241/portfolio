"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Linkedin, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "chxain10@gmail.com",
      link: "mailto:chxain10@gmail.com",
      color: "from-blue-100 to-blue-200",
      hoverColor: "from-blue-200 to-blue-300",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/zain-ul-abideen-7605b487",
      link: "https://linkedin.com/in/zain-ul-abideen-7605b487",
      color: "from-purple-100 to-purple-200",
      hoverColor: "from-purple-200 to-purple-300",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Islamabad, Pakistan",
      link: null,
      color: "from-green-100 to-green-200",
      hoverColor: "from-green-200 to-green-300",
    },
  ]

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Let's Work Together</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
              <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="grid xl:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Ready to bring your ideas to life? Let's discuss how we can work together to create something
                    amazing. I'm available for full-time opportunities, freelance projects, and technical consulting.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-700 ease-out ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className="group cursor-pointer">
                        {contact.link ? (
                          <a
                            href={contact.link}
                            target={contact.link.startsWith("http") ? "_blank" : undefined}
                            rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="flex items-center p-6 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200"
                          >
                            <div
                              className={`w-16 h-16 bg-gradient-to-r ${contact.color} group-hover:${contact.hoverColor} rounded-xl flex items-center justify-center mr-6 transition-all duration-300 group-hover:scale-110`}
                            >
                              <div className="text-blue-600 group-hover:text-purple-600 transition-colors duration-300">
                                {contact.icon}
                              </div>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900 text-lg mb-1">{contact.title}</p>
                              <p className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300 break-all">
                                {contact.value}
                              </p>
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-center p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl shadow-lg border border-gray-200">
                            <div
                              className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center mr-6`}
                            >
                              <div className="text-green-600">{contact.icon}</div>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900 text-lg mb-1">{contact.title}</p>
                              <p className="text-gray-600">{contact.value}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Availability Card */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <MessageCircle className="w-6 h-6 mr-2 text-blue-600" />
                    Available for
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      Full-time opportunities
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      Freelance projects
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      Technical consulting
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      Code reviews & mentoring
                    </li>
                  </ul>
                </div>

                {/* Quick Contact Button */}
                <div className="pt-6">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-4 w-full sm:w-auto text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Quick Email
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <CardContent className="p-10">
                  <h4 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <Send className="w-6 h-6 mr-3 text-blue-600" />
                    Send a Message
                  </h4>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">First Name</label>
                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John"
                          className="rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300 h-12"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Last Name</label>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          className="rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300 h-12"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300 h-12"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Subject</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Project Discussion"
                        className="rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300 h-12"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or just say hello..."
                        rows={6}
                        className="rounded-xl resize-none border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
