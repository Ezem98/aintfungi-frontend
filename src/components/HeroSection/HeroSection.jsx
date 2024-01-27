import {
  HeroSectionContainer,
  HeroLeft,
  HeroRight,
  Title,
  Subtitle,
  GoButton,
  ImageContainer
} from './HeroSectionElements'
import { HiArrowUpRight } from 'react-icons/hi2'
import { EffectCards, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import '../../App.css'
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <HeroLeft>
        <Title>Estamos creando una nueva forma de vestir</Title>
        <Subtitle>
          SOMOS AIN'T FUNGI, UNA MARCA DE ROPA REVOLUCIONARIA QUE NACE DESDE
          LA IDEA DE UNICIDAD.
        </Subtitle>
        <GoButton>
          <HiArrowUpRight fontSize='3rem' />
          <span>Discover NFT Project</span>
        </GoButton>
        <img src={require('../../assets/images/Image1x.png')} alt='meta' />
      </HeroLeft>
      <HeroRight>
        <Swiper
          slidesPerView='auto'
          effect='cards'
          grabCursor
          loop
          modules={[Autoplay, EffectCards, Pagination]}
          pagination
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
        >
          <SwiperSlide>
            <ImageContainer
              image={require('../../assets/images/IMG_0953.jpg')}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ImageContainer
              image={require('../../assets/images/_MG_6746.jpg')}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ImageContainer
              image={require('../../assets/images/_MG_6754.jpg')}
            />
          </SwiperSlide>
        </Swiper>
        <img src={require('../../assets/images/circle.png')} alt='' />
      </HeroRight>
    </HeroSectionContainer>
  )
}
