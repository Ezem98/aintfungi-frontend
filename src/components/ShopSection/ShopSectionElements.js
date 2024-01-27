import styled from 'styled-components'

export const ShopContainer = styled.div`
    display:grid;
    grid-template-rows: auto auto;
    position: relative;
    z-index: 1;
    margin-top: 5%;
    margin-inline: ${props => props.marginInline};
`
export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-content: center;
    justify-items: center;
    gap: 2% 0;
`
