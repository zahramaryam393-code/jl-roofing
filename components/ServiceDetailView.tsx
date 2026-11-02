import type { ReactNode } from "react"
import { Section, SectionHeader } from "@/components/Section"
import {
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  AlertTriangle,
  Camera,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FaqAccordion } from "@/components/FaqAccordion"
import type { ServiceData } from "@/lib/services-data"

export interface ServiceDetail {
  title: string
  description: string
  heroFeatures: {
    benefits: { title: string; desc: string }[]
    warnings: { title: string; desc: string }[]
  }
  difference: {
    title: string
    text: string
    features: { title: string; desc: string }[]
  }
  process: { step: string; title: string; desc: string }[]
  pricingFactors: string[]
  technical: string
  areas: string[]
}

interface ServiceDetailViewProps {
  service: ServiceDetail
  serviceInfo?: ServiceData
  ctaTitle?: string
  children?: ReactNode
}

export function ServiceDetailView({
  service,
  serviceInfo,
  ctaTitle = "Start your repair today.",
  children,
}: ServiceDetailViewProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section variant="dark" className="bg-secondary relative py-24 overflow-hidden">
        {serviceInfo?.heroImage && (
          <>
            <img src={serviceInfo.heroImage} alt={service.title} className="absolute inset-0 w-full h-full object-cover object-center" fetchPriority="high" />
            <div className="absolute inset-0 bg-secondary/85" />
          </>
        )}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-white uppercase tracking-wider">Fully Insured & Guaranteed</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="text-base md:text-lg text-white/70 font-normal max-w-2xl leading-relaxed">
              {service.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-5 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-white uppercase tracking-widest opacity-60">Key Benefits</h3>
                <ul className="space-y-4">
                  {service.heroFeatures.benefits.map((b, i) => (
                    <li key={i}>
                      <p className="font-semibold text-white leading-snug mb-1">{b.title}</p>
                      <p className="text-sm text-white/50">{b.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-5 p-8 rounded-3xl bg-accent/10 border border-accent/20 backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-white uppercase tracking-widest opacity-60 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-accent opacity-100" /> Warning Signs
                </h3>
                <ul className="space-y-4">
                  {service.heroFeatures.warnings.map((w, i) => (
                    <li key={i}>
                      <p className="font-semibold text-white leading-snug mb-1">{w.title}</p>
                      <p className="text-sm text-white/50">{w.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-12 px-8 font-semibold" asChild>
                <a href="tel:+447486494947">Get a Free Quote</a>
              </Button>
              <Button size="lg" variant="whatsapp" className="h-12 px-8 font-semibold" asChild>
                <a href="https://wa.me/447486494947">WhatsApp Us</a>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Difference Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <SectionHeader
              subtitle="The JL Standard"
              title={service.difference.title.toUpperCase()}
              description={service.difference.text}
              className="mb-0"
            />
            <div className="grid gap-4">
              {service.difference.features.map((f, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-primary">{f.title}</h4>
                    <p className="text-slate-500 text-sm mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-12 rounded-[3rem] bg-accent text-white space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">Fully Insured & 25-Year Guarantees</h3>
            <p className="text-base font-normal opacity-80 leading-relaxed">
              Every project is backed by our comprehensive insurance and long-term warranties. We don&apos;t just fix roofs; we build lasting trust.
            </p>
            <div className="pt-2 flex gap-3">
              <div className="px-4 py-2 rounded-xl bg-white/20 font-semibold text-xs uppercase tracking-wide">JL Certified</div>
              <div className="px-4 py-2 rounded-xl bg-white/20 font-semibold text-xs uppercase tracking-wide">Master Craftsman</div>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      {serviceInfo ? (
        <Section variant="dark" className="bg-secondary">
          <SectionHeader
            dark
            subtitle="Our Process"
            title="HOW IT WORKS."
            description="From your first call to the signed-off finish, here's exactly what to expect."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-4">
            {serviceInfo.steps.map((step, i) => (
              <div key={i} className="relative">
                {i < serviceInfo.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-full w-full h-px bg-white/10 z-0" />
                )}
                <div className="relative z-10 space-y-4">
                  <div className="w-10 h-10 rounded-full border border-accent/40 flex items-center justify-center text-accent font-bold text-sm shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="text-white/60 font-medium leading-relaxed text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      ) : (
        <Section variant="muted">
          <SectionHeader
            centered
            subtitle="How We Work"
            title="OUR 4-STEP PROCESS."
            description="Transparent, efficient, and professional. Here is how we ensure every project meets the JL Roofing standard."
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {service.process.map((p, i) => (
              <div key={i} className="relative p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="text-5xl font-bold text-slate-100 mb-6 leading-none">
                  {p.step}
                </div>
                <h4 className="text-xl font-semibold mb-3 tracking-tight text-primary">{p.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Technical & Pricing Grid */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 space-y-6">
            <h3 className="text-2xl font-bold tracking-tight text-primary">Technical Standards</h3>
            <p className="text-base text-slate-600 leading-relaxed">
              {service.technical}
            </p>
            <ul className="grid gap-3">
              {["BS 5534 Compliant", "Health & Safety Registered", "Full PPE & Safety Equipment", "Daily Site Cleanups"].map((t, i) => (
                <li key={i} className="flex gap-3 items-center text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-10 rounded-[3rem] bg-secondary text-white space-y-6">
            <h3 className="text-2xl font-bold tracking-tight">What Affects Cost?</h3>
            <p className="text-sm opacity-60 leading-relaxed">Transparency is key. Here are the variables we consider when providing your fixed-price quote:</p>
            <div className="grid gap-3">
              {service.pricingFactors.map((f: string, i: number) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-xs">
                    {i + 1}
                  </span>
                  <p className="font-medium text-sm">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Mini Gallery */}
      {serviceInfo && (
        <Section variant="muted">
          <div className="space-y-12">
            <SectionHeader
              subtitle="Our Work"
              title="RECENT PROJECTS."
              description={`A selection of our recent ${serviceInfo.title.toLowerCase()} work across the region.`}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceInfo.galleryItems.map((item, i) => (
                <div
                  key={i}
                  className={`relative group rounded-3xl overflow-hidden ${item.image || item.video ? "bg-slate-900" : `bg-gradient-to-br ${item.bg}`} aspect-[4/3] cursor-pointer`}
                >
                  {item.video ? (
                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label={item.label}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : item.image ? (
                    <img src={item.image} alt={item.label} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                      <Camera className="w-12 h-12 text-white" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              <Button size="lg" variant="outline" className="font-semibold group border-slate-300" asChild>
                <Link href="/about#gallery">
                  View Full Gallery
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </Section>
      )}

      {/* FAQs */}
      {serviceInfo && (
        <Section variant="default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <SectionHeader
                subtitle="Common Questions"
                title="FAQS."
                description={`Everything you need to know about our ${serviceInfo.title.toLowerCase()} service. Can't find your answer? Give us a call.`}
                className="mb-0"
              />
              <div className="space-y-3 pt-4">
                {[
                  { title: "Honest Advice, Always", desc: "We'll tell you if you don't need the work, and exactly why if you do." },
                  { title: "Fully Insured", desc: "Public liability and employer's liability insurance as standard." },
                  { title: "Written Guarantee", desc: "All major works backed by a formal written workmanship guarantee." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-primary">{item.title}</p>
                      <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8 lg:p-10">
              <FaqAccordion faqs={serviceInfo.faqs} />
            </div>
          </div>
        </Section>
      )}

      {/* Areas Covered Section */}
      <Section variant="muted">
        <div className="text-center space-y-8">
          <SectionHeader
            centered
            subtitle="Local Service"
            title="AREAS WE COVER."
            className="mb-8"
          />
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {service.areas.map((area: string, i: number) => (
              <div key={i} className="px-5 py-2.5 rounded-full bg-white border border-slate-200 font-semibold text-sm text-slate-600 shadow-sm hover:border-accent hover:text-accent transition-all">
                {area}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {children}

      {/* Final CTA */}
      <Section variant="accent">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            {ctaTitle}
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="h-12 px-8 font-semibold" asChild>
              <a href="tel:+447486494947">Get a Free Quote</a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 font-semibold border-white text-white hover:bg-white hover:text-accent" asChild>
              <a href="tel:+447486494947">Call Us Direct</a>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
