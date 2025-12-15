"use client"

import Link from "next/link"

const navItems = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#marcas", label: "Marcas" },
  { href: "#contacto", label: "Contacto" },
]

export function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-white hover:text-orange-500 transition-colors font-medium relative group"
        >
          {item.label}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
        </Link>
      ))}
    </nav>
  )
}
