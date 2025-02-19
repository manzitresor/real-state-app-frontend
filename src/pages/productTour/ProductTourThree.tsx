import ProductTour from "../../components/productTour/ProductTour";
import TourNavigation from "../../components/productTour/TourNavigation";
import tourThreeImg from '../../assets/Rectangle8.svg'

const tourContent = {
  image: tourThreeImg,
  title: 'Fast sell your propertyin just one click ',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
  path: '/onboarding/productTour-3',
  progress: 30,
}

export default function ProductTourThree() {
  return (
    <div className="h-screen">
        <TourNavigation/>
        <ProductTour {...tourContent}></ProductTour>
    </div>
  )
}
