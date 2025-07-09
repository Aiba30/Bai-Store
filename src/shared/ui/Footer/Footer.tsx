import React from 'react'
import Image from 'next/image'
import styles from './Footer.module.scss'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div>
          <div className={styles.baiStore}>
            <Image src={'/icons/baistoreWhite.svg'} width={261} height={46} alt="logo" />
            <div className={styles.contactInfo}>
              <div className={styles.iconContainer}>
                <Image src={'/icons/location.svg'} width={24} height={24} alt="location" />
                <p className={styles.address}>Борьков 8, Сторо́я горбушка</p>
              </div>
              <div className={styles.iconContainer} id={styles.mobile}>
                <Image src={'/icons/mobile.svg'} width={20} height={20} alt="phone" />
                <p className={styles.phone}>+7 977 371-88-80</p>
              </div>
            </div>
            <button className={styles.feedbackButton}>Обратная связь</button>
            <div className={styles.messageContainer}>
              <a href="#">
                <Image src={'/icons/telegramWhite.svg'} width={24} height={24} alt="telegram" />
              </a>
              <a href="#">
                <Image src={'/icons/instagramWhite.svg'} width={24} height={24} alt="instagram" />
              </a>
              <a href="#">
                <Image src={'/icons/youtubeWhite.svg'} width={24} height={24} alt="youtube" />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.menuColumns}>
          <div className={styles.menuColumn}>
            <Link href="/catalog" >
              <h3 className={styles.columnTitle}>Каталог</h3>
            </Link>
            <ul className={styles.menuList}>
              <li className={styles.liTitle}>Смартфоны</li>
              <li className={styles.liTitle}>Планшеты</li>
              <li className={styles.liTitle}>Умные часы</li>
              <li className={styles.liTitle}>Наушники</li>
              <li className={styles.liTitle}>Игры и консоли</li>
              <li className={styles.liTitle}>Портативная акустика</li>
              <li className={styles.liTitle}>Умный дом</li>
            </ul>
          </div>

          <div className={styles.menuColumn}>
            <h3>&nbsp;</h3>
            <ul className={styles.menuList} id={styles.serch}>
              <li className={styles.liTitle}>Чехлы и защита</li>
              <li className={styles.liTitle}>Ремешки</li>
              <li className={styles.liTitle}>Клавиатуры, мышки, стилусы</li>
              <li className={styles.liTitle}>Накопители</li>
              <li className={styles.liTitle}>Держатели для устройств</li>
              <li className={styles.liTitle}>Поисковые трекеры</li>
            </ul>
          </div>

          <div className={styles.menuColumn}>
            <h3>&nbsp;</h3>
            <ul className={styles.menuList} id={styles.apple}>
              <li className={styles.liTitle}>Apple</li>
              <li className={styles.liTitle}>Mac</li>
              <li className={styles.liTitle}>iPhone</li>
              <li className={styles.liTitle}>Watch</li>
              <li className={styles.liTitle}>iPad</li>
              <li className={styles.liTitle}>Airpods</li>
              <li className={styles.liTitle}>Аксессуары Apple</li>
            </ul>
          </div>

          <div className={styles.menuColumn}>
            <h3 className={styles.columnTitle}>Профиль</h3>
            <ul className={styles.menuList}>
              <li className={styles.liTitle}>Избранное</li>
              <li className={styles.liTitle}>Корзина</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
