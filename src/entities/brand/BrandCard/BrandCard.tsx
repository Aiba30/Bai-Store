import React from 'react'
import styles from './BrandCard.module.scss'
import Image, { StaticImageData } from 'next/image'
import { brands } from '../mock'

interface BrandCardProps {
  brandName: string
  logo: StaticImageData
}

export const BrandCard: React.FC<BrandCardProps> = ({ brandName, logo }) => {
  return (
    <div className={styles.card}>
      <div className={styles.logoContainer}>
        <Image
          src={logo}
          alt={brandName}
          width={121}
          height={47}
          className={styles.logo}
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  )
}
