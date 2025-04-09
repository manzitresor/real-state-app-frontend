import cardOneImage from '../assets/card1Image.svg'
import cardTwoImage from '../assets/cardtwoImage.svg'
import cardThreeImage from '../assets/card3Image.svg'
import cardFourImage from '../assets/Card4Image.svg'
import cardFiveImage from '../assets/Card5Image.svg'
import cardSixImage from '../assets/card6Image.svg'

import { PropertyList } from '../types/interface'

const propertyData: PropertyList[] = [
  {
    id: 1,
    image: cardOneImage,
    price: 2095,
    name: 'Palm Harbor',
    description: '2699 Green Valley, Highland Lake, FL',
    beds: 3,
    bathRooms: 2,
    size: '5x7 m²',
  },
  {
    id: 2,
    image: cardTwoImage,
    price: 2700,
    name: 'Beverly Springfield',
    description: '2821 Lake Sevilla, Palm Harbor, TX',
    beds: 4,
    bathRooms: 2,
    size: '5x7 m²',
  },
  {
    id: 3,
    image: cardThreeImage,
    price: 4550,
    name: 'Faulkner Ave',
    description: '909 Woodland St, Michigan, IN',
    beds: 4,
    bathRooms: 3,
    size: '5x7 m²',
  },
  {
    id: 4,
    image: cardFourImage,
    price: 2400,
    name: 'St. Crystal',
    description: '210 US Highway, Highland Lake, FL',
    beds: 4,
    bathRooms: 2,
    size: '5x7 m²',
  },
  {
    id: 5,
    image: cardFiveImage,
    price: 1500,
    name: 'Cove Red',
    description: '243 Curlew Road, Palm Harbor, TX',
    beds: 3,
    bathRooms: 2,
    size: '5x7 m²',
  },
  {
    id: 6,
    image: cardSixImage,
    price: 1600,
    name: 'Tarpon Bay',
    description: '103 Lake Shores, Michigan, IN',
    beds: 4,
    bathRooms: 1,
    size: '5x7 m²',
  },
]

export default propertyData
