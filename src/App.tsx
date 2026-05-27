import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { ShopPage } from './pages/Shop'
import { CartPage } from './pages/Cart'
import { ProductDetailPage } from './pages/ProductDetail'
import {
  AboutPage,
  AccountPage,
  CheckoutPage,
  ContactPage,
  FaqPage,
  ForgotPasswordPage,
  LoginPage,
  PrivacyPolicyPage,
  ReturnsPage,
  SearchPage,
  ShippingPolicyPage,
  SignupPage,
  TermsPage,
  TrackOrderPage,
} from './pages/StaticPages'
import './styles/globals.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
        <Route path="/returns" element={<ReturnsPage />} />
        <Route path="/track-order" element={<TrackOrderPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
