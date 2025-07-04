import { StaticImageData } from 'next/image'
export interface Brand {
  id: number
  name: string
  logo: StaticImageData | string
}

export const brands: Brand[] = [
  { id: 1, name: 'Xiaomi', logo: '/icons/xiaomi.svg' },
  { id: 2, name: 'Apple', logo: '/icons/apple.svg' },
  { id: 3, name: 'Dyson', logo: '/icons/Dyson.svg' },
  { id: 4, name: 'Huawei', logo: '/icons/Huawei.svg' },
  { id: 5, name: 'poco', logo: '/icons/poco.svg' },
  { id: 6, name: 'p', logo: '/icons/p.svg' },
  { id: 7, name: 'mackbok', logo: '/icons/mackobok.svg' },
  { id: 8, name: 'iphone', logo: '/icons/iphone.svg' },
  { id: 9, name: 'yandex', logo: '/icons/yandex.svg' },
  { id: 10, name: 'honor', logo: '/icons/honor.svg' },
  { id: 11, name: 'samsung', logo: '/icons/samsung.svg' },
  { id: 12, name: 'readme', logo: '/icons/readme.svg' },
]
