export const brandColors = {
  primary: '#061553',
  accent: '#f3cf2d',
  footer: '#212120',
  text: '#666666',
  heading: '#111111',
  white: '#ffffff',
  gray: '#dddddd',
} as const

export const brandFonts = {
  heading: 'Rajdhani',
  body: 'Poppins',
} as const

export const company = {
  name: 'Kailash Enterprises',
  since: '1996',
  phone: '+91 9821287874',
  phoneRaw: '919821287874',
  email: 'info@kailashgroup.co.in',
  address: '601 B wing, Mukti Tower, Mhada Highway, Mulund East, Mumbai, Maharashtra-400081',
  tagline: 'Professional distributor of packaging solutions across diverse sectors',
  description:
    'A professionally managed distribution firm specializing in high-quality industrial and packaging materials.',
  vision:
    'To be a preferred and trusted packaging solutions partner, recognized for quality, reliability, and ethical business practices.',
} as const

export const missionPoints = [
  'Supply high-quality packaging materials meeting international standards and expectations',
  'Build long-term partnerships through consistent service, integrity, and transparency',
  'Ensure timely delivery and competitive pricing without quality compromise',
  'Continuously improve processes aligned with industry advancements',
  'Create sustainable value for customers',
] as const

export const products = [
  {
    id: 'strapping-rolls',
    name: 'Strapping Rolls',
    image: '/images/PET-Strapping-Rolls.jpeg',
    category: 'Packaging Material',
    description: 'PP strapping for securing heavy loads and pallets in transit.',
  },
  {
    id: 'bopp-tapes',
    name: 'BOPP Tape Rolls',
    image: '/images/Bopp-Tape-Rolls.jpeg',
    category: 'Packaging Material',
    description: 'High-adhesion transparent tape for box sealing and carton closure.',
  },
  {
    id: 'pet-straps',
    name: 'PET Straps',
    image: '/images/PET-Strapping-Rolls.jpeg',
    category: 'Packaging Material',
    description: 'Heavy-duty polyester straps for demanding industrial packaging.',
  },
  {
    id: 'stretch-films',
    name: 'Stretch Films',
    image: '/images/about.jpg',
    category: 'Packaging Material',
    description: 'Pallet wrapping film for load stabilization and protection.',
  },
  {
    id: 'taping-machine',
    name: 'Taping Machine',
    image: '/images/machine.png',
    category: 'Packaging Equipment',
    description: 'Manual and semi-automatic machines for consistent tape application.',
  },
] as const

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const
