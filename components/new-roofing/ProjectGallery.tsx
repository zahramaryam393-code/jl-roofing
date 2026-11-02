"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react"

export type GalleryPhoto = {
  src: string
  label: string
  width: number
  height: number
  video?: boolean
}

export type GalleryStage = {
  title: string
  photos: GalleryPhoto[]
}

// Target row height in px. Tiles grow from this in proportion to their aspect
// ratio, so rows fill the width without cropping portrait photos.
const ROW_HEIGHT = 230

export function ProjectGallery({ stages }: { stages: GalleryStage[] }) {
  const photos = stages.flatMap((stage) => stage.photos)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const step = useCallback(
    (by: number) => {
      setOpenIndex((i) => (i === null ? i : (i + by + photos.length) % photos.length))
    },
    [photos.length]
  )

  useEffect(() => {
    const dialog = dialogRef.current
    if (openIndex !== null && dialog && !dialog.open) dialog.showModal()
  }, [openIndex])

  const current = openIndex === null ? null : photos[openIndex]

  return (
    <>
      <div className="space-y-12">
        {stages.map((stage, stageIndex) => (
          <div key={stage.title}>
            <h3 className="flex items-baseline gap-3 text-xl md:text-2xl font-extrabold mb-4">
              <span className="text-accent-hover tabular-nums">{stageIndex + 1}</span>
              {stage.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {stage.photos.map((photo, photoIndex) => {
                const index = photos.indexOf(stage.photos[0]) + photoIndex
                const ratio = photo.width / photo.height
                return (
                  <li
                    key={photo.src}
                    className="min-w-0"
                    style={{ flex: `${ratio} 1 ${ratio * ROW_HEIGHT}px`, aspectRatio: ratio }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(index)}
                      aria-label={`View larger: ${photo.label}`}
                      className="group relative block w-full h-full overflow-hidden bg-slate-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      {photo.video ? (
                        <video
                          src={`${photo.src}#t=0.5`}
                          muted
                          playsInline
                          preload="metadata"
                          tabIndex={-1}
                          aria-hidden
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img
                          src={photo.src}
                          alt=""
                          width={photo.width}
                          height={photo.height}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                        />
                      )}
                      {photo.video && (
                        <span className="absolute left-3 top-3 flex items-center gap-1.5 bg-primary/85 text-white text-xs font-semibold px-2.5 py-1.5">
                          <Play className="w-3 h-3 fill-current" /> Video
                        </span>
                      )}
                      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-2.5 pt-10 text-left text-white text-sm font-medium leading-snug opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                        {photo.label}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Project photos"
        onClose={() => setOpenIndex(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialogRef.current?.close()
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") step(-1)
          if (e.key === "ArrowRight") step(1)
        }}
        className="fixed inset-0 m-0 h-dvh w-dvw max-h-none max-w-none bg-black/95 text-white p-4 md:p-8 open:flex flex-col"
      >
        {current && (
          <>
            <div className="flex items-center justify-between gap-4 pb-3">
              <p className="text-sm text-white/70 tabular-nums">
                {openIndex! + 1} of {photos.length}
              </p>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label="Close"
                className="p-2 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 min-h-0 flex items-center justify-center">
              {current.video ? (
                <video key={current.src} src={current.src} controls autoPlay playsInline className="max-w-full max-h-full" />
              ) : (
                <img key={current.src} src={current.src} alt={current.label} className="max-w-full max-h-full object-contain" />
              )}
            </div>
            <div className="flex items-center justify-between gap-4 pt-3">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="p-2 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <p className="text-center font-medium">{current.label}</p>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photo"
                className="p-2 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </div>
          </>
        )}
      </dialog>
    </>
  )
}
