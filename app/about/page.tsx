import Image from "next/image"
import { Section, SectionHeader } from "@/components/Section"
import {
  ShieldCheck, Users, Award, CheckCircle2,
  Star, Quote, Camera, BadgeCheck,
  ChevronRight, Phone
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
                Founded on the principle that good roofing work shouldn't be hard to find, JL Roofing began as a two-man operation in 2009. From day one, the rule was simple: every job is done as if it's your own home.
              </p>
              <p>
                We've grown steadily since then, not through aggressive marketing, but through word of mouth and repeat customers. That's the kind of growth that tells you something real about the work.
              </p>
              <p>
                Today, our team of eight covers everything from a slipped slate on a semi-detached to a full roof installation on a period farmhouse. The materials may change. The standard doesn't.
              </p>
              <p>
                We're fully insured, CHAS accredited, and BS 5534 compliant. But beyond the credentials, we're tradespeople who care deeply about the quality of what we leave behind.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <Users className="w-8 h-8 text-accent" />
                <h4 className="text-xl font-semibold">Local Team</h4>
                <p className="text-sm font-semibold text-slate-500">Based in the North East. Working across the region.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <Award className="w-8 h-8 text-accent" />
                <h4 className="text-xl font-semibold">Top Rated</h4>
                <p className="text-sm font-semibold text-slate-500">Consistently 5-star reviews from real customers.</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square rounded-[3rem] overflow-hidden">
            <Image src="/roof-install.jpg" alt="JL Roofing team at work" fill className="object-cover" />
            <div className="absolute inset-0 bg-primary/20" />
            <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/90 backdrop-blur-md shadow-xl border border-white space-y-1">
              <p className="font-semibold text-primary">500+ projects completed</p>
              <p className="text-sm font-bold text-slate-500">Across Newcastle, Gateshead, Sunderland, Durham & beyond</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section variant="dark" className="bg-secondary">
        <SectionHeader
          dark
          subtitle="Our Journey"
          title="15 YEARS IN THE MAKING."
          description="From one van and a passion for quality, to a trusted name across the North East."
        />
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 ${i % 2 === 0 ? "" : "lg:text-right"}`}
              >
                <div className={`${i % 2 === 0 ? "lg:pr-16" : "lg:order-2 lg:pl-16"} space-y-2`}>
                  <span className="inline-block px-3 py-1 rounded-full bg-accent text-white text-xs font-semibold uppercase tracking-wider">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-white/60 font-medium leading-relaxed">{item.desc}</p>
                </div>
                <div className={`hidden lg:flex ${i % 2 === 0 ? "lg:order-2 lg:pl-16" : "lg:pr-16 justify-end"} items-center`}>
                  <div className="w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/40" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section variant="muted">
        <SectionHeader
          centered
          subtitle="Our Values"
          title="WHAT DRIVES EVERY JOB."
          description="These aren't words on a wall. They're the standard we hold ourselves to on every single project."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm space-y-4 hover:border-accent/20 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">{value.title}</h3>
              <p className="text-slate-500 font-semibold leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section variant="default">
        <SectionHeader
          subtitle="The People"
          title="THE TEAM BEHIND THE WORK."
          description="Every job is done by our own employed team, no subcontractors, no strangers on your roof."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all">
              <div className="p-8 space-y-3">
                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-accent font-bold text-sm">{member.role}</p>
                  <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-1">{member.years} experience</p>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section variant="muted">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <SectionHeader
              subtitle="Standards & Accreditation"
              title="CREDENTIALS YOU CAN VERIFY."
              description="Our qualifications and insurance aren't just ticked boxes, they're the foundation of the trust our customers place in us."
              className="mb-0"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100">
                  <BadgeCheck className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-primary leading-tight">{cert.title}</p>
                    <p className="text-slate-500 font-medium text-sm mt-0.5">{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-12 rounded-[3rem] bg-accent text-white space-y-8">
            <ShieldCheck className="w-16 h-16" />
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">Fully Insured. Fully Accountable.</h3>
            <p className="text-base font-normal opacity-80 leading-relaxed">
              We carry £5 million public liability insurance and full employer's liability cover. Certificates are available on request before any work begins.
            </p>
            <div className="flex gap-3 flex-wrap pt-2">
              <span className="px-4 py-2 rounded-xl bg-white/20 font-semibold text-xs uppercase tracking-wide">JL Certified</span>
              <span className="px-4 py-2 rounded-xl bg-white/20 font-semibold text-xs uppercase tracking-wide">CHAS Approved</span>
              <span className="px-4 py-2 rounded-xl bg-white/20 font-semibold text-xs uppercase tracking-wide">BS 5534</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Gallery */}
      <Section variant="default" id="gallery">
        <div className="space-y-12">
          <SectionHeader
            subtitle="Our Work"
            title="PROJECT GALLERY."
            description="A selection of recently completed projects across the region, from single repairs to full roof transformations. Every job finished to the same high standard."
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
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <Camera className="w-16 h-16 text-white" />
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
          <div className="text-center pt-4 space-y-4">
            <p className="text-slate-500 font-semibold max-w-2xl mx-auto">
              These are just a selection of our recent work. We handle projects of all sizes across the North East, from a slipped slate to a complete roof transformation.
            </p>
            <Button size="lg" className="font-semibold group" asChild>
              <a href="https://wa.me/447486494947" target="_blank" rel="noopener noreferrer">
                Start Your Project
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
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
          description="We let the work speak for itself. Here's what some of our recent customers had to say."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm space-y-5 hover:shadow-lg transition-all">
              <div className="flex items-center gap-1">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-accent/20" />
              <p className="text-slate-600 font-medium leading-relaxed text-lg italic">
                &ldquo;{t.review}&rdquo;
              </p>
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
      <Section variant="accent">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Ready to work with us?
          </h2>
          <p className="text-sm md:text-base font-normal text-white/75 leading-relaxed max-w-xl mx-auto">
            Get a free, no-obligation quote from a team you can trust. We'll be with you from the first call to the final guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-12 px-8 font-semibold" asChild>
              <a href="tel:+447486494947">Call Us Direct</a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 font-semibold border-white text-white hover:bg-white hover:text-accent" asChild>
              <a href="https://wa.me/447486494947" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
