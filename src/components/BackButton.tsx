import React from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

export default function BackButton() {
    const navigate = useNavigate()

  return (
    <div className="bg-gray-300 rounded-full my-5 mx-2 w-11 h-11 flex items-center justify-center">
        <button onClick={()=> navigate(-1)}>
            <MdKeyboardArrowLeft className="text-2xl text-secondary-blue" />
        </button>
    </div>
  )
}
