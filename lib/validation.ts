// Shared enquiry validation used by the contact form and the /api/contact route.
// Phone numbers are stored as the UK national significant number (no +44, no leading 0).

export const UK_COUNTRY_CODE = "+44"

// 1x geographic numbers are 9 or 10 digits; 2x/3x geographic, 7x mobile and 8x numbers are 10.
const UK_NATIONAL_NUMBER = /^(?:1\d{8,9}|[2378]\d{9})$/
const NAME_PATTERN = /^[\p{L}][\p{L}\s'.-]*$/u

export const NAME_MAX = 100
export const MESSAGE_MIN = 10
export const MESSAGE_MAX = 3000

// Turns whatever the user typed or pasted (+44 7486 494947, 0044..., (0)7486..., 07486...)
// into the national number. UK national numbers never start with 4, so a leading 44 is the country code.
export function normalizeUkPhone(value: string): string {
  let digits = value.replace(/\D/g, "")
  if (digits.startsWith("0044")) digits = digits.slice(4)
  else if (digits.startsWith("44") && digits.length > 10) digits = digits.slice(2)
  digits = digits.replace(/^0+/, "")
  return digits.slice(0, 10)
}

export function validateName(value: string): string {
  const name = value.trim()
  if (!name) return "Please enter your name."
  if (name.length < 2) return "Name must be at least 2 characters."
  if (name.length > NAME_MAX) return `Name must be ${NAME_MAX} characters or fewer.`
  if (!NAME_PATTERN.test(name)) return "Name can only contain letters, spaces, hyphens and apostrophes."
  return ""
}

export function validatePhone(nationalNumber: string): string {
  if (!nationalNumber) return "Please enter your phone number."
  if (!UK_NATIONAL_NUMBER.test(nationalNumber)) return "Enter a valid UK number, e.g. 7486 494947"
  return ""
}

export function validateMessage(value: string): string {
  const message = value.trim()
  if (!message) return "Please describe your requirements."
  if (message.length < MESSAGE_MIN) return `Please add a little more detail (at least ${MESSAGE_MIN} characters).`
  if (message.length > MESSAGE_MAX) return `Message must be ${MESSAGE_MAX} characters or fewer.`
  return ""
}
