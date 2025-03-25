import Navbar from '../components/Navbar'
import heroImg from '../assets/heroImg.svg'
export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <section className="grid grid-cols-12 h-screen">
        <div className="col-span-6  py-14 px-20 space-y-4">
          <h1 className='font-bold text-4xl'>Buy, rent, or sell your property easily</h1>
          <p className='text-xl text-gray-800'>A great platform to buy, sell, or even rent your properties without any commisions.</p>
        </div>
        <div className="col-span-6 h-[36rem] relative">
          <img src={heroImg} alt="hero-section image" className='w-full h-full '/>
        </div>
      </section>
    </main>
  )
}
