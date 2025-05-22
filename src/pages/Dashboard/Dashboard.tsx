import { Outlet } from 'react-router-dom'
import DashboardSidebar from '../../components/DashboardSidebar'

export default function Dashboard() {
  return (
    <div className='grid grid-cols-12 h-screen w-full'>
      <div className='col-span-2'>
        <DashboardSidebar/>
      </div>
      <div className='bg-gray-400 col-span-10'>
        <Outlet/>
      </div>
    </div>
  )
}
