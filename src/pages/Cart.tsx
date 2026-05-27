import React from 'react'
import { motion } from 'framer-motion'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useCartStore } from '../store'
import { formatRupees } from '../utils/constants'
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react'

export const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } =
    useCartStore()
  const [, setIsCheckingOut] = React.useState(false)

  const total = getTotalPrice()
  const shipping = items.length > 0 ? 499 : 0
  const tax = total * 0.18
  const grandTotal = total + shipping + tax

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="bg-[#1f2f28] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white flex items-center gap-3"
          >
            <ShoppingCart size={32} />
            <h1 className="text-4xl font-bold font-serif">Shopping Cart</h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <ShoppingCart size={64} className="mx-auto mb-6 text-gray-300" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8">
              Start shopping to add items to your cart
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/shop"
              className="inline-block px-8 py-3 bg-[#8B4513] text-white font-bold rounded-lg hover:bg-[#6B3410] transition-all"
            >
              Continue Shopping
            </motion.a>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <motion.div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Cart Items ({items.length})
              </h2>
              <div className="space-y-4">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                className="bg-white border border-stone-200 rounded-md p-6 flex gap-6 hover:shadow-md transition-shadow"
                  >
                    {/* Product Image */}
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">
                        {item.product.name}
                      </h3>
                      <p className="text-2xl font-bold text-[#7a4b2a] mb-4">
                        {formatRupees(item.product.price * item.quantity)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() =>
                            updateQuantity(
                              item.productId,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                        >
                          <Minus size={16} />
                        </motion.button>
                        <span className="w-12 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() =>
                            updateQuantity(item.productId, item.quantity + 1)
                          }
                          className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                        >
                          <Plus size={16} />
                        </motion.button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeItem(item.productId)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Trash2 size={24} />
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <div className="bg-stone-50 rounded-md p-8 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Order Summary
                </h3>

                <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">{formatRupees(total)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">{formatRupees(shipping)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">GST (18%)</span>
                    <span className="font-semibold">{formatRupees(tax)}</span>
                  </div>
                </div>

                <div className="flex justify-between mb-6">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-[#7a4b2a]">
                    {formatRupees(grandTotal)}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full bg-[#1f2f28] text-white py-3 rounded-md font-bold hover:bg-[#a86d30] transition-all mb-3"
                >
                  Proceed to Checkout
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => clearCart()}
                  className="w-full border-2 border-[#7a4b2a] text-[#7a4b2a] py-3 rounded-md font-bold hover:bg-[#7a4b2a] hover:text-white transition-all"
                >
                  Clear Cart
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
