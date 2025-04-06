import Button from "../../components/shared/Button";
import Statistic from "../../components/Statistic";
import { BsFillHouseCheckFill } from "react-icons/bs";
import { MdOutlineAttachMoney } from 'react-icons/md'
import { IoIosQrScanner } from 'react-icons/io'
import { BsFillHouseDownFill } from 'react-icons/bs'

const propertiesData = [
  {
    id: 1,
    title: 'Property Insurance',
    description:
      'We offer our customer property protection of liability coverage and insurance for their better life.',
    icon: BsFillHouseCheckFill,
  },
  {
    id: 2,
    title: 'Best Price',
    description:
      'Not sure what  you should be charging for your property? No need to worry, let us do the numbers for you.',
    icon: MdOutlineAttachMoney,
  },
  {
    id: 3,
    title: 'Lowest Commission',
    description:
      'You no longer have to negotiate commissions and haggle with other agents it only cost 2%!',
    icon: BsFillHouseDownFill,
  },
  {
    id: 4,
    title: 'Overall Control',
    description:
      'Get a virtual tour, and schedule visits before you rent or buy any properties. You get overall control.',
    icon: IoIosQrScanner,
  },
]


export default function NewSection() {
  return (
    <section className="bg-white h-full grid md:grid-cols-12 pt-28 pb-6">
      <div className="md:col-span-5 py-14 px-11 md:mx-16 space-y-4 bg-gray-200 rounded-lg">
        <h1 className="text-secondary-blue-400 font-bold text-3xl">
          The new way to find your new home
        </h1>
        <p>Find your dream place to live in with more than 10k+ properties listed.</p>
        <Button styles={'secondary-blue-400'}>Browse Properties</Button>
      </div>
      <div className="md:col-span-7">
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:gap-6 mx-4 md:mx-6 my-4">
          {propertiesData.map(data => (
            <Statistic
              key={data.id}
              title={data.title}
              description={data.description}
              icon={data.icon}
            ></Statistic>
          ))}
        </div>
      </div>
    </section>
  )
}
