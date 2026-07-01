"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const whatsappPhone = "447486494947"

export function ContactForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [service, setService] = useState("General Enquiry")
  const [message, setMessage] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const whatsappText = [
      `Hi JL Roofing,`,`My name is ${name}.`,`Phone: ${phone}.`,`Email: ${email}.`,
      `Service: ${service}.`,`Message: ${message || "No additional information provided."}`,
    ].join(" ")

    const encodedText = encodeURIComponent(whatsappText)
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodedText}`

    window.location.href = whatsappUrl
  }

  return (
    <div className="p-8 md:p-12 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50">
      <h3 className="text-2xl font-bold mb-8 tracking-tight">Send a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase tracking-wide text-slate-400 ml-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="John Doe"
              required
              className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent font-semibold transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase tracking-wide text-slate-400 ml-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="07486 494947"
              required
              className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent font-semibold transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold uppercase tracking-wide text-slate-400 ml-1">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="john@example.com"
            required
            className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent font-semibold transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold uppercase tracking-wide text-slate-400 ml-1">How can we help?</label>
          <select
            name="service"
            value={service}
            onChange={(event) => setService(event.target.value)}
            required
            className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent font-semibold transition-all appearance-none"
          >
            <option>General Enquiry</option>
            <option>Roof Repair Quote</option>
            <option>New Roof Quote</option>
            <option>Guttering / Fascias</option>
            <option>Emergency Repair</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold uppercase tracking-wide text-slate-400 ml-1">Your Message</label>
          <textarea
            name="message"
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Please describe your requirements..."
            className="w-full p-6 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent font-semibold transition-all resize-none"
          />
        </div>

        <Button size="lg" variant="whatsapp" className="w-full h-12 font-semibold" type="submit">
          Send via WhatsApp
          <Send className="ml-2 w-5 h-5" />
        </Button>
      </form>
    </div>
  )
}
