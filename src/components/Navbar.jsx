import { Menu, ShoppingBag, Gem } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-600 grid place-items-center text-white shadow-lg">
            <Gem size={18} />
          </div>
          <span className="font-semibold tracking-tight text-gray-900">Aurelia Jewels</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#collections" className="hover:text-gray-900 transition-colors">Collections</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-full hover:bg-black/5 transition-colors" aria-label="Cart">
            <ShoppingBag size={20} className="text-gray-800" />
            <span className="absolute -top-1 -right-1 h-4 w-4 text-[10px] grid place-items-center rounded-full bg-indigo-600 text-white">2</span>
          </button>
          <button className="md:hidden p-2 rounded-full hover:bg-black/5" aria-label="Menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
