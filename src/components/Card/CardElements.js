import styled from 'styled-components'

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 18vw;
`

export const CardImage = styled.div`
    display: flex;
    height: 40vh;
    width: 18vw;
    position: relative;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center center;
    border-radius: 2% 2% 0 0;
    filter: drop-shadow(-1px 3px 4px rgba(0, 0, 0, 0.18));

`

export const Rectangle = styled.div`
    width: 100%;
    height: 2vh;
    background: #00000060;
    position: absolute;
    z-index: 1;
    bottom:0;
`

export const DiscountMark = styled.div`
    display: flex;
    position: absolute;
    right: 5%;
    top: 5%;
    align-items: center;
    justify-content: center;
    height: 3rem;
    width: 3rem;
    background: #F2994A;
    color: #FCF2DF;
    border-radius: 50%;
    font-family: 'LEONARDO';
    font-weight: 700;
    font-size: 17px;
    line-height: 1.5rem;
    letter-spacing: -0.05rem;
`

export const CardFooter = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5%;
    border-radius: 0 0 2% 2%;
    box-shadow: -1px 3px 4px rgba(0, 0, 0, 0.18);
`

export const Header = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;

    span {
        &:nth-child(1) {
            font-family:'LEONARDO';
            font-size: 18px;
            line-height: 1.5rem;
            font-weight: 700;
        }

        &:nth-child(2) {
            font-family:'Rounded Elegance';
            font-size: 14px;
            line-height: 1.2rem;
            color: #F2994A;
        }
    }
`

export const Details = styled.div`
    display: grid;
    grid-template-columns: 40% 50%;
    justify-content: space-between;
    align-items: center;
`

export const Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* width: 35%; */

    span {
        &:nth-child(1) {
            font-family:'LEONARDO';
            font-size: 15px;
            line-height: 1.5rem;
            font-weight: 700;
            color: #F2994A;
        }

        &:nth-child(2) {
            font-family:'Rounded Elegance';
            font-size: 12px;
            line-height: 1.2rem;
            color: #00000050;
        }
    }
`

export const Colors = styled.div`
    display: grid;
    grid-template-columns: 40% repeat(auto-fill, 15%);
    cursor: pointer;

    span {
        font-family:'Rounded Elegance';
        font-size: 12px;
        line-height: 1.2rem;
        color: #00000080;
    }
`

export const Color = styled.div`
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background: ${props => props.color};
    margin-left: 5%;
`

export const Description = styled.p`
    font-family: 'Rounded Elegance';
    font-size:12px;
    line-height: 1.2rem;
    text-transform: uppercase;
    color: #00000080;
`
