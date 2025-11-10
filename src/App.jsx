import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <section id="about" className="py-20">
          <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-10">
              <div className="aspect-[4/3] rounded-xl bg-white shadow-inner" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Design that catches light</h2>
              <p className="mt-4 text-gray-600 max-w-prose">Each piece is designed to interact with light—facets, edges, and curves calibrated to shimmer with your movement. We embrace a minimal aesthetic where materials and engineering do the talking.</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl border border-gray-200 p-4"><p className="font-medium">Ethically sourced</p><p className="text-gray-500 mt-1">Conflict-free stones and recycled metals.</p></div>
                <div className="rounded-xl border border-gray-200 p-4"><p className="font-medium">Lifetime care</p><p className="text-gray-500 mt-1">Complimentary cleaning & resizing.</p></div>
                <div className="rounded-xl border border-gray-200 p-4"><p className="font-medium">Precision crafted</p><p className="text-gray-500 mt-1">Engineered for daily wear.</p></div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default App
