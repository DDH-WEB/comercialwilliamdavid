"use client"

import { memo } from "react"
import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"
import { Flame, Hammer, Truck } from "lucide-react"

const ServiceCard = memo(
  ({
    service,
    index,
    isReversed,
  }: {
    service: {
      title: string
      description: string
      image: string
      gradient: string
      icon: any
    }
    index: number
    isReversed: boolean
  }) => {
    const { ref, isVisible } = useInView({ threshold: 0.2 })

    return (
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`mb-16 last:mb-0 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${isReversed ? "-translate-x-10" : "translate-x-10"}`
          }`}
      >
        <div
          className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
            } gap-8 items-center max-w-6xl mx-auto`}
        >
          <div className="w-full lg:w-1/2 group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`}
              />
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div
                className={`inline-flex items-center gap-3 bg-gradient-to-r ${service.gradient} px-4 py-2 rounded-full mb-6`}
              >
                <service.icon className="w-6 h-6 text-white" />
                <span className="text-white font-semibold">Servicio {index + 1}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-balance">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">{service.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
)

ServiceCard.displayName = "ServiceCard"

export default function Services() {
  const services = [
    {
      title: "Materiales de construcción de primera calidad",
      description:
        "¡Transforma tus espacios con nuestra selección de materiales nobles y rústicos! Ya sea que estés renovando tu hogar, decorando tu oficina o emprendiendo una nueva construcción, tenemos justo lo que necesitas, al mejor precio.",
      image: "/images/material-noble.jpg",
      gradient: "from-orange-600 to-amber-600",
      icon: Hammer,
    },
    {
      title: "Herramientas profesionales y accesorios",
      description:
        "¡Potencia tu trabajo con nuestras herramientas de calidad! Te ofrecemos una amplia gama de herramientas de alta calidad para todo tipo de proyectos. Ya seas profesional o aficionado, aquí encontrarás todo lo que necesitas.",
      image: "/images/materila-plomeria.jpg",
      gradient: "from-blue-600 to-cyan-600",
      icon: Hammer,
    },
    {
      title: "Servicio de transporte de materiales",
      description:
        "Brindamos servicio de transporte para materiales rústicos y productos de construcción. Contamos con unidades propias para un traslado seguro y puntual. Servicio disponible con costo adicional según distancia y tipo de carga.",
      image: "/images/transporte-materiales.webp",
      gradient: "from-slate-600 to-gray-700",
      icon: Truck,
    },
    {
      title: "Delivery de gas a domicilio GRATIS",
      description:
        "¡El gas que llega a tu hogar con confianza y rapidez! Te ofrecemos balones de gas de la más alta calidad con un servicio de entrega a domicilio GRATIS, rápido y eficiente. Seguridad garantizada en cada entrega.",
      image: "/images/Gas-natural.jpg",
      gradient: "from-red-600 to-orange-600",
      icon: Flame,
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Nuestros <span className="text-orange-600">Servicios</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Soluciones completas para todos tus proyectos de construcción y hogar
          </p>
        </div>
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} isReversed={index % 2 !== 0} />
        ))}
      </div>
    </section>
  )
}
