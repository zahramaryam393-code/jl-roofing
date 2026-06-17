import Image from "next/image"
import {
  ShieldCheck,
  Users,
  Award,
  CheckCircle2,
  Star,
  Quote,
  Camera,
  BadgeCheck,
  ChevronRight,
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/Section"

const timeline = [
  { year: "2009", title: "Founded", desc: "Joe Linden started JL Roofing with one van and a clear mission: do every job as if it were your own home." },
  { year: "2012", title: "Team Growth", desc: "Demand grew. The team expanded to four full-time roofers, taking on larger projects across Tyneside." },
  { year: "2015", title: "100 Roofs", desc: "Celebrated our 100th full roof installation. Expanded into modern flat roofing systems including GRP fibreglass." },
  { year: "2018", title: "8-Strong Team", desc: "Now covering all major roofing services across the North East, from storm repair to full roofline replacements." },
  { year: "2021", title: "500+ Customers", desc: "Reached the milestone of 500 satisfied customers. Introduced drone survey technology for hard-to-access roofs." },
  { year: "2024", title: "Next Generation", desc: "Upgraded to the latest GRP and EPDM flat roofing systems, offering 25+ year product warranties on every installation." },
]

const values = [
  { title: "Transparency", desc: "Clear, itemised quotes. No hidden costs, no surprise additions. The price we quote is the price you pay." },
  { title: "Reliability", desc: "We show up when we say we will and finish on schedule. Your time matters as much as your roof." },
  { title: "Craftsmanship", desc: "The right materials, installed properly. We don't rush and we don't cut corners, ever." },
  { title: "Honesty", desc: "If you don't need the work, we'll tell you. Our reputation is built on advice you can trust." },
  { title: "Safety", desc: "CSCS certified workforce, full PPE, and proper safe access on every job, no exceptions." },
  { title: "Aftercare", desc: "We don't disappear once the scaffold comes down. We're always on hand for questions and follow-ups." },
]

const team = [
  {
    name: "Joe Linden",
    role: "Founder & Lead Roofer",
    years: "15+ years",
    desc: "Started JL Roofing after a decade working for others and knowing there was a better way. Specialises in slate, heritage materials, and structural repairs.",
  },
  {
    name: "Mike Stevens",
    role: "Senior Installer",
    years: "12 years",
    desc: "Ten years with JL and the man behind many of our most complex installations. An expert in hip and valley roofwork and dry-fix systems.",
  },
  {
    name: "Dan Clarke",
    role: "Flat Roofing Specialist",
    years: "8 years",
    desc: "GRP fibreglass and EPDM certified. Dan handles all our extension, garage, and balcony roofing, every single sheet laid perfectly.",
  },
]

const certifications = [
  { title: "CHAS Accredited", desc: "Health & safety assessed and approved" },
  { title: "£5M Public Liability", desc: "Full insurance on every project" },
  { title: "BS 5534 Compliant", desc: "The UK standard for slating and tiling" },
  { title: "CSCS Certified", desc: "Every operative holds a valid CSCS card" },
  { title: "Checkatrade Member", desc: "Verified reviews from real customers" },
  { title: "Employer's Liability", desc: "Full workforce insurance as standard" },
]

const galleryItems = [
  { label: "New Slate Roof", category: "Installation", bg: "from-slate-700 to-slate-900", image: "/roof-install.jpg" },
  { label: "Roof Repair Completed", category: "Repair", bg: "from-zinc-600 to-zinc-800", image: "/roof-repair.jpg" },
  { label: "Flat Roof, GRP System", category: "Flat Roofing", bg: "from-stone-600 to-stone-800", image: "/flat-roof.jpg" },
  { label: "Chimney Repointed", category: "Chimney", bg: "from-slate-500 to-slate-700", image: "/chimney-repair.jpg" },
  { label: "Gutter System Installed", category: "Guttering", bg: "from-neutral-700 to-neutral-900", image: "/gutter-install.jpeg" },
  { label: "Pointing Completed", category: "Pointing", bg: "from-zinc-700 to-zinc-900", image: "/pointing.jpeg" },
  { label: "Roof Tiles Replaced", category: "Repair", bg: "from-slate-600 to-slate-800", image: "/roof-repair-2.jpg" },
  { label: "Moss-Free Roof", category: "Cleaning", bg: "from-stone-700 to-stone-900", image: "/roof-cleaning.webp" },
  { label: "Roof Inspection", category: "Inspection", bg: "from-zinc-500 to-zinc-700", image: "/roof-inspection.jpg" },
  { label: "Gutter Repair", category: "Guttering", bg: "from-neutral-600 to-neutral-800", image: "/gutter-repair.jpg" },
  { label: "Slate Installation", category: "Installation", bg: "from-slate-700 to-slate-900", image: "/roof-install-3.jpg" },
  { label: "Chimney Detail", category: "Chimney", bg: "from-zinc-600 to-zinc-900", image: "/chimney-repair-1.jpg" },
]

const testimonials = [
  {
    name: "Sarah M.",
    location: "Whitley Bay",
    review: "Had my full roof replaced after storm damage. JL Roofing were professional from the very first call right through to the final inspection. Everything done on time and the site was left spotless. Couldn't be happier.",
    stars: 5,
  },
  {
    name: "James T.",
    location: "Newcastle",
    review: "Called at 8am about a major leak coming through the ceiling. By midday they had it covered and had given me a full written quote. That kind of response is rare. Excellent from start to finish.",
    stars: 5,
  },
  {
    name: "Linda P.",
    location: "Gateshead",
    review: "Got three quotes for my flat roof conversion. JL weren't the cheapest, but their honesty won me over, they told me I didn't need the most expensive option. Work was brilliant and the guarantee gives me peace of mind.",
    stars: 5,
  },
  {
    name: "David H.",
    location: "Sunderland",
    review: "Gutters, fascias, and soffits all done in a single day. Spotless finish and they even cleaned the driveway before they left. Top-quality work at a fair price, already recommended them to my neighbours.",
    stars: 5,
  },
]

export default function AboutPage() {
  return (
    <>
      <div className="pt-20">

        {/* Hero */}
        <Section variant="dark" className="bg-secondary">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div className="space-y-6">
              <SectionHeader
                dark
                subtitle="Our Story"
                title="BUILT ON TRUST. PROVEN BY RESULTS."
                description="JL Roofing & Property Maintenance has been protecting homes across the North East for over 15 years. We started small, grew slowly, and never compromised on the one thing that matters most, the quality of the work."
                className="mb-0"
              />
              <div className="flex gap-4 flex-wrap pt-2">
                <Button size="lg" className="font-semibold" asChild>
                  <a href="tel:+447486494947">Get a Free Quote</a>
                </Button>
                <Button size="lg" variant="outline" className="font-semibold text-white border-white/30 hover:bg-white hover:text-secondary" asChild>
                  <a href="tel:+447486494947">
                    <Phone className="mr-2 w-5 h-5" />
                    Call Us
                  </a>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6 lg:text-right">
              {[
                { num: "15+", label: "Years in Business" },
                { num: "500+", label: "Happy Customers" },
                { num: "10yr", label: "Workmanship Guarantee" },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-3xl font-bold text-white tracking-tight">{stat.num}</p>
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Our Story */}
        <Section variant="default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <SectionHeader
                subtitle="Who We Are"
                title="A COMMITMENT TO EXCELLENCE."
                className="mb-0"
              />
              <div className="space-y-5 text-slate-600 font-medium leading-relaxed">
                <p>
                  Founded on the principle that good roofing work shouldn&apos;t be hard to find, JL Roofing began as a two-man operation in 2009. From day one, the rule was simple: every job is done as if it&apos;s your own home.
                </p>
                <p>
                  We&apos;ve grown steadily since then, not through aggressive marketing, but through word of mouth and repeat customers. That&apos;s the kind of growth that tells you something real about the work.
                </p>
                <p>
                  Today, our team of eight covers everything from a slipped slate on a semi-detached to a full roof installation on a period farmhouse. The materials may change. The standard doesn&apos;t.
                </p>
                <p>
                  We&apos;re fully insured, CHAS accredited, and BS 5534 compliant. But beyond the credentials, we&apos;re tradespeople who care deeply about the quality of what we leave behind.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <Users className="w-8 h-8 text-accent" />
                  <h4 className="text-xl font-semibold">Local Team</h4>
                  <p className="text-sm font-semibold text-slate-500">Based in the North East, serving the whole region</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <Award className="w-8 h-8 text-accent" />
                  <h4 className="text-xl font-semibold">Accredited</h4>
                  <p className="text-sm font-semibold text-slate-500">CHAS, BS 5534, CSCS certified workforce</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden">
              <Image src="/roof-install.jpg" alt="JL Roofing team at work" fill className="object-cover" />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
          </div>
        </Section>

        {/* Timeline */}
        <Section variant="muted">
          <SectionHeader
            centered
            subtitle="Our Journey"
            title="15 YEARS IN THE MAKING."
            description="From a single van to a full team, here's how JL Roofing grew into one of the North East's most trusted roofing companies."
          />
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={i} className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-last"}`}>
                  <div className={`p-8 rounded-3xl bg-white border border-slate-100 shadow-sm space-y-3 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="hidden md:flex justify-center">
                    <div className="w-4 h-4 rounded-full bg-accent border-4 border-white shadow-md z-10" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Values */}
        <Section variant="default">
          <SectionHeader
            centered
            subtitle="What We Stand For"
            title="OUR VALUES."
            description="Six principles that shape how we work on every single job, from the smallest repair to the largest installation."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4 hover:border-accent/20 transition-colors">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold">{v.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Team */}
        <Section variant="muted">
          <SectionHeader
            centered
            subtitle="The People"
            title="MEET THE TEAM."
            description="A small, experienced group of professionals who take pride in everything they do."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm space-y-5">
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-white font-bold text-xl italic">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-accent font-semibold text-sm">{member.role}</p>
                  <p className="text-slate-400 font-semibold text-xs mt-1">{member.years} experience</p>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">{member.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Certifications */}
        <Section variant="dark" className="bg-secondary">
          <SectionHeader
            dark
            centered
            subtitle="Credentials"
            title="FULLY CERTIFIED & INSURED."
            description="Every box ticked so you never have to worry."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                <BadgeCheck className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">{cert.title}</h4>
                  <p className="text-white/60 text-sm font-medium mt-1">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Gallery */}
        <Section variant="default" id="gallery">
          <SectionHeader
            centered
            subtitle="Our Work"
            title="RECENT PROJECTS."
            description="A selection of completed jobs across the North East. Every one of these was finished to our full standard."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className={`relative group rounded-2xl overflow-hidden ${item.image ? "bg-slate-900" : `bg-gradient-to-br ${item.bg}`} aspect-square`}
              >
                {item.image ? (
                  <Image src={item.image} alt={item.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <Camera className="w-10 h-10 text-white" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-accent text-white text-[10px] font-semibold uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <p className="text-white font-semibold text-xs leading-snug">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Testimonials */}
        <Section variant="muted">
          <SectionHeader
            centered
            subtitle="Customer Reviews"
            title="WHAT OUR CUSTOMERS SAY."
            description="Unedited reviews from real customers across the North East."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm space-y-5">
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

        {/* CTA */}
        <Section variant="accent" className="bg-accent relative">
          <div className="absolute top-0 right-0 p-24 opacity-10 pointer-events-none">
            <ShieldCheck className="w-64 h-64 rotate-12" />
          </div>
          <div className="text-center relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white leading-tight">
              Ready to talk about your roof?
            </h2>
            <p className="text-white/80 font-normal mb-10 max-w-xl mx-auto leading-relaxed">
              Get a free, no-obligation quote today. We&apos;ll visit your property, assess the work, and give you a clear written price with no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="h-12 px-8 font-semibold group" asChild>
                <a href="https://wa.me/447486494947" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp Us Now
                </a>
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

      </div>

      {/* Footer */}
      <footer className="bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white font-bold italic text-sm">
                  JL
                </div>
                <span className="font-bold text-lg tracking-tight">JL Roofing</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed font-medium">
                Expert roofing solutions across the North East. Fully insured, guaranteed work you can trust.
              </p>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://wa.me/447486494947"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 hover:bg-green-500 text-white text-sm font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="tel:+447486494947"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-bold text-white uppercase tracking-widest text-xs">Services</h4>
              <ul className="space-y-2.5">
                {[
                  "Roof Installation",
                  "Roof Repair",
                  "Flat Roofing",
                  "Gutter Installation",
                  "Chimney Repair",
                  "Roof Inspection",
                ].map((s) => (
                  <li key={s}>
                    <a
                      href="https://wa.me/447486494947"
                      className="text-white/60 hover:text-accent text-sm font-medium transition-colors flex items-center gap-1.5"
                    >
                      <ChevronRight className="w-3 h-3" />
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas */}
            <div className="space-y-4">
              <h4 className="font-bold text-white uppercase tracking-widest text-xs">Areas Covered</h4>
              <ul className="space-y-2.5">
                {["Newcastle", "Gateshead", "Sunderland", "Durham", "Whitley Bay", "North Shields"].map((area) => (
                  <li key={area} className="flex items-center gap-1.5 text-white/60 text-sm font-medium">
                    <MapPin className="w-3 h-3 text-accent" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-bold text-white uppercase tracking-widest text-xs">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">Phone</p>
                    <a href="tel:+447486494947" className="text-white/80 hover:text-accent text-sm font-semibold transition-colors">
                      +44 7486 494947
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">WhatsApp</p>
                    <a href="https://wa.me/447486494947" className="text-white/80 hover:text-accent text-sm font-semibold transition-colors">
                      Message Us Directly
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">Location</p>
                    <p className="text-white/80 text-sm font-semibold">North East, England</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm font-medium">
              &copy; {new Date().getFullYear()} JL Roofing &amp; Property Maintenance. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-white/40 text-sm font-medium">
              <ShieldCheck className="w-4 h-4 text-accent" />
              Fully Insured &middot; 10-Year Guarantee &middot; Free Quotes
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}