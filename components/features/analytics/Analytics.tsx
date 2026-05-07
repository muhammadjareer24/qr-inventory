import Container from '@/components/common/Container'
import Heading from '@/components/common/Heading'
import Subheading from '@/components/common/Subheading'

const Analytics = () => {
  return (
    <Container>
      <div className="mt-12 md:mt-20 lg:mt-25 flex items-center flex-col justify-center text-center">
        <Heading>
          Analytics at <span className="text-t5-primary">QR Inventor</span>
        </Heading>
        <Subheading>
          With QR Inventor, you can track, analyze data, and sources without any
          stress. You can see how many times your QR code is scanned and which
          marketing campaigns engage users better.
        </Subheading>
      </div>
    </Container>
  )
}

export default Analytics
