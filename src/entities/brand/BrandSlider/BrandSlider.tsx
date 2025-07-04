'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import styles from './BrandSlider.module.scss'
import { BrandCard } from '../BrandCard/BrandCard'
import { brands } from '../mock'

import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
import yandex from '/icons/yandex.svg'

export const BrandSlider: React.FC = () => {
  const slides = []
  const brandsPerSlide = 6

  for (let i = 0; i < brands.length; i += brandsPerSlide) {
    slides.push(brands.slice(i, i + brandsPerSlide))
  }

  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.sectionTitle}>Бренды</h2>

      <div className={styles.swiperWrapper}>
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
            dynamicBullets: false,
            renderBullet: (index, className) => {
              return `<span class="${className} ${styles.customBullet}"></span>`
            },
          }}
          className={styles.swiper}
        >
          {slides.map((slideBrands, slideIndex) => (
            <SwiperSlide key={slideIndex} className={styles.slide}>
              <div className={styles.brandsGrid}>
                {slideBrands.map(brand => (
                  <BrandCard key={brand.id} brandName={brand.name} logo={brand.logo} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Image
          src={'/icons/yandex.svg'}
          alt="yandex"
          width={122}
          height={47}
          className={styles.yandex}
        />
      </div>
    </div>
  )
}
