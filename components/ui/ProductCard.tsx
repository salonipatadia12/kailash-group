import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface ProductCardProps {
  name: string
  category: string
  image: string
  id: string
}

export function ProductCard({ name, category, image }: ProductCardProps) {
  return (
    <Card
      className="group overflow-hidden border-0 transition-all duration-300 hover:-translate-y-1"
      style={{ boxShadow: '0 4px 20px rgba(6,21,83,0.10)' }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className="px-2 py-0.5 text-xs font-semibold rounded"
            style={{ backgroundColor: '#061553', color: '#f3cf2d' }}
          >
            {category}
          </span>
        </div>
      </div>
      <CardContent className="p-5">
        <h3
          className="text-lg font-semibold mb-3"
          style={{ fontFamily: 'var(--font-heading)', color: '#061553' }}
        >
          {name}
        </h3>
        <Link
          href={`/contact?product=${encodeURIComponent(name)}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:gap-2.5"
          style={{ color: '#f3cf2d' }}
          aria-label={`Enquire about ${name}`}
        >
          Enquire Now
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </CardContent>
    </Card>
  )
}
