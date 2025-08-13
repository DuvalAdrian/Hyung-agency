// GSAP setup and plugin imports
export const initGSAP = () => {
  if (typeof window !== "undefined") {
    // Load GSAP from CDN
    const script = document.createElement("script")
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
    script.onload = () => {
      // Load ScrollTrigger plugin
      const scrollTriggerScript = document.createElement("script")
      scrollTriggerScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
      scrollTriggerScript.onload = () => {
        if (window.gsap) {
          window.gsap.registerPlugin(window.ScrollTrigger)
        }
      }
      document.head.appendChild(scrollTriggerScript)

      // Load TextPlugin
      const textPluginScript = document.createElement("script")
      textPluginScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/TextPlugin.min.js"
      textPluginScript.onload = () => {
        if (window.gsap) {
          window.gsap.registerPlugin(window.TextPlugin)
        }
      }
      document.head.appendChild(textPluginScript)

      // Load MorphSVGPlugin (free alternative)
      const morphScript = document.createElement("script")
      morphScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/CustomEase.min.js"
      document.head.appendChild(morphScript)
    }
    document.head.appendChild(script)
  }
}

declare global {
  interface Window {
    gsap: any
    ScrollTrigger: any
    TextPlugin: any
  }
}
