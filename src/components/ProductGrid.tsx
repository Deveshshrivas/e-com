import React from 'react'
import { motion } from 'framer-motion'
import { Product } from '../types'
import { ProductCard } from './ProductCard'

interface ProductGridProps {
  products: Product[]
  onAddCart: (product: Product) => void
  isLoading?: boolean
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onAddCart,
  isLoading = false,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-200 rounded-lg h-80 shimmer animate-pulse"
          />
        ))}
      </div>
    )
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          originalPrice={product.originalPrice}
          image={product.image}
          discount={product.discount}
          rating={product.rating}
          reviews={product.reviews}
          onAddCart={() => onAddCart(product)}
        />
      ))}
    </motion.div>
  )
}
