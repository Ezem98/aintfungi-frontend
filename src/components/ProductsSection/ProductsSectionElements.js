import styled from 'styled-components'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 25vw auto;
`

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12%;
  width: 100%;
  align-items: center;
`
export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`
export const FiltersHeader = styled.div`
  display: flex;
  flex-direction: column;
  background: #eef2f5;
  padding: 5%;
  font-family: "Rounded Elegance";
  font-size: 16px;
`
export const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5%;

  span {
    &:nth-child(1) {
      font-family: "JUNAR";
      font-size: 10px;
    }
    &:nth-child(2) {
      color: #05297f;
      cursor: pointer;
    }
  }
`
export const FilteredColors = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2%;

  span {
    margin-right: 2%;
  }
`

export const FilteredColor = styled.div`
  display: flex;
  /* margin-left: 2%; */
  width: 100%;
  font-family: "Rounded Elegance";
  font-size: 16px;
  cursor: pointer;

  &#active {
    color: #05297f;
  }

  span {
    margin-left: 3%;
  }

  &:hover {
    transition: 0.5s all;
    transform: scale(0.95);
    color: #05297f;
  }

  &#active:hover {
    color: #000;
  }
`

export const Color = styled.div`
  background: ${(props) => props.color};
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
`
export const FilteredSizes = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 2%;
  }
`

export const FilterTitle = styled.span`
  display: block;
  font-family: "Rounded Elegance";
  font-size: 16px;
  text-transform: uppercase;
  margin-block: 5%;
`

export const CategoryFilter = styled.div`
  display: flex;
  flex-direction: column;
`

export const CategoryItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.5s all;

  &:hover {
    transition: 0.5s all;
    transform: scale(0.95);
  }
`

export const ColorFilter = styled.div`
  height: 16vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const SizeFilter = styled.div`
  display: flex;
  flex-direction: column;
`

export const Sizes = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`

export const Size = styled.div`
  width: fit-content;
  height: 1.5rem;
  padding-inline: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  border: 1px solid #c4c4c4;
  font-family: "Rounded Elegance";
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.5s all;

  &:hover,
  &#active {
    transition: 0.5s all;
    background: #fc9d9d;
    color: white;
    border: none;
  }

  &#active:hover {
    transition: 0.5s all;
    background: transparent;
    color: #000;
    border: 1px solid #c4c4c4;
  }
`

export const MostSold = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15%;
`

export const MostSoldHeader = styled.div`
  display: flex;
  align-items: center;
`

export const MostSoldSwiper = styled(Swiper)`
  width: 20vw;
  height: 30vh;
`

export const MostSoldSwiperSlide = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  border-radius: 0%;
  background: #fff;
`

export const SlideImage = styled.img`
  width: 60%;
`

export const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 5%;
  height: 15vh;

  span {
    font-family: "Rounded Elegance";
    line-height: 20px;

    &:nth-child(1) {
      width: 50%;
      font-size: 16px;
    }
    &:nth-child(2) {
      font-size: 12px;
    }
  }
`

export const Price = styled.span`
  font-family: "LEONARDO";
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #f2994a;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`
