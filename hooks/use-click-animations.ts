"use client"

import type React from "react"

import { useCallback } from "react"

export const useClickAnimation = () => {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>, callback?: () => void, clickOrigin?: { x: number; y: number }) => {
      if (typeof window === "undefined" || !window.gsap) {
        callback?.()
        return
      }

      const { gsap } = window
      const element = event.currentTarget
      const rect = element.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

      // Store click origin for modal
      if (clickOrigin) {
        clickOrigin.x = event.clientX
        clickOrigin.y = event.clientY
      }

      // Create ripple effect
      const ripple = document.createElement("div")
      ripple.className = "absolute rounded-full bg-hyung-gold/30 pointer-events-none"
      ripple.style.left = `${x}px`
      ripple.style.top = `${y}px`
      ripple.style.transform = "translate(-50%, -50%)"
      ripple.style.width = "0px"
      ripple.style.height = "0px"

      element.style.position = "relative"
      element.appendChild(ripple)

      // Animate ripple
      gsap.to(ripple, {
        width: "200px",
        height: "200px",
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => ripple.remove(),
      })

      // Button scale animation
      const tl = gsap.timeline({
        onComplete: () => callback?.(),
      })

      tl.to(element, {
        scale: 0.95,
        duration: 0.1,
        ease: "power2.out",
      }).to(element, {
        scale: 1,
        duration: 0.3,
        ease: "back.out(1.7)",
      })
    },
    [],
  )

  return handleClick
}
