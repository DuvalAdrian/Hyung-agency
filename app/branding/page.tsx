"use client"

import { useEffect, useRef } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BrandingPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const caseStudiesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap) {
      const { gsap } = window

      // Hero aura expansion animation
      gsap.fromTo(
        heroRef.current?.querySelector("h1"),
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power4.out" },
      )

      // Case studies accordion animation
      gsap.fromTo(
        caseStudiesRef.current?.children || [],
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: caseStudiesRef.current,
            start: "top 80%",
          },
        },
      )
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-24 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-glow">Branding: Forja Legados Icónicos</h1>
          <p className="text-xl md:text-2xl text-hyung-white/80 max-w-4xl mx-auto leading-relaxed">
            Branding holístico: Estrategia, visuales, voz—transformando startups en imperios. 150+ marcas elevadas con
            premios equivalentes a Cannes Lions.
          </p>
        </div>
      </section>

      {/* Brand Evolution Showcase */}
      <section className="py-24 px-8 bg-hyung-indigo/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow">Showcase de Evolución de Marca</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-hyung-indigo/20 p-8 rounded-xl border border-hyung-indigo/30">
                <h3 className="text-2xl font-bold mb-4 text-hyung-gold">Antes</h3>
                <div className="bg-gray-800 h-32 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-400">Logo Genérico</span>
                </div>
                <p className="text-hyung-white/70">
                  Identidad olvidable, bajo reconocimiento de mercado, luchando por diferenciarse
                </p>
              </div>

              <div className="bg-hyung-gold/10 p-8 rounded-xl border border-hyung-gold/30 aura-glow">
                <h3 className="text-2xl font-bold mb-4 text-hyung-gold">Después</h3>
                <div className="bg-gradient-to-r from-hyung-gold to-hyung-indigo h-32 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">MARCA ICÓNICA</span>
                </div>
                <p className="text-hyung-white/70">
                  Identidad memorable, aumento del 300% en recordación de marca, liderazgo industrial
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-hyung-gold">Métricas de Transformación</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-hyung-indigo/20 rounded-lg">
                  <span className="text-hyung-white">Reconocimiento de Marca</span>
                  <span className="text-hyung-gold font-bold">+300%</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-hyung-indigo/20 rounded-lg">
                  <span className="text-hyung-white">Lealtad del Cliente</span>
                  <span className="text-hyung-gold font-bold">+250%</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-hyung-indigo/20 rounded-lg">
                  <span className="text-hyung-white">Participación de Mercado</span>
                  <span className="text-hyung-gold font-bold">+180%</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-hyung-indigo/20 rounded-lg">
                  <span className="text-hyung-white">Crecimiento de Ingresos</span>
                  <span className="text-hyung-gold font-bold">+400%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow">Historias de Éxito de Marca</h2>

          <div ref={caseStudiesRef} className="space-y-8">
            {[
              {
                title: "TechNova - De Startup a Unicornio",
                industry: "Tecnología",
                challenge: "Startup tech genérica luchando con confianza de inversores y posicionamiento de mercado",
                solution:
                  "Renovación completa de marca con identidad futurista, mensajería estratégica y posicionamiento premium",
                results:
                  "Aseguró $50M Serie B, se convirtió en líder de pensamiento industrial, crecimiento de usuarios 500%",
                image: "/tech-startup-branding.png",
              },
              {
                title: "Luxe Wellness - Cadena de Spa Premium",
                industry: "Bienestar y Belleza",
                challenge: "Spa local queriendo expandirse nacionalmente manteniendo posicionamiento de lujo",
                solution: "Arquitectura de marca sofisticada con puntos de contacto premium y diseño experiencial",
                results: "Expandió a 15 ubicaciones, aumento de ingresos 300%, destacado en Vogue",
                image: "/luxury-spa-branding.png",
              },
              {
                title: "GreenEarth - Moda Sostenible",
                industry: "Moda y Retail",
                challenge: "Marca eco-amigable perdida en mercado saturado de moda sostenible",
                solution: "Narrativa auténtica con visuales inspirados en la tierra y comunicación transparente",
                results: "Se convirtió en marca #1 de moda sostenible, endorsos de celebridades, preparación para IPO",
                image: "/sustainable-fashion-case-study.png",
              },
              {
                title: "FinanceForward - Revolución Fintech",
                industry: "Servicios Financieros",
                challenge: "Banco tradicional necesitando transformación digital y atractivo millennial",
                solution: "Identidad moderna y confiable con enfoque digital-first y diseño centrado en humanos",
                results: "2M nuevos clientes en 6 meses, 95% satisfacción del cliente, premios industriales",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((study, index) => (
              <div
                key={index}
                className="bg-hyung-indigo/20 rounded-xl border border-hyung-indigo/30 overflow-hidden hover:border-hyung-gold/50 transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-hyung-gold mb-2">{study.title}</h3>
                      <span className="text-hyung-white/60 text-sm uppercase tracking-wider">{study.industry}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-bold text-hyung-white mb-2">Desafío</h4>
                        <p className="text-hyung-white/70 text-sm leading-relaxed">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-hyung-white mb-2">Solución</h4>
                        <p className="text-hyung-white/70 text-sm leading-relaxed">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-hyung-gold mb-2">Resultados</h4>
                        <p className="text-hyung-white/70 text-sm leading-relaxed">{study.results}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Strategy Framework */}
      <section className="py-24 px-8 bg-hyung-indigo/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow">
            Nuestro Marco de Estrategia de Marca
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎯",
                title: "Posicionamiento de Marca",
                description: "Define posición única de mercado y ventaja competitiva",
              },
              {
                icon: "💭",
                title: "Personalidad de Marca",
                description: "Crea voz auténtica y puntos de conexión emocional",
              },
              {
                icon: "🎨",
                title: "Identidad Visual",
                description: "Crea logos memorables, colores y sistemas de diseño",
              },
              {
                icon: "📢",
                title: "Experiencia de Marca",
                description: "Diseña puntos de contacto consistentes en todos los canales",
              },
            ].map((framework, index) => (
              <div
                key={index}
                className="text-center p-6 bg-hyung-indigo/20 rounded-xl border border-hyung-indigo/30 hover:border-hyung-gold/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{framework.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-hyung-gold">{framework.title}</h3>
                <p className="text-hyung-white/70 leading-relaxed">{framework.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
