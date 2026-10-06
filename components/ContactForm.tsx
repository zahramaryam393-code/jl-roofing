"use client"

import { useState } from "react"
import { CheckCircle2, MessageCircle, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const callHref = "tel:+447486494947"
const whatsappHref = "https://wa.me/447486494947"

const inputClass =
  "w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent font-semibold transition-all"

type Status = "idle" | "sending" | "success" | "error"

export function ContactForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [botcheck, setBotcheck] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [phoneError, setPhoneError] = useState("")

  // The +44 prefix is fixed; users type only the national number (leading 0 optional).
  const handlePhoneChange = (value: string) => {
    let digits = value.replace(/\D/g, "")
    if (digits.startsWith("0")) digits = digits.slice(1)
    setPhone(digits.slice(0, 10))
    setPhoneError("")
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!/^[1-9]\d{9}$/.test(phone)) {
      setPhoneError("Enter a valid UK number, e.g. 7486 494947")
      return
    }

    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message, botcheck }),
      })
      const data = await res.json().catch(() => null)
      setStatus(res.ok && data?.success ? "success" : "error")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="p-8 md:p-12 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 text-center" role="status">
        <CheckCircle2 className="w-16 h-16 text-whatsapp mx-auto mb-6" />
        <h3 className="text-2xl font-bold mb-3 tracking-tight">Thank you, {name.split(" ")[0]}!</h3>
        <p className="text-slate-500 font-medium mb-8">
          We&apos;ve received your enquiry and will get back to you within a few hours. For anything urgent, call or message us now.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="h-12 px-8 font-semibold" asChild>
            <a href={callHref}>
              <Phone className="mr-2 w-5 h-5" />
              Call Us
            </a>
          </Button>
          <Button size="lg" variant="whatsapp" className="h-12 px-8 font-semibold" asChild>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8 md:p-12 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50">
      <h3 className="text-2xl font-bold mb-8 tracking-tight">Send a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="cf-name" className="text-sm font-semibold uppercase tracking-wide text-slate-400 ml-1">Full Name</label>
          <input
            id="cf-name"
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="John Doe"
            maxLength={100}
            required
            className={inputClass}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="cf-phone" className="text-sm font-semibold uppercase tracking-wide text-slate-400 ml-1">Phone Number</label>
          <div className="flex">
            <span className="inline-flex items-center h-14 px-5 rounded-l-2xl bg-slate-100 border border-r-0 border-slate-100 font-semibold text-slate-500 select-none">
              🇬🇧 +44
            </span>
            <input
              id="cf-phone"
              type="tel"
              name="phone"
              inputMode="numeric"
              autoComplete="tel-national"
              value={phone}
              onChange={(event) => handlePhoneChange(event.target.value)}
              placeholder="7486494947"
              required
              aria-invalid={!!phoneError}
              aria-describedby={phoneError ? "cf-phone-error" : undefined}
              className={`${inputClass} rounded-l-none`}
            />
          </div>
          {phoneError && <p id="cf-phone-error" className="text-sm font-semibold text-red-600 ml-1">{phoneError}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="cf-message" className="text-sm font-semibold uppercase tracking-wide text-slate-400 ml-1">Description</label>
          <textarea
            id="cf-message"
            name="message"
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Please describe your requirements..."
            maxLength={3000}
            required
            className="w-full p-6 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent font-semibold transition-all resize-none"
          />
        </div>

        {/* Honeypot, hidden from people */}
        <input
          type="checkbox"
          name="botcheck"
          checked={!!botcheck}
          onChange={(event) => setBotcheck(event.target.checked ? "1" : "")}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        {status === "error" && (
          <p className="text-sm font-semibold text-red-600" role="alert">
            Sorry, something went wrong sending your enquiry. Please try again, or call or WhatsApp us on 07486 494947.
          </p>
        )}

        <Button size="lg" className="w-full h-11 font-semibold" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Enquiry"}
          <Send className="ml-2 w-5 h-5" />
        </Button>
      </form>
    </div>
  )
}
