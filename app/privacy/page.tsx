import type { Metadata } from "next"
import { Section, SectionHeader } from "@/components/Section"

export const metadata: Metadata = {
  title: "Privacy Policy | JL Roofing & Property Maintenance",
  description:
    "How JL Roofing & Property Maintenance collects, uses and protects your personal information.",
}

const sections = [
  {
    title: "Who We Are",
    body: [
      "This website is operated by JL Roofing & Property Maintenance, a roofing and property maintenance business serving homeowners across the North East of England. References to \"we\", \"us\" and \"our\" in this policy refer to JL Roofing & Property Maintenance.",
      "We are committed to protecting your privacy and handling your personal information in line with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.",
    ],
  },
  {
    title: "Information We Collect",
    body: [
      "When you use the contact form on our website, you provide your name, phone number, email address, the service you are interested in and any details you include in your message.",
      "When you contact us by phone, WhatsApp or email, we receive the information you choose to share with us, such as your contact details, property address and details of the work required.",
      "We may also collect limited technical information automatically when you visit our website, such as your browser type, device, pages visited and general location, through analytics tools described below.",
    ],
  },
  {
    title: "How Our Contact Form Works",
    body: [
      "Our contact form does not store your details on our website. When you press \"Send Enquiry\", your name, phone number and message are sent by email to us through Web3Forms, a form-handling service, in line with Web3Forms' own privacy policy. If you contact us by WhatsApp instead, your message is handled by WhatsApp in line with WhatsApp's own privacy policy.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "We use the information you provide to respond to your enquiry, arrange surveys and site visits, prepare quotes, carry out and manage the work you request, provide aftercare and handle any guarantee or warranty matters.",
      "We do not sell, rent or trade your personal information, and we will not use it to send you marketing without your consent.",
    ],
  },
  {
    title: "Legal Basis for Processing",
    body: [
      "We process your personal information where it is necessary to take steps at your request before entering into a contract, to perform a contract with you, to meet our legal obligations, or where we have a legitimate interest in running and improving our business.",
    ],
  },
  {
    title: "Cookies and Analytics",
    body: [
      "Our website uses Google Tag Manager, which may load analytics services that use cookies to help us understand how visitors use our site. This information is collected in an aggregated form and helps us improve the website.",
      "You can control or block cookies through your browser settings. Blocking cookies will not prevent you from using our website.",
    ],
  },
  {
    title: "Sharing Your Information",
    body: [
      "We only share your information where necessary, for example with suppliers or subcontractors involved in your project, with service providers that help us run our business (such as WhatsApp and Google), or where we are required to do so by law.",
    ],
  },
  {
    title: "How Long We Keep Your Information",
    body: [
      "We keep your personal information only for as long as necessary to provide our services, honour any guarantees, and meet our legal, accounting and insurance obligations. Enquiries that do not lead to work are deleted once they are no longer needed.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You have the right to request access to the personal information we hold about you, to ask us to correct or delete it, to object to or restrict how we use it, and to request a copy of it in a portable format.",
      "If you are unhappy with how we have handled your information, you have the right to complain to the Information Commissioner's Office (ICO) at ico.org.uk.",
    ],
  },
  {
    title: "Guarantees",
    body: ["Repairs to older roofs are not covered by a guarantee."],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this policy from time to time. Any changes will be posted on this page.",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <Section variant="dark" className="bg-secondary">
        <SectionHeader
          dark
          subtitle="Our Policy"
          title="PRIVACY POLICY"
          description="How we collect, use and protect your personal information when you use our website or get in touch with us."
          className="mb-0"
        />
      </Section>

      {/* Content */}
      <Section>
        <div className="max-w-3xl space-y-10">
          {sections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-primary">{section.title}</h3>
              {section.body.map((paragraph, i) => (
                <p key={i} className="text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          <div className="space-y-3">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-primary">Contact Us</h3>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about this policy or wish to exercise your rights, please contact us:
            </p>
            <ul className="text-slate-600 leading-relaxed space-y-1">
              <li>
                Email:{" "}
                <a href="mailto:info@jlroofing.co.uk" className="text-accent font-semibold hover:underline">
                  info@jlroofing.co.uk
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+447486494947" className="text-accent font-semibold hover:underline">
                  07486 494947
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
