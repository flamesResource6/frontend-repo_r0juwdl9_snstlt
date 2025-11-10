import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/HldEaEeFcKnMlQB3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/10 to-white pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="uppercase tracking-[0.3em] text-xs text-gray-700/80">Futuristic Fine Jewelry</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-tight">
              Crystal-cut brilliance, crafted for the modern era
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-xl">
              Explore a curated collection of rings, necklaces, and earrings that blend timeless elegance with interactive 3D craftsmanship.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#collections" className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-gray-900 text-white hover:bg-black transition-colors">Shop Collections</a>
              <a href="#about" className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-gray-300 bg-white/70 backdrop-blur hover:bg-white transition-colors">Learn More</a>
            </div>
          </motion.div>
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  )
}
