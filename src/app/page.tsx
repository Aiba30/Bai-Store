import { ProductCardProps } from '@entities/product'
import ProductCard from '@entities/product/ui/ProductCard'
const product = {
  id: 'fdfsdf',
  name: 'Iphone',
  title: 'Iphone dslfdslfkmdlflafdklf dfdfwfwffsfd',
  price: 1000,
  image: '/images/Карусель on drag.jpg',
  category: 'phones',
}

export default function Home() {
  return (
    <>
      <ProductCard {...product} />
    </>
  )
}
