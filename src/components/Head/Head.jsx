import {
  HeadContainer,
  Breadcrumb,
  BreadcrumbItem,
  Divider
} from './HeadElements.js'
import { Title } from '../title'

export const Head = (props) => {
  const { title, breadcrumbItem } = props
  return (
    <HeadContainer>
      <Title fontFamily='Hind' fontWeight='700' letterSpacing='0'>{title}</Title>
      <Breadcrumb>
        <BreadcrumbItem>Inicio</BreadcrumbItem>
        <Divider />
        <BreadcrumbItem>{breadcrumbItem}</BreadcrumbItem>
      </Breadcrumb>
    </HeadContainer>
  )
}
