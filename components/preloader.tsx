"use client"

import { useEffect, useRef, useState } from "react"

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isAnimating, setIsAnimating] = useState(true)
  const preloaderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
      setTimeout(onComplete, 500)
    }, 2500)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div
      ref={preloaderRef}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-center">
        {/* Updated orb with proper animation class */}
        <div className="w-16 h-16 mx-auto mb-8 bg-gradient-to-r from-hyung-gold to-yellow-400 rounded-full animate-orb-pulse"></div>

        <div className="text-hyung-gold text-xl tracking-wider animate-fade-in">Despertando Tu Aura Digital...</div>
      </div>
    </div>
  )
}
