export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  images?: string[]
  category: ProductCategory
  rating: number
  reviews: number
  inStock: boolean
  tags?: string[]
  createdAt?: Date
  updatedAt?: Date
}

export interface ProductCategory {
  id: string
  name: string
  slug: string
  icon?: string
  description?: string
}

export interface CartItem {
  id: string
  productId: string
  product: Product
  quantity: number
  addedAt: Date
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  totalAmount: number
  status: OrderStatus
  shippingAddress: Address
  createdAt: Date
  updatedAt: Date
}

export interface Address {
  fullName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'

export interface User {
  id: string
  name: string
  email: string
  phone?: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

export interface Review {
  id: string
  productId: string
  userId: string
  rating: number
  comment: string
  createdAt: Date
}

export interface FilterOptions {
  categories?: string[]
  priceRange?: [number, number]
  rating?: number
  inStock?: boolean
  sortBy?: 'newest' | 'popular' | 'priceAsc' | 'priceDesc' | 'rating'
}
