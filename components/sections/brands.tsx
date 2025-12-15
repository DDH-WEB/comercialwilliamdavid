"use client"

import { memo } from "react"
import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"
import { SparklesText } from "../ui/sparkles-text"

const BrandCard = memo(({ brand }: { brand: { name: string; logo: string } }) => (
  <div className="shrink-0 w-64 mx-4">
    <div className="group relative bg-white rounded-xl p-6 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105">
      <div className="absolute inset-0 bg-linear-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-transparent rounded-xl transition-all duration-300" />
      <div className="relative aspect-video flex items-center justify-center">
        <Image
          src={brand.logo || "/images/CWD_Icon.png"}
          alt={brand.name}
          fill
          sizes="256px"
          className="object-contain p-2 filter grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      </div>
    </div>
  </div>
))

BrandCard.displayName = "BrandCard"

export default function Brands() {
  const { ref, isVisible } = useInView({ threshold: 0.1 })

  const brands = [
    { name: "Aceros Arequipa", logo: "/images/logo-aceros-arequipa.png" },
    { name: "Pacasmayo", logo: "/images/logo-pacasmayo.png" },
    { name: "Eternit", logo: "/images/logo-eternit.png" },
    { name: "3M", logo: "/images/logo-3m.png" },
    { name: "Kamasa", logo: "/images/logo-kamasa.png" },
    { name: "Stanley", logo: "/images/logo-stanley.png" },
    { name: "Tekno", logo: "/images/logo-tekno.png" },
    { name: "Pavco", logo: "/images/logo-pavco.png" },
  ]

  const firstRow = brands.slice(0, 4)
  const secondRow = brands.slice(4, 8)

  return (
    <section ref={ref} id="marcas" className="py-20 md:py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <SparklesText className="text-3xl md:text-5xl font-bold text-orange-500 mb-6 text-balance">
            <h2>
              Trabajamos con las marcas más reconocidas
            </h2>
          </SparklesText>
          <SparklesText className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <p>
              Nos dedicamos a trabajar con las marcas más prestigiosas del país, ofreciendo productos y servicios de
              excelencia que superan los estándares más rigurosos del mercado.
            </p>
          </SparklesText>
        </div>

        <div className="relative overflow-hidden mb-8">
          <div className="flex animate-scroll-right">
            {firstRow.map((brand) => (
              <BrandCard key={`${brand.name}-1`} brand={brand} />
            ))}
            {firstRow.map((brand) => (
              <BrandCard key={`${brand.name}-2`} brand={brand} />
            ))}
            {firstRow.map((brand) => (
              <BrandCard key={`${brand.name}-3`} brand={brand} />
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left">
            {secondRow.map((brand) => (
              <BrandCard key={`${brand.name}-1`} brand={brand} />
            ))}
            {secondRow.map((brand) => (
              <BrandCard key={`${brand.name}-2`} brand={brand} />
            ))}
            {secondRow.map((brand) => (
              <BrandCard key={`${brand.name}-3`} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
