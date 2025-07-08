'use client'
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import SwiperCore from 'swiper'
import Image from 'next/image'
import { advantagesData } from '../mock'
import styles from './AdvantagesSection.module.scss'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import type { Swiper as SwiperType } from 'swiper'

import arrow from '../../../../public/icons/arrow.svg'

export const AdvantagesSlider = () => {
  const groupedData = []
  for (let i = 0; i < advantagesData.length; i += 2) {
    groupedData.push(advantagesData.slice(i, i + 2))
  }

  const [isHovered, setIsHovered] = useState(false)
  const swiperRef = useRef<SwiperType | null>(null)

  const goToNext = () => {
    swiperRef.current?.slideNext()
  }

  const goToPrev = () => {
    swiperRef.current?.slidePrev()
  }

  return (
    <section
      className={styles.sliderSection}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className={styles.sectionTitle}>Наши преимущества</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={42}
        slidesPerView={1}
        onSwiper={swiper => (swiperRef.current = swiper)}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        className={styles.swiperContainer}
      >
        {groupedData.map((pair, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.slideContent}>
              {pair.map(item => (
                <div key={item.id} className={styles.card}>
                  <div className={styles.imageContainer}>
                    <Image src={item.img} alt={item.title} fill className={styles.image} />
                    <button className={styles.orderButton}>
                      {item.cta}
                      <Image src={arrow} alt="arrow" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}

        <div className={`${styles.navButtons} ${isHovered ? styles.visible : ''}`}>
          <button className={styles.prevButton} onClick={goToPrev}>
            <span className={styles.arrow}>&#10094;</span>
          </button>
          <button className={styles.nextButton} onClick={goToNext}>
            <span className={styles.arrow}>&#10095;</span>
          </button>
        </div>

        <div className={`swiper-pagination ${styles.customPagination}`}></div>
      </Swiper>
    </section>
  )
}
