"use client"

import { useState } from "react"
import { CheckCircle2, MessageCircle, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  MESSAGE_MAX,
  NAME_MAX,
  UK_COUNTRY_CODE,
  normalizeUkPhone,
  validateMessage,
  validateName,
  validatePhone,
} from "@/lib/validation"

const callHref = "tel:+447486494947"
const whatsappHref = "https://wa.me/447486494947"

const inputClass =
  "w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent font-semibold transition-all"

type Status = "idle" | "sending" | "success" | "error"
type Field = "name" | "phone" | "message"
type Errors = Partial<Record<Field, string>>

const errorClass = "border-red-300 focus:ring-red-200 focus:border-red-400"

export function ContactForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [botcheck, setBotcheck] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [errors, setErrors] = useState<Errors>({})

  const validators: Record<Field, () => string> = {
    name: () => validateName(name),
    phone: () => validatePhone(phone),
    message: () => validateMessage(message),
  }

  const validateField = (field: Field) => setErrors((prev) => ({ ...prev, [field]: validators[field]() }))
  const clearError = (field: Field) => setErrors((prev) => (prev[field] ? { ...prev, [field]: "" } : prev))

  // The +44 prefix is fixed; users type only the national number (a pasted +44 or leading 0 is stripped).
  const handlePhoneChange = (value: string) => {
    setPhone(normalizeUkPhone(value))
    clearError("phone")
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors: Errors = { name: validators.name(), phone: validators.phone(), message: validators.message() }
    setErrors(nextErrors)
    const firstInvalid = (Object.keys(nextErrors) as Field[]).find((field) => nextErrors[field])
    if (firstInvalid) {
      document.getElementById(`cf-${firstInvalid}`)?.focus()
      return
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setStatus("error")
      return
    }

    // Honeypot: bots tick this; pretend success without sending.
    if (botcheck) {
      setStatus("success")
      return
    }

    setStatus("sending")
    try {
      // Web3Forms free plan only accepts browser requests; the destination email is set by the access key.
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New enquiry from ${name.trim()} - JL Roofing website`,
          from_name: "JL Roofing Website",
          name: name.trim(),
          phone: `${UK_COUNTRY_CODE}${phone}`,
          message: message.trim(),
        }),
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
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="cf-name" className="text-sm font-semibold uppercase tracking-wide text-slate-400 ml-1">Full Name</label>
          <input
            id="cf-name"
            type="text"
            name="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value)
              clearError("name")
            }}
            onBlur={() => name && validateField("name")}
            placeholder="John Doe"
            autoComplete="name"
            maxLength={NAME_MAX}
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "cf-name-error" : undefined}
            className={`${inputClass} ${errors.name ? errorClass : ""}`}
          />
          {errors.name && <p id="cf-name-error" className="text-sm font-semibold text-red-600 ml-1">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="cf-phone" className="text-sm font-semibold uppercase tracking-wide text-slate-400 ml-1">Phone Number</label>
          <div className="flex">
            <span className="inline-flex items-center h-14 px-5 rounded-l-2xl bg-slate-100 border border-r-0 border-slate-100 font-semibold text-slate-500 select-none">
              🇬🇧 {UK_COUNTRY_CODE}
            </span>
            <input
              id="cf-phone"
              type="tel"
              name="phone"
              inputMode="numeric"
              autoComplete="tel-national"
              value={phone}
              onChange={(event) => handlePhoneChange(event.target.value)}
              onBlur={() => phone && validateField("phone")}
              placeholder="7486494947"
              required
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "cf-phone-error" : undefined}
              className={`${inputClass} rounded-l-none ${errors.phone ? errorClass : ""}`}
            />
          </div>
          {errors.phone && <p id="cf-phone-error" className="text-sm font-semibold text-red-600 ml-1">{errors.phone}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="cf-message" className="text-sm font-semibold uppercase tracking-wide text-slate-400 ml-1">Description</label>
          <textarea
            id="cf-message"
            name="message"
            rows={4}
            value={message}
            onChange={(event) => {
              setMessage(event.target.value)
              clearError("message")
            }}
            onBlur={() => message && validateField("message")}
            placeholder="Please describe your requirements..."
            maxLength={MESSAGE_MAX}
            required
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "cf-message-error" : undefined}
            className={`w-full p-6 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent font-semibold transition-all resize-none ${errors.message ? errorClass : ""}`}
          />
          {errors.message && <p id="cf-message-error" className="text-sm font-semibold text-red-600 ml-1">{errors.message}</p>}
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
