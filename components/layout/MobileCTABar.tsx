import Link from 'next/link'
import { Phone, MessageCircle, FileText } from 'lucide-react'
import { company } from '@/theme/tokens'

export function MobileCTABar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{ backgroundColor: '#061553' }}
      role="navigation"
      aria-label="Quick contact actions"
    >
      <div className="grid grid-cols-3 divide-x divide-white/20">
        {/* Call */}
        <a
          href={`tel:${company.phone}`}
          className="flex flex-col items-center justify-center py-3 gap-1 transition-colors hover:bg-white/10"
          aria-label={`Call ${company.phone}`}
        >
          <Phone className="h-5 w-5" style={{ color: '#f3cf2d' }} aria-hidden="true" />
          <span className="text-xs font-medium text-white">Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${company.phoneRaw}?text=Hello%2C%20I%20am%20interested%20in%20your%20packaging%20products.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 gap-1 transition-colors hover:bg-white/10"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle className="h-5 w-5" style={{ color: '#f3cf2d' }} aria-hidden="true" />
          <span className="text-xs font-medium text-white">WhatsApp</span>
        </a>

        {/* Get Quote */}
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center py-3 gap-1 transition-colors"
          style={{ backgroundColor: '#f3cf2d' }}
          aria-label="Get a quote"
        >
          <FileText className="h-5 w-5" style={{ color: '#061553' }} aria-hidden="true" />
          <span className="text-xs font-bold" style={{ color: '#061553' }}>
            Get Quote
          </span>
        </Link>
      </div>
    </div>
  )
}
