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
  const [isSending, setIsSending] = useState(false)
  const [responseMsg, setResponseMsg] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    }, { threshold: 0.2 })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSending(true)
    setResponseMsg(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      const data = await res.json()
      if (res.ok) {
        setResponseMsg("Message sent successfully!")
        setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" })
      } else {
        setResponseMsg(data.error || "Something went wrong.")
      }
    } catch (err) {
      setResponseMsg("Server error.")
    } finally {
      setIsSending(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "aliawan3241@gmail.com",
      link: "mailto:aliawan3241@gmail.com",
      color: "from-blue-100 to-blue-200",
      hoverColor: "from-blue-200 to-blue-300",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/awaisali-seospecialist",
      link: "https://www.linkedin.com/in/awaisali-seospecialist/",
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
                I'm always interested in new opportunities and exciting projects.
              </p>
            </div>

            <div className="grid xl:grid-cols-2 gap-16">
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-gray-900">Get In Touch</h3>
                <p className="text-lg text-gray-600">
                  Reach out through the form or use the email button to send a quick message.
                </p>

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
                          rel="noopener noreferrer"
                          className="flex items-center p-6 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg border border-gray-200"
                        >
                          <div
                            className={`w-16 h-16 bg-gradient-to-r ${contact.color} group-hover:${contact.hoverColor} rounded-xl flex items-center justify-center mr-6`}
                          >
                            <div className="text-blue-600">{contact.icon}</div>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 text-lg mb-1">{contact.title}</p>
                            <p className="text-gray-600 break-all">{contact.value}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl shadow-lg border border-gray-200">
                          <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center mr-6`}>
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

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-xl hover:scale-105 transition-all"
                  onClick={() => window.open("mailto:aliawan3241@gmail.com", "_blank")}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Quick Email
                </Button>
              </div>

              <Card className="border-0 shadow-2xl">
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
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Last Name</label>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Subject</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        required
                      />
                    </div>

                    {responseMsg && (
                      <p className={`text-sm font-medium ${responseMsg.includes("success") ? "text-green-600" : "text-red-500"}`}>
                        {responseMsg}
                      </p>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSending}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl py-4 text-lg font-semibold shadow-xl hover:scale-105 transition-all"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {isSending ? "Sending..." : "Send Message"}
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
