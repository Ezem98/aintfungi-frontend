import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { Container, Pages, Page } from './PaginatorElements'

export const Paginator = ({ pages }) => {
  return (
    <Container>
      <HiArrowNarrowLeft fontSize='30px' id='disable' />
      <Pages>
        <Page id='active'>
          1
        </Page>
        <Page>
          2
        </Page>
        <Page>
          3
        </Page>
        <Page>
          4
        </Page>
      </Pages>
      <HiArrowNarrowRight fontSize='30px' />
    </Container>
  )
}
