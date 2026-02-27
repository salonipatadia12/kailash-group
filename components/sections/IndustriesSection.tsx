'use client'

import { motion } from 'framer-motion'

const segments = [
  {
    num: '01',
    title: 'Manufacturing',
    description:
      'Strapping rolls and stretch films for securing finished goods and pallets coming off the production line.',
  },
  {
    num: '02',
    title: 'Logistics & Warehousing',
    description:
      'Heavy-duty PET straps and BOPP tape for protecting cargo through storage, handling, and long-haul transport.',
  },
  {
    num: '03',
    title: 'Trading & Commerce',
    description:
      'Tape rolls and taping machines for sealing cartons and parcels efficiently at dispatch and fulfilment centres.',
  },
] as const

export function IndustriesSection() {
  return (
    <section
      className="py-16 lg:py-24"
      aria-labelledby="industries-heading"
      style={{ backgroundColor: '#ffffff' }}
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
              Who We Serve
            </span>
          </div>
          <h2
            id="industries-heading"
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: 'var(--font-heading)', color: '#061553' }}
          >
            Built for Indian Industry.
          </h2>
        </div>

        {/* Segment cards — numbered editorial style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-px" style={{ backgroundColor: '#e5e7eb' }}>
          {segments.map((seg, i) => (
            <motion.div
              key={seg.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col p-8 lg:p-10"
              style={{
                backgroundColor: '#ffffff',
                borderLeft: '3px solid #f3cf2d',
              }}
            >
              <span
                className="text-xs font-bold mb-4 tabular-nums"
                style={{ color: 'rgba(243,207,45,0.65)' }}
              >
                {seg.num}
              </span>
              <h3
                className="text-xl sm:text-2xl font-bold mb-3 leading-tight"
                style={{ fontFamily: 'var(--font-heading)', color: '#061553' }}
              >
                {seg.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                {seg.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
