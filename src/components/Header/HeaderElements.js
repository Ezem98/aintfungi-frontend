import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 15% 15% auto;
`
export const HeaderTab = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: ${props => props?.background ?? undefined};
    color: ${props => props?.color ?? undefined};
    font-size: ${props => props?.fontSize ?? undefined};
    font-family: ${props => props?.fontFamily ?? undefined};
    cursor: ${props => props?.cursor ? 'pointer' : undefined};

    span {
    &:nth-child(2) {
      font-family: "MAMMAGAMMA";
      font-size: 2.5rem;
    }

    &:nth-child(3) {
      font-family: "LEONARDO";
      font-size: 2rem;
    }

  }
`
