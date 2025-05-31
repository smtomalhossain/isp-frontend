import React from 'react'
import { GoCheck } from "react-icons/go";
import { AiFillFire } from "react-icons/ai";



function PricingCard() {
    return (
        <>
            <div className='max-w-7xl mx-auto lg:py-24 md:py-24 py-16 px-5 md:px-8 lg:pb-28'>
                <div className='sm:flex sm:align-left'>
                    <div className='flex-auto'>
                        <h1 className='lg:text-4xl md:text-3xl text-2xl font-extrabold text-gray-900 sm:text-left dark:text-gray-100'>
                            Pricing Plans
                        </h1>
                        <p className='mt-3 lg:text-xl md:text-xl text-base text-gray-500 sm:text-left'>
                            Choose a package that suits your budget & business.
                        </p>
                    </div>
                    <div className='lg:flex md:flex grid items-center gap-5 mt-6 sm:mt-0'>
                        <a target='_blank' className='px-4 py-3 rounded-lg bg-blue-600 hover:bg-gray-900 dark:hover:bg-blue-700
                         text-white shadow-xl text-base' href="/">
                            BTRC Approved Tarrif
                        </a>
                        <a href="pricing" className='px-4 py-3 rounded-lg bg-blue-600 hover:bg-gray-900 dark:hover:bg-blue-700
                         text-white shadow-xl text-base'>All Packages</a>
                    </div>
                </div>


                <div className='grid grid-cols-1 gap-5 mt-16'>
                <div className='overflow-hidden dark:bg-gray-800 rounded-xl relative pricingCardBorder lg:border-[3px]
                 dark:lg:border-[1px] md:border-[3px] dark:md:border-[1px] border-[2px] border-[#ECEEF1] dark:border-gray-700'>
                    <div className='bg-[#F4F5F7] dark:bg-gray-700 w-96 h-[500px] lg:-rotate-[15deg] md:-rotate-[15deg] -rotate-[8deg]
                     absolute lg:-right-36 md:-right-44 -right-20 lg:-top-44 md:-top-44 -bottom-[350px] -z-10 dark:z-10'></div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 items-center z-10'>


                        <div className="lg:px-8 md:px-5 px-8 lg:pt-8 md:pt-5 pt-8 lg:pb-11 md:pb-5 pb-8">
                            <h2 className='text-lg leading-6 font-medium text-[#1F2937] dark:text-gray-100 flex items-center gap-1'>
                            <AiFillFire className='text-yellow-700 text-3xl' />
                                Gold+
                            </h2>
                            <p className='mt-3 text-sm text-[#A2A5AB] dark:text-gray-200'>
                                Choose a package and start your internet journey
                            </p>
                            <p className="lg:mt-8 md:mt-5 mt-8">
                                <span className='lg:text-2xl md:text-xl text-xl font-extrabold text-white lg:px-9 md:px-4 px-5 lg:py-4 
                                md:py-3 py-3 shadow-lg bg-[#F8718C] rounded-t-2xl rounded-r-2xl'>
                                    40 Mbps
                                </span>
                            </p>
                        </div>


                        <div className='lg:border-x-[1px] md:border-x-[1px] border-x-0 border-[#ECEEF1] dark:border-gray-700 lg:px-5 
                        md:px-2 px-5 lg:mt-0 md:mt-0 mt-5 lg:py-12 md:py-5 py-2 grid grid-cols-1 gap-2'>
                            <li className='flex space-x-3'>
                            <GoCheck className='flex-shrink-0 h-5 w-5 text-green-500' />
                                <span className='text-sm text-gray-500 dark:text-gray-400'>100 Mbps BDIX and Other Speed</span>
                            </li>
                            <li className='flex space-x-3'>
                            <GoCheck className='flex-shrink-0 h-5 w-5 text-green-500' />
                                <span className='text-sm text-gray-500 dark:text-gray-400'>4K Youtube and Facebook Stream.</span>
                            </li>
                            <li className='flex space-x-3'>
                            <GoCheck className='flex-shrink-0 h-5 w-5 text-green-500' />
                                <span className='text-sm text-gray-500 dark:text-gray-400'>Optical Fiber Connection</span>
                            </li>
                        </div>


                        <div className='px-5 grid grid-cols-1 gap-2'>
                            <li className='flex space-x-3'>
                            <GoCheck className='flex-shrink-0 h-5 w-5 text-green-500' />
                            <span className='text-sm text-gray-500 dark:text-gray-400'>IPv6 Public IP Only</span>
                            </li>
                            <li className='flex space-x-3'>
                            <GoCheck className='flex-shrink-0 h-5 w-5 text-green-500' />
                            <span className='text-sm text-gray-500 dark:text-gray-400'>24/7 Phone and Online Support</span>
                            </li>
                            <li className='flex space-x-3'>
                            <GoCheck className='flex-shrink-0 h-5 w-5 text-green-500' />
                            <span className='text-sm text-gray-500 dark:text-gray-400'>1:8 Contention Ratio</span>
                            </li>
                        </div>


                        <div className='p-5 lg:mt-0 md:mt-0 mt-12 lg:mr-5 md:mr-5 mr-0 flex flex-col justify-center lg:items-end md:items-end items-center z-10'>
                            <p>
                                <span className='text-4xl font-extrabold text-gray-900 dark:text-gray-100'>TK1050</span>
                                <span className='text-base font-medium text-gray-500 dark:text-gray-200'>/mo</span>
                                <a target='_blank' rel='external'  className='mt-3 block bg-gray-800 border border-gray-800 rounded-md
                                 py-2 text-sm font-semibold text-white text-center hover:bg-blue-600 border-none w-32' href="/">
                                Buy Gold+
                                </a>
                            </p>
                        </div>
                    </div>
                    

                </div>
                <div className='flex justify-center items-center mt-12'>
                            <a className='px-8 py-3 bg-blue-600 hover:bg-gray-900 dark:hover:bg-blue-700 transition-all text-white rounded-xl font-semibold' href="/">View Other Packages</a>
                        </div>
            </div>

            </div>

            
        </>
    )
}

export default PricingCard