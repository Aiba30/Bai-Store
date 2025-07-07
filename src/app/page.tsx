import { About } from '@widgets/AboUt/AboUt'
import { Footer } from '@shared/ui/Footer'
import { PopularSlide } from '@widgets/Category'
import { BrandSlider } from '@entities/brand'

export default function Home() {
  return (
    <>
      <PopularSlide />
      <BrandSlider />
      <About />
      <Footer />
    </>
  )
}
