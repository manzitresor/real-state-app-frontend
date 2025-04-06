import Navbar from '../../components/shared/Navbar'
import ExploreSection from './ExploreSection'
import HeroSection from './HeroSection'
import NewSection from './NewSection'



export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection />
      <NewSection/>
      <ExploreSection/>
    </main>
  )
}
