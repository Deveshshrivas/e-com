import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react'
import { useScrollPosition } from '../hooks/useAsync'
import { useCartStore, useUIStore } from '../store'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Dining Tables', to: '/shop?category=dining-tables' },
  { label: 'Wall Art', to: '/shop?category=wall-art' },
  { label: 'Wall Clock', to: '/shop?category=wall-clocks' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const Header: React.FC = () => {
  const isAtTop = useScrollPosition()
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore()
  const cartCount = useCartStore((state) => state.getTotalItems())

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isAtTop ? 'border-stone-200 bg-[#fbfaf7]' : 'border-stone-200 bg-white shadow-sm'
      }`}
    >
      <div className="bg-[#1f2f28] px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white">
        Get 5% extra discount on prepaid orders
      </div>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex flex-col leading-none" onClick={closeMobileMenu}>
          <span className="font-serif text-2xl font-bold tracking-wide text-[#7a4b2a]">
            Handicrafts Town
          </span>
          <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-500">
            Luxury Decor
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className="text-sm font-semibold text-stone-700 transition-colors hover:text-[#a86d30]"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link to="/search" className="p-2 text-stone-700 transition-colors hover:text-[#a86d30]" aria-label="Search">
            <Search size={21} />
          </Link>
          <Link to="/login" className="p-2 text-stone-700 transition-colors hover:text-[#a86d30]" aria-label="Account">
            <User size={21} />
          </Link>
          <Link to="/cart" className="relative p-2 text-stone-700 transition-colors hover:text-[#a86d30]">
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#a86d30] text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        <button
          onClick={toggleMobileMenu}
          className="p-2 text-stone-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-stone-200 bg-white px-4 py-4 lg:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={closeMobileMenu}
                className="rounded-md px-2 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-100"
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/cart"
              onClick={closeMobileMenu}
              className="rounded-md px-2 py-2 text-sm font-semibold text-[#7a4b2a] hover:bg-stone-100"
            >
              Cart ({cartCount})
            </Link>
          </div>
        </motion.nav>
      )}
    </motion.header>
  )
}
