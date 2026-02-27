import { company, products } from '@/theme/tokens'

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    url: 'https://kailashgroup.co.in',
    foundingDate: company.since,
    description: company.description,
    telephone: company.phone,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '601 B wing, Mukti Tower, Mhada Highway',
      addressLocality: 'Mulund East',
      addressRegion: 'Maharashtra',
      postalCode: '400081',
      addressCountry: 'IN',
    },
    areaServed: 'IN',
    knowsAbout: [
      'Packaging Materials',
      'Industrial Strapping',
      'BOPP Tapes',
      'PET Straps',
      'Stretch Films',
    ],
  }
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    url: 'https://kailashgroup.co.in',
    telephone: company.phone,
    email: company.email,
    foundingDate: company.since,
    description: company.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '601 B wing, Mukti Tower, Mhada Highway',
      addressLocality: 'Mulund East',
      addressRegion: 'Maharashtra',
      postalCode: '400081',
      addressCountry: 'IN',
    },
    priceRange: '$$',
    servesCuisine: undefined,
    hasMap: undefined, // TODO: Add Google Maps URL once provided by client
  }
}

export function getProductsSchema() {
  return products.map((product) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: company.name,
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: company.name,
      },
    },
  }))
}
