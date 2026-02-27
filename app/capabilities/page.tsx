import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { company } from '@/theme/tokens'

export const metadata: Metadata = {
  title: `Why Choose Us — ${company.name}`,
  description: `${company.name} has been a trusted B2B packaging materials supplier since ${company.since}. Reliable sourcing, quality checks, fast fulfilment, and one-vendor convenience for manufacturers, logistics, and warehouses across India.`,
  openGraph: {
    title: `Why Choose Us — ${company.name}`,
    description: `30 years of reliable packaging supply. Mumbai-based B2B distributor for manufacturers, logistics, and warehouses.`,
  },
}

const capabilities = [
  {
    num: '01',
    title: 'Reliable Sourcing',
    description:
      'We source from established manufacturers with consistent batch-to-batch quality. No grey-market substitutes. No surprise specification changes. What you order today matches what you received last month.',
  },
  {
    num: '02',
    title: 'Quality Checked',
    description:
      'Incoming stock is checked for dimensional accuracy, adhesion (for tapes), tensile tolerance (for strapping), and film uniformity before being dispatched to customers. We catch inconsistencies before they reach your line.',
  },
  {
    num: '03',
    title: 'Fast Fulfilment',
    description:
      'Mumbai-based with ready stock of all 5 product categories. For standard orders, dispatch is typically same or next working day. We understand that production delays are not an option.',
  },
  {
    num: '04',
    title: 'One Vendor Convenience',
    description:
      'All 5 packaging product categories — strapping, tape, PET straps, stretch film, and taping machines — from a single supplier. One purchase order, one relationship, one reliable point of contact.',
  },
  {
    num: '05',
    title: 'Bulk & Custom Orders',
    description:
      'Volume pricing for high-consumption accounts. Custom specifications (non-standard widths, colour, roll weights, printed tape) available for sufficiently large orders. Share your requirement and we will assess feasibility.',
  },
  {
    num: '06',
    title: '30 Years of Experience',
    description:
      'Since 1996, we have supplied packaging materials to manufacturers, logistics companies, and warehouses across India. That history means we understand what buyers actually need — spec clarity, consistent supply, and honest pricing.',
  },
]

const stats = [
  { value: '30+', label: 'Years Active' },
  { value: '5', label: 'Product Lines' },
  { value: 'B2B', label: 'Only' },
  { value: 'Mumbai', label: 'Based' },
]

export default function CapabilitiesPage() {
  return (
    <>
      {/* Page hero */}
      <div className="relative overflow-hidden" style={{ backgroundColor: '#061553' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(243,207,45,0.06) 1.5px, transparent 1.5px)',
            backgroundSize: '36px 36px',
          }}
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <p
            className="text-xs font-bold uppercase tracking-[0.3em] mb-6"
            style={{ color: 'rgba(243,207,45,0.55)' }}
          >
            Why Choose Us &nbsp;·&nbsp; Est. {company.since} &nbsp;·&nbsp; B2B
          </p>
          <h1
            className="font-bold leading-tight mb-6"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}
          >
            Why Procurement Teams{' '}
            <span style={{ color: '#f3cf2d' }}>Choose Us.</span>
          </h1>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-xl"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            We are not the cheapest option — we are the most reliable one. Consistent supply, checked quality, and honest pricing from a team that understands industrial packaging requirements.
          </p>
        </div>
      </div>

      {/* Capabilities grid */}
      <section
        aria-labelledby="capabilities-heading"
        className="py-16 lg:py-24"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{ backgroundColor: '#f3cf2d' }} />
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: '#f3cf2d' }}
            >
              Our Capabilities
            </span>
          </div>
          <h2
            id="capabilities-heading"
            className="text-3xl sm:text-4xl font-bold mb-12"
            style={{ fontFamily: 'var(--font-heading)', color: '#061553' }}
          >
            Six Reasons to Work With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: '#e5e7eb' }}>
            {capabilities.map((cap) => (
              <div
                key={cap.num}
                className="flex flex-col p-8 lg:p-10"
                style={{ backgroundColor: '#ffffff' }}
              >
                <span
                  className="text-xs font-bold mb-5 tabular-nums"
                  style={{ color: 'rgba(243,207,45,0.65)' }}
                >
                  {cap.num}
                </span>
                <h3
                  className="text-xl font-bold mb-3 leading-tight"
                  style={{ fontFamily: 'var(--font-heading)', color: '#061553' }}
                >
                  {cap.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorksSection />

      {/* Trust stats */}
      <section
        aria-label="Company highlights"
        style={{ backgroundColor: '#061553' }}
      >
        <div className="container mx-auto px-4 lg:px-8 py-14">
          <div
            className="flex flex-wrap items-center gap-0 rounded-sm overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex-1 min-w-[100px] flex flex-col items-center justify-center py-8 px-4"
                style={{
                  borderRight:
                    i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : undefined,
                  backgroundColor: 'rgba(255,255,255,0.03)',
                }}
              >
                <span
                  className="text-2xl sm:text-3xl font-bold leading-none mb-1"
                  style={{ fontFamily: 'var(--font-heading)', color: '#f3cf2d' }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs font-medium uppercase tracking-widest"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section aria-label="Work with us" style={{ backgroundColor: '#040e3a' }}>
        <div className="container mx-auto px-4 lg:px-8 py-14">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.3em] mb-2"
                style={{ color: 'rgba(243,207,45,0.55)' }}
              >
                Let&apos;s work together
              </p>
              <p
                className="text-2xl sm:text-3xl font-bold"
                style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}
              >
                Ready to place your first order?
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:shrink-0">
              <a href={`tel:${company.phone}`}>
                <Button
                  size="lg"
                  className="gap-2 font-semibold"
                  style={{ backgroundColor: '#f3cf2d', color: '#061553' }}
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {company.phone}
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 font-semibold"
                  style={{
                    borderColor: 'rgba(243,207,45,0.45)',
                    color: '#f3cf2d',
                    backgroundColor: 'transparent',
                  }}
                >
                  Get Quote
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
