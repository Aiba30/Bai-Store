import { BrandSlider } from '@entities/brand/BrandSlider/BrandSlider'
import { PopularSlide } from '@widgets/Category/PopularSlide/PopularSlide'
import { About } from '@widgets/AboUt/AboUt'

export default function Home() {
  return (
    <>
      <PopularSlide />
      <BrandSlider />
      <About />
    </>
  )
}
