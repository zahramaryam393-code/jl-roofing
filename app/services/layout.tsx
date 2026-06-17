import { Navbar } from "@/components/Navbar"
import { FloatingContact } from "@/components/FloatingContact"

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <FloatingContact />
    </>
  )
}
