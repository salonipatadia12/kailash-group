'use client'

import { motion } from 'framer-motion'
import { Target, Eye, CheckCircle2 } from 'lucide-react'
import { company, missionPoints } from '@/theme/tokens'

export function MissionSection() {
  return (
    <section
      className="py-16 lg:py-24"
      id="mission"
      aria-labelledby="mission-heading"
      style={{ backgroundColor: '#061553' }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12" style={{ backgroundColor: '#f3cf2d' }} />
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: '#f3cf2d' }}
            >
              Our Purpose
            </span>
            <div className="h-px w-12" style={{ backgroundColor: '#f3cf2d' }} />
          </div>
          <h2
            id="mission-heading"
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Mission &amp; Vision
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="flex items-center justify-center h-10 w-10 rounded-full shrink-0"
                style={{ backgroundColor: '#f3cf2d' }}
                aria-hidden="true"
              >
                <Target className="h-5 w-5" style={{ color: '#061553' }} />
              </div>
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Our Mission
              </h3>
            </div>

            <ul className="space-y-4" aria-label="Mission points">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-5 w-5 mt-0.5 shrink-0"
                    style={{ color: '#f3cf2d' }}
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.80)' }}>
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="flex items-center justify-center h-10 w-10 rounded-full shrink-0"
                style={{ backgroundColor: '#f3cf2d' }}
                aria-hidden="true"
              >
                <Eye className="h-5 w-5" style={{ color: '#061553' }} />
              </div>
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Our Vision
              </h3>
            </div>

            <blockquote
              className="relative pl-6 py-6 pr-6 rounded-xl"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                style={{ backgroundColor: '#f3cf2d' }}
                aria-hidden="true"
              />
              <p
                className="text-base leading-relaxed italic"
                style={{ color: 'rgba(255,255,255,0.90)' }}
              >
                &ldquo;{company.vision}&rdquo;
              </p>
            </blockquote>

            {/* Trust indicators */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: '30+', label: 'Years Experience' },
                { value: 'B2B', label: 'Focused' },
                { value: '5', label: 'Product Lines' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl"
                  style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                >
                  <p
                    className="text-2xl font-bold"
                    style={{ fontFamily: 'var(--font-heading)', color: '#f3cf2d' }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.60)' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
