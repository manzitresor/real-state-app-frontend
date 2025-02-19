import ProductTour from "../../components/productTour/ProductTour";
import TourNavigation from "../../components/productTour/TourNavigation";
import tourOneImg from '../../assets/Rectangle 6.png'

const tourContent = {
  image:tourOneImg,
  title:'Find best place to stay in good price ',
  description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
  progress: 30
}

export default function ProductTourOne() {
  return (
    <div className="h-screen">
      <TourNavigation />
      <ProductTour {...tourContent}></ProductTour>
    </div>
  )
}
