export type Faq = {
  question: string
  answer: string
}

export type ServiceStep = {
  title: string
  description: string
}

export type GalleryItem = {
  label: string
  category: string
  bg: string
  image?: string
}

export type ServiceData = {
  title: string
  slug: string
  iconName: string
  tagline: string
  description: string
  longDescription: string
  heroImage: string
  features: string[]
  steps: ServiceStep[]
  galleryItems: GalleryItem[]
  faqs: Faq[]
}

export const servicesData: ServiceData[] = [
  {
    title: "Roof Installation",
    slug: "roof-installation",
    iconName: "Home",
    heroImage: "/roof-install.jpg",
    tagline: "Built right from day one.",
    description: "Expert installation of new roofs using high-quality slate, tile, or modern materials. Built to last with long-term guarantees.",
    longDescription: "Whether you're replacing a failing roof or covering a new build, a quality installation makes the difference between a roof that lasts 50 years and one that causes problems within five. We use only premium materials, work to strict industry standards, and back every job with a written workmanship guarantee.",
    features: ["Slate Roofing", "Tiled Roofing", "Structural Work", "Felt & Batten", "Ridge & Hip Work", "Leadwork & Valleys"],
    steps: [
      { title: "Survey & Planning", description: "We assess your existing structure, take accurate measurements, and discuss your material preferences and budget." },
      { title: "Material Selection", description: "Choose from natural slate, clay tiles, concrete tiles, or modern alternatives — we guide you to what suits your property." },
      { title: "Scaffolding & Strip-Off", description: "Safe scaffolding is erected and all existing roofing is carefully stripped back to the timber structure." },
      { title: "Full Installation", description: "Felt, batten, and your chosen tiles or slates are installed to strict standards, with all flashings and leadwork completed." },
      { title: "Inspection & Sign-Off", description: "We carry out a full quality check, clear the site completely, and hand over your written guarantee on the day." },
    ],
    galleryItems: [
      { label: "New Slate Roof Completed", category: "Installation", bg: "from-slate-700 to-slate-900", image: "/roof-install.jpg" },
      { label: "Ridge Tile Bedding & Pointing", category: "Ridge Work", bg: "from-zinc-600 to-zinc-800", image: "/roof-install-3.jpg" },
      { label: "Felt & Batten Layer", category: "Prep Work", bg: "from-stone-600 to-stone-800" },
      { label: "Hip Roof Completion", category: "Hip Roofing", bg: "from-slate-500 to-slate-700" },
      { label: "Lead Valley Detail", category: "Leadwork", bg: "from-neutral-700 to-neutral-900" },
      { label: "Tiled Roof — Side Elevation", category: "Tile Work", bg: "from-zinc-700 to-zinc-900" },
    ],
    faqs: [
      { question: "How long does a full roof installation take?", answer: "Most standard residential roofs take 2–5 days depending on size and complexity. We'll give you an accurate timeframe in your quote." },
      { question: "What roofing materials do you work with?", answer: "We install natural and synthetic slate, clay and concrete tiles, and provide full leadwork, valleys, and ridge finishing in all materials." },
      { question: "Do I need planning permission for a new roof?", answer: "In most cases, like-for-like replacements don't require planning permission. Exceptions include listed buildings and conservation areas — we'll advise you during the survey." },
      { question: "What does your workmanship guarantee cover?", answer: "Our workmanship guarantee covers installation defects for up to 10 years. Materials also carry manufacturer warranties, which we register on your behalf." },
      { question: "Will my home be watertight during the work?", answer: "Yes. If work spans multiple days, we apply temporary weatherproof felt covering to every open section before we leave each day." },
      { question: "How do I choose the right material for my property?", answer: "We advise based on your existing roof structure, property style, local planning requirements, and your budget. We'll always give you an honest recommendation." },
    ],
  },
  {
    title: "Roof Repair",
    slug: "roof-repair",
    iconName: "Hammer",
    heroImage: "/roof-repair.jpg",
    tagline: "Fast, honest, and done properly.",
    description: "Fast and reliable repairs for leaks, storm damage, and wear-and-tear. We restore your roof's integrity quickly.",
    longDescription: "A roof leak rarely fixes itself. Left unattended, a small issue becomes damp walls, damaged ceilings, and rot in the timber structure. We locate the true source of the problem — which is often not where the water appears indoors — and fix it properly the first time.",
    features: ["Leak Detection", "Tile Replacement", "Storm Damage", "Leadwork", "Ridge Repairs", "Valley Re-lining"],
    steps: [
      { title: "Emergency Cover", description: "If needed, we apply temporary weatherproof covering immediately to prevent further water ingress while we assess the full picture." },
      { title: "Full Diagnosis", description: "We locate the exact source of the problem — tracing from the entry point upward through flashings, tiles, valleys, and the ridge." },
      { title: "Detailed Quote", description: "You receive a clear, itemised quote for the repair needed, with honest advice on whether repair or replacement is the right call." },
      { title: "Repair Work", description: "From a single slate replacement to a full ridge re-bed, we fix the cause — not just the symptom — using matching materials wherever possible." },
      { title: "Final Check", description: "Every repair is inspected from both inside and outside before we leave, and we confirm the problem is fully resolved." },
    ],
    galleryItems: [
      { label: "Tile Replacement Completed", category: "Tile Repair", bg: "from-slate-700 to-slate-900", image: "/roof-repair.jpg" },
      { label: "Lead Flashings Renewed", category: "Leadwork", bg: "from-zinc-600 to-zinc-800", image: "/roof-repair-2.jpg" },
      { label: "Storm Damage Repaired", category: "Storm Repair", bg: "from-stone-600 to-stone-800", image: "/roof-repair-3.jpg" },
      { label: "Ridge Tile Re-Bedded", category: "Ridge Repair", bg: "from-slate-500 to-slate-700", image: "/roof-repair-4.jpg" },
      { label: "Slipped Slate Fixed", category: "Slate Repair", bg: "from-neutral-700 to-neutral-900" },
      { label: "Leak Source Identified", category: "Investigation", bg: "from-zinc-700 to-zinc-900" },
    ],
    faqs: [
      { question: "How quickly can you respond to a roof leak?", answer: "For serious leaks we aim to attend the same day or within 24 hours. For non-urgent repairs, we're usually with you within 2–3 working days." },
      { question: "How do you find the source of a leak?", answer: "We trace from the point where water enters — upward. Leaks often travel along rafters before appearing indoors, so the visible damp spot is rarely where the problem actually is." },
      { question: "Can you repair any type of roofing material?", answer: "Yes — we repair slate, concrete and clay tiles, felt, flat roofing membranes, leadwork, and mortar bedding." },
      { question: "How do I know if I need a repair or full replacement?", answer: "If the damage is localised and the rest of the roof is structurally sound, repair is the right call. If damage is widespread or the roof is over 20–25 years old, we'll tell you honestly." },
      { question: "Do you offer emergency callouts?", answer: "Yes. For serious storm damage or large leaks we offer an emergency response service. Call us directly and we'll do our best to attend the same day." },
      { question: "Will the repaired area match the rest of my roof?", answer: "We source matching materials wherever possible. On older roofs, some colour difference due to weathering is natural and typically blends over time." },
    ],
  },
  {
    title: "Flat Roofing",
    slug: "flat-roofing",
    iconName: "Droplets",
    heroImage: "/flat-roof.jpg",
    tagline: "Modern systems built to outlast the alternatives.",
    description: "Modern flat roofing solutions including GRP Fibreglass and EPDM Rubber. Durable and maintenance-free.",
    longDescription: "Old felt flat roofs have a lifespan of around 10–15 years. Modern GRP fibreglass and EPDM rubber systems last 25 years or more with minimal maintenance, and come with long product warranties. We survey, specify, and install the right system for your property — from a small bay window to a full extension or garage roof.",
    features: ["GRP Fibreglass", "EPDM Rubber", "Balcony Roofing", "Extension Roofs", "Drainage & Upstands", "Roof Lights"],
    steps: [
      { title: "Survey & Measurement", description: "We assess the existing surface, check the structural deck, and measure the falls and drainage points." },
      { title: "System Recommendation", description: "We recommend GRP or EPDM based on your roof area, intended use, access requirements, and budget." },
      { title: "Strip & Deck Preparation", description: "Old felt or existing surface is removed and the plywood deck is inspected and replaced where necessary before any new membrane goes down." },
      { title: "Membrane Installation", description: "The chosen system is laid and fully bonded, with all upstands, drains, edges, and trims finished to the manufacturer's specification." },
      { title: "Testing & Sign-Off", description: "Drainage is flow-tested, the product warranty is registered in your name, and our workmanship guarantee is issued." },
    ],
    galleryItems: [
      { label: "GRP Fibreglass Roof Installed", category: "GRP Fibreglass", bg: "from-slate-700 to-slate-900", image: "/flat-roof.jpg" },
      { label: "EPDM Rubber Roof", category: "EPDM Rubber", bg: "from-zinc-600 to-zinc-800", image: "/flat-roof-2.jpeg" },
      { label: "Extension Flat Roof", category: "Extensions", bg: "from-stone-600 to-stone-800", image: "/flat-roof-3.jpg" },
      { label: "Roof Terrace Completed", category: "Balcony", bg: "from-slate-500 to-slate-700" },
      { label: "Upstand & Edge Detail", category: "Detailing", bg: "from-neutral-700 to-neutral-900" },
      { label: "Before & After Conversion", category: "Transformation", bg: "from-zinc-700 to-zinc-900" },
    ],
    faqs: [
      { question: "How long does a modern flat roof last?", answer: "GRP (fibreglass) systems typically last 25–30+ years. EPDM rubber systems last 20–25+ years. Both significantly outperform old felt, which has a typical lifespan of 10–15 years." },
      { question: "GRP vs EPDM — which should I choose?", answer: "GRP is harder, more rigid, and seamless — ideal for high-traffic areas like walkable terraces. EPDM is more flexible, better for larger areas and irregular shapes, and typically more cost-effective." },
      { question: "Do flat roofs always leak?", answer: "Not when installed correctly with proper drainage falls and upstands. Leaks on flat roofs almost always result from poor installation, failed joins, or years of neglect to an ageing felt system." },
      { question: "Can you install over an existing flat roof?", answer: "Occasionally, but we generally recommend stripping back to the deck first to inspect for rot, moisture, or structural issues. Overlaying can trap damp and cause problems later." },
      { question: "Is a flat roof suitable for a walkable terrace?", answer: "Yes — GRP fibreglass is ideal for low-traffic terraces and balconies. We can also install non-slip finishes and integrated drainage for a fully weatherproof outdoor space." },
      { question: "What warranty do you provide?", answer: "GRP fibreglass systems carry a 20+ year product warranty registered in your name. We also provide a written workmanship guarantee covering the installation itself." },
    ],
  },
  {
    title: "Chimney Repair",
    slug: "chimney-repair",
    iconName: "Star",
    heroImage: "/chimney-repair.jpg",
    tagline: "Safeguard your stack before it costs you more.",
    description: "Professional chimney maintenance, repointing, and structural repairs to ensure safety and prevent water ingress.",
    longDescription: "Chimneys are one of the most exposed parts of any building. Subject to constant thermal movement, wind, and rainfall, the mortar, flashing, and pointing deteriorate over time. Left unaddressed, a failing chimney stack leads to internal damp, crumbling brickwork, and in serious cases, structural instability.",
    features: ["Repointing", "Lead Flashing", "Cowl Fitting", "Chimney Removal", "Pot Replacement", "Flaunching Repair"],
    steps: [
      { title: "Visual & Structural Assessment", description: "We inspect the chimney from ground level, roof level, and internally where required to identify all areas of concern." },
      { title: "Problem Identification", description: "We pinpoint the specific failure — crumbling mortar, damaged flashing, cracked pots, spalled bricks, or structural movement." },
      { title: "Safe Access Setup", description: "Scaffold towers or chimney ladders are erected and all working areas are made safe before any work begins." },
      { title: "Repair Works", description: "Repointing, lead flashing replacement, pot or cowl fitting, flaunching repair, or full stack removal is carried out to a high standard." },
      { title: "Weatherproofing & Sign-Off", description: "All completed works are checked for water-tightness and structural integrity before we remove access equipment and sign off." },
    ],
    galleryItems: [
      { label: "Chimney Stack Repointed", category: "Repointing", bg: "from-slate-700 to-slate-900", image: "/chimney-repair.jpg" },
      { label: "Lead Flashing Renewed", category: "Lead Flashing", bg: "from-zinc-600 to-zinc-800", image: "/chimney-repair-1.jpg" },
      { label: "Chimney Pot Replaced", category: "Pot Work", bg: "from-stone-600 to-stone-800", image: "/chimney-repair-2.jpg" },
      { label: "Flaunching Repaired", category: "Flaunching", bg: "from-slate-500 to-slate-700" },
      { label: "Stack Removed at Roof Level", category: "Chimney Removal", bg: "from-neutral-700 to-neutral-900" },
      { label: "Step Flashing Detail", category: "Leadwork", bg: "from-zinc-700 to-zinc-900" },
    ],
    faqs: [
      { question: "How do I know if my chimney needs repair?", answer: "Warning signs include damp patches on the chimney breast indoors, crumbling or missing mortar, loose or leaning pots, visible cracking in the stack, or black staining around the breast." },
      { question: "What is chimney repointing?", answer: "Repointing involves raking out old, failed mortar between the bricks and replacing it with fresh mortar matched to the original profile. It seals and strengthens the stack against water ingress." },
      { question: "Does the chimney need to be in use to warrant maintenance?", answer: "No — even unused chimneys require maintenance. They remain fully exposed to the elements and can deteriorate just as quickly whether in use or not." },
      { question: "Do you remove chimneys completely?", answer: "Yes. We can remove chimneys at roof level (leaving the internal breast) or carry out a full stack removal, and will make good the roof covering so it's weathertight and clean." },
      { question: "What is lead flashing and why does it fail?", answer: "Lead flashing seals the joint between your chimney and the roof slope. It fails through age, thermal movement cracking the seal, or poor original installation. A failed flashing is one of the most common causes of roof leaks." },
      { question: "Can chimney repairs be covered by home insurance?", answer: "Storm damage to chimneys is often covered. We can provide a detailed written report with photographs to support an insurance claim." },
    ],
  },
  {
    title: "Gutter Installation",
    slug: "gutter-installation",
    iconName: "ShieldCheck",
    heroImage: "/gutter-install.jpeg",
    tagline: "Protect your property from the ground up.",
    description: "Full replacement of old guttering with modern, maintenance-free uPVC systems in various styles and colours.",
    longDescription: "Gutters are your first line of defence against water damage to your walls, fascia, and foundations. Old cast iron or deteriorated uPVC guttering that fails to channel water away correctly causes damp, rot, and costly structural damage over time. We replace complete gutter systems in a single day with minimal disruption.",
    features: ["uPVC Gutters", "Seamless Systems", "Bargeboards", "Downpipes", "Fascia & Soffit", "Cast Iron Styling"],
    steps: [
      { title: "Property Assessment", description: "We check the condition of your fascia boards for rot or damage and measure the full gutter run to calculate falls and system sizing." },
      { title: "Style & Colour Selection", description: "Choose from half-round, ogee, square, or deep-flow profiles in white, black, brown, or grey to match your property." },
      { title: "Removal & Disposal", description: "All old guttering and downpipes are carefully removed and disposed of responsibly — no debris left behind." },
      { title: "New System Fitted", description: "Brackets are fixed at correct falls, gutters are clipped in, and all downpipes are positioned and secured with the correct shoes and offsets." },
      { title: "Full Flow Test", description: "Water is run through the entire system to confirm clean flow, correct falls, watertight joints, and proper drainage to every outlet." },
    ],
    galleryItems: [
      { label: "Half-Round uPVC Installed", category: "uPVC Gutters", bg: "from-slate-700 to-slate-900", image: "/gutter-install.jpeg" },
      { label: "Ogee Style Gutter — Black", category: "Ogee Profile", bg: "from-zinc-600 to-zinc-800", image: "/gutter-install-1.jpg" },
      { label: "Fascia & Soffit Boards", category: "Fascia Work", bg: "from-stone-600 to-stone-800", image: "/gutter-install-2.jpeg" },
      { label: "Downpipe & Shoe Detail", category: "Downpipes", bg: "from-slate-500 to-slate-700", image: "/gutter-install-3.jpg" },
      { label: "Corner & Stop-End Fitting", category: "Joinery", bg: "from-neutral-700 to-neutral-900" },
      { label: "Full Perimeter Completed", category: "Full System", bg: "from-zinc-700 to-zinc-900" },
    ],
    faqs: [
      { question: "What gutter styles and colours do you offer?", answer: "We install half-round, ogee, square-line, and deep-flow profiles. Standard colours are white, black, brown, and grey, with cast-iron effect available for period properties." },
      { question: "Do you replace fascia and soffit boards too?", answer: "Yes — if existing timber fascia or soffit boards are rotten or failing, we replace them with low-maintenance uPVC as part of the same job." },
      { question: "How long does a full gutter replacement take?", answer: "Most standard homes are completed within a single day. Larger properties with complex roof lines may take two days." },
      { question: "How do I know if I need new gutters rather than a repair?", answer: "If gutters are cracked, deformed, pulling away from the fascia at multiple points, or if the fascia behind them has rotted, replacement is usually more cost-effective than repeated repairs." },
      { question: "What size gutter do I need?", answer: "This depends on your roof area and pitch — a larger catchment requires higher-capacity guttering. We calculate the correct profile size during our survey." },
      { question: "Will new gutters need painting or treating?", answer: "No — uPVC systems are maintenance-free. They never need painting or treating and will retain their colour for decades." },
    ],
  },
  {
    title: "Gutter Repair",
    slug: "gutter-repair",
    iconName: "CheckCircle2",
    heroImage: "/gutter-repair.jpg",
    tagline: "Stop the drip before it becomes a flood.",
    description: "Fixing leaks, sagging gutters, and broken brackets to ensure water is correctly diverted away from your property.",
    longDescription: "A leaking or overflowing gutter directs water straight down your external wall, saturating the brickwork and potentially causing internal damp. In many cases, targeted repairs to failing joints, brackets, and sections are all that's needed — avoiding the cost of a full replacement.",
    features: ["Leak Sealing", "Bracket Fixes", "Alignment Adjustment", "Joint Replacement", "Section Swaps", "Downpipe Repairs"],
    steps: [
      { title: "Inspection", description: "We run water through the system or carry out a close visual inspection to locate the exact source of leaks, sagging, or overflow." },
      { title: "Diagnosis", description: "Joints, brackets, alignment, and downpipes are all checked systematically to build a complete picture of what's failing." },
      { title: "Honest Quote", description: "We provide a clear quote for only the repairs genuinely needed — no upselling to a full replacement unless it's truly the right call." },
      { title: "Repair Work", description: "Joints are sealed or replaced, brackets refixed, alignment corrected, and any cracked sections swapped out." },
      { title: "Flow Test", description: "A final water test confirms the repair is fully effective before we leave." },
    ],
    galleryItems: [
      { label: "Leaking Joint Resealed", category: "Joint Repair", bg: "from-slate-700 to-slate-900", image: "/gutter-repair.jpg" },
      { label: "Dropped Bracket Refixed", category: "Bracket Repair", bg: "from-zinc-600 to-zinc-800", image: "/gutter-repair-1.webp" },
      { label: "Cracked Section Replaced", category: "Section Swap", bg: "from-stone-600 to-stone-800", image: "/gutter-repair-2.jpeg" },
      { label: "Downpipe Reconnected", category: "Downpipe", bg: "from-slate-500 to-slate-700", image: "/gutter-repair-3.jpeg" },
      { label: "Alignment Corrected", category: "Alignment", bg: "from-neutral-700 to-neutral-900" },
      { label: "Overflow Issue Resolved", category: "Flow Test", bg: "from-zinc-700 to-zinc-900" },
    ],
    faqs: [
      { question: "Can you repair any type of gutter?", answer: "Yes — we repair cast iron, uPVC, aluminium, and steel guttering of all profiles and ages." },
      { question: "What causes gutter joints to leak?", answer: "The rubber seal inside the joint degrades with age and UV exposure. In many cases the seal can be cleaned and replaced or re-sealed without removing the entire section." },
      { question: "What makes gutters sag?", answer: "Sagging is usually caused by bracket failure — either the bracket itself has snapped or the fascia board it's fixed to has rotted. We fix both." },
      { question: "When should I repair rather than replace?", answer: "If only a few joints or brackets are failing and the guttering itself is otherwise structurally sound, repair is the right call. We'll always give you an honest assessment." },
      { question: "How long does a gutter repair last?", answer: "A properly sealed joint should last 5+ years. Bracket repairs effectively restore the gutter run to its original condition." },
      { question: "Do you carry out repairs on the same visit as the inspection?", answer: "Where we have the materials on the van and the repair is straightforward, yes — we'll often complete it in a single visit to save you time." },
    ],
  },
  {
    title: "Gutter Cleaning",
    slug: "gutter-cleaning",
    iconName: "Droplets",
    heroImage: "/gutter-clean.jpg",
    tagline: "Clear gutters. Dry walls. Peace of mind.",
    description: "Complete removal of debris, leaves, and moss to prevent blockages and potential water damage to your eaves.",
    longDescription: "Blocked gutters overflow, sending water cascading down your external walls and into the ground alongside your foundations. Over time this leads to damp walls, rotting fascia boards, and potentially serious structural moisture issues. A regular clean — at least once a year — costs very little compared to the remedial work a blockage can cause.",
    features: ["Debris Removal", "Flow Testing", "Downpipe Clearing", "Minor Adjustments", "Condition Report", "Moss Removal"],
    steps: [
      { title: "Safe Access Setup", description: "Ladders are positioned safely at all required points using stabilisers and stand-offs to protect your gutters and render." },
      { title: "Manual Debris Removal", description: "All leaves, moss, compacted silt, and other debris are manually removed from the full gutter run — not just flushed into the downpipes." },
      { title: "Flush & Flow Test", description: "Water is flushed through from each high point to confirm correct flow and unobstructed drainage to every outlet." },
      { title: "Downpipe Check", description: "Each downpipe is tested for flow — if blocked, we clear it using rods or a jet. No blockage is left for next time." },
      { title: "Condition Report", description: "We flag any damage, failing joints, or structural issues spotted during the clean — with no pressure to book follow-up work." },
    ],
    galleryItems: [
      { label: "Full Gutter Run Cleared", category: "Debris Removal", bg: "from-slate-700 to-slate-900", image: "/gutter-clean.jpg" },
      { label: "Blocked Downpipe Cleared", category: "Downpipe", bg: "from-zinc-600 to-zinc-800", image: "/gutter-clean-1.webp" },
      { label: "Moss Build-Up Removed", category: "Moss Removal", bg: "from-stone-600 to-stone-800", image: "/gutter-clean-2.webp" },
      { label: "Debris Bagged & Removed", category: "Clearance", bg: "from-slate-500 to-slate-700" },
      { label: "Flow Test Completed", category: "Testing", bg: "from-neutral-700 to-neutral-900" },
      { label: "Joint Issue Spotted & Reported", category: "Condition Report", bg: "from-zinc-700 to-zinc-900" },
    ],
    faqs: [
      { question: "How often should gutters be cleaned?", answer: "At least once a year — ideally in autumn after the leaves have fallen. If you have overhanging trees, twice a year is recommended." },
      { question: "What happens if I don't clean my gutters?", answer: "Blocked gutters overflow, directing water down your external walls and into your foundations. Over time this causes damp, rot in the fascia, and potentially serious structural moisture problems." },
      { question: "Do you clear the downpipes as well?", answer: "Yes — downpipes are tested for flow as part of every clean. If blocked, we clear them using rods. A clear gutter that drains into a blocked downpipe isn't a clean gutter." },
      { question: "How long does a gutter clean take?", answer: "Most average homes take 1–2 hours. Larger properties or those with significant build-up may take slightly longer." },
      { question: "Do you remove the debris from site?", answer: "Yes — all debris is bagged and removed. We don't flush it into your drains or leave it on your garden." },
      { question: "Can you spot damage during a clean?", answer: "Yes, and we always do. We'll report any cracked sections, failing joints, or loose brackets we find. There's no obligation to book repairs — we just make sure you know." },
    ],
  },
  {
    title: "Roof Cleaning",
    slug: "roof-cleaning",
    iconName: "ShieldCheck",
    heroImage: "/roof-cleaning.webp",
    tagline: "Remove the damage before it removes your roof.",
    description: "Safe and effective removal of moss, algae, and dirt to improve your roof's appearance and lifespan.",
    longDescription: "Moss doesn't just look bad — it actively damages your roof. It holds moisture against the tile surface, accelerating frost damage and cracking, and its root system slowly forces tiles apart. Regular cleaning and biocide treatment removes the growth, kills the spores, and significantly extends your roof's serviceable life.",
    features: ["Moss Removal", "Algae Treatment", "Soft Washing", "Gutter Clearance", "Biocide Application", "Breathable Sealing"],
    steps: [
      { title: "Condition Assessment", description: "We inspect the roof surface, gauge the severity of growth, and check for any underlying tile damage before work begins." },
      { title: "Treatment Plan", description: "We recommend the appropriate method — soft washing for lighter growth or manual scraping combined with biocide for heavier infestations." },
      { title: "Moss Removal", description: "Surface moss is carefully scraped or brushed off using soft tools, avoiding damage to the tile or slate surface." },
      { title: "Biocide Application", description: "A professional-grade, long-lasting algae and moss inhibitor is applied to kill remaining spores and prevent regrowth." },
      { title: "Optional Sealing", description: "Where desired, a breathable roof sealant is applied to lock in tile colour, repel water, and extend the life of the roof covering." },
    ],
    galleryItems: [
      { label: "Heavy Moss Cleared", category: "Moss Removal", bg: "from-slate-700 to-slate-900", image: "/roof-cleaning.webp" },
      { label: "Algae Treatment Applied", category: "Biocide", bg: "from-zinc-600 to-zinc-800", image: "/roo-cleaning-1.jpg" },
      { label: "Before & After Comparison", category: "Transformation", bg: "from-stone-600 to-stone-800", image: "/roof-cleaning-2.jpg" },
      { label: "Soft Washing in Progress", category: "Soft Wash", bg: "from-slate-500 to-slate-700", image: "/roof-cleaning-3.webp" },
      { label: "Ridge Cleaned & Re-Pointed", category: "Ridge Work", bg: "from-neutral-700 to-neutral-900" },
      { label: "Treated Roof — 18 Months On", category: "Aftercare", bg: "from-zinc-700 to-zinc-900" },
    ],
    faqs: [
      { question: "Does roof cleaning damage the tiles?", answer: "Not when done correctly with soft washing. High-pressure jet washing can erode tile surfaces and strip away the weatherproofing layer — we never use high-pressure methods on roof tiles." },
      { question: "What is soft washing?", answer: "Soft washing uses low-pressure water combined with specialist biocide solutions to kill and remove algae, moss, and lichen without the abrasion of power washing." },
      { question: "How long do the results last?", answer: "A biocide treatment typically keeps regrowth at bay for 3–5 years. A sealant coating extends this further and also improves weather resistance." },
      { question: "Can cleaning help me avoid a full replacement?", answer: "Yes — removing moss and treating the surface can add years to a roof that's structurally sound but cosmetically deteriorated. It's often a fraction of the cost of replacement." },
      { question: "Does moss actually damage the tiles?", answer: "Yes. Moss retains moisture against the tile surface, which accelerates frost damage and cracking. The root system also gradually forces tiles apart over time." },
      { question: "How long does a full roof clean take?", answer: "Most average-sized houses are completed within a full day. A second visit for the sealant coat may be required once the biocide has taken effect." },
    ],
  },
  {
    title: "Roof Inspection",
    slug: "roof-inspection",
    iconName: "ShieldCheck",
    heroImage: "/roof-inspection.jpg",
    tagline: "Know exactly what's up there.",
    description: "Comprehensive surveys to identify potential issues before they become expensive problems. Honest, professional advice.",
    longDescription: "Most homeowners don't look at their roof until there's a leak. By then, damage that could have been caught and fixed for a few hundred pounds has become a much larger job. A regular inspection — or a survey before purchasing a property — gives you a clear, honest picture of your roof's condition and what, if anything, needs attention.",
    features: ["Drone Surveys", "Detailed Reports", "Pre-purchase Checks", "Insurance Quotes", "Loft Inspections", "Priority Grading"],
    steps: [
      { title: "Book Your Survey", description: "We arrange a convenient time and confirm whether an internal loft inspection is required or access to the roof structure is needed." },
      { title: "External Assessment", description: "We inspect the roof covering, ridge, valleys, chimney, flashings, and guttering from safe vantage points or using drone photography." },
      { title: "Internal Check", description: "Where accessible, we inspect the loft space for signs of daylight, moisture ingress, condensation, or structural concerns." },
      { title: "Detailed Report Produced", description: "You receive a written condition report with photographs, issue descriptions, urgency ratings, and estimated costs for any works identified." },
      { title: "Walk-Through & Recommendations", description: "We go through our findings with you, answer your questions, and give honest advice on priority repairs or preventative measures." },
    ],
    galleryItems: [
      { label: "Drone Survey in Progress", category: "Drone Survey", bg: "from-slate-700 to-slate-900", image: "/roof-inspection.jpg" },
      { label: "Loft Space Inspection", category: "Internal Check", bg: "from-zinc-600 to-zinc-800", image: "/roof-inspection-1.jpg" },
      { label: "Ridge & Valley Assessment", category: "External Check", bg: "from-stone-600 to-stone-800", image: "/roof-inspection-2.jpg" },
      { label: "Written Report Extract", category: "Condition Report", bg: "from-slate-500 to-slate-700" },
      { label: "Flashing Condition Check", category: "Detail Inspection", bg: "from-neutral-700 to-neutral-900" },
      { label: "Pre-Purchase Survey", category: "Buyer Survey", bg: "from-zinc-700 to-zinc-900" },
    ],
    faqs: [
      { question: "What does a roof survey involve?", answer: "A full visual inspection of the roof covering, ridge, valleys, chimney, flashings, guttering, and loft space. We use drone photography where safe and appropriate for inaccessible areas." },
      { question: "How long does a survey take?", answer: "Usually 1–2 hours for an average property. Larger or more complex roofs — or those requiring drone access and a full written report — may take longer." },
      { question: "Do you use drones?", answer: "Yes, where safe and practical. Drones allow us to inspect steep or inaccessible pitches in detail without scaffolding, and provide photographic evidence for reports and insurance claims." },
      { question: "What do I receive after a survey?", answer: "A written condition report with photographs, a description of any issues found, urgency ratings (urgent, monitor, or cosmetic), and indicative costs for recommended works." },
      { question: "Should I get a survey before buying a property?", answer: "We strongly recommend it. A standard homebuyers survey doesn't always cover the roof in detail. Our pre-purchase roof survey gives you a full picture before you commit." },
      { question: "Do you charge for an inspection?", answer: "Basic inspections as part of a quote visit are free. Formal written reports for insurance, pre-purchase, or legal purposes carry a small fee, which we'll confirm upfront." },
    ],
  },
  {
    title: "Pointing & Brickwork",
    slug: "pointing",
    iconName: "Hammer",
    heroImage: "/pointing.jpeg",
    tagline: "Seal it in. Keep the weather out.",
    description: "Restoring the mortar between your bricks or tiles to prevent moisture penetration and structural issues.",
    longDescription: "Mortar has a finite lifespan. As it deteriorates, it opens gaps that allow water to penetrate the wall — leading to internal damp, frost damage to the brickwork, and over time, structural weakening. Repointing at the right time is a straightforward, cost-effective solution that protects your property for decades.",
    features: ["Wall Repointing", "Ridge Tile Pointing", "Gable Repairs", "Brick Replacement", "Mortar Matching", "Historic Brickwork"],
    steps: [
      { title: "Inspection & Assessment", description: "We examine the mortar joints, brick condition, and extent of deterioration to determine the scope and correct approach." },
      { title: "Rake Out Old Mortar", description: "Failed mortar is carefully raked back to a minimum 15–20mm depth using angle grinders and hand tools, without damaging the brick faces." },
      { title: "Mortar Matching", description: "We mix the mortar to match your existing brickwork in colour, texture, and strength — critical for both aesthetics and compatibility." },
      { title: "Pointing & Finishing", description: "Fresh mortar is applied in sections and finished to the original profile — flush, weatherstruck, or recessed — to match the existing style." },
      { title: "Cleaning & Curing", description: "Excess mortar is cleaned from the brick faces and the new pointing is kept slightly damp during initial curing to prevent shrinkage cracking." },
    ],
    galleryItems: [
      { label: "Ridge Tile Repointing", category: "Ridge Pointing", bg: "from-slate-700 to-slate-900", image: "/pointing.jpeg" },
      { label: "Gable End Brickwork", category: "Gable Work", bg: "from-zinc-600 to-zinc-800", image: "/pointing-1.jpg" },
      { label: "Wall Repointing Completed", category: "Wall Pointing", bg: "from-stone-600 to-stone-800", image: "/pointing-2.webp" },
      { label: "Before & After Comparison", category: "Transformation", bg: "from-slate-500 to-slate-700", image: "/pointing-4.jpg" },
      { label: "Brick Replacement", category: "Brickwork", bg: "from-neutral-700 to-neutral-900" },
      { label: "Mortar Match Detail", category: "Colour Match", bg: "from-zinc-700 to-zinc-900" },
    ],
    faqs: [
      { question: "What is repointing and why does it matter?", answer: "Repointing replaces the deteriorated mortar between bricks. Without it, water penetrates the wall, causing internal damp, frost damage to the brickwork, and eventual structural weakening." },
      { question: "How do I know if my pointing has failed?", answer: "Signs include crumbling or missing mortar, discoloured or stained brickwork, internal damp on a solid wall, or mortar you can scrape away easily with a finger or key." },
      { question: "Can you match my existing mortar colour?", answer: "Yes — we mix to match as closely as possible. Perfect matching on very old, weathered, or unusual brickwork isn't always achievable, but we get as close as the materials allow." },
      { question: "Can using the wrong mortar damage the brickwork?", answer: "Yes. Hard cement mortars used on soft historic brickwork force the movement stress into the bricks rather than the joints, causing spalling and cracking. We always specify the correct mix for your wall type." },
      { question: "How long does new pointing last?", answer: "Quality pointing using the correct mortar mix lasts 25–50 years, depending on exposure. It's one of the best long-term investments you can make in your property's fabric." },
      { question: "Do you also replace damaged bricks?", answer: "Yes — if individual bricks are spalled, cracked, or missing, we source matching replacements and cut them in. Where an exact match isn't available, we'll show you samples before proceeding." },
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug)
}
