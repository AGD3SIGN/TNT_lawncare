import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'GreenEdge Lawn Care | Reliable Local Lawn Service',
  description: 'Professional, reliable lawn care from a hardworking local young professional. Serving Local Town with mowing, edging, trimming, and seasonal cleanup. Get a free quote today!',
  keywords: ['lawn care', 'lawn mowing', 'landscaping', 'local lawn service', 'yard maintenance'],
  openGraph: {
    title: 'GreenEdge Lawn Care | Reliable Local Lawn Service',
    description: 'Professional, reliable lawn care from a hardworking local young professional.',
    type: 'website',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#1a5f2a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
