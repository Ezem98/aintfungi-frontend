import { HiOutlineMail } from 'react-icons/hi'
import { Button } from '../Button'
import {
  FooterContainer,
  Image,
  Details,
  NewsletterContainer,
  FloatingEffect,
  TextContainer,
  EmailContainer,
  TextIcon,
  ContactInfoContainer,
  ContactInfo,
  InfoContainer,
  Title
} from './FooterElements'
import { Logo } from '../Logo'
import { MdKeyboardDoubleArrowUp } from 'react-icons/md'

export const Footer = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <FooterContainer>
      <Image image={require('../../assets/images/_MG_5247.jpg')} />
      <Image image={require('../../assets/images/_MG_5829.jpg')} />
      <Image image={require('../../assets/images/_MG_8526.jpg')} />
      <Image image={require('../../assets/images/_MG_8605.jpg')} />
      <Details>
        <NewsletterContainer>
          <FloatingEffect>
            <TextContainer>
              <h1>Suscribite a nuestro Newsletter</h1>
              <p>Recibirás las ofertas primero que nadie.</p>
            </TextContainer>
            <EmailContainer>
              <TextIcon>
                <HiOutlineMail color='white' fontSize='22px' />
                <input placeholder='Email Address' />
              </TextIcon>
              <Button sm background='#A9549A' color='white' margin='1%'>
                Enviar
              </Button>
            </EmailContainer>
          </FloatingEffect>
        </NewsletterContainer>
        <ContactInfoContainer>
          <Logo
            width='60%'
            src={require('../../assets/images/logo-icon.png')}
            // onClick={() => window.redirect('/')}
          />
          <ContactInfo>
            <InfoContainer>
              <Title>Nosotros</Title>
              <ul>
                <li>Quiénes Somos</li>
                <li>Porque Elegirnos</li>
                <li>AIN'T FUNGI</li>
              </ul>
            </InfoContainer>
            <InfoContainer>
              <Title>Ayuda</Title>
              <ul>
                <li>Cómo Comprar</li>
                <li>Guía de Talles</li>
                <li>Métodos de Pago</li>
                <li>Envíos</li>
              </ul>
            </InfoContainer>
            <InfoContainer>
              <Title>Poryeto NFT</Title>
              <ul>
                <li>Whitepaper</li>
                <li>Minted NFT's</li>
              </ul>
            </InfoContainer>
          </ContactInfo>
          <MdKeyboardDoubleArrowUp style={{ cursor: 'pointer', position: 'absolute', right: '15%', top: '30%' }} color='white' fontSize='24px' onClick={goToTop} />
        </ContactInfoContainer>
      </Details>
      <Image image={require('../../assets/images/_MG_5972.jpg')} />
    </FooterContainer>
  )
}
