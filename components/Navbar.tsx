"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Roof Installation", href: "/services/roof-installation" },
      { name: "Roof Repair", href: "/services/roof-repair" },
      { name: "Flat Roofing", href: "/services/flat-roofing" },
      { name: "Chimney Repair", href: "/services/chimney-repair" },
      { name: "Gutter Installation", href: "/services/gutter-installation" },
      { name: "Gutter Repair", href: "/services/gutter-repair" },
      { name: "Gutter Cleaning", href: "/services/gutter-cleaning" },
      { name: "Roof Cleaning", href: "/services/roof-cleaning" },
      { name: "Roof Inspection", href: "/services/roof-inspection" },
      { name: "Pointing & Brickwork", href: "/services/pointing" },
      { name: "Property Maintenance", href: "/services/other" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary",
        scrolled
          ? "shadow-2xl py-3 border-b border-white/10"
          : "py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="p-2 rounded-xl bg-accent shadow-lg shadow-accent/20">
              <div className="w-8 h-8 flex items-center justify-center font-black text-white text-xl italic tracking-tighter">
                JL
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tighter leading-none text-white transition-colors">
                ROOFING
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-60 text-white transition-colors">
                & Property Maintenance
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button className="flex items-center gap-1 font-bold text-sm text-white/80 hover:text-accent transition-all">
                    {item.name}
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "font-bold text-sm transition-all relative py-2",
                      pathname === item.href
                        ? "text-accent"
                        : "text-white/80 hover:text-white"
                    )}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full animate-in fade-in zoom-in duration-300" />
                    )}
                  </Link>
                )}

                {item.dropdown && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="bg-primary border border-white/10 rounded-2xl shadow-2xl p-3 min-w-[240px] backdrop-blur-xl">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className={cn(
                            "block px-4 py-3 text-sm font-bold transition-all rounded-xl",
                            pathname === sub.href
                              ? "text-accent bg-white/5"
                              : "text-white/60 hover:text-white hover:bg-white/10"
                          )}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" size="sm" className="font-semibold border-white/20 text-white hover:bg-white hover:text-primary transition-all px-6" asChild>
              <a href="tel:+447486494947">
                <Phone className="w-4 h-4 mr-2" />
                07486 494947
              </a>
            </Button>
            <Button variant="whatsapp" size="sm" className="font-semibold px-6 shadow-lg shadow-whatsapp/20" asChild>
              <a href="https://wa.me/447486494947">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-3 rounded-2xl transition-all bg-white/10 text-white hover:bg-white/20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-primary border-t border-white/5 shadow-2xl p-6 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "block text-base font-semibold py-3 px-4 rounded-2xl transition-all",
                    pathname === item.href ? "bg-accent/10 text-accent" : "text-white/70 hover:bg-white/5 hover:text-white"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="ml-6 mt-2 grid grid-cols-1 gap-2 border-l border-white/10">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className={cn(
                          "block text-sm font-bold py-2 px-6 transition-all",
                          pathname === sub.href ? "text-accent" : "text-white/50 hover:text-white"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Button variant="outline" className="font-semibold border-white/10 text-white" asChild>
                <a href="tel:+447486494947">
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </a>
              </Button>
              <Button variant="whatsapp" className="font-semibold" asChild>
                <a href="https://wa.me/447486494947">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
