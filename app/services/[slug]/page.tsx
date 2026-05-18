import Image from "next/image"
import { Section, SectionHeader } from "@/components/Section"
import {
  Hammer,
  Home,
  Droplets,
  ShieldCheck,
  CheckCircle2,
  Star,
  ChevronRight,
  Phone,
  MessageCircle,
  FileText,
  Clock,
  Shield,
  AlertTriangle,
  Info,
  MapPin,
  Search,
  HardHat,
  BadgePercent,
  Camera,
  ClipboardList,
  BadgeCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"
import { FaqAccordion } from "@/components/FaqAccordion"
import { getServiceBySlug, servicesData } from "@/lib/services-data"
import type { JSX } from "react"

const stepIcons: JSX.Element[] = [
  <Phone key="0" className="w-7 h-7" />,
  <ClipboardList key="1" className="w-7 h-7" />,
  <FileText key="2" className="w-7 h-7" />,
  <HardHat key="3" className="w-7 h-7" />,
  <BadgeCheck key="4" className="w-7 h-7" />,
]

interface ServiceDetail {
  title: string
  icon: React.ReactNode
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

const serviceDetails: Record<string, ServiceDetail> = {
  "roof-repair": {
    title: "Expert Roof Repair",
    icon: <Hammer className="w-16 h-16" />,
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
    icon: <Home className="w-16 h-16" />,
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
    icon: <Droplets className="w-16 h-16" />,
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
    icon: <Star className="w-16 h-16" />,
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
    icon: <ShieldCheck className="w-16 h-16" />,
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
    icon: <Droplets className="w-16 h-16" />,
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
    icon: <Droplets className="w-16 h-16" />,
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
    icon: <ShieldCheck className="w-16 h-16" />,
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
    icon: <Search className="w-16 h-16" />,
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
    icon: <Hammer className="w-16 h-16" />,
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
    icon: <Home className="w-16 h-16" />,
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
  icon: <HardHat className="w-16 h-16" />,
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

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section variant="dark" className="bg-secondary relative py-24 overflow-hidden">
        {serviceInfo?.heroImage && (
          <>
            <Image src={serviceInfo.heroImage} alt={service.title} fill className="object-cover object-center" priority />
            <div className="absolute inset-0 bg-secondary/85" />
          </>
        )}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl space-y-8">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold text-white uppercase tracking-wider">Fully Insured & Guaranteed</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="text-base md:text-lg text-white/70 font-normal max-w-2xl leading-relaxed">
              {service.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
              <div className="space-y-6 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h3 className="text-base font-semibold text-white flex items-center gap-2 uppercase tracking-wide">
                  <CheckCircle2 className="text-accent" /> Key Benefits
                </h3>
                <ul className="space-y-4">
                  {service.heroFeatures.benefits.map((b, i) => (
                    <li key={i}>
                      <p className="font-semibold text-white leading-snug mb-1">{b.title}</p>
                      <p className="text-sm font-semibold text-white/50">{b.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6 p-8 rounded-3xl bg-accent/10 border border-accent/20 backdrop-blur-sm">
                <h3 className="text-base font-semibold text-white flex items-center gap-2 uppercase tracking-wide">
                  <AlertTriangle className="text-accent" /> Warning Signs
                </h3>
                <ul className="space-y-4">
                  {service.heroFeatures.warnings.map((w, i) => (
                    <li key={i}>
                      <p className="font-semibold text-white leading-snug mb-1">{w.title}</p>
                      <p className="text-sm font-semibold text-white/50">{w.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-12 px-8 font-semibold group" asChild>
                <Link href="/contact">Get a Free Quote</Link>
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
            <div className="grid gap-6">
              {service.difference.features.map((f, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-primary">{f.title}</h4>
                    <p className="text-slate-500 font-semibold">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-12 rounded-[3rem] bg-accent text-white space-y-8">
            <ShieldCheck className="w-16 h-16" />
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">Fully Insured & 25-Year Guarantees</h3>
            <p className="text-base font-normal opacity-80 leading-relaxed">
              Every project is backed by our comprehensive insurance and long-term warranties. We don&apos;t just fix roofs; we build lasting trust.
            </p>
            <div className="pt-4 flex gap-4">
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
            description="From your first call to the signed-off finish — here's exactly what to expect."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-4">
            {serviceInfo.steps.map((step, i) => (
              <div key={i} className="relative">
                {i < serviceInfo.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-white/10 z-0" />
                )}
                <div className="relative z-10 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-white shadow-lg shadow-accent/30 shrink-0">
                      {stepIcons[i] ?? <BadgeCheck className="w-7 h-7" />}
                    </div>
                    <span className="text-4xl font-bold text-white/10 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {service.process.map((p, i) => (
              <div key={i} className="relative p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="text-5xl font-bold text-slate-100 mb-6 leading-none">
                  {p.step}
                </div>
                <h4 className="text-xl font-semibold mb-4 tracking-tight text-primary">{p.title}</h4>
                <p className="text-slate-500 font-semibold leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Technical & Pricing Grid */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 space-y-8">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent">
              <HardHat className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-primary">Technical Standards</h3>
            <p className="text-lg font-semibold text-slate-600 leading-relaxed">
              {service.technical}
            </p>
            <ul className="grid gap-3">
              {["BS 5534 Compliant", "Health & Safety Registered", "Full PPE & Safety Equipment", "Daily Site Cleanups"].map((t, i) => (
                <li key={i} className="flex gap-3 items-center font-bold text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-accent" /> {t}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-10 rounded-[3rem] bg-secondary text-white space-y-8">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-accent">
              <BadgePercent className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">What Affects Cost?</h3>
            <p className="text-base font-normal opacity-60">Transparency is key. Here are the variables we consider when providing your fixed-price quote:</p>
            <div className="grid gap-4">
              {service.pricingFactors.map((f: string, i: number) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="font-bold">{f}</p>
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
            <div className="text-center pt-4">
              <Button size="lg" variant="outline" className="font-semibold group border-slate-300" asChild>
                <Link href="/about#gallery">
                  View Full Gallery
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-accent/5 border border-accent/10">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-primary">Honest Advice, Always</p>
                    <p className="text-slate-500 font-medium text-sm mt-1">We'll tell you if you don't need the work — and exactly why if you do.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-accent/5 border border-accent/10">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-primary">Fully Insured</p>
                    <p className="text-slate-500 font-medium text-sm mt-1">Public liability and employer's liability insurance as standard.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-accent/5 border border-accent/10">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-primary">Written Guarantee</p>
                    <p className="text-slate-500 font-medium text-sm mt-1">All major works backed by a formal written workmanship guarantee.</p>
                  </div>
                </div>
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
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {service.areas.map((area: string, i: number) => (
              <div key={i} className="px-6 py-3 rounded-full bg-white border border-slate-200 font-bold text-slate-600 flex items-center gap-2 shadow-sm hover:border-accent hover:text-accent transition-all">
                <MapPin className="w-4 h-4" />
                {area}
              </div>
            ))}
          </div>
          <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white shadow-sm border border-slate-100">
               <div className="w-12 h-12 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-600 animate-pulse"></div>
               </div>
               <div className="text-left">
                  <p className="font-semibold text-primary leading-snug mb-1">Live Activity</p>
                  <p className="text-sm font-bold text-slate-500">Recently completed a job in Whitley Bay</p>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="accent">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Start your repair today.
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="h-12 px-8 font-semibold" asChild>
              <Link href="/contact">Get a Free Quote</Link>
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
