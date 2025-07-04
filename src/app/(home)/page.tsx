import { ProductCard, ProductCardProps } from '@entities/product'

const product: ProductCardProps = {
  id: 1,
  name: 'Tineco Floor One S5 Plus',
  title: 'Вертикальный пылесос Tineco Floor One S5 Plus',
  category: 'Пылесос',
  price: 28990,
  oldPrice: 31500,
  images: ['/images/Карусель on drag.jpg'],
  isNew: true,
  isDiscount: true,
  isInStock: true,
  isFavorite: false,
}

export default function Home() {
  return (
    <>
      <h1 style={{ fontSize: '30px' }}>Main Page</h1>
      <ProductCard {...product} />
    </>
  )
}
