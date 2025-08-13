"use client"

import { useEffect, useRef } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function DisenoPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap) {
      const { gsap } = window

      // Hero animation
      gsap.fromTo(
        heroRef.current?.querySelector("h1"),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" },
      )

      // Gallery masonry animation
      gsap.fromTo(
        galleryRef.current?.children || [],
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: galleryRef.current,
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
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-glow">Diseño: Sinfonías Visuales Desatadas</h1>
          <p className="text-xl md:text-2xl text-hyung-white/80 max-w-4xl mx-auto leading-relaxed">
            Desde logos que definen identidades hasta catálogos que cautivan—precisión vectorial, maestría en teoría del
            color, y diseños que aumentan el engagement en 200%.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 px-8 bg-hyung-indigo/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow">Nuestro Proceso de Diseño</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Descubrimiento",
                description: "Inmersión profunda en la esencia de tu marca y psicología de audiencia objetivo",
              },
              {
                step: "02",
                title: "Conceptualización",
                description: "Mood boards, bocetos y sesiones de exploración creativa",
              },
              {
                step: "03",
                title: "Refinamiento",
                description: "Diseño iterativo con feedback del cliente y pruebas de mercado",
              },
              {
                step: "04",
                title: "Entrega",
                description: "Assets finales con guías de marca y documentación de uso",
              },
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-hyung-gold/20 mb-4">{phase.step}</div>
                <h3 className="text-2xl font-bold mb-4 text-hyung-gold">{phase.title}</h3>
                <p className="text-hyung-white/70 leading-relaxed">{phase.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-hyung-gold/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow">Portfolio de Diseño</h2>

          <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Logo Startup Tech", category: "Branding", height: "h-64", image: "/tech-startup-logo.png" },
              {
                title: "Catálogo de Moda",
                category: "Diseño Impreso",
                height: "h-80",
                image: "/fashion-catalog-design.png",
              },
              {
                title: "Identidad Restaurante",
                category: "Branding",
                height: "h-64",
                image: "/restaurant-brand-identity.png",
              },
              {
                title: "Empaque de Producto",
                category: "Diseño de Empaque",
                height: "h-72",
                image: "/product-packaging-design.png",
              },
              {
                title: "Serie de Pósters de Evento",
                category: "Diseño Gráfico",
                height: "h-64",
                image: "/event-poster-series.png",
              },
              {
                title: "Brochure Corporativo",
                category: "Diseño Impreso",
                height: "h-80",
                image: "/corporate-brochure.png",
              },
              {
                title: "Set de Iconos de App",
                category: "Diseño Digital",
                height: "h-64",
                image: "/placeholder-7our3.png",
              },
              { title: "Layout de Revista", category: "Editorial", height: "h-72", image: "/magazine-layout.png" },
            ].map((item, index) => (
              <div key={index} className={`group relative overflow-hidden rounded-xl cursor-pointer ${item.height}`}>
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <h4 className="text-lg font-bold text-hyung-gold">{item.title}</h4>
                    <p className="text-hyung-white/70 text-sm">{item.category}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-hyung-gold rounded-full flex items-center justify-center">
                    <span className="text-hyung-black text-sm">↗</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 px-8 bg-hyung-indigo/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow">Historias de Éxito de Clientes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-hyung-indigo/20 p-8 rounded-xl border border-hyung-indigo/30">
              <div className="text-4xl text-hyung-gold mb-4">200%</div>
              <h3 className="text-2xl font-bold mb-4 text-hyung-white">Impulso de Engagement</h3>
              <p className="text-hyung-white/70 leading-relaxed">
                "El rediseño de catálogo de Hyung transformó nuestro engagement de clientes. Las ventas aumentaron 200%
                dentro del primer trimestre después del lanzamiento."
              </p>
              <div className="mt-6 text-hyung-gold font-semibold">— CEO Retailer de Moda</div>
            </div>

            <div className="bg-hyung-indigo/20 p-8 rounded-xl border border-hyung-indigo/30">
              <div className="text-4xl text-hyung-gold mb-4">15x</div>
              <h3 className="text-2xl font-bold mb-4 text-hyung-white">Reconocimiento de Marca</h3>
              <p className="text-hyung-white/70 leading-relaxed">
                "El diseño de logo superó nuestras expectativas. El reconocimiento de marca aumentó 15 veces, y ganamos
                tres premios de diseño este año."
              </p>
              <div className="mt-6 text-hyung-gold font-semibold">— Fundador Startup Tech</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
