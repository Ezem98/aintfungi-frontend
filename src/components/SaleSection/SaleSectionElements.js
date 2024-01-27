import styled from 'styled-components'

export const SaleContainer = styled.div`
    display:grid;
    height: 80vh;
    grid-template-columns: repeat(2, 1fr);
    margin-inline:10%;
    margin-top:10%;
    position: relative;
`

export const Banner = styled.div`
    background: ${props => props.background ?? undefined};
    width: ${props => props.width ?? undefined};
    height: ${props => props.height ?? undefined};
    display: flex;
    grid-row: ${props => props.row};
    grid-column: ${props => props.column};
    position: ${props => props.position ?? 'relative'};
    right: ${props => props.right ?? undefined};
    left: ${props => props.left ?? undefined};
    top: ${props => props.top ?? undefined};
    bottom: ${props => props.bottom ?? undefined};
`

export const BannerText = styled.span`
    font-family:'LEONARDO';
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: ${props => props.color};
    min-width:fit-content;
    height: fit-content;
    position: absolute;
    top: -10%;
    transform: rotate(-90deg);
`

export const BannerImage = styled.div`
    display: flex;
    width: ${props => props.width ?? undefined};
    height: ${props => props.height ?? undefined};
    position: relative;
    background-image: url(${props => props.image});
    background-size: fill;
    background-position: ${props => props.position};
    background-repeat: no-repeat;
`

export const BannerTitle = styled.h2`
    font-family:'LEONARDO';
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: ${props => props.color};
    width: ${props => props.width};
    height: fit-content;
    position: absolute;
    right: ${props => props.right ?? undefined};
    left: ${props => props.left ?? undefined};
    top: ${props => props.top ?? undefined};
    bottom: ${props => props.bottom ?? undefined};
`

export const SaleInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Content = styled.div``

export const Title = styled.h1`
    font-family: 'JUNAR';
    text-transform: uppercase;
    font-size: 26px;
    letter-spacing: .4rem;
`

export const Subtitle = styled.h3`
    font-family: 'LEONARDO';
    font-weight:700;
    text-transform: uppercase;
    font-size: 30px;
    color: #10458e;
`

export const Paragraph = styled.p`
    font-family: 'Rounded Elegance';
    font-size: 16px;
    color: #00000080;
    width: 70%;
    /* line-height: 5px; */
`
