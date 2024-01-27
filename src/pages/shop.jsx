import { Head } from '../components/Head/Head.jsx'
import { ProductsSection } from '../components/ProductsSection/ProductsSection.jsx'

export default function ShopPage () {
  return (
    <>
      <Head title='Tienda' breadcrumbItem='Ofertas' />
      <ProductsSection />
    </>
  )
}
