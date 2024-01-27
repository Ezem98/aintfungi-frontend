import styled from 'styled-components'
import Popup from 'reactjs-popup'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 999;
`

export const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    background: #fff;
    width: 75vw;
    height: 75vh;
    display: flex;
    margin: auto;
    filter: blur(-20px);
  }
  // use your custom style for ".popup-content"
  &-content {
    display: flex;
    height: 90%;
    width: 90%;
  }
`

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  right: 0;
  font-size: 24px;
`

export const Image = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  grid-row: 2/3;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 35% auto;
  grid-template-rows: 5% auto;
  gap:0 5%;
`

export const Header = styled.h1`
  font-family: "Hind";
  font-weight: 700;
  font-size: 46px;
  line-height: 56px;
  text-transform: capitalize;
`

export const Content = styled.div`
    display: grid;
    grid-template-rows: repeat(6, 1fr);
  grid-row: 2/3;
`
export const Price = styled.div``

export const Stock = styled.div``
