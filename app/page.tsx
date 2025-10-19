"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Globe,
  Users,
  Calendar,
  Briefcase,
  Award,
  Target,
  UserPlus,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const comingSoonRef = useRef<HTMLElement>(null)

  const downloadVCard = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Nabila Khouimi
N:Khouimi;Nabila;;;
ORG:NK Consulting
TITLE:Communication & Events Consultant
EMAIL:nab.khouimi@gmail.com
EMAIL:nabila@nkconsulting.ma
TEL:+212630547146
TEL:+351920793491
ADR:;;Rabat;Morocco;;;;
URL:https://www.linkedin.com/in/nabila-khouimi-10537423/
URL:https://www.instagram.com/nabila.khouimi
URL:https://www.instagram.com/slowparentingrabat/
NOTE:Multi-skilled Creator - Digital Community Contributor - Empowering Digital Nomad Families in Morocco - Member of the Worldschooler Entrepreneur Collective
END:VCARD`

    const blob = new Blob([vCard], { type: "text/vcard" })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "nabila-khouimi-contact.vcf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in-perspective")
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = [heroRef.current, aboutRef.current, servicesRef.current, comingSoonRef.current]
    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    setTimeout(() => setIsVisible(true), 100)

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gray-200 rounded-full animate-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <header
        className={`w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"} sticky top-0 z-50`}
      >
        <div className="container mx-auto px-6 py-4 md:py-8">
          <div className="flex justify-center">
            <div className="overflow-hidden">
              <Image
                src="/images/nk-consulting-logo-hq.jpeg"
                alt="NK Consulting - Communication & Event Management"
                width={600}
                height={150}
                className={`h-auto max-w-full w-full max-w-md md:max-w-lg lg:max-w-xl transition-all duration-1200 ease-out hover-lift-ultra ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
                priority
              />
            </div>
          </div>
        </div>
      </header>

      <section
        ref={heroRef}
        className="container mx-auto px-6 py-8 md:py-16 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        style={{
          transform: `translateY(${mousePosition.y * 0.02}px)`,
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-start">
          <div className="flex flex-col items-center md:items-start order-1 md:order-1">
            <div className="relative group mb-2">
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-pulse-multi"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-gray-200 to-gray-100 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-all duration-700"></div>
              <Image
                src="/images/nabila-profile.jpeg"
                alt="Nabila Khouimi - Professional Portrait"
                width={200}
                height={200}
                className="relative rounded-2xl shadow-2xl w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover transition-all duration-1000 hover:shadow-2xl border-2 border-primary/10"
                priority
              />
            </div>

            <div className="md:hidden mb-2 w-full max-w-[200px]">
              <div className="flex items-start gap-2 group mb-1">
                <Mail className="h-3 w-3 text-gray-600 transition-transform duration-200 group-hover:scale-110 mt-0.5 icon-bounce" />
                <div className="space-y-1 leading-relaxed">
                  <a
                    href="mailto:nab.khouimi@gmail.com"
                    className="text-black hover:text-gray-700 transition-all duration-300 hover:translate-x-1 block leading-tight break-all text-xs"
                  >
                    nab.khouimi@gmail.com
                  </a>
                  <a
                    href="mailto:nabila@nkconsulting.ma"
                    className="text-black hover:text-gray-700 transition-all duration-300 hover:translate-x-1 block leading-tight break-all text-xs"
                  >
                    nabila@nkconsulting.ma
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 md:hidden animate-stagger-6 w-full max-w-[200px]">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="bg-white hover:bg-gray-100 border-gray-300 hover:border-gray-400 hover:scale-105 transition-all duration-500 group text-black text-xs h-8"
              >
                <a
                  href="https://www.linkedin.com/in/nabila-khouimi-10537423/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-3 w-3 mr-1 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 icon-bounce" />
                  LinkedIn Profile
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="bg-white hover:bg-gray-100 border-gray-300 hover:border-gray-400 hover:scale-105 transition-all duration-500 group text-black text-xs h-8"
              >
                <a href="https://www.instagram.com/slowparentingrabat/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-3 w-3 mr-1 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 icon-bounce" />
                  @slowparentingrabat
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="bg-white hover:bg-gray-100 border-gray-300 hover:border-gray-400 hover:scale-105 transition-all duration-500 group text-black text-xs h-8"
              >
                <a
                  href="https://www.instagram.com/nabila.khouimi?igsh=NHVpdndmaWNvMmZu&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-3 w-3 mr-1 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 icon-bounce" />
                  @nabila.khouimi
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 order-2 md:order-2">
            <div className="space-y-2 md:space-y-4">
              <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-black text-balance animate-slide-up-blur-1 leading-tight">
                Nabila Khouimi
              </h1>
              <div className="space-y-1 md:space-y-2">
                <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-black font-semibold animate-slide-up-blur-2 leading-snug animate-text-mask">
                  Communication & Events Consultant - NK Consulting
                </p>
                <p className="text-xs sm:text-sm md:text-lg lg:text-xl animate-slide-up-blur-3 text-black font-medium">
                  Multi-skilled Creator
                </p>
                <p className="text-xs sm:text-sm md:text-lg lg:text-xl animate-slide-up-blur-3 text-gray-600">
                  Digital Community Contributor
                </p>
                <p className="text-xs sm:text-sm md:text-lg lg:text-xl animate-slide-up-blur-3 text-gray-600">
                  Empowering Digital Nomad Families in Morocco
                </p>
                <p className="text-xs sm:text-sm md:text-lg lg:text-xl animate-slide-up-blur-4 text-gray-600">
                  Member of the Worldschooler Entrepreneur Collective
                </p>
              </div>
            </div>

            <div className="space-y-2 md:space-y-3 text-xs md:text-sm animate-slide-up-blur-5">
              <div className="flex items-start gap-2 group">
                <Phone className="h-3 w-3 md:h-4 md:w-4 text-gray-600 transition-transform duration-300 group-hover:scale-125 mt-0.5 icon-bounce" />
                <div className="space-y-1 leading-relaxed">
                  <a
                    href="tel:+212630547146"
                    className="text-black hover:text-gray-700 transition-all duration-300 hover:translate-x-2 block leading-tight"
                  >
                    +212 630 547 146
                  </a>
                  <a
                    href="tel:+351920793491"
                    className="text-black hover:text-gray-700 transition-all duration-300 hover:translate-x-2 block leading-tight"
                  >
                    +351 920 793 491
                  </a>
                </div>
              </div>
              <div className="hidden md:flex items-start gap-2 group">
                <Mail className="h-3 w-3 md:h-4 md:w-4 text-gray-600 transition-transform duration-300 group-hover:scale-125 mt-0.5 icon-bounce" />
                <div className="space-y-1 leading-relaxed">
                  <a
                    href="mailto:nab.khouimi@gmail.com"
                    className="text-black hover:text-gray-700 transition-all duration-300 hover:translate-x-2 block leading-tight break-all"
                  >
                    nab.khouimi@gmail.com
                  </a>
                  <a
                    href="mailto:nabila@nkconsulting.ma"
                    className="text-black hover:text-gray-700 transition-all duration-300 hover:translate-x-2 block leading-tight break-all"
                  >
                    nabila@nkconsulting.ma
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 group">
                <MapPin className="h-3 w-3 md:h-4 md:w-4 text-gray-600 transition-transform duration-300 group-hover:scale-125 icon-bounce" />
                <p className="text-black leading-tight">Rabat - Morocco</p>
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-2 md:gap-3 animate-slide-up-blur-6">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="bg-white hover:bg-gray-100 border-gray-300 hover:border-gray-400 hover:scale-105 transition-all duration-500 group text-black text-sm h-9"
              >
                <a
                  href="https://www.linkedin.com/in/nabila-khouimi-10537423/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 icon-bounce" />
                  LinkedIn Profile
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="bg-white hover:bg-gray-100 border-gray-300 hover:border-gray-400 hover:scale-105 transition-all duration-500 group text-black text-sm h-9"
              >
                <a href="https://www.instagram.com/slowparentingrabat/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 icon-bounce" />
                  @slowparentingrabat
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="bg-white hover:bg-gray-100 border-gray-300 hover:border-gray-400 hover:scale-105 transition-all duration-500 group text-black text-sm h-9"
              >
                <a
                  href="https://www.instagram.com/nabila.khouimi?igsh=NHVpdndmaWNvMmZu&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 icon-bounce" />
                  @nabila.khouimi
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={downloadVCard}
                className="bg-white hover:bg-gray-100 border-gray-300 hover:border-gray-400 hover:scale-105 transition-all duration-500 group text-black text-sm h-9"
              >
                <UserPlus className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 icon-bounce" />
                Add to Contact
              </Button>
            </div>
          </div>
        </div>

        <div className="md:hidden mt-6 px-4">
          <Button
            variant="outline"
            size="lg"
            onClick={downloadVCard}
            className="bg-white hover:bg-gray-100 border-gray-300 hover:border-gray-400 hover:scale-105 transition-all duration-500 group text-black text-sm h-12 w-full"
          >
            <UserPlus className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 icon-bounce" />
            Add to Contact(vCard)
          </Button>
        </div>
      </section>

      <section
        ref={aboutRef}
        className="bg-gray-50 py-16 opacity-0 translate-y-8 transition-all duration-1000 ease-out parallax-slow"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center text-black animate-stagger-1">About Me</h2>
            <Card className="border-gray-300 hover:shadow-2xl hover:scale-[1.02] transition-all duration-1000 group bg-white hover-lift-ultra animate-card-perspective">
              <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-100 to-transparent rounded-bl-full animate-shimmer-lux"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-200 to-transparent rounded-tr-full animate-shimmer-lux"></div>
                <div className="space-y-6 text-gray-600 leading-relaxed relative z-10">
                  <p className="animate-stagger-2 text-black">
                    Senior Consultant in communication and events with{" "}
                    <strong className="text-black font-semibold">15+ years</strong> creating and managing international
                    projects across diverse sectors. Skilled in developing and managing communication strategies,
                    creating and overseeing communication platforms, and promoting events through multiple channels,
                    with strong expertise in media relations, visual content production, digital strategies, and leading
                    remote teams to deliver engaging multimedia content for diverse audiences.
                  </p>
                  <p className="animate-stagger-3">
                    Through NK Consulting, I provide consultancy and strategic support for communication and event
                    projects, often working remotely to coordinate international teams and deliver impactful results.
                  </p>
                  <p className="animate-stagger-4">
                    Passionate about creating connections and fostering meaningful communities, I am also a digital
                    community builder, focused on supporting and connecting digital nomad families who combine work,
                    travel, and education around the world.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        ref={servicesRef}
        className="container mx-auto px-6 py-16 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      >
        <h2 className="text-3xl font-heading font-bold mb-12 text-center text-black animate-stagger-1">
          Services & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Briefcase,
              title: "Communication Strategy",
              desc: "Developing comprehensive communication strategies and managing platforms for international projects.",
              delay: "0ms",
              gradient: "from-gray-100 to-gray-50",
            },
            {
              icon: Calendar,
              title: "Event Management",
              desc: "Creating and managing events with expertise in promotion through diverse channels and media relations.",
              delay: "100ms",
              gradient: "from-gray-200 to-gray-100",
            },
            {
              icon: Users,
              title: "Community Building",
              desc: "Supporting connected communities and leading remote teams for meaningful social impact projects.",
              delay: "200ms",
              gradient: "from-gray-300 to-gray-200",
            },
            {
              icon: Globe,
              title: "Digital Strategy",
              desc: "Visual content production and digital strategies for engaging multimedia content across platforms.",
              delay: "300ms",
              gradient: "from-gray-100 to-gray-200",
            },
            {
              icon: Award,
              title: "Media Relations",
              desc: "Strong expertise in media relations and promoting projects through diverse communication channels.",
              delay: "400ms",
              gradient: "from-gray-200 to-gray-300",
            },
            {
              icon: Target,
              title: "Project Coordination",
              desc: "15+ years of experience coordinating international projects combining culture, education, and technology.",
              delay: "500ms",
              gradient: "from-gray-300 to-gray-100",
            },
          ].map((service, index) => (
            <Card
              key={index}
              className="border-gray-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-1000 group animate-card-perspective cursor-pointer bg-white hover-lift-ultra overflow-hidden"
              style={{ animationDelay: service.delay }}
            >
              <CardContent className="p-6 relative">
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${service.gradient} rounded-bl-full opacity-50 animate-shimmer-lux`}
                ></div>
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-500 animate-magnetic-3d">
                    <service.icon className="h-6 w-6 text-black transition-all duration-500 group-hover:scale-150 group-hover:rotate-180 icon-bounce" />
                  </div>
                  <h3 className="font-heading font-semibold text-black group-hover:text-gray-700 transition-colors duration-500">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm group-hover:text-black transition-colors duration-500 relative z-10">
                  {service.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        ref={comingSoonRef}
        className="bg-gray-50 py-16 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-4 animate-pulse-multi hover:scale-110 transition-transform duration-300 bg-black text-white border-0 px-4 py-2 animate-breathe"
            >
              Coming Soon
            </Badge>
            <h2 className="text-3xl font-heading font-bold mb-6 animate-float-advanced text-black">CoHub Morocco 🇲🇦</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-center gap-6 text-sm animate-stagger-1">
                <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300 bg-white rounded-full px-4 py-2">
                  <span className="animate-bounce" style={{ animationDelay: "0ms" }}>
                    💻
                  </span>
                  <span className="text-black font-medium">Coworking</span>
                </div>
                <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300 bg-white rounded-full px-4 py-2">
                  <span className="animate-bounce" style={{ animationDelay: "200ms" }}>
                    👨‍👩‍👧‍👦
                  </span>
                  <span className="text-black font-medium">Family-friendly</span>
                </div>
                <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300 bg-white rounded-full px-4 py-2">
                  <span className="animate-bounce" style={{ animationDelay: "400ms" }}>
                    🌴
                  </span>
                  <span className="text-black font-medium">Beach vibes near Rabat</span>
                </div>
              </div>
              <p className="text-xl text-black animate-stagger-2 font-heading font-semibold animate-text-mask">
                A creative Hub for Remote & Hybrid Families in Morocco
              </p>
              <p className="text-gray-600 font-medium animate-pulse-multi">coming soon!</p>
            </div>
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white hover:scale-110 hover:shadow-lg transition-all duration-500 animate-breathe font-heading font-semibold px-8 py-3"
            >
              Stay Updated
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-white/95 backdrop-blur-sm border-t border-gray-200 py-8">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-600">
            <p className="font-medium">© 2025 NK Consulting. All rights reserved.</p>
            <p className="text-sm mt-2">Connecting Digital Nomad Families - Slow Parenting Rabat</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
