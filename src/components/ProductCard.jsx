import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-4 hover:shadow-xl transition-all"
    >
      <div className="aspect-square rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 grid place-items-center overflow-hidden">
        <img src={product.image} alt={product.name} className="w-3/4 object-contain transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-900">{product.name}</h3>
          <p className="font-semibold text-gray-900">${'{'}product.price{'}'}</p>
        </div>
        <p className="text-sm text-gray-500 mt-1">{product.subtitle}</p>
        <div className="flex items-center gap-1 mt-3 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} className={i < product.rating ? 'fill-amber-500 text-amber-500' : 'text-gray-300'} />
          ))}
          <span className="ml-2 text-xs text-gray-500">({product.reviews} reviews)</span>
        </div>
        <button className="mt-4 w-full rounded-xl bg-gray-900 text-white py-2.5 hover:bg-black transition-colors">Add to cart</button>
      </div>
    </motion.div>
  )
}
