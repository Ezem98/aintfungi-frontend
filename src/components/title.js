import styled from 'styled-components'

export const Title = styled.h1`
    text-align:center;
    font-size:${props => props.fontSize ?? '48px'};
    font-family: ${props => props.fontFamily ?? 'LEONARDO'};
    font-weight: ${props => props.fontWeight ?? undefined};
    letter-spacing: ${props => props.letterSpacing ?? '.3rem'};
`
