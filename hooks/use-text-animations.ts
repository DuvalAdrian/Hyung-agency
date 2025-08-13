"use client"

import { useEffect, useRef } from "react"

export const useTextReveal = (trigger?: string) => {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !window.gsap || !elementRef.current) return

    const { gsap } = window
    const element = elementRef.current

    // Split text into letters
    const text = element.textContent || ""
    element.innerHTML = text
      .split("")
      .map((char) => (char === " " ? " " : `<span class="inline-block">${char}</span>`))
      .join("")

    const letters = element.querySelectorAll("span")

    // Staggered reveal animation
    gsap.fromTo(
      letters,
      {
        opacity: 0,
        y: 50,
        rotationX: -90,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.03,
        ease: "power3.out",
        scrollTrigger: trigger
          ? {
              trigger: trigger,
              start: "top 80%",
              toggleActions: "play none none reverse",
            }
          : undefined,
      },
    )
  }, [trigger])

  return elementRef
}

export const useTypingEffect = (text: string, speed = 50) => {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !window.gsap || !elementRef.current) return

    const { gsap } = window
    const element = elementRef.current

    element.textContent = ""

    gsap.to(element, {
      duration: (text.length * speed) / 1000,
      text: text,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    })
  }, [text, speed])

  return elementRef
}

export const useGlowPulse = () => {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !window.gsap || !elementRef.current) return

    const { gsap } = window

    gsap.to(elementRef.current, {
      textShadow: "0 0 20px #C0A080, 0 0 40px #C0A080, 0 0 60px #C0A080",
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "power2.inOut",
    })
  }, [])

  return elementRef
}
