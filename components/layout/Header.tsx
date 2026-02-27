'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Mail, ChevronDown, ArrowRight } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { navLinks, products, company } from '@/theme/tokens'
import { cn } from '@/lib/utils'

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [productsOpen, setProductsOpen] = useState<boolean>(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(6,21,83,0.94)' : '#061553',
        backdropFilter: scrolled ? 'blur(12px)' : undefined,
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : undefined,
        boxShadow: '0 2px 20px rgba(0,0,0,0.25)',
      }}
    >
      {/* ── Top Utility Bar (desktop only) ── */}
      <div
        className="hidden md:block overflow-hidden"
        style={{
          backgroundColor: '#040e3a',
          borderBottom: '1px solid rgba(243,207,45,0.15)',
        }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-9">
            <p
              className="text-xs font-medium tracking-wider uppercase"
              style={{ color: 'rgba(255,255,255,0.50)', fontFamily: 'var(--font-heading)' }}
            >
              Mumbai&apos;s Trusted Packaging Partner Since {company.since}
            </p>
            <div className="flex items-center gap-5">
              <a
                href={`tel:${company.phone}`}
                className="flex items-center gap-1.5 text-xs transition-colors hover:text-[#f3cf2d]"
                style={{ color: 'rgba(255,255,255,0.55)' }}
                aria-label={`Call us at ${company.phone}`}
              >
                <Phone className="h-3 w-3" aria-hidden="true" />
                <span>{company.phone}</span>
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-1.5 text-xs transition-colors hover:text-[#f3cf2d]"
                style={{ color: 'rgba(255,255,255,0.55)' }}
                aria-label={`Email us at ${company.email}`}
              >
                <Mail className="h-3 w-3" aria-hidden="true" />
                <span>{company.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Nav Row ── */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Kailash Enterprises Home">
            <div
              className="relative h-10 w-10 rounded-full shrink-0 transition-all duration-500"
              style={{
                padding: '2px',
                background: 'linear-gradient(135deg, #f3cf2d 0%, #c9a91e 100%)',
                boxShadow: '0 0 0 1px rgba(243,207,45,0.30)',
              }}
            >
              <div className="relative h-full w-full rounded-full overflow-hidden bg-white">
                <Image
                  src="/images/k_logo.jpg"
                  alt={`${company.name} logo`}
                  fill
                  sizes="40px"
                  className="object-contain p-0.5"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-lg font-bold tracking-wide leading-tight"
                style={{ fontFamily: 'var(--font-heading)', color: '#f3cf2d' }}
              >
                Kailash Enterprises
              </span>
              <span
                className="text-[10px] font-medium tracking-widest uppercase mt-0.5"
                style={{ color: 'rgba(255,255,255,0.40)' }}
              >
                Packaging Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/')

              if (link.label === 'Products') {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'relative inline-flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200 group/navlink',
                        isActive ? 'text-[#f3cf2d]' : 'text-white/85 hover:text-white'
                      )}
                      aria-expanded={productsOpen}
                      aria-haspopup="menu"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          'h-3 w-3 transition-transform duration-200',
                          productsOpen ? 'rotate-180' : ''
                        )}
                        aria-hidden="true"
                      />
                      <span
                        className={cn(
                          'absolute bottom-0 left-4 right-4 h-0.5 origin-left transition-transform duration-300',
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover/navlink:scale-x-100'
                        )}
                        style={{ backgroundColor: '#f3cf2d' }}
                        aria-hidden="true"
                      />
                    </Link>

                    {/* Products dropdown panel */}
                    {productsOpen && (
                      <div
                        role="menu"
                        aria-label="Products menu"
                        className="absolute top-full left-0 min-w-[220px] py-2 shadow-xl"
                        style={{
                          backgroundColor: '#ffffff',
                          borderTop: '3px solid #f3cf2d',
                          borderBottom: '1px solid #e5e7eb',
                          borderLeft: '1px solid #e5e7eb',
                          borderRight: '1px solid #e5e7eb',
                        }}
                      >
                        {products.map((p) => (
                          <Link
                            key={p.id}
                            href={`/products/${p.id}`}
                            role="menuitem"
                            onClick={() => setProductsOpen(false)}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-gray-50"
                            style={{ color: '#333333' }}
                          >
                            <span
                              className="shrink-0 h-1 w-1 rounded-full"
                              style={{ backgroundColor: '#f3cf2d' }}
                              aria-hidden="true"
                            />
                            {p.name}
                          </Link>
                        ))}
                        <div
                          className="mt-1 pt-1"
                          style={{ borderTop: '1px solid #f3f4f6' }}
                        >
                          <Link
                            href="/products"
                            role="menuitem"
                            onClick={() => setProductsOpen(false)}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-gray-50"
                            style={{ color: '#061553' }}
                          >
                            View All Products
                            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium transition-colors duration-200 group/navlink',
                    isActive ? 'text-[#f3cf2d]' : 'text-white/85 hover:text-white'
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute bottom-0 left-4 right-4 h-0.5 origin-left transition-transform duration-300',
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover/navlink:scale-x-100'
                    )}
                    style={{ backgroundColor: '#f3cf2d' }}
                    aria-hidden="true"
                  />
                </Link>
              )
            })}
            <Button
              asChild
              size="sm"
              className="ml-4 font-semibold tracking-wide rounded-sm transition-all duration-300"
              style={{ backgroundColor: '#f3cf2d', color: '#061553' }}
            >
              <Link href="/contact">Get Quote</Link>
            </Button>
          </nav>

          {/* Mobile Menu Trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
                style={{ color: 'white' }}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 p-0"
              style={{ backgroundColor: '#061553', borderColor: '#ffffff20' }}
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div
                  className="flex items-center justify-between px-5 py-4"
                  style={{ borderBottom: '1px solid rgba(243,207,45,0.20)' }}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="relative h-8 w-8 rounded-full shrink-0"
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
                          sizes="32px"
                          className="object-contain p-0.5"
                        />
                      </div>
                    </div>
                    <span
                      className="text-base font-bold"
                      style={{ fontFamily: 'var(--font-heading)', color: '#f3cf2d' }}
                    >
                      Kailash Enterprises
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    style={{ color: 'white' }}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <nav aria-label="Mobile navigation" className="flex flex-col py-4 px-3 overflow-y-auto flex-1">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href || pathname.startsWith(link.href + '/')

                    if (link.label === 'Products') {
                      return (
                        <div key={link.href}>
                          <button
                            onClick={() => setMobileProductsOpen((v) => !v)}
                            className={cn(
                              'w-full flex items-center justify-between gap-3 px-4 py-3 text-base font-medium rounded-md transition-colors',
                              isActive
                                ? 'text-[#f3cf2d] bg-white/10'
                                : 'text-white/85 hover:text-[#f3cf2d] hover:bg-white/[0.08]'
                            )}
                            aria-expanded={mobileProductsOpen}
                          >
                            <span className="flex items-center gap-3">
                              <span
                                className={cn(
                                  'h-1.5 w-1.5 rounded-full shrink-0 transition-opacity',
                                  isActive ? 'opacity-100' : 'opacity-0'
                                )}
                                style={{ backgroundColor: '#f3cf2d' }}
                                aria-hidden="true"
                              />
                              Products
                            </span>
                            <ChevronDown
                              className={cn(
                                'h-4 w-4 shrink-0 transition-transform duration-200',
                                mobileProductsOpen ? 'rotate-180' : ''
                              )}
                              style={{ color: '#f3cf2d' }}
                              aria-hidden="true"
                            />
                          </button>

                          {mobileProductsOpen && (
                            <div className="ml-7 mt-1 mb-2 space-y-0.5">
                              {products.map((p) => (
                                <Link
                                  key={p.id}
                                  href={`/products/${p.id}`}
                                  onClick={() => setOpen(false)}
                                  className="flex items-center gap-2 px-4 py-2.5 text-sm rounded-md transition-colors text-white/70 hover:text-[#f3cf2d] hover:bg-white/[0.06]"
                                >
                                  <span
                                    className="shrink-0 h-1 w-1 rounded-full"
                                    style={{ backgroundColor: 'rgba(243,207,45,0.50)' }}
                                    aria-hidden="true"
                                  />
                                  {p.name}
                                </Link>
                              ))}
                              <Link
                                href="/products"
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md transition-colors"
                                style={{ color: '#f3cf2d' }}
                              >
                                View All Products →
                              </Link>
                            </div>
                          )}
                        </div>
                      )
                    }

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          'flex items-center gap-3 px-4 py-3 text-base font-medium rounded-md transition-colors',
                          isActive
                            ? 'text-[#f3cf2d] bg-white/10'
                            : 'text-white/85 hover:text-[#f3cf2d] hover:bg-white/[0.08]'
                        )}
                      >
                        <span
                          className={cn(
                            'h-1.5 w-1.5 rounded-full shrink-0 transition-opacity',
                            isActive ? 'opacity-100' : 'opacity-0'
                          )}
                          style={{ backgroundColor: '#f3cf2d' }}
                          aria-hidden="true"
                        />
                        {link.label}
                      </Link>
                    )
                  })}

                  <div className="mt-5 px-1">
                    <Button
                      asChild
                      className="w-full font-semibold rounded-sm"
                      style={{ backgroundColor: '#f3cf2d', color: '#061553' }}
                    >
                      <Link href="/contact" onClick={() => setOpen(false)}>
                        Get Quote
                      </Link>
                    </Button>
                  </div>
                </nav>

                <div
                  className="px-5 py-5"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
                >
                  <a
                    href={`tel:${company.phone}`}
                    className="flex items-center gap-2 text-sm hover:text-[#f3cf2d] transition-colors"
                    style={{ color: 'rgba(255,255,255,0.50)' }}
                  >
                    <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>{company.phone}</span>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* ── Gold accent line ── */}
      <div
        className="h-0.5 w-full"
        style={{ backgroundColor: '#f3cf2d' }}
        aria-hidden="true"
      />
    </header>
  )
}
