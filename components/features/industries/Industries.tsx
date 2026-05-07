import Container from '@/components/common/Container'
import Heading from '@/components/common/Heading'
import Subheading from '@/components/common/Subheading'

const Industries = () => {
  return (
    <Container>
      <div className="mt-12 md:mt-20 lg:mt-25 flex items-center flex-col justify-center text-center">
        <Heading>
          QR Code Generator,{' '}
          <span className="text-t5-primary">Built for Every Industry</span>
        </Heading>
        <Subheading>
          So, no matter what your industry is, QR Inventor fits right. From
          scanning to get paid, learning and booking, or building trust, it
          helps you do it all.
        </Subheading>
      </div>
    </Container>
  )
}

export default Industries
