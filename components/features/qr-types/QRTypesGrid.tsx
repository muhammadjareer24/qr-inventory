import Container from '@/components/common/Container'
import Eyebrow from '@/components/common/Eyebrow'
import Heading from '@/components/common/Heading'
import Subheading from '@/components/common/Subheading'

const QRTypesGrid = () => {
  return (
    <Container>
      <section className="mt-12 md:mt-20 lg:mt-25 flex items-center flex-col justify-center text-center">
        <Eyebrow>Create Whatever You Want</Eyebrow>
        <Heading>
          QR Inventor:{' '}
          <span className="text-t5-primary">
            Your All-in-One QR Code Solution
          </span>
        </Heading>
        <Subheading>
          Our QR Code Solution lets you create different types of QR codes
          within a centralized dashboard. Store any type of data and achieve
          thousands of scans promptly.
        </Subheading>
      </section>
    </Container>
  )
}

export default QRTypesGrid
