import type { Metadata } from "next"
import { Inter, Barlow_Semi_Condensed } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { FloatingContact } from "@/components/FloatingContact"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const barlow = Barlow_Semi_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "JL Roofing & Property Maintenance | North East",
  description: "Expert roofing solutions across the North East. Roof installation, repair, flat roofing, guttering and more. Free quotes, fully insured, 10-year guarantee.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  )
}
