"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Faq } from "@/lib/services-data"

export const generalFaqs: Faq[] = [
  {
    question: "Do you offer free quotes?",
    answer: "Yes, all quotes are completely free with no obligation. We visit your property, carry out a thorough assessment, and provide a clear, itemised written quote before any work begins."
  },
  {
    question: "How long does a roof replacement take?",
    answer: "A typical residential roof replacement takes between 1–3 days depending on the size and complexity. Larger or more intricate roofs with features like dormer windows or multiple chimneys may take longer. We'll give you a realistic timeframe in your quote."
  },
  {
    question: "Do you guarantee your work?",
    answer: "Absolutely. All our installations and major repairs come with a written workmanship guarantee of up to 10 years. Many of the materials we use also carry manufacturer warranties for additional peace of mind."
  },
  {
    question: "How do I know if I need a repair or a full replacement?",
    answer: "This depends on the age of your roof, the extent of damage, and the material condition. As a rule of thumb, if more than 25–30% of your roof is damaged or if it's over 20 years old, replacement is often more cost-effective long-term. Our survey will give you an honest, impartial recommendation."
  },
  {
    question: "Can you work in all weather conditions?",
    answer: "We can work in most conditions, but we won't compromise on safety or quality. Certain works like flat roofing membranes and leadwork require dry conditions to bond correctly. We'll always communicate any weather-related scheduling adjustments in advance."
  },
  {
    question: "Do I need planning permission for a new roof?",
    answer: "In most cases, like-for-like roof replacements do not require planning permission in the UK. However, changes to the roof structure, materials, or height, or properties in conservation areas, may require approval. We can advise you on this during your survey."
  },
  {
    question: "Are you fully insured?",
    answer: "Yes. We carry full public liability insurance and employer's liability insurance. Copies of our insurance certificates are available on request before work commences."
  },
  {
    question: "What signs indicate my roof needs attention?",
    answer: "Key warning signs include: damp patches on ceilings or walls, missing or cracked tiles, moss or algae growth, sagging sections, visible daylight in the loft, and granules from felt appearing in gutters. If you notice any of these, it's worth getting a professional inspection sooner rather than later."
  }
]

export function FaqAccordion({ faqs = generalFaqs }: { faqs?: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y divide-slate-200">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i}>
            <button
              className="w-full flex items-center justify-between gap-4 py-6 text-left group"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-primary group-hover:text-accent transition-colors">
                {faq.question}
              </span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-accent shrink-0 transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300",
                isOpen ? "max-h-96 pb-6" : "max-h-0"
              )}
            >
              <p className="text-slate-500 font-medium leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
