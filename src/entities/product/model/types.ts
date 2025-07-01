export interface ProductCardProps {
  id: string
  name:string
  title: string
  category: string
  price: number
  oldPrice?: number
  image: string
  isNew?: boolean
  isDiscount?: boolean
}
