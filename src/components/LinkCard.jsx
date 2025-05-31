import React from 'react'

function LinkCard() {
    return (
        <>
            <div className='max-w-7xl mx-auto lg:py-28 lg:pt-17 md:py-28 py-12 lg:px-8 md:px-8 px-5 lg:mb-12 md:mb-12 mb-8'>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 lg:gap-6 md:gap-5 gap-4'>
                    <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
                        <img loading='lazy' width='500' height='500' decoding='async' src="/images/pay.gif" alt="Gif" />
                        <a href="/pay-bill">
                            <div className='relative bg-pink-100 px-8 py-6'>
                                <h1 className='text-sm md:text-xl lg:text-xl font-semibold text-gray-600 text-center'>How to Pay?</h1>
                            </div>
                        </a>
                    </div>
                </div>
            </div>


        </>


    )
}

export default LinkCard