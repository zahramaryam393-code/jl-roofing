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
  Phone,
  PoundSterling,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react"
import { FaqAccordion } from "@/components/FaqAccordion"
import { LeadForm } from "@/components/roof-installation/LeadForm"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Roof Installation Tyne & Wear | JL Roofcare LTD",
  description:
    "Professional roof installation across Tyne & Wear and the North East, including slate, tile and flat roofing. 25+ years experience, written guarantees, free roof survey and no hidden costs.",
  alternates: { canonical: "https://www.jlroofcareltd.co.uk/services/roof-installation1" },
}

const PHONE_HREF = "tel:+447486494947"
const PHONE_LABEL = "07486 494947"
const WHATSAPP_HREF = "https://wa.me/447486494947"
const EMAIL = "info@jlroofing.co.uk"

const trustPoints = ["25+ Years Experience", "5000+ Happy Customers", "Fully Insured", "Written Guarantees"]

const worries = [
  "Worried about poor workmanship causing leaks later?",
  "Unsure which roofing material is right for your property?",
  "Concerned about unexpected costs or unreliable contractors?",
  "Want a roof that looks good and protects your home for years?",
]

const installServices = [
  {
    title: "Slate & Tile Roof Installation",
    desc: "Get a durable, attractive roof that complements your property and provides reliable protection against the British weather.",
    image: "/005.jpg",
    alt: "Completed hip roof installation",
  },
  {
    title: "Flat Roof Installation",
    desc: "Need a roof for an extension or garage? Our professional flat roof installation services include GRP fibreglass and EPDM rubber roofing systems.",
    image: "/flat-roof.jpg",
    alt: "Flat roof installation on an extension",
  },
  {
    title: "New Roofs for Homes & Extensions",
    desc: "From choosing materials to completing the installation, our experienced new roof installers make the process straightforward.",
    image: "/022.jpg",
    alt: "Finished new slate roof with rooflights",
  },
]

const reasons = [
  { icon: Wrench, title: "25+ Years Experience", desc: "Experienced roofers who understand the importance of quality workmanship." },
  { icon: Users, title: "5000+ Happy Customers", desc: "Helping homeowners across the North East with their roofing needs." },
  { icon: ShieldCheck, title: "£5 Million Public Liability Insurance", desc: "Added peace of mind while work is carried out on your property." },
  { icon: BadgeCheck, title: "Written Workmanship Guarantees", desc: "Your roofing work comes with a written guarantee, so you know what's covered." },
  { icon: ClipboardCheck, title: "Free Surveys & Honest Quotes", desc: "Understand your roofing options and costs before making a decision." },
  { icon: PoundSterling, title: "No Hidden Charges", desc: "Clear written pricing, with no unexpected surprises." },
]

const consultation = [
  { title: "Roofing Assessment", desc: "Understand the requirements of your property." },
  { title: "Material Recommendations", desc: "Explore suitable slate, tile or flat roofing options." },
  { title: "Clear Installation Quote", desc: "Know the expected cost before work begins." },
  { title: "Project Guidance", desc: "Understand the installation process and expected timescale." },
  { title: "No-Obligation Advice", desc: "Make your decision without pressure." },
]

const steps = [
  { title: "Request Your Free Quote", desc: "Call, WhatsApp or complete our short enquiry form." },
  { title: "Get Your Roof Survey & Plan", desc: "We'll discuss your project, assess your requirements and provide a clear written quote." },
  { title: "Enjoy Your Professionally Installed Roof", desc: "Our team completes the agreed installation with quality materials and guaranteed workmanship." },
]

const areas = ["Newcastle", "Gateshead", "Sunderland", "Durham", "Chester-le-Street", "Washington", "Whitley Bay"]

const faqs = [
  {
    question: "How much does a new roof installation cost?",
    answer: "The price depends on your roof's size, design, materials and installation requirements. We provide a free survey and clear written quote so you know what to expect.",
  },
  {
    question: "Which roofing material is best for my property?",
    answer: "It depends on your roof design, budget and preferences. We'll explain suitable slate, tile, GRP and EPDM options to help you make an informed decision.",
  },
  {
    question: "How long does a roof installation take?",
    answer: "Every project is different. We'll explain the expected installation timescale after assessing your requirements.",
  },
  {
    question: "Do you guarantee new roof installations?",
    answer: "Yes. Our new roof installations come with written guarantees. The applicable warranty terms will be explained in your quotation.",
  },
  {
    question: "Do you provide free quotes?",
    answer: "Yes. We offer free, no-obligation surveys and written quotations.",
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

export default function RoofInstallationLandingPage() {
  return (
    <div className="pt-20">
      {/* Hero + lead form */}
      <section className="relative isolate overflow-hidden bg-primary text-white">
        <img
          src="/026.jpg"
          alt="JL Roofing crew finishing a new slate roof"
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
              <span aria-current="page">Roof Installation</span>
            </nav>
            <h1 className="text-[clamp(2.6rem,6.4vw,5rem)] font-black uppercase leading-[0.95] tracking-tight text-white">
              Roof Installation – Tyne &amp; Wear
            </h1>
            <h2 className="mt-5 text-xl md:text-2xl font-bold text-accent">
              Getting a New Roof? Make Sure It&apos;s Done Right the First Time.
            </h2>
            <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-white/85">
              A new roof is a BIG Investment. You deserve one that looks great, protects your home and gives you peace of mind for years to come.
            </p>
            <p className="mt-3 max-w-xl text-base md:text-lg leading-relaxed text-white/85">
              You can get professional roof installation, including slate, tile and flat roofing, with clear pricing and guaranteed workmanship.
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
            <p className="mt-4 text-sm font-semibold text-white/75">Free Roof Survey • No Hidden Costs • No Obligation</p>
          </div>
          <LeadForm idPrefix="hero-lead" />
        </div>
      </section>

      {/* Worried about choosing the wrong installer */}
      <section className="py-16 md:py-24">
        <div className={`${wrapper} grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-20 items-center`}>
          <div>
            <h2 className={heading}>Worried About Choosing the Wrong Roof Installer?</h2>
            <p className="mt-5 text-lg text-slate-600">
              Installing a new roof shouldn&apos;t leave you wondering whether you&apos;ve made the right decision.
            </p>
            <ul className="mt-6 space-y-3">
              {worries.map((worry) => (
                <li key={worry} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <AlertTriangle className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                  <span className="font-semibold text-primary">{worry}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xl font-bold text-primary">Your new roof should give you peace of mind, not more problems.</p>
            <p className="mt-2 text-slate-600">
              That&apos;s why we help you choose the right roofing solution, explain your options and provide a clear written quote before work begins.
            </p>
            <CtaPair label="Get Expert Advice & a Free Quote" className="mt-8" />
          </div>
          <figure>
            <img
              src="/017.jpg"
              alt="New slates neatly tied into an existing roof"
              width={900}
              height={1600}
              loading="lazy"
              decoding="async"
              className="w-full aspect-[4/5] object-cover rounded-[2rem]"
            />
          </figure>
        </div>
      </section>

      {/* New roof installation services */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className={wrapper}>
          <div className="max-w-3xl">
            <h2 className={heading}>New Roof Installation That Protects Your Home for Years</h2>
            <p className="mt-5 text-lg text-slate-600">
              Whether you&apos;re building a new property, adding an extension or planning a new roofing project, JL Roofing helps you get the right roof for your needs.
            </p>
          </div>
          <ul className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {installServices.map((service) => (
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
          <CtaPair label="Request My Free Roof Installation Quote" className="mt-10 justify-center" />
        </div>
      </section>

      {/* Why homeowners choose us */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className={wrapper}>
          <h2 className={`${heading} text-white max-w-3xl`}>Why Homeowners Choose JL Roofcare LTD</h2>
          <ul className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center shadow-lg shadow-accent/30">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
                <p className="mt-2 text-white/70">{desc}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="text-lg font-bold">Speak to Our Roofing Team</p>
            <Button size="lg" className="h-13 px-8 font-semibold" asChild>
              <a href={PHONE_HREF}><Phone className="mr-2 w-5 h-5" />Call: {PHONE_LABEL}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Free survey */}
      <section className="py-16 md:py-24">
        <div className={`${wrapper} grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-20 items-center`}>
          <figure className="order-last lg:order-first">
            <img
              src="/027.jpg"
              alt="Finished roof with dry ridge and rooflights seen from above"
              width={2048}
              height={1152}
              loading="lazy"
              decoding="async"
              className="w-full aspect-[4/3] object-cover rounded-[2rem]"
            />
          </figure>
          <div>
            <h2 className={heading}>Get Your FREE New Roof Survey &amp; Installation Quote</h2>
            <p className="mt-5 text-lg text-slate-600">Before committing to a new roof, make sure you know exactly what you&apos;re getting.</p>
            <p className="mt-4 font-semibold text-primary">With your free consultation, you&apos;ll receive:</p>
            <ul className="mt-4 space-y-3">
              {consultation.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 shrink-0 text-accent-hover" />
                  <span className="text-slate-600">
                    <strong className="text-primary">{item.title}</strong> — {item.desc}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-lg font-bold text-primary">All at No Cost and No Obligation.</p>
            <CtaPair label="Claim My Free Roof Survey" className="mt-6" />
          </div>
        </div>
      </section>

      {/* 3 steps */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className={wrapper}>
          <h2 className={`${heading} max-w-3xl`}>Your New Roof in 3 Simple Steps</h2>
          <ol className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <li key={step.title} className="border-t-2 border-primary pt-5">
                <p className="font-display text-5xl font-black text-accent-hover tabular-nums">{i + 1}.</p>
                <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-slate-600">{step.desc}</p>
              </li>
            ))}
          </ol>
          <CtaPair label="Get Started With a Free Quote" className="mt-10" />
        </div>
      </section>

      {/* Near me */}
      <section className="py-16 md:py-24">
        <div className={`${wrapper} grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-20 items-start`}>
          <div>
            <h2 className={heading}>Looking for Roof Installation Near Me?</h2>
            <p className="mt-5 text-lg text-slate-600">
              If you&apos;re searching for <strong className="text-primary">roof installation near me</strong>,{" "}
              <strong className="text-primary">new roof installers</strong>, or <strong className="text-primary">new roof near me</strong>, JL Roofcare provides professional roofing services across the North East.
            </p>
            <p className="mt-4 text-slate-600">
              We cover Newcastle, Gateshead, Sunderland, Durham, Chester-le-Street, Washington, Whitley Bay and surrounding areas.
            </p>
            <p className="mt-4 text-slate-600">
              Need <strong className="text-primary">flat roof installers near me</strong>? Our team can help you choose a suitable roofing system for your extension, garage or property.
            </p>
            <CtaPair label="Get a Free Local Roofing Quote" className="mt-8" />
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
            <p className="mt-6 text-lg font-bold text-primary">Want to Know More 👇</p>
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
              Ready for a New Roof You Can Rely On?
            </h2>
            <p className="mt-5 text-lg text-white/90">Don&apos;t leave one of your home&apos;s biggest investments to chance.</p>
            <p className="mt-2 text-white/90">
              Get professional advice, transparent pricing and a roof installed with care by an experienced local team.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button size="lg" variant="secondary" className="h-13 px-8 font-semibold" asChild>
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Get My FREE Roof Installation Quote
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
            <p className="mt-4 italic text-white/85">JL Roofing - Professional Roof Installation Across Newcastle, Durham &amp; the North East.</p>
          </div>
          <img
            src="/016.jpg"
            alt="JL van parked outside a terraced house with roof scaffolding"
            width={1200}
            height={1600}
            loading="lazy"
            decoding="async"
            className="w-full h-72 md:h-full max-h-[38rem] object-cover object-[center_70%]"
          />
        </div>
      </section>

      {/* Closing lead form */}
      <section id="quote" className="relative isolate overflow-hidden bg-primary text-white py-16 md:py-24 scroll-mt-20">
        <img
          src="/028.jpg"
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
              I think what we&apos;re trying to say is that you should fill the damn Form
            </h2>
            <p className="mt-6 text-white/80">
              Prefer to talk? <a href={PHONE_HREF} className="font-bold text-accent underline-offset-4 hover:underline">Call {PHONE_LABEL}</a>{" "}
              or <Link href="/services" className="font-bold text-white underline underline-offset-4 hover:text-accent">browse all our roofing services</Link>.
            </p>
          </div>
          <LeadForm idPrefix="footer-lead" />
        </div>
      </section>

    </div>
  )
}
