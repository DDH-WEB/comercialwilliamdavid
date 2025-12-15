import dynamic from "next/dynamic"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"

const Services = dynamic(() => import("@/components/sections/services"), {
  loading: () => <div className="h-screen flex items-center justify-center">Cargando...</div>,
})
const Brands = dynamic(() => import("@/components/sections/brands"))
const Contact = dynamic(() => import("@/components/sections/contact"))

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Brands />
      <Contact />
    </main>
  )
}
