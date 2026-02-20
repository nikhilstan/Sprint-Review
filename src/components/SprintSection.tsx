import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import type { Sprint } from "../data/sprints"

export default function SprintSection({ sprint }: { sprint: Sprint }) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.intersectionRatio > 0.6),
      { threshold: [0.6] }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="h-screen flex items-center justify-center snap-start px-6"
    >
      <motion.div
        animate={{
          opacity: active ? 1 : 0.25,
          scale: active ? 1 : 0.92,
          filter: active ? "blur(0px)" : "blur(8px)"
        }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl text-center"
      >
        {/* Month */}
        <p className="text-xs font-mono tracking-widest text-green-400 mb-6 uppercase">
          {sprint.month} {sprint.year}
        </p>

        {/* Sprint Title with Glow */}
        <h1 className="text-6xl md:text-7xl font-semibold tracking-tight mb-4 text-green-400 drop-shadow-[0_0_12px_rgba(34,197,94,0.5)]">
          Sprint {sprint.sprint}
        </h1>

        {/* Duration */}
        <p className="text-gray-500 font-mono mb-10">
          {sprint.duration}
        </p>

        {/* Main Statement */}
        <h2 className="text-3xl md:text-4xl font-light mb-12">
          {sprint.title}
        </h2>

        {/* Two Info Boxes */}
        <div className="grid md:grid-cols-2 gap-8 text-left">

          {/* Business Impact Box */}
          <div className="border border-green-500/40 bg-green-500/5 p-6 rounded-xl">
            <h3 className="font-mono text-green-400 mb-4 uppercase text-sm tracking-wider">
              Business Impact
            </h3>
            <ul className="space-y-2 text-gray-300">
              {sprint.businessImpact.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>

          {/* Dev Learning Box */}
          <div className="border border-green-500/40 bg-green-500/5 p-6 rounded-xl">
            <h3 className="font-mono text-green-400 mb-4 uppercase text-sm tracking-wider">
              What I Improved
            </h3>
            <ul className="space-y-2 text-gray-300">
              {sprint.devLearning.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>

        </div>
      </motion.div>
    </section>
  )
}
