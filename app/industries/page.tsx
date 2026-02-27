import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { company } from '@/theme/tokens'

export const metadata: Metadata = {
  title: `Industries Served — ${company.name}`,
  description: `${company.name} supplies reliable packaging materials to manufacturers, logistics and warehousing firms, and trading companies across India. Based in Mumbai, serving B2B clients since ${company.since}.`,
  openGraph: {
    title: `Industries Served — ${company.name}`,
    description: `Packaging materials for manufacturing, logistics, and trading sectors. B2B supply from Mumbai since ${company.since}.`,
  },
}

const industries = [
  {
    num: '01',
    title: 'Manufacturing',
    painPoint:
      'Production lines cannot afford strapping failures or tape shortages. Every delay in secondary packaging holds up shipments and disrupts dispatch schedules.',
    description:
      'We supply PP strapping rolls, PET straps, and stretch films sized for production line throughput — consistent quality, reliable replenishment, and specs matched to your machinery.',
    products: [
      { name: 'Strapping Rolls', slug: 'strapping-rolls' },
      { name: 'PET Straps', slug: 'pet-straps' },
      { name: 'Stretch Films', slug: 'stretch-films' },
      { name: 'Taping Machine', slug: 'taping-machine' },
    ],
    useCases: [
      'Securing finished goods coming off the production line',
      'Palletizing packed cartons before dispatch',
      'Wrapping mixed SKU pallets for warehouse storage',
      'Carton sealing at end-of-line packing stations',
    ],
  },
  {
    num: '02',
    title: 'Logistics & Warehousing',
    painPoint:
      'Cargo in transit faces vibration, moisture, and handling stress. Strapping that loses tension mid-journey causes load shifts — a costly and safety-critical problem.',
    description:
      'PET strapping retains tension through transit better than PP, making it the right choice for long-haul logistics. Combined with stretch film, it protects pallets from moisture, dust, and pilferage.',
    products: [
      { name: 'PET Straps', slug: 'pet-straps' },
      { name: 'Stretch Films', slug: 'stretch-films' },
      { name: 'BOPP Tape Rolls', slug: 'bopp-tapes' },
      { name: 'Strapping Rolls', slug: 'strapping-rolls' },
    ],
    useCases: [
      'Securing pallets for long-haul road and rail transport',
      'Protecting cargo from moisture and dust in open warehouses',
      'Unitizing mixed loads for 3PL operations',
      'Sealing cartons at inbound and outbound docking stations',
    ],
  },
  {
    num: '03',
    title: 'Trading & Commerce',
    painPoint:
      'High-volume dispatch operations need packaging supplies that keep up. Inconsistent tape adhesion or running out of strapping mid-shift causes bottlenecks at the most critical point — final despatch.',
    description:
      'For trading houses, distributors, and e-commerce fulfilment centres, we supply BOPP tape rolls, taping machines, and strapping in volumes that match your daily despatch rate.',
    products: [
      { name: 'BOPP Tape Rolls', slug: 'bopp-tapes' },
      { name: 'Taping Machine', slug: 'taping-machine' },
      { name: 'Strapping Rolls', slug: 'strapping-rolls' },
      { name: 'Stretch Films', slug: 'stretch-films' },
    ],
    useCases: [
      'Sealing cartons at dispatch and fulfilment centres',
      'Bundling goods for retail distribution',
      'Palletizing and wrapping mixed-SKU e-commerce orders',
      'Automating tape application with semi-auto taping machines',
    ],
  },
]

export default function IndustriesPage() {
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
            Industries Served &nbsp;·&nbsp; Mumbai &nbsp;·&nbsp; B2B
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
            Built for{' '}
            <span style={{ color: '#f3cf2d' }}>Indian Industry.</span>
          </h1>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-xl"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Since {company.since}, we have supplied packaging materials to manufacturers, logistics providers, and trading companies across India. Three sectors. One reliable supplier.
          </p>
        </div>
      </div>

      {/* Industry sections */}
      {industries.map((industry, i) => (
        <section
          key={industry.num}
          aria-labelledby={`industry-${industry.num}-heading`}
          className="py-16 lg:py-24"
          style={{ backgroundColor: i % 2 === 0 ? '#ffffff' : '#f9fafb' }}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* Left — description */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="text-4xl font-bold tabular-nums"
                    style={{ fontFamily: 'var(--font-heading)', color: 'rgba(243,207,45,0.30)' }}
                    aria-hidden="true"
                  >
                    {industry.num}
                  </span>
                  <div className="h-px flex-1" style={{ backgroundColor: '#e5e7eb' }} />
                </div>
                <h2
                  id={`industry-${industry.num}-heading`}
                  className="font-bold leading-tight mb-4"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    color: '#061553',
                  }}
                >
                  {industry.title}
                </h2>
                <p
                  className="text-sm italic leading-relaxed mb-4 pl-4"
                  style={{ color: '#888888', borderLeft: '2px solid #f3cf2d' }}
                >
                  {industry.painPoint}
                </p>
                <p className="text-base leading-relaxed mb-8" style={{ color: '#444444' }}>
                  {industry.description}
                </p>

                <Link
                  href={`/contact?industry=${encodeURIComponent(industry.title)}`}
                >
                  <Button
                    size="lg"
                    className="gap-2 font-semibold"
                    style={{ backgroundColor: '#061553', color: '#ffffff' }}
                  >
                    Request Quote for {industry.title}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </div>

              {/* Right — products + use cases */}
              <div className="space-y-8">
                {/* Recommended products */}
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-4"
                    style={{ color: '#f3cf2d' }}
                  >
                    Recommended Products
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {industry.products.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/products/${p.slug}`}
                        className="flex items-center gap-2 p-3 rounded-sm text-sm font-medium transition-colors hover:text-[#061553]"
                        style={{
                          backgroundColor: '#ffffff',
                          border: '1px solid #e5e7eb',
                          color: '#444444',
                        }}
                      >
                        <span
                          className="shrink-0 h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: '#f3cf2d' }}
                          aria-hidden="true"
                        />
                        {p.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Typical use cases */}
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-4"
                    style={{ color: '#f3cf2d' }}
                  >
                    Typical Use Cases
                  </p>
                  <ul className="space-y-2">
                    {industry.useCases.map((uc) => (
                      <li key={uc} className="flex items-start gap-3">
                        <span
                          className="mt-1 shrink-0 text-xs"
                          style={{ color: '#f3cf2d' }}
                          aria-hidden="true"
                        >
                          ›
                        </span>
                        <span className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                          {uc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section aria-label="Get in touch" style={{ backgroundColor: '#040e3a' }}>
        <div className="container mx-auto px-4 lg:px-8 py-14">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.3em] mb-2"
                style={{ color: 'rgba(243,207,45,0.55)' }}
              >
                Ready to source?
              </p>
              <p
                className="text-2xl sm:text-3xl font-bold"
                style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}
              >
                Let&apos;s talk about your requirements.
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
