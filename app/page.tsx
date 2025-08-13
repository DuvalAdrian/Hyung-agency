"use client"

import { useState, useEffect, useRef } from "react"
import Preloader from "@/components/preloader"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Modal from "@/components/modal"
import { initGSAP } from "@/lib/gsap-setup"
import { useTextReveal, useTypingEffect, useGlowPulse } from "@/hooks/use-text-animations"
import { useClickAnimation } from "@/hooks/use-click-animations"

export default function HomePage() {
  const [loading, setLoading] = useState(true)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [clickOrigin, setClickOrigin] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)

  // Animation hooks
  const heroTitleRef = useTextReveal()
  const heroDescRef = useTypingEffect(
    "Pioneros en maestría web, innovación de apps, arte del diseño, legados de branding y elegancia de catálogos. 300+ proyectos, 100+ clientes élite mundialmente.",
    30,
  )
  const glowRef = useGlowPulse()
  const handleClick = useClickAnimation()

  useEffect(() => {
    initGSAP()
  }, [])

  useEffect(() => {
    if (!loading && typeof window !== "undefined" && window.gsap) {
      const { gsap } = window

      // Enhanced parallax backgrounds with multiple layers
      gsap.to(".parallax-bg", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      // Multi-layer parallax for depth
      gsap.to(".parallax-layer-1", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })

      gsap.to(".parallax-layer-2", {
        yPercent: -60,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      })

      // Services cards enhanced animation
      gsap.fromTo(
        servicesRef.current?.children || [],
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
          },
        },
      )

      // Portfolio images with load fade
      const portfolioImages = document.querySelectorAll(".portfolio-image")
      portfolioImages.forEach((img) => {
        gsap.fromTo(
          img,
          {
            opacity: 0,
            filter: "blur(10px)",
            scale: 1.1,
          },
          {
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: img,
              start: "top 90%",
            },
          },
        )
      })
    }
  }, [loading])

  const projects = [
    {
      title: "E-commerce de Lujo",
      category: "Diseño Web",
      image: "/luxury-ecommerce-website.png",
      description:
        "Una experiencia de compra premium con animaciones fluidas y diseño minimalista que aumentó las conversiones en un 340%.",
      details:
        "Desarrollado con Next.js y animaciones GSAP personalizadas, este proyecto redefinió el estándar de e-commerce de lujo.",
      metrics: { conversion: "+340%", revenue: "+280%", engagement: "+150%" },
    },
    {
      title: "Marca Startup Tech",
      category: "Branding",
      image: "/tech-startup-branding.png",
      description: "Identidad visual completa que transformó una startup en una marca reconocida globalmente.",
      details:
        "Desde el concepto hasta la implementación, creamos un ecosistema visual que comunica innovación y confianza.",
      metrics: { recognition: "+500%", funding: "$2.5M", growth: "+200%" },
    },
    {
      title: "App Bancaria Móvil",
      category: "Diseño de App",
      image: "/mobile-banking-app.png",
      description:
        "Interfaz intuitiva que simplifica operaciones bancarias complejas con seguridad de nivel enterprise.",
      details: "UX/UI diseñado para maximizar la usabilidad mientras mantiene los más altos estándares de seguridad.",
      metrics: { users: "1M+", satisfaction: "98%", transactions: "+450%" },
    },
    {
      title: "Catálogo de Moda",
      category: "Diseño",
      image: "/fashion-catalog-design.png",
      description: "Catálogo digital interactivo que eleva productos de moda a obras de arte visual.",
      details: "Combinando fotografía de alta calidad con diseño editorial, creamos una experiencia inmersiva única.",
      metrics: { engagement: "+300%", sales: "+180%", shares: "+250%" },
    },
  ]

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="parallax-bg absolute inset-0 opacity-20">
          <div className="parallax-layer-1 absolute top-1/4 left-1/4 w-64 h-64 bg-hyung-indigo rounded-full blur-3xl"></div>
          <div className="parallax-layer-2 absolute bottom-1/4 right-1/4 w-96 h-96 bg-hyung-gold/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-8">
          <h1 ref={heroTitleRef} className="text-6xl md:text-8xl font-bold mb-8 text-glow">
            Hyung: Ilumina la Esencia de tu Marca
          </h1>
          <p
            ref={heroDescRef}
            className="text-xl md:text-2xl text-hyung-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
          ></p>
          <button
            ref={glowRef}
            onClick={(e) => handleClick(e, () => console.log("CTA clicked"))}
            className="px-12 py-4 bg-hyung-gold text-hyung-black text-lg font-semibold rounded-lg hover:scale-105 transition-transform duration-300 aura-glow"
          >
            Comienza tu Transformación Digital
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-glow">Nuestra Maestría Digital</h2>

          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Páginas Web",
                description: "Portales digitales fluidos con animaciones vanguardistas y diseño responsivo",
                icon: "🌐",
              },
              {
                title: "Diseño",
                description: "Sinfonías visuales que cautivan y convierten a través de precisión artística",
                icon: "🎨",
              },
              {
                title: "Branding",
                description: "Forja legados icónicos que transforman startups en imperios",
                icon: "⚡",
              },
              {
                title: "Aplicaciones",
                description: "Mundos intuitivos en tus manos con excelencia multiplataforma",
                icon: "📱",
              },
              {
                title: "Catálogos",
                description: "Escaparates elegantes que elevan productos a formas de arte",
                icon: "📚",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-hyung-indigo/20 rounded-xl border border-hyung-indigo/30 hover:border-hyung-gold/50 transition-all duration-500 hover:aura-glow cursor-pointer hover:scale-105"
                onMouseEnter={(e) => {
                  if (window.gsap) {
                    window.gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3, ease: "power2.out" })
                  }
                }}
                onMouseLeave={(e) => {
                  if (window.gsap) {
                    window.gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: "power2.out" })
                  }
                }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-hyung-gold">{service.title}</h3>
                <p className="text-hyung-white/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section ref={portfolioRef} className="py-24 px-8 bg-hyung-indigo/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-glow">Portfolio Élite</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
                onClick={(e) => handleClick(e, () => setSelectedProject(project), setClickOrigin)}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="portfolio-image w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <h4 className="text-xl font-bold text-hyung-gold">{project.title}</h4>
                    <p className="text-hyung-white/70">{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-glow">Nuestro Ethos</h2>
          <p className="text-xl md:text-2xl text-hyung-white/80 leading-relaxed">
            Creamos experiencias que trascienden—elegantes, exclusivas, eternas. No solo construimos productos
            digitales; creamos auras digitales que iluminan la verdadera esencia de tu marca.
          </p>
        </div>
      </section>

      <Footer />

      {/* Project Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          clickOrigin={clickOrigin}
        >
          <div className="space-y-6">
            <img
              src={selectedProject.image || "/placeholder.svg"}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg"
            />

            <div className="grid grid-cols-3 gap-4">
              {Object.entries(selectedProject.metrics).map(([key, value]) => (
                <div key={key} className="text-center p-4 bg-hyung-gold/10 rounded-lg">
                  <div className="text-2xl font-bold text-hyung-gold">{value}</div>
                  <div className="text-sm text-hyung-white/70 capitalize">{key}</div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-bold text-hyung-gold mb-3">Descripción</h3>
              <p className="text-hyung-white/80 leading-relaxed">{selectedProject.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-hyung-gold mb-3">Detalles del Proyecto</h3>
              <p className="text-hyung-white/80 leading-relaxed">{selectedProject.details}</p>
            </div>

            <button
              onClick={(e) => handleClick(e, () => console.log("Contact clicked"))}
              className="w-full py-3 bg-hyung-gold text-hyung-black font-semibold rounded-lg hover:scale-105 transition-transform"
            >
              Solicitar Proyecto Similar
            </button>
          </div>
        </Modal>
      )}
    </div>
  )
}
