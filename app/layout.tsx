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
  title: "Ferretería William David - Herramientas de Alta Calidad",
  description:
    "Encuentra herramientas y materiales de construcción de alta calidad. Ferretería William David, tu socio en cada proyecto.",
  keywords: [
    "ferretería",
    "herramientas",
    "construcción",
    "gas a domicilio",
    "materiales de construcción",
    "La Union",
    "Perú",
  ],
  authors: [{ name: "Ferretería William David" }],
  creator: "Ferretería William David",
  publisher: "Ferretería William David",
  openGraph: {
    type: "website",
    locale: "es_PE",
    title: "Ferretería William David - Herramientas de Alta Calidad",
    description: "Encuentra herramientas y materiales de construcción de alta calidad en Pasco, Perú",
    siteName: "Ferretería William David",
  },
  generator: "DDH DEV",
  icons: {
    icon: "/images/CWD_Icon.png",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#ea580c",
}

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
