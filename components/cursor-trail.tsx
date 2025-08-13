"use client"

import { useEffect } from "react"

export default function CursorTrail() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const trails: HTMLElement[] = []
      const trailCount = 5

      // Create trail elements
      for (let i = 0; i < trailCount; i++) {
        const trail = document.createElement("div")
        trail.className = "cursor-trail"
        trail.style.opacity = (1 - i / trailCount).toString()
        document.body.appendChild(trail)
        trails.push(trail)
      }

      let mouseX = 0
      let mouseY = 0
      const positions = Array(trailCount).fill({ x: 0, y: 0 })

      const updateTrails = () => {
        positions.unshift({ x: mouseX, y: mouseY })
        positions.pop()

        trails.forEach((trail, index) => {
          const position = positions[index]
          trail.style.left = position.x + "px"
          trail.style.top = position.y + "px"
        })

        requestAnimationFrame(updateTrails)
      }

      const handleMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX
        mouseY = e.clientY
      }

      document.addEventListener("mousemove", handleMouseMove)
      updateTrails()

      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        trails.forEach((trail) => document.body.removeChild(trail))
      }
    }
  }, [])

  return null
}
