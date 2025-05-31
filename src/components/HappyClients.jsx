import React from 'react'
import Marquee from 'react-fast-marquee'

function HappyClients() {
  return (
    <div className='max-w-7xl mx-auto mt-8 py-14 px-5 md:px-8'>
        <div className='sm:flex sm:flex-col sm:align-left'>
            <h1 className='lg:text-4xl md:text-3xl text-2xl font-extrabold text-gray-900 sm:text-left dark:text-gray-100'>
            Happy clients
            </h1>
            <p className='mt-3 lg:text-xl md:text-xl text-base text-gray-500 sm:text-left'>
            Some of our happy clients using Dot's fastest internet.
            </p>
        </div>
        <div>
            <div className='max-w-7xl py-12 '>
                <div className=''>
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-500">
                <Marquee className="d-flex">
                  <div className="">
                    <img src="/images/brand-01.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-02.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-03.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-04.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-05.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-06.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-07.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-08.png" alt="" />
                  </div>
                </Marquee>
              </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HappyClients