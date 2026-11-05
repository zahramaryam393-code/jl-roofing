"use client"

import { useState } from "react"
import { CheckCircle2, MessageCircle, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
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

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validateEmail(value: string): string {
  const email = value.trim()
  if (!email) return "Please enter your email address."
  if (!EMAIL_PATTERN.test(email)) return "Enter a valid email, e.g. name@example.com"
  return ""
}

type Status = "idle" | "sending" | "success" | "error"
type Field = "name" | "phone" | "email" | "message"
type Errors = Partial<Record<Field, string>>

const glassPanel =
  "relative rounded-[2rem] border border-white/25 bg-white/10 p-6 md:p-8 shadow-2xl shadow-black/40 backdrop-blur-2xl backdrop-saturate-150 text-white"
const labelClass = "block text-xs font-bold uppercase tracking-[0.12em] text-white/90 mb-2"
const fieldBase =
  "w-full rounded-xl border-2 border-white/70 bg-white text-primary placeholder:text-slate-400 font-semibold shadow-lg shadow-black/10 transition-all focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/40"
const fieldError = "border-red-400 focus:border-red-500 focus:ring-red-400/40"
const errorText = "mt-1.5 text-sm font-semibold text-red-200"

export function LeadForm({
  idPrefix,
  title = "Book FREE Roof Inspection Today",
  description = "Find out which roofing option suits your home and what it could cost. Get expert advice, a FREE Roof Survey and a clear Written Quote (without pressure to proceed.)",
  source = "Roof Installation",
  className,
}: {
  idPrefix: string
  /** Service name used in the enquiry email subject and source line. */
  source?: string
  title?: string
  description?: string
  className?: string
}) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [botcheck, setBotcheck] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [errors, setErrors] = useState<Errors>({})

  const id = (field: Field) => `${idPrefix}-${field}`

  const validators: Record<Field, () => string> = {
    name: () => validateName(name),
    phone: () => validatePhone(phone),
    email: () => validateEmail(email),
    message: () => validateMessage(message),
  }

  const validateField = (field: Field) => setErrors((prev) => ({ ...prev, [field]: validators[field]() }))
  const clearError = (field: Field) => setErrors((prev) => (prev[field] ? { ...prev, [field]: "" } : prev))

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors: Errors = {
      name: validators.name(),
      phone: validators.phone(),
      email: validators.email(),
      message: validators.message(),
    }
    setErrors(nextErrors)
    const firstInvalid = (Object.keys(nextErrors) as Field[]).find((field) => nextErrors[field])
    if (firstInvalid) {
      document.getElementById(id(firstInvalid))?.focus()
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
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New ${source.toLowerCase()} enquiry from ${name.trim()} - JL Roofing website`,
          from_name: "JL Roofing Website",
          name: name.trim(),
          phone: `${UK_COUNTRY_CODE}${phone}`,
          email: email.trim(),
          message: message.trim(),
          page: `${source} landing page`,
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
      <div className={cn(glassPanel, "text-center", className)} role="status">
        <CheckCircle2 className="w-14 h-14 text-whatsapp mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white">Thank you, {name.trim().split(" ")[0]}!</h3>
        <p className="mt-3 text-white/80">
          We&apos;ve received your request and will be in touch shortly to arrange your FREE roof inspection.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" className="h-12 px-6 font-semibold" asChild>
            <a href={callHref}><Phone className="mr-2 w-4 h-4" />Call Us</a>
          </Button>
          <Button size="lg" variant="whatsapp" className="h-12 px-6 font-semibold" asChild>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 w-4 h-4" />WhatsApp Us</a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className={cn(glassPanel, className)}>
      <h3 className="font-display text-2xl md:text-3xl font-extrabold uppercase leading-tight tracking-tight text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/80">{description}</p>

      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
        <div>
          <label htmlFor={id("name")} className={labelClass}>Your Name</label>
          <input
            id={id("name")}
            type="text"
            name="name"
            value={name}
            onChange={(e) => { setName(e.target.value); clearError("name") }}
            onBlur={() => name && validateField("name")}
            placeholder="John Smith"
            autoComplete="name"
            maxLength={NAME_MAX}
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${id("name")}-error` : undefined}
            className={cn(fieldBase, "h-13 px-4", errors.name && fieldError)}
          />
          {errors.name && <p id={`${id("name")}-error`} className={errorText}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor={id("phone")} className={labelClass}>Phone Number</label>
          <div className="flex">
            <span className="inline-flex items-center h-13 px-3 rounded-l-xl border-2 border-r-0 border-white/70 bg-slate-100 font-semibold text-slate-600 select-none">
              🇬🇧 {UK_COUNTRY_CODE}
            </span>
            <input
              id={id("phone")}
              type="tel"
              name="phone"
              inputMode="numeric"
              autoComplete="tel-national"
              value={phone}
              onChange={(e) => { setPhone(normalizeUkPhone(e.target.value)); clearError("phone") }}
              onBlur={() => phone && validateField("phone")}
              placeholder="7486 494947"
              required
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? `${id("phone")}-error` : undefined}
              className={cn(fieldBase, "h-13 px-4 rounded-l-none", errors.phone && fieldError)}
            />
          </div>
          {errors.phone && <p id={`${id("phone")}-error`} className={errorText}>{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor={id("email")} className={labelClass}>Email</label>
          <input
            id={id("email")}
            type="email"
            name="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); clearError("email") }}
            onBlur={() => email && validateField("email")}
            placeholder="you@example.com"
            autoComplete="email"
            maxLength={254}
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `${id("email")}-error` : undefined}
            className={cn(fieldBase, "h-13 px-4", errors.email && fieldError)}
          />
          {errors.email && <p id={`${id("email")}-error`} className={errorText}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor={id("message")} className={labelClass}>Description</label>
          <textarea
            id={id("message")}
            name="message"
            rows={3}
            value={message}
            onChange={(e) => { setMessage(e.target.value); clearError("message") }}
            onBlur={() => message && validateField("message")}
            placeholder="Tell us about your roof project..."
            maxLength={MESSAGE_MAX}
            required
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? `${id("message")}-error` : undefined}
            className={cn(fieldBase, "px-4 py-3 resize-none", errors.message && fieldError)}
          />
          {errors.message && <p id={`${id("message")}-error`} className={errorText}>{errors.message}</p>}
        </div>

        {/* Honeypot, hidden from people */}
        <input
          type="checkbox"
          name="botcheck"
          checked={!!botcheck}
          onChange={(e) => setBotcheck(e.target.checked ? "1" : "")}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        {status === "error" && (
          <p className="rounded-xl bg-red-500/20 border border-red-300/40 px-4 py-3 text-sm font-semibold text-white" role="alert">
            Sorry, something went wrong sending your request. Please try again, or call or WhatsApp us on 07486 494947.
          </p>
        )}

        <Button size="lg" type="submit" className="w-full h-14 text-base font-bold uppercase tracking-wide" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Get FREE Inspection"}
          <Send className="ml-2 w-5 h-5" />
        </Button>
      </form>
    </div>
  )
}
