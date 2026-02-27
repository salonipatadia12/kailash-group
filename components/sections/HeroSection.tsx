'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { company } from '@/theme/tokens'

const heroStats = [
  { value: '30+', label: 'Years' },
  { value: '5', label: 'Products' },
  { value: 'B2B', label: 'Only' },
]

export function HeroSection() {
  return (
    <section
      className="relative flex flex-col min-h-screen overflow-hidden"
      aria-label="Hero banner"
      style={{ backgroundColor: '#061553' }}
    >
      {/* Radial depth gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 20% 50%, #0a2075 0%, #061553 60%, #040e3a 100%)',
        }}
        aria-hidden="true"
      />

      {/* Golden dot grid texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(243,207,45,0.06) 1.5px, transparent 1.5px)',
          backgroundSize: '36px 36px',
        }}
        aria-hidden="true"
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
        aria-hidden="true"
      />

      {/* Left gold accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ backgroundColor: '#f3cf2d' }}
        aria-hidden="true"
      />

      {/* Product image — right side with gradient fade */}
      <div
        className="absolute inset-y-0 right-0 hidden lg:block"
        style={{ width: '45%' }}
        aria-hidden="true"
      >
        <Image
          src="/images/PET-Strapping-Rolls.jpeg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="45vw"
        />
        {/* Left-bleeding gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, #061553 0%, rgba(6,21,83,0.85) 30%, rgba(6,21,83,0.30) 65%, transparent 100%)',
          }}
        />
        {/* Bottom gradient for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, #061553 0%, transparent 30%)',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative flex-1 flex items-center">
        <div className="container mx-auto px-4 lg:px-8 pt-28 md:pt-32 pb-16">
          <div className="max-w-2xl">

            {/* Micro-label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <span
                className="text-xs font-bold uppercase tracking-[0.35em]"
                style={{ color: 'rgba(243,207,45,0.55)' }}
              >
                Est. {company.since} &nbsp;·&nbsp; Mumbai &nbsp;·&nbsp; B2B
              </span>
            </motion.div>

            {/* Headline — mixed weight hierarchy */}
            <div className="overflow-hidden mb-3">
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-medium leading-none"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 5vw, 4rem)',
                  color: 'rgba(255,255,255,0.70)',
                  letterSpacing: '-0.01em',
                }}
              >
                Trusted
              </motion.p>
            </div>

            <div className="overflow-hidden mb-3">
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="font-bold leading-none"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(3.8rem, 10vw, 9rem)',
                  color: '#ffffff',
                  letterSpacing: '-0.03em',
                }}
              >
                Packaging
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-10">
              <motion.p
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
                className="font-bold leading-none"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(3.8rem, 10vw, 9rem)',
                  color: '#f3cf2d',
                  letterSpacing: '-0.03em',
                }}
              >
                Partner.
              </motion.p>
            </div>

            {/* Sub-description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="text-base sm:text-lg leading-relaxed mb-10"
              style={{ color: 'rgba(255,255,255,0.50)', maxWidth: '36rem' }}
            >
              Mumbai&apos;s go-to B2B distributor for manufacturers, logistics
              providers &amp; warehouses. Reliable supply since {company.since}.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link href="/products">
                <Button
                  size="lg"
                  className="gap-2 font-semibold text-base px-8"
                  style={{ backgroundColor: '#f3cf2d', color: '#061553' }}
                >
                  View Products
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Button>
              </Link>
              <a href={`tel:${company.phone}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 font-semibold text-base px-8"
                  style={{
                    borderColor: 'rgba(243,207,45,0.45)',
                    color: '#f3cf2d',
                    backgroundColor: 'transparent',
                  }}
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call Now
                </Button>
              </a>
            </motion.div>

            {/* Horizontal stat strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-8 sm:gap-12"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem' }}
              aria-label="Company highlights"
            >
              {heroStats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="text-2xl sm:text-3xl font-bold leading-none"
                    style={{ fontFamily: 'var(--font-heading)', color: '#f3cf2d' }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-xs font-medium uppercase tracking-widest mt-1"
                    style={{ color: 'rgba(255,255,255,0.35)' }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative flex flex-col items-center pb-10 gap-2">
        <span
          className="text-xs font-medium uppercase tracking-[0.3em]"
          style={{ color: 'rgba(243,207,45,0.40)' }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10"
          style={{ backgroundColor: 'rgba(243,207,45,0.30)' }}
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
