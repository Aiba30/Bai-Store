import { StaticImageData } from 'next/image'
import smartphones from '../../../public/assets/icon/smartphones.svg'
import cleaner from '../../../public/assets/icon/cleaner.svg'
import covers from '../../../public/assets/icon/covers.svg'
import play from '../../../public/assets/icon/play.svg'
import keyboard from '../../../public/assets/icon/keyboard.svg'
import smartHome from '../../../public/assets/icon/smartphones.svg'
import straps from '../../../public/assets/icon/straps.svg'

import nutrition from '../../../public/assets/icon/nutrition.svg'
import device from '../../../public/assets/icon/device.svg'
import trackers from '../../../public/assets/icon/trackers.svg'
import whatch from '../../../public/assets/icon/Watch.svg'
import headphones from '../../../public/assets/icon/headphones.svg'
import column from '../../../public/assets/icon/column.svg'
import accessories from '../../../public/assets/icon/accessories.svg'

export interface popular {
  id: number
  name: string
  logo: StaticImageData
  title?: string
}

export const popular: popular[] = [
  { id: 1, name: 'smartphones', logo: smartphones, title: 'Смартфоны' },
  { id: 2, name: 'cleaner', logo: cleaner, title: 'Пылесосы' },
  { id: 3, name: 'covers', logo: covers, title: 'Чехлы и защита' },
  { id: 4, name: 'play', logo: play, title: 'Игры и консоли' },
  { id: 5, name: 'keyboard', logo: keyboard, title: 'Клавиатуры,мышки' },
  { id: 6, name: 'smartHome', logo: smartHome, title: 'Умный дом' },
  { id: 7, name: 'straps', logo: straps, title: 'Ремешки' },
  { id: 8, name: 'cleaner', logo: nutrition, title: 'Питание и кабели' },
  { id: 9, name: 'covers', logo: device, title: 'Накопители' },
  { id: 10, name: 'play', logo: trackers, title: 'Поисковые трекеры' },
  { id: 11, name: 'keyboard', logo: whatch, title: 'Watch' },
  { id: 12, name: 'smartHome', logo: headphones, title: 'Наушники' },
  { id: 13, name: 'straps', logo: column, title: 'Портативная акустика' },
  { id: 14, name: 'straps', logo: accessories, title: 'Аксессуары Apple' },
]
