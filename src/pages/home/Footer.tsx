import logo from '../../assets/logo.png'

export default function Footer() {
  return (
    <section>
      <div className='flex justify-between'>
        <div className="flex items-center text-lg font-bold text-secondary-blue-600 mr-4">
          <img src={logo} alt="kwanda-estate-logo" width={64} />
          <span className="text-green-primary-400">Kwanda </span>- Estate
        </div>
        <div>
          <ul>
            <li className='font-bold'>SELL A HOME</li>
            <li>Request an offer</li>
            <li>Pricing</li>
            <li>Reviews</li>
            <li>Stories</li>
          </ul>
        </div>
      </div>
      <div>
        <p>©2021 Estatery. All rights reserved</p>
      </div>
    </section>
  )
}
