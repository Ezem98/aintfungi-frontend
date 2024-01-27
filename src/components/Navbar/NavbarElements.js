import styled from 'styled-components'

export const NavBar = styled.div`
    display: flex;
    width: 100%;
    background: #FCF2DF;
    position: relative;
    z-index:1;
`
export const NavBarItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    font-family: 'Rounded Elegance';
    font-size: 16px;
    font-weight: 400;
`

export const NavBarItem = styled.div`
    padding-inline: 2rem;
    padding-block: .6rem;
    color: ${props => props.highlighted ? 'white' : 'black'};
    background: ${props => props.highlighted ? '#F0972D' : undefined};
    border-radius: ${props => props.highlighted ? '20px' : undefined};
    cursor: pointer;
`

export const IconButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 10%;
`
