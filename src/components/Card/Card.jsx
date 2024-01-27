import { CardContainer, CardImage, Rectangle, DiscountMark, CardFooter, Header, Details, Price, Colors, Color, Description } from './CardElements'
import { Button } from '../Button'
import { Modal } from '../Modal/Modal.jsx'
import { useState } from 'react'

export const Card = ({ product }) => {
  const { image, discount, isOnSale, category, name, price, colors, description } = product
  const [open, setOpen] = useState(false)

  return (
    <CardContainer>
      <CardImage image={require(`../../assets/images/${image}.jpg`)}>
        {isOnSale && <DiscountMark>-{discount}%</DiscountMark>}
        <Rectangle />
      </CardImage>
      <CardFooter>
        <Header>
          <span>{name}</span>
          <span>{category}</span>
        </Header>
        <Details>
          <Price>
            <span>$ {price}</span>
            {isOnSale && <span>$ {price}</span>}
          </Price>
          <Colors>
            <span>Colores</span>
            {colors.map((color, id) => {
              return (
                <Color key={id} color={color} />
              )
            })}
          </Colors>
        </Details>
        <Description>
          {description}
        </Description>
        <Button primary sm fontFamily='Rounded Elegance' onClick={() => setOpen(true)}>Comprar</Button>
      </CardFooter>
      <Modal open={open} setOpen={setOpen} product={product} />
    </CardContainer>
  )
}
