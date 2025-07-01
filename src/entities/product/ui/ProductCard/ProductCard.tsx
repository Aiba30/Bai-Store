import { ProductCardProps } from '@entities/product/model/types'
import { FC } from 'react'
import classes from './ProductCard.module.scss'
import Badge from '@shared/ui/Badge'
import AddToCartButton from '@features/addToCart/ui'
import ToggleFavoriteButton from '@features/toggleFavorite/ui'
import Image from 'next/image'
const ProductCard: FC<ProductCardProps> = product => {
  return (
    <div className={classes.productCard}>
      <div className={classes.imageWrap}>
        <div className={classes.badgesWrap}>
          <Badge variant="blue">New</Badge>
        </div>
        <Image src={product.image} alt={product.title} width={240} height={213} priority />
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

export default ProductCard
