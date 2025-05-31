import React from 'react'

function CoverageArea() {
  return (
    <div className='max-w-7xl mx-auto px-8 lg:py-28 md:py-20 py-16'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 shadow-xl rounded-lg overflow-hidden'>
            <div className='bg-green-800 flex items-center lg:order-0 md:order-1 order-1'>
                <div className='lg:px-12 md:px-8 px-5 lg:py-5 md:py-8 py-5'>
                    <p className='md:text-3xl text-2xl font-extrabold text-white'>Ready to start?</p>
                    <p className='md:text-3xl text-2xl font-extrabold text-white'>Locate our coverage area</p>
                    <p className='lg:mt-4 md:mt-4 mt-2 lg:text-lg md:text-base text-sm leading-6 text-gray-200'>Dot Internet is spread almost everywhere
                    in Dhaka city. Check the availability of all coverage areas in Dhaka.</p>
                    <a className='relative lg:mt-8 md:mt-8 mt-3 bg-white border border-transparent rounded-md shadow lg:px-5 md:px-5 px-3 lg:py-3 md:py-2 
                    py-1 inline-block items-center text-base font-medium text-green-600 hover:bg-green-50' href="/coverage">Coverage Area</a>
                </div>
            </div>
            <div className='lg:order-1 md:order-0 order-0'>
                <img loading='lazy' width='1280' height='883' decoding='async'  className='w-full h-full'  src="/images/coverage.webp" alt="Coverage Area Image" />
            </div>
        </div>
    </div>
  )
}

export default CoverageArea