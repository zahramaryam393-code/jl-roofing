import { ServiceDetailView, type ServiceDetail } from "@/components/ServiceDetailView"
import { getServiceBySlug, servicesData } from "@/lib/services-data"

const serviceDetails: Record<string, ServiceDetail> = {
  "roof-repair": {
    title: "Expert Roof Repair",
    description: "Rapid-response repairs for all roofing types. We stop leaks, replace damaged tiles, and restore your home's protection with guaranteed workmanship.",
    heroFeatures: {
      benefits: [
        { title: "24/7 Emergency Response", desc: "For major storm damage and active leaks." },
        { title: "Fully Guaranteed", desc: "All repairs covered by our minimum 12-month warranty." },
        { title: "Fixed Price Quotes", desc: "No hidden extras or surprise additions." }
      ],
      warnings: [
        { title: "Slipped or Missing Tiles", desc: "Exposing your roof felt to UV and rain damage." },
        { title: "Internal Damp Patches", desc: "Clear signs of water ingress through the roof structure." },
        { title: "Debris in Gutters", desc: "Indicates crumbling tiles or failing mortar joints." }
      ]
    },
    difference: {
      title: "The JL Roofing Difference",
      text: "We don't just patch up leaks; we provide permanent solutions. Our team uses a preventative mindset, identifying secondary issues that could cause future problems while we're on your roof.",
      features: [
        { title: "Root Cause Analysis", desc: "We find exactly why the leak started to prevent recurrence." },
        { title: "BBA Approved Materials", desc: "We only use industry-certified sealants and materials." },
        { title: "Digital Documentation", desc: "Photos of before and after repairs for your peace of mind." }
      ]
    },
    process: [
      { step: "01", title: "Safety Setup", desc: "We establish safe access using professional scaffolding or towers as required." },
      { step: "02", title: "Leak Trace", desc: "Using advanced detection methods, we find the exact source of the ingress." },
      { step: "03", title: "Precision Repair", desc: "We remove damaged sections and replace them with matching materials." },
      { step: "04", title: "Final Seal", desc: "Every joint is tested and sealed to ensure 100% water tightness." }
    ],
    pricingFactors: [
      "Access height and complexity",
      "Type of tile or roofing material required",
      "Extent of secondary structural damage",
      "Leadwork and flashing requirements"
    ],
    technical: "All our repairs follow BS 5534 standards for slating and tiling. We use high-performance breathable membranes and UV-stabilised sealants to ensure a repair that lasts as long as the original roof.",
    areas: ["Newcastle", "Gateshead", "Durham", "Sunderland", "North Shields", "South Shields", "Whitley Bay"]
  },
  "roof-installation": {
    title: "New Roof Installation",
    description: "Complete roof replacements using premium slate, clay, or concrete tiles. A total transformation for your home with a 25-year guarantee.",
    heroFeatures: {
      benefits: [
        { title: "25 Year Guarantee", desc: "Unmatched peace of mind on all new installations." },
        { title: "Energy Efficient", desc: "Integrated modern insulation to reduce heating bills." },
        { title: "Full Management", desc: "We handle skips, scaffolding, and building regs." }
      ],
      warnings: [
        { title: "Old Age (40+ Years)", desc: "When repairs become more expensive than replacement." },
        { title: "Persistent Leaks", desc: "Indicating the internal felt has completely perished." },
        { title: "Sagging Roofline", desc: "Structural issues requiring urgent professional attention." }
      ]
    },
    difference: {
      title: "Why Choose JL for Your New Roof?",
      text: "A new roof is a once-in-a-generation investment. We treat every installation with extreme care, ensuring the structural timber is sound before a single tile is laid. Our finish is what sets us apart.",
      features: [
        { title: "Master Craftsmanship", desc: "Expert slate and tile positioning for perfect aesthetics." },
        { title: "Enhanced Airflow", desc: "Advanced ventilation systems to prevent loft condensation." },
        { title: "Turnkey Service", desc: "Complete cleanup and site restoration post-install." }
      ]
    },
    process: [
      { step: "01", title: "Strip Down", desc: "Careful removal of old tiles and perishing felt membranes." },
      { step: "02", title: "Timber Check", desc: "Inspection and replacement of any rotten rafters or battens." },
      { step: "03", title: "Dry System", desc: "Installation of breathable felt and dry ridge/verge systems." },
      { step: "04", title: "Final Lay", desc: "Masterful installation of your chosen tiles or slates." }
    ],
    pricingFactors: [
      "Roof area (square meterage)",
      "Material choice (Slate vs Clay vs Concrete)",
      "Chimney and valley complexity",
      "Scaffolding requirements"
    ],
    technical: "We exclusively use high-performance breathable membranes and treated timber battens. Our 'Dry Fix' systems eliminate the need for mortar, preventing future cracking and maintenance issues.",
    areas: ["Newcastle", "Gateshead", "Durham", "Sunderland", "North Shields", "South Shields", "Whitley Bay"]
  },
  "flat-roofing": {
    title: "Flat Roofing Systems",
    description: "Say goodbye to leaking flat roofs. We install the latest high-performance GRP Fibreglass and EPDM Rubber systems that are built to last for decades.",
    heroFeatures: {
      benefits: [
        { title: "20 Year Guarantee", desc: "Long-term protection for your extension or garage." },
        { title: "Completely Seamless", desc: "No joints means zero chance of leaks at weak points." },
        { title: "Maintenance Free", desc: "Durable finishes that require no ongoing work." }
      ],
      warnings: [
        { title: "Standing Water", desc: "Indicating poor drainage or sagging structure." },
        { title: "Cracking Surfaces", desc: "Common in old felt roofs that have dried out." },
        { title: "Internal Damp", desc: "Often found in corners where flat roofs meet walls." }
      ]
    },
    difference: {
      title: "Modern Flat Roofing Solutions",
      text: "We moved away from traditional 'torch-on' felt years ago. Our GRP and EPDM systems are superior in every way, offering better insulation, longer life, and a much cleaner aesthetic finish.",
      features: [
        { title: "Fire Resistant", desc: "Safe, cold-applied systems with high fire ratings." },
        { title: "UV Stable", desc: "Won't rot or crack even in extreme sun exposure." },
        { title: "Walkable Surfaces", desc: "Tough enough for balconies and roof terraces." }
      ]
    },
    process: [
      { step: "01", title: "Decking", desc: "Installation of new, high-quality OSB3 tongue & groove decking." },
      { step: "02", title: "Lamination", desc: "Application of base resin and fiberglass matting (for GRP)." },
      { step: "03", title: "Detailing", desc: "Precision fitting of pre-formed trims and wall flashings." },
      { step: "04", title: "Top Coat", desc: "Application of UV-resistant colour top coat for final finish." }
    ],
    pricingFactors: [
      "Square meterage of the flat roof",
      "System type (GRP Fibreglass vs EPDM Rubber)",
      "Complexity of perimeter trims",
      "Removal of old multi-layered felt"
    ],
    technical: "Our EPDM systems are applied in single sheets, eliminating joints entirely. Our GRP systems are hand-laid by certified installers to ensure a rock-solid, waterproof laminate.",
    areas: ["Newcastle", "Gateshead", "Durham", "Sunderland", "North Shields", "South Shields", "Whitley Bay"]
  },
  "chimney-repair": {
    title: "Chimney Repair & Care",
    description: "Expert maintenance for highly exposed chimney stacks. From specialist repointing to leadwork replacement and structural strengthening.",
    heroFeatures: {
      benefits: [
        { title: "Safety First", desc: "Prevent falling debris and structural collapse." },
        { title: "Stop Damp", desc: "Fixing the most common source of upstairs dampness." },
        { title: "Historic Accuracy", desc: "Matching traditional mortars and brickwork." }
      ],
      warnings: [
        { title: "Crumbling Mortar", desc: "Leads to loose bricks and water penetration." },
        { title: "Leaking Leadwork", desc: "Water entering at the roof-to-chimney junction." },
        { title: "Damaged Pots", desc: "Cracked or leaning pots are a major safety risk." }
      ]
    },
    difference: {
      title: "Expert Chimney Restoration",
      text: "Chimney work requires specialist skills and safe access. We handle everything from minor repointing to complete chimney rebuilds, ensuring your stack is both beautiful and structurally sound.",
      features: [
        { title: "Lead Specialists", desc: "Custom-made lead trays and step flashings." },
        { title: "Cowl Installation", desc: "Preventing bird entry and managing downdraughts." },
        { title: "Safe Removal", desc: "Complete removal of redundant stacks if preferred." }
      ]
    },
    process: [
      { step: "01", title: "Access", desc: "Establishing safe scaffold access around the chimney stack." },
      { step: "02", title: "Raking Out", desc: "Deep removal of old, perished mortar from joints." },
      { step: "03", title: "Repointing", desc: "Application of new, weather-resistant mortar." },
      { step: "04", title: "Lead Check", desc: "Replacement or repair of flashing for a watertight seal." }
    ],
    pricingFactors: [
      "Scaffold height and access complexity",
      "Condition of the brickwork/pots",
      "Extent of lead replacement required",
      "Total number of flues and stacks"
    ],
    technical: "We use a variety of mortars including lime-based mixes for period properties to ensure the brickwork can breathe, preventing long-term spalling and decay.",
    areas: ["Newcastle", "Gateshead", "Durham", "Sunderland", "North Shields", "South Shields", "Whitley Bay"]
  },
  "gutter-installation": {
    title: "Gutter Installation",
    description: "High-capacity uPVC guttering and roofline replacements. Protect your foundations and walls with a maintenance-free drainage system.",
    heroFeatures: {
      benefits: [
        { title: "Maintenance Free", desc: "No more painting or sanding. Just a clean finish." },
        { title: "High Flow Capacity", desc: "Designed to handle the heaviest UK downpours." },
        { title: "Style Selection", desc: "Half-round, square, or deep-flow profiles." }
      ],
      warnings: [
        { title: "Overflowing Gutters", desc: "Indicating blockages or undersized systems." },
        { title: "Dripping Joints", desc: "Leads to damp patches on external brickwork." },
        { title: "Peeling Fascias", desc: "Rotting timber rooflines that need replacement." }
      ]
    },
    difference: {
      title: "Superior Guttering Solutions",
      text: "We don't just 'cover up' old timber. We perform full replacements, stripping back to the rafters to ensure the new uPVC system is securely fixed and perfectly aligned for water flow.",
      features: [
        { title: "Full Strip-Back", desc: "We never 'over-clad' rotten wood." },
        { title: "Hidden Ventilation", desc: "Protecting your loft space from condensation." },
        { title: "Bird Guards", desc: "Included as standard to keep your gutters clear." }
      ]
    },
    process: [
      { step: "01", title: "Removal", desc: "Safe disposal of all old timber and cast-iron/plastic gutters." },
      { step: "02", title: "Inspection", desc: "Checking the rafter ends for any structural rot." },
      { step: "03", title: "Fixing", desc: "Installation of new fascias, soffits, and gutter brackets." },
      { step: "04", title: "Testing", desc: "Full water test to ensure 100% correct fall and drainage." }
    ],
    pricingFactors: [
      "Total linear meterage of the roofline",
      "Choice of profile (Deep-flow vs Standard)",
      "Number of corners and downpipes",
      "Scaffolding or tower requirements"
    ],
    technical: "We use thick-gauge uPVC that is UV-stabilised to prevent fading. Our joints use EPDM gaskets for a long-lasting, leak-free seal.",
    areas: ["Newcastle", "Gateshead", "Durham", "Sunderland", "North Shields", "South Shields", "Whitley Bay"]
  },
  "roof-cleaning": {
    title: "Professional Roof Cleaning",
    description: "Safe and effective moss removal and tile restoration. We improve your home's curb appeal and prevent damage from moisture retention.",
    heroFeatures: {
      benefits: [
        { title: "Immediate Results", desc: "A total transformation of your home's appearance." },
        { title: "Preventative Care", desc: "Moss holds water that can freeze and crack tiles." },
        { title: "Value Addition", desc: "A clean roof significantly increases property value." }
      ],
      warnings: [
        { title: "Heavy Moss Growth", desc: "Sponges that keep your tiles constantly damp." },
        { title: "Blocked Gutters", desc: "Resulting from crumbling moss falling from the roof." },
        { title: "Tile Decay", desc: "Algae and lichens eating into the tile surface." }
      ]
    },
    difference: {
      title: "Safe & Thorough Cleaning",
      text: "We avoid high-pressure jet washing which can damage tiles and force water into your loft. Our manual scrape and 'soft-wash' approach is the industry-recommended method for longevity.",
      features: [
        { title: "Manual Scraping", desc: "Individual tile cleaning for zero damage." },
        { title: "Biocide Treatment", desc: "Killing spores to prevent moss regrowth for years." },
        { title: "Full Cleanup", desc: "We wash down your whole house after we're done." }
      ]
    },
    process: [
      { step: "01", title: "Setup", desc: "Protecting floors, plants, and windows from debris." },
      { step: "02", title: "Scraping", desc: "Manual removal of all heavy moss and lichens." },
      { step: "03", title: "Gutter Clear", desc: "Clearing all debris that fell during the scrape." },
      { step: "04", title: "Treatment", desc: "Application of professional-grade moss inhibitor." }
    ],
    pricingFactors: [
      "Total roof surface area",
      "Extent of moss and lichen growth",
      "Type of tile (Concrete vs Clay vs Slate)",
      "Property height and accessibility"
    ],
    technical: "Our biocides are HSE-approved and safe for the environment once dry. They continue working for 6-12 months after application to clear any remaining spores.",
    areas: ["Newcastle", "Gateshead", "Durham", "Sunderland", "North Shields", "South Shields", "Whitley Bay"]
  },
  "gutter-repair": {
    title: "Gutter Repair Service",
    description: "Expert repairs for leaking joints, sagging sections, and damaged brackets. We use industrial-grade sealants and precision alignment to restore your drainage.",
    heroFeatures: {
      benefits: [
        { title: "No-Leak Guarantee", desc: "Every repair is pressure-tested for 100% water tightness." },
        { title: "Precision Sloping", desc: "Re-aligned to a 1:500 fall for perfect drainage." },
        { title: "Industrial Sealants", desc: "UV-stable silicone that won't crack or peel." }
      ],
      warnings: [
        { title: "Dripping Joints", desc: "Common sign of perished gaskets or failed seals." },
        { title: "Sagging Sections", desc: "Indicates broken brackets or heavy debris weight." },
        { title: "External Wall Damp", desc: "Caused by water 'splashing back' from leaking gutters." }
      ]
    },
    difference: {
      title: "Precision Gutter Restoration",
      text: "Most gutter leaks are caused by failed expansion joints or poor alignment. We don't just add more sealant; we disassemble the failing joint, replace the gaskets, and re-level the system for optimal performance.",
      features: [
        { title: "Heavy Duty Brackets", desc: "Galvanized steel fixings for maximum support." },
        { title: "Gasket Replacement", desc: "We use EPDM rubber seals for long-life flexibility." },
        { title: "Pressure Testing", desc: "We simulate heavy rain to verify every joint." }
      ]
    },
    process: [
      { step: "01", title: "Inspection", desc: "Visual and water-flow test to identify every leak point." },
      { step: "02", title: "Cleaning", desc: "Deep cleaning of joint surfaces to ensure a perfect bond." },
      { step: "03", title: "Repair", desc: "Replacing seals, brackets, or damaged sections as needed." },
      { step: "04", title: "Leveling", desc: "Adjusting bracket heights to ensure the correct 1:500 fall." }
    ],
    pricingFactors: [
      "Number of leaking joints or corners",
      "Accessibility (Height and conservatory obstacles)",
      "Extent of bracket replacement required",
      "Material type (uPVC vs Cast Iron vs Aluminium)"
    ],
    technical: "We use high-performance industrial silicone and EPDM gaskets. All our repairs are designed to handle thermal expansion and contraction without failing.",
    areas: ["Newcastle", "Gateshead", "Durham", "Sunderland", "North Shields", "South Shields", "Whitley Bay"]
  },
  "gutter-cleaning": {
    title: "Professional Gutter Cleaning",
    description: "Prevent property damage with our thorough gutter clearing service. We remove all debris, silt, and moss, ensuring a free-flowing drainage system.",
    heroFeatures: {
      benefits: [
        { title: "Prevent Foundation Damage", desc: "Proper drainage keeps water away from your walls." },
        { title: "Detailed Inspection", desc: "We check your whole roofline while we're up there." },
        { title: "Debris Disposal", desc: "We take all removed waste with us, leaving no mess." }
      ],
      warnings: [
        { title: "Grass Growing in Gutters", desc: "A clear sign of heavy silt and moisture retention." },
        { title: "Water Overspill", desc: "During rain, water pours over the front of the gutter." },
        { title: "Damp Interior Walls", desc: "Often caused by blocked gutters saturating exterior bricks." }
      ]
    },
    difference: {
      title: "The JL Cleaning Standard",
      text: "We don't just clear the easy parts. We hand-clear every inch, including downpipe entries and hopper heads, and we always perform a final flow test to prove the system is 100% clear.",
      features: [
        { title: "Downpipe Flushing", desc: "Ensuring no hidden blockages in vertical pipes." },
        { title: "Leaf Guard Options", desc: "Installation of debris-prevention systems available." },
        { title: "Site Protection", desc: "We protect your windows and paths during cleaning." }
      ]
    },
    process: [
      { step: "01", title: "Hand Clearing", desc: "Manual removal of all solid debris and sludge." },
      { step: "02", title: "Flush Test", desc: "Running water through the system to identify slow spots." },
      { step: "03", title: "Joint Check", desc: "Inspecting seals that may have been hidden by debris." },
      { step: "04", title: "Site Wash", desc: "Final cleanup of any splashes on walls or windows." }
    ],
    pricingFactors: [
      "Total linear meterage of guttering",
      "Height of the property (1, 2, or 3 storeys)",
      "Conservatory or extension access issues",
      "Level of debris accumulation"
    ],
    technical: "Regular cleaning (ideally twice a year) prevents the weight of wet debris from warping your gutters or snapping support brackets.",
    areas: ["Newcastle", "Gateshead", "Durham", "Sunderland", "North Shields", "South Shields", "Whitley Bay"]
  },
  "roof-inspection": {
    title: "Roof Inspection & Survey",
    description: "Expert photographic roof surveys for home buyers, insurance claims, or general maintenance. Get a professional, unbiased report on your roof's condition.",
    heroFeatures: {
      benefits: [
        { title: "Detailed Photo Report", desc: "See exactly what our experts see on your roof." },
        { title: "Unbiased Assessment", desc: "Honest advice on what needs repair and what doesn't." },
        { title: "Insurance Approved", desc: "Professional documentation for storm damage claims." }
      ],
      warnings: [
        { title: "Buying a New Home", desc: "Catch hidden roofing issues before you complete." },
        { title: "Post-Storm Damage", desc: "Identify loose tiles or leadwork before leaks start." },
        { title: "Noticeable Debris", desc: "Finding tile pieces on the floor indicates wear." }
      ]
    },
    difference: {
      title: "Comprehensive Roof Audits",
      text: "We go beyond a simple glance. We check every detail from ridge tiles to gutter brackets, chimney stacks, and lead flashings, providing you with a clear roadmap for your property's maintenance.",
      features: [
        { title: "Close-up Photography", desc: "High-resolution images of every identified issue." },
        { title: "Structural Integrity", desc: "Checking for sagging or timber decay signs." },
        { title: "Gutter Flow Audit", desc: "Evaluating the efficiency of your drainage system." }
      ]
    },
    process: [
      { step: "01", title: "External Survey", desc: "Close-up inspection of all tiles, ridges, and valleys." },
      { step: "02", title: "Chimney & Lead", desc: "Detailed check of stacks, pots, and flashing points." },
      { step: "03", title: "Gutter Audit", desc: "Checking levels and structural support of the roofline." },
      { step: "04", title: "Full Report", desc: "Compilation of photos and an itemised estimate for repairs." }
    ],
    pricingFactors: [
      "Size and complexity of the roof",
      "Access requirements (Ladders vs Scaffolding)",
      "Type of report required (Standard vs Insurance)",
      "Travel distance to site"
    ],
    technical: "Our inspections cover every critical failure point including BS 5534 compliance check for newer installations and lime mortar assessment for heritage roofs.",
    areas: ["Newcastle", "Gateshead", "Durham", "Sunderland", "North Shields", "South Shields", "Whitley Bay"]
  },
  "pointing": {
    title: "Pointing & Brickwork Repair",
    description: "Protect your property from damp and structural decay with expert repointing. We restore the protective barrier of your walls and ridge tiles.",
    heroFeatures: {
      benefits: [
        { title: "Stop Penetrating Damp", desc: "Prevent water from soaking through your bricks." },
        { title: "Structural Strength", desc: "Stabilize loose bricks and ridge tiles." },
        { title: "Curb Appeal", desc: "Restore the clean, professional look of your home." }
      ],
      warnings: [
        { title: "Crumbling Mortar", desc: "Mortar that falls out when touched or during rain." },
        { title: "Spalling Bricks", desc: "Brick faces popping off due to water freezing in gaps." },
        { title: "Loose Ridge Tiles", desc: "Danger of tiles falling during high winds." }
      ]
    },
    difference: {
      title: "Specialist Mortar Work",
      text: "We don't just smear new mortar over the old. We rake out to a minimum depth of 20mm to ensure the new pointing has a deep, structural bond that lasts for decades.",
      features: [
        { title: "Hand Raking", desc: "Controlled removal of old mortar to protect bricks." },
        { title: "Mortar Matching", desc: "Selecting the right strength and colour for your building." },
        { title: "Weather Sealing", desc: "Optional clear sealants for extra water protection." }
      ]
    },
    process: [
      { step: "01", title: "Raking Out", desc: "Mechanical or hand removal of perished mortar joints." },
      { step: "02", title: "Wall Prep", desc: "Deep cleaning and wetting of the joints for better adhesion." },
      { step: "03", title: "Repointing", desc: "Precision application of fresh, high-quality mortar." },
      { step: "04", title: "Finishing", desc: "Brushing and 'striking' the joints for a professional look." }
    ],
    pricingFactors: [
      "Total square meterage of wall or ridge line",
      "Depth of mortar removal required",
      "Type of finish (Bucket-handle, Flush, or Weathered)",
      "Access complexity (Height and obstacles)"
    ],
    technical: "We use weather-resistant mixes with plasticisers for flexibility. For period properties, we offer traditional lime-based pointing to allow the building to breathe.",
    areas: ["Newcastle", "Gateshead", "Durham", "Sunderland", "North Shields", "South Shields", "Whitley Bay"]
  },
  "other": {
    title: "General Property Maintenance",
    description: "A wide range of expert property repairs and maintenance services. From small fixes to larger improvement projects, we've got you covered.",
    heroFeatures: {
      benefits: [
        { title: "Expert Versatility", desc: "Qualified tradesmen for a variety of tasks." },
        { title: "Rapid Turnaround", desc: "Fast response for small, annoying repairs." },
        { title: "Quality Guaranteed", desc: "The same JL standard on every project." }
      ],
      warnings: [
        { title: "General Wear & Tear", desc: "Small issues that need professional attention." },
        { title: "Pre-Sale Prep", desc: "Fixing those little things before you sell." },
        { title: "Storm Cleanup", desc: "Clearing debris and minor repairs post-storm." }
      ]
    },
    difference: {
      title: "Reliable Property Care",
      text: "No job is too small for our team. We bring the same level of professional equipment and expertise to general maintenance tasks as we do to full roof installations.",
      features: [
        { title: "Fully Insured", desc: "Complete protection on every project." },
        { title: "Clean & Tidy", desc: "We respect your home and leave it spotless." },
        { title: "Transparent Pricing", desc: "Fixed quotes for defined maintenance tasks." }
      ]
    },
    process: [
      { step: "01", title: "Assessment", desc: "Reviewing the specific maintenance needs." },
      { step: "02", title: "Planning", desc: "Providing a clear quote and timeline." },
      { step: "03", title: "Execution", desc: "Performing the work to professional standards." },
      { step: "04", title: "Cleanup", desc: "Ensuring the site is left perfectly clean." }
    ],
    pricingFactors: [
      "Type of repair or maintenance task",
      "Estimated time on site",
      "Materials and waste disposal requirements",
      "Specialist equipment needed"
    ],
    technical: "We use professional-grade tools and materials for all general maintenance to ensure long-lasting results.",
    areas: ["Newcastle", "Gateshead", "Durham", "Sunderland", "North Shields", "South Shields", "Whitley Bay"]
  }
}

const defaultService: ServiceDetail = {
  title: "Service Details",
  description: "Expert roofing and property maintenance solutions for your home.",
  heroFeatures: {
    benefits: [
      { title: "Expert Team", desc: "Highly trained professionals for every job." },
      { title: "Guaranteed Work", desc: "All our services come with a full warranty." },
      { title: "Free Quotes", desc: "Transparent, itemised pricing for all projects." }
    ],
    warnings: [
      { title: "Visible Damage", desc: "Cracks, leaks, or wear that needs attention." },
      { title: "Energy Loss", desc: "Poor insulation or gaps causing high bills." },
      { title: "Aesthetic Wear", desc: "Improving the look and value of your home." }
    ]
  },
  difference: {
    title: "The JL Quality Guarantee",
    text: "We provide professional service with a focus on quality and customer satisfaction. Every project is handled with the same level of care and precision.",
    features: [
      { title: "Quality Materials", desc: "Only the best industry-standard products." },
      { title: "Transparent Pricing", desc: "Honest quotes with no hidden surprises." },
      { title: "Safety First", desc: "Strict adherence to all safety regulations." }
    ]
  },
  process: [
    { step: "01", title: "Assessment", desc: "A thorough survey of the work required." },
    { step: "02", title: "Planning", desc: "Detailed quote and project timeline." },
    { step: "03", title: "Execution", desc: "High-quality implementation of the service." },
    { step: "04", title: "Review", desc: "Final inspection and cleanup." }
  ],
  pricingFactors: ["Project scale", "Material choices", "Access requirements"],
  technical: "All work is performed to the highest industry standards using professional equipment and techniques.",
  areas: ["All local regions covered"]
}

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }))
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = serviceDetails[slug] || { ...defaultService, title: slug.replace("-", " ").toUpperCase() }
  const serviceInfo = getServiceBySlug(slug)

  return <ServiceDetailView service={service} serviceInfo={serviceInfo} />
}
