'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { popular } from '../mock'
import 'swiper/css'
import 'swiper/css/pagination'
import styles from './PopularSlide.module.scss'
import { Pagination } from 'swiper/modules'
import { PopularCard } from '../PopularCard/PopularCard'

export const PopularSlide: React.FC = () => {
  const slides = []
  const brandsPerSlide = 7

  for (let i = 0; i < popular.length; i += brandsPerSlide) {
    slides.push(popular.slice(i, i + brandsPerSlide))
  }

  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.sectionTitle}>Популярные категории</h2>

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
                  <div key={brand.id} className={styles.brandItem}>
                    <PopularCard brandName={brand.name} logo={brand.logo} />
                    <p className={styles.brandTitle}>{brand.title}</p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
