import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ProductGrid } from '../components/ProductGrid'
import { useCartStore } from '../store'
import { CATEGORIES, SAMPLE_PRODUCTS } from '../utils/constants'
import { FilterOptions, Product } from '../types'

export const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const addItem = useCartStore((state) => state.addItem)
  const [filters, setFilters] = React.useState<FilterOptions>({
    categories: searchParams.get('category') ? [searchParams.get('category') as string] : [],
    priceRange: [0, 90000],
    sortBy: 'newest',
  })

  const displayProducts = React.useMemo(() => {
    let products = [...SAMPLE_PRODUCTS]

    if (filters.categories?.length) {
      products = products.filter((product) => filters.categories?.includes(product.category.id))
    }

    if (filters.priceRange) {
      products = products.filter(
        (product) => product.price >= filters.priceRange![0] && product.price <= filters.priceRange![1]
      )
    }

    switch (filters.sortBy) {
      case 'priceAsc':
        products.sort((a, b) => a.price - b.price)
        break
      case 'priceDesc':
        products.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        products.sort((a, b) => b.rating - a.rating)
        break
      case 'popular':
        products.sort((a, b) => b.reviews - a.reviews)
        break
      default:
        products.sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0))
    }

    return products
  }, [filters])

  const handleCategory = (categoryId: string) => {
    const next = filters.categories?.includes(categoryId) ? [] : [categoryId]
    setFilters((current) => ({ ...current, categories: next }))
    next.length ? setSearchParams({ category: categoryId }) : setSearchParams({})
  }

  const handleAddCart = (product: Product) => {
    addItem(product, 1)
  }

  return (
    <div className="min-h-screen bg-[#fbfaf7]">
      <Header />

      <section className="bg-[#1f2f28] py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e9bf7a]">
              Handicrafts Town
            </p>
            <h1 className="mt-2 text-5xl font-bold">Shop</h1>
            <p className="mt-3 max-w-2xl text-stone-200">
              Browse furniture, clocks, wall art, mirrors, lamps, and luxury decor inspired
              by the original storefront.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[280px_1fr] lg:px-8">
        <aside className="space-y-6">
          <div className="rounded-md border border-stone-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-bold text-stone-950">Categories</h2>
            <div className="space-y-2">
              {CATEGORIES.map((category) => (
                <label key={category.id} className="flex cursor-pointer items-center gap-3 text-sm text-stone-700">
                  <input
                    type="checkbox"
                    checked={filters.categories?.includes(category.id) || false}
                    onChange={() => handleCategory(category.id)}
                    className="h-4 w-4 rounded border-stone-300 text-[#a86d30]"
                  />
                  {category.name}
                </label>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-stone-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-bold text-stone-950">Price Range</h2>
            <input
              type="range"
              min="5000"
              max="90000"
              step="5000"
              value={filters.priceRange?.[1] || 90000}
              onChange={(event) =>
                setFilters((current) => ({
                  ...current,
                  priceRange: [0, Number(event.target.value)],
                }))
              }
              className="w-full"
            />
            <p className="mt-2 text-sm font-semibold text-stone-600">
              Up to Rs. {filters.priceRange?.[1].toLocaleString('en-IN')}
            </p>
          </div>
        </aside>

        <section>
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm font-semibold text-stone-600">
              Showing <span className="text-stone-950">{displayProducts.length}</span> products
            </p>
            <div className="relative w-full sm:w-64">
              <select
                value={filters.sortBy}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    sortBy: event.target.value as FilterOptions['sortBy'],
                  }))
                }
                className="w-full appearance-none rounded-md border border-stone-300 bg-white px-4 py-3 text-sm font-semibold"
              >
                <option value="newest">Newest</option>
                <option value="popular">Most Popular</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-3.5 text-stone-500" size={18} />
            </div>
          </div>

          {displayProducts.length ? (
            <ProductGrid products={displayProducts} onAddCart={handleAddCart} />
          ) : (
            <div className="rounded-md border border-stone-200 bg-white p-12 text-center text-stone-600">
              No products found for this filter.
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}
