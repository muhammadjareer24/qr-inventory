import dynamic from 'next/dynamic'
import Hero from '@/components/features/hero/Hero'

const QRTypesGrid = dynamic(
  () => import('@/components/features/qr-types/QRTypesGrid'),
)
const AnalyticsSection = dynamic(
  () => import('@/components/features/analytics/Analytics'),
)
const FAQSection = dynamic(() => import('@/components/features/faq/FAQ'))
const IndustriesSection = dynamic(
  () => import('@/components/features/industries/Industries'),
)

export default function Home() {
  return (
    <main>
      <Hero />
      <QRTypesGrid />
      <AnalyticsSection />
      <IndustriesSection />
      <FAQSection />
    </main>
  )
}
