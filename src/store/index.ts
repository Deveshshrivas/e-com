import { create } from 'zustand'
import { Product, CartItem, FilterOptions } from '../types'

interface CartStore {
  items: CartItem[]
  addItem: (product: Product, quantity: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (product: Product, quantity: number) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.productId === product.id)
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.productId === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        }
      }
      return {
        items: [
          ...state.items,
          {
            id: `${product.id}-${Date.now()}`,
            productId: product.id,
            product,
            quantity,
            addedAt: new Date(),
          },
        ],
      }
    })
  },

  removeItem: (productId: string) => {
    set((state) => ({
      items: state.items.filter((item) => item.productId !== productId),
    }))
  },

  updateQuantity: (productId: string, quantity: number) => {
    if (quantity <= 0) {
      get().removeItem(productId)
      return
    }
    set((state) => ({
      items: state.items.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      ),
    }))
  },

  clearCart: () => set({ items: [] }),

  getTotalPrice: () => {
    return get().items.reduce((total, item) => {
      const price = item.product.price || 0
      return total + price * item.quantity
    }, 0)
  },

  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0)
  },
}))

interface ProductStore {
  products: Product[]
  filteredProducts: Product[]
  filters: FilterOptions
  setProducts: (products: Product[]) => void
  setFilters: (filters: FilterOptions) => void
  applyFilters: () => void
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  filteredProducts: [],
  filters: {},

  setProducts: (products: Product[]) => {
    set({ products })
  },

  setFilters: (filters: FilterOptions) => {
    set({ filters })
    get().applyFilters()
  },

  applyFilters: () => {
    const { products, filters } = get()
    let filtered = [...products]

    if (filters.categories && filters.categories.length > 0) {
      filtered = filtered.filter((p) =>
        filters.categories!.includes(p.category.id)
      )
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange
      filtered = filtered.filter((p) => p.price >= min && p.price <= max)
    }

    if (filters.rating) {
      filtered = filtered.filter((p) => p.rating >= filters.rating!)
    }

    if (filters.inStock !== undefined) {
      filtered = filtered.filter((p) => p.inStock === filters.inStock)
    }

    if (filters.sortBy) {
      switch (filters.sortBy) {
        case 'priceAsc':
          filtered.sort((a, b) => a.price - b.price)
          break
        case 'priceDesc':
          filtered.sort((a, b) => b.price - a.price)
          break
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating)
          break
        case 'newest':
          filtered.sort((a, b) =>
            new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
          )
          break
      }
    }

    set({ filteredProducts: filtered })
  },
}))

interface UIStore {
  isMobileMenuOpen: boolean
  isSearchOpen: boolean
  isCartOpen: boolean
  toggleMobileMenu: () => void
  toggleSearch: () => void
  toggleCart: () => void
  closeMobileMenu: () => void
  closeSearch: () => void
  closeCart: () => void
}

export const useUIStore = create<UIStore>((set) => ({
  isMobileMenuOpen: false,
  isSearchOpen: false,
  isCartOpen: false,

  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),

  toggleSearch: () =>
    set((state) => ({ isSearchOpen: !state.isSearchOpen })),

  toggleCart: () =>
    set((state) => ({ isCartOpen: !state.isCartOpen })),

  closeMobileMenu: () => set({ isMobileMenuOpen: false }),

  closeSearch: () => set({ isSearchOpen: false }),

  closeCart: () => set({ isCartOpen: false }),
}))
