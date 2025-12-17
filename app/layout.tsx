import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap", 
  preload: true,
})

export const metadata: Metadata = {
  // Title optimizado para búsquedas locales
  title: {
    default: "Ferretería William David | Herramientas y Materiales La Unión - Piura",
    template: "%s | Ferretería William David"
  },
  
  // Descripción optimizada con ubicación y servicios principales
  description:
    "Ferretería en La Unión, Piura. Venta de herramientas, materiales de construcción, gas a domicilio y más. CP 19 de Agosto. Calidad garantizada. ¡Visítanos o llámanos!",
  
  // Keywords estratégicas para SEO LOCAL (muy importante para ferreterías)
  keywords: [
    // Marca y ubicación
    "Ferretería William David",
    "ferretería La Unión",
    "ferretería Piura",
    "ferretería 19 de Agosto",
    "ferretería cerca de mí",
    
    // Productos principales
    "herramientas La Unión",
    "materiales de construcción La Unión",
    "ferretería con gas a domicilio",
    "gas balón La Unión",
    "entrega de gas Piura",
    
    // Productos específicos (añade los que vendas)
    "cemento La Unión",
    "fierro construcción",
    "pintura",
    "clavos y tornillos",
    "herramientas eléctricas",
    "herramientas manuales",
    "tuberías PVC",
    "cables eléctricos",
    
    // Servicios
    "delivery gas domicilio",
    "ferretería delivery",
    "venta de herramientas al por mayor",
    "materiales construcción por mayor",
    
    // Long-tail keywords
    "dónde comprar herramientas en La Unión",
    "mejor ferretería Piura",
    "ferretería económica La Unión",
    "gas a domicilio 19 de Agosto",
    
    // Ubicación geográfica
    "CP 19 de Agosto",
    "La Unión Piura",
    "Perú",
  ],
  
  authors: [{ name: "Ferretería William David" }],
  creator: "Ferretería William David",
  publisher: "Ferretería William David",
  
  // Robots - asegurar indexación
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Open Graph - Para compartir en redes sociales
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://ferreteriawilliamdavid.netlify.app/", 
    siteName: "Ferretería William David",
    title: "Ferretería William David | Herramientas y Materiales La Unión - Piura",
    description:
      "Tu ferretería de confianza en La Unión. Herramientas, materiales de construcción, gas a domicilio y más. CP 19 de Agosto. Calidad y buen precio garantizado.",
    images: [
      {
        url: "/images/CWD_Icon.png",
        width: 1200,
        height: 630,
        alt: "Ferretería William David - La Unión, Piura",
        type: "image/png",
      },
      {
        url: "/images/CWD_Icon.png",
        width: 800,
        height: 800,
        alt: "Logo Ferretería William David",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Ferretería William David | La Unión - Piura",
    description:
      "Herramientas, materiales de construcción y gas a domicilio. Tu ferretería de confianza en CP 19 de Agosto.",
    images: ["https://tu-sitio.com/twitter-image.jpg"],
  },
  
  // Canonical URL (evita contenido duplicado)
  alternates: {
    canonical: "https://ferreteriawilliamdavid.netlify.app/",
    languages: {
      'es-PE': 'https://ferreteriawilliamdavid.netlify.app/',
    },
  },
  
  // Íconos optimizados
  icons: {
    icon: [
      { url: "/images/CWD_Icon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/CWD_Icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/images/CWD_Icon.png",
    shortcut: "/favicon.ico",
  },
  
  // Categoría del negocio
  category: "hardware store",
  
  // Generator - crédito a tu agencia
  generator: "DDH DEV - Denis Yampol Davila",
  
  // Metadatos adicionales
  other: {
    "theme-color": "#ea580c",
    "color-scheme": "light",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no", 
  },
};

// Viewport optimizado para móviles (clientes buscando desde celular)
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#ea580c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
