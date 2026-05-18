import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, MessageCircle, Share2, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-36 h-16 rounded-sm overflow-hidden bg-white">
                <Image src="/logo.png" alt="JL Roofing" fill className="object-contain p-1" />
              </div>
            </Link>
            <p className="text-white/60 leading-relaxed max-w-xs font-medium">
              Expert roofing solutions for homeowners across the region. Quality workmanship guaranteed on every project.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-accent transition-colors text-white/80 hover:text-white">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-accent transition-colors text-white/80 hover:text-white">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-6 tracking-wide uppercase text-white/90">Quick Links</h4>
            <ul className="space-y-3 font-semibold text-white/60">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Our Services</Link></li>
              <li><Link href="/about#gallery" className="hover:text-accent transition-colors">Project Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold mb-6 tracking-wide uppercase text-white/90">Our Services</h4>
            <ul className="space-y-3 font-semibold text-white/60">
              <li><Link href="/services/roof-installation" className="hover:text-accent transition-colors">Roof Installation</Link></li>
              <li><Link href="/services/roof-repair" className="hover:text-accent transition-colors">Roof Repair</Link></li>
              <li><Link href="/services/flat-roofing" className="hover:text-accent transition-colors">Flat Roofing</Link></li>
              <li><Link href="/services/gutter-installation" className="hover:text-accent transition-colors">Gutter Installation</Link></li>
              <li><Link href="/services/other" className="hover:text-accent transition-colors">Property Maintenance</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold mb-6 tracking-wide uppercase text-white/90">Contact Us</h4>
            <ul className="space-y-4 font-semibold text-white/60">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>Serving your local area & surroundings</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+447486494947" className="hover:text-accent transition-colors">07486 494947</a>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="w-5 h-5 text-accent shrink-0" />
                <a href="https://wa.me/447486494947" className="hover:text-accent transition-colors">WhatsApp Chat</a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:info@jlroofing.co.uk" className="hover:text-accent transition-colors">info@jlroofing.co.uk</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold text-white/40">
          <p>© {new Date().getFullYear()} JL Roofing & Property Maintenance. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
