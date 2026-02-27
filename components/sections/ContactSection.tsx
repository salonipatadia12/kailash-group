'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { contactSchema, type ContactFormData } from '@/lib/validations/contact'
import { company, products } from '@/theme/tokens'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [prefillProduct, setPrefillProduct] = useState('')

  // Read ?product= or ?industry= query param client-side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const product = params.get('product') ?? params.get('industry') ?? ''
      setPrefillProduct(product)
    }
  }, [])

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { contactMethod: undefined },
  })

  // Apply prefill once we know the product
  useEffect(() => {
    if (prefillProduct) {
      setValue('product', prefillProduct)
    }
  }, [prefillProduct, setValue])

  async function onSubmit(data: ContactFormData) {
    setError(null)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const body = (await response.json()) as { error?: string }
        throw new Error(body.error ?? 'Failed to send message. Please try again.')
      }

      setSubmitted(true)
      reset()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  const waLink = `https://wa.me/${company.phoneRaw}?text=${encodeURIComponent('Hi, I have a packaging enquiry.')}`

  return (
    <section
      className="py-16 lg:py-24 bg-white"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12" style={{ backgroundColor: '#f3cf2d' }} />
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: '#f3cf2d' }}
            >
              Request a Quote
            </span>
            <div className="h-px w-12" style={{ backgroundColor: '#f3cf2d' }} />
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: 'var(--font-heading)', color: '#061553' }}
          >
            Get In Touch
          </h2>
          <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: '#666666' }}>
            Share your product and quantity requirements. We respond within 24 hours with pricing and availability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-heading)', color: '#061553' }}
            >
              Contact Information
            </h3>

            <ul className="space-y-5 mb-8">
              <li>
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-start gap-4 group"
                  aria-label={`Call us at ${company.phone}`}
                >
                  <div
                    className="flex items-center justify-center h-11 w-11 rounded-full shrink-0 mt-0.5"
                    style={{ backgroundColor: '#061553' }}
                    aria-hidden="true"
                  >
                    <Phone className="h-5 w-5" style={{ color: '#f3cf2d' }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#9ca3af' }}>
                      Phone
                    </p>
                    <p
                      className="text-base font-medium transition-colors group-hover:text-[#f3cf2d]"
                      style={{ color: '#111111' }}
                    >
                      {company.phone}
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                  aria-label="Chat on WhatsApp"
                >
                  <div
                    className="flex items-center justify-center h-11 w-11 rounded-full shrink-0 mt-0.5"
                    style={{ backgroundColor: '#061553' }}
                    aria-hidden="true"
                  >
                    <MessageCircle className="h-5 w-5" style={{ color: '#f3cf2d' }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#9ca3af' }}>
                      WhatsApp
                    </p>
                    <p
                      className="text-base font-medium transition-colors group-hover:text-[#f3cf2d]"
                      style={{ color: '#111111' }}
                    >
                      Chat with us directly
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-start gap-4 group"
                  aria-label={`Email us at ${company.email}`}
                >
                  <div
                    className="flex items-center justify-center h-11 w-11 rounded-full shrink-0 mt-0.5"
                    style={{ backgroundColor: '#061553' }}
                    aria-hidden="true"
                  >
                    <Mail className="h-5 w-5" style={{ color: '#f3cf2d' }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#9ca3af' }}>
                      Email
                    </p>
                    <p
                      className="text-base font-medium transition-colors group-hover:text-[#f3cf2d]"
                      style={{ color: '#111111' }}
                    >
                      {company.email}
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <div className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center h-11 w-11 rounded-full shrink-0 mt-0.5"
                    style={{ backgroundColor: '#061553' }}
                    aria-hidden="true"
                  >
                    <MapPin className="h-5 w-5" style={{ color: '#f3cf2d' }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#9ca3af' }}>
                      Address
                    </p>
                    <address className="not-italic text-base" style={{ color: '#111111' }}>
                      {company.address}
                    </address>
                  </div>
                </div>
              </li>
            </ul>

            {/* Typical response time */}
            <div
              className="p-4 rounded-sm"
              style={{ backgroundColor: '#f9fafb', border: '1px solid rgba(243,207,45,0.25)' }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#f3cf2d' }}>
                Response Time
              </p>
              <p className="text-sm" style={{ color: '#444444' }}>
                We typically respond to enquiries within <strong>24 hours</strong> on business days (Mon–Sat, 10am–7pm IST).
              </p>
            </div>

            {/* TODO: Add Google Maps embed once client provides embed URL */}
            <div
              className="mt-6 h-40 rounded-sm flex items-center justify-center"
              style={{ backgroundColor: '#f9fafb', border: '1px dashed #dddddd' }}
              aria-label="Map placeholder"
            >
              <p className="text-sm text-center px-4" style={{ color: '#9ca3af' }}>
                601 B wing, Mukti Tower,<br />Mhada Highway, Mulund East,<br />Mumbai, Maharashtra-400081
              </p>
            </div>
          </motion.div>

          {/* RFQ Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center p-8 rounded-sm"
                style={{ backgroundColor: '#f9fafb', border: '1px solid #dddddd' }}
                role="alert"
              >
                <CheckCircle2 className="h-16 w-16 mb-4" style={{ color: '#f3cf2d' }} aria-hidden="true" />
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: 'var(--font-heading)', color: '#061553' }}
                >
                  Quote Request Sent!
                </h3>
                <p className="text-base mb-6" style={{ color: '#666666' }}>
                  We will get back to you within 24 hours with pricing and availability.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  style={{ backgroundColor: '#061553', color: 'white' }}
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 p-6 sm:p-8 rounded-sm"
                style={{ backgroundColor: '#f9fafb', border: '1px solid #dddddd' }}
                aria-label="Request a quote form"
                noValidate
              >
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ fontFamily: 'var(--font-heading)', color: '#061553' }}
                >
                  Request a Quote
                </h3>
                <p className="text-sm mb-4" style={{ color: '#888888' }}>
                  Fields marked <span style={{ color: '#061553' }}>*</span> are required.
                </p>

                {/* Contact info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-sm font-medium" style={{ color: '#111111' }}>
                      Full Name <span className="text-red-500" aria-label="required">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      autoComplete="name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      {...register('name')}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-red-500" role="alert">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="company" className="text-sm font-medium" style={{ color: '#111111' }}>
                      Company
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Company name"
                      autoComplete="organization"
                      {...register('company')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-sm font-medium" style={{ color: '#111111' }}>
                      Phone <span className="text-red-500" aria-label="required">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      autoComplete="tel"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      {...register('phone')}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="text-xs text-red-500" role="alert">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-sm font-medium" style={{ color: '#111111' }}>
                      Email <span className="text-red-500" aria-label="required">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      {...register('email')}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-red-500" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Product requirement */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="product" className="text-sm font-medium" style={{ color: '#111111' }}>
                      Product of Interest
                    </Label>
                    <select
                      id="product"
                      {...register('product')}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      style={{ color: prefillProduct ? '#111111' : '#9ca3af' }}
                    >
                      <option value="">Select a product</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="quantity" className="text-sm font-medium" style={{ color: '#111111' }}>
                      Monthly Quantity
                    </Label>
                    <Input
                      id="quantity"
                      type="text"
                      placeholder="e.g. 50 rolls/month"
                      {...register('quantity')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="specification" className="text-sm font-medium" style={{ color: '#111111' }}>
                      Specification
                    </Label>
                    <Input
                      id="specification"
                      type="text"
                      placeholder="e.g. 15mm width, 500m"
                      {...register('specification')}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="location" className="text-sm font-medium" style={{ color: '#111111' }}>
                      Delivery Location
                    </Label>
                    <Input
                      id="location"
                      type="text"
                      placeholder="City / Pincode"
                      {...register('location')}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-sm font-medium" style={{ color: '#111111' }}>
                    Message <span className="text-red-500" aria-label="required">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    rows={3}
                    placeholder="Tell us about your packaging requirements..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    {...register('message')}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-red-500" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Preferred contact method */}
                <fieldset>
                  <legend className="text-sm font-medium mb-2" style={{ color: '#111111' }}>
                    Preferred Contact Method
                  </legend>
                  <div className="flex gap-5">
                    {(['whatsapp', 'call', 'email'] as const).map((method) => (
                      <label
                        key={method}
                        className="flex items-center gap-2 cursor-pointer text-sm capitalize"
                        style={{ color: '#444444' }}
                      >
                        <input
                          type="radio"
                          value={method}
                          {...register('contactMethod')}
                          className="accent-[#061553]"
                        />
                        {method}
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Global error */}
                {error && (
                  <p className="text-sm text-red-600 rounded-md p-3 bg-red-50" role="alert">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gap-2 font-semibold text-base"
                  style={{ backgroundColor: '#061553', color: 'white' }}
                >
                  {isSubmitting ? (
                    'Sending…'
                  ) : (
                    <>
                      Send Quote Request
                      <Send className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-center" style={{ color: '#9ca3af' }}>
                  We respond within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
