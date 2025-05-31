import React from 'react'
import { IoHome } from "react-icons/io5";


function ServicesCard() {
  return (
    <>
    <div className='lg:px-8 max-w-7xl lg:mx-auto md:mx-12 mx-6 lg:pt-16 lg:pb-96 md:pb-96 pb-96 md:py-10 py-0'>
    <div className='lg:mb-12 md:mb-12 mb-8'>
    <h1 className='lg:text-4xl md:text-3xl text-2xl font-extrabold text-gray-900 sm:text-left dark:text-gray-100'>
    Services & Solutions
    </h1>
    <p className='mt-3 lg:text-xl md:text-xl text-base text-gray-500 sm:text-left'>
    Join today to take advantage of Dot Internet's great features.
    </p>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6'>
      <div className="relative group">
        <div className="absolute top-0">
          <div className='dark:bg-gray-800 bg-white py-5 px-5 rounded-lg shadow-lg hover:shadow-xl transition duration-500 h-80'>
            <div className='text-blue-500 text-5xl'>
            <IoHome />
            </div>
            <p className='mt-5 text-lg leading-6 font-semibold text-gray-900 dark:text-gray-200'>
            Home Broadband Internet
            </p>
            <dd className='mt-2 text-base text-gray-500 dark:text-gray-400'>
            Dot Internet is providing one of the fastest broadband internet and network solutions throughout Dhaka, reliable for both gamers and regular users.
            </dd>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default ServicesCard