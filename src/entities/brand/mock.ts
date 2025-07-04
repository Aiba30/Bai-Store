import xiaomi from '../../../public/assets/icon/xiaomi.svg'
import Apple from '../../../public/assets/icon/apple.svg'
import Dyson from '../../../public/assets/icon/Dyson.svg'
import Huawei from '../../../public/assets/icon/Huawei.svg'
import poco from '../../../public/assets/icon/poco.svg'
import p from '../../../public/assets/icon/p.svg'
import { StaticImageData } from 'next/image'

import mackbok from '../../../public/assets/icon/mackobok.svg'
import iphone from '../../../public/assets/icon/iphone.svg'
import yandex from '../../../public/assets/icon/yandex.svg'
import honor from '../../../public/assets/icon/honor.svg'
import samsung from '../../../public/assets/icon/samsung.svg'
import readme from '../../../public/assets/icon/readme.svg'

export interface Brand {
  id: number
  name: string
  logo: StaticImageData
}

export const brands: Brand[] = [
  { id: 1, name: 'Xiaomi', logo: xiaomi },
  { id: 2, name: 'Apple', logo: Apple },
  { id: 3, name: 'Dyson', logo: Dyson },
  { id: 4, name: 'Huawei', logo: Huawei },
  { id: 5, name: 'poco', logo: poco },
  { id: 6, name: 'p', logo: p },
  { id: 7, name: 'mackbok', logo: mackbok },
  { id: 8, name: 'iphone', logo: iphone },
  { id: 9, name: 'yandex', logo: yandex },
  { id: 10, name: 'honor', logo: honor },
  { id: 11, name: 'samsung', logo: samsung },
  { id: 12, name: 'readme', logo: readme },
]
