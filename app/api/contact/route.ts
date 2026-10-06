// Forwards enquiries to Web3Forms. The recipient (jlroofcare@mail.com) is fixed by the
// email the WEB3FORMS_ACCESS_KEY was generated for at web3forms.com.
const UK_NATIONAL_NUMBER = /^[1-9]\d{9}$/

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY
  if (!accessKey) {
    return Response.json({ success: false, message: "Form is not configured." }, { status: 500 })
  }

  let body: { name?: unknown; phone?: unknown; message?: unknown; botcheck?: unknown }
  try {
    body = await request.json()
  } catch {
    return Response.json({ success: false, message: "Invalid request." }, { status: 400 })
  }

  // Honeypot: bots fill this in; pretend success without sending.
  if (body.botcheck) return Response.json({ success: true })

  const name = typeof body.name === "string" ? body.name.trim() : ""
  const digits = typeof body.phone === "string" ? body.phone.replace(/\D/g, "") : ""
  const message = typeof body.message === "string" ? body.message.trim() : ""

  if (!name || name.length > 100 || !UK_NATIONAL_NUMBER.test(digits) || !message || message.length > 3000) {
    return Response.json({ success: false, message: "Please check your details." }, { status: 400 })
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New enquiry from ${name} - JL Roofing website`,
        from_name: "JL Roofing Website",
        name,
        phone: `+44${digits}`,
        message,
      }),
    })
    const data = await res.json().catch(() => null)
    if (!res.ok || !data?.success) {
      return Response.json({ success: false, message: "Could not send your enquiry." }, { status: 502 })
    }
    return Response.json({ success: true })
  } catch {
    return Response.json({ success: false, message: "Could not send your enquiry." }, { status: 502 })
  }
}
