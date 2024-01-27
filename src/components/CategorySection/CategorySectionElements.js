import styled from 'styled-components'

export const CategoryContainer = styled.div`
    display:grid;
    position: relative;
    z-index: 1;
    margin-top: 5%;
    margin-inline:10%;
    grid-template-rows: auto auto; 
`

export const CategoryItems = styled.div`
    display:grid;
    gap: 1.5rem;
    height:70vh;
    margin-top:5%;
    grid-template-columns: 40% 25% 35%;
    grid-template-rows: 50% 50%;
`

export const CategoryItem = styled.div`
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: ${props => props.position ?? undefined};
    grid-row: ${props => props.row ? '1/3' : undefined};
    position: relative;
    cursor:pointer;
    transition: all .5s;

    &:hover {
        transform: scale(1.05);
        transition: all .5s;
        /* filter: grayscale(70%); */
    }
`

export const CategoryName = styled.span`
    background: #fff;
    font-family:'JUNAR';
    line-height:24px;
    letter-spacing: .2rem;
    font-size:12px;
    text-transform: uppercase;
    padding-inline: 8%;
    padding-block: 5%;
    position: absolute;
    bottom: 0;
    right: ${props => props.right ? 0 : undefined};
    left: ${props => props.left ? 0 : undefined};
`
