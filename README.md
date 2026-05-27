# Handicrafts E-Commerce Platform

A professional, fully-featured e-commerce platform built with React, TypeScript, Material UI, and Tailwind CSS. This is an exact clone inspired by handicraftstown.com with smooth animations, responsive design, and modern development practices.

## 🚀 Features

### Core Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Product catalog with filtering and sorting
- ✅ Shopping cart with quantity management
- ✅ Smooth animations with Framer Motion
- ✅ State management with Zustand
- ✅ Modern Material UI components
- ✅ Tailwind CSS for styling

### Components
- **Header** - Sticky navigation with cart indicator
- **Hero Section** - Eye-catching landing section
- **Product Cards** - With hover animations and ratings
- **Product Grid** - Responsive layout
- **Filters** - Category, price, and rating filters
- **Cart Management** - Add, remove, update quantities
- **Footer** - Contact and links
- **Animations** - Smooth transitions throughout

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   ├── Filters.tsx
│   └── Footer.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   ├── Shop.tsx
│   └── Cart.tsx
├── store/              # Zustand state management
│   └── index.ts
├── services/           # API services
│   └── api.ts
├── hooks/              # Custom React hooks
│   └── useAsync.ts
├── types/              # TypeScript interfaces
│   └── index.ts
├── utils/              # Utility functions
│   ├── helpers.ts
│   └── constants.ts
├── styles/             # Global styles
│   └── globals.css
├── App.tsx             # Main app component
└── main.tsx            # Entry point

```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS + Emotion (for Material UI)
- **UI Components**: Material UI v5
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Form Validation**: React Hook Form + Yup
- **Build Tool**: Vite
- **Package Manager**: npm/yarn

## 🎨 Design System

### Color Palette
- **Primary**: `#8B4513` (Saddle Brown)
- **Secondary**: `#D2691E` (Chocolate)
- **Accent**: `#FFB347` (Passionfruit)
- **Dark**: `#2C2C2C`
- **Light**: `#F5F5F5`
- **Gold**: `#D4AF37`

### Typography
- **Display**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Animations
- Fade In
- Slide In (Up, Down, Left, Right)
- Scale In
- Bounce
- Pulse
- Shimmer (loading state)

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

1. **Navigate to project**:
```bash
cd e-com
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start development server**:
```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 State Management (Zustand)

### Cart Store
```typescript
useCartStore()
- addItem(product, quantity)
- removeItem(productId)
- updateQuantity(productId, quantity)
- clearCart()
- getTotalPrice()
- getTotalItems()
```

### Product Store
```typescript
useProductStore()
- setProducts(products)
- setFilters(filters)
- applyFilters()
```

### UI Store
```typescript
useUIStore()
- toggleMobileMenu()
- toggleSearch()
- toggleCart()
```

## 🎯 Key Components

### ProductCard
- Image with hover zoom
- Star rating display
- Price with discount badge
- Add to cart button
- Smooth animations

### ProductGrid
- Responsive grid layout
- Staggered animations
- Loading skeleton states
- Empty state handling

### Header
- Sticky navigation
- Mobile menu toggle
- Cart counter badge
- Search functionality

### Filters
- Category selection
- Price range slider
- Star rating filter
- Real-time filtering

## 🔌 API Services

All API calls are in `/src/services/api.ts`:

```typescript
- productService.getAllProducts()
- productService.getProductById(id)
- cartService.addToCart()
- orderService.createOrder()
- authService.login()
- reviewService.addReview()
```

## ⚡ Performance Optimizations

- Code splitting with React Router
- Image optimization
- CSS purging with Tailwind
- Lazy loading animations
- Efficient state management
- Debounced search input

## 🎪 Animations

All animations use Framer Motion for smooth, performant transitions:
- Page transitions
- Component stagger effects
- Hover states
- Scroll-triggered animations
- Loading states
- Modal animations

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Environment Variables

Create a `.env` file in the root:
```
VITE_API_URL=http://localhost:5000/api
VITE_APP_ENV=development
```

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- --port 3001
```

### Dependencies not installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
npm run type-check  # Check TypeScript errors
npm run lint        # Run ESLint
```

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Material UI Docs](https://mui.com)
- [Zustand Docs](https://github.com/pmndrs/zustand)

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

Created as a professional e-commerce platform clone for learning and development purposes.

---

**Ready to launch?** Run `npm run dev` and start building! 🚀
