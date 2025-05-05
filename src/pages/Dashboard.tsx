import React from 'react'
import DashboardSidebar from '../components/DashboardSidebar'

export default function Dashboard() {
  return (
    <div className='grid grid-cols-12 h-screen w-full'>
      <div className='col-span-2'>
        <DashboardSidebar/>
      </div>
      <div className='bg-green-500 col-span-10'></div>
    </div>
  )
}
