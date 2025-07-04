export interface ProductCardProps {
  id: string
  name: string
  title: string
  category: string
  price: number
  oldPrice?: number
  images: string[]
  isNew?: boolean
  isDiscount?: boolean
}
