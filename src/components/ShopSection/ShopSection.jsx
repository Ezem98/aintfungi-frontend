import { ShopContainer, CardContainer } from './ShopSectionElements'
import { Title } from '../title'
import { Card } from '../Card/Card'

export const ShopSection = ({ products, title, marginInline }) => {
  const product = {
    id: 0,
    isOnSale: true,
    discount: 20,
    image: '_MG_5404',
    category: 'Buzos',
    name: 'crew neck',
    price: 11990,
    colors: ['black', 'pink', 'lightBlue', 'grey'],
    description: 'Buzo cuello redondo 10% algodon con estampa a eleccion'
  }

  return (
    <ShopContainer marginInline={marginInline}>
      {title && <Title>{title}</Title>}
      <CardContainer>
        {/* {products?.map((product) => {
          return (<Card key={product.id} product={product} />)
        })} */}
        <Card product={product} />
        <Card product={product} />
        <Card product={product} />
        <Card product={product} />
        <Card product={product} />
        <Card product={product} />
      </CardContainer>
    </ShopContainer>
  )
}
