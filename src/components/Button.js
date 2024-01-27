import styled from 'styled-components'
import { sizes, colors } from '../theme'

export const Button = styled.button`
    width: ${props => props.lg ? sizes.lg.width : props.md ? sizes.md.width : props.sm ? sizes.sm.width : ''};
    height: ${props => props.lg ? sizes.lg.height : props.md ? sizes.md.height : props.sm ? sizes.sm.height : ''};
    background: ${props => props.primary ? colors.primary : props.secondary ? colors.secondary : props.outlined ? 'transparent' : props.background};
    border: ${props => props.outlined ? `1px solid ${colors.primary}` : 'transparent'};
    color: ${props => props.primary ? '#FCF2DF' : props.color ?? '#F0972D'};
    font-family: ${props => props.fontFamily ?? undefined};
    font-size: ${props => props.lg ? sizes.lg.fontSize : props.md ? sizes.md.fontSize : props.sm ? sizes.sm.fontSize : ''};
    border-radius: .5rem;
    margin:${props => props.margin ?? 'auto'};
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
        transition: all 0.5s;
        transform: scale(1.1);
    }
`
