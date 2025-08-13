"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import type { HTMLNavElement, HTMLDivElement } from "react"

export default function Navbar() {
  const navRef = useRef<HTMLNavElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap) {
      const { gsap } = window

      // Slide in navbar from top
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 3 },
      )

      // Logo hover animation
      if (logoRef.current) {
        logoRef.current.addEventListener("mouseenter", () => {
          gsap.to(logoRef.current, {
            textShadow: "0 0 30px #C0A080",
            duration: 0.3,
            ease: "power2.out",
          })
        })

        logoRef.current.addEventListener("mouseleave", () => {
          gsap.to(logoRef.current, {
            textShadow: "0 0 20px rgba(192, 160, 128, 0.3)",
            duration: 0.3,
            ease: "power2.out",
          })
        })
      }
    }
  }, [])

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-black/80 backdrop-blur-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/">
          <div ref={logoRef} className="text-2xl font-bold text-hyung-gold cursor-pointer">
            Hyung
          </div>
        </Link>

        <div className="flex items-center space-x-8">
          <Link href="/" className="navbar-link text-hyung-white hover:text-hyung-gold transition-colors">
            Inicio
          </Link>
          <Link href="/paginas-web" className="navbar-link text-hyung-white hover:text-hyung-gold transition-colors">
            Páginas Web
          </Link>
          <Link href="/diseno" className="navbar-link text-hyung-white hover:text-hyung-gold transition-colors">
            Diseño
          </Link>
          <Link href="/branding" className="navbar-link text-hyung-white hover:text-hyung-gold transition-colors">
            Branding
          </Link>
          <Link href="/aplicaciones" className="navbar-link text-hyung-white hover:text-hyung-gold transition-colors">
            Aplicaciones
          </Link>
        </div>

        <button className="px-6 py-3 bg-hyung-indigo text-hyung-white rounded-lg hover:bg-hyung-gold hover:text-hyung-black transition-all duration-300 aura-glow">
          Contacto
        </button>
      </div>
    </nav>
  )
}
