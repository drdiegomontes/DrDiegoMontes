import type React from "react"
import { Playfair_Display, Inter } from "next/font/google"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AutoScroll from "@/components/AutoScroll"
import "@/styles/globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dr. Diego Montes Chiropractic & Wellness",
  description: "Expert chiropractic care and wellness services",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      // Primary icons from Vercel storage
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-96x96-QHHK3QsffSvsFjWUgMSRdFPyerhIX9.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-CZbOrHZ29pAe3DERlvvM3RTiL8NnEq.svg",
        type: "image/svg+xml",
      },
      // Local fallbacks
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      }
    ],
    shortcut: "/favicon.ico",
    apple: [
      // Primary from Vercel storage
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-touch-icon-Wn21E8FgnWjGiUWQubfKjjbT0wfRJs.png",
        sizes: "180x180",
        type: "image/png",
      },
      // Local fallback
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      }
    ],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
      {
        url: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      }
    ]
  },
  generator: 'StynerDev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable}`}>
      <body className={inter.className}>
        <AutoScroll />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}