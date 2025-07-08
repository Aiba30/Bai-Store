import { Footer } from '@shared/ui/Footer'
import { PopularSlide } from '@widgets/сategory'
import { BrandSlider } from '@entities/brand'
import { MainBanner } from '@widgets/mainBanner'
import { About } from '@widgets/aboUt'
import { AdvantagesSlider } from '@widgets/advantages'
import { SidebarFilters } from '@features/productFilter'
export default function Home() {
  return (
    <>
      <MainBanner />
      <PopularSlide />
      <BrandSlider />
      <AdvantagesSlider />
      <About />
      <Footer />
    </>
  )
}
