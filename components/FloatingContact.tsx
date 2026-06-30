"use client"
import { useEffect, useState } from "react"

const WA_URL =
  "https://api.whatsapp.com/send/?phone=447486494947&text=I+came+from+your+google+ads&type=phone_number&app_absent=0"
const PHONE_URL = "tel:+447486494947"
const PHONE_DISPLAY = "07486 494947"

function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
    </svg>
  )
}

function PhoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.4 10.68 19.79 19.79 0 01.36 2.05 2 2 0 012.34 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-.78a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  )
}

// Star positions: [top, left, animDelay, size]
const STAR_POSITIONS = [
  { style: { top: "-14px", left: "50%", transform: "translateX(-50%)" }, delay: "0s",    size: 7  },
  { style: { top: "4px",   right: "-14px" },                              delay: "0.5s",  size: 5  },
  { style: { bottom: "3px", right: "-12px" },                             delay: "1.0s",  size: 8  },
  { style: { bottom: "-14px", left: "50%", transform: "translateX(-50%)" }, delay: "1.5s", size: 6 },
  { style: { bottom: "4px",  left: "-12px" },                             delay: "2.0s",  size: 5  },
  { style: { top: "4px",    left: "-14px" },                              delay: "2.5s",  size: 7  },
  { style: { top: "50%",    right: "-16px", transform: "translateY(-50%)" }, delay: "0.75s", size: 4 },
  { style: { top: "50%",    left: "-16px",  transform: "translateY(-50%)" }, delay: "1.75s", size: 4 },
]

export function FloatingContact() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <style>{`
        @keyframes fc-ring {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.8); opacity: 0; }
        }
        @keyframes fc-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        @keyframes fc-wiggle {
          0%, 88%, 100% { transform: rotate(0deg); }
          90% { transform: rotate(-14deg); }
          92% { transform: rotate(14deg); }
          94% { transform: rotate(-10deg); }
          96% { transform: rotate(10deg); }
          98% { transform: rotate(-4deg); }
        }
        @keyframes fc-shimmer {
          0% { transform: translateX(-120%) skewX(-20deg); }
          100% { transform: translateX(220%) skewX(-20deg); }
        }
        @keyframes fc-glow {
          0%, 100% {
            box-shadow:
              0 0 18px 4px rgba(37,211,102,0.7),
              0 0 40px 10px rgba(37,211,102,0.4),
              0 0 70px 20px rgba(37,211,102,0.15);
          }
          50% {
            box-shadow:
              0 0 30px 8px rgba(37,211,102,0.95),
              0 0 60px 18px rgba(37,211,102,0.6),
              0 0 100px 30px rgba(37,211,102,0.25);
          }
        }
        @keyframes fc-star {
          0%, 100% { transform: scale(0) rotate(0deg); opacity: 0; }
          30%       { opacity: 1; }
          50%       { transform: scale(1) rotate(72deg); opacity: 1; }
          80%       { transform: scale(0.5) rotate(120deg); opacity: 0.4; }
        }
        .fc-bob    { animation: fc-bob 2.8s ease-in-out infinite; }
        .fc-wiggle { animation: fc-wiggle 4s ease-in-out infinite; transform-origin: center; }
        .fc-glow   { animation: fc-glow 2.2s ease-in-out infinite; }
        .fc-shimmer::after {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent);
          animation: fc-shimmer 3s ease-in-out infinite;
        }
        .fc-star {
          position: absolute;
          pointer-events: none;
          animation: fc-star 2.5s ease-in-out infinite;
        }
        .fc-star::before,
        .fc-star::after {
          content: "";
          position: absolute;
          background: #fff;
          border-radius: 1px;
        }
        .fc-star::before {
          width: 100%; height: 2px;
          top: 50%; left: 0;
          transform: translateY(-50%);
        }
        .fc-star::after {
          width: 2px; height: 100%;
          left: 50%; top: 0;
          transform: translateX(-50%);
        }
        @media (prefers-reduced-motion: reduce) {
          .fc-bob, .fc-wiggle, .fc-glow, .fc-star { animation: none !important; }
          .fc-shimmer::after { animation: none; }
          .fc-ring { display: none; }
        }
      `}</style>

      {/* Floating WhatsApp button — visible on ALL screen sizes, bottom-right */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fc-bob fixed bottom-20 right-5 md:bottom-8 md:right-8 z-50 flex"
      >
        <span className="relative flex items-center justify-center">
          {/* Pulsing rings */}
          <span
            className="fc-ring absolute inset-0 rounded-full bg-[#25D366]"
            style={{ animation: "fc-ring 2.2s ease-out infinite" }}
          />
          <span
            className="fc-ring absolute inset-0 rounded-full bg-[#25D366]"
            style={{ animation: "fc-ring 2.2s ease-out infinite 1.1s" }}
          />

          {/* Star sparkles */}
          {STAR_POSITIONS.map((star, i) => (
            <span
              key={i}
              className="fc-star"
              style={{
                ...star.style,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDelay: star.delay,
              }}
            />
          ))}

          {/* Main circle button */}
          <span className="fc-glow fc-shimmer relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#25D366] text-white overflow-hidden transition-transform duration-300 hover:scale-110">
            <span className="fc-wiggle flex">
              <WhatsAppIcon className="w-9 h-9 md:w-11 md:h-11" />
            </span>
          </span>
        </span>
      </a>

      {/* Mobile bottom bar — phone + WhatsApp */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex shadow-[0_-5px_25px_rgba(0,0,0,0.35)]">
        <a
          href={PHONE_URL}
          className="fc-shimmer relative flex-1 flex items-center justify-center gap-3 py-4 bg-[#0F172A] text-white font-semibold overflow-hidden transition-all duration-300 hover:bg-[#1e293b] active:scale-95"
        >
          <span className="fc-wiggle flex">
            <PhoneIcon />
          </span>
          <span>{PHONE_DISPLAY}</span>
        </a>

        <div className="w-[2px] bg-white/20" />

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fc-glow fc-shimmer relative flex-1 flex items-center justify-center gap-3 py-4 bg-[#25D366] text-white font-semibold overflow-hidden transition-all duration-300 hover:brightness-110 active:scale-95"
        >
          <span className="fc-wiggle flex">
            <WhatsAppIcon />
          </span>
          <span>WhatsApp</span>
        </a>
      </div>

      <div className="md:hidden h-16" aria-hidden="true" />
    </>
  )
}
