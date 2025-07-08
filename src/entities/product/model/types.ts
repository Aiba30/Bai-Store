export interface ProductCardProps {
  id: string | number
  name: string
  title: string
  category: string
  price: number
  oldPrice?: number
  images: string[]
  isNew?: boolean
  isDiscount?: boolean
  isInStock: boolean
  isFavorite?: boolean
}
