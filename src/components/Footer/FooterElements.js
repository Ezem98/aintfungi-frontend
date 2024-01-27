import styled from 'styled-components'

export const FooterContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 50% 50%;
    width:100%;
    height: 130vh;
    margin-top: 10%;
`

export const Image = styled.div`
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center center;
`

export const Details = styled.div`
    display: grid;
    grid-column: 1/4;
    grid-template-rows: 25% 75%;
`

export const NewsletterContainer = styled.div`
    background: #D16A1D;
    position: relative;
`

export const FloatingEffect = styled.div`
    background: #F2994A;
    display: flex;
    align-items:center;
    justify-content:space-between;
    position:absolute;
    width: 98%;
    height: 100%;
    right: 0;
    top: -50%;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction:column;
    margin-left:5%;
    align-items: center;

    h1 {
        font-family: 'JUNAR';
        text-transform: uppercase;
        font-size: 20px;
    }

    p {
        font-family: 'Rounded Elegance';
        font-size: 16px;
    }
`

export const EmailContainer = styled.div`
    display: flex;
    justify-content:space-between;
    border: 2px solid white;
    border-radius: 1rem;
    width: 40%;
    margin-right: 5%;
    padding:1%;
`

export const TextIcon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
        color: white;
        font-family:'Rounded Elegance';
        font-size: 14px;
        border: none;
        background-color: transparent;

        :focus {
            outline: none;
        }
        ::placeholder {
            color: white;
        }
    }
`

export const ContactInfoContainer = styled.div`
    position: relative;
    background: #A9549A;
    display: grid;
    grid-template-columns: 30% 1fr 30%;
    align-items:center;
    justify-items:center;
`

export const ContactInfo = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    justify-items:center;

`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        margin-top:10%;
        font-family: 'Rounded Elegance';
        font-size: 14px;
    }

    li {
        color: white;
        margin-top:20%;
        cursor: pointer;
        transition: all 0.5s;

        &:hover{
            transition: all 0.5s;
            transform:scale(1.1);
        }
    }
`

export const Title = styled.span`
    color: white;
    font-family: 'LEONARDO';
    font-weight: 700;
    font-size: 20px;
`
