import type { Metadata } from "next"
import Link from "next/link"
import {
  AlertTriangle,
  BadgeCheck,
  Check,
  ClipboardCheck,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquareText,
  Phone,
  PoundSterling,
  ShieldCheck,
  Star,
} from "lucide-react"
import { FaqAccordion } from "@/components/FaqAccordion"
import { Footer } from "@/components/Footer"
import { LeadForm } from "@/components/roof-installation/LeadForm"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Roof Replacement Tyne & Wear | JL Roofcare LTD",
  description:
    "Tired of roof leaks and costly repairs? Get a FREE roof inspection and honest, no-obligation roof replacement quote across Tyne & Wear and the North East. 25+ years experience, fully insured, written guarantees.",
  alternates: { canonical: "https://www.jlroofcareltd.co.uk/services/roof-replacement" },
}

const PHONE_HREF = "tel:+447486494947"
const PHONE_LABEL = "07486 494947"
const WHATSAPP_HREF = "https://wa.me/447486494947"
const EMAIL = "info@jlroofing.co.uk"
const LEAD_SOURCE = "Roof Replacement"

const trustPoints = ["25+ Years Experience", "5000+ Happy Customers", "Fully Insured", "Written Guarantees"]

const worries = [
  "Tired of fixing the same roof leaks again and again?",
  "Worried that damaged tiles or an ageing roof could lead to expensive problems?",
  "Concerned about choosing the wrong roofer or paying more than expected?",
  "Unsure whether another repair is worth the money?",
]

const replacementServices = [
  {
    title: "Full Roof Replacement",
    desc: "Replace a worn-out or damaged roof with a durable slate or tile roofing system designed to keep your home protected.",
    image: "/roof-repair-2.jpg",
    alt: "Roofer fixing new tiles over fresh battens and membrane",
  },
  {
    title: "Flat Roof Replacement",
    desc: "Say goodbye to recurring flat roof problems with professionally installed GRP fibreglass or EPDM rubber roofing.",
    image: "/flat-roof-2.jpeg",
    alt: "Newly replaced flat roof on a home extension",
  },
  {
    title: "Complete Roof Replacement",
    desc: "When repairs are no longer practical, get a complete roofing solution with clear pricing, professional workmanship and a written guarantee.",
    image: "/030.jpg",
    alt: "New slates being laid between rooflights on a complete re-roof",
  },
]

const trustReasons = [
  { icon: Star, title: "5.0★ Google Rating", desc: "Rated by local customers." },
  { icon: MessageSquareText, title: "40 Google Reviews", desc: "Read genuine feedback from homeowners." },
  { icon: ShieldCheck, title: "£5 Million Insurance", desc: "Public liability cover for added peace of mind." },
  { icon: BadgeCheck, title: "Written Guarantees", desc: "Know what protection comes with your roofing work." },
  { icon: ClipboardCheck, title: "Free Roof Inspections", desc: "Get honest advice before making a decision." },
  { icon: PoundSterling, title: "No Hidden Costs", desc: "Understand the price before work begins." },
]

const included = [
  { title: "Roof Condition Assessment", desc: "Understand the visible condition of your existing roof." },
  { title: "Repair or Replace Advice", desc: "Find out which option makes more sense." },
  { title: "Roofing Material Guidance", desc: "Explore suitable slate, tile or flat roofing options." },
  { title: "Clear Written Quote", desc: "Understand the proposed work and cost before deciding." },
  { title: "No-Obligation Advice", desc: "Ask questions without pressure to proceed." },
]

const steps = [
  { title: "Request Your Free Inspection", desc: "Call, WhatsApp or complete the short enquiry form." },
  { title: "Get Honest Advice", desc: "We'll inspect your roof and explain the available options." },
  { title: "Receive Your Written Quote", desc: "Review the recommended work, price and expected timescale before making your decision." },
]

const areas = ["Newcastle", "Gateshead", "Sunderland", "Durham", "Chester-le-Street", "Washington"]

const faqs = [
  {
    question: "How much will my roof replacement cost?",
    answer: "Every roof is different. The price depends on its size, condition, materials and complexity. Our free inspection and written quote help you understand the cost before committing.",
  },
  {
    question: "Do I really need a new roof?",
    answer: "Not necessarily. Some roofing problems can be repaired. We'll assess your roof and explain whether repairs or replacement would be the better option.",
  },
  {
    question: "How long does roof replacement take?",
    answer: "It depends on the size and complexity of the roof, materials and weather conditions. We'll explain the expected timescale before starting.",
  },
  {
    question: "Is your roofing work guaranteed?",
    answer: "Yes. We provide written workmanship guarantees, with the applicable terms confirmed in your quotation.",
  },
]

const wrapper = "max-w-7xl mx-auto px-4 md:px-6"
const heading = "text-[clamp(2rem,4.4vw,3.4rem)] font-extrabold uppercase leading-[1] tracking-tight"

function CtaPair({ label, dark = false, className = "" }: { label: string; dark?: boolean; className?: string }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <Button size="lg" variant="whatsapp" className="h-13 px-8 font-semibold" asChild>
        <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="mr-2 w-5 h-5" />
          {label}
        </a>
      </Button>
      <Button
        size="lg"
        variant="outline"
        className={`h-13 px-8 font-semibold ${dark ? "border-white text-white hover:bg-white hover:text-primary" : "border-primary text-primary hover:bg-primary hover:text-white"}`}
        asChild
      >
        <a href={PHONE_HREF}>
          <Phone className="mr-2 w-5 h-5" />
          Call: {PHONE_LABEL}
        </a>
      </Button>
    </div>
  )
}

function CallLink({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href={PHONE_HREF}
      className={`inline-flex items-center gap-2 font-bold underline-offset-4 hover:underline ${dark ? "text-accent" : "text-accent-hover"}`}
    >
      <Phone className="w-4 h-4" />
      Call: {PHONE_LABEL}
    </a>
  )
}

export default function RoofReplacementLandingPage() {
  return (
    <div className="pt-20">
      {/* Hero + lead form */}
      <section className="relative isolate overflow-hidden bg-primary text-white">
        <img
          src="/025.jpg"
          alt="Front roof slope part-way through a slate roof replacement"
          width={2048}
          height={1152}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-10 w-full h-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/85 via-primary/70 to-primary/90 lg:bg-gradient-to-r lg:from-primary/95 lg:via-primary/75 lg:to-primary/40" />
        <div className={`${wrapper} grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center py-14 md:py-20`}>
          <div>
            <nav aria-label="Breadcrumb" className="mb-5 text-sm text-white/75">
              <Link href="/services" className="hover:text-white underline-offset-4 hover:underline">Services</Link>
              <span className="mx-2" aria-hidden>/</span>
              <span aria-current="page">Roof Replacement</span>
            </nav>
            <h1 className="text-[clamp(2.6rem,6.4vw,5rem)] font-black uppercase leading-[0.95] tracking-tight text-white">
              Roof Replacement – Tyne &amp; Wear
            </h1>
            <h2 className="mt-5 text-xl md:text-2xl font-bold text-accent">
              Tired of Roof Leaks and Costly Repairs? Get a Roof You Can Rely On.
            </h2>
            <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-white/85">
              Stop worrying every time it rains. Find out whether your old roof needs repairing or replacing with a{" "}
              <strong className="text-white">FREE roof inspection and honest, no-obligation quote</strong>.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {trustPoints.map((point) => (
                <li key={point} className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-bold backdrop-blur">
                  <Check className="w-4 h-4 text-accent" />
                  {point}
                </li>
              ))}
            </ul>
            <CtaPair label="Get My FREE Roof Quote" dark className="mt-8" />
            <p className="mt-4 text-sm font-semibold text-white/75">No Pressure. No Hidden Costs. Just Honest Advice.</p>
          </div>
          <LeadForm idPrefix="hero-lead" source={LEAD_SOURCE} />
        </div>
      </section>

      {/* Constant worry */}
      <section className="py-16 md:py-24">
        <div className={`${wrapper} grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-20 items-center`}>
          <div>
            <h2 className={heading}>Is Your Old Roof Becoming a Constant Worry?</h2>
            <ul className="mt-6 space-y-3">
              {worries.map((worry) => (
                <li key={worry} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <AlertTriangle className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                  <span className="font-semibold text-primary">{worry}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xl font-bold text-primary">You shouldn&apos;t have to worry about your roof every time the weather turns bad.</p>
            <p className="mt-3 text-slate-600">
              Repeated repairs can add up, and leaving serious damage unresolved may lead to further problems inside your home.
            </p>
            <p className="mt-3 text-slate-600">But replacing your entire roof isn&apos;t always necessary.</p>
            <p className="mt-3 text-slate-600">
              That&apos;s why we start with an honest inspection to help you understand your options.
            </p>
            <CtaPair label="Find Out What My Roof Needs" className="mt-8" />
          </div>
          <figure>
            <img
              src="/016.jpg"
              alt="Existing slates stripped back under scaffold ready for a new roof"
              width={1200}
              height={1600}
              loading="lazy"
              decoding="async"
              className="w-full aspect-[4/5] object-cover rounded-[2rem]"
            />
          </figure>
        </div>
      </section>

      {/* Replacement options */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className={wrapper}>
          <div className="max-w-3xl">
            <h2 className={heading}>
              Stop Paying for Temporary Fixes.{" "}
              <span className="text-accent-hover">(Find the Right Long-Term Solution.)</span>
            </h2>
            <p className="mt-5 text-lg text-slate-600">
              Whether your roof is ageing, leaking or badly damaged, JL Roofcare helps you make the right decision for your property and budget.
            </p>
          </div>
          <ul className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {replacementServices.map((service) => (
              <li key={service.title} className="flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-2 flex-1 text-slate-600">{service.desc}</p>
                  <div className="mt-5"><CallLink /></div>
                </div>
              </li>
            ))}
          </ul>
          <CtaPair label="Get My Free Roof Replacement Quote" className="mt-10 justify-center" />
        </div>
      </section>

      {/* Why trust */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className={wrapper}>
          <h2 className={`${heading} text-white max-w-3xl`}>Why Trust JL Roofcare LTD With Your Home?</h2>
          <ul className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustReasons.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center shadow-lg shadow-accent/30">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
                <p className="mt-2 text-white/70">{desc}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button size="lg" className="h-13 px-8 font-semibold" asChild>
              <a href={PHONE_HREF}><Phone className="mr-2 w-5 h-5" />Call: {PHONE_LABEL}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Free inspection & quote */}
      <section className="py-16 md:py-24">
        <div className={`${wrapper} grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-20 items-center`}>
          <figure className="order-last lg:order-first">
            <img
              src="/020.jpg"
              alt="New battens fixed ahead of the slates during a roof replacement"
              width={2048}
              height={1152}
              loading="lazy"
              decoding="async"
              className="w-full aspect-[4/3] object-cover rounded-[2rem]"
            />
          </figure>
          <div>
            <h2 className={heading}>Your FREE Roof Inspection &amp; Replacement Quote</h2>
            <p className="mt-5 text-lg text-slate-600">
              Before spending money on another repair or committing to a new roof, find out what your property actually needs.
            </p>
            <p className="mt-4 font-semibold text-primary">Here&apos;s what&apos;s included:</p>
            <ul className="mt-4 space-y-3">
              {included.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 shrink-0 text-accent-hover" />
                  <span className="text-slate-600">
                    <strong className="text-primary">{item.title}</strong> — {item.desc}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-2xl font-extrabold text-primary">Your Cost: £0</p>
            <p className="mt-1 text-slate-600">No obligation to book any roofing work.</p>
            <CtaPair label="Claim My Free Roof Inspection" className="mt-6" />
          </div>
        </div>
      </section>

      {/* 3 steps */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className={wrapper}>
          <h2 className={`${heading} max-w-3xl`}>Getting Started Is Easy</h2>
          <ol className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <li key={step.title} className="border-t-2 border-primary pt-5">
                <p className="font-display text-5xl font-black text-accent-hover tabular-nums">{i + 1}.</p>
                <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-slate-600">{step.desc}</p>
              </li>
            ))}
          </ol>
          <CtaPair label="Book My Free Roof Inspection" className="mt-10" />
        </div>
      </section>

      {/* Near me */}
      <section className="py-16 md:py-24">
        <div className={`${wrapper} grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-20 items-start`}>
          <div>
            <h2 className={heading}>Looking for Roof Replacement Near Me?</h2>
            <p className="mt-5 text-lg text-slate-600">
              JL Roofcare provides local roof replacement services across Newcastle, Gateshead, Sunderland, Durham, Chester-le-Street, Washington and surrounding North East areas.
            </p>
            <p className="mt-4 text-slate-600">
              Whether you&apos;re searching for <strong className="text-primary">roof replacement near me</strong>,{" "}
              <strong className="text-primary">flat roof replacement near me</strong> or a reliable team for a{" "}
              <strong className="text-primary">full roof replacement</strong>, we&apos;re ready to help.
            </p>
            <p className="mt-6 text-lg font-bold text-primary">Speak to a Local Roofer</p>
            <div className="mt-3">
              <Button size="lg" className="h-13 px-8 font-semibold" asChild>
                <a href={PHONE_HREF}><Phone className="mr-2 w-5 h-5" />Call: {PHONE_LABEL}</a>
              </Button>
            </div>
          </div>
          <ul className="flex flex-wrap gap-3 lg:pt-4">
            {areas.map((area) => (
              <li key={area} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 font-semibold text-primary">
                <MapPin className="w-4 h-4 text-accent" />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className={`${wrapper} grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-20 items-start`}>
          <div>
            <h2 className={heading}>Frequently Asked Questions</h2>
            <p className="mt-6 text-lg font-bold text-primary">Want to Ask More Question?</p>
            <div className="mt-3"><CallLink /></div>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-accent-hover text-white">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr]">
          <div className="px-4 md:px-12 lg:px-20 py-14 md:py-20 self-center">
            <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-black uppercase leading-[0.95] tracking-tight text-white">
              Don&apos;t Spend More on Roof Repairs Until You Know Your Options.
            </h2>
            <p className="mt-5 text-lg text-white/90">
              Your home deserves reliable protection, and you deserve to know exactly what you&apos;re paying for.
            </p>
            <p className="mt-2 text-white/90">
              Get a free inspection, honest advice and a clear roof replacement quote before making your decision.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button size="lg" variant="secondary" className="h-13 px-8 font-semibold" asChild>
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Get My FREE Roof Inspection
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 font-semibold border-white text-white hover:bg-white hover:text-accent-hover" asChild>
                <a href={PHONE_HREF}><Phone className="mr-2 w-5 h-5" />Call {PHONE_LABEL}</a>
              </Button>
            </div>
            <p className="mt-6 font-semibold">
              <Mail className="inline w-4 h-4 mr-2 -mt-0.5" />
              Email: <a href={`mailto:${EMAIL}`} className="underline underline-offset-4 hover:text-white/80">{EMAIL}</a>
            </p>
            <p className="mt-4 italic text-white/85">
              <strong>JL Roofcare</strong> - Local Roof Replacement Specialists Across the North East.
            </p>
          </div>
          <img
            src="/024.jpg"
            alt="New slating finished beneath the chimney lead flashing"
            width={1200}
            height={1600}
            loading="lazy"
            decoding="async"
            className="w-full h-72 md:h-full max-h-[38rem] object-cover"
          />
        </div>
      </section>

      {/* Closing lead form */}
      <section id="quote" className="relative isolate overflow-hidden bg-primary text-white py-16 md:py-24 scroll-mt-20">
        <img
          src="/022.jpg"
          alt=""
          width={2048}
          height={1152}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-10 w-full h-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-primary/70" />
        <div className={`${wrapper} grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center`}>
          <div>
            <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-black uppercase leading-[0.95] tracking-tight text-white">
              I guess what we&apos;re trying to say is that you should fill the damn Form
            </h2>
            <p className="mt-6 text-white/80">
              Prefer to talk? <a href={PHONE_HREF} className="font-bold text-accent underline-offset-4 hover:underline">Call {PHONE_LABEL}</a>{" "}
              or <Link href="/services" className="font-bold text-white underline underline-offset-4 hover:text-accent">browse all our roofing services</Link>.
            </p>
          </div>
          <LeadForm idPrefix="footer-lead" source={LEAD_SOURCE} />
        </div>
      </section>

      <Footer />
    </div>
  )
}
