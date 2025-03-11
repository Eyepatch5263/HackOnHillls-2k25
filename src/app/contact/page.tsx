"use client"

import type React from "react"

import { useState } from "react"
import { Send, MapPin, Mail, Phone, Github, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [email, setEmail] = useState("")
  
    const handleSubscribe = (e: React.FormEvent) => {
      e.preventDefault()
      console.log("Subscribed:", email)
      alert("Thanks for subscribing to our newsletter!")
      setEmail("")
    }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Thanks for reaching out! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div>
    <section className="w-full bg-black text-white py-16 md:py-24" id="contact">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#4169E1]">
            Contact Us
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions about Hack on Hills 2K25? We're here to help! Reach out to us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-[#0A0A1A] p-6 md:p-8 rounded-xl border border-[#00FFFF]/20 shadow-[0_0_15px_rgba(0,255,255,0.15)]">
            <h3 className="text-2xl font-bold mb-6 text-[#00FFFF]">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-200">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-[#121225] border-[#4169E1]/30 focus:border-[#00FFFF] text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-[#121225] border-[#4169E1]/30 focus:border-[#00FFFF] text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-gray-200">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="bg-[#121225] border-[#4169E1]/30 focus:border-[#00FFFF] text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-200">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  className="min-h-[120px] bg-[#121225] border-[#4169E1]/30 focus:border-[#00FFFF] text-white"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#4169E1] to-[#00FFFF] hover:from-[#00FFFF] hover:to-[#4169E1] text-black font-bold transition-all duration-300"
              >
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-[#0A0A1A] p-6 md:p-8 rounded-xl border border-[#00FFFF]/20 shadow-[0_0_15px_rgba(0,255,255,0.15)]">
              <h3 className="text-2xl font-bold mb-6 text-[#00FFFF]">Get in touch</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-[#00FFFF]" />
                  <div>
                    <h4 className="font-medium text-gray-200">Email</h4>
                    <a href="mailto:hackathon@example.com" className="text-[#00FFFF] hover:underline">
                      hackathon@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-[#00FFFF]" />
                  <div>
                    <h4 className="font-medium text-gray-200">Phone</h4>
                    <a href="tel:+1234567890" className="text-[#00FFFF] hover:underline">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-[#0A0A1A] p-6 md:p-8 rounded-xl border border-[#00FFFF]/20 shadow-[0_0_15px_rgba(0,255,255,0.15)]">
              <h3 className="text-2xl font-bold mb-6 text-[#00FFFF]">Follow us</h3>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-[#121225] flex items-center justify-center hover:bg-[#4169E1] transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-[#00FFFF]" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-[#121225] flex items-center justify-center hover:bg-[#4169E1] transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5 text-[#00FFFF]" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-[#121225] flex items-center justify-center hover:bg-[#4169E1] transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-[#00FFFF]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Find Us Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#4169E1]">
              Find Us
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Join us at the National Institute of Technology, Hamirpur for Hack on Hills 2K25.
            </p>
          </div>

          <div className="bg-[#0A0A1A] p-6 md:p-8 rounded-xl border border-[#00FFFF]/20 shadow-[0_0_15px_rgba(0,255,255,0.15)]">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-start mb-6">
                  <MapPin className="h-6 w-6 mr-3 text-[#00FFFF]" />
                  <div>
                    <h4 className="font-medium text-xl text-white mb-2">Location</h4>
                    <p className="text-gray-300">
                      National Institute of Technology
                      <br />
                      Hamirpur, Himachal Pradesh
                      <br />
                      India - 177005
                    </p>
                  </div>
                </div>

                <Button
                  className="bg-gradient-to-r from-[#4169E1] to-[#00FFFF] hover:from-[#00FFFF] hover:to-[#4169E1] text-black font-bold transition-all duration-300"
                  onClick={() => window.open("https://maps.google.com", "_blank")}
                >
                  Get Directions
                </Button>
              </div>

              <div className="w-full h-[300px] bg-[#121225] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.5543390304366!2d76.52552931547233!3d31.708420981307237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d5487e12c4a1%3A0x395f92d3a202a7d0!2sNational%20Institute%20of%20Technology%2C%20Hamirpur!5e0!3m2!1sen!2sin!4v1615280769503!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NIT Hamirpur Location"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer className="w-full bg-black text-white py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {/* Logo and About */}
              <div className="col-span-1 md:col-span-1">
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#4169E1]">
                  Hack on Hills
                </h3>
                <p className="text-gray-300 mb-6">
                  The annual hackathon at National Institute of Technology, Hamirpur
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="h-8 w-8 rounded-full bg-[#121225] flex items-center justify-center hover:bg-[#4169E1] transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4 text-[#00FFFF]" />
                  </a>
                  <a
                    href="#"
                    className="h-8 w-8 rounded-full bg-[#121225] flex items-center justify-center hover:bg-[#4169E1] transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-4 w-4 text-[#00FFFF]" />
                  </a>
                  <a
                    href="#"
                    className="h-8 w-8 rounded-full bg-[#121225] flex items-center justify-center hover:bg-[#4169E1] transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4 text-[#00FFFF]" />
                  </a>
                </div>
              </div>
    
              {/* Quick Links */}
              <div className="col-span-1">
                <h3 className="text-lg font-bold mb-4 text-[#00FFFF]">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-[#00FFFF] transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="text-gray-300 hover:text-[#00FFFF] transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#schedule" className="text-gray-300 hover:text-[#00FFFF] transition-colors">
                      Schedule
                    </a>
                  </li>
                  <li>
                    <a href="#sponsors" className="text-gray-300 hover:text-[#00FFFF] transition-colors">
                      Sponsors
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="text-gray-300 hover:text-[#00FFFF] transition-colors">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              {/* Newsletter */}
              <div className="col-span-1">
                <h3 className="text-lg font-bold mb-4 text-[#00FFFF]">Stay Updated</h3>
                <p className="text-gray-300 mb-4">
                  Subscribe to our newsletter for the latest updates
                </p>
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="space-y-2">
                    <Label htmlFor="email-subscribe" className="sr-only">
                      Email
                    </Label>
                    <Input
                      id="email-subscribe"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      className="bg-[#121225] border-[#4169E1]/30 focus:border-[#00FFFF] text-white"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#4169E1] to-[#00FFFF] hover:from-[#00FFFF] hover:to-[#4169E1] text-black font-bold transition-all duration-300"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
    
            {/* Copyright */}
            <div className="border-t border-[#00FFFF]/20 mt-10 pt-6 text-center">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Hack on Hills. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
        </div>
  )
}
