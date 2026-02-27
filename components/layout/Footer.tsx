import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { company, navLinks } from '@/theme/tokens'

const stats: { value: string; sub: string }[] = [
  { value: 'Est.', sub: '1996' },
  { value: '30+', sub: 'Years' },
  { value: '5', sub: 'Products' },
  { value: 'B2B', sub: 'Specialists' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: '#212120', color: '#ffffff' }}
    >
      {/* 3px golden top border */}
      <div className="h-[3px] w-full" style={{ backgroundColor: '#f3cf2d' }} aria-hidden="true" />

      {/* ── Statement Block ── */}
      <div
        className="relative overflow-hidden border-b"
        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
      >
        {/* Background dot grid echoes hero */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(243,207,45,0.04) 1.5px, transparent 1.5px)',
            backgroundSize: '36px 36px',
          }}
          aria-hidden="true"
        />

        <div className="relative container mx-auto px-4 lg:px-8 pt-12 pb-10">
          {/* Statement + CTA row */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.3em] mb-3"
                style={{ color: 'rgba(243,207,45,0.55)' }}
              >
                Mumbai &nbsp;·&nbsp; B2B &nbsp;·&nbsp; Est. {company.since}
              </p>
              <h2
                className="font-bold leading-tight"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.75rem, 4vw, 3.25rem)',
                  color: 'rgba(255,255,255,0.92)',
                  letterSpacing: '-0.01em',
                }}
              >
                30 Years of Reliable
                <br />
                <span style={{ color: '#f3cf2d' }}>Packaging.</span>
              </h2>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:shrink-0">
              <a href={`tel:${company.phone}`}>
                <Button
                  size="lg"
                  className="gap-2 font-semibold rounded-sm min-w-36"
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
                  className="gap-2 font-semibold rounded-sm min-w-36"
                  style={{
                    borderColor: 'rgba(243,207,45,0.45)',
                    color: '#f3cf2d',
                    backgroundColor: 'transparent',
                  }}
                >
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats strip */}
          <div
            className="flex flex-wrap items-center gap-0 rounded-sm overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            role="list"
            aria-label="Company highlights"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.sub}
                className="flex-1 min-w-[80px] flex flex-col items-center justify-center py-4 px-3"
                style={{
                  borderRight:
                    i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : undefined,
                  backgroundColor: 'rgba(255,255,255,0.03)',
                }}
                role="listitem"
              >
                <span
                  className="text-xl sm:text-2xl font-bold leading-none"
                  style={{ fontFamily: 'var(--font-heading)', color: '#f3cf2d' }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs font-medium uppercase tracking-widest mt-1"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                >
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Info Grid ── */}
      <div className="relative container mx-auto px-4 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand Column (5/12) */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-5"
              aria-label="Kailash Enterprises Home"
            >
              <div
                className="relative h-12 w-12 rounded-full shrink-0"
                style={{
                  padding: '2px',
                  background: 'linear-gradient(135deg, #f3cf2d 0%, #c9a91e 100%)',
                }}
              >
                <div className="relative h-full w-full rounded-full overflow-hidden bg-white">
                  <Image
                    src="/images/k_logo.jpg"
                    alt={`${company.name} logo`}
                    fill
                    sizes="48px"
                    className="object-contain p-0.5"
                  />
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-xl font-bold tracking-wide"
                  style={{ fontFamily: 'var(--font-heading)', color: '#f3cf2d' }}
                >
                  {company.name}
                </span>
                <span
                  className="text-xs font-medium tracking-widest uppercase mt-1"
                  style={{ color: 'rgba(255,255,255,0.40)' }}
                >
                  Packaging Solutions
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed mb-4 max-w-xs" style={{ color: '#9ca3af' }}>
              {company.tagline}. Serving manufacturers, logistics providers, and warehouses across
              India since {company.since}.
            </p>

            <div className="inline-flex items-center gap-2 mb-6">
              <span
                className="px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm"
                style={{
                  backgroundColor: 'rgba(243,207,45,0.10)',
                  color: '#f3cf2d',
                  border: '1px solid rgba(243,207,45,0.22)',
                }}
              >
                Est. {company.since}
              </span>
            </div>

            <a
              href={`https://wa.me/${company.phoneRaw}?text=Hello%2C%20I%20am%20interested%20in%20your%20packaging%20products.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#f3cf2d]"
              style={{ color: 'rgba(255,255,255,0.50)' }}
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links (3/12) */}
          <div className="md:col-span-3 md:pt-1">
            <h4
              className="text-sm font-semibold mb-5 uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-heading)', color: '#f3cf2d' }}
            >
              Quick Links
            </h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group/footlink flex items-center gap-2 text-sm transition-colors hover:text-[#f3cf2d]"
                      style={{ color: '#9ca3af' }}
                    >
                      <span
                        className="inline-block transition-transform duration-200 group-hover/footlink:translate-x-1"
                        style={{ color: '#f3cf2d' }}
                        aria-hidden="true"
                      >
                        ›
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact (4/12) */}
          <div className="md:col-span-4 md:pt-1">
            <h4
              className="text-sm font-semibold mb-5 uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-heading)', color: '#f3cf2d' }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-start gap-3 text-sm transition-colors hover:text-[#f3cf2d]"
                  style={{ color: '#9ca3af' }}
                  aria-label={`Call us at ${company.phone}`}
                >
                  <span
                    className="mt-0.5 shrink-0 flex items-center justify-center h-7 w-7 rounded-sm"
                    style={{
                      backgroundColor: 'rgba(243,207,45,0.08)',
                      border: '1px solid rgba(243,207,45,0.15)',
                    }}
                  >
                    <Phone
                      className="h-3.5 w-3.5"
                      style={{ color: '#f3cf2d' }}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="pt-1">{company.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-start gap-3 text-sm transition-colors hover:text-[#f3cf2d]"
                  style={{ color: '#9ca3af' }}
                  aria-label={`Email us at ${company.email}`}
                >
                  <span
                    className="mt-0.5 shrink-0 flex items-center justify-center h-7 w-7 rounded-sm"
                    style={{
                      backgroundColor: 'rgba(243,207,45,0.08)',
                      border: '1px solid rgba(243,207,45,0.15)',
                    }}
                  >
                    <Mail
                      className="h-3.5 w-3.5"
                      style={{ color: '#f3cf2d' }}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="pt-1">{company.email}</span>
                </a>
              </li>
              <li>
                <address
                  className="flex items-start gap-3 text-sm not-italic"
                  style={{ color: '#9ca3af' }}
                >
                  <span
                    className="mt-0.5 shrink-0 flex items-center justify-center h-7 w-7 rounded-sm"
                    style={{
                      backgroundColor: 'rgba(243,207,45,0.08)',
                      border: '1px solid rgba(243,207,45,0.15)',
                    }}
                  >
                    <MapPin
                      className="h-3.5 w-3.5"
                      style={{ color: '#f3cf2d' }}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="pt-1">{company.address}</span>
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-xs order-2 sm:order-1" style={{ color: '#6b7280' }}>
            &copy; {currentYear} {company.name}. All rights reserved.
          </p>

          <div
            className="flex items-center gap-3 order-1 sm:order-2"
            aria-label="Social media links (coming soon)"
          >
            {/* LinkedIn placeholder */}
            <span
              className="flex items-center justify-center h-8 w-8 rounded-sm cursor-not-allowed"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.10)',
                color: 'rgba(255,255,255,0.20)',
              }}
              title="LinkedIn (coming soon)"
              aria-label="LinkedIn (coming soon)"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </span>
            {/* Twitter / X placeholder */}
            <span
              className="flex items-center justify-center h-8 w-8 rounded-sm cursor-not-allowed"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.10)',
                color: 'rgba(255,255,255,0.20)',
              }}
              title="Twitter (coming soon)"
              aria-label="Twitter (coming soon)"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.736l7.736-8.84L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
