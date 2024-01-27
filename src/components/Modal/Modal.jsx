import { Backdrop, StyledPopup, CloseButton, Image, Container, Header, Content, Price, Stock } from './ModalElements'
import { TfiClose } from 'react-icons/tfi'
export const Modal = ({ open, setOpen, product }) => {
  const { image, discount, isOnSale, /* category, */ name, price/*, colors, description**/ } = product

  return (
    <>
      {open && <Backdrop onClick={() => setOpen(false)} />}
      <StyledPopup open={open}>
        {close => (
          <Container className='modal'>
            <CloseButton onClick={() => { close(); setOpen(false) }}>
              <TfiClose color='#C4C4C4' />
            </CloseButton>
            <Image image={require(`../../assets/images/${image}.jpg`)} />
            <Content className='content'>
              <Header className='header'>{name}</Header>
              {' '}
              <Price>
                <span>{price - price * (discount / 100)}</span>
                {isOnSale && <span>{price}</span>}
              </Price>
              <Stock />
            </Content>
          </Container>
        )}
      </StyledPopup>
    </>
  )
}
