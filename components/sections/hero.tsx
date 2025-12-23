"use client"
import { SparklesText } from "@/components/ui/sparkles-text"
import { useState, useEffect, memo } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MobileMenu } from "@/components/ui/mobile-menu"
import { DesktopNav } from "@/components/ui/desktop-nav"

const Header = memo(
  ({
    isScrolled,
    isMenuOpen,
    setIsMenuOpen,
  }: {
    isScrolled: boolean
    isMenuOpen: boolean
    setIsMenuOpen: (value: boolean) => void
  }) => (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <Image
              src="/images/CWD_Icon.png"
              alt="Logo"
              width={48}
              height={48}
              className="object-contain transition-transform group-hover:scale-110"
              priority
            />
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500 blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
            <h1 className="relative text-sm md:text-2xl font-bold text-white tracking-tight">
              FERRETERÍA WILLIAM DAVID
            </h1>
          </div>
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-orange-500 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <DesktopNav />
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  ),
)

Header.displayName = "Header"

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner.jpg"
          alt="Banner Ferretería"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-linear-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80" />
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <Header isScrolled={isScrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div className="relative z-10 container mx-auto px-4 text-center animate-fadeIn">
        <h2><SparklesText className="text-4xl md:text-7xl font-bold text-white mb-6 animate-slideUp">BIENVENIDOS</SparklesText></h2>
        <p className="text-xl md:text-3xl text-gray-200 mb-4 animate-slideUp" style={{ animationDelay: "0.2s" }}>
          FERRETERÍA WILLIAM DAVID
        </p>
        <p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-slideUp"
          style={{ animationDelay: "0.3s" }}
        >
          Encuentra Herramientas de Alta Calidad
          <span className="block text-orange-500 font-semibold mt-2">HOY</span>
        </p>
        <div className="animate-slideUp" style={{ animationDelay: "0.5s" }}>
          <Button
            asChild
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-orange-500/50 transition-all hover:scale-105"
          >
            <a href="https://wa.me/51928570081" target="_blank" rel="noopener noreferrer">
              Contáctenos
            </a>
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
