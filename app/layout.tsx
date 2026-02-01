import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import SmoothScroll from "@/components/tools/smoothscroll"

import { Inter, Plus_Jakarta_Sans as V0_Font_Plus_Jakarta_Sans, IBM_Plex_Mono as V0_Font_IBM_Plex_Mono, Lora as V0_Font_Lora } from 'next/font/google'

// Initialize fonts
const _plusJakartaSans = V0_Font_Plus_Jakarta_Sans({ subsets: ['latin'], weight: ["200", "300", "400", "500", "600", "700", "800"] })
const _ibmPlexMono = V0_Font_IBM_Plex_Mono({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700"] })
const _lora = V0_Font_Lora({ subsets: ['latin'], weight: ["400", "500", "600", "700"] })

const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Daniella | Portfolio Web",
  description:
    "Full-stack developer",
  icons: {
    icon: [
      {
        url: "/page-icon.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/page-icon.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/page-icon.jpg",
        type: "image/jpeg",
      },
    ],
    apple: "/page-icon.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased ${_plusJakartaSans.className} ${_ibmPlexMono.className} ${_lora.className} ${_inter.className}`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
