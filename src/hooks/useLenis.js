import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
      syncTouch: true,
    })

    let scrollTimeout
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    // eslint-disable-next-line no-unused-vars
    const handleWheel = (e) => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        // Reset Lenis state after scroll
      }, 100)
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    requestAnimationFrame(raf)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      lenis.destroy()
    }
  }, [])
}
