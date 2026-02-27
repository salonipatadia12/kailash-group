import type { Metadata } from 'next'
import { ContactSection } from '@/components/sections/ContactSection'
import { company } from '@/theme/tokens'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with ${company.name}. Call ${company.phone}, email ${company.email}, or send us a message for packaging product enquiries and pricing.`,
  openGraph: {
    title: `Contact ${company.name}`,
    description: `Reach ${company.name} for packaging product enquiries. Phone: ${company.phone}, Email: ${company.email}`,
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <div
        className="py-12 text-center"
        style={{ backgroundColor: '#061553' }}
      >
        <h1
          className="text-3xl sm:text-4xl font-bold text-white"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Contact Us
        </h1>
        <p className="mt-2 text-base" style={{ color: 'rgba(255,255,255,0.70)' }}>
          We&apos;d love to hear from you
        </p>
      </div>
      <ContactSection />
    </>
  )
}
