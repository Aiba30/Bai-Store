import { StaticImageData } from 'next/image'
export interface PopularItem {
  id: number
  name: string
  logo: string | StaticImageData
  title?: string
}

export const popular: PopularItem[] = [
  { id: 1, name: 'smartphones', logo: '/icons/smartphones.svg', title: 'Смартфоны' },
  { id: 2, name: 'cleaner', logo: '/icons/cleaner.svg', title: 'Пылесосы' },
  { id: 3, name: 'covers', logo: '/icons/play.svg', title: 'Чехлы и защита' },
  { id: 4, name: 'play', logo: '/icons/play.svg', title: 'Игры и консоли' },
  { id: 5, name: 'keyboard', logo: '/icons/keyboard.svg', title: 'Клавиатуры,мышки' },
  { id: 6, name: 'smartHome', logo: '/icons/smartphones.svg', title: 'Умный дом' },
  { id: 7, name: 'straps', logo: '/icons/straps.svg', title: 'Ремешки' },
  { id: 8, name: 'cleaner', logo: '/icons/nutrition.svg', title: 'Питание и кабели' },
  { id: 9, name: 'covers', logo: '/icons/device.svg', title: 'Накопители' },
  { id: 10, name: 'play', logo: '/icons/trackers.svg', title: 'Поисковые трекеры' },
  { id: 11, name: 'keyboard', logo: '/icons/Watch.svg', title: 'Watch' },
  { id: 12, name: 'smartHome', logo: '/icons/headphones.svg', title: 'Наушники' },
  { id: 13, name: 'straps', logo: '/icons/column.svg', title: 'Портативная акустика' },
  { id: 14, name: 'straps', logo: '/icons/accessories.svg', title: 'Аксессуары Apple' },
]
