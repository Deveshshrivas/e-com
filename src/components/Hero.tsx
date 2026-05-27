import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[82vh] overflow-hidden bg-[#171a16]">
      <img
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85"
        alt="Luxury living room with handcrafted decor"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

      <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-center px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl text-white"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#e9bf7a]">
            Premium handcrafted furniture
          </p>
          <h1 className="text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
            Handicrafts Town
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-100">
            A curated collection of dining tables, wall decor, clocks, side tables, and
            luxe metal accents designed to make homes feel collected and complete.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-md bg-[#c58a3d] px-7 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#a86d30]"
            >
              Shop Now <ArrowRight size={18} />
            </Link>
            <a
              href="#collections"
              className="inline-flex items-center rounded-md border border-white/70 px-7 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-stone-900"
            >
              Explore Collections
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white/92 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-stone-200 px-4 py-5 text-sm font-semibold text-stone-700 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
          <div className="py-2 sm:px-6">Free shipping on selected decor</div>
          <div className="py-2 sm:px-6">Secure payment and prepaid discount</div>
          <div className="py-2 sm:px-6">Handpicked metal, wood, and marble finishes</div>
        </div>
      </div>
    </section>
  )
}
