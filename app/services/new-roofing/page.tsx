import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Check, ChevronRight, Phone } from "lucide-react"
import { FaqAccordion } from "@/components/FaqAccordion"
import { Footer } from "@/components/Footer"
import { ProjectGallery, type GalleryStage } from "@/components/new-roofing/ProjectGallery"
import { RoofLayers } from "@/components/new-roofing/RoofLayers"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "New Roofing | JL Roofing & Property Maintenance",
  description:
    "New roofs for existing homes, extensions and new builds across the North East. Slate, clay and concrete tile roofing with free surveys and fixed-price quotes.",
}

const PHONE_HREF = "tel:+447486494947"
const PHONE_LABEL = "07486 494947"
const WHATSAPP_HREF = "https://wa.me/447486494947"

const benefits = [
  { title: "Complete roof systems", desc: "Timber, membrane, battens, tiles, and leadwork under one team." },
  { title: "Fixed-price quotes", desc: "A detailed, itemised price with no hidden extras." },
  { title: "Written guarantee", desc: "Your new roof is handed over with a written workmanship guarantee." },
]

const warnings = [
  { title: "Repeat repairs", desc: "Patching the same roof year after year is rarely good value." },
  { title: "Slipping tiles across the roof", desc: "Widespread movement points to failing fixings or battens." },
  { title: "Daylight in the loft", desc: "Gaps or perished felt mean the roof is no longer protecting your home." },
]

const steps = [
  { title: "Free roof survey", description: "We inspect your roof and loft space, measure up, and talk through what you want from your new roof." },
  { title: "Materials and quote", description: "We help you compare slate, clay, and concrete options, then provide a clear, itemised written quote." },
  { title: "Scaffold and preparation", description: "Scaffolding goes up safely, and any existing roof covering is stripped back so the timbers can be checked." },
  { title: "Building your roof", description: "Membrane, battens, tiles or slates, ridges, valleys, and leadwork are installed in sequence by our own crew." },
  { title: "Clean-up and handover", description: "We carry out a full quality check, clear the site completely, and hand over your written guarantee." },
]

const galleryStages: GalleryStage[] = [
  {
    title: "Strip-off and battens",
    photos: [
      { src: "/016.jpg", label: "Existing slates stripped under scaffold", width: 1200, height: 1600 },
      { src: "/018.jpg", label: "New timber lifted onto the scaffold", width: 1200, height: 1600 },
      { src: "/023.jpg", label: "New battens running the length of the roof", width: 1280, height: 960 },
      { src: "/020.jpg", label: "Battens fixed ahead of the new slates", width: 1280, height: 960 },
      { src: "/021.jpg", label: "Breather membrane and battens around rooflight", width: 900, height: 1600 },
    ],
  },
  {
    title: "Slates and leadwork",
    photos: [
      { src: "/030.jpg", label: "Slates working up between rooflights", width: 900, height: 1600 },
      { src: "/029.jpg", label: "New slates laid from the eaves", width: 900, height: 1600 },
      { src: "/017.jpg", label: "New slates tied into the existing roof", width: 900, height: 1600 },
      { src: "/025.jpg", label: "Front slope part-slated", width: 738, height: 1599 },
      { src: "/019.jpg", label: "Chimney stack and lead flashing", width: 1280, height: 960 },
      { src: "/024.jpg", label: "Slating finished beneath the chimney flashing", width: 960, height: 1280 },
      { src: "/roof-video-4.mp4", label: "Eaves and slate detail walkthrough", width: 474, height: 850, video: true },
    ],
  },
  {
    title: "Finished roofs",
    photos: [
      { src: "/026.jpg", label: "Crew finishing the front slope", width: 2048, height: 1152 },
      { src: "/022.jpg", label: "Finished slope with rooflights", width: 1600, height: 1200 },
      { src: "/027.jpg", label: "Dry ridge and rooflights from above", width: 2048, height: 1152 },
      { src: "/028.jpg", label: "Finished slate roof and rooflight", width: 2048, height: 1152 },
      { src: "/roof-video-5.mp4", label: "Finished slate roof walkthrough", width: 478, height: 850, video: true },
      { src: "/005.jpg", label: "Hip roof completed", width: 1536, height: 2048 },
    ],
  },
]

const pricingFactors = [
  "Size and pitch of the roof",
  "Material choice: natural slate, clay, or concrete",
  "Number of valleys, hips, dormers, and chimneys",
  "Condition of the existing timbers",
  "Scaffolding and access requirements",
]

const included = [
  { title: "Honest specification", desc: "We recommend the materials that suit your property and budget." },
  { title: "Single point of contact", desc: "Scaffolding, skips, and building regs are all organised for you." },
  { title: "Weather-protected site", desc: "Open sections are covered before we leave each day." },
]

const faqs = [
  { question: "When should I get a new roof instead of repairing the old one?", answer: "If the damage is limited and the roof is otherwise sound, a repair is usually the right call. If leaks keep returning, the felt has perished, or problems are spread across the roof, a new roof is often better value. We'll give you an honest recommendation either way." },
  { question: "How long does a new roof take?", answer: "Most standard residential roofs take 2–5 days depending on size and complexity. Your quote will include an accurate timeframe for your property." },
  { question: "Which roofing material is best for my home?", answer: "It depends on your property style, roof structure, local planning requirements, and budget. We'll talk you through natural slate, clay tiles, and concrete tiles at the survey." },
  { question: "Do you work on new builds and extensions?", answer: "Yes. As well as replacing existing roofs, we can cover new builds and extensions. Share your plans with us and we'll quote for the roofing work." },
  { question: "Will I need to move out while the work is done?", answer: "Usually not. Most of the work takes place outside your home, and any open sections are covered with temporary weatherproofing before we leave each day." },
  { question: "Do I need planning permission for a new roof?", answer: "Like-for-like replacements don't usually need planning permission, though listed buildings and conservation areas can be an exception. We'll advise you during the survey." },
]

const areas = ["Newcastle", "Gateshead", "Durham", "Sunderland", "North Shields", "South Shields", "Whitley Bay"]

const relatedServices = [
  { name: "Roof Installation", href: "/services/roof-installation", description: "Complete roof replacements in slate, clay, and concrete tile." },
  { name: "Flat Roofing", href: "/services/flat-roofing", description: "GRP Fibreglass and EPDM Rubber systems for flat roofs." },
  { name: "Gutter Installation", href: "/services/gutter-installation", description: "Finish your new roof with a maintenance-free drainage system." },
]

const wrapper = "max-w-7xl mx-auto px-4 md:px-6"
const eyebrow = "text-sm font-semibold text-accent-hover mb-3"
const heading = "text-[clamp(2.1rem,4.6vw,3.6rem)] font-extrabold uppercase leading-[0.98] tracking-tight"

export default function NewRoofingPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary text-white">
        <img
          src="/028.jpg"
          alt="Finished slate roof with a rooflight and brick chimney"
          width={2048}
          height={1152}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-10 w-full h-full object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary via-primary/55 to-primary/10 lg:bg-gradient-to-r lg:from-primary/95 lg:via-primary/60 lg:to-transparent" />
        <div className={`${wrapper} flex min-h-[min(calc(100svh-12rem),46rem)] flex-col justify-end pt-24 pb-12 md:pb-16`}>
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-white/75">
            <Link href="/services" className="hover:text-white underline-offset-4 hover:underline">Services</Link>
            <span className="mx-2" aria-hidden>/</span>
            <span aria-current="page">New Roofing</span>
          </nav>
          <h1 className="max-w-4xl text-[clamp(2.9rem,7.6vw,6.25rem)] font-black uppercase leading-[0.92] tracking-tight text-white">
            New roofing, built to protect your home for decades.
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-white/85">
            A complete new roof for your home, extension, or new build. We take care of everything from the first survey to the final clean-up, using premium slate, clay, or concrete tiles.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="h-13 px-8 font-semibold" asChild>
              <a href={PHONE_HREF}><Phone className="mr-2 w-4 h-4" />Get a Free Quote</a>
            </Button>
            <Button size="lg" variant="whatsapp" className="h-13 px-8 font-semibold" asChild>
              <a href={WHATSAPP_HREF}>WhatsApp Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-primary text-white border-t border-white/10">
        <ul className={`${wrapper} grid grid-cols-1 md:grid-cols-3 md:divide-x divide-y md:divide-y-0 divide-white/10`}>
          {benefits.map((b) => (
            <li key={b.title} className="py-6 md:px-8 md:first:pl-0 md:last:pr-0">
              <p className="font-display text-xl font-bold">{b.title}</p>
              <p className="mt-1 text-sm text-white/70">{b.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Replace or repair */}
      <section className="py-16 md:py-24">
        <div className={`${wrapper} grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-20 items-center`}>
          <figure className="order-last lg:order-first">
            <img
              src="/017.jpg"
              alt="New slates tied in beside weathered existing slates"
              width={900}
              height={1600}
              loading="lazy"
              decoding="async"
              className="w-full aspect-[4/5] object-cover object-center"
            />
            <figcaption className="mt-2 text-sm text-slate-500">New slates tied into an existing roof.</figcaption>
          </figure>
          <div>
            <p className={eyebrow}>Replace or repair?</p>
            <h2 className={heading}>Three signs it&apos;s time for a new roof.</h2>
            <ul className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
              {warnings.map((w) => (
                <li key={w.title} className="py-5">
                  <h3 className="text-xl font-bold">{w.title}</h3>
                  <p className="mt-1 text-slate-600">{w.desc}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-slate-600">
              If the damage is limited and the roof is otherwise sound, a repair is usually the right call.{" "}
              <Link href="/services/roof-repair" className="font-semibold text-accent-hover underline underline-offset-4">See roof repairs</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Roof layers */}
      <section className="bg-primary text-white py-16 md:py-24 overflow-hidden">
        <div className={wrapper}>
          <div className="max-w-3xl mb-10 md:mb-14">
            <p className="text-sm font-semibold text-accent mb-3">A new roof, done properly</p>
            <h2 className={`${heading} text-white`}>Every layer matters. See what you&apos;re paying for.</h2>
            <p className="mt-5 text-white/70 leading-relaxed">
              Your roof protects everything beneath it. We build the whole system properly and explain each decision as we go. Choose a layer to peel the roof back.
            </p>
          </div>
          <RoofLayers />
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className={wrapper}>
          <p className={eyebrow}>How it works</p>
          <h2 className={`${heading} max-w-3xl`}>From first call to final clean-up.</h2>
          <ol className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10">
            {steps.map((step, i) => (
              <li key={step.title} className="border-t-2 border-primary pt-4">
                <p className="font-display text-4xl font-black text-accent-hover tabular-nums">{i + 1}</p>
                <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 md:py-24 scroll-mt-20">
        <div className={wrapper}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
            <div className="max-w-3xl">
              <p className={eyebrow}>Our work</p>
              <h2 className={heading}>New roofs, from strip-off to ridge.</h2>
              <p className="mt-5 text-slate-600">Photos and video from our recent new roofing work across the region. Select any photo to see it in full.</p>
            </div>
            <Link href="/about#gallery" className="inline-flex items-center shrink-0 font-semibold text-accent-hover group">
              View full gallery
              <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <ProjectGallery stages={galleryStages} />
        </div>
      </section>

      {/* Cost and what's included */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className={`${wrapper} grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20`}>
          <div>
            <p className={eyebrow}>Your quote</p>
            <h2 className={heading}>What affects the cost?</h2>
            <p className="mt-5 text-slate-600">These are the things we look at when we prepare your fixed-price quote.</p>
            <ul className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
              {pricingFactors.map((factor) => (
                <li key={factor} className="py-3.5 font-medium text-primary">{factor}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className={eyebrow}>The JL standard</p>
            <h2 className={heading}>What every new roof includes.</h2>
            <ul className="mt-8 space-y-6">
              {included.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <Check className="w-5 h-5 mt-1 shrink-0 text-accent-hover" />
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-1 text-slate-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className={`${wrapper} grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-20 items-start`}>
          <div>
            <p className={eyebrow}>Common questions</p>
            <h2 className={heading}>New roof FAQs.</h2>
            <p className="mt-5 text-slate-600">
              Can&apos;t find your answer? Call us on{" "}
              <a href={PHONE_HREF} className="font-semibold text-accent-hover underline underline-offset-4 whitespace-nowrap">{PHONE_LABEL}</a>.
            </p>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* Areas and related services */}
      <section className="py-14 border-t border-slate-200">
        <div className={`${wrapper} grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20`}>
          <div>
            <h2 className="text-2xl font-extrabold">Areas we cover</h2>
            <p className="mt-3 text-slate-600">{areas.join(", ")}.</p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold">Related services</h2>
            <ul className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((related) => (
                <li key={related.href}>
                  <Link href={related.href} className="group block">
                    <span className="flex items-center gap-1 font-semibold text-primary group-hover:text-accent-hover transition-colors">
                      {related.name}
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                    <span className="mt-1 block text-sm text-slate-600">{related.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-accent-hover text-white">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr]">
          <div className="px-4 md:px-12 lg:px-20 py-14 md:py-20 self-center">
            <h2 className="text-[clamp(2.4rem,5.4vw,4.4rem)] font-black uppercase leading-[0.95] tracking-tight text-white">
              Start your new roof today.
            </h2>
            <p className="mt-4 text-white/90">Your survey and quote are free.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button size="lg" variant="secondary" className="h-13 px-8 font-semibold" asChild>
                <a href={PHONE_HREF}><Phone className="mr-2 w-4 h-4" />Call {PHONE_LABEL}</a>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 font-semibold border-white text-white hover:bg-white hover:text-accent-hover" asChild>
                <a href={WHATSAPP_HREF}>WhatsApp Us</a>
              </Button>
            </div>
          </div>
          <img
            src="/016.jpg"
            alt="JL van parked outside a terraced house with roof scaffolding"
            width={1200}
            height={1600}
            loading="lazy"
            decoding="async"
            className="w-full h-72 md:h-full max-h-[34rem] object-cover object-[center_70%]"
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}
