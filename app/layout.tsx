import type { Metadata } from 'next'
import { Poppins, Rajdhani } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileCTABar } from '@/components/layout/MobileCTABar'
import { WhatsAppFAB } from '@/components/layout/WhatsAppFAB'
import { company } from '@/theme/tokens'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kailashgroup.co.in'),
  title: {
    default: `${company.name} — Packaging Solutions Since ${company.since}`,
    template: `%s | ${company.name}`,
  },
  description: `${company.name} is a professionally managed distribution firm specializing in high-quality industrial and packaging materials since ${company.since}. Serving manufacturers, logistics providers, warehouses, and trading organizations across India.`,
  keywords: [
    'packaging materials',
    'strapping rolls',
    'BOPP tapes',
    'PET straps',
    'stretch films',
    'taping machine',
    'industrial packaging',
    'Mumbai distributor',
    'Kailash Enterprises',
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kailashgroup.co.in',
    siteName: company.name,
    title: `${company.name} — Packaging Solutions Since ${company.since}`,
    description: company.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${rajdhani.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFAB />
        <MobileCTABar />
      </body>
    </html>
  )
}
