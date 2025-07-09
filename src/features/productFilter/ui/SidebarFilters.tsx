'use client'
import React, { useState } from 'react'
import styles from './SidebarFilters.module.scss'

const categories = [
  'Смартфоны',
  'Планшеты',
  'Умные часы',
  'Наушники',
  'Игры и консоли',
  'Умный дом',
  'iPhone',
  'iMac',
  'Watch',
  'Apple',
  'Xiaomi',
  'Huawei',
  'Realme',
  'Пылесосы',
  'Аксессуары Apple',
  'Зарядные устройства',
  'Клавиатуры, мышки, стилусы',
  'Планшеты и кабели',
  'Поисковые трекеры',
]

const brands = ['Apple', 'Xiaomi', 'Huawei', 'Realme', 'Samsung', 'Polaris']

export const SidebarFilters = () => {
  const [priceFrom, setPriceFrom] = useState('')
  const [priceTo, setPriceTo] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [isCategoryOpen, setIsCategoryOpen] = useState(true)
  const [isBrandOpen, setIsBrandOpen] = useState(true)

  const handleCheckboxChange = (type: 'category' | 'brand', value: string, checked: boolean) => {
    const updater = type === 'category' ? setSelectedCategories : setSelectedBrands
    updater(prev => (checked ? [...prev, value] : prev.filter(item => item !== value)))
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.block}>
        <div className={styles.blockHeader}>
          <h3 className={styles.title}>Цена</h3>
          <span className={styles.staticPlus}>+</span>
        </div>
        <div className={styles.priceInputs}>
          <input
            type="number"
            placeholder="от 20 000 ₽"
            value={priceFrom}
            onChange={e => setPriceFrom(e.target.value)}
          />
          <input
            type="number"
            placeholder="до 20 000 ₽"
            value={priceTo}
            onChange={e => setPriceTo(e.target.value)}
          />
        </div>
        <ul className={styles.priceList}>
          {[
            'До 10 000 ₽',
            'От 15 000 до 25 000 ₽',
            'От 25 000 до 35 000 ₽',
            'От 35 000 до 45 000 ₽',
          ].map(label => (
            <li key={label}>
              <label>
                <input type="checkbox" /> {label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.block}>
        <div className={styles.blockHeader} onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
          <h3 className={styles.title}>Категория</h3>
          <span className={styles.toggle}>{isCategoryOpen ? '−' : '+'}</span>
        </div>
        {isCategoryOpen && (
          <ul className={styles.list}>
            {categories.map(cat => (
              <li key={cat}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={e => handleCheckboxChange('category', cat, e.target.checked)}
                  />
                  {cat}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.block}>
        <div className={styles.blockHeader} onClick={() => setIsBrandOpen(!isBrandOpen)}>
          <h3 className={styles.title}>Бренд</h3>
          <span className={styles.toggle}>{isBrandOpen ? '−' : '+'}</span>
        </div>
        {isBrandOpen && (
          <ul className={styles.list}>
            {brands.map(brand => (
              <li key={brand}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={e => handleCheckboxChange('brand', brand, e.target.checked)}
                  />
                  {brand}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  )
}
