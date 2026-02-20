import { motion } from "framer-motion"

export default function IntroSection() {
  return (
    <section className="h-screen flex items-center justify-center snap-start px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <p className="text-sm text-gray-500 mb-6 tracking-widest uppercase">
          Engineering Review
        </p>

        <h1 className="text-6xl md:text-7xl font-semibold mb-8">
          Hi, I’m Nikhil.
        </h1>

        <p className="text-xl text-gray-400">
          This is how my latest sprint performed.
        </p>

        <div className="mt-16 text-gray-600 text-sm font-mono">
          ↓ Scroll to begin
        </div>
      </motion.div>
    </section>
  )
}
