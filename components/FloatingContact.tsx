"use client"
import { useEffect, useState } from "react"

const WA_URL =
  "https://api.whatsapp.com/send/?phone=447486494947&text=I+came+from+your+google+ads&type=phone_number&app_absent=0"
const PHONE_URL = "tel:+447486494947"
const PHONE_DISPLAY = "07486 494947"

function WhatsAppIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.4 10.68 19.79 19.79 0 01.36 2.05 2 2 0 012.34 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-.78a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  )
}

export function FloatingContact() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null

  return (
    <>
      <style>{`
        @keyframes fc-ring {
          0% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes fc-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
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
          0%, 100% { box-shadow: 0 0 20px rgba(37,211,102,0.6), 0 0 40px rgba(37,211,102,0.3); }
          50% { box-shadow: 0 0 35px rgba(37,211,102,0.9), 0 0 70px rgba(37,211,102,0.5); }
        }
        .fc-bob { animation: fc-bob 2.8s ease-in-out infinite; }
        .fc-wiggle { animation: fc-wiggle 4s ease-in-out infinite; transform-origin: center; }
        .fc-glow { animation: fc-glow 2.2s ease-in-out infinite; }
        .fc-shimmer::after {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent);
          animation: fc-shimmer 3s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .fc-bob, .fc-wiggle, .fc-glow { animation: none !important; }
          .fc-shimmer::after { animation: none; }
          .fc-ring { display: none; }
        }
      `}</style>

      {/* Desktop WhatsApp */}
      
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fc-bob hidden md:flex fixed bottom-6 right-6 z-50 items-center"
      >
        <span className="relative flex items-center">
          {/* Pulsing rings */}
          <span
            className="fc-ring absolute inset-0 rounded-full bg-[#25D366]"
            style={{ animation: "fc-ring 2s ease-out infinite" }}
          />
          <span
            className="fc-ring absolute inset-0 rounded-full bg-[#25D366]"
            style={{ animation: "fc-ring 2s ease-out infinite 1s" }}
          />

          <span className="fc-glow fc-shimmer relative flex items-center gap-3 px-6 py-4 rounded-full bg-[#25D366] text-white font-semibold overflow-hidden transition-transform duration-300 hover:scale-110">
            <span className="fc-wiggle flex">
              <WhatsAppIcon />
            </span>
            <span className="relative whitespace-nowrap">WhatsApp Us</span>
          </span>
        </span>
      </a>

      {/* Mobile Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex shadow-[0_-5px_25px_rgba(0,0,0,0.35)]">
        
          href={PHONE_URL}
          className="fc-shimmer relative flex-1 flex items-center justify-center gap-3 py-4 bg-[#0F172A] text-white font-semibold overflow-hidden transition-all duration-300 hover:bg-[#1e293b] active:scale-95"
        >
          <span className="fc-wiggle flex"><PhoneIcon /></span>
          <span>{PHONE_DISPLAY}</span>
        </a>

        <div className="w-[2px] bg-white/20" />

        
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fc-glow fc-shimmer relative flex-1 flex items-center justify-center gap-3 py-4 bg-[#25D366] text-white font-semibold overflow-hidden transition-all duration-300 hover:brightness-110 active:scale-95"
        >
          <span className="fc-wiggle flex"><WhatsAppIcon /></span>
          <span>WhatsApp</span>
        </a>
      </div>

      <div className="md:hidden h-16" aria-hidden="true" />
    </>
  )
}
