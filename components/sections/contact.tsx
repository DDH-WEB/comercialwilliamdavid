"use client"

import { memo } from "react"
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { SparklesText } from "../ui/sparkles-text"

const ContactCard = memo(
  ({
    icon: Icon,
    title,
    content,
    gradient,
  }: {
    icon: any
    title: string
    content: string
    gradient: string
  }) => (
    <div className="group relative">
      <div
        className={`absolute inset-0 bg-linear-to-r ${gradient} opacity-0 group-hover:opacity-15 rounded-2xl blur-xl transition-all duration-300`}
      />
      <div className="relative flex gap-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-orange-300 group-hover:-translate-y-1">
        <div
          className={`shrink-0 w-14 h-14 bg-linear-to-r ${gradient} rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 text-lg mb-1">
            {title}
          </h3>
          <p className="text-slate-600 text-xs leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </div>
  ),
)

ContactCard.displayName = "ContactCard"

export default function Contact() {
  const { ref, isVisible } = useInView({ threshold: 0.1 })

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      content: "+51 969 921 621",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "CALLE RAMON CASTILLA N° 321 TABLAZO NORTE",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Clock,
      title: "Horario",
      content: "Lun - Dom: 6:00 AM - 8:00 PM",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section ref={ref} id="contacto" className="py-20 md:py-32 bg-linear-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Contáctanos <span className="text-orange-600">Hoy</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte con todos tus proyectos. Contáctanos y descubre cómo podemos hacer realidad tus
            ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={info.title}
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <ContactCard {...info} />
            </div>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          <SparklesText>
            <Button
              asChild
              size="lg"
              className="bg-linear-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-orange-500/50 transition-all hover:scale-105"
            >
              <a
                href="https://wa.me/51969921621"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Escríbenos por WhatsApp
              </a>
            </Button>
          </SparklesText>
        </div>
      </div>

      <footer className="mt-20 border-t border-slate-200 pt-8">
        <div className="container mx-auto px-4 text-center text-slate-600">
          <p>© {new Date().getFullYear()} | Ferretería William David. Casi Todos los derechos reservados.</p>
        </div>
      </footer>
    </section>
  )
}
