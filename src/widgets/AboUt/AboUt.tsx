'use client'
import React, { useState } from 'react'
import styles from './AboUt.module.scss'
import Image from 'next/image'
export const About = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.baiStoreContainer}>
          <div className={styles.baiStore}>
            <Image src={'/icons/logo.svg'} width={261} height={46} alt="logo" />
            <div className={styles.contactInfo}>
              <div className={styles.iconContainer}>
                <Image src={'/icons/location.svg'} width={24} height={24} alt="location" />
                <p className={styles.address}>Борьков 8, Сторо́я горбушка</p>
              </div>
              <div className={styles.iconContainer}>
                <Image src={'/icons/mobile.svg'} width={20} height={20} alt="phone" />
                <p className={styles.phone}>+7 977 371-88-80</p>
              </div>
            </div>
            <button className={styles.feedbackButton}>Обратная связь</button>
            <div className={styles.messageContainer}>
              <a href="#">
                <Image src={'/icons/telegram.svg'} width={24} height={24} alt="telegram" />
              </a>
              <a href="#">
                <Image src={'/icons/instagram.svg'} width={24} height={24} alt="instagram" />
              </a>
              <a href="#">
                <Image src={'/icons/youtube.svg'} width={24} height={24} alt="youtube" />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.aboutSection}>
          <h2 className={styles.aboutTitle}>О НАС:</h2>
          <p className={styles.aboutText}>
            Наша техника варит кофе, гладит рубашки, готовит вкусный ужин и делает уборку за вас. А
            вместе с этим — вы найдёте у нас пледы, подушки, посуду и ещё много приятных мелочей.
            Тысячи довольных клиентов уже выбрали нас за надёжность, выгодные цены и тёплый сервис.
            Попробуйте и вы — делаем ваш быт проще и приятнее каждый день!
          </p>

          {isExpanded && (
            <div className={styles.expandedContent}>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <h3>12+</h3>
                  <p className={styles.item}>лет опыта продаж на рынке</p>
                </div>
                <div className={styles.statItem}>
                  <h3>100+ тысяч</h3>
                  <p className={styles.item}>довольных клиентов</p>
                </div>
                <div className={styles.statItem}>
                  <h3>100%</h3>
                  <p className={styles.item}>оригинальная продукция</p>
                </div>
              </div>
            </div>
          )}

          <button onClick={toggleExpand} className={styles.toggleButton}>
            {isExpanded ? 'Скрыть' : 'Показать полностью'} {'   '}
            <Image
              className={styles.toggleIcon}
              src={isExpanded ? '/icons/telegram.svg' : '/icons/show.svg'}
              alt={isExpanded ? 'Скрыть' : 'Показать'}
              width={13}
              height={9}
            />
          </button>
        </div>
      </div>
    </div>
  )
}
