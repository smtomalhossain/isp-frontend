import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='bg-gray-800 dark:border-t dark:border-t-gray-700'>
      <div className='max-w-7xl mx-auto pt-16 py-12 px-5 lg:py-16 lg:px-8 lg:pt-16'>
      <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
        <div className='grid grid-cols-2 gap-8 xl:col-span-2'>
          <div className='md:grid md:grid-cols-2 md:gap-8'>
            <div className='mt-6 space-y-4 gap-4'>
              <h1 className='text-xl font-bold text-white tracking-wider uppercase'>Contact Us</h1>
              <div className='mt-6 space-y-4'>
                <p className="text-white">
                  502 New design str, melbourne, san francisco, CA 94110, united
                  states of america​.
                </p>
                
                <p className="text-white">
                  <a href="tel:+880 1768-447320">+880 1768-447320</a>{" "}
                </p>
                
                <p className="text-white">info@codekori.com</p>
                <div className="social-icon flex gap-5">
                  <a className="text-white text-2xl" href="">
                    <BsFacebook />
                  </a>
                  <a className="text-white text-2xl" href="">
                  <BsLinkedin />

                  </a>
                  <a className="text-white text-2xl" href="">
                    <BsInstagram />
                  </a>
                  <a className="text-white text-2xl" href="">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </footer>
    
  )
}

export default Footer