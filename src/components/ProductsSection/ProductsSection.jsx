import {
  Container,
  SideBar,
  Filters,
  FiltersHeader,
  HeaderTitle,
  FilteredColors,
  FilteredColor,
  Color,
  FilteredSizes,
  FilterTitle,
  CategoryFilter,
  CategoryItem,
  ColorFilter,
  SizeFilter,
  Sizes,
  Size,
  MostSold,
  MostSoldHeader,
  MostSoldSwiper,
  MostSoldSwiperSlide,
  SlideImage,
  SlideContent,
  Price,
  Content
} from './ProductsSectionElements'
import { ShopSection } from '../ShopSection/ShopSection.jsx'
import { Button } from '../Button'
import { Paginator } from '../Paginator/Paginator.jsx'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-creative'

import { EffectCreative, Autoplay } from 'swiper'

export const ProductsSection = () => {
  return (
    <Container>
      <SideBar>
        <Filters>
          <FiltersHeader>
            <HeaderTitle>
              <span>FILTRAR POR</span>
              <span>limpiar</span>
            </HeaderTitle>
            <FilteredColors>
              <span>Color</span>
              <FilteredColor id='active'>
                <Color color='purple' />
                <span>Violet</span>
              </FilteredColor>
            </FilteredColors>
            <FilteredSizes>
              <span>Size</span>
              <Size id='active'>M</Size>
            </FilteredSizes>
          </FiltersHeader>
          <CategoryFilter>
            <FilterTitle>Categorias</FilterTitle>
            <CategoryItem>
              <span>Buzos</span>
              <span>+</span>
            </CategoryItem>
            <CategoryItem>
              <span>Gorros</span>
              <span>+</span>
            </CategoryItem>
            <CategoryItem>
              <span>Remeras</span>
              <span>+</span>
            </CategoryItem>
            <CategoryItem>
              <span>Short</span>
              <span>+</span>
            </CategoryItem>
          </CategoryFilter>
          <ColorFilter>
            <FilterTitle>Colores</FilterTitle>
            <FilteredColor id='active'>
              <Color color='purple' />
              <span>Violeta</span>
            </FilteredColor>
            <FilteredColor>
              <Color color='blue' />
              <span>Azul</span>
            </FilteredColor>
            <FilteredColor>
              <Color color='pink' />
              <span>Rosa</span>
            </FilteredColor>
            <FilteredColor>
              <Color color='green' />
              <span>Verde</span>
            </FilteredColor>
          </ColorFilter>
          <SizeFilter>
            <FilterTitle>Tallas</FilterTitle>
            <Sizes>
              <Size>S</Size>
              <Size id='active'>M</Size>
              <Size>L</Size>
              <Size>XL</Size>
              <Size>2XL</Size>
              <Size>3XL</Size>
            </Sizes>
          </SizeFilter>
        </Filters>
        <MostSold>
          <MostSoldHeader>
            <FilterTitle>Más Vendidos</FilterTitle>
          </MostSoldHeader>
          <MostSoldSwiper
            grabCursor
            effect='creative'
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400]
              },
              next: {
                translate: ['100%', 0, 0]
              }
            }}
            modules={[EffectCreative, Autoplay]}
            className='mySwiper'
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            loop
          >
            <MostSoldSwiperSlide>
              <SlideImage src={require('../../assets/images/_MG_8655.jpg')} />
              <SlideContent>
                <span>Hoodie Oversized</span>
                <span>Buzos</span>
                <Price>$ 11.990</Price>
                <Button sm primary margin='0'>Ver Más</Button>
              </SlideContent>
            </MostSoldSwiperSlide>
            <MostSoldSwiperSlide>
              <SlideImage src={require('../../assets/images/_MG_8655.jpg')} />
              <SlideContent>
                <span>Hoodie Oversized</span>
                <span>Buzos</span>
                <Price>$ 11.990</Price>
                <Button sm primary margin='0'>Ver Más</Button>
              </SlideContent>
            </MostSoldSwiperSlide>
            <MostSoldSwiperSlide>
              <SlideImage src={require('../../assets/images/_MG_8655.jpg')} />
              <SlideContent>
                <span>Hoodie Oversized</span>
                <span>Buzos</span>
                <Price>$ 11.990</Price>
                <Button sm primary margin='0'>Ver Más</Button>
              </SlideContent>
            </MostSoldSwiperSlide>
          </MostSoldSwiper>
        </MostSold>
      </SideBar>
      <Content>
        <ShopSection marginInline='5%' />
        <Paginator />
      </Content>
    </Container>
  )
}
