import type React from "react"
import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { Space_Grotesk } from "next/font/google"
import { DM_Sans } from "next/font/google"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "NK Consulting - Nabila Khouimi | Communication & Event Management",
  description:
    "Senior consultant in communication and events with 15+ years experience. NK Consulting provides strategic support for international projects, digital community building, and empowering digital nomad families in Morocco.",
  generator: "v0.app",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "NK Consulting - Nabila Khouimi | Communication & Event Management",
    description:
      "Senior consultant in communication and events with 15+ years experience. Strategic support for international projects and digital nomad families in Morocco.",
    images: [
      {
        url: "/images/nk-consulting-logo-hq.jpeg",
        width: 1200,
        height: 630,
        alt: "NK Consulting - Communication & Event Management",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NK Consulting - Nabila Khouimi | Communication & Event Management",
    description:
      "Senior consultant in communication and events with 15+ years experience. Strategic support for international projects and digital nomad families in Morocco.",
    images: ["/images/nk-consulting-logo-hq.jpeg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${dmSans.variable} ${spaceGrotesk.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
