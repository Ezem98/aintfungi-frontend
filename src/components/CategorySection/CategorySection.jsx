import {
  CategoryContainer,
  CategoryItems,
  CategoryItem,
  CategoryName
} from './CategorySectionElements.js'

import { Title } from '../title'

export const CategorySection = () => {
  return (
    <CategoryContainer>
      <Title>Categorias</Title>
      <CategoryItems>
        <CategoryItem image={require('../../assets/images/buzo.jpg')} row position='center'>
          <CategoryName left>Buzos</CategoryName>
        </CategoryItem>
        <CategoryItem image={require('../../assets/images/remera.jpg')} row position='center'>
          <CategoryName left>Remeras</CategoryName>
        </CategoryItem>
        <CategoryItem image={require('../../assets/images/short.jpg')} position='center 30%'>
          <CategoryName left>Shorts</CategoryName>
        </CategoryItem>
        <CategoryItem image={require('../../assets/images/accesorio.jpg')} position='center 25%'>
          <CategoryName right>Accesorios</CategoryName>
        </CategoryItem>
      </CategoryItems>
    </CategoryContainer>
  )
}
