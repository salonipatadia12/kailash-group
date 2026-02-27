'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle } from 'lucide-react'

const productRFQSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().optional(),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  specification: z.string().optional(),
  quantity: z.string().optional(),
  location: z.string().optional(),
  contactMethod: z.enum(['whatsapp', 'call', 'email']).optional(),
  message: z.string().optional(),
})

type FormData = z.infer<typeof productRFQSchema>

interface ProductRFQFormProps {
  productName: string
}

export function ProductRFQForm({ productName }: ProductRFQFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(productRFQSchema),
  })

  async function onSubmit(data: FormData) {
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          product: productName,
          message: [
            data.message || '',
            data.specification ? `Specification: ${data.specification}` : '',
            data.quantity ? `Monthly quantity: ${data.quantity}` : '',
            data.location ? `Delivery location: ${data.location}` : '',
            data.contactMethod ? `Preferred contact: ${data.contactMethod}` : '',
          ]
            .filter(Boolean)
            .join('\n'),
        }),
      })
      if (!res.ok) throw new Error('Failed to send')
      setSubmitted(true)
      reset()
    } catch {
      setError('Something went wrong. Please try calling or WhatsApping us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-sm"
        style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        <CheckCircle className="h-10 w-10 mb-4" style={{ color: '#f3cf2d' }} />
        <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}>
          Quote Request Sent
        </h3>
        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
          We&apos;ll get back to you within 24 hours with pricing and availability.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-xs underline"
          style={{ color: 'rgba(243,207,45,0.60)' }}
        >
          Submit another request
        </button>
      </div>
    )
  }

  const inputStyle = {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderColor: 'rgba(255,255,255,0.15)',
    color: '#ffffff',
  }

  const labelStyle = { color: 'rgba(255,255,255,0.70)' }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-sm p-6 sm:p-8"
      style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
      aria-label={`Request a quote for ${productName}`}
      noValidate
    >
      {/* Contact info row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="rfq-name" style={labelStyle}>
            Name <span aria-hidden="true" style={{ color: '#f3cf2d' }}>*</span>
          </Label>
          <Input
            id="rfq-name"
            {...register('name')}
            placeholder="Your name"
            autoComplete="name"
            style={inputStyle}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'rfq-name-error' : undefined}
          />
          {errors.name && (
            <p id="rfq-name-error" className="text-xs" style={{ color: '#f87171' }} role="alert">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="rfq-company" style={labelStyle}>
            Company
          </Label>
          <Input
            id="rfq-company"
            {...register('company')}
            placeholder="Company name"
            autoComplete="organization"
            style={inputStyle}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="rfq-phone" style={labelStyle}>
            Phone <span aria-hidden="true" style={{ color: '#f3cf2d' }}>*</span>
          </Label>
          <Input
            id="rfq-phone"
            {...register('phone')}
            placeholder="+91 XXXXX XXXXX"
            type="tel"
            autoComplete="tel"
            style={inputStyle}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'rfq-phone-error' : undefined}
          />
          {errors.phone && (
            <p id="rfq-phone-error" className="text-xs" style={{ color: '#f87171' }} role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="rfq-email" style={labelStyle}>
            Email <span aria-hidden="true" style={{ color: '#f3cf2d' }}>*</span>
          </Label>
          <Input
            id="rfq-email"
            {...register('email')}
            placeholder="you@company.com"
            type="email"
            autoComplete="email"
            style={inputStyle}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'rfq-email-error' : undefined}
          />
          {errors.email && (
            <p id="rfq-email-error" className="text-xs" style={{ color: '#f87171' }} role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Product context */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="rfq-spec" style={labelStyle}>
            Specification Needed
          </Label>
          <Input
            id="rfq-spec"
            {...register('specification')}
            placeholder={`e.g. 15mm width, 500 micron`}
            style={inputStyle}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="rfq-qty" style={labelStyle}>
            Monthly Quantity
          </Label>
          <Input
            id="rfq-qty"
            {...register('quantity')}
            placeholder="e.g. 50 rolls/month"
            style={inputStyle}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="rfq-location" style={labelStyle}>
          Delivery Location
        </Label>
        <Input
          id="rfq-location"
          {...register('location')}
          placeholder="City / Pincode"
          style={inputStyle}
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="rfq-message" style={labelStyle}>
          Additional Details
        </Label>
        <Textarea
          id="rfq-message"
          {...register('message')}
          placeholder="Any other requirements or questions..."
          rows={3}
          style={inputStyle}
        />
      </div>

      {/* Preferred contact method */}
      <fieldset>
        <legend className="text-sm font-medium mb-2" style={labelStyle}>
          Preferred Contact Method
        </legend>
        <div className="flex gap-4">
          {(['whatsapp', 'call', 'email'] as const).map((method) => (
            <label
              key={method}
              className="flex items-center gap-2 cursor-pointer text-sm capitalize"
              style={{ color: 'rgba(255,255,255,0.60)' }}
            >
              <input
                type="radio"
                value={method}
                {...register('contactMethod')}
                className="accent-[#f3cf2d]"
              />
              {method}
            </label>
          ))}
        </div>
      </fieldset>

      {error && (
        <p className="text-sm" style={{ color: '#f87171' }} role="alert">
          {error}
        </p>
      )}

      <Button
        type="submit"
        disabled={submitting}
        size="lg"
        className="w-full font-semibold"
        style={{ backgroundColor: '#f3cf2d', color: '#061553' }}
      >
        {submitting ? 'Sending…' : 'Send Quote Request'}
      </Button>

      <p className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.30)' }}>
        We respond within 24 hours. No spam, ever.
      </p>
    </form>
  )
}
