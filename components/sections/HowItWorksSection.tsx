'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Share Your Requirements',
    description:
      'Tell us the product, specification (width, thickness, grade), monthly quantity, and delivery location. Call, WhatsApp, or fill the quote form.',
  },
  {
    num: '02',
    title: 'Get a Quote Fast',
    description:
      'We respond within 24 hours with pricing, availability, and lead time. No vague estimates — clear numbers you can plan against.',
  },
  {
    num: '03',
    title: 'Reliable Delivery',
    description:
      'Orders are dispatched from our Mumbai warehouse. Consistent supply on agreed timelines — the same quality every time.',
  },
] as const

export function HowItWorksSection() {
  return (
    <section
      className="py-16 lg:py-24"
      aria-labelledby="how-it-works-heading"
      style={{ backgroundColor: '#f9fafb' }}
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
              How It Works
            </span>
          </div>
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: 'var(--font-heading)', color: '#061553' }}
          >
            Ordering in Three Steps.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="absolute top-10 left-0 right-0 hidden lg:block h-px"
            style={{ backgroundColor: '#e5e7eb', marginLeft: '4%', marginRight: '4%' }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="relative flex flex-col"
              >
                {/* Circle with number */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="relative z-10 flex items-center justify-center h-20 w-20 rounded-full shrink-0"
                    style={{
                      backgroundColor: '#061553',
                      border: '3px solid #f3cf2d',
                    }}
                  >
                    <span
                      className="text-xl font-bold tabular-nums"
                      style={{ fontFamily: 'var(--font-heading)', color: '#f3cf2d' }}
                    >
                      {step.num}
                    </span>
                  </div>
                </div>

                <h3
                  className="text-xl font-bold mb-3 leading-tight"
                  style={{ fontFamily: 'var(--font-heading)', color: '#061553' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
