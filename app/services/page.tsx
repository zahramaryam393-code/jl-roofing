import Image from "next/image"
import { Section, SectionHeader } from "@/components/Section"
import { FaqAccordion } from "@/components/FaqAccordion"
import {
  Hammer, Home, Droplets, ShieldCheck, CheckCircle2, Star, ChevronRight,
  Phone, ClipboardList, FileText, HardHat, BadgeCheck, Camera
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    title: "Roof Installation",
    slug: "roof-installation",
    image: "/roof-install.jpg",
    icon: <Home className="w-12 h-12" />,
    description: "Expert installation of new roofs using high-quality slate, tile, or modern materials. Built to last with long-term guarantees.",
    features: ["Slate Roofing", "Tiled Roofing", "Structural Work", "Felt & Batten"],
    variant: "default"
  },
  {
    title: "Roof Repair",
    slug: "roof-repair",
    image: "/roof-repair.jpg",
    icon: <Hammer className="w-12 h-12" />,
    description: "Fast and reliable repairs for leaks, storm damage, and wear-and-tear. We restore your roof's integrity quickly.",
    features: ["Leak Detection", "Tile Replacement", "Storm Damage", "Leadwork"],
    variant: "muted"
  },
  {
    title: "Flat Roofing",
    slug: "flat-roofing",
    image: "/flat-roof.jpg",
    icon: <Droplets className="w-12 h-12" />,
    description: "Modern flat roofing solutions including GRP Fibreglass and EPDM Rubber. Durable and maintenance-free.",
    features: ["GRP Fibreglass", "EPDM Rubber", "Balcony Roofing", "Extension Roofs"],
    variant: "default"
  },
  {
    title: "Chimney Repair",
    slug: "chimney-repair",
    image: "/chimney-repair.jpg",
    icon: <Star className="w-12 h-12" />,
    description: "Professional chimney maintenance, repointing, and structural repairs to ensure safety and prevent water ingress.",
    features: ["Repointing", "Lead Flashing", "Cowl Fitting", "Chimney Removal"],
    variant: "muted"
  },
  {
    title: "Gutter Installation",
    slug: "gutter-installation",
    image: "/gutter-install.jpeg",
    icon: <ShieldCheck className="w-12 h-12" />,
    description: "Full replacement of old guttering with modern, maintenance-free uPVC systems in various styles and colours.",
    features: ["uPVC Gutters", "Seamless Systems", "Bargeboards", "Downpipes"],
    variant: "default"
  },
  {
    title: "Gutter Repair",
    slug: "gutter-repair",
    image: "/gutter-repair.jpg",
    icon: <CheckCircle2 className="w-12 h-12" />,
    description: "Fixing leaks, sagging gutters, and broken brackets to ensure water is correctly diverted away from your property.",
    features: ["Leak Sealing", "Bracket Fixes", "Alignment Adjustment", "Joint Replacement"],
    variant: "muted"
  },
  {
    title: "Gutter Cleaning",
    slug: "gutter-cleaning",
    image: "/gutter-clean.jpg",
    icon: <Droplets className="w-12 h-12" />,
    description: "Complete removal of debris, leaves, and moss to prevent blockages and potential water damage to your eaves.",
    features: ["Debris Removal", "Flow Testing", "Downpipe Clearing", "Minor Adjustments"],
    variant: "default"
  },
  {
    title: "Roof Cleaning",
    slug: "roof-cleaning",
    image: "/roof-cleaning.webp",
    icon: <ShieldCheck className="w-12 h-12" />,
    description: "Safe and effective removal of moss, algae, and dirt to improve your roof's appearance and lifespan.",
    features: ["Moss Removal", "Algae Treatment", "Soft Washing", "Gutter Clearance"],
    variant: "muted"
  },
  {
    title: "Roof Inspection",
    slug: "roof-inspection",
    image: "/roof-inspection.jpg",
    icon: <ShieldCheck className="w-12 h-12" />,
    description: "Comprehensive surveys to identify potential issues before they become expensive problems. Honest, professional advice.",
    features: ["Drone Surveys", "Detailed Reports", "Pre-purchase Checks", "Insurance Quotes"],
    variant: "default"
  },
  {
    title: "Pointing & Brickwork",
    slug: "pointing",
    image: "/pointing.jpeg",
    icon: <Hammer className="w-12 h-12" />,
    description: "Restoring the mortar between your bricks or tiles to prevent moisture penetration and structural issues.",
    features: ["Wall Repointing", "Ridge Tile Pointing", "Gable Repairs", "Brick Replacement"],
    variant: "muted"
  }
]

const steps = [
  {
    number: "01",
    icon: <Phone className="w-7 h-7" />,
    title: "Get In Touch",
    description: "Call us, email, or fill out our contact form. We'll respond within 24 hours to arrange a convenient time to visit."
  },
  {
    number: "02",
    icon: <ClipboardList className="w-7 h-7" />,
    title: "Free Survey",
    description: "One of our qualified roofers visits your property for a thorough inspection, including the loft space where needed."
  },
  {
    number: "03",
    icon: <FileText className="w-7 h-7" />,
    title: "Clear Quote",
    description: "You receive a detailed, itemised written quote with no hidden costs. We explain exactly what's needed and why."
  },
  {
    number: "04",
    icon: <HardHat className="w-7 h-7" />,
    title: "Work Begins",
    description: "Our experienced crew arrives on the agreed date, works cleanly and safely, and keeps you informed throughout."
  },
  {
    number: "05",
    icon: <BadgeCheck className="w-7 h-7" />,
    title: "Guaranteed Finish",
    description: "We clean up fully on completion. Your work comes with a written guarantee and we're always on hand for aftercare."
  }
]

const galleryItems = [
  { label: "Roof Installation", category: "New Build", bg: "from-slate-700 to-slate-900", image: "/roof-install.jpg" },
  { label: "Roof Repair", category: "Repair", bg: "from-zinc-600 to-zinc-800", image: "/roof-repair.jpg" },
  { label: "Flat Roofing", category: "Flat Roof", bg: "from-stone-600 to-stone-800", image: "/flat-roof.jpg" },
  { label: "Chimney Repair", category: "Chimney", bg: "from-slate-500 to-slate-700", image: "/chimney-repair.jpg" },
  { label: "Gutter Installation", category: "Guttering", bg: "from-neutral-700 to-neutral-900", image: "/gutter-install.jpeg" },
  { label: "Pointing & Brickwork", category: "Pointing", bg: "from-zinc-700 to-zinc-900", image: "/pointing.jpeg" },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <Section variant="dark" className="bg-secondary">
        <SectionHeader
          dark
          subtitle="Expert Solutions"
          title="OUR ROOFING SERVICES."
          description="We provide a comprehensive range of roofing and property maintenance services, all delivered to the highest standards of quality."
          className="mb-0"
        />
      </Section>

      {/* Services List */}
      {services.map((service, i) => (
        <Section key={i} variant={service.variant as any}>
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
            <div className={`space-y-8 ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
              <div className="w-20 h-20 rounded-3xl bg-accent text-white flex items-center justify-center shadow-lg shadow-accent/20">
                {service.icon}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{service.title}</h2>
              <p className="text-lg font-semibold text-slate-500 leading-relaxed">
                {service.description}
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-bold">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="font-semibold group" asChild>
                  <a href="tel:+447486494947">
                    Request a Quote
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="font-semibold group border-slate-300" asChild>
                  <a href="https://wa.me/447486494947" target="_blank" rel="noopener noreferrer">
                    Learn More
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>

            <div className={`relative aspect-video rounded-[3rem] overflow-hidden ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
              <Image src={service.image} alt={service.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
          </div>
        </Section>
      ))}

      {/* How It Works */}
      <Section variant="dark" className="bg-secondary">
        <SectionHeader
          dark
          subtitle="Our Process"
          title="HOW IT WORKS."
          description="From your first call to the final guarantee, here's exactly what to expect when you work with us."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-4">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%-0px)] w-full h-px bg-white/10 z-0" />
              )}
              <div className="relative z-10 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-white shadow-lg shadow-accent/30 shrink-0">
                    {step.icon}
                  </div>
                  <span className="text-4xl font-bold text-white/10 leading-none">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-white/60 font-medium leading-relaxed text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Mini Gallery */}
      <Section variant="muted">
        <div className="space-y-12">
          <SectionHeader
            subtitle="Our Work"
            title="RECENT PROJECTS."
            description="A snapshot of the jobs we're proud of, from full roof replacements to precision repairs across the region."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className={`relative group rounded-3xl overflow-hidden ${item.image ? "bg-slate-900" : `bg-gradient-to-br ${item.bg}`} aspect-[4/3] cursor-pointer`}
              >
                {item.image ? (
                  <Image src={item.image} alt={item.label} fill className="object-cover" />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-30">
                    <Camera className="w-16 h-16 text-white" />
                  </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent text-white text-xs font-semibold uppercase tracking-wider mb-2">
                    {item.category}
                  </span>
                  <p className="text-white font-semibold text-base leading-snug">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center pt-4">
            <Button size="lg" className="font-semibold group" asChild>
              <Link href="/about#gallery">
                View Full Gallery
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section variant="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <SectionHeader
              subtitle="Common Questions"
              title="FREQUENTLY ASKED."
              description="Everything you need to know before hiring a roofer. Can't find your answer? Give us a call, we're always happy to help."
              className="mb-0"
            />
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-accent/5 border border-accent/10">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-primary">Honest & Transparent</p>
                  <p className="text-slate-500 font-medium text-sm mt-1">No upselling. No scare tactics. Just straight advice you can trust.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-accent/5 border border-accent/10">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-primary">Fully Insured</p>
                  <p className="text-slate-500 font-medium text-sm mt-1">Public liability and employer's liability insurance as standard.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-accent/5 border border-accent/10">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-primary">Written Guarantee</p>
                  <p className="text-slate-500 font-medium text-sm mt-1">All major works backed by a formal written workmanship guarantee.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 lg:p-10">
            <FaqAccordion />
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="accent">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Not sure what you need?
          </h2>
          <p className="text-base font-normal text-white/80 leading-relaxed">
            Contact us for a free inspection and we&apos;ll provide an honest assessment of your roof&apos;s condition.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="h-12 px-8 font-semibold" asChild>
              <a href="https://wa.me/447486494947" target="_blank" rel="noopener noreferrer">Free Inspection</a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 font-semibold border-white text-white hover:bg-white hover:text-accent" asChild>
              <a href="tel:+447486494947">Call Us Now</a>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
