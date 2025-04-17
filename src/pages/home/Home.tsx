import Navbar from '../../components/shared/Navbar'
import ExploreSection from './ExploreSection'
import HeroSection from './HeroSection'
import LandlordsSection from './LandlordsSection'
import NewSection from './NewSection'



export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection />
      <NewSection/>
      <ExploreSection/>
      <LandlordsSection/>
    </main>
  )
}
