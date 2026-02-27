import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  product: z.string().optional(),
  specification: z.string().optional(),
  quantity: z.string().optional(),
  location: z.string().optional(),
  contactMethod: z.enum(['whatsapp', 'call', 'email']).optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormData = z.infer<typeof contactSchema>
