import { FC } from 'react'
import classes from './ProductCard.module.scss'
import Image from 'next/image'
import { ToggleFavoriteButton } from '@features/toggleFavorite'
import { AddToCartButton } from '@features/addToCart'
import { ProductCardProps } from '@entities/product/model/types'
import { Badge, CardImageSlider } from '@shared/index'
export const ProductCard: FC<ProductCardProps> = product => {
  return (
    <div className={classes.productCard}>
      <div className={classes.imageWrap}>
        <div className={classes.badgesWrap}>
          {product.isDiscount && <Badge variant="sky">Акция</Badge>}
          {product.isNew && <Badge variant="blue">Новинка</Badge>}
        </div>
        <CardImageSlider images={product.images} />
      </div>
      <p className={classes.name}>{product.name}</p>
      <h4 className={classes.title}>{product.title}</h4>
      <div className={classes.pricesWrap}>
        <p>{product.price} ₽</p>
        {product.isDiscount && <p className={classes.oldPrice}>{product.oldPrice} ₽</p>}
      </div>
      <div className={classes.btnsWrap}>
        <ToggleFavoriteButton productId={product.id} />
        <AddToCartButton productId={product.id} />
      </div>
    </div>
  )
}
