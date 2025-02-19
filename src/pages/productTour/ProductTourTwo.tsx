import ProductTour from "../../components/productTour/ProductTour";
import TourNavigation from "../../components/productTour/TourNavigation";
import tourTwoImg from '../../assets/Rectangle7.svg'

const tourContent = {
  image: tourTwoImg,
  title: 'Fast sell your propertyin just one click ',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
  path: '/onboarding/productTour-3',
  progress: 50,
}

export default function ProductTourTwo() {
  return (
    <div className="h-screen">
      <TourNavigation/>
      <ProductTour {...tourContent}></ProductTour>
    </div>
  )
}
