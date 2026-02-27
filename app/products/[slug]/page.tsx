import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, MessageCircle, ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getProductBySlug, getOtherProducts } from '@/lib/products'
import { company } from '@/theme/tokens'
import { ProductRFQForm } from '@/components/sections/ProductRFQForm'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const { products } = await import('@/theme/tokens')
  return products.map((p) => ({ slug: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  return {
    title: `${product.name} — ${company.name}`,
    description: `${product.tagline} Supplied by ${company.name}, Mumbai's trusted B2B packaging distributor since ${company.since}.`,
    openGraph: {
      title: `${product.name} — ${company.name}`,
      description: product.tagline,
    },
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const others = getOtherProducts(slug)
  const waLink = `https://wa.me/${company.phoneRaw}?text=${encodeURIComponent(product.whatsappText)}`

  return (
    <>
      {/* ── Hero band ── */}
      <div className="relative overflow-hidden" style={{ backgroundColor: '#061553' }}>
        {/* dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(243,207,45,0.06) 1.5px, transparent 1.5px)',
            backgroundSize: '36px 36px',
          }}
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-4 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left — copy */}
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.3em] mb-4"
                style={{ color: 'rgba(243,207,45,0.55)' }}
              >
                {product.category}
              </p>
              <h1
                className="font-bold leading-tight mb-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                }}
              >
                {product.name}
              </h1>
              <p
                className="text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
                style={{ color: 'rgba(255,255,255,0.60)' }}
              >
                {product.tagline}
              </p>

              {/* Highlight chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {product.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-xs font-semibold px-3 py-1.5 rounded-sm"
                    style={{
                      backgroundColor: 'rgba(243,207,45,0.10)',
                      color: '#f3cf2d',
                      border: '1px solid rgba(243,207,45,0.25)',
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#rfq-form">
                  <Button
                    size="lg"
                    className="gap-2 font-semibold"
                    style={{ backgroundColor: '#f3cf2d', color: '#061553' }}
                  >
                    Get Quote
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </a>
                <a href={waLink} target="_blank" rel="noopener noreferrer">
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
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    WhatsApp
                  </Button>
                </a>
                <a href={`tel:${company.phone}`}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 font-semibold"
                    style={{
                      borderColor: 'rgba(255,255,255,0.20)',
                      color: 'rgba(255,255,255,0.70)',
                      backgroundColor: 'transparent',
                    }}
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>

            {/* Right — product image */}
            <div
              className="relative h-64 lg:h-80 rounded-sm overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(6,21,83,0.6) 0%, transparent 50%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Specifications ── */}
      <section
        aria-labelledby="specs-heading"
        className="py-14 lg:py-20"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12" style={{ backgroundColor: '#f3cf2d' }} />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#f3cf2d' }}>
              Specifications
            </span>
          </div>
          <h2
            id="specs-heading"
            className="text-2xl sm:text-3xl font-bold mb-8"
            style={{ fontFamily: 'var(--font-heading)', color: '#061553' }}
          >
            Product Specifications
          </h2>

          <div className="max-w-2xl">
            <table className="w-full text-sm border-collapse" aria-label={`${product.name} specifications`}>
              <tbody>
                {product.specs.map((spec, i) => (
                  <tr
                    key={spec.label}
                    style={{
                      backgroundColor: i % 2 === 0 ? '#f9fafb' : '#ffffff',
                      borderBottom: '1px solid #e5e7eb',
                    }}
                  >
                    <td
                      className="py-3 px-4 font-semibold w-40"
                      style={{ color: '#061553' }}
                    >
                      {spec.label}
                    </td>
                    <td className="py-3 px-4" style={{ color: '#444444' }}>
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Applications ── */}
      <section
        aria-labelledby="applications-heading"
        className="py-14 lg:py-20"
        style={{ backgroundColor: '#f9fafb' }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12" style={{ backgroundColor: '#f3cf2d' }} />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#f3cf2d' }}>
              Applications
            </span>
          </div>
          <h2
            id="applications-heading"
            className="text-2xl sm:text-3xl font-bold mb-8"
            style={{ fontFamily: 'var(--font-heading)', color: '#061553' }}
          >
            Where It&apos;s Used
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
            {product.applications.map((app) => (
              <li key={app} className="flex items-start gap-3">
                <span
                  className="mt-1 shrink-0 h-5 w-5 flex items-center justify-center rounded-sm text-xs font-bold"
                  style={{ backgroundColor: 'rgba(243,207,45,0.15)', color: '#f3cf2d' }}
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span className="text-sm leading-relaxed" style={{ color: '#444444' }}>
                  {app}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        aria-labelledby="faq-heading"
        className="py-14 lg:py-20"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12" style={{ backgroundColor: '#f3cf2d' }} />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#f3cf2d' }}>
              FAQ
            </span>
          </div>
          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl font-bold mb-8"
            style={{ fontFamily: 'var(--font-heading)', color: '#061553' }}
          >
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl space-y-0" role="list">
            {product.faqs.map((faq, i) => (
              <details
                key={i}
                className="group"
                style={{ borderBottom: '1px solid #e5e7eb' }}
              >
                <summary
                  className="flex items-center justify-between gap-4 py-4 cursor-pointer select-none list-none"
                  style={{ color: '#111111' }}
                >
                  <span className="text-sm sm:text-base font-semibold pr-4" style={{ color: '#061553' }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"
                    style={{ color: '#f3cf2d' }}
                    aria-hidden="true"
                  />
                </summary>
                <p className="pb-5 text-sm leading-relaxed" style={{ color: '#666666' }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── RFQ Form ── */}
      <section
        id="rfq-form"
        aria-labelledby="rfq-heading"
        style={{ backgroundColor: '#040e3a' }}
      >
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left — context */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12" style={{ backgroundColor: '#f3cf2d' }} />
                <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#f3cf2d' }}>
                  Request a Quote
                </span>
              </div>
              <h2
                id="rfq-heading"
                className="font-bold leading-tight mb-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                  color: '#ffffff',
                }}
              >
                Get a Quote for{' '}
                <span style={{ color: '#f3cf2d' }}>{product.name}</span>
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Share your specifications and monthly requirement. We respond within 24 hours with pricing and availability.
              </p>
              <div className="space-y-4">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-medium transition-colors hover:text-[#f3cf2d]"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                >
                  <MessageCircle className="h-4 w-4 shrink-0" style={{ color: '#f3cf2d' }} aria-hidden="true" />
                  WhatsApp us directly
                </a>
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-center gap-3 text-sm font-medium transition-colors hover:text-[#f3cf2d]"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                >
                  <Phone className="h-4 w-4 shrink-0" style={{ color: '#f3cf2d' }} aria-hidden="true" />
                  {company.phone}
                </a>
              </div>
            </div>

            {/* Right — form */}
            <ProductRFQForm productName={product.name} />
          </div>
        </div>
      </section>

      {/* ── Other Products ── */}
      <section
        aria-labelledby="other-products-heading"
        className="py-14 lg:py-20"
        style={{ backgroundColor: '#f9fafb' }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <h2
            id="other-products-heading"
            className="text-xl sm:text-2xl font-bold mb-8"
            style={{ fontFamily: 'var(--font-heading)', color: '#061553' }}
          >
            You May Also Need
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group flex flex-col rounded-sm overflow-hidden transition-shadow hover:shadow-md"
                style={{ border: '1px solid #e5e7eb', backgroundColor: '#ffffff' }}
              >
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: 'rgba(243,207,45,0.8)' }}
                  >
                    {p.category}
                  </p>
                  <h3
                    className="font-bold mb-2 leading-tight"
                    style={{ fontFamily: 'var(--font-heading)', color: '#061553' }}
                  >
                    {p.name}
                  </h3>
                  <span
                    className="mt-auto inline-flex items-center gap-1 text-xs font-medium"
                    style={{ color: '#f3cf2d' }}
                  >
                    View Details
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
