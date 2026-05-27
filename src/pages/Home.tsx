import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Award, CheckCircle2, Truck } from 'lucide-react'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { ProductGrid } from '../components/ProductGrid'
import { Footer } from '../components/Footer'
import { useCartStore } from '../store'
import { CATEGORIES, REVIEWS, SAMPLE_PRODUCTS } from '../utils/constants'
import { Product } from '../types'

const collectionImages = [
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=80',
]

export const HomePage: React.FC = () => {
  const addItem = useCartStore((state) => state.addItem)
  const featuredProducts = SAMPLE_PRODUCTS.slice(0, 4)
  const bestSellers = SAMPLE_PRODUCTS.slice(4, 8)

  const handleAddCart = (product: Product) => {
    addItem(product, 1)
  }

  return (
    <div className="min-h-screen bg-[#fbfaf7]">
      <Header />
      <Hero />

      <section id="collections" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a86d30]">
                Shop by category
              </p>
              <h2 className="mt-2 text-4xl font-bold text-stone-950">Collections</h2>
            </div>
            <Link to="/shop" className="font-bold text-[#7a4b2a] hover:text-[#a86d30]">
              View all products
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.slice(0, 4).map((category, index) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative min-h-[270px] overflow-hidden rounded-md"
              >
                <img
                  src={collectionImages[index]}
                  alt={category.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                  <p className="mt-1 text-sm text-stone-200">Handpicked luxury pieces</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Featured products" title="Designed To Anchor The Room" />
          <ProductGrid products={featuredProducts} onAddCart={handleAddCart} />
        </div>
      </section>

      <section className="bg-[#1f2f28] py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e9bf7a]">
              Why Handicrafts Town
            </p>
            <h2 className="mt-3 text-4xl font-bold">Modern luxury with craft at the core.</h2>
            <p className="mt-5 text-stone-200">
              The cloned storefront keeps the same premium home-decor focus: sculptural
              furniture, metal wall art, clocks, mirrors, and accent tables with strong
              discounts and clear product storytelling.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: Truck, title: 'Reliable Delivery', text: 'Packed for safe transit across India.' },
              { icon: Award, title: 'Premium Finish', text: 'Gold, marble, metal, and wood details.' },
              { icon: CheckCircle2, title: 'Curated Decor', text: 'Collections styled for elegant homes.' },
            ].map((item) => (
              <div key={item.title} className="rounded-md border border-white/15 bg-white/8 p-5">
                <item.icon className="mb-4 text-[#e9bf7a]" size={28} />
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-200">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Best sellers" title="Popular In Premium Decor" />
          <ProductGrid products={bestSellers} onAddCart={handleAddCart} />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Customer reviews" title="What Buyers Are Saying" />
          <div className="grid gap-5 md:grid-cols-3">
            {REVIEWS.map((review) => (
              <motion.article
                key={review.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-md border border-stone-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 text-[#c58a3d]">★★★★★</div>
                <p className="text-stone-700">"{review.text}"</p>
                <div className="mt-5">
                  <p className="font-bold text-stone-950">{review.name}</p>
                  <p className="text-sm text-stone-500">
                    {review.product} · {review.date}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a86d30]">
            Join our newsletter
          </p>
          <h2 className="mt-2 text-4xl font-bold text-stone-950">Get new decor drops first</h2>
          <form className="mt-7 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="min-h-[52px] flex-1 rounded-md border border-stone-300 px-4"
            />
            <button className="rounded-md bg-stone-900 px-7 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white hover:bg-[#a86d30]">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}

const SectionHeading: React.FC<{ eyebrow: string; title: string }> = ({ eyebrow, title }) => (
  <div className="mb-9 text-center">
    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a86d30]">{eyebrow}</p>
    <h2 className="mt-2 text-4xl font-bold text-stone-950">{title}</h2>
  </div>
)
