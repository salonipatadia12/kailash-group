import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductsSection } from '@/components/sections/ProductsSection'
import { getProductsSchema } from '@/lib/schema'
import { company } from '@/theme/tokens'

export const metadata: Metadata = {
  title: `Products — Packaging Materials`,
  description: `Explore ${company.name}'s range of packaging products: Strapping Rolls, BOPP Tapes, PET Straps, Stretch Films, and Taping Machines. Reliable packaging solutions since ${company.since}.`,
  openGraph: {
    title: `Products — ${company.name}`,
    description: `Strapping Rolls, BOPP Tapes, PET Straps, Stretch Films, and Taping Machines from ${company.name}.`,
  },
}

export default function ProductsPage() {
  const schemas = getProductsSchema()

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Page header */}
      <div
        className="py-14 text-center"
        style={{ backgroundColor: '#061553' }}
      >
        <p
          className="text-xs font-bold uppercase tracking-[0.3em] mb-4"
          style={{ color: 'rgba(243,207,45,0.55)' }}
        >
          Est. {company.since} &nbsp;·&nbsp; Mumbai &nbsp;·&nbsp; B2B
        </p>
        <h1
          className="text-3xl sm:text-4xl font-bold text-white"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Our Products
        </h1>
        <p className="mt-3 text-base max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
          5 product lines. Sourced reliably. Delivered on time.
        </p>
      </div>

      <ProductsSection showAll={true} />

      {/* Slim enquiry strip */}
      <section
        aria-label="Enquiry call to action"
        style={{ backgroundColor: '#061553' }}
      >
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.25em] mb-2"
                style={{ color: 'rgba(243,207,45,0.55)' }}
              >
                Ready to order?
              </p>
              <p
                className="text-xl sm:text-2xl font-bold"
                style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}
              >
                Let&apos;s talk about your requirements.
              </p>
              <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {company.phone} &nbsp;·&nbsp; {company.email}
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
                  Call Now
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
