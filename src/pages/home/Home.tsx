import Navbar from '../../components/shared/Navbar'
import HeroSection from './HeroSection'
import NewSection from './NewSection'



export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <HeroSection />
      <NewSection/>
    </main>
  )
}
