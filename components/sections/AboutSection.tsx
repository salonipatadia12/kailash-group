'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, animate } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { company } from '@/theme/tokens'

const proofPoints = [
  { num: '01', text: 'Professionally managed distribution firm since 1996' },
  { num: '02', text: 'Serving manufacturers, logistics providers & warehouses' },
  { num: '03', text: 'Quality, consistency, and timely delivery — always' },
  { num: '04', text: 'Long-term partnerships built on transparency' },
] as const

function CounterNumber() {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const motionCount = useMotionValue(0)

  useEffect(() => {
    if (!isInView) return

    const controls = animate(motionCount, 30, {
      duration: 2.2,
      ease: 'easeOut',
    })

    const unsubscribe = motionCount.on('change', (v) => {
      if (ref.current) ref.current.textContent = String(Math.round(v))
    })

    return () => {
      controls.stop()
      unsubscribe()
    }
  }, [isInView, motionCount])

  return (
    <span ref={ref} aria-label="30 years in business">
      0
    </span>
  )
}

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-5">

        {/* LEFT PANEL — Giant number, dark navy */}
        <div
          className="lg:col-span-2 flex flex-col items-center justify-center px-8 py-20 lg:py-28 min-h-[280px]"
          style={{ backgroundColor: '#061553' }}
          aria-hidden="true"
        >
          <div className="text-center select-none">
            <div
              className="font-bold leading-none"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(6rem, 18vw, 14rem)',
                color: 'rgba(243,207,45,0.90)',
                letterSpacing: '-0.04em',
              }}
            >
              <CounterNumber />
            </div>
            <div
              className="mt-5"
              style={{ borderTop: '1px solid rgba(243,207,45,0.22)', paddingTop: '1rem' }}
            >
              <p
                className="text-sm font-bold uppercase tracking-[0.4em]"
                style={{ color: 'rgba(255,255,255,0.30)' }}
              >
                Years in Business
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL — Proof statements, white */}
        <div className="lg:col-span-3 bg-white px-8 sm:px-12 py-16 lg:py-24 flex flex-col justify-center">

          {/* Section label */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: '#f3cf2d' }}
            >
              About Us
            </span>
            <div className="h-px w-12" style={{ backgroundColor: '#f3cf2d' }} />
          </div>

          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-bold mb-10 leading-tight"
            style={{ fontFamily: 'var(--font-heading)', color: '#061553' }}
          >
            Mumbai&apos;s Trusted
            <br />
            Packaging Partner
          </h2>

          {/* Proof points — numbered list with hairlines */}
          <div role="list" aria-label="Company highlights">
            {proofPoints.map((point, i) => (
              <motion.div
                key={point.num}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-5 py-4"
                style={{ borderTop: '1px solid #f3f4f6' }}
                role="listitem"
              >
                <span
                  className="text-xs font-bold shrink-0 w-8"
                  style={{ color: 'rgba(243,207,45,0.55)' }}
                  aria-hidden="true"
                >
                  {point.num}
                </span>
                <p className="text-sm sm:text-base leading-snug" style={{ color: '#444444' }}>
                  {point.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div
            className="mt-10 pt-6"
            style={{ borderTop: '1px solid #f3f4f6' }}
          >
            <a
              href={`https://wa.me/${company.phoneRaw}?text=Hello%2C%20I%20am%20interested%20in%20your%20packaging%20products.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#061553]"
              style={{ color: '#999999' }}
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
