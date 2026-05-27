import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingBag, Star } from 'lucide-react'
import { formatRupees } from '../utils/constants'

interface ProductCardProps {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  discount?: number
  rating: number
  reviews: number
  onAddCart: () => void
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  discount,
  rating,
  reviews,
  onAddCart,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="group overflow-hidden rounded-md border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {discount ? (
          <span className="absolute left-3 top-3 rounded-sm bg-[#1f2f28] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            Save {discount}%
          </span>
        ) : null}
      </div>

      <div className="p-4">
        <div className="mb-2 flex items-center gap-1 text-[#c58a3d]">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={15}
              fill={index < Math.round(rating) ? 'currentColor' : 'none'}
              className={index < Math.round(rating) ? 'text-[#c58a3d]' : 'text-stone-300'}
            />
          ))}
          <span className="ml-1 text-xs font-semibold text-stone-500">({reviews})</span>
        </div>
        <Link to={`/products/${id}`} className="block min-h-[3.25rem] text-base font-semibold leading-snug text-stone-900 hover:text-[#a86d30]">
          {name}
        </Link>
        <div className="mt-3 flex flex-wrap items-baseline gap-2">
          <span className="text-xl font-bold text-[#7a4b2a]">{formatRupees(price)}</span>
          {originalPrice ? (
            <span className="text-sm font-semibold text-stone-400 line-through">
              {formatRupees(originalPrice)}
            </span>
          ) : null}
        </div>
        <button
          onClick={onAddCart}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-stone-900 px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#a86d30]"
        >
          <ShoppingBag size={17} />
          Add To Cart
        </button>
      </div>
    </motion.article>
  )
}
