import Navbar from '../../components/shared/Navbar'
import Contact from './Contact'
import ExploreSection from './ExploreSection'
import Footer from './Footer'
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
      <Contact/>
      <Footer/>
    </main>
  )
}
