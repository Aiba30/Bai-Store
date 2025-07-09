'use client'
import React, { useState } from 'react'
import styles from './MainBanner.module.scss'
import Image from 'next/image'
import { mockSlidesData } from '../mock'

export const MainBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === mockSlidesData.length - 1 ? 0 : prevIndex + 1))
  }

  const goToPrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? mockSlidesData.length - 1 : prevIndex - 1))
  }

  return (
    <div
      className={styles.sliderContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={styles.sliderWrapper}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {mockSlidesData.map(slide => (
          <div key={slide.id} className={styles.slide}>
            <div className={styles.slideImage}>
              <Image
                src={slide.image}
                alt={slide.title}
                width={1240}
                height={319}
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </div>

      <div className={`${styles.navButtons} ${isHovered ? styles.visible : ''}`}>
        <button className={styles.prevButton} onClick={goToPrev}>
          <span className={styles.arrow}>&#10094;</span>
        </button>
        <button className={styles.nextButton} onClick={goToNext}>
          <span className={styles.arrow}>&#10095;</span>
        </button>
      </div>

      <div className={styles.dotsContainer}>
        {mockSlidesData.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  )
}
