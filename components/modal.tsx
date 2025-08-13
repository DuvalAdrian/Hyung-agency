"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  clickOrigin?: { x: number; y: number }
}

export default function Modal({ isOpen, onClose, title, children, clickOrigin }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || typeof window === "undefined" || !window.gsap) return

    const { gsap } = window

    if (isOpen) {
      // Create particles
      createParticles()

      // Modal entrance animation
      const tl = gsap.timeline()

      // Morphing overlay animation
      tl.set(overlayRef.current, {
        clipPath: clickOrigin ? `circle(0% at ${clickOrigin.x}px ${clickOrigin.y}px)` : "circle(0% at 50% 50%)",
      })
        .to(overlayRef.current, {
          clipPath: "circle(150% at 50% 50%)",
          duration: 0.8,
          ease: "power3.out",
        })

        // Modal content cascade
        .set(contentRef.current, {
          scale: 0.3,
          rotationY: -90,
          opacity: 0,
          transformOrigin: "center center",
        })
        .to(
          contentRef.current,
          {
            scale: 1,
            rotationY: 0,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        )

        // Stagger content elements
        .fromTo(
          contentRef.current?.children || [],
          {
            y: 50,
            opacity: 0,
            rotationX: 45,
          },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.2",
        )
    } else if (modalRef.current) {
      // Modal exit animation
      const tl = gsap.timeline({
        onComplete: () => {
          // Clean up particles
          document.querySelectorAll(".modal-particle").forEach((p) => p.remove())
        },
      })

      tl.to(contentRef.current?.children || [], {
        y: -30,
        opacity: 0,
        rotationX: -45,
        duration: 0.2,
        stagger: 0.05,
        ease: "power2.in",
      })
        .to(
          contentRef.current,
          {
            scale: 0.3,
            rotationY: 90,
            opacity: 0,
            duration: 0.4,
            ease: "back.in(1.7)",
          },
          "-=0.1",
        )
        .to(
          overlayRef.current,
          {
            clipPath: clickOrigin ? `circle(0% at ${clickOrigin.x}px ${clickOrigin.y}px)` : "circle(0% at 50% 50%)",
            duration: 0.6,
            ease: "power3.in",
          },
          "-=0.2",
        )
    }
  }, [isOpen, mounted, clickOrigin])

  const createParticles = () => {
    if (typeof window === "undefined" || !window.gsap) return

    const { gsap } = window
    const particleCount = 20

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.className = "modal-particle fixed w-2 h-2 bg-hyung-gold rounded-full pointer-events-none z-[9999]"
      particle.style.left = clickOrigin ? `${clickOrigin.x}px` : "50%"
      particle.style.top = clickOrigin ? `${clickOrigin.y}px` : "50%"
      document.body.appendChild(particle)

      gsap.to(particle, {
        x: (Math.random() - 0.5) * 400,
        y: (Math.random() - 0.5) * 400,
        opacity: 0,
        scale: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: Math.random() * 0.3,
        onComplete: () => particle.remove(),
      })
    }
  }

  if (!mounted) return null

  if (!isOpen) return null

  return createPortal(
    <div ref={modalRef} className="fixed inset-0 z-[9998] flex items-center justify-center p-4">
      <div ref={overlayRef} className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose} />

      <div
        ref={contentRef}
        className="relative bg-hyung-indigo/90 backdrop-blur-xl rounded-2xl border border-hyung-gold/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        style={{ perspective: "1000px" }}
      >
        <div className="sticky top-0 bg-hyung-indigo/95 backdrop-blur-xl border-b border-hyung-gold/20 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-hyung-gold">{title}</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-hyung-white/70 hover:text-hyung-gold transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">{children}</div>
      </div>
    </div>,
    document.body,
  )
}
