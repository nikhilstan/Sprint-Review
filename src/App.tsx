import { useEffect, useRef, useState } from "react"
import SprintSection from "./components/SprintSection"
import IntroSection from "./components/IntroSection"
import { sprints } from "./data/sprints"

function App() {
  const reversed = [...sprints].reverse()
  const containerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollTop = container.scrollTop
      const height = window.innerHeight
      const index = Math.round(scrollTop / height)
      setActive(index)
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  const totalSections = reversed.length + 1

  return (
    <div
      ref={containerRef}
      className="relative bg-black text-white h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth"
    >
      {/* Left Dots */}
      <div className="fixed left-10 top-1/2 -translate-y-1/2 space-y-4 z-50">
        {Array.from({ length: totalSections }).map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === active
                ? "bg-green-400 scale-125"
                : "bg-gray-700"
            }`}
          />
        ))}
      </div>

      <IntroSection />

      {reversed.map((sprint, index) => (
        <SprintSection key={index} sprint={sprint} />
      ))}
    </div>
  )
}

export default App
