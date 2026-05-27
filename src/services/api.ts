import axios from 'axios'
import { Product, Order, Review, Address } from '../types'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
})

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Product Services
export const productService = {
  getAllProducts: async (page = 1, limit = 20) => {
    const response = await api.get<Product[]>('/products', {
      params: { page, limit },
    })
    return response.data
  },

  getProductById: async (id: string) => {
    const response = await api.get<Product>(`/products/${id}`)
    return response.data
  },

  getProductsByCategory: async (categoryId: string) => {
    const response = await api.get<Product[]>(`/products/category/${categoryId}`)
    return response.data
  },

  searchProducts: async (query: string) => {
    const response = await api.get<Product[]>('/products/search', {
      params: { q: query },
    })
    return response.data
  },

  getFeaturedProducts: async () => {
    const response = await api.get<Product[]>('/products/featured')
    return response.data
  },
}

// Cart Services
export const cartService = {
  addToCart: async (productId: string, quantity: number) => {
    const response = await api.post('/cart/add', { productId, quantity })
    return response.data
  },

  getCart: async () => {
    const response = await api.get('/cart')
    return response.data
  },

  removeFromCart: async (productId: string) => {
    const response = await api.delete(`/cart/${productId}`)
    return response.data
  },

  updateCartItem: async (productId: string, quantity: number) => {
    const response = await api.put(`/cart/${productId}`, { quantity })
    return response.data
  },

  clearCart: async () => {
    const response = await api.delete('/cart')
    return response.data
  },
}

// Order Services
export const orderService = {
  createOrder: async (items: unknown[], shippingAddress: Address) => {
    const response = await api.post<Order>('/orders', {
      items,
      shippingAddress,
    })
    return response.data
  },

  getOrders: async () => {
    const response = await api.get<Order[]>('/orders')
    return response.data
  },

  getOrderById: async (id: string) => {
    const response = await api.get<Order>(`/orders/${id}`)
    return response.data
  },

  cancelOrder: async (id: string) => {
    const response = await api.put(`/orders/${id}/cancel`)
    return response.data
  },
}

// Review Services
export const reviewService = {
  getProductReviews: async (productId: string) => {
    const response = await api.get<Review[]>(`/reviews/product/${productId}`)
    return response.data
  },

  addReview: async (productId: string, rating: number, comment: string) => {
    const response = await api.post<Review>('/reviews', {
      productId,
      rating,
      comment,
    })
    return response.data
  },

  deleteReview: async (reviewId: string) => {
    const response = await api.delete(`/reviews/${reviewId}`)
    return response.data
  },
}

// Auth Services
export const authService = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password })
    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token)
    }
    return response.data
  },

  register: async (name: string, email: string, password: string) => {
    const response = await api.post('/auth/register', {
      name,
      email,
      password,
    })
    return response.data
  },

  logout: () => {
    localStorage.removeItem('authToken')
  },

  getCurrentUser: async () => {
    const response = await api.get('/auth/me')
    return response.data
  },
}

export default api
