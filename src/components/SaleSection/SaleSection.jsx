import {
  SaleContainer,
  Banner,
  BannerText,
  BannerImage,
  BannerTitle,
  SaleInfoContainer,
  Content,
  Title,
  Subtitle,
  Paragraph
} from './SaleSectionElements.js'
import { Button } from '../Button.js'

export const SaleSection = () => {
  return (
    <SaleContainer>
      <Banner background='#A9549A' width='80%' height='65%' column='1/2'>
        <BannerText color='#10458e'>woman collection</BannerText>
        <BannerImage position='center center' width='100%' height='100%' image={require('../../assets/images/_MG_5248.png')} />
        <BannerTitle width='60%' color='#ced60a' bottom='-8%' left='2%'>Woman Summer Collection</BannerTitle>
      </Banner>
      <SaleInfoContainer>
        <Content>
          <Title>Descubre Nuestras Ofertas</Title>
          <Subtitle>20% Descuento!</Subtitle>
          <Paragraph>
            Sed pretium turpis id orci molestie, vitae placerat ligula vulputate.
            Duis volutpat ante sed laoreet tempus. Vivamus diam purus
          </Paragraph>
          <Button sm primary margin='0'>
            Tienda
          </Button>
        </Content>
        <Banner background='#10458e' width='75%' height='40%' column='2/3' left='0%'>
          <BannerText color='#e41f21'>Girls Collection</BannerText>
          <BannerImage position='center 20%' width='100%' height='100%' image={require('../../assets/images/_MG_8812.png')} />
          <BannerTitle width='70%' color='#ced60a' bottom='5%' left='10%'>Girls 2023 Summer Collection</BannerTitle>
        </Banner>
      </SaleInfoContainer>
    </SaleContainer>
  )
}
