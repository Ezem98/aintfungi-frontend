import { HeroSection } from '../components/HeroSection/HeroSection.jsx'
import { CategorySection } from '../components/CategorySection/CategorySection.jsx'
import { ShopSection } from '../components/ShopSection/ShopSection.jsx'
import { SaleSection } from '../components/SaleSection/SaleSection.jsx'

export default function HomePage () {
  const products = []

  return (
    <>
      <HeroSection />
      <CategorySection />
      <ShopSection title='Tienda' products={products} marginInline='15%' />
      <SaleSection />
    </>
  )
}
