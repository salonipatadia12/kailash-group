import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { company } from '@/theme/tokens'

export default function NotFound() {
  return (
    <div
      className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundColor: '#061553' }}
    >
      <p
        className="text-8xl font-bold mb-4"
        style={{ fontFamily: 'var(--font-heading)', color: '#f3cf2d' }}
        aria-hidden="true"
      >
        404
      </p>
      <h1
        className="text-2xl sm:text-3xl font-bold text-white mb-3"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Page Not Found
      </h1>
      <p className="text-base mb-8 max-w-md" style={{ color: 'rgba(255,255,255,0.70)' }}>
        The page you are looking for doesn&apos;t exist. Explore {company.name}&apos;s packaging solutions.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link href="/">
          <Button style={{ backgroundColor: '#f3cf2d', color: '#061553' }} className="font-semibold">
            Go to Home
          </Button>
        </Link>
        <Link href="/products">
          <Button
            variant="outline"
            style={{ borderColor: '#f3cf2d', color: '#f3cf2d', backgroundColor: 'transparent' }}
          >
            View Products
          </Button>
        </Link>
      </div>
    </div>
  )
}
