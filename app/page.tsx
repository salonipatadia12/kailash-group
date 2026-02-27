import { HeroSection } from '@/components/sections/HeroSection'
import { MarqueeStrip } from '@/components/sections/MarqueeStrip'
import { AboutSection } from '@/components/sections/AboutSection'
import { ProductsSection } from '@/components/sections/ProductsSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { MissionSection } from '@/components/sections/MissionSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { getOrganizationSchema } from '@/lib/schema'

export default function HomePage() {
  const schema = getOrganizationSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <ProductsSection showAll={false} />
      <HowItWorksSection />
      <TestimonialsSection />
      <MissionSection />
      <ContactSection />
    </>
  )
}
