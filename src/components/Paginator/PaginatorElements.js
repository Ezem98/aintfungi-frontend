import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin: auto;
  margin-block: 15%;
  cursor: pointer;
  width: 25%;
  justify-content: space-between;


  #disable {
    color: #c4c4c4;
  }
`

export const Pages = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  font-family: "Hind";
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  transition: 0.5s all;

  &#active {
    background: #a9549a;
    color: #fff;
  }

  &#active:hover {
    background: transparent;
    color: #000;
  }

  &:hover {
    transition: 0.5s all;
    background: #a9549a;
    color: #fff;
  }
`
