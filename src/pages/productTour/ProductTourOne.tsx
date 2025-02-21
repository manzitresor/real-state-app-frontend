import ProductTour from "../../components/productTour/ProductTour";
import TourNavigation from "../../components/productTour/TourNavigation";
import tourOneImg from '../../assets/Rectangle 6.png'
import tourOneImgDesktop from '../../assets/element.svg'

const tourContent = {
  image: tourOneImg,
  imgdesktop: tourOneImgDesktop,
  title: 'Find best place to stay in good price ',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
  path: '/onboarding/productTour-2',
  progress: 100,
}

export default function ProductTourOne() {
  return (
    <div className="h-screen">
      <TourNavigation />
      <ProductTour {...tourContent}></ProductTour>
    </div>
  )
}
