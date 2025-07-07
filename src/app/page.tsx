import { About } from '@widgets/AboUt/AboUt'
import { Footer } from '@shared/ui/Footer'
import { PopularSlide } from '@widgets/Category'
import { BrandSlider } from '@entities/brand'
import { MainBanner } from '@widgets/MainBanner'

export default function Home() {
  return (
    <>
      <MainBanner />
      <PopularSlide />
      <BrandSlider />
      <About />
      <Footer />
    </>
  )
}
