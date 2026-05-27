import React from 'react'
import { motion } from 'framer-motion'

interface CategoryFilterProps {
  categories: Array<{ id: string; name: string; slug: string }>
  selectedCategories: string[]
  onCategoryChange: (categoryId: string) => void
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategories,
  onCategoryChange,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <h3 className="text-lg font-bold mb-4 text-[#8B4513]">Categories</h3>
      <div className="space-y-3">
        {categories.map((category) => (
          <motion.label
            key={category.id}
            whileHover={{ x: 4 }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <input
              type="checkbox"
              checked={selectedCategories.includes(category.id)}
              onChange={() => onCategoryChange(category.id)}
              className="w-5 h-5 rounded border-gray-300 text-[#8B4513] focus:ring-[#8B4513] cursor-pointer"
            />
            <span className="text-gray-700 group-hover:text-[#8B4513] transition-colors">
              {category.name}
            </span>
          </motion.label>
        ))}
      </div>
    </motion.div>
  )
}

interface PriceFilterProps {
  minPrice: number
  maxPrice: number
  onPriceChange: (min: number, max: number) => void
}

export const PriceFilter: React.FC<PriceFilterProps> = ({
  minPrice,
  maxPrice,
  onPriceChange,
}) => {
  const [localMin, setLocalMin] = React.useState(minPrice)
  const [localMax, setLocalMax] = React.useState(maxPrice)

  const handleApply = () => {
    onPriceChange(localMin, localMax)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-white rounded-lg shadow-md p-6 mt-6"
    >
      <h3 className="text-lg font-bold mb-4 text-[#8B4513]">Price Range</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Min: Rs. {localMin.toLocaleString('en-IN')}
          </label>
          <input
            type="range"
            min="0"
            max="10000"
            value={localMin}
            onChange={(e) => setLocalMin(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Max: Rs. {localMax.toLocaleString('en-IN')}
          </label>
          <input
            type="range"
            min="0"
            max="10000"
            value={localMax}
            onChange={(e) => setLocalMax(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleApply}
          className="w-full bg-[#8B4513] text-white py-2 rounded-lg font-semibold hover:bg-[#6B3410] transition-all"
        >
          Apply
        </motion.button>
      </div>
    </motion.div>
  )
}

interface RatingFilterProps {
  onRatingChange: (rating: number) => void
}

export const RatingFilter: React.FC<RatingFilterProps> = ({
  onRatingChange,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-lg shadow-md p-6 mt-6"
    >
      <h3 className="text-lg font-bold mb-4 text-[#8B4513]">Rating</h3>
      <div className="space-y-3">
        {[5, 4, 3, 2, 1].map((rating) => (
          <motion.button
            key={rating}
            whileHover={{ x: 4 }}
            onClick={() => onRatingChange(rating)}
            className="w-full text-left flex items-center gap-2 text-gray-700 hover:text-[#8B4513] transition-colors"
          >
            <span className="flex gap-1">
              {[...Array(rating)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              ))}
              {[...Array(5 - rating)].map((_, i) => (
                <span key={i} className="text-gray-300">
                  ★
                </span>
              ))}
            </span>
            <span className="text-sm">({rating}+)</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
