import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus, ShieldCheck, ShoppingBag, Star, Truck } from 'lucide-react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ProductGrid } from '../components/ProductGrid'
import { useCartStore } from '../store'
import { formatRupees, SAMPLE_PRODUCTS } from '../utils/constants'

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams()
  const addItem = useCartStore((state) => state.addItem)
  const [quantity, setQuantity] = React.useState(1)
  const product = SAMPLE_PRODUCTS.find((item) => item.id === id)

  if (!product) {
    return (
      <PageFrame>
        <section className="mx-auto max-w-3xl px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-stone-950">Product not found</h1>
          <Link to="/shop" className="mt-6 inline-block rounded-md bg-stone-900 px-6 py-3 font-bold text-white">
            Back to shop
          </Link>
        </section>
      </PageFrame>
    )
  }

  const related = SAMPLE_PRODUCTS.filter((item) => item.category.id === product.category.id && item.id !== product.id)
    .concat(SAMPLE_PRODUCTS.filter((item) => item.id !== product.id))
    .slice(0, 4)

  return (
    <PageFrame>
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-md bg-stone-100">
            <img src={product.image} alt={product.name} className="aspect-[4/5] w-full object-cover" />
          </div>

          <section>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a86d30]">
              {product.category.name}
            </p>
            <h1 className="mt-3 text-4xl font-bold text-stone-950">{product.name}</h1>
            <div className="mt-4 flex items-center gap-2 text-[#c58a3d]">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={18} fill={index < Math.round(product.rating) ? 'currentColor' : 'none'} />
              ))}
              <span className="text-sm font-semibold text-stone-500">({product.reviews} reviews)</span>
            </div>
            <div className="mt-5 flex flex-wrap items-baseline gap-3">
              <span className="text-3xl font-bold text-[#7a4b2a]">{formatRupees(product.price)}</span>
              {product.originalPrice && (
                <span className="text-lg font-semibold text-stone-400 line-through">
                  {formatRupees(product.originalPrice)}
                </span>
              )}
              {product.discount && (
                <span className="rounded-sm bg-[#1f2f28] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  {product.discount}% off
                </span>
              )}
            </div>
            <p className="mt-6 leading-8 text-stone-700">{product.description}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex h-12 items-center rounded-md border border-stone-300 bg-white">
                <button className="px-4 text-stone-700" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus size={17} />
                </button>
                <span className="w-10 text-center font-bold">{quantity}</span>
                <button className="px-4 text-stone-700" onClick={() => setQuantity(quantity + 1)}>
                  <Plus size={17} />
                </button>
              </div>
              <button
                onClick={() => addItem(product, quantity)}
                className="flex h-12 items-center gap-2 rounded-md bg-stone-900 px-7 text-sm font-bold uppercase tracking-[0.14em] text-white hover:bg-[#a86d30]"
              >
                <ShoppingBag size={18} /> Add to cart
              </button>
              <Link
                to="/checkout"
                onClick={() => addItem(product, quantity)}
                className="flex h-12 items-center rounded-md bg-[#c58a3d] px-7 text-sm font-bold uppercase tracking-[0.14em] text-white hover:bg-[#a86d30]"
              >
                Buy now
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <InfoTile icon={<Truck size={22} />} title="Delivery" text="Ships with careful protective packaging." />
              <InfoTile icon={<ShieldCheck size={22} />} title="Secure payment" text="Prepaid discount and safe checkout." />
            </div>
          </section>
        </div>

        <section className="mt-16">
          <h2 className="mb-7 text-3xl font-bold text-stone-950">You may also like</h2>
          <ProductGrid products={related} onAddCart={(item) => addItem(item, 1)} />
        </section>
      </main>
    </PageFrame>
  )
}

const PageFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-[#fbfaf7]">
    <Header />
    {children}
    <Footer />
  </div>
)

const InfoTile: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="rounded-md border border-stone-200 bg-white p-4">
    <div className="text-[#a86d30]">{icon}</div>
    <h3 className="mt-3 font-bold text-stone-950">{title}</h3>
    <p className="mt-1 text-sm text-stone-600">{text}</p>
  </div>
)
