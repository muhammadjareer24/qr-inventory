import Container from '@/components/common/Container'
import Eyebrow from '@/components/common/Eyebrow'
import Heading from '@/components/common/Heading'
import Subheading from '@/components/common/Subheading'
import { QRCodeIcon } from '@/components/icons/Index'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const stats = [
  { id: 'qr', value: '100k+', label: 'QR Generated' },
  { id: 'scans', value: '500k+', label: 'Scans Captured' },
  { id: 'countries', value: '50+', label: 'Countries' },
]

const Hero = () => {
  return (
    <Container>
      <section className="flex flex-col lg:flex-row items-center justify-between  lg:gap-18">
        {/* LEFT */}
        <div className="w-full lg:flex-1 lg:max-w-2xl max-lg:text-center justify-center lg:justify-start">
          <Eyebrow className="">QR Code Generator for Free</Eyebrow>
          <Heading className="text-4xl md:text-5xl lg:text-6xl  max-lg:text-balance">
            Build Custom <span className="text-t5-primary">QR Codes</span> with
            Ease
          </Heading>
          <Subheading>
            From static and dynamic QR codes to URL shorteners, vCards, and
            business cards, our QR code generator lets you create them in
            seconds. Create, customize, and track your scans on a single
            platform to enhance engagement and efficiency.
          </Subheading>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 my-6 justify-center lg:justify-start">
            <Button className="gap-3">
              Create Free QR Code
              <QRCodeIcon />
            </Button>
            <Button variant="outline">Request a Demo</Button>
          </div>

          {/* Stats */}
          <div className="flex items-start divide-x divide-gray mt-8 justify-center lg:justify-start">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className={`flex flex-col shrink-0 px-3 md:px-4 lg:px-6`}
              >
                <span className="text-xl md:text-2xl lg:text-3xl font-bold text-t6 whitespace-nowrap">
                  {stat.value}
                </span>
                <span className="text-xs lg:text-sm text-gray mt-0.5 whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — hidden on mobile */}
        <div className="hidden lg:flex lg:justify-end mt-8 lg:mt-0">
          <div className="border-2 border-t5-primary rounded-3xl p-4 bg-white shadow-2xl">
            <Image
              src="/images/hero.webp"
              alt="Hero Image"
              width={300}
              height={300}
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Hero
