'use client'
import { FC, useState } from 'react'
import classes from './ToggleFavoriteButton.module.scss'
interface ToggleFavoriteButtonProps {
  productId: string
}
const ToggleFavoriteButton: FC<ToggleFavoriteButtonProps> = ({ productId }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const handleToggle = () => {
    setIsFavorite(prev => !prev)
    console.log(`${isFavorite ? 'Удалено из избранного' : 'Добавлено в избранное'}: ${productId}`)
  }
  return (
    <button onClick={handleToggle} className={isFavorite ? classes.activeBtn : classes.btn}>
      {isFavorite ? 'В избранном' : 'В избранное'}
    </button>
  )
}

export default ToggleFavoriteButton
