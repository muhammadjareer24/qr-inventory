import Container from '@/components/common/Container'
import Heading from '@/components/common/Heading'

const FAQ = () => {
  return (
    <Container>
      <div className="mt-12 md:mt-20 lg:mt-25 flex items-center flex-col justify-center text-center">
        <Heading>
          Frequently Asked <span className="text-t5-primary">Questions</span>
        </Heading>
      </div>
    </Container>
  )
}

export default FAQ
