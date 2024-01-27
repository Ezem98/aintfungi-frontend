import styled from 'styled-components'

export const HeadContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height: 25vh;
    background: #C4C4C4;
    justify-content:center;
    align-items:center;
`

export const Breadcrumb = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
`

export const BreadcrumbItem = styled.span`
    font-family:'Roboto';
    font-size:16px;
    font-weight:500;
    line-height:24px;
    margin: 5%;
    cursor:pointer;
    transition: 0.5s all;

    &:hover{
        transform: scale(1.1);
        text-decoration-line: underline;
        transition: 0.5s all; 
    }

`

export const Divider = styled.div`
    width: 25px;
    height: 25px;
    background: #000;
`
