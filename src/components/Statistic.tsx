import { StatisticProps } from "../types/interface";
import { FaKey } from 'react-icons/fa6'

export default function Statistic({icon:Icon,title,description}:StatisticProps) {
  return (
    <div>
      <div className="h-16 w-16 relative rounded-full bg-green-primary-200 flex items-center justify-center">
        <Icon className="text-white text-3xl" />
        <div className="h-4 w-4 bg-secondary-blue-400 rounded-sm flex items-center justify-center absolute bottom-1 right-1">
          <FaKey className="text-white w-2 h-2" />
        </div>
      </div>
      <div>
        <h4 className="text-xl font-bold text-green-primary-600">{title}</h4>
        <p className="text-black/70 text-base">{description}</p>
      </div>
    </div>
  )
}
