"use client"

import Link from "next/link"
import { X } from "lucide-react"

const navItems = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#marcas", label: "Marcas" },
  { href: "#contacto", label: "Contacto" },
]

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="md:hidden fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-md">
      <div className="container mx-auto py-4">
        <div className="flex  px-6 justify-between items-center mb-7">
          <h2 className="text-xl font-bold text-white">Menú</h2>
          <button onClick={onClose} className="text-white hover:text-orange-500 transition-colors">
            <X size={24} />
          </button>
        </div>
        <nav className="flex py-10 flex-col items-center gap-6 bg-slate-900/95">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="text-xl text-white hover:text-orange-500 transition-colors py-2 border-b border-slate-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
