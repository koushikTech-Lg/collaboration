import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Geist_Mono } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Collab - Collaboration, Creation, Innovation",
  description: "Building the future together through collaboration, creation, and innovation",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${geistMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
