import { Section, SectionHeader } from "@/components/Section"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <Section variant="dark" className="bg-secondary">
        <SectionHeader 
          dark
          subtitle="Get in Touch"
          title="HOW CAN WE HELP YOU?"
          description="Whether you have a minor leak or need a full roof replacement, our team is ready to help. Contact us for a free, no-obligation quote."
          className="mb-0"
        />
      </Section>

      {/* Main Content */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 tracking-tight">Contact Information</h3>
              <div className="grid gap-6">
                {[
                  { icon: <Phone className="w-6 h-6" />, label: "Call Us", value: "07486 494947", sub: "Available 24/7 for emergencies", href: "tel:+447486494947" },
                  { icon: <MessageCircle className="w-6 h-6" />, label: "WhatsApp", value: "Chat with us", sub: "Fastest response time", href: "https://wa.me/447486494947" },
                  { icon: <Mail className="w-6 h-6" />, label: "Email Us", value: "info@jlroofing.co.uk", sub: "We'll respond within 24 hours", href: "mailto:info@jlroofing.co.uk" },
                  { icon: <MapPin className="w-6 h-6" />, label: "Our Location", value: "Serving your local area", sub: "And all surrounding regions", href: "#" },
                ].map((item, i) => (
                  <a 
                    key={i} 
                    href={item.href}
                    className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-accent/20 transition-all group"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-white text-accent flex items-center justify-center shadow-sm group-hover:bg-accent group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">{item.label}</p>
                      <p className="text-lg font-semibold text-primary">{item.value}</p>
                      <p className="text-sm font-semibold text-slate-500">{item.sub}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-accent text-white space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6" />
                <h4 className="text-xl font-semibold">Opening Hours</h4>
              </div>
              <div className="space-y-2 font-bold text-white/80">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00am - 6:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00am - 2:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white">Emergency Only</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 md:p-12 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50">
            <h3 className="text-2xl font-bold mb-8 tracking-tight">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wide text-slate-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent font-semibold transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wide text-slate-400 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="07486 494947" 
                    className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent font-semibold transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wide text-slate-400 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent font-semibold transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wide text-slate-400 ml-1">How can we help?</label>
                <select className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent font-semibold transition-all appearance-none">
                  <option>General Enquiry</option>
                  <option>Roof Repair Quote</option>
                  <option>New Roof Quote</option>
                  <option>Guttering / Fascias</option>
                  <option>Emergency Repair</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wide text-slate-400 ml-1">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="Please describe your requirements..." 
                  className="w-full p-6 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent font-semibold transition-all resize-none"
                />
              </div>

              <Button size="lg" className="w-full h-12 font-semibold group">
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  )
}
