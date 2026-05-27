import React from 'react'
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171a16] pt-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 pb-12 md:grid-cols-4">
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#e9bf7a]">Handicrafts Town</h3>
            <p className="mt-4 text-sm leading-6 text-stone-300">
              Luxury home decor, premium furniture, wall art, clocks, mirrors, and handcrafted
              accents for expressive interiors.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="rounded-full border border-white/20 p-2 text-stone-300 transition hover:border-[#e9bf7a] hover:text-[#e9bf7a]"
                  aria-label="Social link"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <FooterList title="Shop" items={['Dining Tables', 'Wall Art', 'Wall Clock', 'Side Table', 'Lamps']} />
          <FooterList title="Help" items={['Contact Us', 'Track Order', 'Shipping Policy', 'Returns', 'FAQ']} />

          <div>
            <h3 className="mb-4 text-lg font-bold">Contact</h3>
            <div className="space-y-3 text-sm text-stone-300">
              <p className="flex items-center gap-2">
                <Phone size={17} className="text-[#e9bf7a]" /> +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <Mail size={17} className="text-[#e9bf7a]" /> support@handicraftstown.com
              </p>
              <p className="flex items-start gap-2">
                <MapPin size={17} className="mt-1 text-[#e9bf7a]" /> Premium decor studio, India
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-white/10 py-6 text-sm text-stone-400 md:flex-row">
          <p>© 2026 Handicrafts Town clone. Built for local demo.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#e9bf7a]">Privacy Policy</a>
            <a href="#" className="hover:text-[#e9bf7a]">Terms Of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const FooterList: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div>
    <h3 className="mb-4 text-lg font-bold">{title}</h3>
    <ul className="space-y-2 text-sm text-stone-300">
      {items.map((item) => (
        <li key={item}>
          <a href="#" className="transition hover:text-[#e9bf7a]">
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
)
