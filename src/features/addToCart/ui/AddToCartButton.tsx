'use client'
import { FC } from 'react'
import classes from './AddToCartButton.module.scss'
interface AddToCartButtonProps {
  productId: string
}
const AddToCartButton: FC<AddToCartButtonProps> = ({ productId }) => {
  const handleClick = () => {
    console.log(productId)
  }
  return (
    <button className={classes.addToCartBtn} onClick={handleClick}>
      В корзину
    </button>
  )
}

export default AddToCartButton
