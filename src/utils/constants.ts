import { Product, ProductCategory } from '../types'

export const formatRupees = (amount: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)

export const CATEGORIES: ProductCategory[] = [
  { id: 'dining-tables', name: 'Dining Tables', slug: 'dining-tables' },
  { id: 'centre-tables', name: 'Centre And Nesting Tables', slug: 'centre-tables' },
  { id: 'wall-art', name: 'Wall Art', slug: 'wall-art' },
  { id: 'wall-clocks', name: 'Wall Clock', slug: 'wall-clocks' },
  { id: 'mirrors', name: 'Decorative Mirror', slug: 'mirrors' },
  { id: 'side-tables', name: 'Side Table', slug: 'side-tables' },
  { id: 'sideboards', name: 'Sideboard Cabinet', slug: 'sideboards' },
  { id: 'coffee-tables', name: 'Premium Coffee Tables', slug: 'coffee-tables' },
  { id: 'ottomans', name: 'Ottomans', slug: 'ottomans' },
  { id: 'benches', name: 'Benches', slug: 'benches' },
  { id: 'lamps', name: 'Lamps', slug: 'lamps' },
  { id: 'wall-shelves', name: 'Wall Shelves', slug: 'wall-shelves' },
]

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 'regal-retreat-chair',
    name: 'Regal Retreat Chair',
    description:
      'A plush lounge chair with generous cushioning, sculpted arms, and a premium gold-finished frame for statement living rooms.',
    price: 16499,
    originalPrice: 31499,
    discount: 48,
    image:
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=80',
    category: { id: 'ottomans', name: 'Ottomans', slug: 'ottomans' },
    rating: 4.8,
    reviews: 4,
    inStock: true,
    tags: ['featured', 'chair', 'gold'],
    createdAt: new Date('2026-05-01'),
  },
  {
    id: 'astral-dining-table',
    name: 'Astral White and Gold Dining Table with Chairs',
    description:
      'White marble-inspired dining surface with a sculptural golden base and upholstered dining chairs.',
    price: 79999,
    originalPrice: 84999,
    discount: 6,
    image:
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=900&q=80',
    category: { id: 'dining-tables', name: 'Dining Tables', slug: 'dining-tables' },
    rating: 4.9,
    reviews: 3,
    inStock: true,
    tags: ['best-seller', 'dining', 'marble'],
    createdAt: new Date('2026-04-18'),
  },
  {
    id: 'luxurious-living-center-table',
    name: 'Luxurious Living Center Table',
    description:
      'Contemporary center table with lustrous gold steel framing and a refined tabletop for formal seating spaces.',
    price: 41999,
    originalPrice: 44499,
    discount: 6,
    image:
      'https://images.unsplash.com/photo-1532372320978-9d92f978dac5?auto=format&fit=crop&w=900&q=80',
    category: { id: 'centre-tables', name: 'Centre And Nesting Tables', slug: 'centre-tables' },
    rating: 4.7,
    reviews: 2,
    inStock: true,
    tags: ['featured', 'table', 'gold'],
    createdAt: new Date('2026-04-12'),
  },
  {
    id: 'azure-metal-wall-clock',
    name: 'Azure Metal Wall Clock',
    description:
      'A sleek blue and gold metal wall clock with a silent mechanism and long decorative silhouette.',
    price: 3249,
    originalPrice: 4049,
    discount: 20,
    image:
      'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=900&q=80',
    category: { id: 'wall-clocks', name: 'Wall Clock', slug: 'wall-clocks' },
    rating: 4.6,
    reviews: 3,
    inStock: true,
    tags: ['popular', 'clock', 'metal'],
    createdAt: new Date('2026-03-28'),
  },
  {
    id: 'black-round-wall-clock',
    name: 'Black Round Wall Clock',
    description:
      'European retro-style metal wall clock with a quiet bell-free face for living rooms, bedrooms, and hallways.',
    price: 3249,
    originalPrice: 4049,
    discount: 20,
    image:
      'https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=900&q=80',
    category: { id: 'wall-clocks', name: 'Wall Clock', slug: 'wall-clocks' },
    rating: 4.8,
    reviews: 10,
    inStock: true,
    tags: ['popular', 'clock', 'black'],
    createdAt: new Date('2026-03-21'),
  },
  {
    id: 'aurora-glow-side-table',
    name: 'Aurora Glow Metal Side Table',
    description:
      'Compact gold metal side table with a bright modern profile for sofa corners, bedrooms, and entryways.',
    price: 8999,
    originalPrice: 11999,
    discount: 25,
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80',
    category: { id: 'side-tables', name: 'Side Table', slug: 'side-tables' },
    rating: 4.7,
    reviews: 14,
    inStock: true,
    tags: ['side-table', 'metal'],
    createdAt: new Date('2026-02-15'),
  },
  {
    id: 'mobius-coffee-table',
    name: 'Mobius Coffee Table',
    description:
      'A premium coffee table with looping metal geometry and a polished top made for modern Indian homes.',
    price: 28999,
    originalPrice: 34999,
    discount: 17,
    image:
      'https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=900&q=80',
    category: { id: 'coffee-tables', name: 'Premium Coffee Tables', slug: 'coffee-tables' },
    rating: 5,
    reviews: 8,
    inStock: true,
    tags: ['best-seller', 'coffee-table'],
    createdAt: new Date('2026-02-04'),
  },
  {
    id: 'twin-frame-wall-art',
    name: 'Twin Frame Wall Art Set Of 2',
    description:
      'Pair of statement wall frames with a luxe metallic finish for hallways, lounges, and accent walls.',
    price: 5499,
    originalPrice: 8999,
    discount: 39,
    image:
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80',
    category: { id: 'wall-art', name: 'Wall Art', slug: 'wall-art' },
    rating: 4.9,
    reviews: 22,
    inStock: true,
    tags: ['featured', 'wall-art'],
    createdAt: new Date('2026-01-24'),
  },
]

export const REVIEWS = [
  {
    name: 'Seemab Shaikhnag',
    product: 'Twin Frame Wall Art Set Of 2',
    date: '05/09/2026',
    text: 'Very beautiful frame. My hall wall is looking very nice.',
  },
  {
    name: 'Dr Geevarghese Alexander',
    product: 'Handicrafts Town',
    date: '03/31/2026',
    text: 'Product supplied was of good quality. Material and finish were excellent.',
  },
  {
    name: 'Minal',
    product: 'Aurora Glow Metal Side Table',
    date: '03/12/2026',
    text: 'I ordered two side tables and I am very satisfied with the quality and delivery.',
  },
]
