import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zain Ul Abideen - Frontend | Backend Developer",
  description:
    "Portfolio of Zain Ul Abideen, Frontend | Backend Developer based in Islamabad, Pakistan. Skilled in GoLang, JavaScript, PostgreSQL, and more. Building clean, efficient, and responsive web and desktop solutions.",
  keywords:
    "frontend developer, backend developer, golang, javascript, postgresql, web developer, islamabad, pakistan, full stack developer, software engineer",
  authors: [{ name: "Zain Ul Abideen" }],
  openGraph: {
    title: "Zain Ul Abideen - Frontend | Backend Developer",
    description: "Building clean, efficient, and responsive web and desktop solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zain Ul Abideen - Frontend | Backend Developer",
    description: "Building clean, efficient, and responsive web and desktop solutions",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
