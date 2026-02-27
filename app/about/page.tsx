import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AboutSection } from '@/components/sections/AboutSection'
import { MissionSection } from '@/components/sections/MissionSection'
import { IndustriesSection } from '@/components/sections/IndustriesSection'
import { company } from '@/theme/tokens'

export const metadata: Metadata = {
  title: `About ${company.name}`,
  description: `Learn about ${company.name}, a professionally managed packaging materials distributor since ${company.since}. Based in Mumbai, serving manufacturers, logistics providers, and warehouses across India.`,
  openGraph: {
    title: `About ${company.name}`,
    description: `Learn about ${company.name}, a professionally managed packaging materials distributor since ${company.since}.`,
  },
}

const pageStats = [
  { value: '30+', label: 'Years Active' },
  { value: '5', label: 'Product Lines' },
  { value: '100%', label: 'B2B Focus' },
]

export default function AboutPage() {
  return (
    <>
      {/* Page hero header — split panel */}
      <div
        className="relative overflow-hidden"
        style={{ backgroundColor: '#061553' }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(243,207,45,0.06) 1.5px, transparent 1.5px)',
            backgroundSize: '36px 36px',
          }}
          aria-hidden="true"
        />

        <div className="relative container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

            {/* Left — headline */}
            <div className="lg:col-span-3">
              <p
                className="text-xs font-bold uppercase tracking-[0.3em] mb-6"
                style={{ color: 'rgba(243,207,45,0.55)' }}
              >
                Est. {company.since} &nbsp;·&nbsp; Mumbai &nbsp;·&nbsp; B2B
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
                <span style={{ color: '#f3cf2d' }}>30 Years.</span>
                <br />
                One Promise.
              </h1>
              <p
                className="text-base sm:text-lg leading-relaxed max-w-lg"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                {company.name} is a professionally managed B2B packaging
                distributor based in Mumbai. Since {company.since}, we&apos;ve
                supplied manufacturers, logistics providers, and warehouses
                across India with packaging materials they can count on.
              </p>
            </div>

            {/* Right — trust stats */}
            <div
              className="lg:col-span-2 grid grid-cols-3 lg:grid-cols-1 gap-px"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
            >
              {pageStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center lg:items-start px-6 py-6"
                  style={{ backgroundColor: '#061553' }}
                >
                  <span
                    className="text-3xl lg:text-4xl font-bold leading-none mb-1"
                    style={{ fontFamily: 'var(--font-heading)', color: '#f3cf2d' }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-xs font-medium uppercase tracking-widest"
                    style={{ color: 'rgba(255,255,255,0.40)' }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Who We Serve */}
      <IndustriesSection />

      {/* About counter + proof points */}
      <AboutSection />

      {/* Mission & Vision */}
      <MissionSection />

      {/* Bottom CTA strip */}
      <section
        aria-label="Work with us"
        style={{ backgroundColor: '#040e3a' }}
      >
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
                Work with us today.
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
