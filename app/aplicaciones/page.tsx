"use client"

import { useEffect, useRef } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AplicacionesPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const mockupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap) {
      const { gsap } = window

      // Device mockups assembly animation
      const tl = gsap.timeline()

      tl.fromTo(
        heroRef.current?.querySelector("h1"),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" },
      )

      // Mockup assembly animation
      gsap.fromTo(
        mockupRef.current?.children || [],
        { opacity: 0, y: 100, rotation: 10 },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mockupRef.current,
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
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-glow">
            Aplicaciones: Mundos Intuitivos en tus Manos
          </h1>
          <p className="text-xl md:text-2xl text-hyung-white/80 max-w-4xl mx-auto leading-relaxed">
            Apps multiplataforma (React Native, Electron) con excelencia UX/UI, arquitectura segura y rendimiento
            escalable. Retención de usuarios aumentada 300%.
          </p>
        </div>
      </section>

      {/* App Types */}
      <section className="py-24 px-8 bg-hyung-indigo/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow">Experiencia en Plataformas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-hyung-indigo/20 p-8 rounded-xl border border-hyung-indigo/30 hover:border-hyung-gold/50 transition-all duration-500">
              <div className="text-4xl mb-6">📱</div>
              <h3 className="text-3xl font-bold mb-6 text-hyung-gold">Aplicaciones Móviles</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-hyung-gold rounded-full"></div>
                  <span className="text-hyung-white/80">Desarrollo Nativo iOS y Android</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-hyung-gold rounded-full"></div>
                  <span className="text-hyung-white/80">React Native Multiplataforma</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-hyung-gold rounded-full"></div>
                  <span className="text-hyung-white/80">Desarrollo Flutter</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-hyung-gold rounded-full"></div>
                  <span className="text-hyung-white/80">Aplicaciones Web Progresivas (PWA)</span>
                </div>
              </div>
              <p className="text-hyung-white/70 leading-relaxed">
                Desde concepto hasta App Store, creamos experiencias móviles que los usuarios aman y los negocios
                aprovechan.
              </p>
            </div>

            <div className="bg-hyung-indigo/20 p-8 rounded-xl border border-hyung-indigo/30 hover:border-hyung-gold/50 transition-all duration-500">
              <div className="text-4xl mb-6">💻</div>
              <h3 className="text-3xl font-bold mb-6 text-hyung-gold">Aplicaciones de Escritorio</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-hyung-gold rounded-full"></div>
                  <span className="text-hyung-white/80">Electron Multiplataforma</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-hyung-gold rounded-full"></div>
                  <span className="text-hyung-white/80">Windows, macOS, Linux</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-hyung-gold rounded-full"></div>
                  <span className="text-hyung-white/80">Optimización de Rendimiento Nativo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-hyung-gold rounded-full"></div>
                  <span className="text-hyung-white/80">Seguridad Grado Empresarial</span>
                </div>
              </div>
              <p className="text-hyung-white/70 leading-relaxed">
                Soluciones de escritorio poderosas que se integran perfectamente con flujos de trabajo y sistemas
                existentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Showcase */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow">Aplicaciones Destacadas</h2>

          <div ref={mockupRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "FinanceFlow",
                category: "Banca Móvil",
                description: "App bancaria segura con autenticación biométrica y transacciones en tiempo real",
                features: ["Face ID/Touch ID", "Notificaciones en Tiempo Real", "Seguimiento de Inversiones"],
                image: "/placeholder.svg?height=400&width=300",
              },
              {
                title: "CreativeStudio",
                category: "Herramienta de Diseño",
                description: "Suite de diseño profesional para escritorio con sincronización en la nube",
                features: ["Gráficos Vectoriales", "Sincronización en la Nube", "Colaboración en Equipo"],
                image: "/placeholder.svg?height=400&width=300",
              },
              {
                title: "FitnessPro",
                category: "Salud y Fitness",
                description: "Seguimiento de fitness potenciado por IA con planes de entrenamiento personalizados",
                features: ["Entrenamiento IA", "Análisis de Progreso", "Características Sociales"],
                image: "/placeholder.svg?height=400&width=300",
              },
              {
                title: "TaskMaster",
                category: "Productividad",
                description: "Gestión de tareas multiplataforma con automatización avanzada",
                features: ["Automatización Inteligente", "Sincronización de Equipo", "Seguimiento de Tiempo"],
                image: "/placeholder.svg?height=400&width=300",
              },
              {
                title: "EcoTracker",
                category: "Ambiental",
                description: "Seguimiento de huella de carbono con elementos de gamificación",
                features: ["Seguimiento de Carbono", "Desafíos Eco", "Visualización de Impacto"],
                image: "/placeholder.svg?height=400&width=300",
              },
              {
                title: "MindfulSpace",
                category: "Bienestar",
                description: "App de meditación y mindfulness con experiencias inmersivas",
                features: ["Meditación Guiada", "Seguimiento de Progreso", "Sonidos Ambientales"],
                image: "/placeholder.svg?height=400&width=300",
              },
            ].map((app, index) => (
              <div
                key={index}
                className="group bg-hyung-indigo/20 rounded-xl border border-hyung-indigo/30 hover:border-hyung-gold/50 transition-all duration-500 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={app.image || "/placeholder.svg"}
                    alt={app.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-hyung-gold text-hyung-black px-3 py-1 rounded-full text-sm font-semibold">
                    {app.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-hyung-gold">{app.title}</h3>
                  <p className="text-hyung-white/70 mb-4 leading-relaxed">{app.description}</p>

                  <div className="space-y-2 mb-6">
                    {app.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-hyung-gold rounded-full"></div>
                        <span className="text-hyung-white/60 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-3 bg-hyung-indigo/40 text-hyung-white rounded-lg hover:bg-hyung-gold hover:text-hyung-black transition-all duration-300">
                    Ver Caso de Estudio
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-8 bg-hyung-indigo/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow">Stack Tecnológico</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-8 text-hyung-gold">Frontend</h3>
              <div className="space-y-4">
                {["React Native", "Flutter", "Swift", "Kotlin", "Electron", "React"].map((tech, index) => (
                  <div key={index} className="bg-hyung-indigo/20 py-3 px-6 rounded-lg border border-hyung-indigo/30">
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-8 text-hyung-gold">Backend</h3>
              <div className="space-y-4">
                {["Node.js", "Python", "Firebase", "AWS", "GraphQL", "REST APIs"].map((tech, index) => (
                  <div key={index} className="bg-hyung-indigo/20 py-3 px-6 rounded-lg border border-hyung-indigo/30">
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-8 text-hyung-gold">Tools & Services</h3>
              <div className="space-y-4">
                {["Figma", "Xcode", "Android Studio", "Git", "CI/CD", "Analytics"].map((tech, index) => (
                  <div key={index} className="bg-hyung-indigo/20 py-3 px-6 rounded-lg border border-hyung-indigo/30">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-glow">Métricas de Éxito de Apps</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-hyung-indigo/20 p-8 rounded-xl border border-hyung-indigo/30">
              <div className="text-4xl font-bold text-hyung-gold mb-4">300%</div>
              <h3 className="text-xl font-bold mb-2 text-hyung-white">Retención de Usuarios</h3>
              <p className="text-hyung-white/60 text-sm">Aumento promedio en tasas de retención de usuarios</p>
            </div>

            <div className="bg-hyung-indigo/20 p-8 rounded-xl border border-hyung-indigo/30">
              <div className="text-4xl font-bold text-hyung-gold mb-4">4.8★</div>
              <h3 className="text-xl font-bold mb-2 text-hyung-white">Calificación App Store</h3>
              <p className="text-hyung-white/60 text-sm">Calificación promedio en todas las plataformas</p>
            </div>

            <div className="bg-hyung-indigo/20 p-8 rounded-xl border border-hyung-indigo/30">
              <div className="text-4xl font-bold text-hyung-gold mb-4">50M+</div>
              <h3 className="text-xl font-bold mb-2 text-hyung-white">Descargas</h3>
              <p className="text-hyung-white/60 text-sm">Total de descargas en todas las apps</p>
            </div>

            <div className="bg-hyung-indigo/20 p-8 rounded-xl border border-hyung-indigo/30">
              <div className="text-4xl font-bold text-hyung-gold mb-4">99.9%</div>
              <h3 className="text-xl font-bold mb-2 text-hyung-white">Tiempo de Actividad</h3>
              <p className="text-hyung-white/60 text-sm">Tiempo de actividad promedio y confiabilidad de la app</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
