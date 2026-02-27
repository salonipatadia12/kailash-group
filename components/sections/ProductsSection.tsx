'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { products } from '@/theme/tokens'

interface ProductsSectionProps {
  /** If true, show all 5 products (used on /products page). Default shows first 3. */
  showAll?: boolean
}

export function ProductsSection({ showAll = false }: ProductsSectionProps) {
  const displayed = showAll ? products : products.slice(0, 3)

  return (
    <section
      className="py-16 lg:py-24"
      id="products"
      aria-labelledby="products-heading"
      style={{ backgroundColor: '#f9fafb' }}
    >
      <div className="container mx-auto px-4 lg:px-8">

        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{ backgroundColor: '#f3cf2d' }} />
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: '#f3cf2d' }}
            >
              Our Products
            </span>
          </div>
          <h2
            id="products-heading"
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: 'var(--font-heading)', color: '#061553' }}
          >
            5 Products. Everything You Need.
          </h2>
        </div>

        {/* Editorial numbered list */}
        <div role="list" aria-label="Product catalog">
          {displayed.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group flex items-center gap-4 sm:gap-8 py-5 sm:py-6 transition-colors duration-200 hover:bg-white/70 rounded-sm px-2 sm:px-4 -mx-2 sm:-mx-4"
              style={{
                borderTop: '1px solid #e5e7eb',
                borderBottom: i === displayed.length - 1 ? '1px solid #e5e7eb' : undefined,
              }}
              role="listitem"
            >
              {/* Number */}
              <span
                className="text-xs font-bold shrink-0 w-8 tabular-nums"
                style={{ color: 'rgba(243,207,45,0.65)' }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3
                  className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-1"
                  style={{ fontFamily: 'var(--font-heading)', color: '#111111' }}
                >
                  {product.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>
                  {product.description}
                </p>
              </div>

              {/* Right: category + enquire link */}
              <div className="hidden sm:flex items-center gap-4 sm:gap-6 shrink-0">
                <span
                  className="text-xs font-semibold uppercase tracking-widest px-2 py-0.5 rounded-sm"
                  style={{
                    backgroundColor: 'rgba(6,21,83,0.06)',
                    color: '#061553',
                  }}
                >
                  {product.category}
                </span>
                <Link
                  href={`/products/${product.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 hover:gap-3"
                  style={{ color: '#f3cf2d' }}
                  aria-label={`View details for ${product.name}`}
                >
                  View Details
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
              </div>

              {/* Thumbnail — hidden by default, revealed on hover (desktop only) */}
              <div
                className="hidden lg:block shrink-0 rounded-sm overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ width: 72, height: 72 }}
                aria-hidden="true"
              >
                <Image
                  src={product.image}
                  alt=""
                  width={72}
                  height={72}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all CTA — only when not displaying all */}
        {!showAll && (
          <div className="mt-10">
            <Link href="/products">
              <Button
                size="lg"
                className="gap-2 font-semibold"
                style={{ backgroundColor: '#061553', color: 'white' }}
              >
                View All 5 Products
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        )}

      </div>
    </section>
  )
}
