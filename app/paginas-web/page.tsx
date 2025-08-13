"use client"

import { useEffect, useRef } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PaginasWebPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap) {
      const { gsap } = window

      // Hero timeline animation
      const tl = gsap.timeline()

      tl.fromTo(
        heroRef.current?.querySelector("h1"),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" },
      ).fromTo(
        heroRef.current?.querySelector("p"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5",
      )

      // Projects grid animation
      gsap.fromTo(
        projectsRef.current?.children || [],
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
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
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-glow">Páginas Web: Portales Digitales Fluidos</h1>
          <p className="text-xl md:text-2xl text-hyung-white/80 max-w-4xl mx-auto leading-relaxed">
            Diseños responsivos personalizados con optimización SEO, velocidad relámpago (Next.js/React), y animaciones
            hipnotizantes que superan los estándares de Awwwards.
          </p>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 px-8 bg-hyung-indigo/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow">Nuestro Enfoque</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-hyung-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-hyung-black">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-hyung-gold">Rendimiento Primero</h3>
              <p className="text-hyung-white/70">
                Carga ultrarrápida con optimización Core Web Vitals y estrategias avanzadas de caché.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-hyung-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-hyung-black">🎨</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-hyung-gold">UI Infundida con Aura</h3>
              <p className="text-hyung-white/70">
                Animaciones potenciadas por GSAP y micro-interacciones que crean experiencias memorables.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-hyung-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-hyung-black">📱</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-hyung-gold">Maestría Responsiva</h3>
              <p className="text-hyung-white/70">
                Diseños pixel-perfect que se adaptan perfectamente a todos los dispositivos y tamaños de pantalla.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow">Proyectos Web Destacados</h2>

          <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce de Moda de Lujo",
                description: "Scrolls parallax, interacciones GSAP, aumento del 300% en conversiones",
                tech: "Next.js, GSAP, Stripe",
                image: "/luxury-fashion-ecommerce.png",
              },
              {
                title: "Landing de Startup Tech",
                description: "Animaciones galardonadas, puntuación PageSpeed 95+",
                tech: "React, Three.js, Framer Motion",
                image: "/tech-startup-landing-page.png",
              },
              {
                title: "Portal Cadena Restaurantes",
                description: "Gestión multi-ubicación con actualizaciones en tiempo real",
                tech: "Next.js, Supabase, GSAP",
                image: "/restaurant-chain-portal.png",
              },
              {
                title: "Showcase Agencia Creativa",
                description: "Portfolio interactivo con efectos WebGL",
                tech: "React, Three.js, GSAP",
                image: "/creative-agency-showcase.png",
              },
              {
                title: "Dashboard Plataforma SaaS",
                description: "Visualización de datos compleja con animaciones suaves",
                tech: "Next.js, D3.js, GSAP",
                image: "/saas-platform-dashboard.png",
              },
              {
                title: "Fundación Sin Fines de Lucro",
                description: "Narrativa emocional con animaciones activadas por scroll",
                tech: "Next.js, GSAP, Stripe",
                image: "/nonprofit-foundation-website.png",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group bg-hyung-indigo/20 rounded-xl overflow-hidden border border-hyung-indigo/30 hover:border-hyung-gold/50 transition-all duration-500 hover:aura-glow"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-hyung-gold">{project.title}</h3>
                  <p className="text-hyung-white/70 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(", ").map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-hyung-indigo/40 text-hyung-white/80 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 bg-hyung-indigo/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-glow">¿Listo para Superar Awwwards?</h2>
          <p className="text-xl text-hyung-white/80 mb-12 leading-relaxed">
            Creemos una experiencia web que no solo cumpla expectativas—las trascienda.
          </p>
          <button className="px-12 py-4 bg-hyung-gold text-hyung-black text-lg font-semibold rounded-lg hover:scale-105 transition-transform duration-300 aura-glow">
            Inicia tu Proyecto Web
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
