export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-3 gap-8 text-sm text-gray-600">
        <div>
          <h3 className="font-semibold text-gray-900">Aurelia Jewels</h3>
          <p className="mt-2">Minimal fine jewelry inspired by light, geometry, and the future.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Contact</h4>
          <p className="mt-2">hello@aurelia.studio</p>
          <p>+1 (555) 123-4567</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Follow</h4>
          <div className="mt-2 flex gap-4">
            <a href="#" className="hover:text-gray-900">Instagram</a>
            <a href="#" className="hover:text-gray-900">Pinterest</a>
            <a href="#" className="hover:text-gray-900">X</a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-6">© {new Date().getFullYear()} Aurelia Jewels. All rights reserved.</div>
    </footer>
  )
}
