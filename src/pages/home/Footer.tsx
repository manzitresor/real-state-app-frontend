import logo from '../../assets/logo.png'

export default function Footer() {
  return (
    <section className="py-8 px-16">
      <div className="flex justify-between flex-col md:flex-row">
        <div className="flex items-center text-lg font-bold text-secondary-blue-600 mr-4">
          <img src={logo} alt="kwanda-estate-logo" width={64} />
          <span className="text-green-primary-400">Kwanda </span>- Estate
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-32 gap-y-10">
          <ul className="space-y-2 text-black/50">
            <li className="font-bold mb-4 text-black">SELL A HOME </li>
            <li>Request an offer</li>
            <li>Pricing</li>
            <li>Reviews</li>
            <li>Stories</li>
          </ul>
          <ul className="space-y-2 text-black/50">
            <li className="font-bold mb-4 text-black">BUY, RENT AND SELL</li>
            <li>Request an offer</li>
            <li>Pricing</li>
            <li>Reviews</li>
            <li>Stories</li>
          </ul>
          <ul className="space-y-2 text-black/50">
            <li className="font-bold mb-4 text-black">ABOUT</li>
            <li>Request an offer</li>
            <li>Pricing</li>
            <li>Reviews</li>
            <li>Stories</li>
          </ul>
          <ul className="space-y-2 text-black/50">
            <li className="font-bold mb-4 text-black">BUY A HOME</li>
            <li>Buy</li>
            <li>Finance</li>
          </ul>
          <ul className="space-y-2 text-black/50">
            <li className="font-bold mb-4 text-black">TERMS & PRIVACY</li>
            <li>Trust & Safety</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
          <ul className="space-y-2 text-black/50">
            <li className="font-bold mb-4 text-black">RESOURCES</li>
            <li>Blog</li>
            <li>Guides</li>
            <li>FAQ</li>
            <li>Help Center</li>
          </ul>
        </div>
      </div>
      <div className='border-t-2 pt-6 mt-2'>
        <p>©2021 Estatery. All rights reserved</p>
      </div>
    </section>
  )
}
