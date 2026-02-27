import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactSchema } from '@/lib/validations/contact'
import { company } from '@/theme/tokens'

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: unknown = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY environment variable is not set')
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us directly.' },
        { status: 503 }
      )
    }

    // Lazy instantiation — avoids build-time errors when env var is absent
    const resend = new Resend(apiKey)
    const { name, email, phone, message, company: companyName, product, specification, quantity, location, contactMethod } = parsed.data

    const subjectProduct = product ? ` — ${product}` : ''

    // TODO: Replace 'onboarding@resend.dev' with a verified sender domain once DNS is configured
    const { error } = await resend.emails.send({
      from: 'Kailash Enterprises Website <onboarding@resend.dev>',
      to: [company.email],
      replyTo: email,
      subject: `New RFQ from ${name}${subjectProduct} — Kailash Enterprises`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #061553; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #f3cf2d; margin: 0; font-size: 20px;">New RFQ / Website Enquiry</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 13px;">Kailash Enterprises — kailashgroup.co.in</p>
          </div>
          <div style="background-color: #f9fafb; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #6b7280; width: 120px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Name</td>
                <td style="padding: 8px 0; font-size: 14px; color: #111111;">${name}</td>
              </tr>
              ${companyName ? `<tr>
                <td style="padding: 8px 0; font-size: 13px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Company</td>
                <td style="padding: 8px 0; font-size: 14px; color: #111111;">${companyName}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
                <td style="padding: 8px 0; font-size: 14px; color: #111111;"><a href="mailto:${email}" style="color: #061553;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone</td>
                <td style="padding: 8px 0; font-size: 14px; color: #111111;"><a href="tel:${phone}" style="color: #061553;">${phone}</a></td>
              </tr>
              ${contactMethod ? `<tr>
                <td style="padding: 8px 0; font-size: 13px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Contact via</td>
                <td style="padding: 8px 0; font-size: 14px; color: #111111;">${contactMethod}</td>
              </tr>` : ''}
            </table>

            ${product || specification || quantity || location ? `
            <div style="margin-top: 16px; padding: 16px; background: #fffbeb; border-radius: 6px; border: 1px solid #fde68a;">
              <p style="font-size: 13px; color: #92400e; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 8px;">Product Requirement</p>
              <table style="width: 100%; border-collapse: collapse;">
                ${product ? `<tr><td style="padding: 4px 0; font-size: 13px; color: #6b7280; width: 120px; font-weight: 600;">Product</td><td style="padding: 4px 0; font-size: 14px; color: #111111;">${product}</td></tr>` : ''}
                ${specification ? `<tr><td style="padding: 4px 0; font-size: 13px; color: #6b7280; font-weight: 600;">Specification</td><td style="padding: 4px 0; font-size: 14px; color: #111111;">${specification}</td></tr>` : ''}
                ${quantity ? `<tr><td style="padding: 4px 0; font-size: 13px; color: #6b7280; font-weight: 600;">Monthly Qty</td><td style="padding: 4px 0; font-size: 14px; color: #111111;">${quantity}</td></tr>` : ''}
                ${location ? `<tr><td style="padding: 4px 0; font-size: 13px; color: #6b7280; font-weight: 600;">Delivery To</td><td style="padding: 4px 0; font-size: 14px; color: #111111;">${location}</td></tr>` : ''}
              </table>
            </div>` : ''}

            <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb;">
              <p style="font-size: 13px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 8px;">Message</p>
              <p style="font-size: 14px; color: #111111; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="margin-top: 16px; font-size: 12px; color: #9ca3af;">
              This enquiry was submitted via the website at kailashgroup.co.in. Reply directly to this email to respond to ${name}.
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    )
  }
}
