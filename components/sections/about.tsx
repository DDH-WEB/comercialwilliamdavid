"use client"

import { memo } from "react"
import { Gem, Heart, Handshake } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const FeatureCard = memo(
  ({
    icon: Icon,
    label,
    color,
    bgColor,
    index,
    isVisible,
  }: {
    icon: any
    label: string
    color: string
    bgColor: string
    index: number
    isVisible: boolean
  }) => (
    <div
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="group relative">
        <div
          className={`absolute inset-0 ${bgColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        />
        <div className="relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-slate-300 transition-all hover:shadow-xl">
          <div
            className={`w-20 h-20 mx-auto mb-4 ${bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className={`w-10 h-10 ${color}`} />
          </div>
          <h3 className="text-xl font-semibold text-slate-900">{label}</h3>
        </div>
      </div>
    </div>
  ),
)

FeatureCard.displayName = "FeatureCard"

export default function About() {
  const { ref, isVisible } = useInView({ threshold: 0.1 })

  const features = [
    {
      icon: Gem,
      label: "Resistente",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Heart,
      label: "Corazón",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      icon: Handshake,
      label: "Confianza",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ]

  return (
    <section ref={ref} id="nosotros" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">
            Calidad que construye confianza,
            <br />
            <span className="text-orange-600">Tu socio en cada paso del camino</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-12">
            En nuestra ferretería, encontrarás todo lo que necesitas para hacer realidad tus proyectos más ambiciosos.
            Desde herramientas de alta calidad hasta materiales duraderos, cada producto que ofrecemos está diseñado
            para facilitar tu trabajo y garantizar resultados impecables. Ya sea que estés construyendo, renovando o
            reparando, nuestra amplia gama de productos te ayudará a enfrentar cada desafío con confianza. Descubre la
            calidad, la variedad y el servicio excepcional que solo nuestra ferretería puede ofrecerte.
            <span className="block mt-4 font-semibold text-orange-600">
              ¡Prepárate para brillar con cada proyecto que emprendas!
            </span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <FeatureCard key={feature.label} {...feature} index={index} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
