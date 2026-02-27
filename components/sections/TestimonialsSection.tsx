'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Kailash Enterprises has been supplying us BOPP tape for over 8 years. Consistent quality, never a short supply. Exactly what we need from a packaging partner.',
    name: 'Procurement Head',
    company: 'FMCG Manufacturer, Mumbai',
  },
  {
    quote:
      'Their PET straps handle our granite loads reliably through long-haul transport. We have tried other suppliers — nobody matches their consistency or response time.',
    name: 'Logistics Manager',
    company: 'Stone Exporter, Maharashtra',
  },
  {
    quote:
      'Quick quote turnaround and honest pricing. We source all our packaging — strapping, tape, and stretch film — from one place. Simplifies our entire procurement.',
    name: 'Warehouse Manager',
    company: 'Distribution Centre, Mumbai',
  },
] as const

export function TestimonialsSection() {
  return (
    <section
      className="py-16 lg:py-24"
      aria-labelledby="testimonials-heading"
      style={{ backgroundColor: '#061553' }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{ backgroundColor: '#f3cf2d' }} />
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: '#f3cf2d' }}
            >
              Client Feedback
            </span>
          </div>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}
          >
            Trusted by Industry Buyers.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col p-8"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderTop: '3px solid #f3cf2d',
              }}
            >
              {/* Quote mark */}
              <span
                className="text-5xl font-bold leading-none mb-4 select-none"
                style={{ fontFamily: 'var(--font-heading)', color: 'rgba(243,207,45,0.25)' }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <p
                className="text-sm leading-relaxed mb-6 flex-1"
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                {t.quote}
              </p>

              <div
                className="pt-5"
                style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
              >
                <p
                  className="text-sm font-semibold"
                  style={{ color: '#ffffff' }}
                >
                  {t.name}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                >
                  {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
