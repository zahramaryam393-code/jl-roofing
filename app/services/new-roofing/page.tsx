import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Section, SectionHeader } from "@/components/Section"
import { ServiceDetailView, type ServiceDetail } from "@/components/ServiceDetailView"
import { Button } from "@/components/ui/button"
import type { ServiceData } from "@/lib/services-data"

export const metadata: Metadata = {
  title: "New Roofing | JL Roofing & Property Maintenance",
  description:
    "New roofs for existing homes, extensions and new builds across the North East. Slate, clay and concrete tile roofing with free surveys and fixed-price quotes.",
}

const service: ServiceDetail = {
  title: "New Roofing",
  description: "A complete new roof for your home, extension, or new build. We take care of everything from the first survey to the final clean-up, using premium slate, clay, or concrete tiles.",
  heroFeatures: {
    benefits: [
      { title: "Complete Roof Systems", desc: "Timber, membrane, battens, tiles, and leadwork under one team." },
      { title: "Fixed Price Quotes", desc: "A detailed, itemised price with no hidden extras." },
      { title: "Written Guarantee", desc: "Your new roof is handed over with a written workmanship guarantee." }
    ],
    warnings: [
      { title: "Repeat Repairs", desc: "Patching the same roof year after year is rarely good value." },
      { title: "Slipping Tiles Across the Roof", desc: "Widespread movement points to failing fixings or battens." },
      { title: "Daylight in the Loft", desc: "Gaps or perished felt mean the roof is no longer protecting your home." }
    ]
  },
  difference: {
    title: "A New Roof, Done Properly",
    text: "Your roof protects everything beneath it, so every layer matters. We build the whole system properly, from sound timber and breathable membrane through to the last ridge tile, and we explain each decision so you know exactly what you are paying for.",
    features: [
      { title: "Honest Specification", desc: "We recommend the materials that suit your property and budget." },
      { title: "Single Point of Contact", desc: "Scaffolding, skips, and building regs are all organised for you." },
      { title: "Weather-Protected Site", desc: "Open sections are covered before we leave each day." }
    ]
  },
  process: [
    { step: "01", title: "Survey", desc: "We inspect the roof structure and take accurate measurements." },
    { step: "02", title: "Specification", desc: "We agree the materials, price, and start date with you." },
    { step: "03", title: "Build", desc: "The new roof system is installed layer by layer." },
    { step: "04", title: "Handover", desc: "The site is cleared and your guarantee is issued." }
  ],
  pricingFactors: [
    "Size and pitch of the roof",
    "Material choice (Natural Slate vs Clay vs Concrete)",
    "Number of valleys, hips, dormers, and chimneys",
    "Condition of the existing timbers",
    "Scaffolding and access requirements"
  ],
  technical: "Every new roof is built with breathable membranes, treated timber battens, and correctly detailed ventilation to help prevent loft condensation. Tiles and slates are fixed to BS 5534, and dry ridge and verge systems can be specified to reduce future mortar maintenance.",
  areas: ["Newcastle", "Gateshead", "Durham", "Sunderland", "North Shields", "South Shields", "Whitley Bay"]
}

const serviceInfo: ServiceData = {
  title: "New Roofing",
  slug: "new-roofing",
  iconName: "Home",
  heroImage: "/028.jpg",
  tagline: "A new roof, built to protect your home for decades.",
  description: service.description,
  longDescription: "Whether your existing roof has reached the end of its life or you are building something new, a new roof is one of the biggest investments you will make in your property. We survey, specify, and install the complete roof system, then back it with a written workmanship guarantee.",
  features: ["Full Re-Roofs", "New Builds", "Extensions", "Slate & Tile Roofing", "Ridge & Hip Work", "Leadwork & Valleys"],
  steps: [
    { title: "Free Roof Survey", description: "We inspect your roof and loft space, measure up, and talk through what you want from your new roof." },
    { title: "Materials & Quote", description: "We help you compare slate, clay, and concrete options, then provide a clear, itemised written quote." },
    { title: "Scaffold & Preparation", description: "Scaffolding goes up safely, and any existing roof covering is stripped back so the timbers can be checked." },
    { title: "Building Your Roof", description: "Membrane, battens, tiles or slates, ridges, valleys, and leadwork are installed in sequence by our own crew." },
    { title: "Clean-Up & Handover", description: "We carry out a full quality check, clear the site completely, and hand over your written guarantee." },
  ],
  galleryItems: [
    { label: "Existing Slates Stripped Under Scaffold", category: "Strip-Off", bg: "from-slate-700 to-slate-900", image: "/016.jpg" },
    { label: "New Timber Lifted Onto the Scaffold", category: "Preparation", bg: "from-zinc-600 to-zinc-800", image: "/018.jpg" },
    { label: "Chimney Stack & Lead Flashing", category: "Leadwork", bg: "from-stone-600 to-stone-800", image: "/019.jpg" },
    { label: "New Battens Running the Length of the Roof", category: "Battening", bg: "from-slate-700 to-slate-900", image: "/023.jpg" },
    { label: "Battens Fixed Ahead of the New Slates", category: "Battening", bg: "from-zinc-600 to-zinc-800", image: "/020.jpg" },
    { label: "Breather Membrane & Battens Around Rooflight", category: "Membrane", bg: "from-stone-600 to-stone-800", image: "/021.jpg" },
    { label: "Slates Working Up Between Rooflights", category: "Slating", bg: "from-slate-700 to-slate-900", image: "/030.jpg" },
    { label: "New Slates Laid From the Eaves", category: "Slating", bg: "from-zinc-600 to-zinc-800", image: "/029.jpg" },
    { label: "New Slates Tied Into the Existing Roof", category: "Slating", bg: "from-stone-600 to-stone-800", image: "/017.jpg" },
    { label: "Front Slope Part-Slated", category: "Slating", bg: "from-slate-700 to-slate-900", image: "/025.jpg" },
    { label: "Eaves & Slate Detail Walkthrough", category: "Video", bg: "from-zinc-600 to-zinc-800", video: "/roof-video-4.mp4" },
    { label: "Slating Finished Beneath the Chimney Flashing", category: "Leadwork", bg: "from-stone-600 to-stone-800", image: "/024.jpg" },
    { label: "Crew Finishing the Front Slope", category: "Finishing", bg: "from-slate-700 to-slate-900", image: "/026.jpg" },
    { label: "Finished Slope With Rooflights", category: "Completed", bg: "from-zinc-600 to-zinc-800", image: "/022.jpg" },
    { label: "Dry Ridge & Rooflights From Above", category: "Completed", bg: "from-stone-600 to-stone-800", image: "/027.jpg" },
    { label: "Finished Slate Roof & Rooflight", category: "Completed", bg: "from-slate-700 to-slate-900", image: "/028.jpg" },
    { label: "Finished Slate Roof Walkthrough", category: "Video", bg: "from-zinc-600 to-zinc-800", video: "/roof-video-5.mp4" },
    { label: "Hip Roof Completed", category: "Completed", bg: "from-stone-600 to-stone-800", image: "/005.jpg" },
  ],
  faqs: [
    { question: "When should I get a new roof instead of repairing the old one?", answer: "If the damage is limited and the roof is otherwise sound, a repair is usually the right call. If leaks keep returning, the felt has perished, or problems are spread across the roof, a new roof is often better value. We'll give you an honest recommendation either way." },
    { question: "How long does a new roof take?", answer: "Most standard residential roofs take 2–5 days depending on size and complexity. Your quote will include an accurate timeframe for your property." },
    { question: "Which roofing material is best for my home?", answer: "It depends on your property style, roof structure, local planning requirements, and budget. We'll talk you through natural slate, clay tiles, and concrete tiles at the survey." },
    { question: "Do you work on new builds and extensions?", answer: "Yes. As well as replacing existing roofs, we can cover new builds and extensions. Share your plans with us and we'll quote for the roofing work." },
    { question: "Will I need to move out while the work is done?", answer: "Usually not. Most of the work takes place outside your home, and any open sections are covered with temporary weatherproofing before we leave each day." },
    { question: "Do I need planning permission for a new roof?", answer: "Like-for-like replacements don't usually need planning permission, though listed buildings and conservation areas can be an exception. We'll advise you during the survey." },
  ],
}

const relatedServices = [
  { name: "Roof Installation", href: "/services/roof-installation", description: "Complete roof replacements in slate, clay, and concrete tile." },
  { name: "Flat Roofing", href: "/services/flat-roofing", description: "GRP Fibreglass and EPDM Rubber systems for flat roofs." },
  { name: "Gutter Installation", href: "/services/gutter-installation", description: "Finish your new roof with a maintenance-free drainage system." },
]

export default function NewRoofingPage() {
  return (
    <ServiceDetailView service={service} serviceInfo={serviceInfo} ctaTitle="Start your new roof today.">
      <Section>
        <div className="space-y-12">
          <SectionHeader
            subtitle="More From JL Roofing"
            title="RELATED SERVICES."
            description="Need something different? Explore the other ways we can look after your property."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((related) => (
              <Link
                key={related.href}
                href={related.href}
                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-accent transition-all"
              >
                <h3 className="text-xl font-semibold tracking-tight text-primary group-hover:text-accent transition-colors">{related.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mt-2">{related.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" variant="outline" className="font-semibold group border-slate-300" asChild>
              <Link href="/services">
                View All Services
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </ServiceDetailView>
  )
}
