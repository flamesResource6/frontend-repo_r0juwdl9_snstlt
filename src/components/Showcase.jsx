import ProductCard from './ProductCard'

const products = [
  {
    id: 1,
    name: 'Luna Diamond Ring',
    subtitle: '18k White Gold',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1400&auto=format&fit=crop',
    rating: 5,
    reviews: 128,
  },
  {
    id: 2,
    name: 'Aurora Pendant',
    subtitle: 'Rose Gold Plated',
    price: 899,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1400&auto=format&fit=crop',
    rating: 4,
    reviews: 73,
  },
  {
    id: 3,
    name: 'Stellar Hoop Earrings',
    subtitle: 'Hand-polished',
    price: 449,
    image: 'https://images.unsplash.com/photo-1728034261586-df9cb229ed97?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdGVsbGFyJTIwSG9vcCUyMEVhcnJpbmdzfGVufDB8MHx8fDE3NjI3NzcyODl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    rating: 5,
    reviews: 56,
  },
  {
    id: 4,
    name: 'Nova Tennis Bracelet',
    subtitle: 'Platinum Finish',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1627314387807-df615e8567de?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOb3ZhJTIwVGVubmlzJTIwQnJhY2VsZXR8ZW58MHwwfHx8MTc2Mjc3NzI4OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    rating: 5,
    reviews: 210,
  },
]

export default function Showcase() {
  return (
    <section id="collections" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Featured Collections</h2>
            <p className="mt-2 text-gray-600 max-w-xl">Hand-selected favorites that embody our philosophy of minimal design, luminous materials, and lasting craft.</p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-full border border-gray-300 bg-white/70 backdrop-blur hover:bg-white transition-colors">View all</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
