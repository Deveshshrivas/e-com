import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  Lock,
  Mail,
  MapPin,
  PackageCheck,
  PackageSearch,
  Phone,
  Search,
  ShieldCheck,
  Truck,
  User,
} from 'lucide-react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ProductGrid } from '../components/ProductGrid'
import { useCartStore } from '../store'
import { formatRupees, SAMPLE_PRODUCTS } from '../utils/constants'

const supportItems = [
  { title: 'Shipping', href: '/shipping-policy', icon: Truck },
  { title: 'Returns', href: '/returns', icon: PackageCheck },
  { title: 'Track order', href: '/track-order', icon: PackageSearch },
  { title: 'FAQ', href: '/faq', icon: ShieldCheck },
]

const Frame: React.FC<{ title: string; eyebrow?: string; children: React.ReactNode }> = ({
  title,
  eyebrow = 'Handicrafts Town',
  children,
}) => (
  <div className="min-h-screen bg-[#fbfaf7]">
    <Header />
    <section className="bg-[#1f2f28] py-14 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e9bf7a]">{eyebrow}</p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">{title}</h1>
      </div>
    </section>
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">{children}</main>
    <Footer />
  </div>
)

export const LoginPage: React.FC = () => (
  <AuthFrame
    title="Welcome back"
    subtitle="Login to view orders, saved addresses, and wishlist items."
    asideTitle="Member benefits"
    asideItems={['Faster checkout', 'Order history and tracking', 'Wishlist for premium decor']}
  >
    <form className="grid gap-4">
      <Field label="Email address" type="email" placeholder="you@example.com" />
      <Field label="Password" type="password" placeholder="Enter password" />
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-stone-600">
          <input type="checkbox" className="h-4 w-4 rounded border-stone-300" /> Remember me
        </label>
        <Link to="/forgot-password" className="font-bold text-[#7a4b2a] hover:text-[#a86d30]">
          Forgot password?
        </Link>
      </div>
      <button className="flex items-center justify-center gap-2 rounded-md bg-stone-900 px-6 py-3 font-bold uppercase tracking-[0.14em] text-white hover:bg-[#a86d30]">
        Login <ArrowRight size={18} />
      </button>
      <p className="text-center text-sm text-stone-600">
        New to Handicrafts Town?{' '}
        <Link to="/signup" className="font-bold text-[#7a4b2a] hover:text-[#a86d30]">
          Create account
        </Link>
      </p>
    </form>
  </AuthFrame>
)

export const SignupPage: React.FC = () => (
  <AuthFrame
    title="Create account"
    subtitle="Save your favorite pieces and checkout faster on future orders."
    asideTitle="Start with a polished profile"
    asideItems={['Saved delivery details', 'Exclusive decor drops', 'Easy order support']}
  >
    <form className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First name" placeholder="First name" />
        <Field label="Last name" placeholder="Last name" />
      </div>
      <Field label="Email address" type="email" placeholder="you@example.com" />
      <Field label="Phone number" placeholder="+91 98765 43210" />
      <Field label="Password" type="password" placeholder="Create password" />
      <label className="flex items-start gap-3 text-sm leading-6 text-stone-600">
        <input type="checkbox" className="mt-1 h-4 w-4 rounded border-stone-300" />
        I agree to receive order updates and decor collection emails.
      </label>
      <button className="flex items-center justify-center gap-2 rounded-md bg-stone-900 px-6 py-3 font-bold uppercase tracking-[0.14em] text-white hover:bg-[#a86d30]">
        Create account <ArrowRight size={18} />
      </button>
      <p className="text-center text-sm text-stone-600">
        Already registered?{' '}
        <Link to="/login" className="font-bold text-[#7a4b2a] hover:text-[#a86d30]">
          Login
        </Link>
      </p>
    </form>
  </AuthFrame>
)

export const ForgotPasswordPage: React.FC = () => (
  <AuthFrame
    title="Reset password"
    subtitle="Enter your email and we will send a secure reset link."
    asideTitle="Account security"
    asideItems={['Secure password reset', 'No payment data stored locally', 'Fast account recovery']}
  >
    <form className="grid gap-4">
      <Field label="Email address" type="email" placeholder="you@example.com" />
      <button className="rounded-md bg-stone-900 px-6 py-3 font-bold uppercase tracking-[0.14em] text-white hover:bg-[#a86d30]">
        Send reset link
      </button>
      <Link to="/login" className="text-center text-sm font-bold text-[#7a4b2a] hover:text-[#a86d30]">
        Back to login
      </Link>
    </form>
  </AuthFrame>
)

export const AccountPage: React.FC = () => (
  <Frame title="My Account">
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <aside className="rounded-md border border-stone-200 bg-white p-5">
        <div className="flex items-center gap-3 border-b border-stone-100 pb-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1f2f28] text-white">
            <User size={22} />
          </div>
          <div>
            <p className="font-bold text-stone-950">Demo Customer</p>
            <p className="text-sm text-stone-500">customer@example.com</p>
          </div>
        </div>
        <nav className="mt-5 grid gap-2 text-sm font-semibold text-stone-700">
          {['Dashboard', 'Orders', 'Addresses', 'Wishlist', 'Settings'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="rounded-md px-3 py-2 hover:bg-stone-100">
              {item}
            </a>
          ))}
        </nav>
      </aside>

      <section className="grid gap-6">
        <div className="grid gap-4 md:grid-cols-3">
          <Metric title="Orders" value="3" />
          <Metric title="Wishlist" value="8" />
          <Metric title="Saved addresses" value="2" />
        </div>
        <div className="rounded-md border border-stone-200 bg-white p-6">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold text-stone-950">Recent orders</h2>
              <p className="text-sm text-stone-500">Manage demo order history and tracking.</p>
            </div>
            <Link to="/track-order" className="font-bold text-[#7a4b2a] hover:text-[#a86d30]">
              Track an order
            </Link>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead className="border-b border-stone-200 text-stone-500">
                <tr>
                  <th className="py-3">Order</th>
                  <th>Status</th>
                  <th>Total</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {[
                  ['HT-1042', 'In transit', 'Rs. 16,499', 'May 21, 2026'],
                  ['HT-1038', 'Delivered', 'Rs. 5,499', 'May 9, 2026'],
                  ['HT-1027', 'Processing', 'Rs. 28,999', 'Apr 28, 2026'],
                ].map(([order, status, total, date]) => (
                  <tr key={order}>
                    <td className="py-4 font-bold text-stone-950">{order}</td>
                    <td>{status}</td>
                    <td>{total}</td>
                    <td>{date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </Frame>
)

export const CheckoutPage: React.FC = () => {
  const { items, getTotalPrice } = useCartStore()
  const subtotal = getTotalPrice()
  const shipping = items.length > 0 ? 499 : 0
  const gst = subtotal * 0.18
  const total = subtotal + shipping + gst

  return (
    <Frame title="Checkout">
      <div className="grid gap-8 lg:grid-cols-[1fr_390px]">
        <form className="grid gap-6 rounded-md border border-stone-200 bg-white p-6">
          <SectionTitle title="Contact" text="We will use this for order updates." />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Email" type="email" placeholder="you@example.com" />
            <Field label="Phone" placeholder="+91 98765 43210" />
          </div>

          <SectionTitle title="Shipping address" text="Enter the delivery address for your decor order." />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" placeholder="Full name" />
            <Field label="Pincode" placeholder="110001" />
            <Field label="City" placeholder="City" />
            <Field label="State" placeholder="State" />
          </div>
          <Field label="Address" placeholder="House, street, area" />

          <SectionTitle title="Payment method" text="Demo checkout only. No real payment is processed." />
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="flex cursor-pointer items-center gap-3 rounded-md border border-stone-300 p-4">
              <input name="payment" type="radio" defaultChecked /> Prepaid
            </label>
            <label className="flex cursor-pointer items-center gap-3 rounded-md border border-stone-300 p-4">
              <input name="payment" type="radio" /> Cash on delivery
            </label>
          </div>

          <button className="flex items-center justify-center gap-2 rounded-md bg-[#c58a3d] px-6 py-3 font-bold uppercase tracking-[0.14em] text-white hover:bg-[#a86d30]">
            Place demo order <Lock size={17} />
          </button>
        </form>

        <aside className="h-fit rounded-md border border-stone-200 bg-white p-6 lg:sticky lg:top-28">
          <h2 className="text-2xl font-bold text-stone-950">Order summary</h2>
          <div className="mt-5 space-y-4">
            {items.length ? (
              items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <img src={item.product.image} alt={item.product.name} className="h-16 w-16 rounded-md object-cover" />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-stone-900">{item.product.name}</p>
                    <p className="text-xs text-stone-500">Qty {item.quantity}</p>
                  </div>
                  <p className="text-sm font-bold">{formatRupees(item.product.price * item.quantity)}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-stone-600">Your cart is empty.</p>
            )}
          </div>
          <SummaryLine label="Subtotal" value={formatRupees(subtotal)} />
          <SummaryLine label="Shipping" value={formatRupees(shipping)} />
          <SummaryLine label="GST" value={formatRupees(gst)} />
          <div className="mt-4 flex justify-between border-t border-stone-200 pt-4 text-lg font-bold">
            <span>Total</span>
            <span className="text-[#7a4b2a]">{formatRupees(total)}</span>
          </div>
          <Link to="/cart" className="mt-5 inline-block text-sm font-bold text-[#7a4b2a] hover:text-[#a86d30]">
            Edit cart
          </Link>
        </aside>
      </div>
    </Frame>
  )
}

export const ContactPage: React.FC = () => (
  <Frame title="Contact Us">
    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="space-y-5">
        <div className="rounded-md border border-stone-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-stone-950">Support team</h2>
          <div className="mt-6 space-y-4 text-stone-700">
            <p className="flex gap-3"><Phone className="text-[#a86d30]" /> +91 98765 43210</p>
            <p className="flex gap-3"><Mail className="text-[#a86d30]" /> support@handicraftstown.com</p>
            <p className="flex gap-3"><MapPin className="text-[#a86d30]" /> Premium decor studio, India</p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {supportItems.map((item) => (
            <Link key={item.title} to={item.href} className="flex items-center gap-3 rounded-md border border-stone-200 bg-white p-4 hover:border-[#c58a3d]">
              <item.icon className="text-[#a86d30]" />
              <span className="font-bold text-stone-900">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
      <form className="grid gap-4 rounded-md border border-stone-200 bg-white p-6">
        <SectionTitle title="Send a message" text="For product, order, customization, or delivery support." />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name" placeholder="Your name" />
          <Field label="Phone" placeholder="+91 98765 43210" />
        </div>
        <Field label="Email" type="email" placeholder="you@example.com" />
        <label className="grid gap-2 text-sm font-bold text-stone-700">
          Message
          <textarea rows={7} placeholder="How can we help?" className="rounded-md border border-stone-300 px-4 py-3 font-normal" />
        </label>
        <button className="rounded-md bg-stone-900 px-6 py-3 font-bold uppercase tracking-[0.14em] text-white hover:bg-[#a86d30]">
          Send message
        </button>
      </form>
    </div>
  </Frame>
)

export const TrackOrderPage: React.FC = () => {
  const [searched, setSearched] = React.useState(false)

  return (
    <Frame title="Track Order">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <form
          onSubmit={(event) => {
            event.preventDefault()
            setSearched(true)
          }}
          className="rounded-md border border-stone-200 bg-white p-6"
        >
          <PackageSearch className="text-[#a86d30]" size={34} />
          <h2 className="mt-4 text-2xl font-bold text-stone-950">Find your order</h2>
          <div className="mt-6 grid gap-4">
            <Field label="Order ID" placeholder="HT-1042" />
            <Field label="Email or phone" placeholder="you@example.com" />
            <button className="rounded-md bg-stone-900 px-6 py-3 font-bold uppercase tracking-[0.14em] text-white hover:bg-[#a86d30]">
              Track order
            </button>
          </div>
        </form>
        <div className="rounded-md border border-stone-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-stone-950">Order timeline</h2>
          <div className="mt-6 space-y-5">
            {(searched ? ['Order placed', 'Packed', 'In transit', 'Out for delivery'] : ['Enter your details to see live order status']).map((step, index) => (
              <div key={step} className="flex gap-3">
                <div className="mt-1 h-5 w-5 rounded-full bg-[#c58a3d]" />
                <div>
                  <p className="font-bold text-stone-950">{step}</p>
                  <p className="text-sm text-stone-500">
                    {searched ? `Step ${index + 1} of 4 in the demo delivery journey.` : 'Demo tracking result appears here.'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  )
}

export const SearchPage: React.FC = () => {
  const addItem = useCartStore((state) => state.addItem)
  const [query, setQuery] = React.useState('')
  const results = SAMPLE_PRODUCTS.filter((product) =>
    `${product.name} ${product.category.name} ${product.tags?.join(' ')}`.toLowerCase().includes(query.toLowerCase())
  )
  const products = query ? results : SAMPLE_PRODUCTS

  return (
    <Frame title="Search">
      <div className="relative mb-8">
        <Search className="absolute left-4 top-4 text-stone-400" size={22} />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search decor, clocks, tables, lamps..."
          className="w-full rounded-md border border-stone-300 bg-white py-4 pl-12 pr-4"
        />
      </div>
      {products.length ? (
        <ProductGrid products={products} onAddCart={(item) => addItem(item, 1)} />
      ) : (
        <div className="rounded-md border border-stone-200 bg-white p-12 text-center">
          <h2 className="text-2xl font-bold text-stone-950">No products found</h2>
          <p className="mt-2 text-stone-600">Try searching for tables, clocks, wall art, or lamps.</p>
        </div>
      )}
    </Frame>
  )
}

export const AboutPage: React.FC = () => (
  <Frame title="About Us">
    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <h2 className="text-3xl font-bold text-stone-950">Curated decor for expressive homes.</h2>
        <p className="mt-5 leading-8 text-stone-700">
          Handicrafts Town brings together premium furniture, metal wall decor, clocks,
          mirrors, lamps, and accent tables inspired by Indian craft and modern luxury
          interiors. This clone recreates a complete storefront with product discovery,
          account flows, checkout, order support, and policy pages.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {['Premium finishes', 'Curated collections', 'Secure checkout'].map((item) => (
            <div key={item} className="rounded-md border border-stone-200 bg-white p-5 font-bold text-stone-900">
              {item}
            </div>
          ))}
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85"
        alt="Luxury decorated living room"
        className="h-full min-h-[360px] rounded-md object-cover"
      />
    </div>
  </Frame>
)

export const FaqPage: React.FC = () => (
  <Frame title="FAQ">
    <div className="mx-auto max-w-3xl space-y-4">
      {[
        ['How long does delivery take?', 'Most products are dispatched in 3 to 7 business days, depending on stock and packaging requirements.'],
        ['Do you offer prepaid discounts?', 'Yes, prepaid orders receive an additional discount in the storefront flow.'],
        ['Are products handmade?', 'The catalog focuses on handcrafted and hand-finished decor, furniture, and premium metal accents.'],
        ['Can I cancel an order?', 'Orders can be cancelled before dispatch from the support or track order page.'],
      ].map(([question, answer]) => (
        <details key={question} className="rounded-md border border-stone-200 bg-white p-5">
          <summary className="cursor-pointer font-bold text-stone-950">{question}</summary>
          <p className="mt-3 text-stone-700">{answer}</p>
        </details>
      ))}
    </div>
  </Frame>
)

export const ShippingPolicyPage: React.FC = () => (
  <PolicyPage
    title="Shipping Policy"
    icon={<Truck size={30} />}
    points={[
      'Orders are packed with protective layers for furniture and decor.',
      'Delivery timelines vary by product size and city.',
      'Tracking details are shared after dispatch.',
      'Large furniture pieces may require scheduled delivery.',
    ]}
  />
)

export const ReturnsPage: React.FC = () => (
  <PolicyPage
    title="Returns"
    icon={<ShieldCheck size={30} />}
    points={[
      'Return requests are reviewed within the eligible return window.',
      'Products must be unused and in original packaging.',
      'Damaged delivery claims need photos and order details.',
      'Custom or made-to-order products may not be returnable.',
    ]}
  />
)

export const PrivacyPolicyPage: React.FC = () => (
  <PolicyPage
    title="Privacy Policy"
    points={[
      'Customer details are used for order processing and support.',
      'Payment information is handled through secure payment providers.',
      'Marketing messages can be opted out from at any time.',
    ]}
  />
)

export const TermsPage: React.FC = () => (
  <PolicyPage
    title="Terms Of Service"
    points={[
      'Product prices, discounts, and availability may change without notice.',
      'Orders are confirmed after successful payment or checkout validation.',
      'The local clone is a demo and does not process real payments.',
    ]}
  />
)

const AuthFrame: React.FC<{
  title: string
  subtitle: string
  asideTitle: string
  asideItems: string[]
  children: React.ReactNode
}> = ({ title, subtitle, asideTitle, asideItems, children }) => (
  <div className="min-h-screen bg-[#fbfaf7]">
    <Header />
    <main className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
      <section className="rounded-md border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a86d30]">Account</p>
          <h1 className="mt-2 text-4xl font-bold text-stone-950">{title}</h1>
          <p className="mt-3 text-stone-600">{subtitle}</p>
        </div>
        {children}
      </section>
      <aside className="rounded-md bg-[#1f2f28] p-8 text-white">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
          <Heart className="text-[#e9bf7a]" />
        </div>
        <h2 className="mt-6 text-3xl font-bold">{asideTitle}</h2>
        <div className="mt-6 grid gap-4">
          {asideItems.map((item) => (
            <div key={item} className="flex gap-3 text-stone-100">
              <CheckCircle2 className="mt-0.5 shrink-0 text-[#e9bf7a]" size={19} />
              {item}
            </div>
          ))}
        </div>
      </aside>
    </main>
    <Footer />
  </div>
)

const Field: React.FC<{ label: string; type?: string; placeholder: string }> = ({
  label,
  type = 'text',
  placeholder,
}) => (
  <label className="grid gap-2 text-sm font-bold text-stone-700">
    {label}
    <input type={type} placeholder={placeholder} className="rounded-md border border-stone-300 px-4 py-3 font-normal" />
  </label>
)

const SectionTitle: React.FC<{ title: string; text: string }> = ({ title, text }) => (
  <div>
    <h2 className="text-2xl font-bold text-stone-950">{title}</h2>
    <p className="mt-1 text-sm text-stone-500">{text}</p>
  </div>
)

const Metric: React.FC<{ title: string; value: string }> = ({ title, value }) => (
  <div className="rounded-md border border-stone-200 bg-white p-5">
    <p className="text-sm font-bold uppercase tracking-[0.14em] text-stone-500">{title}</p>
    <p className="mt-2 text-3xl font-bold text-stone-950">{value}</p>
  </div>
)

const SummaryLine: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="mt-4 flex justify-between text-sm text-stone-700">
    <span>{label}</span>
    <span className="font-bold text-stone-950">{value}</span>
  </div>
)

const PolicyPage: React.FC<{ title: string; icon?: React.ReactNode; points: string[] }> = ({ title, icon, points }) => (
  <Frame title={title}>
    <div className="mx-auto max-w-3xl rounded-md border border-stone-200 bg-white p-6">
      {icon && <div className="mb-4 text-[#a86d30]">{icon}</div>}
      <ul className="space-y-4 text-stone-700">
        {points.map((point) => (
          <li key={point} className="border-b border-stone-100 pb-4 last:border-0 last:pb-0">
            {point}
          </li>
        ))}
      </ul>
    </div>
  </Frame>
)
