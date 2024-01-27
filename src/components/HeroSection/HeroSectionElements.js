import styled from 'styled-components'
// import { colors } from '../theme'
import lines from '../../assets/images/lines.png'

export const HeroSectionContainer = styled.div`
    display: flex;
    width:100%;
    height: 88vh;
    background: linear-gradient(114.88deg, #110929 -2.45%, #290049 58.38%, #1D0E49 101.84%);
`

export const HeroLeft = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50%;

    img {
        width:50%;
        position: absolute;
        bottom: -25%;
        left: -15%;
    }
`
export const HeroRight = styled.div`
    display: flex;
    height: 100%;
    width: 50%;
    justify-content: center;
    align-items: center;
    position: relative;
    background-image: url(${lines});
    background-position: 100% 0%;
    background-repeat: no-repeat;

    img {
        position: absolute;
        z-index: 1;
        width: 15%;
        bottom: 12%;
        left: 23%;
    }
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
`

export const Title = styled.h1`
    position: absolute;
    top: 12%;
    left: 12%;
    color: white;
    font-family: 'LEONARDO';
    text-transform: capitalize;
    font-weight: 700;
    font-size:83px;
    line-height:70px;
    letter-spacing:-.2rem;
    width: 80%;
`

export const Subtitle = styled.p`
    position:absolute;
    top: 45%;
    left: 45%;
    color: white;
    font-family: 'MAMMAGAMMA';
    font-weight: 1;
    font-size:29px;
    line-height:35px;
    letter-spacing:.5rem;
    width:70%;
`

export const GoButton = styled.div`
    position:absolute;
    top: 55%;
    left: 12%;
    height: 10rem;
    width: 10rem;
    border-radius: 100%;
    background: #F0972D;
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: 'Rounded Elegance';
    font-size:16px;
    line-height:20px;
    letter-spacing:.3rem;
    cursor:pointer;
    
    span {
        font-size: 16px;
        text-transform: capitalize;
        width: 70%;
    }
`
