"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const layers = [
  {
    name: "Timber",
    title: "Sound timber underneath",
    desc: "The old covering is stripped back so the timbers can be checked before anything new goes on. If a timber has failed, you will know about it and see it in your quote.",
    image: "/018.jpg",
    alt: "New timber lifted onto the scaffold outside a terraced house",
  },
  {
    name: "Membrane",
    title: "Breathable membrane",
    desc: "A breathable membrane keeps wind-driven rain out and lets moisture escape. With correctly detailed ventilation, it helps prevent loft condensation.",
    image: "/021.jpg",
    alt: "Breather membrane and battens fitted around a rooflight",
  },
  {
    name: "Battens",
    title: "Treated timber battens",
    desc: "Treated battens run the length of the roof, set out to suit your slate or tile. Every course on the roof hangs from them.",
    image: "/023.jpg",
    alt: "New battens running the length of the roof over blue membrane",
  },
  {
    name: "Slates",
    title: "Slate or tile, fixed to BS 5534",
    desc: "Natural slate, clay or concrete tile, chosen to suit your property and budget. Each course is laid up from the eaves and fixed to BS 5534.",
    image: "/029.jpg",
    alt: "New slates laid up from the eaves",
  },
  {
    name: "Ridge & lead",
    title: "Ridge, valleys and leadwork",
    desc: "The roof is closed off at the ridge and around chimneys, valleys and rooflights. Dry ridge and verge systems can be specified to reduce future mortar maintenance.",
    image: "/027.jpg",
    alt: "Finished dry ridge and rooflights seen from above",
  },
]

const COURSES = Array.from({ length: 13 }, (_, i) => i)

function Slope({ active }: { active: number }) {
  const layerClass = (i: number) =>
    cn(
      "transition-opacity duration-500 motion-reduce:transition-none",
      i > active ? "opacity-[0.07]" : "opacity-100"
    )

  return (
    <g transform="translate(700 92) rotate(-24)">
      <g className={layerClass(0)}>
        <rect x="-1000" y="0" width="1000" height="44" fill="#C98F55" />
        <rect x="-1000" y="30" width="1000" height="14" fill="#A87340" />
      </g>
      <rect x="-1000" y="-5" width="1000" height="5" fill="#2F7BEA" className={layerClass(1)} />
      <g className={layerClass(2)}>
        {COURSES.map((i) => (
          <rect key={i} x={-52 - i * 72} y="-20" width="22" height="15" rx="1" fill="#E4B98A" />
        ))}
      </g>
      <g className={layerClass(3)}>
        {COURSES.map((i) => (
          <rect
            key={i}
            x={-186 - i * 72}
            y="-33"
            width="166"
            height="9"
            rx="1"
            fill={i % 2 ? "#566273" : "#6B7888"}
            transform={`rotate(2.6 ${-20 - i * 72} -26)`}
          />
        ))}
      </g>
    </g>
  )
}

export function RoofLayers() {
  const [active, setActive] = useState(3)
  const layer = layers[active]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
      <div className="min-w-0">
        <svg
          viewBox="300 -24 800 330"
          className="w-full h-auto block"
          role="img"
          aria-label={`Cross-section of a pitched roof, showing the layers up to ${layer.name.toLowerCase()}`}
        >
          <Slope active={active} />
          <g transform="translate(1400 0) scale(-1 1)">
            <Slope active={active} />
          </g>
          <path
            d="M622 84 Q700 24 778 84 L778 102 Q700 42 622 102 Z"
            fill="#9AA6B4"
            className={cn(
              "transition-opacity duration-500 motion-reduce:transition-none",
              active === 4 ? "opacity-100" : "opacity-[0.07]"
            )}
          />
        </svg>

        <div
          className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-px bg-white/10 border border-white/10"
          role="group"
          aria-label="Roof layers, from the timbers up"
        >
          {layers.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={cn(
                "bg-primary px-3 py-4 text-left transition-colors last:col-span-2 sm:last:col-span-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent",
                i === active ? "bg-accent text-white" : "text-white/70 hover:bg-secondary hover:text-white"
              )}
            >
              <span className="block text-xs tabular-nums opacity-70">{i + 1} of {layers.length}</span>
              <span className="block font-display font-bold text-lg leading-tight mt-1">{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div aria-live="polite">
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
          <img
            key={layer.image}
            src={layer.image}
            alt={layer.alt}
            width={1280}
            height={960}
            decoding="async"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <h3 className="mt-6 text-2xl md:text-3xl font-extrabold text-white">{layer.title}</h3>
        <p className="mt-3 text-white/70 leading-relaxed">{layer.desc}</p>
      </div>
    </div>
  )
}
