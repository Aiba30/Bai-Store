import React from 'react'
import styles from './PopularCard.module.scss'
import Image, { StaticImageData } from 'next/image'
import { popular } from '../mock'

interface PopularCard {
  brandName: string
  logo: StaticImageData | string
}

export const PopularCard: React.FC<PopularCard> = ({ brandName, logo }) => {
  return (
    <div className={styles.logoWrapper}>
      <div className={styles.logoContainer}>
        <Image
          src={logo}
          alt={brandName}
          width={77}
          height={73}
          className={styles.logo}
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  )
}
