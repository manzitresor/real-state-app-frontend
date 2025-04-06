
export default function ExploreSection() {
  return (
    <section>
      <div>
        <div>
            <h1>Based on your location</h1>
            <p>some of our picked properties near you location</p>
        </div>
        <div>
            {/* Categories */}
            <ul>
                <li>
                    <span>Rent</span>
                </li>
                <li>
                    <span>Buy</span>
                </li>
                <li>
                    <span>Sell</span>
                </li>
            </ul>
            <div>
                <input type="text" placeholder="Search......"/>
            </div>
        </div>
      </div>

      <div></div>
    </section>
  )
}
