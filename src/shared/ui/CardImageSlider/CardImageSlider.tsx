'use client'
import Image from 'next/image'
import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import classes from './CardImageSlider.module.scss'

type ImageSliderProps = {
  images: string[]
}
export const CardImageSlider: FC<ImageSliderProps> = ({ images }) => {
  if (images.length === 1) {
    return (
      <div className={classes.singleImage}>
        <Image
          src={images[0]}
          alt={'Product'}
          width={240}
          height={213}
          className={classes.image}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
    )
  }

  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className={classes.slider}
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <Image
            src={img}
            alt={`Slide ${idx + 1}`}
            width={240}
            height={213}
            className={classes.image}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
