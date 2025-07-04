import { BrandSlider } from '@entities/brand/BrandSlider/BrandSlider'
import { PopularSlide } from '@entities/Popular/PopularSlide/PopularSlide'
import { About } from '@widgets/AboUt/AboUt'
export default function Home() {
  return (
    <>
     <PopularSlide/>
      <BrandSlider /> 
      <About />
      <h1 style={{ fontSize: '30px' }}>Main Page</h1>
    </>
  )
}
