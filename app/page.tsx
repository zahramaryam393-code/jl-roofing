import Link from "next/link"
import Image from "next/image"
import {
  ShieldCheck,
  Clock,
  ThumbsUp,
  Phone,
  MessageCircle,
  ChevronRight,
  CheckCircle2,
  Hammer,
  Droplets,
  Home,
  Star,
  Camera,
  Quote,
  MapPin,
  FileText,
  HardHat,
  BadgeCheck,
  ClipboardList,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section, SectionHeader } from "@/components/Section"
import { FaqAccordion } from "@/components/FaqAccordion"

const howItWorksSteps = [
  { icon: <Phone className="w-7 h-7" />, title: "Get In Touch", desc: "Call, WhatsApp, or fill out our contact form. We respond within a few hours." },
  { icon: <ClipboardList className="w-7 h-7" />, title: "Free Survey", desc: "We visit your property for a thorough roof inspection — completely free." },
  { icon: <FileText className="w-7 h-7" />, title: "Clear Quote", desc: "You receive a detailed written quote with no hidden costs or jargon." },
  { icon: <HardHat className="w-7 h-7" />, title: "Work Begins", desc: "Our team arrives on time and works to the highest standard throughout." },
  { icon: <BadgeCheck className="w-7 h-7" />, title: "Guaranteed", desc: "We clean up fully and hand over your written workmanship guarantee." },
]

const testimonials = [
  {
    name: "Sarah M.",
    location: "Whitley Bay",
    review: "Professional from the first call to the final inspection. Everything done on time and the site was spotless.",
    stars: 5,
  },
  {
    name: "James T.",
    location: "Newcastle",
    review: "Called at 8am about a major leak. By midday they had it covered and given me a full repair quote. Brilliant.",
    stars: 5,
  },
  {
    name: "David H.",
    location: "Sunderland",
    review: "Gutters, fascias, and soffits all done in one day. Spotless finish — already recommended them to my neighbours.",
    stars: 5,
  },
]

const galleryTeaser = [
  { label: "New Roof Completed", category: "Installation", bg: "from-slate-700 to-slate-900", image: "/roof-install.jpg" },
  { label: "Flat Roof System", category: "Flat Roofing", bg: "from-zinc-600 to-zinc-800", image: "/flat-roof.jpg" },
  { label: "Chimney Repointed", category: "Chimney", bg: "from-stone-600 to-stone-800", image: "/chimney-repair.jpg" },
  { label: "Gutters Replaced", category: "Guttering", bg: "from-neutral-700 to-neutral-900", image: "/gutter-install.jpeg" },
]

const areas = [
  "Newcastle", "Gateshead", "Sunderland", "Durham", "North Shields",
  "South Shields", "Whitley Bay", "Cramlington", "Blyth", "Consett",
  "Chester-le-Street", "Washington",
]

export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_70%)] blur-3xl transform -translate-y-1/2 scale-150" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-white/80 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-accent" />
              Fully Insured &amp; Guaranteed Work
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight lg:max-w-3xl">
              Expert <span className="text-accent italic">Roofing</span> Solutions.
            </h1>
            <p className="text-sm md:text-base text-white/65 font-normal max-w-lg leading-relaxed">
              From minor repairs to full roof replacements — quality craftsmanship that protects your home for decades, backed by a written guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button size="lg" className="h-12 px-8 font-semibold group" asChild>
                <a href="https://api.whatsapp.com/send/?phone=447486494947&text=I+came+from+your+google+ads&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                  Get a Free Quote
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="whatsapp" className="h-12 px-8 font-semibold" asChild>
                <a href="https://wa.me/447486494947">
                  <MessageCircle className="mr-2 w-4 h-4" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10">
              {[
                { num: "15+", label: "Years Experience" },
                { num: "500+", label: "Happy Customers" },
                { num: "100%", label: "Satisfaction Rate" },
                { num: "24/7", label: "Emergency Repairs" },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-2xl font-bold text-white tracking-tight">{stat.num}</p>
                  <p className="text-xs font-medium text-white/50 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-accent py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {[
              { icon: <Clock className="w-6 h-6" />, title: "QUICK RESPONSE", sub: "Emergency repairs within 24 hours" },
              { icon: <ShieldCheck className="w-6 h-6" />, title: "FULLY GUARANTEED", sub: "10-25 year warranty on all new roofs" },
              { icon: <ThumbsUp className="w-6 h-6" />, title: "FREE INSPECTION", sub: "No-obligation surveys & honest advice" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-white">
                <div className="p-3 rounded-2xl bg-white/20">{item.icon}</div>
                <div>
                  <p className="font-semibold leading-tight">{item.title}</p>
                  <p className="text-sm font-normal opacity-80">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <Section variant="muted" id="services">
        <SectionHeader
          subtitle="Our Services"
          title="COMPLETE ROOFING SOLUTIONS."
          description="We cover every aspect of roofing and property maintenance, ensuring your home remains safe, dry, and looking its best."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Home className="w-8 h-8" />, title: "Roof Installation", slug: "roof-installation", image: "/roof-install.jpg", desc: "High-quality slate and tile roof installations using the latest materials and techniques." },
            { icon: <Hammer className="w-8 h-8" />, title: "Roof Repair", slug: "roof-repair", image: "/roof-repair.jpg", desc: "From slipped tiles to major leaks, we fix all roofing issues quickly and efficiently." },
            { icon: <Droplets className="w-8 h-8" />, title: "Flat Roofing", slug: "flat-roofing", image: "/flat-roof.jpg", desc: "Durable GRP fibreglass and EPDM rubber roofing solutions for extensions and garages." },
            { icon: <ShieldCheck className="w-8 h-8" />, title: "Gutter Installation", slug: "gutter-installation", image: "/gutter-install.jpeg", desc: "Modern uPVC roofline replacements that are maintenance-free and look great." },
            { icon: <Star className="w-8 h-8" />, title: "Chimney Repair", slug: "chimney-repair", image: "/chimney-repair.jpg", desc: "Professional repointing, leadwork, and structural repairs for all types of chimneys." },
            { icon: <CheckCircle2 className="w-8 h-8" />, title: "Roof Inspection", slug: "roof-inspection", image: "/roof-inspection.jpg", desc: "Comprehensive surveys to identify potential issues before they become expensive problems." },
          ].map((service, i) => (
            <Link
              key={i}
              href={`/services/${service.slug}`}
              className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6">
                <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4 tracking-tight group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-slate-500 font-normal leading-relaxed mb-6">{service.desc}</p>
              <div className="flex items-center text-sm font-semibold text-accent uppercase tracking-wide">
                Learn More
                <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button size="lg" variant="outline" className="font-semibold border-slate-300 group" asChild>
            <Link href="/services">
              View All Services
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* How It Works */}
      <Section variant="dark" className="bg-secondary">
        <SectionHeader
          dark
          subtitle="Our Process"
          title="HOW IT WORKS."
          description="Five straightforward steps from your first contact to a guaranteed finish. No surprises, no hassle."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {howItWorksSteps.map((step, i) => (
            <div key={i} className="relative">
              {i < howItWorksSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-white/10 z-0" />
              )}
              <div className="relative z-10 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-white shadow-lg shadow-accent/30 shrink-0">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-bold text-white/10 leading-none">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-white/60 font-medium leading-relaxed text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-[3rem] overflow-hidden">
            <Image src="/roof-install.jpg" alt="JL Roofing team at work" fill className="object-cover" />
            <div className="absolute inset-0 bg-primary/20" />
            <div className="absolute bottom-8 left-8 right-8 p-8 rounded-3xl bg-white/90 backdrop-blur-md shadow-xl border border-white">
              <div className="flex gap-4 items-center">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="w-12 h-12 rounded-full bg-accent border-4 border-white flex items-center justify-center text-white font-bold text-xs italic">
                      JL
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-primary leading-tight">500+ Happy Clients</p>
                  <p className="text-sm font-bold text-slate-500">Across the local region</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <SectionHeader
              subtitle="The JL Standard"
              title="WHY CHOOSE JL ROOFING?"
              description="We pride ourselves on delivering a level of service that's hard to find in the trade. Honesty, quality, and transparency are at the core of everything we do."
              className="mb-0"
            />
            <div className="space-y-5">
              {[
                { title: "Honest Inspections", desc: "We never recommend work that isn't necessary. You get an honest appraisal every time, with no pressure." },
                { title: "Expert Craftsmanship", desc: "All our roofers are highly trained and follow strict quality standards. Your roof is treated as if it were our own." },
                { title: "No Hidden Costs", desc: "The price we quote is the price you pay. No surprises or hidden extras — ever." },
                { title: "Fully Insured & Guaranteed", desc: "£5 million public liability insurance and written workmanship guarantees of up to 10 years on every job." },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-accent/20 transition-colors">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-1">{item.title}</h4>
                    <p className="text-slate-500 font-semibold leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button size="lg" className="font-semibold group" asChild>
              <Link href="/about">
                Read Our Story
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section variant="muted">
        <SectionHeader
          centered
          subtitle="Customer Reviews"
          title="WHAT OUR CUSTOMERS SAY."
          description="We let the work speak for itself. Straight from real customers, no edits."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm space-y-5 hover:shadow-lg transition-all">
              <div className="flex items-center gap-1">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <Quote className="w-7 h-7 text-accent/20" />
              <p className="text-slate-600 font-medium leading-relaxed italic">&ldquo;{t.review}&rdquo;</p>
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm italic">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-primary leading-snug">{t.name}</p>
                  <p className="text-sm font-bold text-slate-400">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Gallery Teaser */}
      <Section variant="default">
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeader
              subtitle="Our Work"
              title="RECENT PROJECTS."
              description="A snapshot of recently completed jobs. Click to see the full gallery."
              className="mb-0"
            />
            <Button size="lg" variant="outline" className="font-semibold border-slate-300 group shrink-0" asChild>
              <Link href="/about#gallery">
                View All Projects
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryTeaser.map((item, i) => (
              <Link
                key={i}
                href="/about#gallery"
                className={`relative group rounded-3xl overflow-hidden ${item.image ? "bg-slate-900" : `bg-gradient-to-br ${item.bg}`} aspect-square`}
              >
                {item.image ? (
                  <Image src={item.image} alt={item.label} fill className="object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center opacity-15">
                    <Camera className="w-12 h-12 text-white" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-accent text-white text-[10px] font-semibold uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <p className="text-white font-semibold text-sm leading-snug">{item.label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="muted">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <SectionHeader
              subtitle="Support"
              title="FREQUENTLY ASKED QUESTIONS."
              description="Common questions before you call. Can't find your answer? We're always happy to chat."
              className="mb-0"
            />
            <div className="space-y-4 pt-2">
              {[
                { title: "Free Quotes", desc: "No-obligation surveys and written quotes at no charge." },
                { title: "Written Guarantee", desc: "All works backed by a formal workmanship guarantee." },
                { title: "Fully Insured", desc: "£5m public liability on every single job." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-primary">{item.title}</p>
                    <p className="text-slate-500 font-medium text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <FaqAccordion />
          </div>
        </div>
      </Section>

      {/* Areas Covered */}
      <Section variant="default">
        <div className="text-center space-y-10">
          <SectionHeader
            centered
            subtitle="Coverage"
            title="AREAS WE COVER."
            description="We serve homeowners and businesses across the North East. If you're not listed, give us a call — we likely cover your area."
          />
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {areas.map((area, i) => (
              <div key={i} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 font-bold text-slate-600 text-sm hover:border-accent hover:text-accent transition-all cursor-default">
                <MapPin className="w-4 h-4" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="accent" className="relative">
        <div className="absolute top-0 right-0 p-24 opacity-10 pointer-events-none">
          <ShieldCheck className="w-64 h-64 rotate-12" />
        </div>
        <div className="text-center relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            Ready to protect your home?
          </h2>
          <p className="text-sm md:text-base text-white/80 font-normal mb-10 max-w-xl mx-auto leading-relaxed">
            Don&apos;t wait for a small leak to become a major problem. Get your free, no-obligation quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-12 px-8 font-semibold group" asChild>
              <Link href="/contact">
                Get Started Now
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 font-semibold border-white text-white hover:bg-white hover:text-accent" asChild>
              <a href="tel:+447486494947">
                <Phone className="mr-2 w-4 h-4" />
                Call Us Direct
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
